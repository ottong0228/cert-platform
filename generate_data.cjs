// Node.js script to convert JSON data to data.ts
const fs = require('fs');
const path = require('path');

const jsonFile = 'C:\\Users\\Administrator\\.qclaw\\workspace-54nuktoh8cd83kjj\\certificates_data.json';
const dataFile = path.join(__dirname, 'src', 'data.ts');

const raw = JSON.parse(fs.readFileSync(jsonFile, 'utf8'));
console.log(`Loaded ${raw.length} records from JSON`);

const certs = raw.map((r, i) => ({
  id: r['证书编码'] || `cert${i + 1}`,
  name: r['证书全称'] || '',
  category: r['所属大类'] || '',
  level: r['等级'] || '',
  issuingAuthority: r['发证机关'] || '',
  inNationalCatalog: r['是否在国家目录'] === '是',
  tags: (r['证书标签'] || '').split(/[,，、]/).filter(Boolean),
  hotScore: Number(r['热度评分']) || 50,
  description: r['证书简介'] || '',
  requirements: {
    education: r['学历要求'] || '',
    age: r['年龄要求'] || '',
    major: r['专业要求'] || '',
    workYears: r['工作年限'] || '',
    otherConditions: (r['其他条件'] || '').split(/[,，、]/).filter(Boolean),
    exemptions: r['免考政策'] || '',
  },
  exam: {
    subjects: (r['考试科目'] || '').split(/[,，、]/).filter(Boolean),
    form: r['考试形式'] || '',
    passStandard: r['及格标准'] || '',
    fee: r['费用'] || '',
    locationType: r['考试地点'] || '',
  },
  timeline: {
    registrationTime: r['报名时间'] || '',
    examTime: r['考试时间'] || '',
    resultTime: r['出成绩时间'] || '',
    certificateTime: r['出证时间'] || '',
    scoreValidity: r['成绩有效期'] || '',
    certificateValidity: r['证书有效期'] || '',
    continuingEducation: r['继续教育'] || '',
  },
  career: {
    positions: (r['就业方向'] || '').split(/[,，、]/).filter(Boolean),
    salaryRange: {
      junior: r['薪资_初级'] || '',
      mid: r['薪资_中级'] || '',
      senior: r['薪资_高级'] || '',
    },
    demandCities: (r['需求城市'] || '').split(/[,，、]/).filter(Boolean),
    industryTrend: (r['行业趋势'] || '稳定'),
    relatedCertificates: (r['相关证书'] || '').split(/[,，、]/).filter(Boolean),
  },
  preparation: {
    suggestedDuration: r['建议备考时长'] || '',
    materials: (r['备考资料'] || '').split(/[,，、]/).filter(Boolean),
    hasPastPapers: r['是否有真题'] === '有',
    notes: r['备注'] || '',
  },
  policyChanges: r['政策变化'] || '',
}));

const allCategories = ['不限', ...new Set(certs.map(c => c.category).filter(Boolean))];

