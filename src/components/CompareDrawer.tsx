import { useNavigate } from 'react-router-dom';
import { X, GitCompare } from 'lucide-react';
import type { Certificate } from '../types';

interface Props {
  compareIds: string[];
  certificates: Certificate[];
  onRemove: (id: string) => void;
  onClear: () => void;
}

export default function CompareDrawer({ compareIds, certificates, onRemove, onClear }: Props) {
  const navigate = useNavigate();
  const compareCerts = certificates.filter((c) => compareIds.includes(c.id));

  if (compareIds.length === 0) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 bg-white border-t border-slate-200 shadow-2xl">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3 flex items-center gap-3">
        <div className="flex items-center gap-2 flex-1 min-w-0">
          <GitCompare className="w-4 h-4 text-blue-600 shrink-0" />
          <span className="text-sm text-slate-600 shrink-0">对比栏：</span>
          <div className="flex items-center gap-2 overflow-x-auto">
            {compareCerts.map((cert) => (
              <span
                key={cert.id}
                className="flex items-center gap-1 bg-slate-100 text-slate-700 text-xs px-2.5 py-1 rounded-lg whitespace-nowrap"
              >
                {cert.name}
                <button
                  onClick={() => onRemove(cert.id)}
                  className="ml-1 text-slate-400 hover:text-red-500"
                  aria-label={`移除${cert.name}`}
                >
                  <X className="w-3 h-3" />
                </button>
              </span>
            ))}
          </div>
        </div>

        <button
          onClick={onClear}
          className="text-xs text-slate-500 hover:text-red-500 shrink-0"
        >
          清空
        </button>

        <button
          onClick={() => navigate(`/compare?ids=${compareIds.join(',')}`)}
          disabled={compareIds.length < 2}
          className="bg-blue-600 hover:bg-blue-700 disabled:bg-slate-300 disabled:cursor-not-allowed text-white text-sm px-5 py-2 rounded-xl font-medium transition-colors shrink-0"
        >
          开始对比
        </button>
      </div>
    </div>
  );
}
