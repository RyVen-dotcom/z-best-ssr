import React from 'react';
import Link, { LinkProps } from 'next/link';
import { Link as MLink, LinkProps as MLinkProps } from '@material-ui/core';

export type LinksType = MLinkProps & LinkProps;

const MyLink: React.FC<LinksType> = React.forwardRef(
  (
    {
      href, as, children, ...reset
    },
    ref: React.Ref<HTMLAnchorElement>,
  ) => (
    <Link href={href} as={as} passHref>
      <MLink underline="none" ref={ref} {...reset}>
        {children}
      </MLink>
    </Link>
  ),
);

MyLink.displayName = 'MyLink';

export default MyLink;
