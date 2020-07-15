import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import './Home.css';
import {Link} from 'react-router-dom'

const useStyles = makeStyles((theme) => ({
  frontimage:{
    width:'100%',
    height:"80vh",
    marginTop:'80px',
  },
  grid:{
    width:"80%",
    marginTop:"20px",
    margin:'0 auto',
  },
  innergrid:{
    marginTop:"10px;"
  },
  subName:{
    padding:"0",
    margin:"0",
  },
  root: {

  },
  paper: {
    color: theme.palette.text.secondary,
    boxShadow:'none',
    padding:'0',
    margin:'0',
  },
  price:{
    float:"right",
    boder:"2px solid black",
    padding:'5px'

  },
  h4:{
    fontWeight:"bolder",
    padding:"10px",
    fontSize:"14px",
    marginTop:"0",
    marginBottom:"0",
    border:'1px solid black',
    height:'50px',
    lineHeight:'25px'
  }
}));

export default function Home() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <div className="image"></div>
      <div className="section-2"><br/>
      <h1 className="subheading">NEW ARRIVAL</h1>
      <div className="heading-underline"></div>
        <Grid className="imggrid" container >
          <Grid className='inditems' item xs={12} sm={4}>
            <Link to="products"><Paper className={classes.paper} elevation={0}>
              <img src="https://images.pexels.com/photos/847371/pexels-photo-847371.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" width="100%" height="350" alt="Shoe" />
            </Paper></Link>
          </Grid>
          <Grid className='inditems' item xs={12} sm={4}>
            <Link to="products"><Paper className={classes.paper} elevation={0}>
              <img src="https://images.pexels.com/photos/19090/pexels-photo.jpg?auto=compress&cs=tinysrgb&dpr=1&w=500" width="100%" height="350" alt="NewArrival" />
            </Paper></Link>
          </Grid>
          <Grid className='inditems' item xs={12} sm={4}>
            <Link to="products"><Paper className={classes.paper} elevation={0}>
              <img src="https://images.pexels.com/photos/1670766/pexels-photo-1670766.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" width="100%" height="350" alt="descriptionofimage" />
            </Paper></Link>
          </Grid>
        </Grid>
      </div>
    </div>
  );
}




