import React from "react";
import { Card, CardContent, Typography, Grid } from "@material-ui/core";
import CountUp from "react-countup";
import cx from "classnames";
import styles from "./Cards.module.css";
function Cards({ data: { confirmed, recovered, deaths, lastUpdate } }) {
  if (!confirmed) {
    return "Loading..";
  }
  return (
    <>
      <div className={styles.container}>
        <Grid container spacing={3} justify="center">
          {/* grid for infected  */}
          <Grid
            item
            component={Card}
            xs={12}
            md={3}
            className={cx(styles.card, styles.infected)}
          >
            <CardContent>
              {/* gutterBottom is for padding in bottom */}
              <Typography color="textSecondary" gutterBottom>
                Infected
              </Typography>
              <Typography varient="h5">
                {/* this is a component which is used to modify the numbers */}
                <CountUp
                  start={0}
                  end={confirmed.value}
                  duration={2.5}
                  separator=","
                />
              </Typography>
              <Typography color="textSecondary">
                {new Date(lastUpdate).toDateString()}
              </Typography>
              <Typography varient="body2">
                Number of active cases of covid19
              </Typography>
            </CardContent>
          </Grid>
          {/* grid for recovered */}
          <Grid
            item
            component={Card}
            xs={12}
            md={3}
            className={cx(styles.card, styles.recovered)}
          >
            <CardContent>
              {/* gutterBottom is for padding in bottom */}
              <Typography color="textSecondary" gutterBottom>
                Recovered
              </Typography>
              <Typography varient="h5">
                {" "}
                <CountUp
                  start={0}
                  end={recovered.value}
                  duration={2.5}
                  separator=","
                />
              </Typography>
              <Typography color="textSecondary">
                {" "}
                {new Date(lastUpdate).toDateString()}
              </Typography>
              <Typography varient="body2">
                Number of recovered cases of covid19
              </Typography>
            </CardContent>
          </Grid>
          {/* grid for deaths */}
          <Grid
            item
            component={Card}
            xs={12}
            md={3}
            className={cx(styles.card, styles.deaths)}
          >
            <CardContent>
              {/* gutterBottom is for padding in bottom */}
              <Typography color="textSecondary" gutterBottom>
                Deaths
              </Typography>
              <Typography varient="h5">
                {" "}
                <CountUp
                  start={0}
                  end={deaths.value}
                  duration={2.5}
                  separator=","
                />
              </Typography>
              <Typography color="textSecondary">
                {new Date(lastUpdate).toDateString()}
              </Typography>
              <Typography varient="body2">
                Number of deaths of covid19
              </Typography>
            </CardContent>
          </Grid>
        </Grid>
      </div>
    </>
  );
}

export default Cards;
