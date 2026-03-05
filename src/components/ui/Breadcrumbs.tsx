import Link from 'next/link';
import type { BreadcrumbItem } from '@/lib/types';

export default function Breadcrumbs({ items }: { items: BreadcrumbItem[] }) {
  return (
    <nav className="breadcrumbs" aria-label="Brødsmulesti">
      <ol>
        {items.map((item, i) => {
          const last = i === items.length - 1;
          return (
            <li key={item.href}>
              {last
                ? <span aria-current="page">{item.label}</span>
                : <><Link href={item.href}>{item.label}</Link><span className="sep" aria-hidden>›</span></>
              }
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
