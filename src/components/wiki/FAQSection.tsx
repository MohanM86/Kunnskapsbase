'use client';

import { useState } from 'react';
import type { FAQItem } from '@/lib/types';

interface FAQSectionProps {
  items: FAQItem[];
  title?: string;
}

export default function FAQSection({ items, title }: FAQSectionProps) {
  const [open, setOpen] = useState<number | null>(null);

  if (!items || items.length === 0) return null;

  const sectionTitle = title || (items.length > 0 ? 'Ofte stilte spørsmål' : '');

  return (
    <section className="faq-section">
      <h2>{sectionTitle}</h2>
      <div className="faq-list">
        {items.map((item, i) => (
          <div key={i} className={`faq-item ${open === i ? 'open' : ''}`}>
            <button
              className="faq-question"
              onClick={() => setOpen(open === i ? null : i)}
              aria-expanded={open === i}
            >
              <span>{item.question}</span>
              <svg
                className="faq-chevron"
                width="12"
                height="12"
                viewBox="0 0 12 12"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
              >
                <path
                  d="M4.5 2.5L8 6L4.5 9.5"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
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
