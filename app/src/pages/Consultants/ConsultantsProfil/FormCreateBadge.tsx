import React, { useEffect, useState } from "react";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  FormControlLabel,
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

const FormCreateBadge: React.FC<Props> = ({
  consultantId,
  open,
  onClose,
  setAlertMessage,
}) => {
  const url =
    process.env.NODE_ENV === "production"
      ? process.env.REACT_APP_URL_PROD
      : process.env.REACT_APP_URL_DEV;

  const [badgeList, setBadgeList] = useState([]);
  const [selectedBadge, setSelectedBadge] = useState<string>("");
  useEffect(() => {
    const fetchBadges = async () => {
      try {
        const response = await axios.get(`${url}/badges`);
        setBadgeList(response.data);
      } catch (error) {
        console.error("Error fetching badges:", error);
      }
    };

    fetchBadges();
  }, [url]);

  const [successMessage, setSuccessMessage] = useState("");

  const handleBadgeChange = (event: any) => {
    setSelectedBadge(event.target.value);
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    // Handle form submission

    try {
      const response = await axios.post(
        `${url}/consultant/${consultantId}/badge`,
        { badgeId: selectedBadge }
      );
      setSuccessMessage(response.data.message);
      setAlertMessage({
        open: true,
        message: response.data.message,
        severity: "success",
      });
      onClose();
    } catch (error) {
      console.error("Error creating badge:", error);
      setAlertMessage({
        open: true,
        message: "Erreur lors de la création du badge",
        severity: "error",
      });
    }
  };
  return (
    <Dialog open={open} onClose={onClose}>
      <DialogTitle>Ajouter un badge</DialogTitle>
      <DialogContent>
        <form onSubmit={handleSubmit}>
          <FormControl fullWidth>
            <InputLabel id="badge-select-label">Badge</InputLabel>
            <Select
              labelId="badge-select-label"
              id="badge-select"
              value={selectedBadge}
              onChange={handleBadgeChange}
              required
            >
              {badgeList.map((badge: any) => (
                <MenuItem key={badge.id} value={badge.id}>
                  {badge.title}
                </MenuItem>
              ))}
            </Select>
          </FormControl>

          <DialogActions>
            <Button onClick={onClose}>Annuler</Button>
            <Button type="submit">Valider</Button>
          </DialogActions>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default FormCreateBadge;
