import Button from "src/components/Button";
import type { ToolbarFunctions } from "src/pages/UserTable/types/UserTableProps";
import stylesClasses from "src/pages/UserTable/components/ToolBar/styles.module.scss";

const ToolBar = ({ onToggleBlock, onDelete, onQuit }: ToolbarFunctions) => {
  return (
    <div className={stylesClasses.toolbar}>
      <Button variant="contained" onClick={() => onToggleBlock(true)}>
        Block
      </Button>
      <Button variant="contained" onClick={() => onToggleBlock(false)}>
        Unblock
      </Button>
      <Button variant="contained" onClick={onDelete}>
        Delete
      </Button>
      <Button variant="contained" onClick={onQuit}>
        Quit
      </Button>
    </div>
  );
};

export default ToolBar;
