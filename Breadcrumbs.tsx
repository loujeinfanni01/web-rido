import React from 'react';
import { Link } from './Link';

interface BreadcrumbItem {
  label: string;
  href: string;
  current?: boolean;
}

interface BreadcrumbsProps {
  items: BreadcrumbItem[];
}

const Breadcrumbs: React.FC<BreadcrumbsProps> = ({ items }) => {
  return (
    <div className="flex items-center space-x-3 text-sm uppercase tracking-widest">
      {items.map((item, index) => (
        <React.Fragment key={index}>
          {index > 0 && <span className="text-gray-400">/</span>}
          <Link
            href={item.href}
            className={`${
              item.current ? 'text-gray-400' : 'text-black hover:text-gray-600'
            }`}
          >
            {item.label}
          </Link>
        </React.Fragment>
      ))}
    </div>
  );
};

export default Breadcrumbs;