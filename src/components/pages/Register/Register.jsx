import { Box, Grid, Paper, Typography } from "@mui/material";
import React, { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { useAuth } from "../../../context/AuthContext";
import { useMounted } from "../../../hooks/useMounted";
import { ContentPages } from "../../ui/atoms/ContentPages/ContentPages";
import { LoadingScreen } from "../../ui/atoms/LoadingScreen/LoadingScreen";
import { TextFieldCustom } from "../../ui/molecules/TextFieldCustom/TextFieldCustom";

export const Register = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const paperStyle = {
    borderRadius: "8px",
    padding: 25,
    width: 350,
  };
  const [isSubmitting, setIsSubmitting] = useState(true);
  const { registerUser, signInWithGoogle } = useAuth();
  const mounted = useMounted();

  const SignInWithGoogle = () => {
    signInWithGoogle()
      .then((user) => navigate("/"))
      .catch((error) => {
        Swal.fire({
          position: "center",
          icon: "error",
          title: "Something went wrong!",
          text: `${error.message}`,
          showConfirmButton: true,
          confirmButtonColor: "#722f37",
        });
      });
  };
  const onSubmit = ({ Email, Password }) => {
    setIsSubmitting(true);
    registerUser(Email, Password)
      .then((response) => {
        navigate(location.state?.from ?? "/");
      })
      .catch((error) => {
        Swal.fire({
          position: "center",
          icon: "error",
          title: "Something went wrong!",
          text: `${error.message}`,
          showConfirmButton: true,
          confirmButtonColor: "#722f37",
        });
      })
      .finally(() => mounted.current && setIsSubmitting(false));
  };

  return (
    <ContentPages>
      <Typography
        style={{
          display: "flex",
          justifyContent: "center",
          fontSize: "2.2rem",
          fontWeight: "600",
          color: "#722f37",
          paddingTop: "2.5rem",
          paddingBottom: "3.5rem",
          fontFamily: "Marck Script",
        }}
      >
        {"Hello, create your account with these data"}
      </Typography>
      {isSubmitting ? (
        <Grid
          container
          spacing={1}
          sx={{
            display: "flex",
            textAlign: "center",
            justifyContent: "center",
          }}
        >
          <Paper elevation={2} style={paperStyle}>
            <TextFieldCustom
              field={"register"}
              onSubmit={onSubmit}
              disabled={false}
              textButton={"Register"}
              cancelButton={false}
              onClick={SignInWithGoogle}
            />
            <Grid container sx={{ marginTop: "2rem", textAlign: "center" }}>
              <Grid item xs={12} md={12}>
                <Typography style={{ color: "#722f37", fontSize: "0.8rem" }}>
                  <Link style={{ textDecoration: "none" }} to="/auth/login">
                    Already have account ?
                  </Link>
                </Typography>
              </Grid>
            </Grid>
          </Paper>
        </Grid>
      ) : (
        <Box sx={{ display: "flex" }}>
          <LoadingScreen />
        </Box>
      )}
    </ContentPages>
  );
};
