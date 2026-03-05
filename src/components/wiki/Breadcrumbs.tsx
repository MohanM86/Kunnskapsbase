import Link from 'next/link';
import type { BreadcrumbItem } from '@/lib/types';
interface BreadcrumbsProps { items: BreadcrumbItem[]; }
export default function Breadcrumbs({ items }: BreadcrumbsProps) {
  return (
    <nav className="breadcrumbs" aria-label="Br\u00f8dsmulesti">
      <ol>{items.map((item, index) => {
        const isLast = index === items.length - 1;
        return (<li key={item.href}>{isLast ? (<span aria-current="page">{item.label}</span>) : (<><Link href={item.href}>{item.label}</Link><span className="breadcrumb-sep" aria-hidden="true">\u203a</span></>)}</li>);
      })}</ol>
    </nav>
  );
}