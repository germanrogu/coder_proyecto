import React, { useState } from "react";
import { Button, ButtonGroup } from "@mui/material";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import RemoveCircleOutlineIcon from "@mui/icons-material/RemoveCircleOutline";
import { withStyles } from "@mui/styles";

const ButtonCustom = withStyles((theme) => ({
  root: {
    "&.MuiButton-root": {
      textTransform: "none",
      color: "Black",
      fontSize: "1rem",
      fontWeight: "bold",
      padding: theme.spacing(1),
      borderRadius: "10px",
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

  const onAddElements = () => {
    if (counter <= stock) {
    }
    //onAdd(counter)
    console.log("Cantidad confirmada: " + counter);
  };

  return (
    <>
      <ButtonGroup variant="outlined" aria-label="outlined button group">
        <Button onClick={addElement}>
          <AddCircleOutlineIcon />
        </Button>

        <Button variant="outlined" disabled>
          {counter}
        </Button>

        <Button onClick={removeElement}>
          <RemoveCircleOutlineIcon />
        </Button>
      </ButtonGroup>

      <ButtonCustom onClick={onAddElements} variant="outlined">
        Agregar al carrito
      </ButtonCustom>
    </>
  );
};
