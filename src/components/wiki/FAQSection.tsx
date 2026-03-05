'use client';
import { useState } from 'react';
import type { FAQItem } from '@/lib/types';

export default function FAQSection({ items }: { items: FAQItem[] }) {
  const [open, setOpen] = useState<number | null>(0);
  if (!items?.length) return null;
  return (
    <section className="faq-section">
      <h2 className="faq-title">Ofte stilte spørsmål</h2>
      <div className="faq-list">
        {items.map((f, i) => (
          <div key={i} className={`faq-item ${open === i ? 'open' : ''}`}>
            <button className="faq-q" onClick={() => setOpen(open === i ? null : i)} aria-expanded={open === i}>
              <span>{f.question}</span>
              <svg className="faq-chevron" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><path d="m6 9 6 6 6-6"/></svg>
            </button>
            {open === i && <div className="faq-a">{f.answer}</div>}
          </div>
        ))}
      </div>
    </section>
  );
}
