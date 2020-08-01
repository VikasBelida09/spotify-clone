import React from "react";
import Button from "@material-ui/core/Button";
import Snackbar from "@material-ui/core/Snackbar";

export default function PositionedSnackbar({ openFlag, data }) {
  const [state, setState] = React.useState({
    open: openFlag,
    vertical: "top",
    horizontal: "center",
  });

  const { vertical, horizontal, open } = state;

 
  const handleClose = () => {
    setState({ ...state, open: false });
  };

  return (
    <div>
      <Snackbar
        anchorOrigin={{ vertical, horizontal }}
        open={open}
        onClose={handleClose}
        message={data}
        key={vertical + horizontal}
      />
    </div>
  );
}
