import React, { useState }  from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Grid from '@material-ui/core/Grid';
import Avatar from '@material-ui/core/Avatar';
import './treeview.css';
import Modal from '@material-ui/core/Modal';
import Button from '@material-ui/core/Button';
import FormControlLabel from '@material-ui/core/FormControlLabel';

function rand() {
  return Math.round(Math.random() * 20) - 10;
}

function getModalStyle() {
  const top = 50 + rand();
  const left = 50 + rand();

  return {
    top: `50%`,
    left: `50%`,
    transform: `translate(-${top}%, -${left}%)`,
  };
}


const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
    fontWeight: theme.typography.fontWeightRegular,
  },
  toolbar: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
  },
  paper: {
    position: 'absolute',
    width: 400,
    backgroundColor: theme.palette.background.paper,
    border: '2px solid #000',
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
}));


let o_employees=[
  {
    id:1,
    name:"Steven",
    lastname:"Buchanan",
    email:"steven.buchanan@email.com",
    phone:"1234567890",
    avatar:"https://gravatar.com/avatar/45d325e2bcf29d2950ccf9fdb2f82144?s=400&d=robohash&r=x",
    position:"General Manager",
    parentid:null
  },
  {
    id:3,
    name:"Laura",
    lastname:"Callahan",
    email:"laura.callahan@email.com",
    phone:"1234567890",
    avatar:"https://gravatar.com/avatar/5bc027831443b37214c9dfefd2d5a1d6?s=400&d=robohash&r=x",
    position:"Product Manager",
    parentid:1
  },
  {
    id:5,
    name:"Andrew",
    lastname:"Fuller",
    email:"andrew.fuller@email.com",
    phone:"1234567890",
    avatar:"https://gravatar.com/avatar/06b4dfdd7e5a2c2ab8696c0fb7b17c18?s=400&d=robohash&r=x",
    position:"Team Leader",
    parentid:3
  },
  {
    id:6,
    name:"Adrian",
    lastname:"Fuentes",
    email:"Jesus.fuller@email.com",
    phone:"1234567890",
    avatar:"https://gravatar.com/avatar/3c196f90c5111cd6d5e40bf45d87f5b8?s=400&d=robohash&r=x",
    position:"Team Leader",
    parentid:3
  },
  {
    id:7,
    name:"Carlos",
    lastname:"Fuller",
    email:"Carlos.fuller@email.com",
    phone:"1234567890",
    avatar:"https://gravatar.com/avatar/d84c68e47955ce3bfb30f2d0ad5de72d?s=400&d=robohash&r=x",
    position:"Team Leader",
    parentid:3
  },
  {
    id:8,
    name:"Rodrigo",
    lastname:"Coria",
    email:"Rodrigo.coria@email.com",
    phone:"1234567890",
    avatar:"https://gravatar.com/avatar/2af92c1707f3ad2526604e6021e134ee?s=400&d=robohash&r=x",
    position:"Backend Developer",
    parentid:5
  },
  {
    id:9,
    name:"Jesus",
    lastname:"Lozano",
    email:"jesus.lozano@email.com",
    phone:"1234567890",
    avatar:"https://gravatar.com/avatar/b80ba81adf9b813d561c7c5f54894627?s=400&d=robohash&r=x",
    position:"Frontend Developer",
    parentid:6
  },
  {
    id:12,
    name:"Mariana",
    lastname:"Leiva",
    email:"Mariana.Leiva@email.com",
    phone:"1234567890",
    avatar:"https://gravatar.com/avatar/5b415eccfb46fa77327cd4af3b7629f8?s=400&d=robohash&r=x",
    position:"Frontend Developer",
    parentid:9
  }
];


export default function Treeview() {
  const classes = useStyles();

  for(const item of o_employees) {
    // Find the parent object
    const parent = o_employees.find(({ id }) => id === item.parentid);
    // If the parent is found add the object to its children array
    if(parent) {
      parent.children = parent.children ? [...parent.children, item] : [] 
    }
  };
  const list = o_employees.filter(({ parentid }) => !parentid);

  const [modalStyle] = React.useState(getModalStyle);
  const [modal, setModal] = useState(false);
  const [bodymodal, setbodymodal] = useState(""); 
  const openModal = (event) => {
    event.stopPropagation();
     let o_data=JSON.parse(event.target.dataset.model);  
    setbodymodal(<>
      <p><Typography className={classes.heading}>ID: {o_data.id}</Typography> </p>
      <p><Typography className={classes.heading}>NAME: {o_data.name}</Typography> </p>
      <p><Typography className={classes.heading}>LASTNAME: {o_data.lastname}</Typography> </p> 
      <p><Typography className={classes.heading}>EMAIL: {o_data.email}</Typography> </p>
      <p><Typography className={classes.heading}>PHONE: {o_data.phone}</Typography> </p>
    </>); 
    
    setModal(true);

  }; 

  

  const closeModal = (event) => {
    event.stopPropagation()
    setModal(false);
  };

  
  
  var a_id=[];
  function accordion(employee){
    if(a_id.indexOf(employee.id) !== -1){
      return;
    }
    else{
      a_id.push(employee.id);
      return <><Accordion className="w-card-content">
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id={employee.id} className="w-card">
          <Grid
            container
            direction="row"
            justifyContent="center"
            alignItems="center"
          >
            <Grid item xs={6}>
              <Avatar alt={employee.name + " " + employee.lastname} src={employee.avatar} className={classes.large} />
            </Grid>
            <Grid item xs={6}>
              <Typography className={classes.heading}><strong>{employee.name} {employee.lastname}</strong></Typography>
              <Typography className={classes.heading}>{employee.position}</Typography>
              <button className="MuiButtonBase-root MuiButton-root MuiButton-text MuiButton-textPrimary" type="button" id={"btnmodal-" + employee.id} onClick={openModal} data-model={JSON.stringify({ id: employee.id, name: employee.name,lastname: employee.lastname,phone: employee.phone,email: employee.email })}>Más información</button>
              <Modal
                open={modal}
                onClose={closeModal}
                aria-labelledby="simple-modal-title"
                aria-describedby="simple-modal-description"
              >
                    <div style={modalStyle} className={classes.paper}>
                      {bodymodal}
                    </div>
              </Modal>
            </Grid>
          </Grid>
        </AccordionSummary>
        <AccordionDetails>
          {employee.hasOwnProperty("children") &&
            employee.children.map((employee, index) => (
              accordion(employee)
            ))}

        </AccordionDetails>
      </Accordion>
      </>
    }
    
            
            
  }

  return (
    <div className={classes.content}>
      <div className={classes.toolbar} />
        {
          list.map((employee, index) => (
            accordion(employee)
          ))
        }
    </div>
  );
  
}
