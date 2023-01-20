import { useEffect, useState } from "react";
import type { GridSelectionModel } from "@mui/x-data-grid";

import UserTableLayout from "src/pages/UserTable/components/UserTableLayout";
import { useAppDispatch, useAppSelector } from "src/hooks/reduxHooks";
import { getAllUsers } from "src/pages/UserTable/thunks/getAllUsers";
import { toggleBlockUsers } from "src/pages/UserTable/thunks/toggleBlockUsers";
import { quit as quitAccount } from "src/pages/UserTable/thunks/quit";
import { deleteUsers } from "src/pages/UserTable/thunks/deleteUsers";

const UserTableContainer = () => {
  const dispatch = useAppDispatch();
  const { usersList, isLoading, error, statusMessage } = useAppSelector(
    (state) => state.userTable
  );

  const [selectedRows, setSelectedRows] = useState<GridSelectionModel>([]);

  const onSelectRows = (selectionModel: GridSelectionModel) => {
    setSelectedRows(selectionModel);
  };

  const handleBlockUsers = (isBlocked: boolean) => {
    if (selectedRows.length) {
      const idList = selectedRows as number[];
      dispatch(toggleBlockUsers({ idList, isBlocked }));
    }
  };

  const handleDeleteUsers = () => {
    if (selectedRows.length) {
      const idList = selectedRows as number[];
      dispatch(deleteUsers(idList));
    }
  };

  const quit = () => {
    dispatch(quitAccount());
  };

  useEffect(() => {
    dispatch(getAllUsers());
  }, []);

  return (
    <UserTableLayout
      usersList={usersList}
      isLoading={isLoading}
      statusMessage={statusMessage}
      onSelectRows={onSelectRows}
      onToggleBlock={handleBlockUsers}
      onDelete={handleDeleteUsers}
      onQuit={quit}
    />
  );
};

export default UserTableContainer;
