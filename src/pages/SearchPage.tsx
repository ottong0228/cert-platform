import { useState, useEffect, useMemo } from 'react';
import { useSearchParams } from 'react-router-dom';
import { Search, ChevronLeft, ChevronRight } from 'lucide-react';
import FilterBar from '../components/FilterBar';
import CertificateCard from '../components/CertificateCard';
import CompareDrawer from '../components/CompareDrawer';
import { certificates, filterCertificates } from '../data';
import { useLocalStorage } from '../hooks/useLocalStorage';

// 分页组件
function Pagination({ 
  currentPage, 
  totalPages, 
  pageSize, 
  totalItems,
  onPageChange, 
  onPageSizeChange 
}: { 
  currentPage: number; 
  totalPages: number; 
  pageSize: number;
  totalItems: number;
  onPageChange: (page: number) => void; 
  onPageSizeChange: (size: number) => void;
}) {
  const pageSizeOptions = [20, 50, 100];
  const startItem = (currentPage - 1) * pageSize + 1;
  const endItem = Math.min(currentPage * pageSize, totalItems);

  return (
    <div className="flex flex-col sm:flex-row items-center justify-between gap-4 px-4 py-4 bg-white rounded-xl border border-slate-200 mt-6">
      {/* 左侧：页码信息 */}
      <div className="text-sm text-slate-600">
        显示 <span className="font-semibold text-slate-900">{startItem}-{endItem}</span> 条，
        共 <span className="font-semibold text-slate-900">{totalItems}</span> 条
      </div>

      {/* 中间：页码按钮 */}
      <div className="flex items-center gap-1">
        <button
          onClick={() => onPageChange(currentPage - 1)}
          disabled={currentPage === 1}
          className="p-2 rounded-lg border border-slate-200 hover:bg-slate-50 disabled:opacity-40 disabled:cursor-not-allowed transition-colors"
          aria-label="上一页"
        >
          <ChevronLeft className="w-4 h-4" />
        </button>
        
        {/* 页码按钮 */}
        {Array.from({ length: Math.min(5, totalPages) }, (_, i) => {
          let pageNum: number;
          if (totalPages <= 5) {
            pageNum = i + 1;
          } else if (currentPage <= 3) {
            pageNum = i + 1;
          } else if (currentPage >= totalPages - 2) {
            pageNum = totalPages - 4 + i;
          } else {
            pageNum = currentPage - 2 + i;
          }
          
          return (
            <button
              key={pageNum}
              onClick={() => onPageChange(pageNum)}
              className={`min-w-[36px] h-9 px-2 rounded-lg text-sm font-medium transition-colors ${
                currentPage === pageNum
                  ? 'bg-blue-600 text-white'
                  : 'border border-slate-200 hover:bg-slate-50 text-slate-700'
              }`}
            >
              {pageNum}
            </button>
          );
        })}
        
        <button
          onClick={() => onPageChange(currentPage + 1)}
          disabled={currentPage === totalPages}
          className="p-2 rounded-lg border border-slate-200 hover:bg-slate-50 disabled:opacity-40 disabled:cursor-not-allowed transition-colors"
          aria-label="下一页"
        >
          <ChevronRight className="w-4 h-4" />
        </button>
      </div>

      {/* 右侧：每页条数选择 */}
      <div className="flex items-center gap-2 text-sm">
        <span className="text-slate-500">每页</span>
        <select
          value={pageSize}
          onChange={(e) => onPageSizeChange(Number(e.target.value))}
          className="px-2 py-1.5 rounded-lg border border-slate-200 bg-white text-slate-700 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          {pageSizeOptions.map((size) => (
            <option key={size} value={size}>
              {size}条
            </option>
          ))}
        </select>
      </div>
    </div>
  );
}

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
  const [pageSize, setPageSize] = useState(20);
  const [currentPage, setCurrentPage] = useState(1);

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
  const sorted = useMemo(() => {
    return [...filtered].sort((a, b) => {
      if (sortBy === 'hotScore') return b.hotScore - a.hotScore;
      if (sortBy === 'difficulty') return a.level.length - b.level.length;
      if (sortBy === 'value') return b.hotScore - a.hotScore;
      return 0;
    });
  }, [filtered, sortBy]);

  // 分页数据
  const totalItems = sorted.length;
  const totalPages = Math.ceil(totalItems / pageSize);
  const paginatedData = useMemo(() => {
    const start = (currentPage - 1) * pageSize;
    return sorted.slice(start, start + pageSize);
  }, [sorted, currentPage, pageSize]);

  // 切换每页条数时重置到第一页
  const handlePageSizeChange = (size: number) => {
    setPageSize(size);
    setCurrentPage(1);
  };

  // 筛选条件变化时重置分页
  useEffect(() => {
    setCurrentPage(1);
  }, [keyword, category, education, workYears, sortBy, difficulty]);

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
          <>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {paginatedData.map((cert) => (
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
            
            {/* 分页组件 */}
            {totalPages > 1 && (
              <Pagination
                currentPage={currentPage}
                totalPages={totalPages}
                pageSize={pageSize}
                totalItems={totalItems}
                onPageChange={setCurrentPage}
                onPageSizeChange={handlePageSizeChange}
              />
            )}
          </>
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
