import React from "react";
import { Toolbar, Typography, useTheme } from "@mui/material";
import { useNavigate } from "react-router-dom";

import { StyledAppBar } from "./styles";
const AppBarComponent = () => {
  const theme = useTheme();

  const navigate = useNavigate();

  return (
    <StyledAppBar position="sticky">
      <Toolbar>
        <Typography
          role={"AppBar-heading"}
          variant="h6"
          component="div"
          color={theme.palette.info.contrastText}
          style={{ cursor: "pointer", marginRight: 40, textAlign: "center" }}
          onClick={() => navigate("/")}
        >
          SBS
        </Typography>
      </Toolbar>
    </StyledAppBar>
  );
};

export default AppBarComponent;
