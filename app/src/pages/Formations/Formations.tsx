import {
  IconButton,
  InputAdornment,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import React from "react";
import SearchIcon from "@mui/icons-material/Search";
import FormationsList from "./FormationsList";

const Formations: React.FC = () => {
  const [searchTerm, setSearchTerm] = React.useState("");
  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const searchTerm = event.target.value;
    setSearchTerm(searchTerm);
    // setCurrentPage(1);

    // const filteredConsultants = consultantsData.filter((consultant: any) =>
    //   Object.values(consultant)
    //     .join(" ")
    //     .toLowerCase()
    //     .includes(searchTerm.toLowerCase())
    // );
    // setFilteredConsultants(filteredConsultants);
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
          Découvrez nos formations !
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

      <Typography variant="h5">Formations en cours</Typography>
      <FormationsList />
      <Typography variant="h5" marginTop={3}>
        Challenge en cours
      </Typography>
      <FormationsList />
    </>
  );
};

export default Formations;
