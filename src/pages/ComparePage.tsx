import { useNavigate, useSearchParams } from 'react-router-dom';
import { ArrowLeft, Trash2, ArrowRight } from 'lucide-react';
import { certificates } from '../data';
import { useLocalStorage } from '../hooks/useLocalStorage';

export default function ComparePage() {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const [compareIds, setCompareIds] = useLocalStorage<string[]>('compare', []);

  const idsFromUrl = searchParams.get('ids')?.split(',').filter(Boolean) || [];
  const activeIds = idsFromUrl.length > 0 ? idsFromUrl : compareIds;
  const certs = certificates.filter((c) => activeIds.includes(c.id));

  const handleClear = () => {
    setCompareIds([]);
    navigate('/search');
  };

  const removeCert = (id: string) => {
    const newIds = compareIds.filter((i) => i !== id);
    setCompareIds(newIds);
    if (newIds.length === 0) navigate('/search');
  };

  if (certs.length < 2) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center px-4 text-center">
        <div className="text-7xl mb-6">📋</div>
        <h2 className="text-xl font-bold text-slate-700 mb-3">至少选择2个证书进行对比</h2>
        <p className="text-slate-500 mb-8">去搜索页选择证书，加入对比后返回这里</p>
        <button
          onClick={() => navigate('/search')}
          className="flex items-center gap-2 bg-blue-600 text-white px-6 py-3 rounded-xl font-medium hover:bg-blue-700 transition-colors"
        >
          <ArrowRight className="w-4 h-4" /> 去搜索
        </button>
      </div>
    );
  }

  const trendColors: Record<string, string> = {
    '上升': 'bg-emerald-100 text-emerald-700',
    '稳定': 'bg-blue-100 text-blue-700',
    '饱和': 'bg-slate-100 text-slate-600',
  };

  return (
    <div className="min-h-screen pb-10">
      {/* Header */}
      <div className="bg-white border-b border-slate-200 px-4 py-4">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <button onClick={() => navigate(-1)} className="flex items-center gap-1.5 text-sm text-slate-500 hover:text-slate-700">
            <ArrowLeft className="w-4 h-4" /> 返回
          </button>
          <h1 className="text-base font-bold text-slate-900">证书对比</h1>
          <button onClick={handleClear} className="flex items-center gap-1.5 text-sm text-red-500 hover:text-red-600">
            <Trash2 className="w-4 h-4" /> 清空
          </button>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        {/* Cert Headers */}
        <div className={`grid gap-4 mb-4`} style={{ gridTemplateColumns: `200px repeat(${certs.length}, 1fr)` }}>
          <div></div>
          {certs.map((cert) => (
            <div key={cert.id} className="bg-white border border-slate-200 rounded-xl p-4 text-center relative">
              <button
                onClick={() => removeCert(cert.id)}
                className="absolute top-2 right-2 text-slate-400 hover:text-red-500"
              >
                ✕
              </button>
              <div className="text-base font-bold text-slate-900 mb-1">{cert.name}</div>
              <div className="text-xs text-slate-500">{cert.level} · {cert.category}</div>
              <div className={`mt-2 inline-block text-xs px-2 py-0.5 rounded ${trendColors[cert.career.industryTrend]}`}>
                📈 {cert.career.industryTrend}
              </div>
            </div>
          ))}
        </div>

        {/* Comparison Rows */}
        <div className="space-y-3">
          {[
            {
              label: '发证机关',
              values: certs.map((c) => c.issuingAuthority),
            },
            {
              label: '学历要求',
              values: certs.map((c) => c.requirements.education),
              highlight: certs.some((c) => c.requirements.education.includes('大专')),
            },
            {
              label: '工作年限',
              values: certs.map((c) => c.requirements.workYears || '无要求'),
            },
            {
              label: '考试科目数',
              values: certs.map((c) => `${c.exam.subjects.length} 科`),
            },
            {
              label: '考试形式',
              values: certs.map((c) => c.exam.form),
            },
            {
              label: '通过标准',
              values: certs.map((c) => c.exam.passStandard),
            },
            {
              label: '考试费用',
              values: certs.map((c) => c.exam.fee),
            },
            {
              label: '组织形式',
              values: certs.map((c) => c.exam.locationType),
            },
            {
              label: '报名时间',
              values: certs.map((c) => c.timeline.registrationTime),
            },
            {
              label: '考试时间',
              values: certs.map((c) => c.timeline.examTime),
            },
            {
              label: '成绩有效期',
              values: certs.map((c) => c.timeline.scoreValidity),
            },
            {
              label: '证书有效期',
              values: certs.map((c) => c.timeline.certificateValidity),
            },
            {
              label: '建议备考时长',
              values: certs.map((c) => c.preparation.suggestedDuration),
            },
            {
              label: '对口岗位',
              values: certs.map((c) => c.career.positions.slice(0, 2).join('、')),
            },
            {
              label: '初入职薪资',
              values: certs.map((c) => c.career.salaryRange.junior || '面议'),
            },
            {
              label: '资深薪资',
              values: certs.map((c) => c.career.salaryRange.senior || '面议'),
            },
            {
              label: '热门城市',
              values: certs.map((c) => c.career.demandCities.slice(0, 2).join('、')),
            },
            {
              label: '历年真题',
              values: certs.map((c) => c.preparation.hasPastPapers ? '✅ 有' : '❌ 无'),
            },
          ].map((row, i) => (
            <div
              key={i}
              className="grid bg-white border border-slate-200 rounded-xl overflow-hidden"
              style={{ gridTemplateColumns: `200px repeat(${certs.length}, 1fr)` }}
            >
              <div className="px-4 py-3 bg-slate-50 border-r border-slate-200 flex items-center">
                <span className="text-sm font-semibold text-slate-600">{row.label}</span>
              </div>
              {row.values.map((val, j) => (
                <div key={j} className="px-4 py-3 flex items-center">
                  <span className="text-sm text-slate-800">{val}</span>
                </div>
              ))}
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-8 flex gap-3">
          <button
            onClick={() => navigate('/search')}
            className="flex-1 py-3 bg-slate-100 text-slate-700 rounded-xl text-sm font-medium hover:bg-slate-200 transition-colors"
          >
            返回搜索
          </button>
          <button
            onClick={handleClear}
            className="flex-1 py-3 bg-red-50 text-red-600 rounded-xl text-sm font-medium hover:bg-red-100 transition-colors"
          >
            清空对比
          </button>
        </div>
      </div>
    </div>
  );
}
