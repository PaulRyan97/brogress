import React from 'react';
import {StoreType} from "../store";
import {connect} from "react-redux";
import {Fab} from "@material-ui/core";
import ForwardArrow from '@material-ui/icons/ArrowForwardRounded';
import {makeStyles} from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import {ReactComponent as WelcomeWave} from "../images/wave.svg";
import {blue, lightBlue} from '../theme/theme';
import BenchPressImage from "../images/benchPress.jpg";

const useStyles = makeStyles((theme) => ({
    welcomeScreen: {
        display: "flex",
        flexDirection: "column",
        height: "100%"
    },
    icon: {
        marginLeft: 5,
    },
    startButton: {
        margin: "auto",
    },
    actionBackground: {
        backgroundColor: blue,
        zIndex: 1,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
    },
    wave: {
      zIndex: 1,
    },
    image: {
        maxWidth: "80%",
        margin: "10%",
    },
    imageOverlay: {
        position: "absolute",
        background: "linear-gradient(0deg, #00000088 30%, #ffffff44 100%)",
        height: "100%",
        width: "100%",
    },
    subtitleOverlay: {
        margin: "50% 5% 0% 5%",
        color: "white",
    },
    titleOverlay: {
        margin: "2% 5%",
        color: "white",
    },
    message: {
        color: "white",
        marginTop: 50,
    },
}));

type Props = {};

const WelcomeScreenComponent = (props: Props) => {
    const classes = useStyles();

    return (
        <div className={classes.welcomeScreen}>
            <img src={BenchPressImage} className={classes.image} />
            <div className={classes.imageOverlay}>
                <Typography variant="h4" gutterBottom className={classes.subtitleOverlay}>
                    {"Welcome to"}
                </Typography>
                <Typography variant="h2" gutterBottom className={classes.titleOverlay}>
                    {"Brogress"}
                </Typography>
            </div>
            <WelcomeWave className={classes.wave} />
            <div className={classes.actionBackground}>
                <Typography variant="h6" gutterBottom className={classes.message}>
                    {"Your simple progress tracker"}
                </Typography>
                <Fab variant={"extended"} color={"secondary"} className={classes.startButton}>
                    {"Get started"}
                    <ForwardArrow className={classes.icon}/>
                </Fab>
            </div>
        </div>
    );
};

const mapStateToProps = (store: StoreType) =>
{
    return {}
};

export default connect(mapStateToProps)(WelcomeScreenComponent);
