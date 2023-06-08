import React, { useState, ChangeEvent } from "react";
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

const steps = ["Step 1", "Step 2", "Step 3", "Step 4"];
const skills = [
  "HTML",
  "CSS",
  "JavaScript",
  "React",
  "Node.js",
  "Python",
  "Java",
  "Ruby",
  "C++",
  "SQL",
];

const CreateConsultant: React.FC = () => {
  const [activeStep, setActiveStep] = useState(0);
  const [formData, setFormData] = useState<Record<string, string>>({});
  const [selectedSkills, setSelectedSkills] = useState<string[]>([]);

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

  const handleSubmit = () => {
    const fullAddress = `${formData.numero} ${formData.rue}, ${formData.codePostal} ${formData.ville}`;
    const updatedFormData = {
      ...formData,
      fullAddress: fullAddress,
      selectedSkills: selectedSkills,
    };

    console.log("Form Data:", updatedFormData);
  };

  return (
    <Container maxWidth="sm" sx={{ mt: 8 }}>
      <Stepper activeStep={activeStep} sx={{ marginBottom: "30px" }}>
        {steps.map((label) => (
          <Step key={label}>
            <StepLabel>{label}</StepLabel>
          </Step>
        ))}
      </Stepper>
      <Grid container direction="column" alignItems="center" spacing={2}>
        <Grid item xs={12}>
          {activeStep === 0 && (
            <>
              <Typography variant="body1" marginBottom={2}>
                Comment pouvons-nous vous contacter
              </Typography>
              <TextField
                size="small"
                label="Nom"
                name="lastName"
                onChange={handleChange}
                fullWidth
                margin="normal"
              />
              <TextField
                size="small"
                label="Prénom"
                name="firstName"
                onChange={handleChange}
                fullWidth
                margin="normal"
              />
              <TextField
                size="small"
                label="Date de naissance"
                name="birthDate"
                onChange={handleChange}
                fullWidth
                margin="normal"
              />
            </>
          )}
          {activeStep === 1 && (
            <>
              <Typography variant="body1" marginBottom={2}>
                Comment pouvons-nous vous contacter
              </Typography>

              <Typography variant="h6">Votre adresse</Typography>
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

                <Grid item xs={12} sm={6}>
                  <TextField
                    size="small"
                    label="Email"
                    name="email"
                    onChange={handleChange}
                    fullWidth
                    margin="normal"
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    size="small"
                    label="Numéro de téléphone"
                    name="phoneNumber"
                    onChange={handleChange}
                    fullWidth
                    margin="normal"
                  />
                </Grid>
              </Grid>
            </>
          )}
          {activeStep === 2 && (
            <>
              <Grid container spacing={2}>
                {skills.map((skill) => (
                  <Grid item key={skill} xs={3}>
                    <Button
                      variant={
                        selectedSkills.includes(skill)
                          ? "contained"
                          : "outlined"
                      }
                      color="primary"
                      onClick={() => handleSkillSelection(skill)}
                      fullWidth
                    >
                      {skill}
                    </Button>
                  </Grid>
                ))}
              </Grid>
            </>
          )}

          {activeStep === 3 && (
            <>
              {/* <Typography variant="h6">Step 1</Typography> */}
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
                margin="normal"
                helperText="Indiquez votre salaire brut annuel"
              />

              <TextField
                size="small"
                label="Votre taux journalier moyen"
                name="tjm"
                onChange={handleChange}
                fullWidth
                margin="normal"
                helperText="Indiquez votre taux journalier moyen,sachant qu'une journée représente environ 8h de travail"
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
              Etape {activeStep + 1} sur {steps.length}
            </Typography>
          </Grid>
          <Grid item>
            <Button
              variant="contained"
              color="primary"
              //   onClick={handleNext}
              onClick={
                activeStep === steps.length - 1 ? handleSubmit : handleNext
              }
              disabled={activeStep === steps.length}
            >
              {activeStep === steps.length - 1 ? "Valider" : "Suivant"}
            </Button>
          </Grid>
        </Grid>
      </Grid>
    </Container>
  );
};

export default CreateConsultant;
