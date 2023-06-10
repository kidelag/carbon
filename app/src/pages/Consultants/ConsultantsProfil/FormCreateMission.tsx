import React, { useState } from "react";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
  TextField,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  FormControlLabel,
  Radio,
  FormLabel,
  RadioGroup,
  Checkbox,
} from "@mui/material";
import axios from "axios";

interface Props {
  consultantId: string | undefined;
  open: boolean;
  onClose: () => void;
  setAlertMessage: React.Dispatch<
    React.SetStateAction<{
      open: boolean;
      message: string;
      severity: "success" | "info" | "warning" | "error" | undefined;
    }>
  >;
}

const FormCreateMission: React.FC<Props> = ({
  consultantId,
  open,
  onClose,
  setAlertMessage,
}) => {
  const url =
    process.env.NODE_ENV === "production"
      ? process.env.REACT_APP_URL_PROD
      : process.env.REACT_APP_URL_DEV;

  const [successMessage, setSuccessMessage] = useState("");

  const [missionData, setmissionData] = useState({
    consultant: consultantId,
    title: "",
    description: "",
    startDate: "",
    endDate: "",
    company: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setmissionData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const dataToSend = {
      consultant: consultantId,
      title: missionData.title,
      description: missionData.description,
      startDate: missionData.startDate,
      endDate: missionData.endDate,
      company: missionData.company,
    };
    console.log(missionData);

    axios.post(url + "/missions", dataToSend).then((res) => {
      console.log(res);
      if (res.status === 200 || res.status === 201) {
        setAlertMessage({
          open: true,
          message: "Mission a bien été créé !",
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

    onClose(); // Close the dialog after submission
  };

  return (
    <Dialog open={open} onClose={onClose}>
      <DialogTitle>Créer une mission </DialogTitle>
      <DialogContent>
        <form onSubmit={handleSubmit}>
          <TextField
            label="Titre de l'évènement"
            name="title"
            value={missionData.title}
            onChange={handleChange}
            required
            margin="dense"
            fullWidth
          />
          <TextField
            label="Description"
            name="description"
            value={missionData.description}
            onChange={handleChange}
            required
            margin="dense"
            fullWidth
          />
          <TextField
            label="Date de début"
            type="date"
            name="startDate"
            value={missionData.startDate}
            onChange={handleChange}
            required
            margin="dense"
            fullWidth
            InputLabelProps={{ shrink: true }}
          />
          <TextField
            label="Date de fin"
            type="date"
            name="endDate"
            value={missionData.endDate}
            onChange={handleChange}
            required
            margin="dense"
            fullWidth
            InputLabelProps={{
              shrink: true,
            }}
          />

          <TextField
            label="Entreprise"
            name="company"
            value={missionData.company}
            onChange={handleChange}
            required
            margin="dense"
            fullWidth
          />

          <DialogActions>
            <Button onClick={onClose}>Annuler</Button>
            <Button type="submit">Valider</Button>
          </DialogActions>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default FormCreateMission;
