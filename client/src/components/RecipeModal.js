import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';
import LibraryAddIcon from '@material-ui/icons/LibraryAdd';
import ModalTabs from './ModalTabs';
import TextField from '@material-ui/core/TextField';
import '../styles/RecipeModal.css';
import TimeInput from './TimeInput';

const useStyles = makeStyles((theme) => ({
  modal: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  paper: {
    backgroundColor: theme.palette.background.paper,
    border: '2px solid #000',
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
}));

export default function RecipeModal(props) {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);
  const [activeTab, setActiveTab] = React.useState(1);

  const toggleTab = (tab) => {
    if (activeTab !== tab) {
      setActiveTab(tab);
    }
  }
  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <LibraryAddIcon 
        onClick={handleOpen} 
        fontSize="large" 
        className="add-recipe"
    >
        Add Recipe
      </LibraryAddIcon>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        className={classes.modal}
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >

        <Fade in={open}>
          <ModalTabs />
        </Fade>
      </Modal>
    </div>
  );
}