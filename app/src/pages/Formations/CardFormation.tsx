import {
  Button,
  Card,
  CardActions,
  Grid,
  Rating,
  Stack,
  Typography,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { fetchUser } from "../../Redux/States/users";
import { async } from "q";
import axios from "axios";

interface Props {
  title: string;
  description: string;
  difficulty: string;
  nbParticipant: string;
  nbBonusPoint: string;
  startDate: Date;
  endDate: Date;
  id: string;
}
interface AlertMessage {
  open: boolean;
  message: string;
  severity: "success" | "info" | "warning" | "error" | undefined;
}

const url =
  process.env.NODE_ENV === "production"
    ? process.env.REACT_APP_URL_PROD
    : process.env.REACT_APP_URL_DEV;

const CardFormation: React.FC<Props> = (formation) => {
  const [consultant, setConsultant] = useState<any>(null);
  console.log(formation, "formation");
  const [alertMessage, setAlertMessage] = useState<AlertMessage>({
    open: false,
    message: "",
    severity: "success",
  });
  const isConsultant = useSelector(fetchUser).role === "CONSULTANT";
  const user = useSelector(fetchUser);
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

  useEffect(() => {
    const getConsultant = async () => {
      const res = await axios.get(url + "/consultant/user/" + user.id);
      setConsultant(res.data);
    };
    getConsultant();
  }, []);

  const handleRegister = async () => {
    await axios
      .post(`${url}/consultant/${consultant.id}/event/${formation.id}`)
      .then((res) => {
        console.log(res);
        if (res.status === 200 || res.status === 201) {
          setAlertMessage({
            open: true,
            message: "Evenement a bien été créé !",
            severity: "success",
          });
        } else {
          setAlertMessage({
            open: true,
            message: "Une erreur est survenue",
            severity: "error",
          });
        }
      });
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
              {formation.nbParticipant == null ? 0 : formation.nbParticipant}
            </Typography>
          </Stack>
        </Grid>
        <Grid item xs={6}>
          <Stack direction="column">
            <Button variant="contained" sx={{ margin: "1vh 0" }}>
              Javascript
            </Button>{" "}
            {/* Connect API */}
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

        {isConsultant &&
          (consultant &&
          consultant.events.some((event: any) => event.id === formation.id) ? (
            <Typography variant="body2" marginLeft={1}>
              Déjà inscrit
            </Typography>
          ) : (
            <Button
              variant="contained"
              size="small"
              color="secondary"
              sx={{
                padding: "5px 15px",
                margin: "0 auto",
                borderRadius: "30px",
                textTransform: "none",
              }}
              onClick={handleRegister}
            >
              S'inscrire
            </Button>
          ))}
      </CardActions>
    </Card>
  );
};

export default CardFormation;
