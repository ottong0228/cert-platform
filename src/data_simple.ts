export const certificates = [
  {
    id: 'edu1',
    name: '中小学教师资格证书',
    category: '教育类',
    level: '分学段',
    issuingAuthority: '教育部',
    inNationalCatalog: false,
    tags: ['刚需证书', '一年两考'],
    hotScore: 60,
    description: '从事教育教学工作的国家准入类职业资格证书',
    requirements: {
      education: '幼儿园：幼儿师范学校毕业及以上',
      age: '年满18周岁',
      major: '不限专业',
      otherConditions: ['需普通话证书'],
      exemptions: '无',
    },
    exam: {
      subjects: ['综合素质+教育教学知识与能力'],
      form: '笔试+面试',
      passStandard: '笔试70分合格',
      fee: '约50-70元/科',
      locationType: '全国统考',
    },
    timeline: {
      registrationTime: '每年1月和7月',
      examTime: '3月和9月',
      resultTime: '考后约1个月',
      certificateTime: '认定通过后约1-3个月',
      scoreValidity: '笔试单科成绩2年',
      certificateValidity: '终身有效',
      continuingEducation: '是',
    },
    career: {
      positions: ['公办/民办学校教师'],
      salaryRange: { junior: '10万/年', senior: '20万/年' },
      demandCities: ['全国普遍需求'],
      industryTrend: '稳定',
      relatedCertificates: ['普通话等级证书'],
    },
    preparation: {
      suggestedDuration: '2-3个月',
      materials: ['考试大纲'],
      hasPastPapers: false,
    },
    policyChanges: '师范生免试认定改革',
  },
];

export const crowdOptions = [
  '大学生',
  '在职人员',
  '转行人员',
  '自由职业者',
  '待业人员',
  '退休人员'
];

export const purposeOptions = [
  '不限',
  '求职加分',
  '职称评定',
  '技能提升',
  '政策补贴',
  '积分落户',
  '个人兴趣'
];
