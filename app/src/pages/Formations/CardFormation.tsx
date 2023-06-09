import {
  Button,
  Card,
  CardActions,
  Grid,
  Rating,
  Stack,
  Typography,
} from "@mui/material";
import React from "react";

interface Props {
  title: string;
  description: string;
  difficulty: string;
  nbParticipant: string;
  nbBonusPoint: string;
  startDate: Date;
  endDate: Date;
}

const CardFormation: React.FC<Props> = (formation) => {
  console.log(formation);
  const currentDate = new Date();
  const hasStarted = formation.startDate <= currentDate;
  const hasEnded = formation.endDate < currentDate;
  const getStatusColor = () => {
    if (hasEnded) {
      return "red"; // Color for finished event
    } else if (hasStarted) {
      return "green"; // Color for ongoing event
    } else {
      return "orange"; // Color for upcoming event
    }
  };
  return (
    <Card
      sx={{
        backgroundColor: "#eaeaea",
        borderRadius: "30px",
        maxWidth: "300px",
        position: "relative",
        padding: "15px",
        boxShadow:
          "rgba(50, 50, 93, 0.02) 0 2px 5px -1px, rgba(0, 0, 0, 0.05) 0 1px 3px -1px",
      }}
    >
      <Typography variant="h5" component="div" marginBottom={2} align="center">
        {formation.title}
      </Typography>
      <Typography variant="body2">{formation.description}</Typography>
      <Typography variant="body2" marginTop={2}>
        Niveau de difficulté
      </Typography>
      <Rating
        name="difficulty-rating"
        value={parseInt(formation.difficulty)}
        max={5}
        readOnly
      />
      <Grid container spacing={2} marginTop={1}>
        <Grid item xs={6}>
          <Stack direction="column">
            <Typography variant="body2">Participants</Typography>
            <Typography variant="h5" fontSize="1em">
              {formation.nbParticipant == null ? 0 : formation.nbParticipant }
            </Typography>
          </Stack>
        </Grid>
        <Grid item xs={6}>
          <Stack direction="column">
            <Button variant='contained' sx={{margin: '1vh 0'}}>Javascript</Button> {/* Connect API */}
          </Stack>
        </Grid>
        <Stack
          direction="row"
          alignItems="center"
          marginTop={2}
          justifyItems="center"
          justifyContent="center"
          padding={1}
        >
          <div
            style={{
              backgroundColor: getStatusColor(),
              width: "15px",
              height: "15px",
              borderRadius: "50%",
            }}
          />
          <Typography variant="body2" marginLeft={1}>
            {hasEnded && "Terminé"}
            {hasStarted && !hasEnded && "Disponible"}
            {!hasStarted && "A venir"}
          </Typography>
        </Stack>
      </Grid>

      <CardActions>
        <Button
          variant="contained"
          size="small"
          sx={{
            padding: "5px 15px",
            margin: "0 auto",
            borderRadius: "30px",
            textTransform: "none",
          }}
        >
          Voir plus
        </Button>
      </CardActions>
    </Card>
  );
};

export default CardFormation;
