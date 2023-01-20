import { DataGrid, GridSelectionModel } from "@mui/x-data-grid";
import type { DataGridProps } from "@mui/x-data-grid";

const Table = ({
  columns,
  rows,
  checkboxSelection,
  onSelectionModelChange,
}: DataGridProps) => {
  return (
    <DataGrid
      columns={columns}
      rows={rows}
      checkboxSelection={checkboxSelection}
      disableColumnMenu
      disableExtendRowFullWidth={true}
      hideFooterPagination
      onSelectionModelChange={onSelectionModelChange}
    />
  );
};

export default Table;
