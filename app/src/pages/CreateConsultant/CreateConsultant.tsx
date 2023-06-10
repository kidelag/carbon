import React, { useState, ChangeEvent, useEffect } from "react";
import {
  Container,
  Grid,
  Typography,
  Button,
  TextField,
  Stepper,
  Step,
  StepLabel,
} from "@mui/material";

import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import Select, { SelectChangeEvent } from '@mui/material/Select';

import { useNavigate } from "react-router-dom";

import axios from "axios";

const steps: any = {
  consultant: ["Step 1", "Step 2", "Step 3", "Step 4"],
  client: ["Step 1", "Step 2", "Step 3"],
  support: ["Step 1"],
}


const CreateConsultant: React.FC = () => {
  const url =
    process.env.NODE_ENV === "production"
      ? process.env.REACT_APP_URL_PROD
      : process.env.REACT_APP_URL_DEV;

  const [activeStep, setActiveStep] = useState(0);
  const [formData, setFormData] = useState<Record<string, string>>({});
  const [selectedSkills, setSelectedSkills] = useState<string[]>([]);
  const [userType, setUserType] = useState('consultant');
  const [competences, setCompetences] = useState<any>([]);

  const navigate = useNavigate();


  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  };

  const handleSkillSelection = (skill: string) => {
    if (selectedSkills.includes(skill)) {
      setSelectedSkills((prevSelectedSkills) =>
        prevSelectedSkills.filter((s) => s !== skill)
      );
    } else {
      setSelectedSkills((prevSelectedSkills) => [...prevSelectedSkills, skill]);
    }
  };

  useEffect(() => {
    axios.get(url + "/competences").then(({ data }) => {
      const competencessRaw = data.map((item: any) => ({
        id: item.id,
        title: item.title,
      }));

      setCompetences(competencessRaw);
    });
  }, []);

  const handleSubmit = async () => {
    try {

      const fullAddress = `${formData.roadNumber} ${formData.roadName}, ${formData.postalCode} ${formData.city}`;
      const updatedFormData = {
        email: formData.email,
        //password with firstname and lastname(3 first letters majuscule)
        password: formData.firstname + formData.lastname.substring(0, 3).toUpperCase(),
        role: userType.toUpperCase(),
        firstname: formData.firstname,
        lastname: formData.lastname,
        birthdate: formData.birthdate,
      }

      

      let roleFormData = {}

      await axios
        .post(url + "/users", updatedFormData)
        .then((res) => {
          // res.data.identifiers[0].id

          if(userType === 'support'){
            navigate('/consultants')
          }

          else if(userType === 'consultant'){
            roleFormData = {
              user: res.data.identifiers[0].id,
              tjm: parseInt(formData.tjm),
              salary: parseInt(formData.salary),
              address: fullAddress,
              tel: formData.tel,
              startDate: new Date(),
              job: formData.jobTitle,
              position: "",
              description: "",
              wantedCompetences: selectedSkills,
            }
            axios.post(url + "/consultant", roleFormData).then((res) => (console.log(res)))
            navigate('/consultants')
          }
          else if(userType === 'client'){
            roleFormData = {
              user: res.data.identifiers[0].id,
              name: formData.nameEntreprise,
              description: formData.descriptionEntreprise,
              wantedCompetences: selectedSkills,
            }
            axios.post(url + "/entreprise", roleFormData).then((res) => (console.log(res)))
            navigate('/consultants')
          }
          else {
            console.log('Autre')
          }


        })

      console.log("Form Data:", updatedFormData);
    }
    catch (e) {
      console.log(e)
    }
  };

  return (
    <Container maxWidth="sm" sx={{ mt: 8 }}>
      <Stepper activeStep={activeStep} sx={{ marginBottom: "30px" }}>
        {steps[userType].map((label: any) => (
          <Step key={label}>
            <StepLabel>{label}</StepLabel>
          </Step>
        ))}
      </Stepper>
      <Grid container direction="column" alignItems="center" spacing={2}>
        <Grid item xs={12}>

          {/* Etape 1 */}

          {activeStep === 0 && (
            <>
              <Typography variant="body1" marginBottom={2}>
                Renseignez les informations du compte
              </Typography>
              <InputLabel id="demo-simple-select-label">Type de compte</InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={userType}
                label="Type de compte"
                onChange={(e) => setUserType(e.target.value)}
              >
                <MenuItem value={'consultant'}>Consultant</MenuItem>
                <MenuItem value={'support'}>Support</MenuItem>
                <MenuItem value={'client'}>Client</MenuItem>
              </Select>
              <TextField
                size="small"
                label="Nom"
                name="lastname"
                onChange={handleChange}
                fullWidth
                margin="normal"
              />
              <TextField
                size="small"
                label="Prénom"
                name="firstname"
                onChange={handleChange}
                fullWidth
                margin="normal"
              />
              <TextField
                size="small"
                // label="Date de naissance"
                name="birthdate"
                type="date"
                onChange={handleChange}
                fullWidth
                margin="normal"
              />
               <TextField
                size="small"
                label="Email"
                name="email"
                onChange={handleChange}
                fullWidth
                margin="normal"
              />

            </>
          )}

          {/* Etape 2 */}


          {activeStep === 1 && userType === 'consultant' && (
            <>
              <Typography variant="body1" marginBottom={2}>
                Les informations d'adresse du consultant
              </Typography>
              <Grid container spacing={2}>
                <Grid item xs={12} sm={3}>
                  <TextField
                    size="small"
                    label="Numero"
                    name="roadNumber"
                    onChange={handleChange}
                    fullWidth
                    margin="normal"
                    
                  />
                </Grid>
                <Grid item xs={12} sm={9}>
                  <TextField
                    size="small"
                    label="Rue"
                    name="roadName"
                    onChange={handleChange}
                    fullWidth
                    margin="normal"
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    size="small"
                    label="Code Postal"
                    name="postalCode"
                    onChange={handleChange}
                    fullWidth
                    margin="normal"
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    size="small"
                    label="Ville"
                    name="city"
                    onChange={handleChange}
                    fullWidth
                    margin="normal"
                  />
                </Grid>
                <Grid item xs={12} sm={12}>
                  <TextField
                    size="small"
                    label="Téléphone"
                    name="tel"
                    onChange={handleChange}
                    fullWidth
                    margin="normal"
                  />
                </Grid>
              </Grid>
            </>
          )}

          {activeStep === 1 && userType === 'client' && (
            <>
              <Typography variant="body1" marginBottom={2}>
                Les informations du client
              </Typography>

              <TextField
                size="small"
                label="Nom de l'entreprise"
                name="nameEntreprise"
                onChange={handleChange}
                fullWidth
                margin="normal"
                
              />
              <TextField
                size="small"
                label="Description de l'entreprise"
                name="descriptionEntreprise"
                multiline
                minRows={2}
                maxRows={4}
                onChange={handleChange}
                fullWidth
                margin="normal"
              />
            </>
          )}

          {/* Etape 3 */}

          {activeStep === 2 && userType === 'consultant' && (
            <>
              <Typography variant="body1" marginBottom={2}>
                Sélectionnez les compétences du consultant
              </Typography>
              <Grid container spacing={2}>
                {competences.map((item:any, index:any) => (
                  <Grid item key={index} xs={3}>
                    <Button
                      variant={
                        selectedSkills.includes(item.id)
                          ? "contained"
                          : "outlined"
                      }
                      color="primary"
                      onClick={() => handleSkillSelection(item.id)}
                      fullWidth
                    >
                      {item.title}
                    </Button>
                  </Grid>
                ))}
              </Grid>
            </>
          )}

          {activeStep === 2 && userType === 'client' && (
            <>
              <Typography variant="body1" marginBottom={2}>
                Sélectionnez les compétences attendus du client
              </Typography>
              <Grid container spacing={2}>
                {competences.map((item:any, index:any) => (
                  <Grid item key={index} xs={3}>
                    <Button
                      variant={
                        selectedSkills.includes(item.id)
                          ? "contained"
                          : "outlined"
                      }
                      color="primary"
                      onClick={() => handleSkillSelection(item.id)}
                      fullWidth
                    >
                      {item.title}
                    </Button>
                  </Grid>
                ))}
              </Grid>
            </>
          )}

          {/* Etape 4 */}

          {activeStep === 3 && userType === 'consultant' && (
            <>
              <TextField
                size="small"
                label="Intitulé du poste"
                name="jobTitle"
                onChange={handleChange}
                fullWidth
                margin="normal"
              />
              <TextField
                size="small"
                label="Votre salaire"
                name="salary"
                onChange={handleChange}
                fullWidth
                type="number"
                margin="normal"
                helperText="Indiquez votre salaire brut annuel"
              />

              <TextField
                size="small"
                label="Votre taux journalier moyen"
                name="tjm"
                type="number"
                onChange={handleChange}
                fullWidth
                margin="normal"
                helperText="Indiquez votre taux journalier moyen, sachant qu'une journée représente environ 8h de travail"
              />
            </>
          )}
        </Grid>

        <Grid
          item
          container
          xs={12}
          alignItems="center"
          justifyContent="space-between"
        >
          <Grid item>
            {activeStep > 0 && (
              <Button
                variant="contained"
                color="secondary"
                onClick={handleBack}
              >
                Précédent
              </Button>
            )}
          </Grid>
          <Grid item>
            <Typography variant="body2">
              Etape {activeStep + 1} sur {steps[userType].length}
            </Typography>
          </Grid>
          <Grid item>
            <Button
              variant="contained"
              color="primary"
              //   onClick={handleNext}
              onClick={
                activeStep === steps[userType].length - 1 ? handleSubmit : handleNext
              }
              disabled={activeStep === steps[userType].length}
            >
              {activeStep === steps[userType].length - 1 ? "Valider" : "Suivant"}
            </Button>
          </Grid>
        </Grid>
      </Grid>
    </Container>
  );
};

export default CreateConsultant;
