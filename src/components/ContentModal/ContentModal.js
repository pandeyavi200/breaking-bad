import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';
import './ContentModal.css'
import { useEffect,useState } from 'react';
import axios from 'axios';
import { Typography } from '@material-ui/core';
const useStyles = makeStyles((theme) => ({
  modal: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  paper: {
    width: "90%",
    height: "80%",
    backgroundColor: "#39445a",
    border: "1px solid #282c34",
    borderRadius: 10,
    color: "white",
    boxShadow: theme.shadows[5],
    padding: theme.spacing(1, 1, 3),
  },
}));

export default function ContentModal({children,item}) {
  
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);
  const [quote, setQuote] = useState([])

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
 
  const fetchQuote = async () => {
    const { data } = await axios.get(
      `https://www.breakingbadapi.com/api/quote?author=${item.name}`
    );
    
    setQuote(data);
  };

  useEffect(() => {
    fetchQuote();
    // eslint-disable-next-line
  }, []);

  return (
    <div>
      <div type="button" onClick={handleOpen}>
        {children}
      </div>
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
          {item && (
            <div className={classes.paper}>
              <div className="ContentModal">
                <img 
                  
                  src={
                    item.img
                  }
                  alt=""
                  className="ContentModal__portrait"
                  // eslint-disable-next-lin
                />
                <img 
                  src={
                    item.img
                  }
                  alt=""
                  className="ContentModal__landscape"
                />
                
                <div className="ContentModal__about">
                  <span className="ContentModal__title">
                      {item.name}
                  </span>
                  

                  <span className="ContentModal__description">
                    <div> <span>DOB: </span> {item.birthday} </div>
                    <div>  <span>Occupation: </span> {item.occupation} </div>
                    <div >  <span>Status: </span> {item.status} </div>
                    <div> <span>Nickname: </span> {item.nickname} </div>
                    <div > <span>Portrayed: </span> {item.portrayed} </div>
                    <div ><span>Seasons: </span> {item.appearance+","} </div>
                    <div ><div style={{textAlign:"center"}}>Quotes: </div> 
                        
                        <>
                        {quote.map((q)=>   <Typography> ➡ {q.quote}</Typography> )} 
                        
                        </>
                        
                        
                        </div>
                        
                  </span>

                  

                </div>
              </div>
            </div>
          )}
        </Fade>
      </Modal>
    </div>
  );
}
