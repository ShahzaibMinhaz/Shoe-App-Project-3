import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import './Product.css';
import Shoes from '../Shoes.json'
import {Link} from 'react-router-dom'
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';

const useStyles = makeStyles((theme) => ({
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
    flexGrow: 1,
  },
  price:{
    float:"right",
    padding:'5px'

  },
}));

export default function Home() {
  const classes = useStyles();
  console.log(Object.keys(Shoes))

  return (
    <div className={classes.root}>
      <div className="grid">
        <Grid className={classes.innergrid} container spacing={3}>
          {Object.keys(Shoes).map((val, ind) => {
            return (
              <Grid className='inditems' item xs={12} sm={4} key={ind}>
                <Link to={`/Products/${val}`}><Paper className={classes.paper} elevation={5}>
                  <img src={Shoes[val].img} width="100%" height="350" alt="Shoe" />
                  <div class="Description">
                    <h5 className='Product-Name'>{Shoes[val].name}</h5>
                    <hr/>
                    <div className="butn1"><AddShoppingCartIcon className="butn"/><span class="Price">{Shoes[val].price}</span></div>
                  </div>
                </Paper></Link>
              </Grid>
              
            )
          })}
        </Grid>
      </div>
    </div>
  );
}