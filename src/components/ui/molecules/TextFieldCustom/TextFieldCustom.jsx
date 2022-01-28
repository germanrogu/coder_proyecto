import { Button, TextField } from "@mui/material";
import { makeStyles, withStyles } from "@mui/styles";
import React from "react";
import { Controller } from "react-hook-form";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    padding: theme.spacing(2),

    "& .MuiTextField-root": {
      margin: theme.spacing(1),
      width: "300px",
    },
    "& .MuiButtonBase-root": {
      margin: theme.spacing(2),
    },
  },
}));
const ButtonCustom = withStyles((theme) => ({
  root: {
    "&.MuiButton-root": {
      textTransform: "none",
      color: "#3483fa",
      fontSize: "1rem",
      fontWeight: "600",
      padding: theme.spacing(1),
      borderRadius: "8px",
      backgroundColor: "#4189e626",
    },
    "&.MuiButton-root:hover": {
      backgroundColor: "#4189e659",
    },
  },
}))(Button);

export const TextFieldCustom = ({ onSubmit }) => {
  const classes = useStyles();
  const { handleSubmit, control } = useForm();

  return (
    <>
      <form className={classes.root} onSubmit={handleSubmit(onSubmit)}>
        <Controller
          name={"fullName"}
          control={control}
          defaultValue=""
          render={({ field: { onChange, value }, fieldState: { error } }) => (
            <TextField
              label={"Full name"}
              variant="filled"
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
          render={({ field: { onChange, value }, fieldState: { error } }) => (
            <TextField
              label={"Address"}
              variant="filled"
              value={value}
              onChange={onChange}
              error={!!error}
              helperText={error ? error.message : null}
            />
          )}
          rules={{ required: "Address required" }}
        />

        <Controller
          name={"Email"}
          control={control}
          defaultValue=""
          render={({ field: { onChange, value }, fieldState: { error } }) => (
            <TextField
              label={"Email"}
              variant="filled"
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
          name={"Phone"}
          control={control}
          defaultValue=""
          render={({ field: { onChange, value }, fieldState: { error } }) => (
            <TextField
              label={"Phone"}
              variant="filled"
              value={value}
              onChange={onChange}
              error={!!error}
              helperText={error ? error.message : null}
              type="number"
            />
          )}
          rules={{ required: "Phone required" }}
        />

        <div>
          <Link
            to={`/cart`}
            style={{
              textDecoration: "none",
            }}
          >
            <ButtonCustom color="secondary">Cancel</ButtonCustom>
          </Link>

          <ButtonCustom type="submit" color="primary">
            Complete order
          </ButtonCustom>
        </div>
      </form>
    </>
  );
};
