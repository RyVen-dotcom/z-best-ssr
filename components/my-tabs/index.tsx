import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';

interface TabProps {
  labelArr: Array<string>;
  current?: number;
  onChange?: ((index: number) => void) | null;
  onHover?: ((index?: number) => void) | null;
}

const useTab = makeStyles((theme) => ({
  tabBar: {
    minHeight: 50,
    borderBottom: `1px solid ${theme.palette.border.light}`,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  tab: {
    minHeight: 50,
    marginRight: theme.spacing(5),
    fontSize: '14px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    cursor: 'pointer',
    position: 'relative',
    '&.isSelect': {
      color: theme.palette.primary.main,
      '& $tabAfter': {
        width: '100%',
      },
    },
    '&:hover': {
      color: theme.palette.primary.main,
      '& $tabAfter': {
        width: '100%',
      },
    },
  },
  tabAfter: {
    height: 2,
    width: 0,
    position: 'absolute',
    bottom: 0,
    background: '#bf2522',
    transitionDuration: '0.2s',
  },
}));

const MyTabs: React.FC<TabProps> = ({
  labelArr, current = 0, onChange, onHover,
}) => {
  const tabClasses = useTab();
  const [value, setValue] = React.useState(current);

  const handleClick = (newValue:number):void => {
    if (value === newValue) {
      return;
    }
    setValue(newValue);
    if (typeof onChange === 'function') {
      onChange(newValue);
    }
  };
  const handleMouseIn = (newValue:number):void => {
    if (typeof onHover === 'function') {
      onHover(newValue);
    }
  };

  return (
    <div className={tabClasses.tabBar}>
      {labelArr.map((item, index) => (
        <div
          key={item}
          tabIndex={0}
          role="button"
          className={clsx(tabClasses.tab, { isSelect: value === index })}
          onClick={() => handleClick(index)}
          onMouseEnter={() => handleMouseIn(index)}
        >
          {item}
          <div className={tabClasses.tabAfter} />
        </div>
      ))}
    </div>
  );
};

export default MyTabs;
