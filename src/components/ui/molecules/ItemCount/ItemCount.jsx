import React, { useState } from "react";
import { Button, ButtonGroup } from "@mui/material";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import RemoveCircleOutlineIcon from "@mui/icons-material/RemoveCircleOutline";
import { withStyles } from "@mui/styles";

const ButtonCustom = withStyles((theme) => ({
  root: {
    "&.MuiButton-root": {
      backgroundColor: "#1976d2",
      textTransform: "none",
      color: "white",
      fontSize: "1rem",
      fontWeight: "600",
      padding: theme.spacing(1),
      borderRadius: "10px",
      margin: theme.spacing(2),
    },
    "&.MuiButton-root:hover": {
      backgroundColor: "#074b8f",
    },
  },
}))(Button);

export const ItemCount = ({ stock = 10, initial = 1, onAdd }) => {
  const [counter, setCounter] = useState(initial);

  const addElement = () => {
    setCounter(Math.min(counter + 1, stock));
  };

  const removeElement = () => {
    setCounter(Math.max(counter - 1, 1));
  };


  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <ButtonGroup variant="outlined" aria-label="outlined button group">
        <Button onClick={removeElement}>
          <RemoveCircleOutlineIcon />
        </Button>

        <Button variant="outlined" disabled>
          {counter}
        </Button>

        <Button onClick={addElement}>
          <AddCircleOutlineIcon />
        </Button>
      </ButtonGroup>

      <ButtonCustom onClick={() => onAdd(counter)}>
        Agregar al carrito
      </ButtonCustom>
    </div>
  );
};
