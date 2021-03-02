import React from "react";
import DonutChart from 'react-donut-chart';
import LineChart from 'react-linechart';
import {Grid} from "@material-ui/core";
import classes from "./DonutLineChart.module.css";

const DonutLineChart = () => {
    return(
        <Grid container spacing={3} className={classes.donutChart}>
            <Grid xs={12} sm={6}>
            <DonutChart
            width={400}
            height={300}
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
            <LineChart />
            </Grid>
        </Grid>
        
    )

}

export default DonutLineChart;