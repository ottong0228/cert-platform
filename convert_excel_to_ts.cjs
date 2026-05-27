const XLSX = require('xlsx');
const fs = require('fs');
const path = require('path');

// 读取Excel文件
const excelPath = 'E:/重要/AI项目/AI网页/证书资料完整版_31个证书.xlsx';
const workbook = XLSX.readFile(excelPath);
const sheetName = workbook.SheetNames[0];
const worksheet = workbook.Sheets[sheetName];

// 转换为JSON
const excelData = XLSX.utils.sheet_to_json(worksheet);

console.log(`成功读取 ${excelData.length} 条证书数据`);

// 转换函数
function convertToCertificateFormat(item, index) {
    // 生成ID
    const categoryPrefix = {
        '教育类': 'edu',
        '财会金融类': 'fin',
        '语言文字类': 'lang',
        '信息技术类': 'it',
        '医疗健康类': 'med',
        '建筑工程类': 'con',
        '法律类': 'law',
        '公共管理类': 'pub',
        '职业技能类': 'voc',
        '交通运输类': 'trans',
        '文化传媒类': 'cul',
    };
    
    let prefix = 'other';
    for (const [key, val] of Object.entries(categoryPrefix)) {
        if ((item['所属大类'] || '').includes(key)) {
            prefix = val;
            break;
        }
    }
    
    const certId = `${prefix}${index}`;
    
    // 转换布尔值
    const inCatalog = item['是否在职业资格目录'] === '是';
    const hasPastPapers = (item['是否有公开历年真题'] || '').includes('是') || (item['是否有公开历年真题'] || '').includes('有');
    const continuingEdu = item['是否需要继续教育'] === '是';
    
    // 处理数组字段
    const tagsStr = item['热度标签'] || '';
    const tags = tagsStr ? tagsStr.split('、').map(t => t.trim()).filter(t => t) : [];
    
    const otherConditionsStr = item['其他特殊要求'] || '';
    const otherConditions = otherConditionsStr ? otherConditionsStr.split('；').map(c => c.trim()).filter(c => c) : [];
    
    const positionsStr = item['考完后对口岗位'] || '';
    const positions = positionsStr ? positionsStr.split('、').map(p => p.trim()).filter(p => p) : [];
    
    const relatedStr = item['建议搭配考取的其他证书'] || '';
    const relatedCertificates = relatedStr ? relatedStr.split('、').map(r => r.trim()).filter(r => r) : [];
    
    const subjectsStr = item['考试科目列表'] || '';
    const subjects = subjectsStr ? [subjectsStr] : [];
    
    const materialsStr = item['指定教材名称'] || '';
    const materials = materialsStr ? materialsStr.split('、').map(m => m.trim()).filter(m => m) : [];
    
    // 解析薪资范围
    const salaryStr = item['初级到高级薪资区间参考'] || '';
    let salaryRange = {};
    if (salaryStr.includes('10') && salaryStr.includes('20')) {
        salaryRange = { junior: '10万/年', senior: '20万/年' };
    } else if (salaryStr.includes('6') && salaryStr.includes('15')) {
        salaryRange = { junior: '6万/年', senior: '15万/年' };
    }
    
    // 解析行业趋势
    const trendStr = (item['行业趋势'] || '').toLowerCase();
    let industryTrend = '稳定';
    if (trendStr.includes('增长') || trendStr.includes('上升')) {
        industryTrend = '增长';
    } else if (trendStr.includes('转型') || trendStr.includes('受影响')) {
        industryTrend = '转型';
    }
    
    // 构建证书对象
    const cert = {
        id: certId,
        name: item['证书全称'] || '',
        category: item['所属大类'] || '',
        level: item['等级'] || '',
        issuingAuthority: item['发证机关'] || '',
        inNationalCatalog: inCatalog,
        tags: tags,
        hotScore: 60,
        description: item['一句话简介'] || '',
        requirements: {
            education: item['学历要求'] || '无',
            age: item['年龄限制'] || '无',
            major: item['专业是否受限'] === '是' ? '受限' : '不限专业',
            otherConditions: otherConditions,
            exemptions: item['免考政策说明'] || '无',
        },
        exam: {
            subjects: subjects,
            form: item['考试形式'] || '',
            passStandard: item['通过标准'] || '',
            fee: item['大致费用'] || '',
            locationType: item['考试组织方式'] || '',
        },
        timeline: {
            registrationTime: item['每年报名时间段'] || '',
            examTime: item['考试月份'] || '',
            resultTime: item['成绩公布时间'] || '',
            certificateTime: item['证书领取时间'] || '',
            scoreValidity: item['成绩有效期'] || '',
            certificateValidity: item['证书有效期'] || '',
            continuingEducation: continuingEdu ? '是' : '否',
        },
        career: {
            positions: positions,
            salaryRange: salaryRange,
            demandCities: item['哪些城市需求量大'] ? [item['哪些城市需求量大']] : [],
            industryTrend: industryTrend,
            relatedCertificates: relatedCertificates,
        },
        preparation: {
            suggestedDuration: item['官方建议学习时长'] || '官方未明确',
            materials: materials,
            hasPastPapers: hasPastPapers,
        },
        policyChanges: item['近一两年政策变动'] || '',
    };
    
    // 添加工作年限要求
    const workYears = item['工作年限要求'];
    if (workYears && workYears !== '无') {
        cert.requirements.workYears = workYears;
    }
    
    return cert;
}

// 转换所有证书
const certificates = excelData.map((item, index) => {
    try {
        return convertToCertificateFormat(item, index + 1);
    } catch (e) {
        console.error(`处理第${index + 1}条数据时出错:`, e.message);
        console.error('证书名称:', item['证书全称']);
        return null;
    }
}).filter(c => c!== null);

console.log(`成功转换 ${certificates.length} 条证书`);

// 定义crowdOptions和purposeOptions
const crowdOptions = [
    '大学生',
    '在职人员',
    '转行人员',
    '自由职业者',
    '待业人员',
    '退休人员'
];

const purposeOptions = [
    '不限',
    '求职加分',
    '职称评定',
    '技能提升',
    '政策补贴',
    '积分落户',
    '个人兴趣'
];

// 生成TypeScript代码
let tsOutput = `import { Certificate } from './types';\n\n`;
tsOutput += `export const certificates: Certificate[] = ${JSON.stringify(certificates, null, 2)};\n\n`;
tsOutput += `export const crowdOptions = ${JSON.stringify(crowdOptions, null, 2)};\n\n`;
tsOutput += `export const purposeOptions = ${JSON.stringify(purposeOptions, null, 2)};\n`;

// 写入文件（UTF-8编码）
fs.writeFileSync(
    path.join(__dirname, 'src', 'data.ts'),
    '\ufeff' + tsOutput,  // 添加BOM以便Windows正确识别UTF-8
    'utf8'
);

console.log('转换完成！输出文件: src/data.ts');
console.log(`共转换 ${certificates.length} 条证书`);
console.log(`已添加 crowdOptions: ${crowdOptions.length} 个选项`);
console.log(`已添加 purposeOptions: ${purposeOptions.length} 个选项`);
