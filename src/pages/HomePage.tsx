import { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { ArrowRight, Flame, Users, Briefcase, Trophy, Star, Calendar, ChevronDown } from 'lucide-react';
import SearchHero from '../components/SearchHero';
import CertificateCard from '../components/CertificateCard';
import { certificates, crowdOptions, purposeOptions } from '../data';
import { useLocalStorage } from '../hooks/useLocalStorage';

export default function HomePage() {
  const [keyword, setKeyword] = useState('');
  const navigate = useNavigate();
  const [favorites, setFavorites] = useLocalStorage<string[]>('favorites', []);
  const [compareIds] = useLocalStorage<string[]>('compare', []);
  const [selectedCalendarCert, setSelectedCalendarCert] = useState('');

  // 按热度排序取前6
  const hotCerts = [...certificates].sort((a, b) => b.hotScore - a.hotScore).slice(0, 6);

  // 日历热门证书（前8个有明确时间信息的）
  const calendarCerts = [...certificates]
    .sort((a, b) => b.hotScore - a.hotScore)
    .slice(0, 8);
  
  // 当前选中的日历证书，默认显示前5个热门
  const displayCalendarCerts = selectedCalendarCert
    ? certificates.filter(c => c.name === selectedCalendarCert || c.id === selectedCalendarCert)
    : calendarCerts.slice(0, 5);

  const handleCrowdClick = (crowd: string) => {
    navigate(`/search?crowd=${crowd}`);
  };

  const handlePurposeClick = (purpose: string) => {
    navigate(`/match?purpose=${purpose}`);
  };

  const toggleFavorite = (id: string) => {
    setFavorites((prev) =>
      prev.includes(id) ? prev.filter((f) => f !== id) : [...prev, id]
    );
  };

  return (
    <div className="min-h-screen">
      {/* Hero */}
      <SearchHero keyword={keyword} onKeywordChange={setKeyword} />

      {/* Shortcut Tags */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        {/* 按人群 */}
        <div className="mb-8">
          <h2 className="text-base font-bold text-slate-700 mb-4 flex items-center gap-2">
            <Users className="w-4 h-4 text-blue-600" />
            按人群找证
          </h2>
          <div className="flex flex-wrap gap-2">
            {crowdOptions.map((crowd) => (
              <button
                key={crowd}
                onClick={() => handleCrowdClick(crowd)}
                className="px-4 py-2 bg-white border border-slate-200 rounded-full text-sm text-slate-600 hover:border-blue-400 hover:text-blue-600 hover:bg-blue-50 transition-all"
              >
                {crowd}
              </button>
            ))}
          </div>
        </div>

        {/* 按目的 */}
        <div className="mb-8">
          <h2 className="text-base font-bold text-slate-700 mb-4 flex items-center gap-2">
            <Trophy className="w-4 h-4 text-blue-600" />
            按目的找证
          </h2>
          <div className="flex flex-wrap gap-2">
            {purposeOptions.filter(p => p !== '不限').map((purpose) => (
              <button
                key={purpose}
                onClick={() => handlePurposeClick(purpose)}
                className="px-4 py-2 bg-white border border-slate-200 rounded-full text-sm text-slate-600 hover:border-blue-400 hover:text-blue-600 hover:bg-blue-50 transition-all"
              >
                {purpose}
              </button>
            ))}
          </div>
        </div>

        {/* 按难度 */}
        <div className="mb-10">
          <h2 className="text-base font-bold text-slate-700 mb-4 flex items-center gap-2">
            <Star className="w-4 h-4 text-blue-600" />
            按难度找证
          </h2>
          <div className="flex flex-wrap gap-2">
            {[
              { label: '入门', desc: '零基础可考', color: 'emerald' },
              { label: '进阶', desc: '需专业基础', color: 'blue' },
              { label: '高阶', desc: '高难度高含金量', color: 'amber' },
            ].map((item) => (
              <button
                key={item.label}
                onClick={() => navigate(`/search?difficulty=${item.label}`)}
                className={`flex items-center gap-3 px-4 py-2.5 bg-white border border-slate-200 rounded-xl hover:border-blue-400 transition-all text-left ${
                  item.color === 'emerald' ? 'hover:bg-emerald-50' :
                  item.color === 'blue' ? 'hover:bg-blue-50' : 'hover:bg-amber-50'
                }`}
              >
                <span className={`text-sm font-bold text-slate-800`}>{item.label}</span>
                <span className="text-xs text-slate-500">{item.desc}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Hot Certificates */}
        <div className="mb-10">
          <div className="flex items-center justify-between mb-5">
            <h2 className="text-lg font-bold text-slate-900 flex items-center gap-2">
              <Flame className="w-5 h-5 text-orange-500" />
              热门推荐
            </h2>
            <Link
              to="/search"
              className="text-sm text-blue-600 hover:text-blue-700 flex items-center gap-1"
            >
              查看全部 <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {hotCerts.map((cert) => (
              <CertificateCard
                key={cert.id}
                cert={cert}
                onFavorite={toggleFavorite}
                isFavorite={favorites.includes(cert.id)}
              />
            ))}
          </div>
        </div>

        {/* Calendar — Improved with dropdown selector */}
        <div>
          <div className="flex items-center justify-between mb-5 flex-wrap gap-3">
            <h2 className="text-lg font-bold text-slate-900 flex items-center gap-2">
              <Calendar className="w-5 h-5 text-blue-600" />
              年度考证日历
            </h2>
            <div className="relative">
              <select
                value={selectedCalendarCert}
                onChange={(e) => setSelectedCalendarCert(e.target.value)}
                className="appearance-none bg-white border border-slate-200 rounded-lg pl-3 pr-8 py-2 text-sm text-slate-700 focus:outline-none focus:ring-2 focus:ring-blue-500 cursor-pointer"
              >
                <option value="">📋 热门证书时间</option>
                {certificates.map((c) => (
                  <option key={c.id} value={c.id}>{c.name}</option>
                ))}
              </select>
              <ChevronDown className="absolute right-2 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400 pointer-events-none" />
            </div>
          </div>

          {/* Timeline Cards for each cert */}
          <div className="space-y-4">
            {displayCalendarCerts.map((cert) => (
              <div key={cert.id} className="bg-white rounded-xl border border-slate-200 overflow-hidden">
                <div className="px-4 py-3 bg-gradient-to-r from-slate-50 to-blue-50 border-b border-slate-200 flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <span className="font-bold text-sm text-slate-800">{cert.name}</span>
                    <span className={`text-xs px-2 py-0.5 rounded-full ${
                      cert.level?.includes('初级') ? 'bg-green-100 text-green-700' :
                      cert.level?.includes('中级') ? 'bg-blue-100 text-blue-700' :
                      cert.level?.includes('高级') ? 'bg-amber-100 text-amber-700' :
                      'bg-purple-100 text-purple-700'
                    }`}>
                      {cert.level?.length > 15 ? cert.level.slice(0, 12) + '...' : cert.level}
                    </span>
                  </div>
                  <Link
                    to={`/certificate/${cert.id}`}
                    className="text-xs text-blue-600 hover:text-blue-700 font-medium"
                  >
                    详情 →
                  </Link>
                </div>
                <div className="p-4">
                  <div className="grid grid-cols-1 sm:grid-cols-4 gap-3">
                    {[
                      { emoji: '📝', label: '报名', value: cert.timeline.registrationTime, bg: 'bg-blue-50' },
                      { emoji: '📋', label: '考试', value: cert.timeline.examTime, bg: 'bg-orange-50' },
                      { emoji: '✅', label: '出成绩', value: cert.timeline.resultTime, bg: 'bg-emerald-50' },
                      { emoji: '🏆', label: '领证', value: cert.timeline.certificateTime, bg: 'bg-purple-50' },
                    ].map((item, i) => (
                      <div key={i} className={`${item.bg} rounded-lg p-3 min-h-[80px]`}>
                        <div className="text-xs text-slate-500 font-medium mb-1">{item.emoji} {item.label}</div>
                        <div className="text-xs font-semibold text-slate-800 leading-snug">{item.value.length > 60 ? item.value.slice(0, 57) + '...' : item.value}</div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-4 text-center text-xs text-slate-400">
            * 具体时间以官方公告为准 · 选择上方下拉框查看任意证书的考证时间线
          </div>
        </div>
      </div>
    </div>
  );
}
