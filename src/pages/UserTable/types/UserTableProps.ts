import { GridSelectionModel } from "@mui/x-data-grid";

export interface ToolbarFunctions {
  onSelectRows: (selectionModel: GridSelectionModel) => void;
  onToggleBlock: (isBlock: boolean) => void;
  onDelete: () => void;
  onQuit: () => void;
}
