'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { ReactNode } from 'react';

import css from './NavLink.module.css';

interface Props {
  href: string;
  children: ReactNode;
}

const NavLink = ({ href, children }: Props) => {
  const pathname = usePathname();
  const isActive = pathname === href;

  return (
    <Link className={isActive ? css.active : ''} href={href}>
      {children}
    </Link>
  );
};

export default NavLink;
