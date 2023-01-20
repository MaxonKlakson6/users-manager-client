import stylesClasses from "src/components/LoadingComponent/styles.module.scss";
import { CircularProgress } from "@mui/material";

const LoadingComponent = () => {
  return (
    <div className={stylesClasses.wrapper}>
      <CircularProgress />
    </div>
  );
};

export default LoadingComponent;
