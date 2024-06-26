import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";

const useStyles = makeStyles((theme) => ({
  mainContainer: {
    background: "#233",
  },
  timeLine: {
    position: "relative",
    padding: "1rem",
    margin: "o auto",
    "&:before": {
      content: "''",
      position: "absolute",
      height: "100%",
      border: "1px solid tan",
      right: "40px",
      top: 0,
    },
    "&:after": {
      content: "''",
      display: "table",
      clear: "both",
    },
    [theme.breakpoints.up("md")]: {
      padding: "2rem",
      "&:before": {
        left: "calc(50% - 1px)",
        right: "auto",
      },
    },
  },
  timeLineItem: {
    padding: "1rem",
    borderBottom: "2px solid tan",
    position: "relative",
    margin: "1rem 3rem 1rem 1rem",
    clear: "both",
    "&:after": {
      content: "''",
      position: "absolute",
    },
    "&:before": {
      content: "''",
      position: "absolute",
      right: "-0.625rem",
      top: "calc(50% - 5px)",
      borderStyle: "solid",
      borderColor: "tomato tomato transparent transparent",
      borderWidth: "0.625rem",
      transform: "rotate(45deg)",
    },
    [theme.breakpoints.up("md")]: {
      width: "44%",
      margin: "1rem",
      "&:nth-of-type(2n)": {
        float: "right",
        margin: "1rem",
        borderColor: "tan",
      },
      "&:nth-of-type(2n):before": {
        right: "auto",
        left: "-0.625rem",
        borderColor: "transparent transparent tomato tomato",
      },
    },
  },
  timeLineYear: {
    textAlign: "center",
    maxWidth: "9.375rem",
    margin: "0 3rem 0 auto",
    fontSize: "1.8rem",
    color: "#fff",
    background: "tomato",
    lineHeight: 1,
    padding: "0.5rem 1rem",
    "&:before": {
      display: "none",
    },
    [theme.breakpoints.up("md")]: {
      textAlign: "center",
      margin: "0 auto",
      "&:nth-of-type(2n)": {
        float: "none",
        margin: "0 auto",
      },
      "&:nth-of-type(2n):before": {
        display: "none",
      },
    },
  },
  heading: {
    color: "tomato",
    padding: "3rem 0",
    textTransform: "uppercase",
  },
  subHeading: {
    color: "#fff",
    padding: 0,
    textTransform: "uppercase",
  },
  body1: {
    color: "tomato",
  },
  subtitle1: {
    color: "tan",
  },
}));

const Resume = () => {
  const classes = useStyles();
  return (
    <Box component="header" className={classes.mainContainer}>
      <Typography variant="h4" align="center" className={classes.heading}>
        Working Experience
      </Typography>
      <Box component="div" className={classes.timeLine}>
        <Typography
          variant="h2"
          className={`${classes.timeLineYear} ${classes.timeLineItem}`}
        >
          2009
        </Typography>
        <Box component="div" className={classes.timeLineItem}>
          <Typography
            variant="h5"
            align="center"
            className={classes.subHeading}
          >
            Automation Engineer Internship
          </Typography>
          <Typography variant="body1" align="center" className={classes.body1}>
            Agnus Electronic Technologies
          </Typography>
          <Typography
            variant="subtitle1"
            align="left"
            className={classes.subtitle1}
          >
            <ul>
              <li>Designed and Maintained SCADA Systems (iFix, Elipse)</li>
              <li>Process Automation with CLPs (GE Fanuc, Siemens, Allen-Bradley, Omron)</li>
              <li>Built user interfaces Human Machine Devices</li>
              <li>Created Software for Logging and Database with Visual Basic</li>
              <li>Projected Electronics Circuits</li>
            </ul>
            
            
          </Typography>
        </Box>
        <Typography
          variant="h2"
          className={`${classes.timeLineYear} ${classes.timeLineItem}`}
        >
          2010
        </Typography>
        <Box component="div" className={classes.timeLineItem}>
          <Typography
            variant="h5"
            align="center"
            className={classes.subHeading}
          >
            Electronics Engineer
          </Typography>
          <Typography variant="body1" align="center" className={classes.body1}>
          Condor Non-Lethal Technologies
          </Typography>
          <Typography
            variant="subtitle1"
            align="left"
            className={classes.subtitle1}
          >
            <ul>
            <li>Designed and manufactured a Non-Lethal Electric Gun</li>
            <li>Projected Electronic circuits for control and power</li>
            <li>Wrote ﬁrmware for microcontroller PIC using C Language</li>
            <li>Crafted a testing program for product approval</li>
            </ul>   
          </Typography>
        </Box>
        <Typography
          variant="h2"
          className={`${classes.timeLineYear} ${classes.timeLineItem}`}
        >
          2012
        </Typography>
        <Box component="div" className={classes.timeLineItem}>
          <Typography
            variant="h5"
            align="center"
            className={classes.subHeading}
          >
            Automation Engineer
          </Typography>
          <Typography variant="body1" align="center" className={classes.body1}>
          Laboratory of Non Destructive Testing, Corrosion and Welding
          </Typography>
          <Typography
            variant="subtitle1"
            align="left"
            className={classes.subtitle1}
          >
            <ul>
              <li>R&D on Material Engineering</li>
              <li>Designed and Manufactured Fatigue Testing Machines</li>
              <li>Projected hardware and software for machine control with LabView</li>
              <li>Develop pioneer automated measurement systems</li>
            </ul>
          </Typography>
        </Box>
        <Typography
          variant="h2"
          className={`${classes.timeLineYear} ${classes.timeLineItem}`}
        >
          Current
        </Typography>
        <Box component="div" className={classes.timeLineItem}>
          <Typography
            variant="h5"
            align="center"
            className={classes.subHeading}
          >
            Automation / Software Developer
          </Typography>
          <Typography variant="body1" align="center" className={classes.body1}>
            
          </Typography>
          <Typography
            variant="subtitle1"
            align="left"
            className={classes.subtitle1}
          >
            <ul>
              <li>Projected relational database schemas with MySQL</li>
              <li>Designed data model with MongoDB for reports</li>
              <li>Wrote REST Apis and Desktop Client-Server Application with Java for Database Management
              Systems</li>
              <li>Crafted Single Page Applications with Angular, Vue and React for consuming Rest Apis</li>
            </ul>
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default Resume;
