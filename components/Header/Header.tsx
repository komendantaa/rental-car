import Image from 'next/image';
import Link from 'next/link';

import NavLink from '@/components/NavLink';

import css from './Header.module.css';

const Header = () => {
  return (
    <header className={css.header}>
      <Link href="/" aria-label="Home">
        <Image src={'/logo.svg'} alt="logo" width={104} height={16} loading="eager" />
      </Link>

      <nav aria-label="Main Navigation">
        <ul className={css.navigation}>
          <li>
            <NavLink href="/">Home</NavLink>
          </li>

          <li>
            <NavLink href="/catalog">Catalog</NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
