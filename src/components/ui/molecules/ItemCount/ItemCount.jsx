import React, { useState } from "react";
import { alpha, Button, ButtonGroup } from "@mui/material";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import RemoveCircleOutlineIcon from "@mui/icons-material/RemoveCircleOutline";
import { withStyles } from "@mui/styles";

const ButtonCustom = withStyles((theme) => ({
  root: {
    "&.MuiButton-root": {
      textTransform: "none",
      color: "#722f37",
      fontSize: "1rem",
      fontWeight: "600",
      padding: theme.spacing(1),
      borderRadius: "8px",
      backgroundColor: alpha("#722f37", 0.2),
      margin: theme.spacing(2),
    },
    "&.MuiButton-root:hover": {
      backgroundColor: alpha("#722f37", 0.8),
      color: "white",
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
        <Button onClick={removeElement} sx={{ borderColor: "#722f37" }}>
          <RemoveCircleOutlineIcon sx={{ color: "#722f37" }} />
        </Button>

        <Button
          variant="outlined"
          disabled
          sx={{ color: "#722f37", fontWeight: "600" }}
        >
          {counter}
        </Button>

        <Button onClick={addElement} sx={{ borderColor: "#722f37" }}>
          <AddCircleOutlineIcon sx={{ color: "#722f37" }} />
        </Button>
      </ButtonGroup>

      <ButtonCustom onClick={() => onAdd(counter)}>Add to cart</ButtonCustom>
    </div>
  );
};
