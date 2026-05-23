import { useState, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import { Search } from 'lucide-react';
import { certificates } from '../data';

interface Props {
  keyword: string;
  onKeywordChange: (v: string) => void;
}

export default function SearchHero({ keyword, onKeywordChange }: Props) {
  const [input, setInput] = useState(keyword);
  const navigate = useNavigate();

  const handleSubmit = useCallback((e: React.FormEvent) => {
    e.preventDefault();
    onKeywordChange(input);
    navigate(`/search?keyword=${encodeURIComponent(input)}`);
  }, [input, onKeywordChange, navigate]);

  return (
    <div className="bg-gradient-to-br from-slate-900 via-slate-800 to-blue-900 text-white py-16 sm:py-20 px-4">
      <div className="max-w-3xl mx-auto text-center">
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 tracking-tight">
          找到适合你考的证
        </h1>
        <p className="text-slate-300 text-base sm:text-lg mb-8">
          已收录 {certificates.length} 种热门国内证书，覆盖报考条件、时间、职业方向
        </p>

        <form onSubmit={handleSubmit} className="relative max-w-2xl mx-auto">
          <div className="relative flex items-center">
            <Search className="absolute left-4 w-5 h-5 text-slate-400" />
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="输入证书名、职业方向或学历，如：大专能考什么证"
              className="w-full pl-12 pr-32 py-4 rounded-2xl text-slate-900 text-base shadow-2xl focus:outline-none focus:ring-4 focus:ring-blue-400/50"
            />
            <button
              type="submit"
              className="absolute right-2 bg-blue-600 hover:bg-blue-700 text-white px-6 py-2.5 rounded-xl text-sm font-medium transition-colors shrink-0"
            >
              搜索
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
