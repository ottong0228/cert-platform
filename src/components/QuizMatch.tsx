import { useState } from 'react';
import { ChevronRight } from 'lucide-react';
import type { MatchAnswers } from '../types';

const steps = [
  {
    key: 'education' as keyof MatchAnswers,
    label: '你的学历是？',
    options: [
      { label: '高中及以下', value: '高中及以下' },
      { label: '大专', value: '大专' },
      { label: '本科', value: '本科' },
      { label: '硕士及以上', value: '硕士' },
    ],
  },
  {
    key: 'major' as keyof MatchAnswers,
    label: '你的专业方向？',
    options: [
      { label: '不限（文理皆可）', value: '不限' },
      { label: '财经/金融/会计', value: '财经' },
      { label: '工程/建筑', value: '工程' },
      { label: '医学/药学/护理', value: '医学' },
      { label: '法律', value: '法律' },
      { label: '教育', value: '教育' },
      { label: '计算机/IT', value: 'IT' },
      { label: '其他专业', value: '其他' },
    ],
  },
  {
    key: 'workYears' as keyof MatchAnswers,
    label: '你的工作年限？',
    options: [
      { label: '在校生/无工作经验', value: '无' },
      { label: '1年以下', value: '1年以下' },
      { label: '1-3年', value: '1-3年' },
      { label: '3-5年', value: '3-5年' },
      { label: '5年以上', value: '5年以上' },
    ],
  },
  {
    key: 'purpose' as keyof MatchAnswers,
    label: '你考证的目的是？',
    options: [
      { label: '升职加薪', value: '升职加薪' },
      { label: '转行就业', value: '转行' },
      { label: '落户积分', value: '落户' },
      { label: '发展副业', value: '副业' },
      { label: '自我提升', value: '自我提升' },
    ],
  },
];

interface Props {
  onComplete: (answers: MatchAnswers) => void;
}

export default function QuizMatch({ onComplete }: Props) {
  const [step, setStep] = useState(0);
  const [answers, setAnswers] = useState<MatchAnswers>({
    education: '',
    major: '',
    workYears: '',
    purpose: '',
  });

  const currentStep = steps[step];
  const selectedValue = answers[currentStep.key];

  const handleSelect = (value: string) => {
    const newAnswers = { ...answers, [currentStep.key]: value };
    setAnswers(newAnswers);

    if (step < steps.length - 1) {
      setTimeout(() => {
        setStep(step + 1);
      }, 200);
    } else {
      onComplete(newAnswers);
    }
  };

  const progress = ((step + 1) / steps.length) * 100;

  return (
    <div className="max-w-lg mx-auto bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden">
      {/* Progress */}
      <div className="h-1.5 bg-slate-100">
        <div
          className="h-full bg-blue-600 transition-all duration-300"
          style={{ width: `${progress}%` }}
        />
      </div>

      <div className="p-6 sm:p-8">
        <div className="text-xs text-slate-400 mb-2">第 {step + 1} / {steps.length} 题</div>
        <h2 className="text-xl font-bold text-slate-900 mb-6">{currentStep.label}</h2>

        <div className="space-y-3">
          {currentStep.options.map((option) => (
            <button
              key={option.value}
              onClick={() => handleSelect(option.value)}
              className={`w-full flex items-center justify-between px-5 py-4 rounded-xl border text-left text-sm font-medium transition-all ${
                selectedValue === option.value
                  ? 'border-blue-500 bg-blue-50 text-blue-700'
                  : 'border-slate-200 bg-slate-50 text-slate-700 hover:border-blue-300 hover:bg-blue-50'
              }`}
            >
              <span>{option.label}</span>
              {selectedValue === option.value && <ChevronRight className="w-4 h-4 text-blue-600" />}
            </button>
          ))}
        </div>

        {step > 0 && (
          <button
            onClick={() => setStep(step - 1)}
            className="mt-6 text-sm text-slate-500 hover:text-slate-700"
          >
            ← 上一题
          </button>
        )}
      </div>
    </div>
  );
}