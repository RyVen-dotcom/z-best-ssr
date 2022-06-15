import React from 'react';
import { LinkProps } from 'next/link';
import { LinkProps as MLinkProps } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import Breadcrumbs, { BreadcrumbsProps } from '@material-ui/core/Breadcrumbs';
import MyLink from '../my-link';

export type LinksType = MLinkProps & LinkProps;

export interface ShtBreadcrumbsProps extends BreadcrumbsProps {
  data: Array<LinksType>;
  label?: string;
}

const useStyle = makeStyles((theme) => ({

  root: {
    color: theme.palette.text.primary,
    fontSize: theme.typography.caption.fontSize,
  },
  li: {
    '&:last-child > a,span': {
      color: theme.palette.text.disabled,
    },
  },
  separator: {
    '& > svg': {
      transform: 'scale(0.75)',
      fontSize: theme.typography.caption.fontSize,
    },
  },
}));

const BreadList: React.FC<ShtBreadcrumbsProps> = (props) => {
  const { data, label, ...rest } = props;
  const classes = useStyle();
  return (
    <Breadcrumbs classes={classes} {...rest} separator="/">
      {
          data.map((item) => (
            <MyLink color="inherit" {...item} key={item.href} />
          ))
        }
      {
          label ? <span>{label}</span> : null
        }
    </Breadcrumbs>
  );
};

BreadList.defaultProps = {
  label: '',
};

export default BreadList;
