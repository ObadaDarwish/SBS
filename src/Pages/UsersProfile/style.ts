import styled from "styled-components";
import { Box, Card, darken, lighten } from "@mui/material";

export const UserProfileCard = styled(Card)`
  padding: 70px 30px;
  display: flex;
  height: 350px;
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
`;

export const InfoContainer = styled(Box)`
  flex-grow: 2;
  display: flex;
  flex-direction: column;
  padding: 20px;
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
`;
export const UserAlbumsCard = styled(Card)`
  margin-top: 10px;
  padding: 70px 30px;
  display: flex;
  flex-flow: row wrap;

  .album {
    background-color: ${({ theme }) =>
      darken(theme.palette.primary.light, 0.3)};
    color: ${({ theme }) => theme.palette.background.paper};
    padding: 10px;
    margin: 10px;
    width: 200px;
    height: 200px;
    text-align: center;
    display: flex;
    justify-content: center;
    align-items: center;
    &:hover {
      background-color: ${({ theme }) => theme.palette.primary.light};
      cursor: pointer;
      transition: background-color 0.3s;
    }
  }
`;
