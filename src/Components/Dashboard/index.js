import React from "react";
import classes from "./Dashboard.module.css";
import DonutLineChart from "../DonutLineChart";
import Map from "../Map/MapComponent";
import Table from "../Table"
import Grid from '@material-ui/core/Grid';
import LocationOnIcon from '@material-ui/icons/LocationOn';

const Dashboard = () => {
    return(
        <div className={classes.dashboard}>
                <Grid container spacing={3}>
                    <Grid item xs={12} sm={6} >
                        <div className={classes.title}>
                            <LocationOnIcon className={classes.LocationOnIcon} />
                                <div className={classes.titleHeadingDiv}>
                                    <h3>INDIA COVID-19 TRACKER</h3>
                                    <p>Let's all pray to make our Earth Covid-19 free soon.Stay Safe and do TheLocate</p>
                                </div>
                            </div>
                        <div className={`${classes.card} ${classes.chartsDiv}`}>
                            <DonutLineChart />
                        </div>
                        <div className={`${classes.card} ${classes.tableDiv}`}>
                            <Table />       
                        </div>
                    </Grid>
                    <Grid item xs={12} sm={6} >
                        <div className={classes.subTitleHeadingDiv}>
                            <h3>INDIA MAP</h3>
                            <p>HOVER OVER A STATE FOR MORE DETAILS</p>
                        </div>
                    <div className={classes.mapCard}><Map /></div>
                </Grid>
            </Grid>
        </div>
    )
}

export default Dashboard;