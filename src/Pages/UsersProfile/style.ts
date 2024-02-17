import styled from "styled-components";
import { Box, Card, lighten, colors } from "@mui/material";

export const UserProfileCard = styled(Card)`
  padding: 70px 30px;
  display: flex;
  height: 350px;

  ${({ theme }) => theme.breakpoints.down("sm")} {
    flex-direction: column;
    padding: 10px;
    height: auto;
  }
`;

export const AvatarWrapper = styled(Box)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: ${({ theme }) => theme.palette.info.light};
  flex-grow: 1;
  p {
    font-weight: bold;
  }
  ${({ theme }) => theme.breakpoints.down("sm")} {
    padding: 20px;
  }
`;

export const InfoContainer = styled(Box)`
  flex-grow: 2;
  display: flex;
  flex-direction: column;
  padding: 20px;
  ${({ theme }) => theme.breakpoints.down("sm")} {
    padding: 0;
  }
`;

export const InfoWrapper = styled(Box)`
  background-color: ${({ theme }) => lighten(theme.palette.info.light, 0.4)};
  padding: 10px;
  margin: 5px;
  & p:first-child {
    font-size: 13px;
  }
  & p:last-child {
    font-weight: bold;
    color: #000;
  }
  ${({ theme }) => theme.breakpoints.down("sm")} {
    margin: 5px 0;
  }
`;
export const UserAlbumsCard = styled(Card)`
  margin-top: 10px;
  padding: 70px 30px;
  display: flex;
  flex-flow: row wrap;

  .album {
    background-color: ${colors.orange[800]};
    color: ${({ theme }) => theme.palette.text.main};
    padding: 10px;
    margin: 10px;
    width: 200px;
    height: 200px;
    text-align: center;
    display: flex;
    justify-content: center;
    align-items: center;
    &:hover {
      background-color: ${colors.orange[600]};
      cursor: pointer;
      transition: background-color 0.3s;
    }
  }
  ${({ theme }) => theme.breakpoints.down("sm")} {
    padding: 10px;
    .album {
      width: 100%;
      height: 60px;
    }
  }
`;
