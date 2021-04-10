import React from "react";
import DialogTitle from "@material-ui/core/DialogTitle";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import Button from "@material-ui/core/Button";
import Slide from "@material-ui/core/Slide";
// import Radio from "@material-ui/core/Radio";
// import RadioGroup from "@material-ui/core/RadioGroup";
// import FormControlLabel from "@material-ui/core/FormControlLabel";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import CallIcon from "@material-ui/icons/Call";
const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

function SimpleDialog(props) {
  // const [value, setValue] = React.useState("alphabet");

  const handleClicFilter = () => {
    // props.changeFilter(value);
    handleClose();
  };

  // const handleChange = (event) => {
  //   setValue(event.target.value);
  // };
  const { onClose, open } = props;

  const handleClose = () => {
    onClose();
  };

  return (
    <div>
      <Dialog
        open={open}
        TransitionComponent={Transition}
        onClose={handleClose}
      >
        <DialogTitle>{"Contacto"}</DialogTitle>
        <DialogContent dividers>
          <DialogContentText>
            Puedes llamarnos a cualquiera de los siguientes numeros:
          </DialogContentText>
          <React.StrictMode>
            <List component="nav" aria-label="main mailbox folders">
              <ListItem button>
                <ListItemIcon>
                  <CallIcon />
                </ListItemIcon>
                <ListItemText primary="443-110-1751" />
              </ListItem>
              <ListItem button>
                <ListItemIcon>
                  <CallIcon />
                </ListItemIcon>
                <ListItemText primary="459-114-8174" />
              </ListItem>
            </List>
          </React.StrictMode>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClicFilter} color="primary">
            Cerrar
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}

export default SimpleDialog;
