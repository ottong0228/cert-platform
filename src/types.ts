export interface Certificate {
  id: string;
  name: string;
  category: string;
  level: string;
  issuingAuthority: string;
  inNationalCatalog: boolean;
  tags: string[];
  hotScore: number;
  description: string;

  requirements: {
    education: string;
    age?: string;
    major?: string;
    workYears?: string;
    otherConditions?: string[];
    exemptions?: string;
  };

  exam: {
    subjects: string[];
    form: string;
    passStandard: string;
    fee: string;
    locationType: string;
  };

  timeline: {
    registrationTime: string;
    examTime: string;
    resultTime: string;
    certificateTime: string;
    scoreValidity: string;
    certificateValidity: string;
    continuingEducation?: string;
  };

  career: {
    positions: string[];
    salaryRange: {
      junior?: string;
      mid?: string;
      senior?: string;
    };
    demandCities: string[];
    industryTrend: '上升' | '稳定' | '饱和';
    relatedCertificates: string[];
  };

  preparation: {
    suggestedDuration: string;
    materials: string[];
    hasPastPapers: boolean;
    notes?: string;
  };

  policyChanges?: string;
}

export interface FilterState {
  keyword: string;
  category: string;
  education: string;
  workYears: string;
  sortBy: 'hotScore' | 'difficulty' | 'value';
  difficulty?: string;
}

export interface MatchAnswers {
  education: string;
  major: string;
  workYears: string;
  purpose: string;
}
