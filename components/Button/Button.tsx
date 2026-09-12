import clsx from 'clsx';
import Link, { LinkProps } from 'next/link';
import { AnchorHTMLAttributes, ButtonHTMLAttributes } from 'react';

import Loader from '@/components/Loader';

import css from './Button.module.css';

type ButtonVariant = 'filled' | 'outlined';

type ButtonAsButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  href?: undefined;
  isLoading?: boolean;
  variant?: ButtonVariant;
};

type ButtonAsLinkProps = Omit<AnchorHTMLAttributes<HTMLAnchorElement>, 'href'> &
  LinkProps & { variant?: ButtonVariant };

type Props = ButtonAsButtonProps | ButtonAsLinkProps;

const Button = ({ className, variant = 'filled', ...rest }: Props) => {
  if (rest.href !== undefined) {
    const { children, ...linkRest } = rest as ButtonAsLinkProps;

    return (
      <Link className={clsx(css.button, css[variant], className)} {...linkRest}>
        {children}
      </Link>
    );
  }

  const { children, type = 'button', isLoading = false, disabled, ...buttonRest } = rest as ButtonAsButtonProps;

  return (
    <button
      type={type}
      className={clsx(css.button, css[variant], isLoading && css.loading, className)}
      disabled={disabled ?? isLoading}
      {...buttonRest}
    >
      {children}
      {isLoading && <Loader className={css.loader} />}
    </button>
  );
};

export default Button;
