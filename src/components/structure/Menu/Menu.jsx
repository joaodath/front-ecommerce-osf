import React, {useState} from 'react';
import PropTypes from 'prop-types';
import SwipeableViews from 'react-swipeable-views';
import { useTheme } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import './Menu.css'

function TabPanel(props) {
  const { children, value, index, ...other } = props;
  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`full-width-tabpanel-${index}`}
      aria-labelledby={`full-width-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `full-width-tab-${index}`,
    'aria-controls': `full-width-tabpanel-${index}`,
  };
}

export default function FullWidthTabs() {
  const theme = useTheme();
  const [value, setValue] = useState(0);
  const [valores, setValores] = useState([1,5,78,9,7,3,123,6,67,9])

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleChangeIndex = (index) => {
    setValue(index);
  };

  return (
    <Box sx={{ bgcolor: 'transparent', width: '100%'}} >
      <AppBar position="static">
        <Tabs
          value={value}
          onChange={handleChange}
          textColor="white"
          variant="fullWidth"
          aria-label="full width tabs example"
          className='MuiTabs-indicator .css-1aquho2-MuiTabs-indicator'
        >{valores.map(i => (
            <Tab label={i} {...a11yProps(0)} />
        ))}
        </Tabs>
      </AppBar>
      <SwipeableViews
        axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
        index={value}
        onChangeIndex={handleChangeIndex}
        className='MuiTypography-root MuiTypography-body1 css-ahj2mt-MuiTypography-root'
      >
          {valores.map(i => (
              <TabPanel value={value} index={value} dir={theme.direction}>
          {i}
        </TabPanel>
          ))}
      </SwipeableViews>
    </Box>
  );
}