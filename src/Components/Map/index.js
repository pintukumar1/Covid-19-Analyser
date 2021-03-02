import React from "react";
import Grid from '@material-ui/core/Grid';
import classes from './Map.module.css';

const Map = () => {
    return (
        <Grid container spacing={1}>
            <Grid item sm={3} xs={6} >
                <div className={classes.cardA}>
                <p>CONFIRMED</p>
               <p>A</p>
                </div>
            </Grid>
            <Grid item sm={3} xs={6}>
            <div className={classes.cardB}>
                <p>CONFIRMED</p>
               <p>A</p>
                </div>         
            </Grid>
            <Grid item sm={3} xs={6} >
            <div className={classes.cardC}>
                <p>CONFIRMED</p>
               <p>A</p>
                </div>
            </Grid>
            <Grid item sm={3} xs={6} >
            <div className={classes.cardD}>
                <p>CONFIRMED</p>
               <p>A</p>
                </div>
            </Grid>
        </Grid>
      );
}

export default Map;





 
