import { useState } from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";
import ProfileServices from "./ProfileServices";
import ProfileReviewsSection from "./ProfileReviewsSection";
import ProfileAboutSection from "./ProfileAboutSection";
import ProfileOverviewSection from "./ProfileOverviewSection";
import ProfileEducationSection from "./ProfileEducationSection";

const profileTabs = [
  {
    id: 1,
    label: "Overview",
    active: false,
    component: <ProfileOverviewSection />,
  },
  { id: 2, label: "About", active: false, component: <ProfileAboutSection /> },
  {
    id: 3,
    label: "Education",
    active: false,
    component: <ProfileEducationSection />,
  },
  { id: 4, label: "Services", active: false, component: <ProfileServices /> },
  {
    id: 5,
    label: "Reviews",
    active: false,
    component: <ProfileReviewsSection />,
  },
  { id: 6, label: "Location", active: false },
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
        className="text-gray-600 hover:text-purple-primary pb-2 whitespace-nowrap font-medium"
        key={tab.id}
      >
        {tab.label}
      </Tab>
    ));
  };

  const displayPanels = () => {
    return profileTabs.map((tab, index) => (
      <CustomTabPanel value={value} index={index} key={tab.id}>
        {tab.component}
      </CustomTabPanel>
    ));
  };

  return (
    <>
      <Box
        sx={{ width: "100%" }}
        id="profile-navigation"
        className="bg-white py-6 px-5 top-20 z-40"
      >
        <Box className=" border-b">
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
        {displayPanels()}
      </Box>
    </>
  );
};

export default ProfileNavigationSection;
