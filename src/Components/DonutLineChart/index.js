import React from "react";
import DonutChart from 'react-donut-chart';
import {Grid} from "@material-ui/core";
import classes from "./DonutLineChart.module.css";
import LineChart from './Linechart';

const DonutLineChart = () => {
    return(
        <Grid container spacing={5} className={classes.donutChart}>
            <Grid xs={12} sm={6}>
            <DonutChart
            width={350}
            height={250}
            data={[
                {
        label: 'Active',
        value: 45,
        className:"activeClass"
    },
    {
        label: 'Recovered',
        value: 40,
        className:"recoveredClass"
    },
    {
        label: 'Deceased',
        value: 15,
        className:"deceasedClass"
    }]} />
            </Grid>
            <Grid xs={12} sm={6}>
                <div>
                <LineChart />
                </div>
            </Grid>
        </Grid>        
    )
}

export default DonutLineChart;