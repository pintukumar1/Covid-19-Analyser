import React from "react";
import Grid from '@material-ui/core/Grid';
import classes from './Map.module.css';
import axios from "axios"


const Map = (props) => {
    const [active,setActive] = React.useState(0);
    const [confirmed,setConfirmed] = React.useState(0);
    const [deceased,setDeceased] = React.useState(0);
    const [recovered,setRecovered] = React.useState(0);

    const fetchData = async() => {
        const response = await axios.get("https://api.covid19india.org/data.json");
        let flag = 0;
        response.data.statewise.forEach(obj => {
            if(obj.statecode === props.id){
                flag = 1;
                setActive(obj.active);
                setConfirmed(obj.confirmed);
                setDeceased(obj.deaths);
                setRecovered(obj.recovered);
            }
        });
        if(flag===0){
            setActive(response.data.statewise[0].active);
            setConfirmed(response.data.statewise[0].confirmed);
            setDeceased(response.data.statewise[0].deaths);
            setRecovered(response.data.statewise[0].recovered);
        }      
      }
      React.useEffect(() => {
        fetchData();
      },[props])

    return (
        <Grid container spacing={1}>
            <Grid item sm={3} xs={6} >
                <div className={classes.cardA}>
                    <p>CONFIRMED</p>
                    <p>{confirmed}</p>
                </div>
            </Grid>
            <Grid item sm={3} xs={6}>
                <div className={classes.cardB}>
                    <p>ACTIVE</p>
                    <p>{active}</p>
                </div>         
            </Grid>
            <Grid item sm={3} xs={6} >
                <div className={classes.cardC}>
                    <p>RECOVERED</p>
                    <p>{recovered}</p>
                </div>
            </Grid>
            <Grid item sm={3} xs={6} >
                <div className={classes.cardD}>
                    <p>DECEASED</p>
                    <p>{deceased}</p>
                </div>
            </Grid>
        </Grid>
      );
}

export default Map; 