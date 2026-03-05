'use client';

import { useState } from 'react';
import type { FAQItem } from '@/lib/types';

interface FAQSectionProps {
  items: FAQItem[];
  title?: string;
}

export default function FAQSection({ items, title = 'Ofte stilte spørsmål' }: FAQSectionProps) {
  const [open, setOpen] = useState<number | null>(null);

  if (!items || items.length === 0) return null;

  return (
    <section className="faq-section">
      <h2>{title}</h2>
      <div className="faq-list">
        {items.map((item, i) => (
          <div key={i} className={`faq-item ${open === i ? 'open' : ''}`}>
            <button
              className="faq-question"
              onClick={() => setOpen(open === i ? null : i)}
              aria-expanded={open === i}
            >
              <span>{item.question}</span>
              <span className="faq-chevron" aria-hidden="true">{open === i ? '▾' : '▸'}</span>
            </button>
            {open === i && (
              <div className="faq-answer">
                <p>{item.answer}</p>
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
