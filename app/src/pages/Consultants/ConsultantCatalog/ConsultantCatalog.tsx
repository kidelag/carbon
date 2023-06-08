import {
  Grid,
  IconButton,
  InputAdornment,
  Pagination,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import SearchIcon from "@mui/icons-material/Search";
import ConsultantCard from "./ConsultantCard";
import axios from "axios";
import { log } from "console";

interface Props {}

const url =
  process.env.NODE_ENV === "production"
    ? process.env.REACT_APP_URL_PROD
    : process.env.REACT_APP_URL_DEV;

export const ConsultantCatalog: React.FC<Props> = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredConsultants, setFilteredConsultants] = useState<any>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [consultantsPerPage] = useState(8);

  useEffect(() => {
    axios.post(url + "/consultant/fetchAllConsultant").then(({ data }) => {
      const consultantsRaw = data.map((item: any) => ({
        id: item.id,
        firstname: item.user.firstname,
        job: item.job,
        tjm: item.tjm,
        skills: item.skills,
        position: item.position,
        role: item.user.role,
      }));

      setFilteredConsultants(
        consultantsRaw.filter((item: any) => item.role === "CONSULTANT")
      );
    });
  }, []);

  const totalPages = Math.ceil(filteredConsultants.length / consultantsPerPage);

  const handlePageChange = (
    event: React.ChangeEvent<unknown>,
    page: number
  ) => {
    setCurrentPage(page);
  };

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const searchTerm = event.target.value;
    setSearchTerm(searchTerm);
    setCurrentPage(1);

    // const filteredConsultants = consultants.filter((consultant) =>
    //   // consultant.firstname.toLowerCase().includes(searchTerm.toLowerCase())
    //   Object.values(consultant)
    //     .join(" ")
    //     .toLowerCase()
    //     .includes(searchTerm.toLowerCase())
    // );
    // setFilteredConsultants(filteredConsultants);
  };

  //pagination
  const indexOfLastConsultant = currentPage * consultantsPerPage;
  const indexOfFirstConsultant = indexOfLastConsultant - consultantsPerPage;
  const currentConsultants = filteredConsultants.slice(
    indexOfFirstConsultant,
    indexOfLastConsultant
  );

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
        {currentConsultants.map((consultant: any) => (
          <Grid item xs={6} sm={4} md={3} key={consultant.id}>
            <ConsultantCard consultant={consultant} />
          </Grid>
        ))}
      </Grid>

      <Pagination
        color="primary"
        count={totalPages}
        page={currentPage}
        onChange={handlePageChange}
        sx={{ margin: "50px auto 5vh auto", justifyContent: "center", display: "flex" }}
        size="large"
      />
    </>
  );
};

export default ConsultantCatalog;
