import { alpha, Button, Grid, TextField } from "@mui/material";
import { makeStyles, withStyles } from "@mui/styles";
import React from "react";
import { Controller } from "react-hook-form";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import GoogleIcon from "@mui/icons-material/Google";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",

    "& .MuiTextField-root": {
      margin: theme.spacing(1),
      width: "300px",
    },
    "& .MuiButtonBase-root": {
      margin: theme.spacing(2),
    },
    "& .MuiOutlinedInput-notchedOutline": {
      borderColor: "#722f37",
    },
    "&:hover .MuiOutlinedInput-input": {
      color: "#722f37",
    },
    "&:hover .MuiInputLabel-root": {
      color: "#722f37",
    },
    "&:hover .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline": {
      borderColor: "#722f37",
    },
    "& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-input": {
      color: "#722f37",
    },
    "& .MuiInputLabel-root.Mui-focused": {
      color: "#722f37",
    },
    "& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline": {
      borderColor: "#722f37",
    },
  },
}));
const ButtonCustom = withStyles((theme) => ({
  root: {
    "&.MuiButton-root": {
      textTransform: "none",
      color: "#722f37",
      fontSize: "1rem",
      fontWeight: "600",
      borderRadius: "8px",
      backgroundColor: alpha("#722f37", 0.2),
      margin: "0.8rem 0 ",
    },
    "&.MuiButton-root:hover": {
      backgroundColor: alpha("#722f37", 0.8),
      color: "white",
    },
  },
}))(Button);

export const TextFieldCustom = ({
  field,
  onSubmit,
  disabled,
  textButton = "Complete order",
  cancelButton = true,
  onClick,
}) => {
  const classes = useStyles();
  const { handleSubmit, control } = useForm();

  return (
    <>
      <form className={classes.root} onSubmit={handleSubmit(onSubmit)}>
        {field === "register" ? (
          <>
            <Controller
              name={"Email"}
              control={control}
              defaultValue=""
              render={({
                field: { onChange, value },
                fieldState: { error },
              }) => (
                <TextField
                  required
                  label={"Email"}
                  placeholder="Enter email"
                  variant="outlined"
                  value={value}
                  onChange={onChange}
                  error={!!error}
                  helperText={error ? error.message : null}
                  type="email"
                />
              )}
              rules={{ required: "Email required" }}
            />

            <Controller
              name={"Password"}
              control={control}
              defaultValue=""
              render={({
                field: { onChange, value },
                fieldState: { error },
              }) => (
                <TextField
                  required
                  placeholder="Enter password"
                  label={"Password"}
                  variant="outlined"
                  value={value}
                  onChange={onChange}
                  error={!!error}
                  helperText={error ? error.message : null}
                  type="password"
                />
              )}
              rules={{ required: "Password required" }}
            />
          </>
        ) : field === "purchase" ? (
          <>
            <Controller
              name={"fullName"}
              control={control}
              defaultValue=""
              render={({
                field: { onChange, value },
                fieldState: { error },
              }) => (
                <TextField
                  placeholder="Enter full name"
                  label={"Full name"}
                  variant="outlined"
                  value={value}
                  onChange={onChange}
                  error={!!error}
                  helperText={error ? error.message : null}
                />
              )}
              rules={{ required: "Full name required" }}
            />

            <Controller
              name={"Address"}
              control={control}
              defaultValue=""
              render={({
                field: { onChange, value },
                fieldState: { error },
              }) => (
                <TextField
                  placeholder="Enter address"
                  label={"Address"}
                  variant="outlined"
                  value={value}
                  onChange={onChange}
                  error={!!error}
                  helperText={error ? error.message : null}
                />
              )}
              rules={{ required: "Address required" }}
            />

            <Controller
              name={"Phone"}
              control={control}
              defaultValue=""
              render={({
                field: { onChange, value },
                fieldState: { error },
              }) => (
                <TextField
                  placeholder="Enter phone"
                  label={"Phone"}
                  variant="outlined"
                  value={value}
                  onChange={onChange}
                  error={!!error}
                  helperText={error ? error.message : null}
                  type="number"
                />
              )}
              rules={{ required: "Phone required" }}
            />
          </>
        ) : (
          <>Nothing</>
        )}

        <Grid container sx={{ display: "flex", flexDirection: "column" }}>
          {cancelButton && (
            <Grid item>
              <Link
                to={`/cart`}
                style={{
                  textDecoration: "none",
                }}
              >
                <ButtonCustom fullWidth>Cancel</ButtonCustom>
              </Link>
            </Grid>
          )}

          <Grid item>
            <ButtonCustom
              fullWidth
              type="submit"
              disabled={disabled}
            >
              {textButton}
            </ButtonCustom>
          </Grid>

          {!cancelButton && (
            <Grid item>
              <ButtonCustom
                startIcon={<GoogleIcon />}
                // type="submit"
                color="primary"
                variant="contained"
                fullWidth
                onClick={onClick}
              >
                Sign in with Google
              </ButtonCustom>
            </Grid>
          )}
        </Grid>
      </form>
    </>
  );
};
