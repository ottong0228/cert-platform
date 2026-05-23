import { useState } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { RefreshCcw, ArrowLeft, CheckCircle2 } from 'lucide-react';
import QuizMatch from '../components/QuizMatch';
import CertificateCard from '../components/CertificateCard';
import { certificates, matchCertificates } from '../data';
import { useLocalStorage } from '../hooks/useLocalStorage';
import type { MatchAnswers } from '../types';

export default function MatchPage() {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const [step, setStep] = useState<'quiz' | 'result'>('quiz');
  const [results, setResults] = useState<{ match: typeof certificates; future: typeof certificates }>({ match: [], future: [] });
  const [favorites, setFavorites] = useLocalStorage<string[]>('favorites', []);
  const [compareIds] = useLocalStorage<string[]>('compare', []);

  const toggleFavorite = (id: string) => {
    setFavorites((prev) =>
      prev.includes(id) ? prev.filter((f) => f !== id) : [...prev, id]
    );
  };

  const handleComplete = (answers: MatchAnswers) => {
    const { match, future } = matchCertificates(answers, certificates);
    setResults({ match, future });
    setStep('result');
  };

  const handleReset = () => {
    setStep('quiz');
    setResults({ match: [], future: [] });
  };

  return (
    <div className="min-h-screen">
      {/* Header */}
      <div className="bg-white border-b border-slate-200 px-4 py-4">
        <div className="max-w-3xl mx-auto flex items-center justify-between">
          {step === 'result' && (
            <button onClick={handleReset} className="flex items-center gap-1.5 text-sm text-slate-500 hover:text-slate-700">
              <ArrowLeft className="w-4 h-4" /> 重新测试
            </button>
          )}
          <h1 className={`${step === 'result' ? 'ml-auto mr-auto' : ''} text-base font-bold text-slate-900`}>
            {step === 'quiz' ? '智能匹配' : '匹配结果'}
          </h1>
          {step === 'result' && (
            <button onClick={() => navigate('/search')} className="text-sm text-blue-600 hover:text-blue-700">
              查看全部
            </button>
          )}
        </div>
      </div>

      <div className="max-w-5xl mx-auto px-4 py-8">
        {step === 'quiz' ? (
          <div className="fade-in">
            <div className="text-center mb-8">
              <div className="text-5xl mb-4">🎯</div>
              <h2 className="text-2xl font-bold text-slate-900 mb-2">告诉我你的情况</h2>
              <p className="text-slate-500">根据你的背景和目标，推荐最适合你的证书</p>
            </div>
            <QuizMatch onComplete={handleComplete} />
          </div>
        ) : (
          <div className="fade-in space-y-10">
            {/* 匹配结果 */}
            {results.match.length > 0 ? (
              <section>
                <div className="flex items-center gap-2 mb-5">
                  <CheckCircle2 className="w-5 h-5 text-emerald-600" />
                  <h2 className="text-lg font-bold text-slate-900">推荐考取</h2>
                  <span className="bg-emerald-100 text-emerald-700 text-xs px-2 py-0.5 rounded-full font-medium">
                    {results.match.length} 个证书匹配
                  </span>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
                  {results.match.map((cert) => (
                    <CertificateCard
                      key={cert.id}
                      cert={cert}
                      onFavorite={toggleFavorite}
                      isFavorite={favorites.includes(cert.id)}
                    />
                  ))}
                </div>
              </section>
            ) : (
              <div className="bg-slate-50 rounded-xl p-8 text-center">
                <div className="text-4xl mb-3">🔍</div>
                <p className="text-slate-600 font-medium">暂无完全匹配的证书</p>
                <p className="text-sm text-slate-400 mt-1">试试放宽条件或查看下方"未来可考"推荐</p>
              </div>
            )}

            {/* 未来可考 — Full size cards */}
            {results.future.length > 0 && (
              <section>
                <div className="flex items-center gap-2 mb-5">
                  <span className="w-5 h-5 rounded-full bg-amber-400 flex items-center justify-center text-white text-xs font-bold">⏳</span>
                  <h2 className="text-lg font-bold text-slate-900">未来可考</h2>
                  <span className="bg-amber-100 text-amber-700 text-xs px-2 py-0.5 rounded-full font-medium">
                    {results.future.length} 个推荐证书
                  </span>
                </div>
                <div className="bg-amber-50 border border-amber-200 rounded-xl p-4 mb-5">
                  <p className="text-sm text-amber-800 flex items-start gap-2">
                    💡 这些证书目前可能不完全符合你的条件，但通过提升学历或积累工作经验后，可以考虑考取。
                  </p>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
                  {results.future.map((cert) => (
                    <CertificateCard
                      key={cert.id}
                      cert={cert}
                      onFavorite={toggleFavorite}
                      isFavorite={favorites.includes(cert.id)}
                    />
                  ))}
                </div>
              </section>
            )}

            {/* Actions */}
            <div className="flex gap-3 pt-4 max-w-lg mx-auto">
              <button
                onClick={handleReset}
                className="flex items-center gap-2 flex-1 py-3 bg-slate-100 text-slate-700 rounded-xl text-sm font-medium hover:bg-slate-200 transition-colors"
              >
                <RefreshCcw className="w-4 h-4" /> 重新测试
              </button>
              <button
                onClick={() => navigate('/search')}
                className="flex-1 py-3 bg-blue-600 text-white rounded-xl text-sm font-medium hover:bg-blue-700 transition-colors"
              >
                查看全部证书
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
