import { useState } from "react";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";

const profileTabs = [
  { id: 1, label: "Overview", active: true },
  { id: 2, label: "About", active: false },
  { id: 3, label: "Services", active: false },
  { id: 4, label: "Availability", active: false },
  { id: 5, label: "Reviews", active: false },
  { id: 6, label: "Gallery", active: false },
  { id: 7, label: "Insurance", active: false },
  { id: 8, label: "Location", active: false },
];

const CustomTabPanel = (props) => {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && <Box sx={{ p: 3 }}>{children}</Box>}
    </div>
  );
};

const a11yProps = (index) => {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
};

const ProfileNavigationSection = () => {
  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    event.stopPropagation();
    setValue(newValue);
  };

  const displayTabs = () => {
    return profileTabs.map((tab) => (
      <Tab
        label={tab.label}
        {...a11yProps(tab.id)}
        className="text-gray-600 hover:text-purple-primary pb-2 whitespace-nowrap font-light"
        key={tab.id}
      >
        {tab.label}
      </Tab>
    ));
  };
  return (
    <Box
      sx={{ width: "100%" }}
      id="profile-navigation"
      className="bg-white py-6 px-5 sticky top-20 z-40 border-b"
    >
      <Box>
        <Tabs
          textColor="secondary"
          indicatorColor="secondary"
          value={value}
          onChange={handleChange}
          aria-label="basic tabs example"
          className="container mx-auto font-light"
        >
          {displayTabs()}
        </Tabs>
      </Box>
    </Box>
  );
};

export default ProfileNavigationSection;
