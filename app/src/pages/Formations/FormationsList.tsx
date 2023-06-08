import { Grid, Pagination, Typography } from "@mui/material";
import React, { useState } from "react";
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
  const [filteredFormations, setFilteredFormations] = useState<any>(formations);

  const [currentPage, setCurrentPage] = useState(1);
  const [formationsPerPage] = useState(3);

  const handlePageChange = (
    event: React.ChangeEvent<unknown>,
    page: number
  ) => {
    setCurrentPage(page);
  };

  const totalPages = Math.ceil(filteredFormations.length / formationsPerPage);

  const indexOfLastFormation = currentPage * formationsPerPage;
  const indexOfFirstFormation = indexOfLastFormation - formationsPerPage;
  const currentFormations = filteredFormations.slice(
    indexOfFirstFormation,
    indexOfLastFormation
  );

  return (
    <>
      <Grid container spacing={3} marginTop="30px" padding={1}>
        {currentFormations.map((formation: any, index: any) => (
          <Grid item xs={6} sm={4} md={4} key={index}>
            <CardFormation {...formation} />
          </Grid>
        ))}
      </Grid>
      <Pagination
        color="primary"
        count={totalPages}
        page={currentPage}
        onChange={handlePageChange}
        sx={{
          margin: "50px auto 5vh auto",
          justifyContent: "center",
          display: "flex",
        }}
        size="large"
      />
    </>
  );
};

export default FormationsList;
