import React from 'react';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';

interface IProps {
    children: React.ReactNode;
    classes?: {
        root?: string | Array<string>;
        wrapper?: string | Array<string>;
    };
    id?: string;
    bgColor?: string;
}

const useStyle = makeStyles(() => ({
  root: {
    width: '100%',
  },
  wrapper: {
    maxWidth: 1160,
    margin: '0 auto',
    position: 'relative',
  },
}), { name: 'w-layout' });

const WLayout:React.FC<IProps> = (props) => {
  const classes1 = useStyle();
  const {
    children, classes, id, bgColor = null,
  } = props;
  return (
    <div
      id={id}
      className={clsx(classes1.root, classes?.root)}
      style={bgColor ? { background: bgColor } : Object.create(null)}
    >
      <div className={clsx(classes1.wrapper, classes?.wrapper)}>
        {children}
      </div>
    </div>
  );
};
WLayout.defaultProps = {
  classes: Object.create(null),
  id: String(),
  bgColor: String(),
};

export default WLayout;
