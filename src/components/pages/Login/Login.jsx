import React, { useState } from "react";
import { Box, Grid, Paper, Typography } from "@mui/material";
import { TextFieldCustom } from "../../ui/molecules/TextFieldCustom/TextFieldCustom";
import Swal from "sweetalert2";
import { ContentPages } from "../../ui/atoms/ContentPages/ContentPages";
import { useAuth } from "../../../context/AuthContext";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useMounted } from "../../../hooks/useMounted";
import { LoadingScreen } from "../../ui/atoms/LoadingScreen/LoadingScreen";

export const Login = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const paperStyle = {
    borderRadius: "8px",
    padding: 25,
    width: 350,
  };

  const [isSubmitting, setIsSubmitting] = useState(true);
  const { loginUser, signInWithGoogle } = useAuth();

  const mounted = useMounted();

  const SignInWithGoogle = () => {
    signInWithGoogle()
      .then((user) => navigate(location.state?.from ?? "/"))
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
    loginUser(Email, Password)
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
        {"Hello, log in with your email "}
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
              textButton={"Login"}
              cancelButton={false}
              onClick={SignInWithGoogle}
            />

            <Grid container sx={{ marginTop: "1.8rem" }}>
              <Grid item xs={12} md={12}>
                <Typography
                  style={{
                    color: "#722f37",
                    fontSize: "0.8rem",
                    textAlign: "center",
                  }}
                >
                  <Link style={{ textDecoration: "none" }} to="/auth/register">
                    Sign Up
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
