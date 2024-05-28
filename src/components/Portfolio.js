import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Box from "@material-ui/core/Box";
import Grid from "@material-ui/core/Grid";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";

import project1 from "../images/html-css-javascript-lg.jpg";
import project2 from "../images/html-css-javascript.jpg";
import project3 from "../images/javascript-fullstack.jpg";
import project4 from "../images/mern-stack.jpg";
import project5 from "../images/react-redux.jpg";
import project6 from "../images/react.png";

const useStyles = makeStyles((theme) => ({
  mainContainer: {
    background: "#233",
    height: "100%",
  },
  cardContainer: {
    background: "black",
    color: "tan",
    maxWidth: 345,
    margin: "3rem auto",
  },
  cardTitle: {
    color: "tomato",
  },
}));

const projects = [
  {
    name: "Scientific Iniation Programs",
    description: `Developed a prototype and conducted experiments in dynamic magnetic levitation.`,
    image: project3,
  },
  {
    name: "Studen Assistant",
    description: `During my undergraduate studies, I worked as a student assistant, helping students build programs for the Numerical Calculations course using Fortran.`,
    image: project3,
  },
  {
    name: "Scientific Publications",
    description: `The candidate has authored various scientific papers focusing on studies in Control and Material Engineering.`,
    image: project3,
  },
  {
    name: "Registered Product Patents",
    description: `As a member of a team, contributed to the registration of patents for two novel systems in Brazil.`,
    image: project4,
  },
  {
    name: "LabVIEW Certiﬁcation ",
    description: `Proficient in LabVIEW programming, certified by National Instruments.`,
    image: project5,
  },
  {
    name: "50%+ of Grades A",
    description: `Consistently achieved a grade of A or higher in over 50% of coursework during my post-diploma studies at Douglas College. `,
    image: project6,
  },
];

const Portfolio = () => {
  const classes = useStyles();
  return (
    <Box component="div" className={classes.mainContainer}>
      <Grid container justify="center">
        {/* Projects */}
        {projects.map((project, i) => (
          <Grid item xs={12} sm={8} md={4} key={i}>
            <Card className={classes.cardContainer}>
              <CardActionArea>
                {/* <CardMedia
                  component="img"
                  alt="Project 1"
                  height="140"
                  image={project.image}
                /> */}
                
                <CardContent>
                  <Typography variant="h5" gutterBottom className={classes.cardTitle}>
                    {project.name}
                  </Typography>
                  <hr />
                  <Typography variant="body2" color="tan" style={{ fontWeight: 'bold' }}>
                    {project.description}
                  </Typography>
                </CardContent>
              </CardActionArea>
              {/* <CardActions>
                <Button size="small" color="primary">
                  Share
                </Button>
                <Button size="small" color="primary">
                  Live Demo
                </Button>
              </CardActions> */}
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default Portfolio;
