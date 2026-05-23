import { useState } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import {
  Star, BookmarkPlus, BookmarkCheck, GitCompare, CheckCircle2, XCircle,
  Clock, DollarSign, BookOpen, MapPin, TrendingUp, BarChart2, ArrowLeft,
  Award, Calendar, Target, Briefcase, Lightbulb, ArrowRight
} from 'lucide-react';
import { certificates } from '../data';
import { useLocalStorage } from '../hooks/useLocalStorage';
import CertificateCard from '../components/CertificateCard';

const trendColors: Record<string, string> = {
  '上升': 'text-emerald-600 bg-emerald-50',
  '稳定': 'text-blue-600 bg-blue-50',
  '饱和': 'text-slate-600 bg-slate-100',
};

/** Format text: split by semicolons/periods for display, bold key terms */
function FormatText({ text, className = '' }: { text: string; className?: string }) {
  if (!text) return null;
  
  // Split by common delimiters that indicate new lines in Chinese cert data
  const parts = text.split(/(?<=；|。|\.)\s*/).filter(s => s.trim());
  
  // Key terms to bold (first occurrence of level indicators like 初级/中级/高级, etc.)
  const boldPatterns = /^(初级|中级|高级|本科|大专|高中|硕士|博士|研究生|应届生|社会工作经验|无需|不限)/;
  
  return (
    <div className={className}>
      {parts.map((part, i) => {
        const trimmed = part.trim();
        if (!trimmed) return null;
        
        // Check if this line starts with a key term we should bold
        const match = trimmed.match(boldPatterns);
        const boldText = match ? match[0] : null;
        const rest = boldText ? trimmed.slice(boldText.length) : trimmed;
        
        return (
          <p key={i} className="text-sm text-slate-700 leading-relaxed mb-1.5 last:mb-0">
            {boldText && <strong className="font-bold text-slate-900 text-[15px]">{boldText}</strong>}
            {rest}
          </p>
        );
      })}
    </div>
  );
}

