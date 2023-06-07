import {
  Avatar,
  Button,
  Card,
  CardActions,
  CardContent,
  Stack,
  Typography,
} from "@mui/material";
import { useEffect, useState } from "react";
import badgeJunior from "../../assets/badges/badge junior.png";
import badgeConfirme from "../../assets/badges/badge confirmé.png";
import badgeSenior from "../../assets/badges/badge senior.png";
import badgeExpert from "../../assets/badges/badge expert.png";

interface Props {
  consultant: {
    id: Number;
    name: string;
    job: string;
    tjm: Number;
    skills: string[];
    position: string;
  };
}

export const ConsultantCard: React.FC<Props> = (consultant) => {
  const [badgeImage, setBadgeImage] = useState<string>("");

  useEffect(() => {
    switch (consultant.consultant.position) {
      case "junior":
        setBadgeImage(badgeJunior);
        break;
      case "confirme":
        setBadgeImage(badgeConfirme);
        break;
      case "senior":
        setBadgeImage(badgeSenior);
        break;
      case "expert":
        setBadgeImage(badgeExpert);
        break;
      default:
        setBadgeImage(badgeJunior);
        break;
    }
  }, [consultant.consultant.position]);

  return (
    <Card
      sx={{
        backgroundColor: "#eaeaea",
        borderRadius: "30px",
        maxWidth: "260px",
        position: "relative",
        paddingTop: "15px",
        paddingBottom: "15px",
        boxShadow:
          "rgba(50, 50, 93, 0.02) 0 2px 5px -1px, rgba(0, 0, 0, 0.05) 0 1px 3px -1px",
      }}
    >
      <Avatar
        src={badgeImage}
        sx={{
          position: "absolute",
          top: 5,
          right: 5,
          width: 70,
          height: "auto",
        }}
      />

      <CardContent>
        <Avatar
          src="https://api.multiavatar.com/Binx Bond.png"
          sx={{ width: 100, height: 100, margin: "0 auto" }}
        />
        <Stack
          direction="row"
          spacing={2}
          justifyContent="center"
          alignItems="center"
        >
          <Stack direction="column">
            <Typography fontSize={20} variant="h5" component="div">
              {consultant.consultant.name}
            </Typography>
            <Typography sx={{ mb: 1.5 }} variant="body2" color="text.secondary">
              {consultant.consultant.job}
            </Typography>
          </Stack>
          <Stack direction="row" spacing={2}>
            <Typography variant="h3" fontSize="1.1em">
              {consultant.consultant.tjm.toString()} €
              <span
                style={{
                  fontSize: "0.8em",
                  fontWeight: "normal",
                  color: "text.secondary",
                }}
              >
                / jour
              </span>
            </Typography>
          </Stack>
        </Stack>

        <Stack
          direction="row"
          spacing={1}
          rowGap={1}
          flexWrap="wrap"
          justifyContent="center"
          marginTop={1}
          marginBottom={1}
          // sx={{ backgroundColor: "#d9d9d9", padding: "10px" }}
        >
          {consultant.consultant.skills.map((skill) => (
            <Button
              key={skill}
              variant="contained"
              size="small"
              color="secondary"
            >
              {skill}
            </Button>
          ))}
        </Stack>
      </CardContent>
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

export default ConsultantCard;
