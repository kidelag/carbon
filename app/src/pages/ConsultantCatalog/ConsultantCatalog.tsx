import {
  Grid,
  IconButton,
  InputAdornment,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import SearchIcon from "@mui/icons-material/Search";
import ConsultantCard from "./ConsultantCard";

interface Props {}

const consultants = [
  {
    id: 1,
    name: "Jean",
    job: "Développeur Fullstack",
    tjm: 300,
    skills: ["React", "NodeJS", "MongoDB", "Express", "Angular"],
    position: "junior",
  },
  {
    id: 2,
    name: "Sylvain",
    job: "Développeur Frontend",
    tjm: 250,
    skills: ["React", "Angular", "VueJS", "TypeScript", "JavaScript"],
    position: "senior",
  },
  {
    id: 3,
    name: "Marie",
    job: "Développeuse Backend",
    tjm: 250,
    skills: ["NodeJS", "Express", "MongoDB", "MySQL", "PHP"],
    position: "confirme",
  },
  {
    id: 4,
    name: "Paul",
    job: "Développeur Fullstack",
    tjm: 300,
    skills: ["React", "NodeJS", "MongoDB", "Express", "Angular"],
    position: "expert",
  },
  {
    id: 5,
    name: "Sylvie",
    job: "Développeuse Frontend",
    tjm: 250,
    skills: ["React", "Angular", "VueJS", "TypeScript", "JavaScript"],
    position: "junior",
  },
  {
    id: 6,
    name: "Marc",
    job: "Développeur Backend",
    tjm: 250,
    skills: ["NodeJS", "Express", "MongoDB", "MySQL", "PHP"],
    position: "senior",
  },
];

export const ConsultantCatalog: React.FC<Props> = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredConsultants, setFilteredConsultants] = useState(consultants);

  const handleSearchChange = (event: any) => {
    const searchTerm = event.target.value;
    setSearchTerm(searchTerm);

    const filteredConsultants = consultants.filter((consultant) =>
      // consultant.name.toLowerCase().includes(searchTerm.toLowerCase())
      Object.values(consultant)
        .join(" ")
        .toLowerCase()
        .includes(searchTerm.toLowerCase())
    );
    setFilteredConsultants(filteredConsultants);
  };

  return (
    <>
      <Stack
        direction="column"
        spacing={2}
        justifyContent="center"
        alignItems="center"
      >
        <Typography variant="h4" align="center">
          Découvrez nos 130 experts !
        </Typography>
        <TextField
          id="outlined-basic"
          variant="outlined"
          size="small"
          sx={{
            [`& fieldset`]: {
              borderRadius: 5,
              borderColor: "#00BB7E",
            },
          }}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <IconButton>
                  <SearchIcon color="secondary" />
                </IconButton>
              </InputAdornment>
            ),
          }}
          onChange={handleSearchChange}
          value={searchTerm}
        />
      </Stack>

      <Grid container spacing={3} marginTop="30px" padding={1}>
        {filteredConsultants.map((consultant) => (
          <Grid item xs={6} sm={4} md={3} key={consultant.id}>
            <ConsultantCard consultant={consultant} />
          </Grid>
        ))}
      </Grid>
    </>
  );
};

export default ConsultantCatalog;
