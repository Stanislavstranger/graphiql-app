import { FC, useState } from 'react';
import cn from 'classnames';

import LangButton from '../LanguageButton/LanguageButton';

import styles from './Nav.module.scss';
import Link from 'next/link';

const navLinks = [
  { label: 'Sign In', href: '/' },
  { label: 'Sign Out', href: '/' },
];

const Nav: FC = () => {
  const [isPopoverOpen, setPopoverOpen] = useState(false);

  const onClickLanguageBtn = () => {
    setPopoverOpen(!isPopoverOpen);
  };

  return (
    <nav className={styles.nav}>
      <LangButton isPopoverOpen={isPopoverOpen} onClickLanguageBtn={onClickLanguageBtn} />
      {navLinks.map((link) => (
        <Link href={link.href} key={link.label} className={styles.link}>
          <span className={styles.label}>{link.label}</span>
        </Link>
      ))}
      <div
        className={cn(styles.backdrop, { [styles.backdrop_show]: isPopoverOpen })}
        onClick={() => setPopoverOpen(false)}
        role="button"
        tabIndex={0}
        data-testid="backdrop"
      />
    </nav>
  );
};

export default Nav;
