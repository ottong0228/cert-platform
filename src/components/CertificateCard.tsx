import { Link } from 'react-router-dom';
import { Clock, BookOpen, Award, Tag, TrendingUp, MapPin, DollarSign } from 'lucide-react';
import type { Certificate } from '../types';

interface Props {
  cert: Certificate;
  showCompare?: boolean;
  checked?: boolean;
  onCompareToggle?: (id: string) => void;
  onFavorite?: (id: string) => void;
  isFavorite?: boolean;
}

const trendColors: Record<string, string> = {
  '上升': 'bg-emerald-50 text-emerald-700 border border-emerald-200',
  '稳定': 'bg-blue-50 text-blue-700 border border-blue-200',
  '饱和': 'bg-slate-50 text-slate-600 border border-slate-200',
};

const levelColors: Record<string, string> = {
  '初级': 'bg-green-100 text-green-700 border border-green-200',
  '中级': 'bg-blue-100 text-blue-700 border border-blue-200',
  '高级': 'bg-amber-100 text-amber-700 border border-amber-200',
  '不分级': 'bg-purple-100 text-purple-700 border border-purple-200',
};

export default function CertificateCard({ cert, showCompare, checked, onCompareToggle, onFavorite, isFavorite }: Props) {
  // 薪资范围格式化
  const salaryText = cert.career.salaryRange
    ? [cert.career.salaryRange.junior, cert.career.salaryRange.mid, cert.career.salaryRange.senior]
        .filter(Boolean)
        .join(' / ')
    : '面议';

  // 热门城市（前3个）
  const topCities = cert.career.demandCities.slice(0, 3).join('、');

  return (
    <div className="bg-white rounded-xl border border-slate-200 p-5 card-hover flex flex-col gap-3 relative hover:border-blue-300 hover:shadow-md transition-all">
      {/* Compare checkbox */}
      {showCompare && (
        <div className="absolute top-3 right-3 z-10">
          <input
            type="checkbox"
            checked={checked}
            onChange={() => onCompareToggle?.(cert.id)}
            className="w-4 h-4 accent-blue-600 cursor-pointer rounded"
            aria-label={`将${cert.name}加入对比`}
          />
        </div>
      )}

      {/* Favorite button */}
      {onFavorite && (
        <button
          onClick={() => onFavorite(cert.id)}
          className={`absolute top-3 right-9 z-10 text-lg transition-transform ${isFavorite ? 'scale-110' : 'hover:scale-110'}`}
          aria-label={isFavorite ? '取消收藏' : '收藏'}
        >
          {isFavorite ? '⭐' : '☆'}
        </button>
      )}

      {/* Header: 证书名称 + 等级 + 发证机构 */}
      <div>
        <div className="flex items-start gap-2 flex-wrap pr-16">
          <h3 className="text-base font-bold text-slate-900 leading-tight flex-1">{cert.name}</h3>
          <span className={`shrink-0 inline-flex items-center px-2.5 py-1 rounded-lg text-xs font-semibold ${levelColors[cert.level] || 'bg-slate-100 text-slate-600'}`}>
            {cert.level}
          </span>
        </div>
        <p className="text-xs text-slate-500 mt-1.5 flex items-center gap-1">
          <Award className="w-3 h-3" />
          <span className="font-medium">{cert.issuingAuthority}</span>
          <span className="mx-1">·</span>
          <span>{cert.category}</span>
        </p>
      </div>

      {/* Tags */}
      <div className="flex flex-wrap gap-1.5">
        {cert.tags.slice(0, 4).map((tag) => (
          <span key={tag} className="inline-flex items-center gap-1 px-2 py-0.5 bg-slate-50 text-slate-600 rounded text-xs border border-slate-100">
            <Tag className="w-2.5 h-2.5" />
            {tag}
          </span>
        ))}
        {cert.tags.length > 4 && (
          <span className="text-xs text-slate-400">+{cert.tags.length - 4}</span>
        )}
      </div>

      {/* Description */}
      <p className="text-sm text-slate-600 leading-relaxed line-clamp-2">{cert.description}</p>

      {/* 详细信息网格 */}
      <div className="grid grid-cols-2 gap-2 text-xs mt-auto pt-1">
        {/* 考试信息 */}
        <div className="flex items-center gap-1.5 text-slate-600 bg-slate-50 rounded-lg px-2 py-1.5">
          <BookOpen className="w-3.5 h-3.5 text-blue-500 shrink-0" />
          <span>{cert.exam.subjects.length}科 / {cert.exam.form}</span>
        </div>
        
        {/* 行业趋势 */}
        <div className={`flex items-center gap-1.5 rounded-lg px-2 py-1.5 ${trendColors[cert.career.industryTrend]}`}>
          <TrendingUp className="w-3.5 h-3.5 shrink-0" />
          <span className="font-medium">{cert.career.industryTrend}</span>
        </div>

        {/* 薪资范围 */}
        <div className="flex items-center gap-1.5 text-slate-600 bg-slate-50 rounded-lg px-2 py-1.5">
          <DollarSign className="w-3.5 h-3.5 text-green-500 shrink-0" />
          <span className="truncate">{salaryText}</span>
        </div>

        {/* 需求城市 */}
        <div className="flex items-center gap-1.5 text-slate-600 bg-slate-50 rounded-lg px-2 py-1.5">
          <MapPin className="w-3.5 h-3.5 text-orange-500 shrink-0" />
          <span className="truncate">{topCities || '全国'}</span>
        </div>
      </div>

      {/* CTA */}
      <Link
        to={`/certificate/${cert.id}`}
        className="mt-1 w-full text-center py-2.5 bg-blue-600 hover:bg-blue-700 text-white text-sm font-semibold rounded-lg transition-colors hover:shadow-lg"
      >
        查看详情
      </Link>
    </div>
  );
}
