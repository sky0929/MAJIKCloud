import React from "react";
import { connect } from "react-redux";
import { Navigate, Route, Routes, Outlet } from "react-router-dom";
import Login from "../containers/Auth/Login";
import Header from "../components/Header";
import Drawer from "../components/Drawer";
import NotFound from "../components/Common/NotFound";
import { Box } from "@mui/material";

//---------------------------------------
import Home from "../containers/Home";
import Profiles from "../containers/SystemAdmin/Profiles";
import AccessGroups from "../containers/SystemAdmin/AccessGroups";


//-------------------------------------------
const AuthRoute = ({ element, isProtected, status }) => {
  return isProtected && !status ? <Navigate replace to="/login" /> : element;
};

const DashboardLayout = ({ opendrawer, toggleDrawer }) => {
  return (
    <Box sx={{ display: "flex" }}>
      <Header opendrawer={opendrawer} toggleDrawer={toggleDrawer} />
      <Drawer opendrawer={opendrawer} toggleDrawer={toggleDrawer} />
      <Box component="main" sx={{ flexGrow: 1, pt: 10, pl: 3, pr: 3 }}>
        <Outlet />
      </Box>
    </Box>
  );
};

const CommonLayout = () => {
  return (
    <Box sx={{ display: "flex" }}>
      <Outlet />
    </Box>
  );
};

const AppRouter = () => {
  const [opendrawer, setOpendrawer] = React.useState(true);
  const toggleDrawer = () => {
    setOpendrawer(!opendrawer);
  };
  return (
    <Routes>
      <Route path="/login" element={<CommonLayout />}>
        <Route path="/login" exact element={<Login />} />
      </Route>
      <Route
        path="/"
        element={
          <DashboardLayout
            opendrawer={opendrawer}
            toggleDrawer={toggleDrawer}
          />
        }
      >
        <Route path="/" element={<Home />} />
        <Route path="/test" element={<Home />} />
      </Route>
      <Route
        path="/system-admin"
        element={
          <DashboardLayout
            opendrawer={opendrawer}
            toggleDrawer={toggleDrawer}
          />
        }
      >
        <Route path="/system-admin/user" element={<Home />} />
        <Route path="/system-admin/access-groups" element={<AccessGroups />} />
        <Route path="/system-admin/profiles" element={<Profiles />} />
      </Route>
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

const mapStateToProps = state => {
  return {};
};
const mapDispatchToProps = dispatch => ({});

export default connect(mapStateToProps, mapDispatchToProps)(AppRouter);
