import React, { useMemo } from "react";
import {
  Box,
  Card,
  IconButton,
  ImageList,
  ImageListItem,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";

import { useGetPhotosQuery } from "../../Store/API/photos.api";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { getAlbumFullState } from "../../Store/Reducers/Album/Album.slice";
import { getUsersFullState } from "../../Store/Reducers/Users/Users.slice";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";

const UsersAlbum = () => {
  const { albumId } = useParams<{ albumId: string }>();
  const { isLoading } = useGetPhotosQuery(albumId as string);
  const { albumImages } = useSelector(getAlbumFullState);
  const { userAlbums } = useSelector(getUsersFullState);
  const { state } = useLocation();
  const navigate = useNavigate();
  const theme = useTheme();
  const isTablet = useMediaQuery(theme.breakpoints.down("sm"));
  const albumTitle = useMemo(
    () =>
      state.title ||
      userAlbums.find((album) => album.id === Number(albumId))?.title,
    [userAlbums, albumId, state],
  );
  const handleNavigateBack = () => {
    navigate(-1);
  };
  if (isLoading) {
    return <div>Loading...</div>;
  }
  return (
    <Box>
      <Box my={1}>
        <IconButton onClick={handleNavigateBack}>
          <ArrowBackIcon />
        </IconButton>
      </Box>
      <Box my={2}>
        <Typography
          variant={"h6"}
          align={isTablet ? "center" : "left"}
          sx={{ fontWeight: "bold" }}
        >
          {albumTitle}
        </Typography>
      </Box>
      <Box>
        <Card>
          <ImageList
            sx={{ width: "100%" }}
            cols={isTablet ? 3 : 6}
            rowHeight={164}
          >
            {albumImages.map((item) => (
              <ImageListItem key={item.thumbnailUrl}>
                <img
                  srcSet={`${item.thumbnailUrl}`}
                  src={`${item.thumbnailUrl}`}
                  alt={item.title}
                  loading="lazy"
                />
              </ImageListItem>
            ))}
          </ImageList>
        </Card>
      </Box>
    </Box>
  );
};

export default UsersAlbum;
