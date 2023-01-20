import type { GridColDef } from "@mui/x-data-grid";

export const usersTableColumns: GridColDef[] = [
  { field: "id", headerName: "ID" },
  { field: "name", headerName: "Name", flex: 1 },
  { field: "email", headerName: "Email", flex: 1 },
  {
    field: "isBlocked",
    headerName: "Block",
    type: "boolean",
  },
  {
    field: "onlineStatus",
    headerName: "Online",
    type: "boolean",
  },
  {
    field: "lastLogin",
    headerName: "Last login date",
    type: "date",
    flex: 1,
  },
  {
    field: "createdAt",
    headerName: "Created",
    type: "date",
    flex: 1,
  },
];