const ts = `import { Certificate } from './types';

export const certificates: Certificate[] = ${JSON.stringify(certs, null, 2)};

export const crowdOptions = [
  '不限',
  '在校大学生',
  '应往届毕业生',
  '在职转行',
  '宝妈/自由职业',
  '退休人员',
];

export const purposeOptions = [
  '不限',
  '求职就业',
  '职称加薪',
  '积分落户',
  '补贴',
  '考公考编',
  '行业准入',
];

export const categories = ${JSON.stringify(allCategories)};

export const educationOptions = [
  '不限',
  '初中及以上',
  '高中/中专/中技',
  '大专',
  '本科',
  '硕士及以上',
];

export const workYearOptions = [
  '不限',
  '无经验要求',
  '1年以下',
  '1-3年',
  '3-5年',
  '5年以上',
];

export function filterCertificates(certs: Certificate[], filters: {
  keyword: string;
  category: string;
  education: string;
  workYears: string;
  sortBy: 'hotScore' | 'difficulty' | 'value';
  difficulty?: string;
}): Certificate[] {
  let result = [...certs];

  if (filters.keyword) {
    const kw = filters.keyword.toLowerCase();
    result = result.filter(c =>
      c.name.toLowerCase().includes(kw) ||
      c.description.toLowerCase().includes(kw) ||
      c.category.toLowerCase().includes(kw) ||
      c.tags.some(t => t.toLowerCase().includes(kw))
    );
  }

  if (filters.difficulty) {
    const d = filters.difficulty;
    if (d === '入门') {
      result = result.filter(c =>
        c.level?.includes('初级') || c.tags.some(t => t.includes('入门') || t.includes('零基础')) || c.hotScore >= 65
      );
    } else if (d === '进阶') {
      result = result.filter(c =>
        c.level?.includes('中级') || c.level?.includes('不分级') || (c.hotScore >= 50 && c.hotScore < 75)
      );
    } else if (d === '高阶') {
      result = result.filter(c =>
        c.level?.includes('高级') || c.level?.includes('高含金量') || c.tags.some(t => t.includes('高难度')) || c.hotScore < 55
      );
    }
  }

  if (filters.category && filters.category !== '不限' && filters.category !== '全部') {
    result = result.filter(c => c.category === filters.category);
  }

  if (filters.education && filters.education !== '不限') {
    result = result.filter(c => c.requirements.education.includes(filters.education));
  }

  if (filters.workYears && filters.workYears !== '不限') {
    const wy = filters.workYears;
    result = result.filter(c => {
      const reqWY = c.requirements.workYears || '';
      if (reqWY.includes('无') || reqWY.includes('无需') || reqWY.includes('应往届') || reqWY.length === 0) return true;
      if (wy === '无经验要求') return true;
      return true;
    });
  }

  if (filters.sortBy === 'hotScore') {
    result.sort((a, b) => b.hotScore - a.hotScore);
  } else if (filters.sortBy === 'difficulty') {
    const levelOrder: Record<string, number> = { '初级': 1, '中级': 2, '高级': 3 };
    result.sort((a, b) => (levelOrder[a.level] || 2) - (levelOrder[b.level] || 2));
  } else if (filters.sortBy === 'value') {
    result.sort((a, b) => b.hotScore - a.hotScore);
  }

  return result;
}

export function matchCertificates(answers: {
  education: string;
  major: string;
  workYears: string;
  purpose: string;
}, certs: Certificate[]): { match: Certificate[]; future: Certificate[] } {
  const match: Certificate[] = [];
  const future: Certificate[] = [];

  for (const cert of certs) {
    let score = 0;

    if (answers.education && answers.education !== '不限') {
      const reqEdu = cert.requirements.education;
      if (reqEdu.includes(answers.education)) score += 2;
      else if (reqEdu.includes('不限') || reqEdu.includes('无学历限制')) score += 1.5;
      else {
        const eduMap: Record<string, string[]> = {
          '硕士及以上': ['本科', '大专', '高中'],
          '本科': ['大专', '高中'],
          '大专': ['高中'],
        };
        const lower = eduMap[answers.education] || [];
        if (lower.some(e => reqEdu.includes(e))) score += 1;
      }
    } else {
      score += 1;
    }

    if (answers.major && answers.major !== '不限') {
      const reqMajor = cert.requirements.major || '';
      if (reqMajor.includes(answers.major) || reqMajor.includes('不限')) score += 2;
      else score += 0.5;
    } else {
      score += 1;
    }

    if (answers.purpose && answers.purpose !== '不限') {
      const purpose = answers.purpose;
      if (cert.description.includes(purpose)) score += 2;
      if (cert.tags.some(t => t.includes(purpose))) score += 1.5;
      if (cert.career.positions.some(p => p.includes(purpose))) score += 1.5;
      if (purpose === '职称加薪' && (cert.tags.includes('高含金量') || cert.tags.includes('刚需证书'))) score += 1;
      if (purpose === '行业准入' && (cert.level?.includes('初级') || cert.tags.includes('入门级'))) score += 1;
      if (purpose === '积分落户' && cert.inNationalCatalog) score += 1.5;
    } else {
      score += 0.5;
    }

    if (answers.workYears && answers.workYears !== '不限') {
      const reqWY = cert.requirements.workYears || '';
      if (reqWY.includes('无') || reqWY.includes('无需') || reqWY.includes('应往届') || reqWY.length === 0) score += 1.5;
      else if (answers.workYears === '5年以上') score += 1;
      else if (['3-5年', '1-3年'].includes(answers.workYears) && !reqWY.includes('5年')) score += 1;
    } else {
      score += 0.5;
    }

    if (cert.hotScore >= 70) score += 0.5;

    if (score >= 4) match.push(cert);
    else if (score >= 2) future.push(cert);
  }

  match.sort((a, b) => b.hotScore - a.hotScore);
  future.sort((a, b) => b.hotScore - a.hotScore);

  return { match, future };
}
`;

fs.writeFileSync(dataFile, ts, 'utf8');
console.log(`Written ${ts.length} bytes to ${dataFile}`);
console.log(`Certificates: ${certs.length}`);
