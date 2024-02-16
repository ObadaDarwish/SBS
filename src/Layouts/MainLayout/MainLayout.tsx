import React from "react";
import { Outlet } from "react-router-dom";
import { Container } from "@mui/material";
import { MainLayoutBox } from "./styles";
import AppBarComponent from "../../Components/AppBar";

const MainLayout = () => {
  return (
    <MainLayoutBox>
      <AppBarComponent />
      <Container>
        <Outlet />
      </Container>
    </MainLayoutBox>
  );
};

export default MainLayout;
