import ToolBar from "src/pages/UserTable/components/ToolBar";
import LoadingComponent from "src/components/LoadingComponent";
import Table from "src/components/Table";
import SnackBar from "src/components/SnackBar";

import type { User } from "src/pages/UserTable/types/user";
import type { ToolbarFunctions } from "src/pages/UserTable/types/UserTableProps";

import { usersTableColumns } from "src/constants/usersTableColumns";
import { useAppDispatch } from "src/hooks/reduxHooks";
import { cleanUp } from "src/pages/UserTable/reducer";

import stylesClasses from "src/pages/UserTable/components/UserTableLayout/styles.module.scss";

interface UserTableLayoutProps extends ToolbarFunctions {
  usersList: User[];
  statusMessage: string;
  isLoading: boolean;
}

const UserTableLayout = ({
  usersList,
  isLoading,
  statusMessage,
  onSelectRows,
  onToggleBlock,
  onDelete,
  onQuit,
}: UserTableLayoutProps) => {
  const dispatch = useAppDispatch();

  const handleAlertClose = () => {
    dispatch(cleanUp());
  };

  return (
    <div className={stylesClasses.wrapper}>
      <ToolBar
        onSelectRows={onSelectRows}
        onToggleBlock={onToggleBlock}
        onDelete={onDelete}
        onQuit={onQuit}
      />
      <Table
        columns={usersTableColumns}
        rows={usersList}
        checkboxSelection={true}
        onSelectionModelChange={onSelectRows}
      />
      {statusMessage && (
        <SnackBar
          message={statusMessage}
          severity="success"
          duration={2000}
          position={{ vertical: "top", horizontal: "center" }}
          onClose={handleAlertClose}
        />
      )}
      {isLoading && <LoadingComponent />}
    </div>
  );
};

export default UserTableLayout;
