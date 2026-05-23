import { Link } from 'react-router-dom';
import { Clock, BookOpen, Award, Tag } from 'lucide-react';
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
  '上升': 'bg-emerald-100 text-emerald-700',
  '稳定': 'bg-blue-100 text-blue-700',
  '饱和': 'bg-slate-100 text-slate-600',
};

const levelColors: Record<string, string> = {
  '初级': 'bg-green-100 text-green-700',
  '中级': 'bg-blue-100 text-blue-700',
  '高级': 'bg-amber-100 text-amber-700',
  '不分级': 'bg-purple-100 text-purple-700',
};

export default function CertificateCard({ cert, showCompare, checked, onCompareToggle, onFavorite, isFavorite }: Props) {
  return (
    <div className="bg-white rounded-xl border border-slate-200 p-5 card-hover flex flex-col gap-3 relative">
      {/* Compare checkbox */}
      {showCompare && (
        <div className="absolute top-4 right-4">
          <input
            type="checkbox"
            checked={checked}
            onChange={() => onCompareToggle?.(cert.id)}
            className="w-4 h-4 accent-blue-600 cursor-pointer"
            aria-label={`将${cert.name}加入对比`}
          />
        </div>
      )}

      {/* Favorite button */}
      {onFavorite && (
        <button
          onClick={() => onFavorite(cert.id)}
          className={`absolute top-4 right-10 text-lg transition-transform ${isFavorite ? 'scale-110' : 'hover:scale-110'}`}
          aria-label={isFavorite ? '取消收藏' : '收藏'}
        >
          {isFavorite ? '⭐' : '☆'}
        </button>
      )}

      {/* Header */}
      <div>
        <div className="flex items-start gap-2 flex-wrap">
          <h3 className="text-base font-bold text-slate-900 leading-snug">{cert.name}</h3>
          <span className={`shrink-0 inline-flex items-center px-2 py-0.5 rounded text-xs font-medium ${levelColors[cert.level] || 'bg-slate-100 text-slate-600'}`}>
            {cert.level}
          </span>
        </div>
        <p className="text-xs text-slate-500 mt-1">
          <span className="font-medium">{cert.issuingAuthority}</span>
          <span className="mx-1">·</span>
          <span>{cert.category}</span>
        </p>
      </div>

      {/* Tags */}
      <div className="flex flex-wrap gap-1">
        {cert.tags.slice(0, 3).map((tag) => (
          <span key={tag} className="inline-flex items-center gap-1 px-2 py-0.5 bg-slate-100 text-slate-600 rounded text-xs">
            <Tag className="w-2.5 h-2.5" />
            {tag}
          </span>
        ))}
      </div>

      {/* Description */}
      <p className="text-sm text-slate-600 leading-relaxed line-clamp-2">{cert.description}</p>

      {/* Meta */}
      <div className="flex items-center gap-4 text-xs text-slate-500 mt-auto pt-1">
        <span className="flex items-center gap-1">
          <BookOpen className="w-3 h-3" />
          {cert.exam.subjects.length}科
        </span>
        <span className="flex items-center gap-1">
          <Clock className="w-3 h-3" />
          {cert.exam.form}
        </span>
        <span className={`shrink-0 px-1.5 py-0.5 rounded text-xs font-medium ${trendColors[cert.career.industryTrend]}`}>
          {cert.career.industryTrend === '上升' ? '📈' : cert.career.industryTrend === '稳定' ? '📊' : '📉'} {cert.career.industryTrend}
        </span>
      </div>

      {/* CTA */}
      <Link
        to={`/certificate/${cert.id}`}
        className="mt-2 w-full text-center py-2 bg-blue-600 hover:bg-blue-700 text-white text-sm font-medium rounded-lg transition-colors"
      >
        查看详情
      </Link>
    </div>
  );
}
