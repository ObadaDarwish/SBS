import React, { useMemo } from "react";
import { Box, Typography, IconButton } from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import {
  AvatarWrapper,
  UserProfileCard,
  InfoContainer,
  InfoWrapper,
  UserAlbumsCard,
} from "./style";
import Avatar from "@mui/material/Avatar";
import {
  useGetUserQuery,
  useGetUserAlbumsQuery,
} from "../../Store/API/users.api";
import { useParams, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { getUsersFullState } from "../../Store/Reducers/Users/Users.slice";

const randomColor = () => {
  const hex = Math.floor(Math.random() * 0xffffff);
  return "#" + hex.toString(16);
};
const UsersProfile = () => {
  const { id: userId } = useParams<{ id: string }>();
  const { isLoading } = useGetUserQuery(userId as string);
  const { isLoading: isAlbumsLoading } = useGetUserAlbumsQuery(
    userId as string,
  );
  const { userProfile, userAlbums } = useSelector(getUsersFullState);
  const navigate = useNavigate();

  const infoList = useMemo(() => {
    return [
      { label: "Name", value: userProfile?.name },
      { label: "Username", value: userProfile?.username },
      { label: "Email", value: userProfile?.email },
      { label: "Company", value: userProfile?.company.name },
    ];
  }, [userProfile]);

  const handleNavigateBack = () => {
    navigate(-1);
  };
  if (isLoading || isAlbumsLoading) {
    return <div>Loading...</div>;
  }
  return (
    <Box>
      <Box my={1}>
        <IconButton onClick={handleNavigateBack}>
          <ArrowBackIcon />
        </IconButton>
      </Box>
      <UserProfileCard>
        <AvatarWrapper>
          <Avatar
            sx={{ width: 100, height: 100 }}
            style={{
              backgroundColor: randomColor(),
            }}
          >
            {userProfile?.name.split(" ").map((nameList) => nameList[0])}
          </Avatar>
          <Box mt={1}>
            <Typography>{userProfile?.name}</Typography>
          </Box>
        </AvatarWrapper>
        <InfoContainer>
          {infoList.map((item, index) => (
            <InfoWrapper key={index}>
              <Typography>{item.label} </Typography>
              <Typography>{item.value}</Typography>
            </InfoWrapper>
          ))}
        </InfoContainer>
      </UserProfileCard>
      <UserAlbumsCard>
        {userAlbums.map((album) => (
          <div className={"album"}>{album.title}</div>
        ))}
      </UserAlbumsCard>
    </Box>
  );
};

export default UsersProfile;
