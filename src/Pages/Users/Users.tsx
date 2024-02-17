import React from "react";
import { useNavigate } from "react-router-dom";

import MaterialTable from "../../Components/Table";
import { IColumns } from "../../Components/Table/Table";

import { useGetUsersQuery } from "../../Store/API/users.api";
import { IUsers } from "../../Types/Users.types";
import { useSelector } from "react-redux";
import { getUsersFullState } from "../../Store/Reducers/Users/Users.slice";
import { Box, Typography } from "@mui/material";

const Users = () => {
  const { isLoading } = useGetUsersQuery();
  const { usersList } = useSelector(getUsersFullState);
  const navigate = useNavigate();

  const handleUserNavigation = (userId: number) => {
    navigate(`/${userId}`);
  };
  const columns: IColumns<IUsers>[] = [
    {
      label: "Username",
      Cell: ({ username, id }) => (
        <div
          style={{ cursor: "pointer" }}
          onClick={() => handleUserNavigation(id)}
        >
          {username}
        </div>
      ),
    },
    {
      label: "Email",
      Cell: ({ email }) => <div>{email}</div>,
    },
    {
      label: "Website",
      Cell: ({ website }) => <div>{website}</div>,
    },
    {
      label: "Company",
      Cell: ({ company: { name } }) => <div>{name}</div>,
    },
  ];
  return (
    <Box>
      <Box mb={2}>
        <Typography variant={"h6"}>Users</Typography>
      </Box>
      {isLoading ? (
        <div>Loading</div>
      ) : (
        <MaterialTable
          columnsData={columns}
          rowData={usersList as unknown as IUsers[]}
        />
      )}
    </Box>
  );
};

export default Users;
