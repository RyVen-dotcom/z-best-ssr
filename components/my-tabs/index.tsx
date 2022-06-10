import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';

interface TabProps {
    labelArr: Array<string>;
    current?: number;
    onChange?: ((index: number) => void) | null;
    classes?: {
        tabsRoot?: string;
        tabsContainer?: string;
        tabsIndicator?: string;
    };
}

const useTab = makeStyles(() => ({
  root: {
    padding: 0,
    minWidth: 0,
    minHeight: 0,
  },
}));

const a11yProps = (index: number): object => ({
  id: `simple-tab-${index}`,
  'aria-controls': `simple-tabpanel-${index}`,
});

const MyTabs: React.FC<TabProps> = (props) => {
  const tabClasses = useTab();
  const {
    classes, labelArr, current = 0, onChange,
  } = props;
  const [value, setValue] = React.useState(current);

  // tab切换
  const handleChange = (event: React.ChangeEvent<object>, newValue: number): void => {
    if (value === newValue) {
      return;
    }
    setValue(newValue);
    if (typeof onChange === 'function') {
      onChange(newValue);
    }
  };

  return (
    <Tabs
      value={value}
      onChange={handleChange}
      indicatorColor="secondary"
      textColor="secondary"
      aria-label="simple tabs example"
      classes={{
        root: classes?.tabsRoot,
        indicator: classes?.tabsIndicator,
        flexContainer: classes?.tabsContainer,
      }}
    >
      {
                labelArr.map((item, index) => (
                  <Tab
                    key={`ax${item}`}
                    label={item}
                    classes={{
                      root: tabClasses.root,
                    }}
                    {...a11yProps(index)}
                  />
                ))
            }
    </Tabs>
  );
};

MyTabs.defaultProps = {
  current: 0,
  onChange: null,
  classes: Object.create(null),
};

export default MyTabs;