export default function DetailPage() {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const [favorites, setFavorites] = useLocalStorage<string[]>('favorites', []);
  const [compareIds, setCompareIds] = useLocalStorage<string[]>('compare', []);

  const cert = certificates.find((c) => c.id === id);

  if (!cert) {
    return (
      <div className="max-w-7xl mx-auto px-4 py-20 text-center">
        <div className="text-6xl mb-4">😕</div>
        <h2 className="text-xl font-bold text-slate-700 mb-2">证书不存在</h2>
        <Link to="/search" className="text-blue-600 hover:underline">返回搜索</Link>
      </div>
    );
  }

  const isFavorite = favorites.includes(cert.id);
  const isCompare = compareIds.includes(cert.id);

  const toggleFavorite = () => {
    setFavorites((prev) =>
      prev.includes(cert.id) ? prev.filter((f) => f !== cert.id) : [...prev, cert.id]
    );
  };

  const toggleCompare = () => {
    setCompareIds((prev) => {
      if (prev.includes(cert.id)) return prev.filter((i) => i !== cert.id);
      if (prev.length >= 3) return prev;
      return [...prev, cert.id];
    });
  };

  const relatedCerts = certificates
    .filter((c) => cert.career.relatedCertificates.some((rc) => c.name.includes(rc)) && c.id !== cert.id)
    .slice(0, 3);

  return (
    <div className="min-h-screen pb-24 fade-in">
      {/* Back */}
      <div className="bg-white border-b border-slate-200 px-4 py-3">
        <div className="max-w-5xl mx-auto">
          <button onClick={() => navigate(-1)} className="flex items-center gap-1.5 text-sm text-slate-500 hover:text-slate-700">
            <ArrowLeft className="w-4 h-4" /> 返回
          </button>
        </div>
      </div>

      {/* Header */}
      <div className="bg-gradient-to-r from-slate-900 to-blue-900 text-white px-4 py-8">
        <div className="max-w-5xl mx-auto">
          <div className="flex items-start gap-3 flex-wrap">
            <div className="flex-1 min-w-0">
              <div className="flex items-center gap-2 mb-2">
                <span className="bg-blue-600 text-white text-xs px-2.5 py-1 rounded-full font-medium">{cert.level}</span>
                <span className="bg-white/10 text-white text-xs px-2.5 py-1 rounded-full">{cert.category}</span>
              </div>
              <h1 className="text-2xl sm:text-3xl font-bold mb-2">{cert.name}</h1>
              <p className="text-slate-300 text-sm mb-3">{cert.description}</p>
              <div className="flex flex-wrap gap-2">
                {cert.tags.map((tag) => (
                  <span key={tag} className="text-xs bg-white/10 text-slate-200 px-2.5 py-1 rounded-full">{tag}</span>
                ))}
              </div>
            </div>
            <div className="flex items-center gap-2 shrink-0">
              <button
                onClick={toggleFavorite}
                className={`flex items-center gap-1.5 px-4 py-2 rounded-xl text-sm font-medium transition-colors ${
                  isFavorite ? 'bg-amber-500 text-white' : 'bg-white/10 text-white hover:bg-white/20'
                }`}
              >
                {isFavorite ? <BookmarkCheck className="w-4 h-4" /> : <BookmarkPlus className="w-4 h-4" />}
                {isFavorite ? '已收藏' : '收藏'}
              </button>
              <button
                onClick={toggleCompare}
                className={`flex items-center gap-1.5 px-4 py-2 rounded-xl text-sm font-medium transition-colors ${
                  isCompare ? 'bg-blue-500 text-white' : 'bg-white/10 text-white hover:bg-white/20'
                }`}
              >
                <GitCompare className="w-4 h-4" />
                {isCompare ? '已加入对比' : '加入对比'}
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* All Content - No Tabs, scrollable sections */}
      <div className="max-w-5xl mx-auto px-4 py-8 space-y-8">
        
        {/* ===== 报考条件 ===== */}
        <section>
          <SectionTitle icon={<Target className="w-5 h-5" />} title="报考条件" />
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 mt-4">
            <InfoBlock label="学历要求" value={cert.requirements.education} />
            <InfoBlock label="专业要求" value={cert.requirements.major || '不限'} />
            {cert.requirements.workYears && (
              <InfoBlock label="工作年限" value={cert.requirements.workYears} wide />
            )}
            {cert.requirements.age && (
              <InfoBlock label="年龄要求" value={cert.requirements.age} />
            )}
          </div>
          {cert.requirements.otherConditions && cert.requirements.otherConditions.length > 0 && (
            <div className="mt-4 bg-white border border-slate-200 rounded-xl overflow-hidden">
              <div className="px-4 py-3 bg-slate-50 border-b border-slate-200">
                <h3 className="text-sm font-semibold text-slate-700">其他特殊条件</h3>
              </div>
              <div className="p-4 space-y-2">
                {cert.requirements.otherConditions.map((cond, i) => (
                  <div key={i} className="flex items-start gap-2 text-sm text-slate-700">
                    <CheckCircle2 className="w-4 h-4 text-emerald-500 mt-0.5 shrink-0" />
                    <FormatText text={cond} />
                  </div>
                ))}
              </div>
            </div>
          )}
          {cert.requirements.exemptions && (
            <div className="mt-4 bg-amber-50 border border-amber-200 rounded-xl p-4">
              <div className="flex items-start gap-2">
                <Award className="w-4 h-4 text-amber-600 mt-0.5 shrink-0" />
                <div>
                  <p className="text-sm font-bold text-amber-800 mb-1">免考政策</p>
                  <FormatText text={cert.requirements.exemptions} className="text-amber-700" />
                </div>
              </div>
            </div>
          )}
          {cert.policyChanges && (
            <div className="mt-4 bg-blue-50 border border-blue-200 rounded-xl p-4">
              <div className="flex items-start gap-2">
                <Lightbulb className="w-4 h-4 text-blue-600 mt-0.5 shrink-0" />
                <div>
                  <p className="text-sm font-bold text-blue-800 mb-1">近一两年政策变动</p>
                  <FormatText text={cert.policyChanges} className="text-blue-700" />
                </div>
              </div>
            </div>
          )}
        </section>

        {/* Divider */}
        <hr className="border-slate-200" />

        {/* ===== 考试信息 ===== */}
        <section>
          <SectionTitle icon={<BookOpen className="w-5 h-5" />} title="考试信息" />
          <div className="mt-4 space-y-4">
            {/* Subjects */}
            <div className="bg-white border border-slate-200 rounded-xl overflow-hidden">
              <div className="px-4 py-3 bg-slate-50 border-b border-slate-200">
                <h3 className="text-sm font-semibold text-slate-700">考试科目（共{cert.exam.subjects.length}科）</h3>
              </div>
              <div className="p-4 grid grid-cols-1 sm:grid-cols-2 gap-3">
                {cert.exam.subjects.map((subj, i) => (
                  <div key={i} className="flex items-center gap-3 bg-slate-50 rounded-lg px-4 py-3">
                    <span className="w-7 h-7 bg-blue-600 text-white rounded-lg flex items-center justify-center text-xs font-bold shrink-0">
                      {i + 1}
                    </span>
                    <span className="text-sm font-medium text-slate-800">{subj}</span>
                  </div>
                ))}
              </div>
            </div>
            
            {/* Exam Details Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              <InfoBlock label="考试形式" value={cert.exam.form} icon={<BookOpen className="w-4 h-4 text-blue-500" />} />
              <InfoBlock label="通过标准" value={cert.exam.passStandard} icon={<Target className="w-4 h-4 text-blue-500" />} />
              <InfoBlock label="大致费用" value={cert.exam.fee} icon={<DollarSign className="w-4 h-4 text-blue-500" />} />
              <InfoBlock label="组织形式" value={cert.exam.locationType} icon={<MapPin className="w-4 h-4 text-blue-500" />} />
            </div>
          </div>
        </section>

        {/* Divider */}
        <hr className="border-slate-200" />

        {/* ===== 时间线 ===== */}
        <section>
          <SectionTitle icon={<Calendar className="w-5 h-5" />} title="考证时间线" />
          <div className="mt-4 space-y-3">
            {[
              { emoji: '📝', label: '报名时间', value: cert.timeline.registrationTime, color: 'bg-blue-500' },
              { emoji: '📋', label: '考试时间', value: cert.timeline.examTime, color: 'bg-orange-500' },
              { emoji: '✅', label: '成绩公布', value: cert.timeline.resultTime, color: 'bg-emerald-500' },
              { emoji: '🏆', label: '领取证书', value: cert.timeline.certificateTime, color: 'bg-purple-500' },
            ].map((item, i) => (
              <div key={i} className="flex items-center gap-4">
                <div className={`w-10 h-10 ${item.color} rounded-xl flex items-center justify-center text-base shrink-0 shadow-sm`}>
                  {item.emoji}
                </div>
                <div className="flex-1 bg-white border border-slate-200 rounded-xl px-4 py-3 min-h-[52px] flex items-center">
                  <div>
                    <div className="text-xs text-slate-500 font-medium">{item.label}</div>
                    <FormatText text={item.value} className="text-sm font-semibold text-slate-800" />
                  </div>
                </div>
              </div>
            ))}
            
            {/* Secondary info row */}
            {(cert.timeline.scoreValidity || cert.timeline.certificateValidity || cert.timeline.continuingEducation) && (
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2">
                {cert.timeline.scoreValidity && (
                  <div className="bg-slate-50 border border-slate-200 rounded-xl px-4 py-3">
                    <div className="text-xs text-slate-500">📄 成绩有效期</div>
                    <FormatText text={cert.timeline.scoreValidity} className="text-sm font-medium text-slate-800 mt-1" />
                  </div>
                )}
                {cert.timeline.certificateValidity && (
                  <div className="bg-slate-50 border border-slate-200 rounded-xl px-4 py-3">
                    <div className="text-xs text-slate-500">🔄 证书有效期</div>
                    <FormatText text={cert.timeline.certificateValidity} className="text-sm font-medium text-slate-800 mt-1" />
                  </div>
                )}
                {cert.timeline.continuingEducation && (
                  <div className="bg-slate-50 border border-slate-200 rounded-xl px-4 py-3">
                    <div className="text-xs text-slate-500">📚 继续教育</div>
                    <FormatText text={cert.timeline.continuingEducation} className="text-sm font-medium text-slate-800 mt-1" />
                  </div>
                )}
              </div>
            )}
          </div>
        </section>

        {/* Divider */}
        <hr className="border-slate-200" />

        {/* ===== 职业方向 ===== */}
        <section>
          <SectionTitle icon={<Briefcase className="w-5 h-5" />} title="职业方向" />
          <div className="mt-4 space-y-4">
            {/* Positions */}
            <div className="bg-white border border-slate-200 rounded-xl p-4">
              <h3 className="text-sm font-semibold text-slate-700 mb-3">对口岗位</h3>
              <div className="flex flex-wrap gap-2">
                {cert.career.positions.map((pos) => (
                  <span key={pos} className="bg-blue-50 text-blue-700 px-3 py-1.5 rounded-lg text-sm font-medium hover:bg-blue-100 transition-colors cursor-default">
                    💼 {pos}
                  </span>
                ))}
              </div>
            </div>
            
            {/* Salary + Cities + Trend in a row */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
              {/* Salary */}
              {Object.keys(cert.career.salaryRange).length > 0 && (
                <div className="bg-white border border-slate-200 rounded-xl p-4 lg:col-span-1">
                  <h3 className="text-sm font-semibold text-slate-700 mb-3">💰 薪资区间参考</h3>
                  <div className="space-y-3">
                    {Object.entries(cert.career.salaryRange).map(([level, range]) => (
                      <div key={level} className="flex items-center gap-3">
                        <span className="text-xs text-slate-500 w-12 font-medium">
                          {level === 'junior' ? '初级' : level === 'mid' ? '中级' : '高级'}
                        </span>
                        <div className="flex-1 bg-slate-100 rounded-full h-2.5">
                          <div
                            className="bg-gradient-to-r from-blue-400 to-blue-600 h-2.5 rounded-full"
                            style={{ width: level === 'junior' ? '35%' : level === 'mid' ? '60%' : '90%' }}
                          />
                        </div>
                        <span className="text-sm font-bold text-blue-700 w-20 text-right">{range}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Cities */}
              <div className="bg-white border border-slate-200 rounded-xl p-4 lg:col-span-1">
                <h3 className="text-sm font-semibold text-slate-700 mb-3">📍 热门需求城市</h3>
                <div className="flex flex-wrap gap-2">
                  {cert.career.demandCities.map((city) => (
                    <span key={city} className="bg-slate-100 text-slate-700 px-2.5 py-1 rounded-md text-xs font-medium">
                      {city}
                    </span>
                  ))}
                </div>
              </div>

              {/* Trend */}
              <div className="bg-white border border-slate-200 rounded-xl p-4 lg:col-span-1">
                <h3 className="text-sm font-semibold text-slate-700 mb-3">📊 行业趋势</h3>
                <div className={`inline-flex items-center gap-2 px-4 py-2.5 rounded-xl text-sm font-bold ${trendColors[cert.career.industryTrend]}`}>
                  <TrendingUp className="w-4 h-4" />
                  {cert.career.industryTrend}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Divider */}
        <hr className="border-slate-200" />

        {/* ===== 备考建议 ===== */}
        <section>
          <SectionTitle icon={<Lightbulb className="w-5 h-5" />} title="备考建议" />
          <div className="mt-4 grid grid-cols-1 sm:grid-cols-3 gap-4">
            <div className="bg-white border border-slate-200 rounded-xl p-4">
              <div className="flex items-center gap-2 mb-2">
                <Clock className="w-4 h-4 text-blue-600" />
                <h3 className="text-sm font-semibold text-slate-700">建议学习时长</h3>
              </div>
              <p className="text-lg font-bold text-slate-900">{cert.preparation.suggestedDuration || '—'}</p>
            </div>
            <div className="bg-white border border-slate-200 rounded-xl p-4">
              <div className="flex items-center gap-2 mb-2">
                <BookOpen className="w-4 h-4 text-blue-600" />
                <h3 className="text-sm font-semibold text-slate-700">备考教材</h3>
              </div>
              <ul className="space-y-1.5">
                {cert.preparation.materials.map((mat, i) => (
                  <li key={i} className="text-sm text-slate-700 leading-relaxed">• {mat}</li>
                ))}
              </ul>
            </div>
            <div className="bg-white border border-slate-200 rounded-xl p-4">
              <div className="flex items-center gap-2 mb-2">
                {cert.preparation.hasPastPapers 
                  ? <CheckCircle2 className="w-4 h-4 text-emerald-500" /> 
                  : <XCircle className="w-4 h-4 text-slate-400" />}
                <h3 className="text-sm font-semibold text-slate-700">历年真题</h3>
              </div>
              <p className={`text-sm ${cert.preparation.hasPastPapers ? 'text-emerald-700 font-medium' : 'text-slate-500'}`}>
                {cert.preparation.hasPastPapers ? '有公开历年真题，可通过题库练习' : '暂无公开真题'}
              </p>
            </div>
          </div>
        </section>

        {/* Divider */}
        <hr className="border-slate-200" />

        {/* ===== 关联证书 ===== */}
        <section>
          <SectionTitle icon={<ArrowRight className="w-5 h-5" />} title="关联证书推荐" />
          <div className="mt-4">
            {relatedCerts.length > 0 ? (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
                {relatedCerts.map((rc) => (
                  <CertificateCard key={rc.id} cert={rc} />
                ))}
              </div>
            ) : (
              <p className="text-sm text-slate-500 bg-slate-50 rounded-xl p-6 text-center">暂无关联证书推荐</p>
            )}
          </div>
        </section>
      </div>

      {/* Bottom CTA */}
      <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-slate-200 px-4 py-3 z-40">
        <div className="max-w-5xl mx-auto flex items-center gap-3">
          <button
            onClick={toggleCompare}
            className={`flex-1 py-3 rounded-xl text-sm font-medium transition-colors flex items-center justify-center gap-2 ${
              isCompare
                ? 'bg-blue-600 text-white'
                : 'bg-blue-50 text-blue-700 hover:bg-blue-100'
            }`}
          >
            <GitCompare className="w-4 h-4" />
            {isCompare ? '已加入对比' : '加入对比'}
          </button>
          <Link
            to={`/compare?ids=${compareIds.join(',')}`}
            className="flex-1 py-3 bg-slate-900 text-white rounded-xl text-sm font-medium text-center hover:bg-slate-800 transition-colors"
          >
            查看对比
          </Link>
        </div>
      </div>
    </div>
  );
}

/* ─── Reusable Section Components ─── */

function SectionTitle({ icon, title }: { icon: React.ReactNode; title: string }) {
  return (
    <div className="flex items-center gap-2">
      <div className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center text-blue-600">
        {icon}
      </div>
      <h2 className="text-lg font-bold text-slate-900">{title}</h2>
    </div>
  );
}

function InfoBlock({ label, value, icon, wide = false }: { label: string; value: string; icon?: React.ReactNode; wide?: boolean }) {
  return (
    <div className={`bg-white border border-slate-200 rounded-xl p-4 ${wide ? 'lg:col-span-2' : ''}`}>
      <div className="flex items-center gap-1.5 mb-1.5">
        {icon && icon}
        <span className="text-xs text-slate-500 font-medium uppercase tracking-wide">{label}</span>
      </div>
      <FormatText text={value} className="text-sm font-semibold text-slate-800" />
    </div>
  );
}
