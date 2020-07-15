import React from 'react'
import {useParams} from 'react-router-dom'
import Grid from '@material-ui/core/Grid';
import Shoes from '../Shoes.json'
import './Productitems.css';
import { Typography} from '@material-ui/core';

const Productitems = () => {
  const { id } = useParams()
  return(
    <div className="Main-Div">
      <Grid container spacing={3}>
        <Grid item xs={12} sm={4}>
          <Typography>
            <img className="Product-image" src = {Shoes[id].img} alt="Shoes"/>
          </Typography>
        </Grid>
        <Grid item xs={12} sm={8}>
            <div className="About-Product">
              <h1 className="Product-name">{Shoes[id].name}</h1>
              <h3 className="Product-Price">Price : {Shoes[id].price}</h3>
              <hr/>
              <h3 className="Product-Detail-heading">Product Details</h3>
              <p className="Product-Desc">{Shoes[id].Desc}</p>
              <hr/>
              <input className="btn1" type="button" value="ADD TO CART"/>
            </div>
        </Grid>
      </Grid>
    </div>
  )
}

export default Productitems