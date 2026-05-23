import { ChevronDown, ArrowUpDown } from 'lucide-react';
import { categories, educationOptions, workYearOptions } from '../data';

interface Props {
  category: string;
  education: string;
  workYears: string;
  sortBy: string;
  onCategoryChange: (v: string) => void;
  onEducationChange: (v: string) => void;
  onWorkYearsChange: (v: string) => void;
  onSortChange: (v: string) => void;
  resultCount: number;
}

export default function FilterBar({
  category, education, workYears, sortBy,
  onCategoryChange, onEducationChange, onWorkYearsChange, onSortChange,
  resultCount,
}: Props) {
  return (
    <div className="bg-white border-b border-slate-200 sticky top-16 z-40 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3">
        <div className="flex flex-wrap items-center gap-2">
          {/* 分类 */}
          <div className="relative">
            <select
              value={category}
              onChange={(e) => onCategoryChange(e.target.value)}
              className="appearance-none bg-slate-100 border border-slate-200 rounded-lg px-3 py-1.5 pr-7 text-sm text-slate-700 focus:outline-none focus:ring-2 focus:ring-blue-500 cursor-pointer"
            >
              {categories.map((c) => (
                <option key={c} value={c}>{c}</option>
              ))}
            </select>
            <ChevronDown className="absolute right-2 top-1/2 -translate-y-1/2 w-3.5 h-3.5 text-slate-400 pointer-events-none" />
          </div>

          {/* 学历 */}
          <div className="relative">
            <select
              value={education}
              onChange={(e) => onEducationChange(e.target.value)}
              className="appearance-none bg-slate-100 border border-slate-200 rounded-lg px-3 py-1.5 pr-7 text-sm text-slate-700 focus:outline-none focus:ring-2 focus:ring-blue-500 cursor-pointer"
            >
              <option value="不限">学历要求</option>
              {educationOptions.filter(e => e !== '不限').map((e) => (
                <option key={e} value={e}>{e}</option>
              ))}
            </select>
            <ChevronDown className="absolute right-2 top-1/2 -translate-y-1/2 w-3.5 h-3.5 text-slate-400 pointer-events-none" />
          </div>

          {/* 工作年限 */}
          <div className="relative">
            <select
              value={workYears}
              onChange={(e) => onWorkYearsChange(e.target.value)}
              className="appearance-none bg-slate-100 border border-slate-200 rounded-lg px-3 py-1.5 pr-7 text-sm text-slate-700 focus:outline-none focus:ring-2 focus:ring-blue-500 cursor-pointer"
            >
              <option value="不限">工作年限</option>
              {workYearOptions.filter(w => w !== '不限').map((w) => (
                <option key={w} value={w}>{w}</option>
              ))}
            </select>
            <ChevronDown className="absolute right-2 top-1/2 -translate-y-1/2 w-3.5 h-3.5 text-slate-400 pointer-events-none" />
          </div>

          {/* 排序 */}
          <div className="relative ml-auto">
            <select
              value={sortBy}
              onChange={(e) => onSortChange(e.target.value)}
              className="appearance-none bg-white border border-slate-200 rounded-lg px-3 py-1.5 pr-7 text-sm text-slate-700 focus:outline-none focus:ring-2 focus:ring-blue-500 cursor-pointer flex items-center gap-1.5"
            >
              <option value="hotScore">🔥 热度</option>
              <option value="difficulty">📊 难度</option>
              <option value="value">💰 含金量</option>
            </select>
            <ArrowUpDown className="absolute right-2 top-1/2 -translate-y-1/2 w-3.5 h-3.5 text-slate-400 pointer-events-none" />
          </div>

          <span className="text-xs text-slate-500 ml-2">{resultCount} 条结果</span>
        </div>
      </div>
    </div>
  );
}
