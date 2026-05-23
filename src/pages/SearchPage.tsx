import { useState, useEffect, useCallback } from 'react';
import { useSearchParams } from 'react-router-dom';
import { Search } from 'lucide-react';
import FilterBar from '../components/FilterBar';
import CertificateCard from '../components/CertificateCard';
import CompareDrawer from '../components/CompareDrawer';
import { certificates, filterCertificates } from '../data';
import { useLocalStorage } from '../hooks/useLocalStorage';

export default function SearchPage() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [keyword, setKeyword] = useState(searchParams.get('keyword') || '');
  const [category, setCategory] = useState(searchParams.get('category') || '全部');
  const [education, setEducation] = useState(searchParams.get('education') || '不限');
  const [workYears, setWorkYears] = useState(searchParams.get('workYears') || '不限');
  const [sortBy, setSortBy] = useState<'hotScore' | 'difficulty' | 'value'>((searchParams.get('sortBy') as 'hotScore' | 'difficulty' | 'value') || 'hotScore');
  const [difficulty, setDifficulty] = useState(searchParams.get('difficulty') || '');
  const [compareIds, setCompareIds] = useLocalStorage<string[]>('compare', []);
  const [favorites, setFavorites] = useLocalStorage<string[]>('favorites', []);
  const [inputValue, setInputValue] = useState(keyword);

  // 防抖
  useEffect(() => {
    const timer = setTimeout(() => {
      setKeyword(inputValue);
    }, 300);
    return () => clearTimeout(timer);
  }, [inputValue]);

  // URL同步
  useEffect(() => {
    const params: Record<string, string> = {};
    if (keyword) params.keyword = keyword;
    if (category !== '全部') params.category = category;
    if (education !== '不限') params.education = education;
    if (workYears !== '不限') params.workYears = workYears;
    if (sortBy !== 'hotScore') params.sortBy = sortBy;
    setSearchParams(params, { replace: true });
  }, [keyword, category, education, workYears, sortBy, setSearchParams]);

  const filtered = filterCertificates(certificates, { keyword, category, education, workYears, sortBy, difficulty });

  // 排序
  const sorted = [...filtered].sort((a, b) => {
    if (sortBy === 'hotScore') return b.hotScore - a.hotScore;
    if (sortBy === 'difficulty') return a.level.length - b.level.length;
    if (sortBy === 'value') return b.hotScore - a.hotScore;
    return 0;
  });

  const handleCompareToggle = (id: string) => {
    setCompareIds((prev) =>
      prev.includes(id) ? prev.filter((i) => i !== id) : prev.length < 3 ? [...prev, id] : prev
    );
  };

  const toggleFavorite = (id: string) => {
    setFavorites((prev) =>
      prev.includes(id) ? prev.filter((f) => f !== id) : [...prev, id]
    );
  };

  return (
    <div className="min-h-screen pb-20">
      {/* Search Bar */}
      <div className="bg-white border-b border-slate-200 px-4 py-3">
        <div className="max-w-7xl mx-auto">
          <div className="relative max-w-2xl">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
            <input
              type="text"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              placeholder="搜索证书名称、职业方向、标签..."
              className="w-full pl-10 pr-4 py-2.5 bg-slate-100 rounded-xl text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
        </div>
      </div>

      {/* Filter Bar */}
      <FilterBar
        category={category}
        education={education}
        workYears={workYears}
        sortBy={sortBy}
        onCategoryChange={setCategory}
        onEducationChange={setEducation}
        onWorkYearsChange={setWorkYears}
        onSortChange={(v: string) => setSortBy(v as 'hotScore' | 'difficulty' | 'value')}
        resultCount={sorted.length}
      />

      {/* Results */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        {sorted.length === 0 ? (
          <div className="text-center py-20">
            <div className="text-6xl mb-4">🔍</div>
            <h3 className="text-lg font-semibold text-slate-700 mb-2">未找到符合条件的证书</h3>
            <p className="text-sm text-slate-500">尝试放宽筛选条件，或使用更通用的关键词</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {sorted.map((cert) => (
              <CertificateCard
                key={cert.id}
                cert={cert}
                showCompare={true}
                checked={compareIds.includes(cert.id)}
                onCompareToggle={handleCompareToggle}
                onFavorite={toggleFavorite}
                isFavorite={favorites.includes(cert.id)}
              />
            ))}
          </div>
        )}
      </div>

      {/* Compare Drawer */}
      <CompareDrawer
        compareIds={compareIds}
        certificates={certificates}
        onRemove={handleCompareToggle}
        onClear={() => setCompareIds([])}
      />
    </div>
  );
}
