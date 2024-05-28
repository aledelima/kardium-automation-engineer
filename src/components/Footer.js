import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import BottomNavigation from "@material-ui/core/BottomNavigation";
import BottomNavigationAction from "@material-ui/core/BottomNavigationAction";
import { GitHub, LinkedIn } from "@material-ui/icons";

const useStyles = makeStyles({
  bottomNavContainer: {
    background: "#222",
    height: "55px",
    overflow: "hidden",
  },
  root: {
    "& .MuiSvgIcon-root": {
      fill: "tan",
      "&:hover": {
        fill: "tomato",
        fontSize: "1.8rem",
      },
    },
  },
});

const Footer = () => {
  const classes = useStyles();
  
  return (
    <BottomNavigation className={classes.bottomNavContainer}>
      <BottomNavigationAction icon={<GitHub />} className={classes.root} href="https://github.com/aledelima" target="_blank"/>
      <BottomNavigationAction icon={<LinkedIn />} className={classes.root} href="https://www.linkedin.com/in/alessandro-de-lima-engineer/" target="_blank"/>
    </BottomNavigation>
  );
};
export default Footer;
