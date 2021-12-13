import { Avatar, IconButton, Tooltip } from "@mui/material";
import React from "react";

export const AvatarName = ({ onClick, Name }) => {
  return (
    <Tooltip title="Configuración">
      <IconButton onClick={onClick} sx={{ p: 0 }}>
        <Avatar alt="Remy Sharp">{Name}</Avatar>
      </IconButton>
    </Tooltip>
  );
};
