import { Certificate } from './types';

export const certificates: Certificate[] = [
  {
    id: 'edu1',
    name: '中小学教师资格证书',
    category: '教育类',
    level: '分学段（幼儿园/小学/初级中学/高级中学/中职文化课/中职专业课/中职实习指导）',
    issuingAuthority: '教育部教育考试院（考试组织）；各地教育局（认定发证）',
    inNationalCatalog: false,
    tags: ['刚需证书', '一年两考', '报考门槛低', '教资认定必备'],
    hotScore: 60,
    description: '从事教育教学工作的国家准入类职业资格证书，是当老师的必备门槛',
    requirements: {
      education: '幼儿园：幼儿师范学校毕业及以上；小学：大专及以上；初中/高中/中职：本科及以上',
      age: '年满18周岁至未达到法定退休年龄',
      major: '不限专业',
      otherConditions: ['需普通话证书（语文二甲/其他二乙）；需体检合格；须在户籍/居住证/学籍所在地报考'],
      exemptions: '教育类研究生和公费师范生可免试认定；部分省份师范生可免试认定',
    },
    exam: {
      subjects: ['幼儿园：综合素质+保教知识与能力；小学：综合素质+教育教学知识与能力；中学：综合素质+教育知识与能力+学科知识与教学能力'],
      form: '笔试（纸笔考试）+ 面试（结构化问答+试讲+答辩）',
      passStandard: '笔试：报告分70分/科合格（卷面150分折合成120分制），单科成绩有效期2年；面试：合格/不合格',
      fee: '笔试约50-70元/科，面试约200-350元（各省不同）',
      locationType: '全国统考（NTCE），各省组织笔试面试，各地教育局组织认定',
    },
    timeline: {
      registrationTime: '上半年笔试报名约1月7-12日，面试报名约4月中下旬；下半年笔试报名约7月5-8日，面试报名约11月上旬',
      examTime: '笔试3月、9月；面试5月、12月',
      resultTime: '笔试后约1个月；面试后约1个月',
      certificateTime: '认定通过后约1-3个月领取',
      scoreValidity: '笔试单科成绩2年',
      certificateValidity: '终身有效，但需每5年定期注册一次（未注册不失效，但影响续聘）',
      continuingEducation: '是，教师需按规定参加继续教育培训',
    },
    career: {
      positions: ['公办/民办学校教师', '幼儿园教师', '培训机构讲师', '在线教育教师'],
      salaryRange: { junior: '10万/年', senior: '20万/年' },
      demandCities: ['全国普遍需求，三四线城市及农村教师缺口较大，一线城市竞争激烈'],
      industryTrend: '稳定' as const,
      relatedCertificates: ['普通话等级证书', '心理咨询师', '家庭教育指导师', 'TESOL（英语教师）'],
    },
    preparation: {
      suggestedDuration: '官方未明确建议，一般备考周期2-3个月/轮',
      materials: ['无统一指定教材，考试大纲免费在官网下载；市面常见：中公/华图/粉笔教材'],
      hasPastPapers: false,
    },
    policyChanges: '师范生免试认定改革持续推进（2020-2022年政策）；考试大纲定期修订；笔试成绩全国通用互认',
  },
  {
    id: 'lang2',
    name: '普通话水平测试等级证书',
    category: '语言文字类（教育类辅助证书）',
    level: '三级六等（一级甲等/一级乙等/二级甲等/二级乙等/三级甲等/三级乙等）',
    issuingAuthority: '国家语言文字工作委员会（统一印制）；省级语言文字工作部门或省级测试机构发放',
    inNationalCatalog: false,
    tags: ['教资必备', '费用低', '周期短', '无门槛'],
    hotScore: 60,
    description: '证明应试人普通话水平的等级证书，教师、播音主持等职业的必备语言能力证明',
    requirements: {
      education: '无学历限制',
      age: '无年龄限制',
      major: '不限专业',
      otherConditions: ['两次测试间隔需3个月以上（部分省份要求）；须持身份证原件参加测试'],
      exemptions: '无免考政策',
    },
    exam: {
      subjects: ['读单音节字词（100个音节）+ 读多音节词语（100个音节）+ 朗读短文（400个音节）+ 命题说话（3分钟）'],
      form: '机测（计算机辅助普通话水平测试，口试）',
      passStandard: '满分100分，60分及以上即有证书；语文教师需二级甲等（87分）及以上，其他教师需二级乙等（80分）及以上',
      fee: '学生约25元，社会人员约50元（各省不同，如西藏55元、上海50元）',
      locationType: '各省/各地市测试站自行组织，非全国统考，全年滚动安排',
    },
    timeline: {
      registrationTime: '全年滚动报名，各测试站自行安排（一般每月或每季度一次）',
      examTime: '全年各月均有（具体看各测试站安排）',
      resultTime: '测试结束后15-30个工作日',
      certificateTime: '成绩发布后约25-40个工作日（纸质证书），电子证书即时可查',
      scoreValidity: '长期有效（2022年教育部令第51号后取消5年有效期限制）',
      certificateValidity: '长期有效',
      continuingEducation: '否',
    },
    career: {
      positions: ['教师（语文/幼师要求较高）', '播音主持', '公务员', '窗口服务人员', '导游'],
      salaryRange: {},
      demandCities: ['全国普遍需求，与教师资格认定量正相关'],
      industryTrend: '稳定' as const,
      relatedCertificates: ['教师资格证（核心搭配）'],
    },
    preparation: {
      suggestedDuration: '官方未明确，一般建议备考1-2周',
      materials: ['《普通话水平测试实施纲要》（2021年版起话题增至50则）'],
      hasPastPapers: false,
    },
    policyChanges: '2022年《普通话水平测试管理规定》修订：电子证书与纸质证书同等效力；取消5年有效期；取消考前10分钟备测（2023年4月起）',
  },
  {
    id: 'fin3',
    name: '初级会计专业技术资格证书',
    category: '财会金融类',
    level: '初级',
    issuingAuthority: '财政部、人力资源和社会保障部',
    inNationalCatalog: false,
    tags: ['含金量高', '报考门槛低', '一年一考', '财会入门首选'],
    hotScore: 60,
    description: '会计行业入门级专业技术资格证书，从事会计工作的基础门槛和求职加分项',
    requirements: {
      education: '高中毕业（含高中、中专、职高和技校）及以上学历',
      age: '无年龄限制',
      major: '不限专业',
      workYears: '无工作年限要求',
      otherConditions: ['2025年起须先在全国会计人员统一服务管理平台完成信息采集；按属地原则报名（工作地/学籍地/居住地）'],
      exemptions: '无免考政策，须通过全部2科',
    },
    exam: {
      subjects: ['《初级会计实务》+《经济法基础》'],
      form: '机考（无纸化闭卷考试），两科连续考试',
      passStandard: '1个考试年度内通过全部2科，每科满分100分，60分合格；两科连续考试，时间不能混用',
      fee: '约50-70元/科（各省不同，如陕西70元/科、重庆56元/科）',
      locationType: '全国统考（统一组织、统一大纲、统一命题、统一合格标准）',
    },
    timeline: {
      registrationTime: '每年1月（如2026年为1月5日-27日，各省在此区间内自行确定）',
      examTime: '每年5月（如2026年为5月16日-18日，共6个批次）',
      resultTime: '考后约1个月（一般6月中旬）',
      certificateTime: '成绩公布后3-6个月（各地不同）',
      scoreValidity: '1年（须在一个考试年度内通过全部科目）',
      certificateValidity: '终身有效',
      continuingEducation: '是，取得证书后每年需参加会计人员继续教育',
    },
    career: {
      positions: ['出纳', '会计助理', '财务会计', '成本会计', '税务助理', '审计助理'],
      salaryRange: { junior: '5000万/年', senior: '15000万/年' },
      demandCities: ['北京', '上海', '深圳', '广州', '杭州', '成都等一线城市及新一线；各二三线城市企业财务岗位亦有稳定需求'],
      industryTrend: '稳定' as const,
      relatedCertificates: ['中级会计职称', '注册会计师（CPA）', '税务师', '管理会计师（MAT）'],
    },
    preparation: {
      suggestedDuration: '官方未明确，一般建议备考2-4个月，每天1-2小时',
      materials: ['《初级会计实务》《经济法基础》（财政部会计资格评价中心组织编写，经济科学出版社出版）'],
      hasPastPapers: false,
    },
    policyChanges: '2025年起报名前置条件：须先完成全国统一信息采集；部分地区要求提供继续教育记录；报名平台统一为全国会计人员统一服务管理平台',
  },
  {
    id: 'fin4',
    name: '中级会计专业技术资格证书',
    category: '财会金融类',
    level: '中级',
    issuingAuthority: '财政部、人力资源和社会保障部',
    inNationalCatalog: false,
    tags: ['含金量高', '晋升必备', '工作年限门槛', '难度适中'],
    hotScore: 60,
    description: '会计行业进阶专业技术资格证书，评定会计师职称的核心依据，晋升管理层的敲门砖',
    requirements: {
      education: '大专及以上学历（含全日制、自考、成考等国家承认学历）',
      age: '无年龄限制',
      major: '不限专业',
      workYears: '大专5年、本科4年、第二学士学位/研究生班毕业2年、硕士1年、博士0年；或已取得经济/统计/审计专业技术中级资格',
      otherConditions: ['须先完成信息采集；部分省份要求提供继续教育完成证明；属地报名'],
      exemptions: '2026年起，获得境内会计硕士专业学位、会计博士专业学位的人员，可免试《财务管理》科目（须5月12日-6月25日提交免试申请）',
    },
    exam: {
      subjects: ['《中级会计实务》+《财务管理》+《经济法》'],
      form: '机考（无纸化闭卷考试）',
      passStandard: '连续2个考试年度内通过全部3科，每科满分100分，60分合格',
      fee: '约50-80元/科（各省不同）',
      locationType: '全国统考',
    },
    timeline: {
      registrationTime: '每年6月（如2026年为6月12日-7月2日，各省在此区间内自行确定）',
      examTime: '每年9月（如2026年为9月5日-6日）',
      resultTime: '考后约1个月（一般10月中下旬）',
      certificateTime: '成绩公布后3-6个月',
      scoreValidity: '2年滚动（连续2个考试年度内通过3科即可）',
      certificateValidity: '终身有效',
      continuingEducation: '是，取得证书后每年需参加会计人员继续教育',
    },
    career: {
      positions: ['会计主管', '财务经理', '总账会计', '财务分析师', '成本经理', '税务经理', '内审主管'],
      salaryRange: { junior: '8000万/年', senior: '50万/年' },
      demandCities: ['北上广深杭', '成都', '武汉', '南京', '苏州等一二线城市；制造业/金融业/房地产集中城市需求旺盛'],
      industryTrend: '稳定' as const,
      relatedCertificates: ['注册会计师（CPA）', '高级会计师', '税务师', '管理会计师', '经济师'],
    },
    preparation: {
      suggestedDuration: '官方未明确，一般建议每科2-3个月，总计4-6个月',
      materials: ['《中级会计实务》《财务管理》《经济法》（财政部会计资格评价中心组织编写）'],
      hasPastPapers: false,
    },
    policyChanges: '2026年起新增免试政策：会计硕士/博士可免试《财务管理》；报名须先完成全国统一信息采集；工作年限计算截止日为当年12月31日',
  },
  {
    id: 'fin5',
    name: '注册会计师证书（CPA）',
    category: '财会金融类',
    level: '不分级（分专业阶段+综合阶段）',
    issuingAuthority: '中国注册会计师协会（CICPA）',
    inNationalCatalog: false,
    tags: ['含金量极高', '难度大', '签字权', '财会天花板', '年薪百万潜力'],
    hotScore: 70,
    description: '中国财会领域含金量最高的执业资格证书，拥有上市公司审计签字权，是财务高管和投行精英的通行证',
    requirements: {
      education: '高等专科以上学校毕业学历（含全日制、自考、成考、网络教育等学信网可查学历）；或具有会计/审计/经济/统计等相关专业中级以上技术职称',
      age: '需具备完全民事行为能力（年满18周岁或16周岁以上以劳动收入为主要生活来源）',
      major: '不限专业',
      workYears: '报考无工作年限要求；但申请执业会员（签字权）需在会计师事务所从事审计业务工作满2年',
      otherConditions: ['应届生可凭学籍信息预报名（须7-8月补录学历认证）；境外学历需教育部留学服务中心认证；被吊销CPA证书未满5年者不得报考'],
      exemptions: '专业阶段6科无免考（须全部通过）；综合阶段须通过专业阶段后方可报考',
    },
    exam: {
      subjects: ['专业阶段（6科）：会计', '审计', '财务成本管理', '税法', '经济法', '公司战略与风险管理；综合阶段（1科）：职业能力综合测试（试卷一', '试卷二）'],
      form: '机考（闭卷）',
      passStandard: '专业阶段：每科满分100分，60分合格，单科成绩5年内有效；综合阶段：两卷合计60分合格（无有效期限制）',
      fee: '专业阶段约50-100元/科，综合阶段约120-200元（各省不同）；教材费另计',
      locationType: '全国统考（中注协统一组织，各省设考区）',
    },
    timeline: {
      registrationTime: '每年4月（2026年为4月7日早8:00-4月30日晚8:00）',
      examTime: '每年8月（2026年为8月29日-30日）；欧洲考区为9月5日-6日（比利时时间）',
      resultTime: '考后约3个月（一般11月下旬）',
      certificateTime: '成绩公布后约2-3个月',
      scoreValidity: '专业阶段单科成绩5年滚动有效；综合阶段无时间限制',
      certificateValidity: '终身有效（非执业会员）；执业会员需通过年检和继续教育维持执业资格',
      continuingEducation: '是，执业会员和非执业会员每年均需完成规定学时继续教育',
    },
    career: {
      positions: ['会计师事务所审计师（执业）', '企业财务经理/CFO', '投行分析师', '税务顾问', '风控经理', '财务咨询顾问', '券商/基金公司研究员'],
      salaryRange: { junior: '6000万/年', senior: '80万/年' },
      demandCities: ['北京', '上海', '深圳', '广州', '杭州', '成都', '南京', '武汉；金融中心和省会城市需求集中'],
      industryTrend: '稳定' as const,
      relatedCertificates: ['中级会计职称', '税务师', '法律职业资格', 'ACCA/CFA（国际证书）', '高级会计师'],
    },
    preparation: {
      suggestedDuration: '官方未明确，业界建议每科200-400小时，专业阶段总计约1500-2500小时',
      materials: ['中注协官方教材（专业阶段6科+综合阶段），中国财经出版传媒集团出版'],
      hasPastPapers: false,
    },
    policyChanges: '报名与缴费分阶段进行（4月报名、6月缴费）；应届生学历认证时间窗口明确（7月14日-8月4日）；考试大纲持续更新；欧洲考区单独安排',
  },
  {
    id: 'fin6',
    name: '税务师职业资格证书',
    category: '财会金融类',
    level: '不分级',
    issuingAuthority: '中国注册税务师协会（中税协）',
    inNationalCatalog: false,
    tags: ['含金量高', '涉税必备', '5年滚动', '可免试'],
    hotScore: 60,
    description: '涉税行业含金量极高的专业资格证书，从事税务代理、税务筹划、涉税鉴证等工作的核心资质',
    requirements: {
      education: '大专及以上学历',
      age: '年满18周岁，具有完全民事行为能力',
      major: '不限专业，但经济学/法学/管理学本科可直接报考，其他学科需增加工作年限',
      workYears: '本科（经济/法学/管理学）无年限；其他学科本科+1年；专科（经济/法学/管理学）+2年；其他学科专科+3年',
      otherConditions: ['被取消登记不满5年者不得报名；违纪禁考期未满者不得报名；工作年限截止至当年12月31日'],
      exemptions: '已评聘经济/审计高级专业技术职务且从事涉税工作满2年，可免试《财务与会计》；已评聘法律高级专业技术职务且从事涉税工作满2年，可免试《涉税服务相关法律》',
    },
    exam: {
      subjects: ['《税法（一）》《税法（二）》《涉税服务相关法律》《财务与会计》《涉税服务实务》'],
      form: '机考（闭卷计算机化考试），每科150分钟',
      passStandard: '每科满分140分，84分合格；5年内通过全部5科即可取证',
      fee: '约93元/科（各省略有差异）',
      locationType: '全国统考（中税协统一组织）',
    },
    timeline: {
      registrationTime: '首次报名：5月13日10:00至7月15日17:00；补报名：8月13日10:00至8月24日17:00',
      examTime: '11月（2026年为11月14日-15日）',
      resultTime: '考后约30天',
      certificateTime: '成绩公布后约2-3个月',
      scoreValidity: '5年滚动（连续5个考试年度内通过全部科目）',
      certificateValidity: '终身有效',
      continuingEducation: '是，持证人需按规定参加继续教育',
    },
    career: {
      positions: ['税务师事务所税务师', '企业税务经理/主管', '税务机关税务稽查', '涉税鉴证顾问', '税务筹划顾问'],
      salaryRange: { junior: '6万/年', senior: '80万/年' },
      demandCities: ['北京', '上海', '深圳', '广州', '杭州', '成都；税务师事务所集中城市及省会城市需求旺盛'],
      industryTrend: '稳定' as const,
      relatedCertificates: ['注册会计师（CPA）', '中级会计职称', '高级经济师', '法律职业资格'],
    },
    preparation: {
      suggestedDuration: '官方未明确，业界建议每科150-250小时，总计约800-1200小时',
      materials: ['中税协组织编写《税法（一）》《税法（二）》《涉税服务相关法律》《财务与会计》《涉税服务实务》（非指定用书，自愿购买）'],
      hasPastPapers: false,
    },
    policyChanges: '2026年延续双阶段报名模式（首次报名+补报名）；免试申请需在规定窗口期提交；工作年限截止日统一为12月31日',
  },
  {
    id: 'fin7',
    name: '中级审计专业技术资格证书',
    category: '财会金融类',
    level: '中级',
    issuingAuthority: '审计署、人力资源和社会保障部',
    inNationalCatalog: false,
    tags: ['职称晋升', '审计刚需', '2年滚动', '难度适中'],
    hotScore: 60,
    description: '审计行业中级职称证书，从事国家审计、内部审计、社会审计工作的专业技术资质',
    requirements: {
      education: '大专及以上学历',
      age: '无年龄限制',
      major: '不限专业',
      workYears: '大专+5年/本科+4年/第二学士学位/研究生班毕业+2年/硕士+1年/博士0年；或取得初级审计师后满足对应年限',
      otherConditions: ['须在现工作地或居住地报名（属地原则）；工作年限计算截止至当年12月31日；审计硕士专业学位毕业生可免试《审计相关基础知识》'],
      exemptions: '获得审计硕士专业学位的人员可免试《审计相关基础知识》科目（仅限该科目）',
    },
    exam: {
      subjects: ['《审计相关基础知识》《审计理论与实务》'],
      form: '闭卷笔答（纸笔考试），题型均为客观题',
      passStandard: '连续2个考试年度内通过全部2科，每科满分100分，60分合格',
      fee: '约60-100元/科（各省不同）',
      locationType: '全国统考（审计署、人社部统一组织，各省设考区）',
    },
    timeline: {
      registrationTime: '每年5月-6月（各省不同，如甘肃5月12-21日、浙江5月26-6月5日、山东5月15-27日），逾期不设补报名',
      examTime: '每年9月（2026年为9月19日）',
      resultTime: '考后约1-2个月',
      certificateTime: '成绩公布后约2-3个月',
      scoreValidity: '2年滚动（连续2个考试年度内通过2科）',
      certificateValidity: '终身有效',
      continuingEducation: '是，取得职称后需按规定参加继续教育',
    },
    career: {
      positions: ['审计师', '内部审计主管', '审计项目经理', '风控经理', '稽核经理', '监察专员'],
      salaryRange: { junior: '8万/年', senior: '80万/年' },
      demandCities: ['北京', '上海', '深圳', '广州', '成都', '武汉', '南京；国有企业集中城市', '金融机构集中城市需求大'],
      industryTrend: '稳定' as const,
      relatedCertificates: ['高级审计师', '注册会计师（CPA）', '中级会计职称', 'CIA（国际注册内部审计师）'],
    },
    preparation: {
      suggestedDuration: '官方未明确，一般建议每科2-3个月，总计3-5个月',
      materials: ['审计署、人社部统一发布考试大纲，无指定教材；市面常见辅导教材'],
      hasPastPapers: false,
    },
    policyChanges: '2026年审计硕士专业学位毕业生可免试《审计相关基础知识》；工作年限计算截止日统一为12月31日；实行告知承诺制',
  },
  {
    id: 'fin8',
    name: '中级经济专业技术资格证书',
    category: '财会金融类',
    level: '中级',
    issuingAuthority: '人力资源和社会保障部',
    inNationalCatalog: false,
    tags: ['职称评定', '落户加分', '报考门槛低', '10个专业方向'],
    hotScore: 60,
    description: '经济领域中级职称证书，覆盖工商管理、人力资源、金融等10个专业方向，是企事业单位职称评定和岗位晋升的重要依据',
    requirements: {
      education: '高中及以上（高中需先取得初级经济师资格）',
      age: '无年龄限制',
      major: '不限专业',
      workYears: '高中+初级经济师+10年/大专+6年/本科+4年/第二学士学位/研究生班+2年/硕士+1年/博士0年',
      otherConditions: ['工作年限计算截止至当年12月31日；非全日制学历工作年限可累计；部分省份实行考后审核；须遵循属地原则'],
      exemptions: '无免考政策，须通过全部2科',
    },
    exam: {
      subjects: ['《经济基础知识》（公共必考）+《专业知识与实务》（10个专业方向任选1：工商管理', '农业经济', '财政税收', '金融', '保险', '运输经济', '人力资源管理', '旅游经济', '建筑与房地产经济', '知识产权）'],
      form: '机考（无纸化闭卷考试），单科考试时长90分钟',
      passStandard: '连续2个考试年度内通过全部2科，每科满分140分，84分合格',
      fee: '约61-100元/科（各省不同）',
      locationType: '全国统考（人社部统一组织，各省设考区，分批次考试）',
    },
    timeline: {
      registrationTime: '全国统一报名窗口：7月22日8:00至8月12日24:00（各省在此区间内自行安排，一般开放10-15天，不设补报）',
      examTime: '每年11月（2026年为11月7日-8日，分批次机考）',
      resultTime: '考后约1个月（一般12月上旬）',
      certificateTime: '成绩公布后约2-3个月',
      scoreValidity: '2年滚动（连续2个考试年度内通过2科）',
      certificateValidity: '终身有效',
      continuingEducation: '是，取得职称后需按规定参加继续教育',
    },
    career: {
      positions: ['企事业单位经济师岗位', '人力资源经理', '金融分析师', '财政税收专员', '工商管理顾问', '知识产权管理'],
      salaryRange: { junior: '8万/年', senior: '80万/年' },
      demandCities: ['全国普遍需求，国企/事业单位集中城市（北京', '上海', '广州', '成都', '武汉', '西安等）需求量更大'],
      industryTrend: '稳定' as const,
      relatedCertificates: ['高级经济师', '中级会计职称', '人力资源管理师', '注册会计师（CPA）', '税务师'],
    },
    preparation: {
      suggestedDuration: '官方未明确，一般建议每科2-3个月，总计3-5个月',
      materials: ['人社部人事考试中心组织编写官方教材（各专业方向对应不同教材）'],
      hasPastPapers: false,
    },
    policyChanges: '2026年报名窗口统一为7月22日-8月12日；实行告知承诺制；考后审核省份增加；成绩滚动管理持续',
  },
  {
    id: 'fin9',
    name: '银行业专业人员职业资格证书',
    category: '财会金融类',
    level: '分初级/中级',
    issuingAuthority: '中国银行业协会',
    inNationalCatalog: false,
    tags: ['银行入门', '一年两考', '费用低', '在校生可考'],
    hotScore: 60,
    description: '银行业入门级职业资格证书，银行柜员、客户经理、理财经理等岗位的基础准入门槛',
    requirements: {
      education: '初级：大专及以上（含在校生）；中级：大专及以上+工作年限',
      age: '年满18周岁，具有完全民事行为能力',
      major: '不限专业',
      workYears: '初级：无；中级：经济学/管理学/法学专科+6年/本科+4年/双学士+2年/硕士+1年/博士0年；其他学科门类年限增加1年',
      otherConditions: ['在校生可先考试，毕业后凭学历证书申请证书；须上传近1年1寸白底免冠证件照；报名后48小时内须完成缴费'],
      exemptions: '初级：2013年前评聘助理经济师（金融）/经济师初级（金融）/原银协认证证书可免考《法律法规》；中级：经济师中级（金融）/原银协认证+10年工作可免考《法律法规》',
    },
    exam: {
      subjects: ['必考：《银行业法律法规与综合能力》；选考（5选1）：《个人理财》《银行管理》《个人贷款》《公司信贷》《风险管理》'],
      form: '机考（闭卷计算机化考试），初级120分钟/中级120分钟',
      passStandard: '连续两次考试中通过必考+1门选考（即1+N模式），每科满分100分，60分合格',
      fee: '61元/科',
      locationType: '全国统考（中国银行业协会统一组织，每年上下半年各1次）',
    },
    timeline: {
      registrationTime: '上半年：约4月-5月（2026年为4月8日12:00-5月22日17:00）；下半年：约8月-9月',
      examTime: '上半年6月（2026年为6月13日-14日）；下半年10月（2026年为10月24日-25日）',
      resultTime: '考后约1个月',
      certificateTime: '成绩公布后约1-2个月可申请电子证书',
      scoreValidity: '2次滚动（连续两次考试中通过对应科目）',
      certificateValidity: '终身有效',
      continuingEducation: '是，持证人员需按规定参加继续教育',
    },
    career: {
      positions: ['银行柜员', '理财经理', '客户经理', '信贷专员', '风险管理专员', '银行管理岗'],
      salaryRange: { junior: '5万/年', senior: '80万/年' },
      demandCities: ['全国各城市银行网点均有需求，一线城市及省会城市岗位更多；农商行', '城商行在三四线城市需求稳定'],
      industryTrend: '稳定' as const,
      relatedCertificates: ['中级银行从业', '证券从业资格', '基金从业资格', 'AFP/CFP（理财规划师）', '中级经济师（金融）'],
    },
    preparation: {
      suggestedDuration: '官方未明确，一般建议每科1-2个月',
      materials: ['中国银行业协会组织编写官方教材（对应各科目）'],
      hasPastPapers: false,
    },
    policyChanges: '2026年报名系统改造升级，往年考生也需重新注册；初级在校生可考但需毕业后领证；国家乡村振兴重点帮扶县执行单独合格线',
  },
  {
    id: 'fin10',
    name: '证券业从业人员水平评价测试合格证明',
    category: '财会金融类',
    level: '不分级（分一般业务/专项业务）',
    issuingAuthority: '中国证券业协会（SAC）',
    inNationalCatalog: false,
    tags: ['证券入门', '一年多考', '统考+专场', '金融必备'],
    hotScore: 60,
    description: '证券行业从业准入类水平评价测试，从事证券经纪、投资顾问、分析师、投行等业务的必备资质',
    requirements: {
      education: '大专及以上；或高中/相当于高中文化程度+36个月以上工作经历',
      age: '报名截止日年满18周岁',
      major: '不限专业',
      workYears: '高中/中专学历需36个月以上工作经历；大专及以上无工作年限要求',
      otherConditions: ['在校专/本科生暂不能报考（需毕业后），但专升本/硕士在校生可报；证券公司已开具录用通知的应届毕业生可报；须由机构统一报名专场考试'],
      exemptions: '无免考政策，须通过对应科目',
    },
    exam: {
      subjects: ['一般业务（必考2科）：《金融市场基础知识》《证券市场基本法律法规》；专项业务（3选1）：《证券投资顾问业务》《发布证券研究报告业务》《投资银行业务》'],
      form: '机考（闭卷计算机化考试）',
      passStandard: '每科满分100分，60分合格；一般业务2科均通过后方可报考专项业务',
      fee: '61元/科',
      locationType: '全国统考（面向社会，每年2次）+ 专场考试（面向机构，每年3次）+ 预约测试（面向机构，每年6次）',
    },
    timeline: {
      registrationTime: '统考：上半年约5月报名（6月考试），下半年约8月报名（9月考试）；专场/预约测试按需安排',
      examTime: '统考：6月、9月；专场：3月、6月、8月、11月；预约测试：全年多场次',
      resultTime: '考后约1-2周',
      certificateTime: '成绩合格后即时可查电子成绩，从业资格申请由所在机构办理',
      scoreValidity: '长期有效（成绩合格证明长期有效，但从业需每年参加后续培训）',
      certificateValidity: '从业资格需通过机构申请注册，持续从业需维持培训要求',
      continuingEducation: '是，从业人员需每年参加后续职业培训',
    },
    career: {
      positions: ['证券经纪人', '投资顾问', '证券分析师', '保荐代表人', '投行项目经理', '合规专员'],
      salaryRange: { junior: '6万/年', senior: '80万/年' },
      demandCities: ['北京', '上海', '深圳', '广州', '杭州', '成都；证券公司总部及营业部集中城市'],
      industryTrend: '稳定' as const,
      relatedCertificates: ['基金从业资格', '期货从业资格', 'CPA', 'CFA', '法律职业资格'],
    },
    preparation: {
      suggestedDuration: '官方未明确，一般建议每科1-2个月',
      materials: ['中国证券业协会发布考试大纲，无指定教材；市面辅导教材众多'],
      hasPastPapers: false,
    },
    policyChanges: '2026年统考拟于6月、9月举办2次；在校生报考限制收紧（需毕业后或硕士在读/已获录用通知）；成绩长期有效',
  },
  {
    id: 'fin11',
    name: '基金从业资格证书',
    category: '财会金融类',
    level: '不分级',
    issuingAuthority: '中国证券投资基金业协会（AMAC）',
    inNationalCatalog: false,
    tags: ['基金入门', '科目一必考', '机位有限先报先得', '本科可免试'],
    hotScore: 60,
    description: '基金行业从业必备资格证书，从事公募基金、私募基金、证券公司基金业务、商业银行基金销售等工作的准入门槛',
    requirements: {
      education: '高中以上文化程度（含中专、职高、技校）',
      age: '报名日年满18周岁',
      major: '不限专业',
      workYears: '无工作年限要求',
      otherConditions: ['已被行业机构聘用的全日制本科及以上学历人员，可通过机构应知应会考核豁免全部科目；违纪禁考期未满者不得报考'],
      exemptions: '已被行业机构聘用的境内人员，获得国家教育部门认可的全日制本科及以上学历的，可豁免全部科目，通过所聘用机构组织的应知应会知识考核后可申请注册从业资格',
    },
    exam: {
      subjects: ['科目一《基金基础知识与法律法规》（必考）+ 科目二《证券投资基金基础知识》/科目三《私募股权投资基金基础知识》（二选一）'],
      form: '机考（闭卷计算机化考试），单科120分钟，100道单选题',
      passStandard: '科目一+科目二或科目一+科目三，每科满分100分，60分合格',
      fee: '61元/科',
      locationType: '全国统一考试（面向社会，每年2次）+ 行业专场考试（面向机构内部）',
    },
    timeline: {
      registrationTime: '统考：上半年约4月报名（5月考试），下半年约9-10月报名（11月考试）；2026年5月考试报名时间为4月27日-30日',
      examTime: '统考：约5月、11月；行业专场：按需安排',
      resultTime: '考后约1-2周',
      certificateTime: '成绩合格后由所在机构申请注册从业资格，个人无法直接领证',
      scoreValidity: '4年（通过科目后4年内需申请注册从业资格）',
      certificateValidity: '从业资格需通过机构注册维持，持续从业需按规定参加培训',
      continuingEducation: '是，从业人员需每年参加规定学时培训',
    },
    career: {
      positions: ['基金销售经理', '基金经理助理', '基金运营专员', '私募股权投资经理', '券商基金业务岗', '银行理财经理（基金方向）'],
      salaryRange: { junior: '6万/年', senior: '000万/年' },
      demandCities: ['北京', '上海', '深圳', '广州', '杭州；基金公司', '券商资管', '私募机构集中城市'],
      industryTrend: '稳定' as const,
      relatedCertificates: ['证券从业资格', '银行从业资格', 'CPA', 'CFA', '中级经济师（金融）'],
    },
    preparation: {
      suggestedDuration: '官方未明确，一般建议每科1-2个月',
      materials: ['《基金基础知识与法律法规》《证券投资基金》《股权投资基金》（中国财政经济出版社出版，2025年7月新版）'],
      hasPastPapers: false,
    },
    policyChanges: '2025年7月启用新版教材和考试大纲；全日制本科及以上学历人员可通过机构考核豁免全部科目；机位有限，先报先得，额满为止',
  },
  {
    id: 'fin12',
    name: '资产评估师职业资格证书',
    category: '财会金融类',
    level: '不分级',
    issuingAuthority: '中国资产评估协会（中评协）；人力资源和社会保障部、财政部监制',
    inNationalCatalog: false,
    tags: ['含金量高', '5年滚动', '可免试', '评估行业核心'],
    hotScore: 60,
    description: '从事资产评估、企业价值评估、无形资产评估等工作的专业资格证书，是资产评估行业的核心执业资质',
    requirements: {
      education: '高等院校专科以上（含专科）学历；暂未取得学历的大学生也可报名',
      age: '年满18周岁，具有完全民事行为能力',
      major: '不限专业，所有专业均可报考',
      workYears: '无工作年限要求',
      otherConditions: ['须上传近1年1寸白底免冠证件照；报名期间可更换考试城市及科目；缴费成功后不可更改'],
      exemptions: '取得高级会计师/高级审计师/高级经济师职称，或通过CPA考试，可免试《资产评估相关知识》；评定为资产评估专业副教授及以上可免试《资产评估基础》',
    },
    exam: {
      subjects: ['《资产评估基础》《资产评估相关知识》《资产评估实务（一）》《资产评估实务（二）》'],
      form: '机考（闭卷计算机化考试）',
      passStandard: '除《资产评估相关知识》满分150分外，其他科目满分100分；各科目合格标准为试卷满分的60%；4年内通过全部4科',
      fee: '95元/科',
      locationType: '全国统考（中评协统一组织）',
    },
    timeline: {
      registrationTime: '首次报名：3月30日9:00至5月8日24:00；补报名：7月13日9:00至7月22日24:00',
      examTime: '9月（2026年为9月12日-13日）',
      resultTime: '考后约30天',
      certificateTime: '成绩公布后约2-3个月',
      scoreValidity: '4年滚动（连续4个考试年度内通过全部科目）',
      certificateValidity: '终身有效',
      continuingEducation: '是，持证人需按规定参加继续教育',
    },
    career: {
      positions: ['资产评估师', '企业价值评估师', '无形资产评估师', '房地产评估师', '金融机构评估顾问', '司法鉴定评估师'],
      salaryRange: { junior: '6万/年', senior: '80万/年' },
      demandCities: ['北京', '上海', '深圳', '广州', '杭州', '成都；金融机构集中城市', '国有企业改革活跃城市'],
      industryTrend: '稳定' as const,
      relatedCertificates: ['注册会计师（CPA）', '税务师', '房地产估价师', '土地估价师'],
    },
    preparation: {
      suggestedDuration: '官方未明确，业界建议每科200-300小时，总计约800-1200小时',
      materials: ['中评协组织编写官方教材（对应4科），中国财政经济出版社出版'],
      hasPastPapers: false,
    },
    policyChanges: '2026年延续双阶段报名模式（首次报名+补报名）；免试资格长期有效，不可变更免试科目；大学生可提前报考',
  },
  {
    id: 'bld13',
    name: '二级建造师执业资格证书',
    category: '建筑工程类',
    level: '二级',
    issuingAuthority: '各省住房和城乡建设厅（组织考试）；人力资源和社会保障厅（发证）',
    inNationalCatalog: false,
    tags: ['项目经理必备', '各省组织', '报考门槛低', '建筑行业刚需'],
    hotScore: 60,
    description: '建筑行业项目经理的必备执业资格证书，担任中小型工程项目经理的核心门槛',
    requirements: {
      education: '工程类或工程经济类中等专科及以上学历',
      age: '无年龄限制',
      major: '限工程类或工程经济类专业（部分省份相近专业可报，年限增加）',
      workYears: '工程类/工程经济类中专及以上学历+从事建设工程项目施工管理工作满2年',
      otherConditions: ['各省独立组织，报名时间', '条件', '费用不同；须在工作地或居住地报考；工作年限计算截止至当年12月31日'],
      exemptions: '持有二级项目经理资质+中级职称+施工管理满15年，可免试《建设工程施工管理》；持有一级项目经理资质+中级职称/满15年，可免试《施工管理》和《法规》2科',
    },
    exam: {
      subjects: ['《建设工程施工管理》《建设工程法规及相关知识》《专业工程管理与实务》（6个专业任选1：建筑工程', '公路工程', '水利水电工程', '市政公用工程', '矿业工程', '机电工程）'],
      form: '笔试（纸笔考试），部分省份试点机考',
      passStandard: '各省自定合格线（一般为卷面分的60%左右）；须在连续2个考试年度内通过全部3科',
      fee: '约50-100元/科（各省不同）',
      locationType: '各省独立组织（非全国统考），各省自行命题或采用全国统一卷',
    },
    timeline: {
      registrationTime: '各省不同，一般集中在2-4月（如广东3月下旬、山东3月中旬、云南下半年8-9月）',
      examTime: '一般5月中下旬（2026年为5月30日-31日），部分省份如贵州可能单独安排在4月',
      resultTime: '考后约1-2个月',
      certificateTime: '成绩公布后约2-3个月',
      scoreValidity: '2年滚动（连续2个考试年度内通过3科）',
      certificateValidity: '终身有效，但注册有效期为3年，期满需延续注册',
      continuingEducation: '是，注册有效期内需完成规定学时继续教育',
    },
    career: {
      positions: ['项目经理', '项目技术负责人', '施工员', '质量员', '安全员', '资料员'],
      salaryRange: { junior: '10万/年', senior: '000万/年' },
      demandCities: ['全国各城市均有需求，基建活跃城市（成都', '武汉', '西安', '郑州等）及房地产集中城市需求旺盛'],
      industryTrend: '稳定' as const,
      relatedCertificates: ['一级建造师', '一级造价工程师', '安全工程师', '监理工程师', 'BIM证书'],
    },
    preparation: {
      suggestedDuration: '官方未明确，一般建议3-5个月',
      materials: ['中国建筑工业出版社出版官方教材（对应各科目）'],
      hasPastPapers: false,
    },
    policyChanges: '部分省份试点机考；贵州等省份单独安排考试时间；告知承诺制全面推行；工作年限计算截止12月31日',
  },
  {
    id: 'bld14',
    name: '一级建造师执业资格证书',
    category: '建筑工程类',
    level: '一级',
    issuingAuthority: '人力资源和社会保障部、住房和城乡建设部',
    inNationalCatalog: false,
    tags: ['含金量极高', '项目经理天花板', '难度大', '年薪20万+'],
    hotScore: 60,
    description: '建筑行业最高级别项目经理执业资格证书，担任大型工程项目经理的法定必备资质，建筑行业含金量最高的证书之一',
    requirements: {
      education: '工程类或工程经济类大学专科及以上学历',
      age: '无年龄限制',
      major: '限工程类或工程经济类专业',
      workYears: '专科+4年/本科+3年/硕士+2年/博士+1年（均需从事建设工程项目施工管理工作）',
      otherConditions: ['学历须学信网可查；工作证明需单位盖章；实行告知承诺制；工作年限截止至当年12月31日'],
      exemptions: '2003年12月31日前取得一级项目经理资质+中级职称/满20年施工管理，可免试《建设工程经济》和《建设工程项目管理》2科',
    },
    exam: {
      subjects: ['《建设工程经济》《建设工程法规及相关知识》《建设工程项目管理》《专业工程管理与实务》（10个专业任选1：建筑工程', '公路工程', '铁路工程', '民航机场工程', '港口与航道工程', '水利水电工程', '矿业工程', '市政公用工程', '通信与广电工程', '机电工程）'],
      form: '笔试（纸笔考试），《专业实务》为主客观混合题',
      passStandard: '《经济》60分/100分、《法规》78分/130分、《管理》78分/130分、《实务》96分/160分；2年滚动（连续2个考试年度内通过4科）',
      fee: '约50-80元/科（各省不同）',
      locationType: '全国统考（统一大纲、统一命题、统一组织）',
    },
    timeline: {
      registrationTime: '每年6-7月（2026年为6月17日-7月12日）',
      examTime: '每年9月（2026年为9月12日-13日）',
      resultTime: '考后约2-3个月（一般12月）',
      certificateTime: '成绩公布后约3-6个月',
      scoreValidity: '2年滚动（连续2个考试年度内通过4科）',
      certificateValidity: '终身有效，但注册有效期为3年，期满需延续注册',
      continuingEducation: '是，注册有效期内需完成规定学时继续教育',
    },
    career: {
      positions: ['大型工程项目经理', '项目总工', '技术负责人', '工程总监', '企业技术负责人'],
      salaryRange: { junior: '15万/年', senior: '20万/年' },
      demandCities: ['全国基建活跃城市，尤其是一线城市', '新一线城市及省会城市；大型央企/国企集中城市'],
      industryTrend: '稳定' as const,
      relatedCertificates: ['一级造价工程师', '监理工程师', '注册安全工程师', 'BIM高级工程师', 'PMP'],
    },
    preparation: {
      suggestedDuration: '官方未明确，业界建议每科200-400小时，总计约1000-1500小时',
      materials: ['中国建筑工业出版社出版官方教材（对应4科）'],
      hasPastPapers: false,
    },
    policyChanges: '考试大纲定期修订；告知承诺制全面推行；部分地区实行考后审核；注册管理持续规范',
  },
  {
    id: 'bld15',
    name: '一级造价工程师职业资格证书',
    category: '建筑工程类',
    level: '一级',
    issuingAuthority: '人力资源和社会保障部、住房和城乡建设部/交通运输部/水利部',
    inNationalCatalog: false,
    tags: ['含金量高', '造价行业天花板', '4年滚动', '专业性强'],
    hotScore: 60,
    description: '工程造价领域最高级别执业资格证书，从事工程造价、招标代理、工程咨询等工作的法定必备资质',
    requirements: {
      education: '大专及以上学历（工程造价/工程管理/土木建筑/水利/装备制造/交通运输/电子信息/财经商贸等大类）',
      age: '无年龄限制',
      major: '不限专业，但非相关专业工作年限增加1年',
      workYears: '工程造价专业专科+4年/本科+3年/硕士+2年/博士0年；其他相关专业年限相应增加',
      otherConditions: ['学历须学信网可查；工作年限计算截止至当年12月31日；实行告知承诺制'],
      exemptions: '已取得公路工程造价人员资格证书（甲级）/水运工程造价工程师资格证书/水利工程造价工程师资格证书，可免试《建设工程造价管理》《建设工程计价》2个基础科目',
    },
    exam: {
      subjects: ['《建设工程造价管理》《建设工程计价》《建设工程技术与计量》《建设工程造价案例分析》（后2科分4个专业：土木建筑工程', '交通运输工程', '水利工程', '安装工程）'],
      form: '笔试（纸笔考试），《案例分析》为主观题',
      passStandard: '《造价管理》《工程计价》《技术与计量》满分100分，60分合格；《案例分析》满分120分，72分合格；4年滚动',
      fee: '约50-80元/科（各省不同）',
      locationType: '全国统考（统一大纲、统一命题、统一组织）',
    },
    timeline: {
      registrationTime: '每年7-8月（2026年为7月24日-8月18日）',
      examTime: '每年10月（2026年为10月17日-18日）',
      resultTime: '考后约2个月（一般12月底至次年1月初）',
      certificateTime: '成绩公布后约3-5个月',
      scoreValidity: '4年滚动（连续4个考试年度内通过4科）；免考人员2年滚动',
      certificateValidity: '终身有效，但注册有效期为4年，期满需延续注册',
      continuingEducation: '是，注册有效期内需完成规定学时继续教育',
    },
    career: {
      positions: ['造价工程师', '招标代理', '工程咨询顾问', '成本经理', '审计经理', '项目投资分析师'],
      salaryRange: { junior: '10万/年', senior: '40万/年' },
      demandCities: ['北京', '上海', '深圳', '广州', '杭州', '成都', '武汉；基建活跃城市', '房地产集中城市'],
      industryTrend: '稳定' as const,
      relatedCertificates: ['一级建造师', '监理工程师', '咨询工程师（投资）', '注册会计师（CPA）'],
    },
    preparation: {
      suggestedDuration: '官方未明确，业界建议每科200-350小时，总计约1000-1400小时',
      materials: ['中国计划出版社出版官方教材（对应4科）'],
      hasPastPapers: false,
    },
    policyChanges: '2026年报名窗口统一为7月24日-8月18日；实行告知承诺制；考后审核省份增加；成绩4年滚动管理',
  },
  {
    id: 'bld16',
    name: '监理工程师职业资格证书',
    category: '建筑工程类',
    level: '不分级',
    issuingAuthority: '人力资源和社会保障部、住房和城乡建设部/交通运输部/水利部',
    inNationalCatalog: false,
    tags: ['监理必备', '4年滚动', '可免考', '工程管理核心'],
    hotScore: 60,
    description: '工程监理行业的核心执业资格证书，从事建设工程监理、项目管理、工程咨询等工作的法定必备资质',
    requirements: {
      education: '大专及以上学历（工程大类专业）',
      age: '无年龄限制',
      major: '限工程大类、工学、管理科学与工程类专业',
      workYears: '专科+4年/本科+3年/硕士+2年/博士0年（均需从事工程施工/监理/设计等业务）',
      otherConditions: ['北京', '上海等试点地区报考土木建筑工程专业需大学本科及以上学历；工作年限截止至当年12月31日；实行告知承诺制'],
      exemptions: '已取得公路水运工程监理工程师资格证书/水利工程建设监理工程师资格证书，可免试《建设工程合同管理》《建设工程监理基本理论和相关法规》2个基础科目',
    },
    exam: {
      subjects: ['《建设工程合同管理》《建设工程监理基本理论和相关法规》《建设工程目标控制》《建设工程监理案例分析》（后2科分3个专业：土木建筑工程', '交通运输工程', '水利工程）'],
      form: '笔试（纸笔考试），《案例分析》为主观题，需在专用答题卡作答',
      passStandard: '《合同管理》《监理理论》满分110分，66分合格；《目标控制》满分160分，96分合格；《案例分析》满分120分，72分合格；4年滚动',
      fee: '约50-80元/科（各省不同）',
      locationType: '全国统考（统一大纲、统一命题、统一组织）',
    },
    timeline: {
      registrationTime: '每年3月（2026年为3月12日-31日，各省略有差异）',
      examTime: '每年5月（2026年为5月16日-17日）',
      resultTime: '考后约2个月（一般7月底）',
      certificateTime: '成绩公布后约1-2个月',
      scoreValidity: '4年滚动（连续4个考试年度内通过4科）；免考人员2年滚动',
      certificateValidity: '终身有效，但注册有效期为3年，期满需延续注册',
      continuingEducation: '是，注册有效期内需完成规定学时继续教育',
    },
    career: {
      positions: ['总监理工程师', '专业监理工程师', '监理员', '项目管理工程师', '工程咨询顾问'],
      salaryRange: { junior: '8万/年', senior: '40万/年' },
      demandCities: ['全国基建活跃城市；大型工程项目集中城市（北京', '上海', '深圳', '广州', '成都', '武汉等）'],
      industryTrend: '稳定' as const,
      relatedCertificates: ['一级建造师', '一级造价工程师', '注册安全工程师', '咨询工程师（投资）'],
    },
    preparation: {
      suggestedDuration: '官方未明确，业界建议每科150-250小时，总计约600-1000小时',
      materials: ['中国建筑工业出版社出版官方教材（对应4科）'],
      hasPastPapers: false,
    },
    policyChanges: '2026年北京、上海等试点地区报考土木建筑工程专业需本科以上学历；告知承诺制全面推行；成绩4年滚动管理',
  },
  {
    id: 'bld17',
    name: '中级注册安全工程师职业资格证书',
    category: '建筑工程类',
    level: '中级',
    issuingAuthority: '人力资源和社会保障部、应急管理部',
    inNationalCatalog: false,
    tags: ['安全领域核心', '7个专业方向', '4年滚动', '政策强制需求'],
    hotScore: 60,
    description: '安全生产领域核心执业资格证书，从事安全生产管理、安全技术服务、安全评价等工作的法定必备资质',
    requirements: {
      education: '大专及以上学历',
      age: '无年龄限制',
      major: '不限专业，但安全工程及相关专业工作年限要求较低',
      workYears: '安全工程及相关专业：专科+5年/本科+3年/硕士+1年/博士0年；其他专业：专科+6年/本科+4年/硕士+2年/博士+1年',
      otherConditions: ['工作年限计算截止至当年12月31日；实行告知承诺制；部分省份要求社保缴纳记录'],
      exemptions: '本科安全工程专业经全国工程教育专业认证，可免试《安全生产技术基础》；高级/正高级工程师职称+10年安全生产业务工作，可免试《安全生产管理》《安全生产技术基础》2科',
    },
    exam: {
      subjects: ['《安全生产法律法规》《安全生产管理》《安全生产技术基础》《安全生产专业实务》（7个专业方向任选1：煤矿安全', '金属非金属矿山安全', '化工安全', '金属冶炼安全', '建筑施工安全', '道路运输安全', '其他安全）'],
      form: '笔试（纸笔考试），《专业实务》为主客观混合题',
      passStandard: '每科满分100分，60分合格；4年滚动（连续4个考试年度内通过4科）',
      fee: '约50-80元/科（各省不同）',
      locationType: '全国统考（统一大纲、统一命题、统一组织）',
    },
    timeline: {
      registrationTime: '每年6-7月（各省不同，一般在中国人事考试网统一报名窗口期内）',
      examTime: '每年10月（2026年为10月）',
      resultTime: '考后约2个月',
      certificateTime: '成绩公布后约3-5个月',
      scoreValidity: '4年滚动（连续4个考试年度内通过4科）',
      certificateValidity: '终身有效，但注册有效期为5年，期满需延续注册',
      continuingEducation: '是，注册有效期内需完成规定学时继续教育',
    },
    career: {
      positions: ['安全工程师', '安全经理', '安全总监', '安全评价师', 'EHS经理', '安全生产主管'],
      salaryRange: { junior: '8万/年', senior: '000万/年' },
      demandCities: ['化工园区集中城市', '矿山资源城市', '建筑施工活跃城市；制造业集中城市（长三角', '珠三角', '环渤海）'],
      industryTrend: '稳定' as const,
      relatedCertificates: ['一级建造师', '消防工程师', '环境影响评价工程师', '职业卫生检测评价'],
    },
    preparation: {
      suggestedDuration: '官方未明确，业界建议每科150-250小时，总计约600-1000小时',
      materials: ['应急管理出版社/煤炭工业出版社出版官方教材（对应4科）'],
      hasPastPapers: false,
    },
    policyChanges: '新《安全生产法》实施后强制配备要求趋严；本科安全工程专业认证可免试《技术基础》；成绩4年滚动管理',
  },
  {
    id: 'bld18',
    name: '一级注册消防工程师资格证书',
    category: '建筑工程类',
    level: '一级',
    issuingAuthority: '人力资源和社会保障部、应急管理部（消防救援局）',
    inNationalCatalog: false,
    tags: ['含金量高', '难度大', '3年滚动', '消防行业天花板'],
    hotScore: 60,
    description: '消防工程领域最高级别执业资格证书，从事消防技术咨询、消防安全评估、消防设施检测等工作的法定必备资质',
    requirements: {
      education: '大专及以上学历',
      age: '无年龄限制',
      major: '不限专业，但消防工程及相关专业工作年限要求较低',
      workYears: '消防工程专业：专科+6年（其中消防安全技术满4年）/本科+4年（技术满3年）/硕士+2年（技术满1年）/博士+1年；消防工程相关专业年限各增加1年；其他专业年限各增加2年',
      otherConditions: ['工作年限和从事消防安全技术工作年限计算截止至当年12月31日；全日制学历未毕业期间经历不计入工作年限；实行告知承诺制'],
      exemptions: '2011年12月31日前评聘高级工程师技术职务；或取得一级注册建筑师/勘察设计各专业注册工程师资格证书，可免试《消防安全技术实务》',
    },
    exam: {
      subjects: ['《消防安全技术实务》《消防安全技术综合能力》《消防安全案例分析》'],
      form: '笔试（纸笔考试），《案例分析》为主观题',
      passStandard: '《技术实务》《综合能力》满分120分，72分合格；《案例分析》满分120分，72分合格；3年滚动',
      fee: '约65-79元/科（各省不同）',
      locationType: '全国统考（统一大纲、统一命题、统一组织）',
    },
    timeline: {
      registrationTime: '每年8-9月（2026年为8月24日-9月14日）',
      examTime: '每年11月（2026年为11月7日-8日）',
      resultTime: '考后约2-3个月（一般次年1月下旬）',
      certificateTime: '成绩公布后约3-5个月',
      scoreValidity: '3年滚动（连续3个考试年度内通过3科）；免考人员2年滚动',
      certificateValidity: '终身有效，但注册有效期为3年，期满需延续注册',
      continuingEducation: '是，注册有效期内需完成规定学时继续教育',
    },
    career: {
      positions: ['消防工程师', '消防安全评估师', '消防设施检测员', '消防技术顾问', '消防项目经理', 'EHS经理'],
      salaryRange: { junior: '10万/年', senior: '50万/年' },
      demandCities: ['大城市消防要求严格（北京', '上海', '深圳', '广州', '杭州）；商业综合体集中城市', '高层建筑集中城市'],
      industryTrend: '稳定' as const,
      relatedCertificates: ['注册安全工程师', '一级建造师（机电）', '消防设施操作员', 'BIM证书'],
    },
    preparation: {
      suggestedDuration: '官方未明确，业界建议每科300-500小时，总计约1000-1500小时',
      materials: ['中国计划出版社出版官方教材（对应3科）'],
      hasPastPapers: false,
    },
    policyChanges: '2026年报名时间为8月24日-9月14日；考试大纲持续更新；注册管理持续规范；部分城市试点证书直邮',
  },
  {
    id: 'bld19',
    name: '房地产估价师职业资格证书',
    category: '建筑工程类',
    level: '不分级',
    issuingAuthority: '住房和城乡建设部、自然资源部、人力资源和社会保障部',
    inNationalCatalog: false,
    tags: ['报考门槛低', '取消年限', '4年滚动', '评估行业核心'],
    hotScore: 60,
    description: '房地产估价行业的核心执业资格证书，从事房地产估价、土地估价、资产评估等工作的法定必备资质',
    requirements: {
      education: '高等院校专科以上学历（含非全日制），学信网可查',
      age: '无年龄限制',
      major: '不限专业，所有专业均可报考',
      workYears: '无工作年限要求（2021年改革后大幅放宽）',
      otherConditions: ['须拥护中国共产党领导和社会主义制度；港澳台居民可凭居住证或通行证报考；实行告知承诺制'],
      exemptions: '原房地产估价师资格证书持有者可免试《房地产估价基础与实务》；原土地估价师资格证书持有者可免试《土地估价基础与实务》',
    },
    exam: {
      subjects: ['《房地产制度法规政策》《房地产估价原理与方法》《房地产估价基础与实务》《土地估价基础与实务》'],
      form: '笔试（纸笔考试），《房估实务》《土估实务》为主客观混合题，需自备计算器',
      passStandard: '每科满分100分或150分，60分合格；4年滚动（连续4个考试年度内通过4科）；免考人员3年滚动',
      fee: '约43-99元/科（各省不同，多数地区约70元/科）',
      locationType: '全国统考（统一大纲、统一命题、一年一考）',
    },
    timeline: {
      registrationTime: '每年9-10月（各省不同，一般8-9月起分省陆续开放，持续10-20天）',
      examTime: '每年11月（2026年预计为11月7日-8日）',
      resultTime: '考后约2个月',
      certificateTime: '成绩公布后约2-3个月',
      scoreValidity: '4年滚动（连续4个考试年度内通过4科）；免考人员3年滚动',
      certificateValidity: '终身有效，但注册后需按规定参加继续教育',
      continuingEducation: '是，持证人需按规定参加继续教育',
    },
    career: {
      positions: ['房地产估价师', '土地估价师', '资产评估师', '抵押评估师', '征收评估师', '司法鉴定评估师'],
      salaryRange: { junior: '8万/年', senior: '50万/年' },
      demandCities: ['北京', '上海', '深圳', '广州', '杭州', '成都；房地产市场活跃城市', '城市更新/旧改集中城市'],
      industryTrend: '稳定' as const,
      relatedCertificates: ['资产评估师', '土地估价师', '注册会计师（CPA）', '一级建造师'],
    },
    preparation: {
      suggestedDuration: '官方未明确，一般建议每科2-3个月，总计4-6个月',
      materials: ['中国建筑工业出版社出版官方教材（对应4科）'],
      hasPastPapers: false,
    },
    policyChanges: '2021年改革后取消专业限制和工作年限要求；原房地产估价师/土地估价师可免试对应科目；实行告知承诺制；成绩4年滚动',
  },
  {
    id: 'med20',
    name: '医师资格证书（执业医师）',
    category: '医药卫生类',
    level: '分执业医师/执业助理医师',
    issuingAuthority: '国家卫生健康委员会（考试组织）；各省卫生健康委员会（发证）',
    inNationalCatalog: false,
    tags: ['医学终极门槛', '准入类', '一年一考', '难度大'],
    hotScore: 60,
    description: '医疗卫生行业最核心的准入类执业资格证书，从事医疗、预防、保健等临床工作的法定必备资质，医学从业者的终极门槛',
    requirements: {
      education: '本科及以上学历（执业医师）；中专/大专学历（执业助理医师，后续可升执业医师）',
      age: '无年龄限制',
      major: '限医学相关专业（临床医学、口腔医学、中医学、中西医结合、公共卫生等）',
      workYears: '本科+1年试用期/专科+2年（助理医师后）/中专+5年（助理医师后）；需在医疗、预防、保健机构中试用期满',
      otherConditions: ['须在试用单位所在地报考；须提供试用期考核合格证明；实行网上报名+现场审核；部分省份要求社保或工资流水'],
      exemptions: '无免考政策，须通过实践技能考试和医学综合考试',
    },
    exam: {
      subjects: ['实践技能考试（分专业）+ 医学综合考试（分专业：临床', '中医', '口腔', '公共卫生等）'],
      form: '实践技能：多站式操作考试；医学综合：机考（计算机化考试）',
      passStandard: '实践技能：满分100分，60分合格（成绩当年有效）；医学综合：满分600分，360分合格（执业医师）/满分300分，180分合格（助理医师）',
      fee: '实践技能约200-300元；医学综合约100-200元（各省不同）',
      locationType: '全国统一考试（国家医学考试中心统一组织，各省设考区）',
    },
    timeline: {
      registrationTime: '每年1月（网上报名约1月-2月；现场审核约2月-3月）',
      examTime: '实践技能：6月（2026年为6月6日-17日）；医学综合第一次：8月（2026年为8月21日-23日）；医学综合第二次：11月（部分考区，2026年为11月7日-8日）',
      resultTime: '实践技能：考后约1个月；医学综合：考后约1个月',
      certificateTime: '成绩公布后约2-3个月',
      scoreValidity: '实践技能成绩当年有效；医学综合成绩当年有效（部分省份实践技能成绩2年有效）',
      certificateValidity: '终身有效，但须注册后方可执业，注册有效期一般为3-5年',
      continuingEducation: '是，医师需按规定参加继续医学教育',
    },
    career: {
      positions: ['临床医师', '住院医师', '主治医师', '副主任医师', '主任医师；科室主任', '医院管理者'],
      salaryRange: { junior: '8万/年', senior: '80万/年' },
      demandCities: ['全国普遍需求，三甲医院集中城市（北京', '上海', '广州', '成都', '武汉', '西安等）竞争激烈；基层医疗机构人才缺口大'],
      industryTrend: '稳定' as const,
      relatedCertificates: ['执业药师', '公共卫生执业医师', '专科医师培训合格证', '医学高级职称'],
    },
    preparation: {
      suggestedDuration: '官方未明确，一般建议系统复习6-12个月',
      materials: ['人民卫生出版社《医师资格考试大纲》及配套教材；国家医学考试网提供考试大纲'],
      hasPastPapers: false,
    },
    policyChanges: '2026年继续实施医学综合第二次考试（部分考区）；临床/中医类别继续实施；实践技能成绩部分省份2年有效；报名审核趋严',
  },
  {
    id: 'med21',
    name: '执业药师职业资格证书',
    category: '医药卫生类',
    level: '不分级（分药学类/中药学类）',
    issuingAuthority: '人力资源和社会保障部、国家药品监督管理局',
    inNationalCatalog: false,
    tags: ['药店必备', '4年滚动', '可免考', '医药分开推动需求'],
    hotScore: 60,
    description: '药品流通和使用领域核心执业资格证书，从事药品生产、经营、使用单位药学服务工作的法定必备资质',
    requirements: {
      education: '大专及以上学历',
      age: '无年龄限制',
      major: '限药学类、中药学类专业；相关专业年限增加1年',
      workYears: '药学/中药学专业：大专+4年/本科+2年/硕士+1年/博士0年；相关专业年限各增加1年',
      otherConditions: ['须在药学或中药学岗位工作；高级职称须为药学/中药学岗位获得；实行告知承诺制；2026年起实行机考'],
      exemptions: '取得药学/医学专业高级职称并在药学岗位工作，可免试《药学专业知识（一）》《药学专业知识（二）》；取得中药学/中医学专业高级职称并在中药学岗位工作，可免试《中药学专业知识（一）》《中药学专业知识（二）》',
    },
    exam: {
      subjects: ['药学类：《药学专业知识（一）》《药学专业知识（二）》《药事管理与法规》《药学综合知识与技能》；中药学类：《中药学专业知识（一）》《中药学专业知识（二）》《药事管理与法规》《中药学综合知识与技能》'],
      form: '机考（2026年起全国统一机考），题型为A/B/C/X型选择题',
      passStandard: '每科满分100分，60分合格；4年滚动（连续4个考试年度内通过4科）',
      fee: '约50-80元/科（各省不同）',
      locationType: '全国统考（统一大纲、统一命题、统一组织）',
    },
    timeline: {
      registrationTime: '每年6-8月（2026年预计为6-7月，各省略有不同）',
      examTime: '每年10月（2026年为10月31日-11月1日）',
      resultTime: '考后约1个月',
      certificateTime: '成绩公布后约2-3个月',
      scoreValidity: '4年滚动（连续4个考试年度内通过4科）',
      certificateValidity: '终身有效，但注册有效期为5年，期满需延续注册',
      continuingEducation: '是，注册后每年需参加继续教育培训',
    },
    career: {
      positions: ['执业药师', '药店店长', '药品质量负责人', '临床药师', '医药代表', '药品监管人员'],
      salaryRange: { junior: '6万/年', senior: '30万/年' },
      demandCities: ['全国各城市药店均有需求；医药产业集中城市（北京', '上海', '广州', '成都', '石家庄等）；连锁药店总部城市'],
      industryTrend: '稳定' as const,
      relatedCertificates: ['执业医师', '健康管理师', '营养师', '医疗器械相关证书'],
    },
    preparation: {
      suggestedDuration: '官方未明确，一般建议每科2-3个月，总计6-10个月',
      materials: ['中国医药科技出版社出版官方教材（对应药学类/中药学类各4科）'],
      hasPastPapers: false,
    },
    policyChanges: '2026年起全国统一机考；报名审核趋严；高级职称免考条件明确限定为药学/中药学岗位获得；成绩4年滚动',
  },
  {
    id: 'med22',
    name: '护士执业资格证书',
    category: '医药卫生类',
    level: '不分级',
    issuingAuthority: '国家卫生健康委员会（考试组织）；各省卫生健康委员会（发证）',
    inNationalCatalog: false,
    tags: ['护理刚需', '一年一考', '中专可报', '机考'],
    hotScore: 60,
    description: '护理行业准入类执业资格证书，从事临床护理、社区护理、护理管理等工作的法定必备资质，护理从业者的基础门槛',
    requirements: {
      education: '中等职业学校、高等学校完成国务院教育主管部门和卫生主管部门规定的普通全日制3年以上护理/助产专业课程学习',
      age: '无年龄限制',
      major: '限护理、助产专业',
      workYears: '无工作年限要求，但须在教学/综合医院完成8个月以上护理临床实习',
      otherConditions: ['应届毕业生可报考；须提供实习证明；实行网上报名+现场确认（部分考区线上确认）；照片将用于准考证和资格证书'],
      exemptions: '无免考政策，须通过全部2科',
    },
    exam: {
      subjects: ['《专业实务》《实践能力》'],
      form: '机考（人机对话），每半天为一个轮次，共分4轮次，考生随机分配',
      passStandard: '每科满分380分（标准分），300分合格；须一次通过2科',
      fee: '约60-120元/科（各省不同）',
      locationType: '全国统一考试（国家卫生健康委人才交流服务中心统一组织）',
    },
    timeline: {
      registrationTime: '预报名：每年12月（2026年为2025年12月9日-22日）；现场确认：12月（2026年为2025年12月10日-24日）',
      examTime: '每年4月（2026年为4月11日-12日）',
      resultTime: '考后约1个月',
      certificateTime: '成绩公布后约2-3个月',
      scoreValidity: '当年有效（须一次通过2科）',
      certificateValidity: '终身有效，但须注册后方可执业，注册有效期为5年',
      continuingEducation: '是，注册后需按规定参加继续医学教育',
    },
    career: {
      positions: ['临床护士', '手术室护士', 'ICU护士', '急诊护士', '社区护士', '护理部管理人员', '护理教师'],
      salaryRange: { junior: '6万/年', senior: '000万/年' },
      demandCities: ['全国普遍需求，三甲医院集中城市（北京', '上海', '广州', '成都', '武汉等）；老龄化严重城市社区护理需求大；基层医疗机构护士缺口大'],
      industryTrend: '稳定' as const,
      relatedCertificates: ['护师/主管护师职称', '健康管理师', '营养师', '国际护士证（ISPN）', '助产士'],
    },
    preparation: {
      suggestedDuration: '官方未明确，一般建议系统复习3-6个月',
      materials: ['人民卫生出版社《全国护士执业资格考试指导》'],
      hasPastPapers: false,
    },
    policyChanges: '继续实行机考；部分考区实行线上确认（天津、江苏、云南、新疆、新疆兵团）；成绩当年有效；报名审核趋严',
  },
  {
    id: 'hlth23',
    name: '健康管理师职业技能等级证书',
    category: '健康服务类',
    level: '三级/高级工（主流）；二级/技师；一级/高级技师',
    issuingAuthority: '各省人社厅备案的第三方职业技能等级评价机构',
    inNationalCatalog: false,
    tags: ['大健康风口', '政策扶持', '可领补贴', '报考门槛适中', '终身有效'],
    hotScore: 70,
    description: '从事个体或群体健康监测、分析、评估及健康咨询、指导和危险因素干预的专业人员资格，大健康产业核心技能证书',
    requirements: {
      education: '大专及以上（医药卫生专业可直接报三级）；中专需医药卫生专业+3年工作经验；非医药卫生专业大专需2年工作经验+培训结业',
      age: '年满18周岁，无上限',
      major: '不限专业，但医药卫生专业门槛更低；非相关专业需增加工作年限或参加培训',
      workYears: '三级：累计10年相关工作经验；或四级证书+4年；或初级职称+1年；或相关专业大专/本科毕业（含应届生）',
      otherConditions: ['须通过人社备案机构报名（个人无法直接报名）；部分省份要求社保缴纳记录与工作年限一致；需提供工作年限书面承诺书+单位公章'],
      exemptions: '无免考政策，须通过全部科目',
    },
    exam: {
      subjects: ['理论知识（基础知识：健康管理概论', '临床医学', '预防医学', '流行病学', '中医学', '康复医学', '慢病管理', '卫生法规等）+ 专业技能（健康监测', '风险评估', '干预方案设计', '健康指导等）'],
      form: '机考（闭卷计算机化考试），理论+技能两科；二级/一级加考综合评审（论文/答辩）',
      passStandard: '每科满分100分，60分合格；一科不过一年内可补考一科',
      fee: '各省不同：理论约65-150元/科，技能约230-310元/科，合计约300-500元/人（不含培训费）；培训费另计约1000-3000元',
      locationType: '各省人社厅备案的第三方评价机构组织（非全国统考），各省自行安排考试时间',
    },
    timeline: {
      registrationTime: '全年滚动报名，各省不同，一般考前1-2个月截止（如广东3月、6月、9月、12月批次；山东5月底截止6月考试）',
      examTime: '每年多批次，常见为3月、6月、9月、12月（具体以各省评价机构公告为准）',
      resultTime: '考后约1个月内',
      certificateTime: '成绩公布后约1-2个月',
      scoreValidity: '单科成绩保留1年（一科不过可在1年内补考另一科）',
      certificateValidity: '终身有效',
      continuingEducation: '否，无需继续教育',
    },
    career: {
      positions: ['健康管理师', '健康顾问', '体检中心健康管理员', '慢病管理专员', '健康保险公司理赔顾问', '养老健康管理员', '企业健康管理员'],
      salaryRange: { junior: '5000万/年', senior: '40万/年' },
      demandCities: ['北京', '上海', '广州', '深圳', '杭州', '成都；老龄化严重城市', '医疗资源集中城市', '健康产业园区'],
      industryTrend: '稳定' as const,
      relatedCertificates: ['公共营养师', '心理咨询师', '养老护理员', '执业药师（医药背景）', '中医康复理疗师'],
    },
    preparation: {
      suggestedDuration: '官方未明确，一般建议备考2-3个月，每天1-2小时；三级建议总学时约150-200小时',
      materials: ['《健康管理师国家职业资格培训教程》（基础知识+三级技能），人民卫生出版社/中国劳动社会保障出版社；各省评价机构可能有指定教材'],
      hasPastPapers: false,
    },
    policyChanges: '2020年退出国家职业资格目录，转为职业技能等级证书；2021年起由第三方评价机构颁发；2023年起执行新国标申报条件，放宽了学历与工作年限组合路径；2025-2026年多地增加考试批次，部分省份试点线上考试',
  },
  {
    id: 'hlth24',
    name: '公共营养师职业技能等级证书',
    category: '健康服务类',
    level: '四级/中级工、三级/高级工、二级/技师、一级/高级技师',
    issuingAuthority: '人社部门备案的第三方评价组织（如中国营养学会教育培训中心、各省备案机构）',
    inNationalCatalog: false,
    tags: ['营养健康热门', '可领技能补贴', '零基础友好', '母婴/养老/健身行业刚需'],
    hotScore: 60,
    description: '从事人群或个人膳食和营养状况评价与指导，传播营养、平衡膳食与食品安全知识，促进公共健康工作开展的专业人员资格',
    requirements: {
      education: '四级：高中/中专及以上（2025年起部分省份取消工作经验限制）；三级：大专及以上（相关专业可直接报，非相关专业需2年工作经验+培训）',
      age: '年满18周岁，无上限',
      major: '不限专业，但医学/食品/营养相关专业门槛更低；非相关专业需增加工作年限或培训学时',
      workYears: '四级：累计3年相关工作经验（部分省份已取消）；或相关专业中专/高职应届生；三级：四级证书+2年/4年工作经验；或大专+2年工作经验；或本科相关专业直接报',
      otherConditions: ['须通过备案培训机构报名（个人无法直接报名）；部分省份要求工作证明+社保记录；非相关专业需完成规定学时培训并取得结业证书'],
      exemptions: '无免考政策，须逐级报考或通过对应等级考试',
    },
    exam: {
      subjects: ['理论知识（营养学基础', '食物营养', '人群营养', '食谱编制', '食品安全', '医学基础', '慢病营养指导等）+ 专业技能（膳食调查', '营养评估', '食谱设计', '营养咨询与教育等）；二级/一级加考综合评审'],
      form: '机考（理论）+ 纸笔作答/实操（技能）；部分省份理论和技能均为上机考试',
      passStandard: '每科满分100分，60分合格；双科均需合格',
      fee: '各省不同：四级约300-680元/人，三级约380-780元/人（含培训+考试）；单科考试费约65-310元',
      locationType: '各省人社备案的第三方评价机构组织（非全国统考），全年多批次；中国营养学会也组织职业能力评价考试',
    },
    timeline: {
      registrationTime: '全年滚动报名，各省不同，一般考前1-2个月截止（如山东5月底截止6月考试；广东药科大学全年多批次）',
      examTime: '每年多批次，常见为3月、6月、9月、12月（具体以评价机构公告为准）',
      resultTime: '考后约1个月内',
      certificateTime: '成绩公布后约1-2个月',
      scoreValidity: '单科成绩保留1年（一科不过可在1年内补考）',
      certificateValidity: '终身有效',
      continuingEducation: '否，无需继续教育',
    },
    career: {
      positions: ['公共营养师', '营养顾问', '膳食配餐师', '母婴营养师', '运动营养师', '慢病营养管理师', '食品安全管理员', '健康管理机构营养师'],
      salaryRange: { junior: '4000万/年', senior: '500万/年' },
      demandCities: ['北京', '上海', '广州', '深圳', '杭州', '成都；母婴产业集中城市', '健身产业集中城市', '养老产业集中城市', '食品企业总部城市'],
      industryTrend: '稳定' as const,
      relatedCertificates: ['健康管理师', '注册营养师（RD，更高阶）', '食品安全管理员', '中医食疗调理师', '体重管理师'],
    },
    preparation: {
      suggestedDuration: '官方未明确，一般建议备考2-3个月，每天1-2小时；四级约100-150小时，三级约150-200小时',
      materials: ['《公共营养师国家职业资格培训教程》（基础知识+技能），中国劳动社会保障出版社；中国营养学会《注册营养师/技师课程教材》（如考学会版）'],
      hasPastPapers: false,
    },
    policyChanges: '2016年退出国家职业资格目录；2021年起实行社会化职业技能等级认定；2025年起多地放宽四级报考条件（取消工作经验限制）；新增AI营养评估等模块试点；部分省份推行线上考试',
  },
  {
    id: 'law25',
    name: '法律职业资格证书（国家统一法律职业资格考试）',
    category: '法律政务类',
    level: '不分级（分A证/B证/C证，按报名条件和合格分数线区分）',
    issuingAuthority: '司法部（统一组织考试并颁发证书）',
    inNationalCatalog: false,
    tags: ['含金量极高', '法律职业终极门槛', '难度大', '年薪百万潜力', '考公热门'],
    hotScore: 70,
    description: '初任法官、检察官、律师、公证员及行政机关法制岗位等法律职业的法定必备准入资格，中国法律职业最高门槛证书',
    requirements: {
      education: '新人新办法：全日制法学类本科+学士及以上学位；或全日制非法学类本科+法律硕士/法学硕士及以上学位；或全日制非法学类本科+学位+从事法律工作满3年。老人老办法：2018年4月28日前已取得学籍/考籍或相应学历的，不限专业（本科及以上）',
      age: '年满18周岁（具有完全民事行为能力），无上限',
      major: '受限（新人新办法限法学类本科或法律硕士；老人老办法不限专业）',
      workYears: '新人新办法中非法学本科需从事法律工作满3年（截止报名当年8月31日）；应届生可凭学籍信息预报名（须毕业后补录学历认证）',
      otherConditions: ['放宽地区户籍可放宽至本科毕业（不限专业）；港澳台/国外学历需教育部留学服务中心认证；须签署《应届毕业生承诺书》或《从事法律工作满三年承诺书》；无社保/户籍硬性要求，可异地报考'],
      exemptions: '无免考政策，须通过客观题+主观题两阶段考试',
    },
    exam: {
      subjects: ['客观题（两卷）：试卷一（习近平法治思想', '法理学', '宪法', '中国法律史', '国际法', '司法制度与法律职业道德', '刑法', '刑事诉讼法', '行政法与行政诉讼法）；试卷二（民法', '知识产权法', '商法', '经济法', '环境资源法', '劳动与社会保障法', '国际私法', '国际经济法', '民事诉讼法含仲裁制度）。主观题（一卷）：案例分析题', '法律文书题', '论述题，考查习近平法治思想', '法理学', '宪法', '刑法', '刑诉', '民法', '商法', '民诉', '行政法与行政诉讼法', '司法制度与法律职业道德'],
      form: '客观题：机考（闭卷计算机化考试）；主观题：机考为主（特殊情况可申请纸笔答题），提供电子法律法规汇编',
      passStandard: '客观题：总分300分，全国统一合格线180分（放宽地区有降分）；主观题：满分180分，全国统一合格线108分（放宽地区有降分）。客观题成绩当年及下一年度有效',
      fee: '各省不同：客观题约122-176元/人（两卷合计，如北京150元、广东172元、吉林176元）；主观题约70-85元/人（如北京70元、上海85元）',
      locationType: '全国统考（司法部统一命题、统一组织，各省设考区）',
    },
    timeline: {
      registrationTime: '客观题：每年6月中旬（约6月16日-6月30日）；主观题：每年9月下旬（约9月19日-9月23日，限客观题合格人员报名）',
      examTime: '客观题：每年9月中旬（2026年为9月12日-13日，分两批次）；主观题：每年10月中旬（2026年为10月18日）',
      resultTime: '客观题：考后约1周（约9月19日）；主观题：考后约1个月（约11月底-12月初）',
      certificateTime: '次年3-4月（应届生需等毕业后7-8月领证）',
      scoreValidity: '客观题成绩当年及下一个考试年度内有效；主观题成绩当年有效',
      certificateValidity: '终身有效（但执业需按规定年检/继续教育）',
      continuingEducation: '是，执业律师/公证员等需按规定参加继续教育培训',
    },
    career: {
      positions: ['执业律师', '法官', '检察官', '公证员', '仲裁员', '公司法务', '政府法制办公务员', '法律顾问', '法律研究员', '投行合规专员'],
      salaryRange: { junior: '5000万/年', senior: '30万/年' },
      demandCities: ['北京', '上海', '深圳', '广州', '杭州', '成都；律所总部集中城市', '金融中心城市', '省会城市法院检察院'],
      industryTrend: '稳定' as const,
      relatedCertificates: ['注册会计师（CPA）', '税务师', '专利代理师', '企业合规师', '证券从业资格', 'CFA（涉外金融法律方向）'],
    },
    preparation: {
      suggestedDuration: '官方未明确，业界建议客观题备考800-1200小时，主观题额外300-500小时，总计约1000-1500小时',
      materials: ['司法部制定《国家统一法律职业资格考试大纲》为命题依据；官方无指定教材，市面主流：法考四大本（国家统一法律职业资格考试辅导用书）、各大机构辅导讲义'],
      hasPastPapers: false,
    },
    policyChanges: '持续实行新人新办法/老人老办法双轨制；放宽地区政策持续；2026年考试时间已确定（客观题9月12-13日，主观题10月18日）；机考全面普及，主观题保留纸笔答题选项；应届生报考政策稳定',
  },
  {
    id: 'law26',
    name: '社会工作者职业资格（助理社会工作师/社会工作师/高级社会工作师）',
    category: '法律政务类（社会工作类）',
    level: '分三级：助理社会工作师（初级）、社会工作师（中级）、高级社会工作师（高级）',
    issuingAuthority: '人力资源和社会保障部、民政部（考试组织）；各省人社厅/人事考试中心（发证）',
    inNationalCatalog: false,
    tags: ['社区工作刚需', '考编加分', '积分落户', '报考门槛低', '政策扶持', '老龄化社会需求'],
    hotScore: 80,
    description: '从事社会工作服务、社区治理、社会福利、慈善事业等工作的专业水平评价类职业资格，是社工行业晋升和岗位聘任的核心依据',
    requirements: {
      education: '初级：高中/中专及以上；中级：大专及以上；高级：本科及以上（且须先取得中级资格）',
      age: '无年龄限制',
      major: '不限专业，但社会工作专业可缩短工作年限要求；非社会工作专业需增加2年工作年限（中级）',
      workYears: '初级：高中/中专+4年社会工作经验；或社工专业大专+2年；或社工专业本科应届生；或其他专业大专+4年；其他专业本科+2年。中级：高中/中专+初级证书+6年；或社工专业大专+4年；社工专业本科+3年；社工专业硕士+1年；社工专业博士直接考；其他专业大专及以上+对应年限+2年。高级：本科及以上+中级证书+5年社会工作经验',
      otherConditions: ['实行告知承诺制，部分地区考后审核；工作年限计算截止至当年12月31日；全日制学历学习期间不计入工作年限；须在工作地或居住地报考（属地原则）'],
      exemptions: '无免考政策，须通过对应级别全部科目',
    },
    exam: {
      subjects: ['初级：《社会工作综合能力（初级）》《社会工作实务（初级）》。中级：《社会工作综合能力（中级）》《社会工作法规与政策》《社会工作实务（中级）》。高级：《社会工作实务（高级）》（主观题，通过后还需评审）'],
      form: '纸笔考试（客观题为主，中级实务和高级为主观题）；2026年仍为纸笔考试',
      passStandard: '初级：1个考试年度内通过2科，每科满分100分，60分合格。中级：连续2个考试年度内通过3科，每科满分100分，60分合格。高级：满分100分，60分合格，通过后颁发成绩合格证明（3年内有效），需再通过评审',
      fee: '各省不同：初级客观题约56-61元/科；中级客观题约56-61元/科，主观题约60-70元/科；高级约69-79元/科。总费用：初级约120-130元，中级约180-200元，高级约70-80元',
      locationType: '全国统考（人社部统一大纲、统一命题，各省设考区组织）',
    },
    timeline: {
      registrationTime: '每年3月中旬（2026年为3月12日-3月25日/30日，各省略有差异）',
      examTime: '每年5月下旬（2026年为5月23日-24日）',
      resultTime: '考后约2个月（2026年约7月下旬）',
      certificateTime: '成绩公布后约2-3个月（约9-10月），部分省份试点证书直邮',
      scoreValidity: '初级：1年（须一次通过2科）；中级：2年滚动（连续2年通过3科）；高级：成绩合格证明3年内有效（须在此期间通过评审）',
      certificateValidity: '终身有效（初级/中级职业资格证书；高级为评审通过后颁发的证书）',
      continuingEducation: '是，取得职称后需按规定参加继续教育（部分地区要求每年90学时）',
    },
    career: {
      positions: ['社区工作者', '社工机构项目主管', '民政系统公务员', '福利院/养老院社工', '医院医务社工', '学校社工', '企业社工', '公益慈善组织项目官员', '矫正社工', '禁毒社工'],
      salaryRange: { junior: '5000万/年', senior: '20000万/年' },
      demandCities: ['北京', '上海', '广州', '深圳', '成都', '武汉', '西安；社区治理重点城市', '老龄化严重城市', '社会组织发达城市'],
      industryTrend: '稳定' as const,
      relatedCertificates: ['心理咨询师', '健康管理师', '公共营养师', '社区工作者上岗证', '养老护理员', '家庭教育指导师'],
    },
    preparation: {
      suggestedDuration: '官方未明确，一般建议初级备考2-3个月，每天1-2小时；中级3-5个月；高级需长期积累+评审准备',
      materials: ['中国社会出版社《社会工作综合能力（初级/中级）》《社会工作实务（初级/中级）》《社会工作法规与政策（中级）》；高级无指定教材'],
      hasPastPapers: false,
    },
    policyChanges: '2026年考试大纲在2018版基础上增补党的二十大和二十届二中、三中全会精神；报名窗口统一为3月中旬；部分省份实行证书直邮；高级社会工作师评审制度持续完善；单独划线地区证书标注有效区域限制',
  },
  {
    id: 'hr27',
    name: '企业人力资源管理师职业技能等级证书',
    category: '人力资源类',
    level: '四级/中级工、三级/高级工、二级/技师、一级/高级技师',
    issuingAuthority: '各省人社厅备案的第三方职业技能等级评价机构（如省级人力资源服务行业协会等）',
    inNationalCatalog: false,
    tags: ['HR刚需', '可领技能补贴', '逐级晋升', '报考门槛低', '终身有效'],
    hotScore: 70,
    description: '从事企业人力资源规划、招聘与配置、培训与开发、绩效管理、薪酬福利管理、劳动关系管理等工作的专业技能等级证书，HR行业核心资质',
    requirements: {
      education: '四级：高中/中专及以上（含应届）；三级：大专及以上（相关专业含应届）；二级：大专及以上；一级：大专及以上',
      age: '年满18周岁，无上限',
      major: '不限专业，但工商企业管理、行政管理、劳动与社会保障、劳动关系等相关专业门槛更低',
      workYears: '四级：累计5年相关工作经验；或相关专业中专及以上毕业（含应届）；或五级证书+3年。三级：累计10年；或四级证书+4年；或初级职称+1年；或相关专业大专/本科毕业。二级：三级证书+5年；或中级职称+1年；或大专+8年/本科+6年。一级：二级证书+5年；或副高/高级职称+1年；部分地区连续19年HR经验+中层管理',
      otherConditions: ['须通过备案评价机构/培训机构报名（个人无法直接报名）；工作年限以社保', '劳动合同', '单位证明为准；全日制毕业后算年限，非全日制在读可累计；实行告知承诺制+考后审核（部分地区）'],
      exemptions: '无免考政策，须逐级报考或通过对应等级考试',
    },
    exam: {
      subjects: ['理论知识（人力资源规划', '招聘与配置', '培训与开发', '绩效管理', '薪酬福利管理', '劳动关系管理', '劳动法', '职业道德等）+ 专业技能（案例分析', '方案设计', '计算题', '简答题等）；二级/一级加考综合评审（论文+答辩或公文筐测试）'],
      form: '机考（闭卷计算机化考试），理论+技能两科；二级及以上加考综合评审（论文答辩或公文筐测试）',
      passStandard: '每科满分100分，60分合格；理论（单选75+多选25），技能（简答+案例+计算）；单科不合格可补考，成绩保留1-2年',
      fee: '考试费：四级200-350元，三级300-450元，二级600-900元，一级700-1000元；培训费：四级/三级线上500-2000元、线下1000-3000元，二级/一级线上2000-5000元、线下3000-10000元；教材50-200元',
      locationType: '各省人社备案的第三方评价机构组织（非全国统考），各省自行安排考试时间',
    },
    timeline: {
      registrationTime: '全年滚动报名，各省不同，一般考前1-2个月截止（如江苏通过ks.jshrca.cn报名；广东全年多批次）',
      examTime: '每年多批次，各省自行安排（常见为1月、3月、6月、9月、12月等，具体以各省评价机构公告为准）',
      resultTime: '考后约1个月内',
      certificateTime: '成绩公布后约1-2个月',
      scoreValidity: '单科成绩保留1-2年（各省不同，一科不过可在有效期内补考）',
      certificateValidity: '终身有效',
      continuingEducation: '否，无需继续教育',
    },
    career: {
      positions: ['HR专员', '招聘专员', '培训专员', '绩效专员', '薪酬专员', '员工关系专员', 'HR主管', 'HR经理', 'HR总监', '人力资源咨询顾问'],
      salaryRange: { junior: '4000万/年', senior: '60万/年' },
      demandCities: ['北京', '上海', '深圳', '广州', '杭州', '成都；企业总部集中城市', '制造业集中城市', '服务业发达城市'],
      industryTrend: '稳定' as const,
      relatedCertificates: ['劳动关系协调员', '经济师（人力资源管理方向）', '企业培训师', '心理咨询师', '中级会计职称'],
    },
    preparation: {
      suggestedDuration: '官方未明确，一般建议四级/三级备考2-3个月，每天1-2小时；二级/一级4-6个月',
      materials: ['《企业人力资源管理师国家职业资格培训教程》（基础知识+各等级技能），中国劳动社会保障出版社；各省评价机构可能有指定教材'],
      hasPastPapers: false,
    },
    policyChanges: '2017年退出国家职业资格目录，转为职业技能等级证书；2021年起由第三方评价机构颁发；2023年起执行新国标申报条件，放宽学历与工作年限组合路径；2025-2026年多地增加考试批次；四级报考条件进一步放宽（部分省份取消工作经验限制）；可申领技能补贴（四级1500元、三级2000元、二级2500元、一级3000元）',
  },
  {
    id: 'tour28',
    name: '导游资格证书',
    category: '旅游服务类',
    level: '不分级（分中文导游/外语导游；含普通话、英语、日语、俄语、法语等语种）',
    issuingAuthority: '文化和旅游部（统一印制）；各省/自治区/直辖市文化和旅游厅（局）（核发证书）',
    inNationalCatalog: false,
    tags: ['文旅行业刚需', '一年一考', '报考门槛低', '终身有效', '可兼职带团'],
    hotScore: 70,
    description: '从事导游执业活动的国家准入类职业资格证书，是担任导游、领队等旅游服务岗位的法定必备资质，全国通用',
    requirements: {
      education: '高中、中专或以上学历（含全日制、自考、成考等非全日制学历）；2026届中等职业学校旅游类专业毕业生可报考（领证时补交毕业证）',
      age: '无年龄限制（需身体健康）',
      major: '不限专业，所有专业均可报考',
      workYears: '无工作年限要求',
      otherConditions: ['须为中华人民共和国公民（港澳台居民凭有效居住证/通行证可报考）；身体健康，无传染性疾病；须通过全国旅游监管服务平台报名；无社保/户籍/在职证明硬性要求'],
      exemptions: '已取得导游资格证、增报其他语种的考生（加试考生），只需参加对应语种面试，无需再考笔试',
    },
    exam: {
      subjects: ['笔试（机考两卷）：试卷一《政策与法律法规》+《导游业务》（各占50%）；试卷二《全国导游基础知识》+《地方导游基础知识》。面试（现场考试）：《导游服务能力》（景点讲解', '语言表达', '服务规范', '应变能力', '综合知识；外语类增加口译）'],
      form: '笔试：机考（闭卷计算机化考试），两卷连续考试；面试：现场考试（景点讲解+问答），中文类≥15分钟，外语类≥25分钟',
      passStandard: '笔试：每卷满分100分，各省自定合格线（热门地区总分约110-120分，普通地区100-110分，偏远地区约80分）；面试：满分100分，合格线通常≥60分（热门地区可能≥70分）。笔试、面试、总成绩三项均合格方可通过',
      fee: '各省不同：新考生笔试+面试总计约200-400元（如北京250元、山东/云南280元、上海270元、广东400元）；加试考生仅考面试约70-150元',
      locationType: '全国统考（文旅部统一大纲、统一命题，各省设考区组织笔试；面试由各省文旅部门组织实施）',
    },
    timeline: {
      registrationTime: '每年7月下旬-9月上旬（2026年预计为7月底-9月初，具体以文旅部公告为准）',
      examTime: '每年11月（2026年为11月21日）',
      resultTime: '考后约3-4个月（2026年成绩约2027年3月公布）',
      certificateTime: '成绩公布后约1-2个月（各省文旅部门通知具体领取时间和地点）',
      scoreValidity: '当年有效（非滚动管理，不设单科成绩保留；未通过需次年重新报考全部科目）',
      certificateValidity: '终身有效（2016年起取消3年有效期限制）',
      continuingEducation: '资格证本身无需继续教育；但执业须注册电子导游证（有效期3年，到期前3个月需申请换发）；部分省份要求每3年参加一次继续教育（累计24学时）',
    },
    career: {
      positions: ['导游', '出境领队', '景区讲解员', '旅游策划师', '旅行社产品专员', '旅游定制师', '研学导师', '旅游主播'],
      salaryRange: { junior: '4000万/年', senior: '800万/年' },
      demandCities: ['北京', '上海', '广州', '深圳', '杭州', '成都', '西安', '桂林', '三亚；旅游城市', '历史文化名城', '出境游出发城市', '景区集中城市'],
      industryTrend: '稳定' as const,
      relatedCertificates: ['出境领队证', '旅行社经理资格证', '旅游策划师', '研学旅行指导师', '小语种证书', '茶艺师/调酒师（特色导游）'],
    },
    preparation: {
      suggestedDuration: '官方未明确，一般建议备考3-4个月，每天1-2小时；笔试2-3个月+面试1个月同步准备',
      materials: ['《政策与法律法规》《导游业务》《全国导游基础知识》《地方导游基础知识》，中国旅游出版社；各省文旅部门发布面试指定景点范围'],
      hasPastPapers: false,
    },
    policyChanges: '2016年取消资格证3年有效期限制，改为终身有效；2025年起全面实行机考笔试；2026年考试时间确定为11月21日；应届生报考政策稳定（中职旅游类毕业生可考，领证时补毕业证）；电子导游证与纸质资格证并行',
  },
  {
    id: 'it29',
    name: '系统集成项目管理工程师（软考中级）',
    category: '信息技术类',
    level: '中级（对应中级职称资格，以考代评）',
    issuingAuthority: '人力资源和社会保障部、工业和信息化部（联合颁发）',
    inNationalCatalog: false,
    tags: ['以考代评中级职称', 'IT项目管理核心', '报考零门槛', '积分落户利器', '一年两考'],
    hotScore: 70,
    description: '计算机软考中级资格之一，兼具项目管理与信息系统技术知识，通过考试即获得中级职称资格，是IT项目管理岗位和职称评定/积分落户的重要证书',
    requirements: {
      education: '无学历要求（不限学历）',
      age: '无年龄限制',
      major: '不限专业，所有专业均可报考',
      workYears: '无工作年限要求',
      otherConditions: ['须遵守属地原则（在工作地/居住地/学籍地报考）；部分地区要求提供社保缴纳证明', '居住证或学籍证明；报名须绑定个人微信，不允许代报名'],
      exemptions: '无免考政策，须通过全部2科',
    },
    exam: {
      subjects: ['《基础知识》（选择题：项目管理概论', '立项管理', '整合管理', '范围管理', '进度管理', '成本管理', '质量管理', '资源管理', '沟通管理', '风险管理', '采购管理', '干系人管理', '法律法规', '技术标准', '信息化知识等）+ 《应用技术》（案例分析题：项目立项', '合同管理', '进度/成本/质量管理', '配置管理', '变更管理', '收尾管理等实际案例分析）'],
      form: '机考（闭卷计算机化考试），两科连考总时长240分钟（基础知识150分钟+应用技术90分钟，或统一240分钟连考，中间不休息）',
      passStandard: '每科满分75分，45分合格；两科须一次考试同时通过，单科成绩不保留',
      fee: '约73元/科（各省略有差异，如北京57元/科、广东73元/科），合计约146元/人',
      locationType: '全国统考（人社部+工信部统一大纲、统一命题，各省设考区组织）',
    },
    timeline: {
      registrationTime: '上半年：约3月中下旬（2026年为3月23日-31日）；下半年：约8月中下旬（2026年为8月17日-25日）',
      examTime: '上半年：约5月下旬（2026年为5月23日-26日）；下半年：约10月下旬（2026年为10月24日-27日）',
      resultTime: '考后约1个月（一般6月下旬/11月下旬）',
      certificateTime: '成绩公布后约2-3个月（电子证书即时可查）',
      scoreValidity: '当年有效（须一次通过2科，单科不保留）',
      certificateValidity: '终身有效',
      continuingEducation: '否，无需继续教育',
    },
    career: {
      positions: ['IT项目经理', '系统集成工程师', '运维项目经理', '信息化主管', '技术经理', '售前工程师', '实施工程师', '智慧城市项目专员'],
      salaryRange: { junior: '5000万/年', senior: '50万/年' },
      demandCities: ['北京', '上海', '深圳', '广州', '杭州', '成都', '武汉', '南京；IT产业集中城市', '智慧城市试点城市', '政务信息化活跃城市'],
      industryTrend: '稳定' as const,
      relatedCertificates: ['信息系统项目管理师（高级）', 'PMP', '一级建造师（通信与广电）', '网络工程师', '数据库系统工程师', '信息安全工程师'],
    },
    preparation: {
      suggestedDuration: '官方未明确，一般建议备考3-4个月，每天2小时；零基础建议4-6个月',
      materials: ['《系统集成项目管理工程师教程》（第3版），清华大学出版社；《系统集成项目管理工程师考试大纲》'],
      hasPastPapers: false,
    },
    policyChanges: '2024年起启用新版教材（第3版），大幅增加项目管理知识（与PMP接轨）；2024年起全面实行机考（取消纸笔考试）；2026年恢复一年两考（上半年+下半年）；考试大纲与教材同步更新；以考代评中级职称政策持续',
  },
  {
    id: 'it30',
    name: '信息系统项目管理师（软考高级）',
    category: '信息技术类',
    level: '高级（对应副高级职称资格，以考代评）',
    issuingAuthority: '人力资源和社会保障部、工业和信息化部（联合颁发）',
    inNationalCatalog: false,
    tags: ['以考代评高级职称', 'IT管理天花板', '积分落户加分高', '难度大', '含金量高'],
    hotScore: 70,
    description: '计算机软考高级资格之一，IT项目管理领域最高级别职称资格考试，通过即获得副高级职称资格，是IT高管、项目总监、技术负责人和积分落户/人才引进的核心证书',
    requirements: {
      education: '无学历要求（不限学历）',
      age: '无年龄限制',
      major: '不限专业，所有专业均可报考',
      workYears: '无工作年限要求（但评聘高级职称时单位可能要求工作年限和业绩）',
      otherConditions: ['须遵守属地原则（在工作地/居住地/学籍地报考）；部分地区要求提供社保缴纳证明', '居住证或学籍证明；报名须绑定个人微信，不允许代报名'],
      exemptions: '无免考政策，须通过全部3科',
    },
    exam: {
      subjects: ['《综合知识》（选择题：项目管理高级知识', '战略管理', '组织级项目管理', '项目集管理', '项目组合管理', '信息系统安全', '法律法规', '新技术应用等）+ 《案例分析》（问答题：大型复杂项目管理', '多项目资源冲突', '战略级项目决策', '组织变革管理等案例分析）+ 《论文》（命题论文：给定项目管理主题，撰写2500-3000字论文，考查理论应用与实践总结能力）'],
      form: '机考（闭卷计算机化考试），三科连考（综合知识+案例分析+论文），总时长约6-7小时',
      passStandard: '每科满分75分，45分合格；三科须一次考试同时通过，单科成绩不保留',
      fee: '约57-73元/科（各省不同，如北京57元/科），合计约171元/人',
      locationType: '全国统考（人社部+工信部统一大纲、统一命题，各省设考区组织）',
    },
    timeline: {
      registrationTime: '上半年：约3月中下旬（2026年北京为3月27日-4月2日）；下半年：约8月中下旬（各省略有差异）',
      examTime: '上半年：约5月下旬（2026年为5月23日-26日）；下半年：约10月下旬（2026年为10月24日-27日）',
      resultTime: '考后约1个月（一般6月下旬/11月下旬）',
      certificateTime: '成绩公布后约2-3个月（电子证书即时可查）',
      scoreValidity: '当年有效（须一次通过3科，单科不保留）',
      certificateValidity: '终身有效',
      continuingEducation: '否，无需继续教育（但职称聘任后需按单位要求参加继续教育）',
    },
    career: {
      positions: ['IT项目总监', '技术总监', 'CTO', '信息化总监', '高级项目经理', '项目群经理', 'PMO负责人', '咨询顾问', '解决方案架构师'],
      salaryRange: { junior: '8000万/年', senior: '100万/年' },
      demandCities: ['北京', '上海', '深圳', '广州', '杭州', '成都；IT总部集中城市', '金融科技中心', '互联网大厂集中城市', '央企信息化部门集中城市'],
      industryTrend: '稳定' as const,
      relatedCertificates: ['PMP', '系统集成项目管理工程师（中级）', '一级建造师（通信与广电）', 'ITIL', 'COBIT', 'TOGAF', 'NPDP'],
    },
    preparation: {
      suggestedDuration: '官方未明确，业界建议备考4-6个月，每天2-3小时；论文需长期积累+实战案例，建议提前2个月专项准备',
      materials: ['《信息系统项目管理师教程》（第4版），清华大学出版社；《信息系统项目管理师考试大纲》；《信息系统项目管理师案例分析指南》《信息系统项目管理师论文指导》'],
      hasPastPapers: false,
    },
    policyChanges: '2023年起启用新版教材（第4版），大幅增加高级项目管理知识（项目集/项目组合/组织级项目管理）；2024年起全面实行机考（取消纸笔考试）；2026年恢复一年两考；论文评分标准趋严，强调实践结合理论；以考代评副高职称政策持续，部分城市可直接落户/人才引进',
  },
  {
    id: 'intl31',
    name: 'PMP项目管理专业人士资格认证',
    category: '国际认证类（项目管理）',
    level: '不分级（全球统一标准）',
    issuingAuthority: 'PMI（Project Management Institute，美国项目管理协会）颁发；中国大陆考试由中国国际人才交流基金会组织',
    inNationalCatalog: false,
    tags: ['国际黄金认证', '全球通用', '500强认可', '跳槽加薪利器', '项目管理天花板'],
    hotScore: 70,
    description: '全球公认的项目管理领域黄金标准认证，覆盖200多个国家和地区，是项目经理国际化能力的核心证明，世界500强企业招聘项目经理的重要资质',
    requirements: {
      education: '本科及以上（需学士学位或更高学历，含自考、成考、网络教育等学信网可查学历）；大专及以下（高中、中专、职高、无学位本科）也可报考',
      age: '年满18周岁，无上限',
      major: '不限专业，所有专业均可报考',
      workYears: '本科及以上：申请前8年内累计3年（36个月）项目管理经验，总工时≥4500小时；大专及以下：申请前8年内累计5年（60个月）项目管理经验，总工时≥7500小时。GAC认证学位持有者：仅需2年（24个月）经验',
      otherConditions: ['必须完成35小时以上的正式项目管理培训（须PMI授权机构出具证明）；经验需覆盖启动', '规划', '执行', '监控', '收尾五大过程组，并承担领导或指导角色；无社保/户籍硬性要求；英文报名审核通过后才能中文报名'],
      exemptions: '无免考政策，须通过180道题的考试；但持有CAPM证书或GAC认证学位者可豁免35小时培训要求',
    },
    exam: {
      subjects: ['单一综合考试：覆盖人员（42%）', '过程（50%）', '商业环境（8%）三大领域；内容涵盖项目整合管理', '范围管理', '进度管理', '成本管理', '质量管理', '资源管理', '沟通管理', '风险管理', '采购管理', '干系人管理', '敏捷/混合方法论等'],
      form: '中国大陆：纸笔考试（线下笔试，230分钟）；港澳台及海外：机考（可在线或考试中心进行）',
      passStandard: '180道题目（单选+多选，多选会注明选几个），无明确及格分数线，按PMI设定的标准通过（通常约答对60%-65%）；考试结果考后6-8周邮件通知（通过/未通过）',
      fee: '考试费：初考3900元（支付给中国国际人才交流基金会）；补考2500元（英文报名1年有效期内）；续证费150美元/3年（约1100元人民币）；培训费：线上2000-3000元，面授3000-4000元，企业内训另计',
      locationType: '全球统考（PMI统一标准），中国大陆由中国国际人才交流基金会组织，每年4次考试',
    },
    timeline: {
      registrationTime: '每年4次考试，须提前2-3个月报名：3月考试（约12月-1月报名）、6月考试（约3-4月报名）、9月考试（约6-7月报名）、12月考试（约9-10月报名）',
      examTime: '每年3月、6月、9月、12月各一次（具体日期以基金会公告为准）',
      resultTime: '考后约6-8周（邮件通知考试结果）',
      certificateTime: '电子证书考后即可在PMI官网下载；纸质证书约考后3-4个月邮寄',
      scoreValidity: '考试结果长期有效（通过即永久有效，但证书需每3年续证）',
      certificateValidity: '证书有效期3年，到期需续证（积累60个PDU+支付150美元续证费）',
      continuingEducation: '是，每3年需积累60个PDU（专业发展单元）并支付150美元续证费；PDU可通过参加培训、行业活动、自学、志愿服务等方式获取',
    },
    career: {
      positions: ['项目经理', '项目总监', 'PMO负责人', '项目集经理', '项目组合经理', '敏捷教练', 'Scrum Master', '项目咨询顾问', '产品项目经理', '工程总监'],
      salaryRange: { junior: '8000万/年', senior: '30万/年' },
      demandCities: ['北京', '上海', '深圳', '广州', '杭州', '成都；外企集中城市', 'IT/互联网大厂集中城市', '建筑工程央企集中城市', '跨国企业中国区总部'],
      industryTrend: '稳定' as const,
      relatedCertificates: ['信息系统项目管理师（高级）', '系统集成项目管理工程师（中级）', 'ACP（敏捷认证）', 'PgMP（项目集管理）', 'NPDP（产品经理）', 'MBA'],
    },
    preparation: {
      suggestedDuration: 'PMI建议35小时培训+200-400小时自学；业界建议总计备考300-500小时，约3-4个月',
      materials: ['《PMBOK指南》（第7版）+ 《敏捷实践指南》为官方核心教材；PMI授权培训机构提供配套讲义和题库'],
      hasPastPapers: false,
    },
    policyChanges: '2023年起启用PMBOK第7版+敏捷混合方法论，考试内容大幅调整（增加敏捷/混合型项目占比至50%）；2026年考试费维持3900元；中国大陆仍为纸笔考试（港澳台海外为机考）；续证政策稳定（3年60PDU+150美元）；全球持证人数超130万，中国大陆约46万+',
  },
];


