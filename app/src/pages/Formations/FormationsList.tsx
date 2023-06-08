import { Grid, Typography } from "@mui/material";
import React from "react";
import CardFormation from "./CardFormation";

const formations = Array(10)
  .fill(null)
  .map(() => ({
    name: [
      "React",
      "Angular",
      "Vue",
      "Node",
      "Express",
      "Nest",
      "MongoDB",
      "MySQL",
      "PHP",
      "TypeScript",
      "JavaScript",
    ][Math.floor(Math.random() * 11)],
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla euismod, nisl vitae tincidunt ultricies, nunc nisl ultricies nunc, vitae aliquam n",
    difficulty: (Math.floor(Math.random() * 10) + 1) / 2,
    totalParticipants: Math.floor(Math.random() * 100),
    bonusPoints: Math.floor(Math.random() * 25) + 5,
  }));

const FormationsList: React.FC = () => {
  return (
    <>
      <Typography variant="h5">Formations en cours</Typography>
      <Grid container spacing={3} marginTop="30px" padding={1}>
        {formations.map((formation: any, index) => (
          <Grid item xs={6} sm={4} md={4} key={index}>
            <CardFormation {...formation} />
          </Grid>
        ))}
      </Grid>
    </>
  );
};

export default FormationsList;
