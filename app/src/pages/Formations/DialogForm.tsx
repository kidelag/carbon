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

interface DialogFormProps {
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

const DialogForm: React.FC<DialogFormProps> = ({
  open,
  onClose,
  setAlertMessage,
}) => {
  const url =
    process.env.NODE_ENV === "production"
      ? process.env.REACT_APP_URL_PROD
      : process.env.REACT_APP_URL_DEV;

  const [successMessage, setSuccessMessage] = useState("");

  const [eventData, setEventData] = useState({
    title: "",
    description: "",
    startDate: "",
    endDate: "",
    open: false,
    competences: "",
    difficulty: 1,
    nbBonusPoint: 0,
    type: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setEventData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const dataToSend = {
      title: eventData.title,
      description: eventData.description,
      startDate: eventData.startDate,
      endDate: eventData.endDate,
      open: eventData.open,
      competences: eventData.competences,
      difficulty: parseFloat(eventData.difficulty.toString()),
      nbBonusPoint: eventData.nbBonusPoint,
      type: eventData.type,
    };
    console.log(eventData);

    axios.post(url + "/events", dataToSend).then((res) => {
      console.log(res);
      if (res.status === 200 || res.status === 201) {
        setAlertMessage({
          open: true,
          message: "L'évènement a bien été créé !",
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

    // setAlertMessage({
    //   open: true,
    //   message: "L'évènement a bien été créé !",
    //   severity: "success",
    // });

    onClose(); // Close the dialog after submission
  };

  return (
    <Dialog open={open} onClose={onClose}>
      <DialogTitle>Create Event</DialogTitle>
      <DialogContent>
        <form onSubmit={handleSubmit}>
          <FormControl component="fieldset">
            <FormLabel component="legend">Type de l'évènement</FormLabel>
            <RadioGroup
              aria-label="type"
              name="type"
              value={eventData.type}
              onChange={handleChange}
              row
            >
              <FormControlLabel
                value="formation"
                control={<Radio />}
                label="Formation"
              />
              <FormControlLabel
                value="challenge"
                control={<Radio />}
                label="Challenge"
              />
            </RadioGroup>
          </FormControl>
          <TextField
            label="Titre de l'évènement"
            name="title"
            value={eventData.title}
            onChange={handleChange}
            required
            margin="dense"
            fullWidth
          />
          <TextField
            label="Description"
            name="description"
            value={eventData.description}
            onChange={handleChange}
            required
            margin="dense"
            fullWidth
          />
          <TextField
            label="Date de début"
            type="date"
            name="startDate"
            value={eventData.startDate}
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
            value={eventData.endDate}
            onChange={handleChange}
            required
            margin="dense"
            fullWidth
            InputLabelProps={{
              shrink: true,
            }}
          />

          <TextField
            label="Niveau de difficulté"
            type="number"
            name="difficulty"
            value={eventData.difficulty}
            onChange={handleChange}
            required
            margin="dense"
            fullWidth
          />
          <TextField
            label="Nombre de points bonus"
            type="number"
            name="nbBonusPoint"
            value={eventData.nbBonusPoint}
            onChange={handleChange}
            required
            margin="dense"
            fullWidth
          />
          <FormControlLabel
            control={
              <Checkbox
                name="open"
                checked={eventData.open}
                onChange={(e) =>
                  setEventData((prevData) => ({
                    ...prevData,
                    open: e.target.checked,
                  }))
                }
              />
            }
            label="Evenement commencé"
          />
          {/* Add more input fields for other properties */}
          <DialogActions>
            <Button onClick={onClose}>Cancel</Button>
            <Button type="submit">Submit</Button>
          </DialogActions>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default DialogForm;
