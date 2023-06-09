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
  name: string;
  description: string;
  difficulty: string;
  nbParticipant: string;
  nbBonusPoint: string;
}

const CardFormation: React.FC<Props> = (formation) => {
  console.log(formation);
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
        {formation.name}
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
              {formation.nbParticipant}
            </Typography>
          </Stack>
        </Grid>
        <Grid item xs={6}>
          <Stack direction="column">
            <Typography variant="h5" fontSize="2em">
              +{formation.nbBonusPoint}
            </Typography>
            <Typography variant="body2">Bonus Points</Typography>
          </Stack>
        </Grid>
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
