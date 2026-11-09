import React from 'react';

interface SectionHeadingProps {
  index?: string;
  title: string;
  subtitle?: string;
}

const SectionHeading: React.FC<SectionHeadingProps> = ({ index, title, subtitle }) => (
  <div className="mb-6">
    <div className="flex items-baseline gap-2.5">
      {index && (
        <span className="text-[11px] font-semibold tracking-[0.18em] text-indigo-500 uppercase">
          {index}
        </span>
      )}
      <h2 className="text-xl sm:text-2xl font-bold tracking-tight text-slate-900">{title}</h2>
    </div>
    {subtitle && <p className="mt-1 text-sm text-slate-500 max-w-2xl">{subtitle}</p>}
  </div>
);

export default SectionHeading;