export const crowdOptions = [
  '不限',
  '在校大学生',
  '应届毕业生',
  '在职转行',
  '宝妈/自由职业',
  '退休人员',
];

export const purposeOptions = [
  '不限',
  '求职就业',
  '升职加薪',
  '积分落户',
  '技能提升',
  '兼职副业',
  '行业准入',
];

export const categories = ['不限', ...new Set(certificates.map(c => c.category).filter(Boolean))];

export const educationOptions = [
  '不限',
  '初中及以下',
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

import { FilterState } from './types';

export function filterCertificates(certs: Certificate[], filters: FilterState): Certificate[] {
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

  // Difficulty filtering (from HomePage difficulty buttons)
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
        c.level?.includes('高级') || c.level?.includes('高阶') || c.tags.some(t => t.includes('高含金量') || t.includes('高难度')) || c.hotScore < 55
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
    result = result.filter(c => {
      const wy = c.requirements.workYears || '';
      // If cert requires no work years, it matches all
      if (wy.includes('无') || wy.includes('无需') || wy.includes('应届生') || wy.length === 0) return true;
      return true; // Don't filter out by work years — show all with info
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

import { MatchAnswers } from './types';

interface MatchResult {
  match: Certificate[];
  future: Certificate[];
}

export function matchCertificates(answers: MatchAnswers, certs: Certificate[]): MatchResult {
  const match: Certificate[] = [];
  const future: Certificate[] = [];

  for (const cert of certs) {
    let score = 0;

    // Education matching — more flexible
    if (answers.education && answers.education !== '不限') {
      const edu = answers.education;
      const reqEdu = cert.requirements.education;
      if (reqEdu.includes(edu)) score += 2;
      else if (reqEdu.includes('不限') || reqEdu.includes('无学历要求')) score += 1.5;
      else if (
        (edu === '本科' && (reqEdu.includes('大专') || reqEdu.includes('高中')))
        || (edu === '大专' && reqEdu.includes('高中'))
        || (edu === '硕士' && (reqEdu.includes('本科') || reqEdu.includes('大专')))
      ) score += 1; // higher education always qualifies
    } else {
      score += 1; // no education filter → baseline
    }

    // Major matching
    if (answers.major && answers.major !== '不限') {
      const major = answers.major;
      const reqMajor = cert.requirements.major || '';
      const catMatch = (
        (major === '财经' && (cert.category?.includes('财会') || cert.category?.includes('金融') || cert.name.includes('会计') || cert.name.includes('税务') || cert.name.includes('经济')))
        || (major === '工程' && (cert.category?.includes('建筑') || cert.category?.includes('工程') || cert.name.includes('建造师') || cert.name.includes('消防') || cert.name.includes('监理')))
        || (major === '医学' && (cert.category?.includes('医学') || cert.category?.includes('药学') || cert.category?.includes('健康') || cert.name.includes('药师') || cert.name.includes('护理')))
        || (major === '法律' && (cert.category?.includes('法律') || cert.name.includes('法律') || cert.name.includes('律师')))
        || (major === '教育' && (cert.category?.includes('教育') || cert.name.includes('教师') || cert.name.includes('教师资格')))
        || (major === 'IT' && (cert.category?.includes('IT') || cert.category?.includes('计算机') || cert.name.includes('软考') || cert.name.includes('PMP')))
      );
      if (catMatch) score += 2;
      else if (reqMajor.includes(major) || reqMajor.includes('不限')) score += 1;
      else score += 0.5; // still relevant but not perfect match
    } else {
      score += 1;
    }

    // Purpose matching via tags/description/category
    if (answers.purpose && answers.purpose !== '不限') {
      const purpose = answers.purpose;
      if (cert.description.includes(purpose)) score += 2;
      if (cert.tags.some(t => t.includes(purpose))) score += 1.5;
      if (cert.career.positions.some(p => p.includes(purpose))) score += 1.5;
      // Broader purpose heuristics
      if (purpose === '升职加薪' && (cert.tags.includes('高含金量') || cert.tags.includes('刚需证书'))) score += 1;
      if (purpose === '转行' && (cert.level?.includes('初级') || cert.tags.includes('入门级'))) score += 1;
      if (purpose === '落户' && cert.inNationalCatalog) score += 1.5;
      if (purpose === '副业' && (cert.name.includes('导游') || cert.name.includes('健康管理') || cert.name.includes('心理咨询'))) score += 1;
    } else {
      score += 0.5;
    }

    // Work years — relaxed
    if (answers.workYears && answers.workYears !== '不限') {
      const wy = answers.workYears;
      const reqWY = cert.requirements.workYears || '';
      if (reqWY.includes('无') || reqWY.includes('无需') || reqWY.includes('应届生') || reqWY.length === 0) score += 1.5;
      else if (wy === '5年以上') score += 1; // experienced can handle most requirements
      else if ((wy === '3-5年' || wy === '1-3年') && !reqWY.includes('5年')) score += 1;
      else if (wy === '1年以下' || wy === '无') score += 0.5;
    } else {
      score += 0.5;
    }

    // Hot bonus
    if (cert.hotScore >= 70) score += 0.5;

    if (score >= 4) match.push(cert);
    else if (score >= 2) future.push(cert);
  }

  match.sort((a, b) => b.hotScore - a.hotScore);
  future.sort((a, b) => b.hotScore - a.hotScore);

  return { match, future };
}
