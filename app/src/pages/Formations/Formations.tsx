import {
  Alert,
  Button,
  Collapse,
  IconButton,
  InputAdornment,
  Slide,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import SearchIcon from "@mui/icons-material/Search";
import FormationsList from "./FormationsList";
import DialogForm from "./DialogForm";

interface AlertMessage {
  open: boolean;
  message: string;
  severity: "success" | "info" | "warning" | "error" | undefined;
}

const Formations: React.FC = () => {
  const [searchTerm, setSearchTerm] = React.useState("");
  const [openModal, setOpenModal] = useState(false);
  const [alertMessage, setAlertMessage] = useState<AlertMessage>({
    open: false,
    message: "",
    severity: "success",
  });
  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const searchTerm = event.target.value;
    setSearchTerm(searchTerm);
  };

  const handleOpenModal = () => {
    setOpenModal(true);
  };

  const handleCloseModal = () => {
    setOpenModal(false);
  };
  const handleCloseAlert = () => {
    setAlertMessage({ open: false, message: "", severity: "success" });
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
        {/* {alertMessage.open && (
          <Alert
            severity="success"
            onClose={() =>
              setAlertMessage({ open: false, message: "", severity: "success" })
            }
          >
            {alertMessage.message}
          </Alert>
        )} */}
        <Collapse in={alertMessage.open} timeout={500} unmountOnExit>
          <Alert severity={alertMessage.severity} onClose={handleCloseAlert}>
            {alertMessage.message}
          </Alert>
        </Collapse>
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

        <Button variant="contained" onClick={handleOpenModal}>
          Créer un évènement
        </Button>
        <DialogForm
          open={openModal}
          onClose={handleCloseModal}
          setAlertMessage={setAlertMessage}
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
