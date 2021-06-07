import React, {ChangeEvent, useState} from 'react';
import {StoreType} from "../store";
import {connect} from "react-redux";
import {makeStyles} from "@material-ui/core/styles";
import {Fab, TextField} from "@material-ui/core";
import MenuItem from "@material-ui/core/MenuItem";
import {setWizardStage, WIZARD_STAGES} from "./wizardActions";
import {Dispatch} from "redux";
import ForwardArrow from '@material-ui/icons/ArrowForwardRounded';
import InputAdornment from "@material-ui/core/InputAdornment";
import IconButton from "@material-ui/core/IconButton";
import { KeyboardDatePicker } from "@material-ui/pickers";
import moment from "moment";
import {Profile} from "../profile/profileTypes";
import {MaterialUiPickersDate} from "@material-ui/pickers/typings/date";
import {setProfileInformation} from "../profile/profileActions";

const useStyles = makeStyles((theme) => ({
    container: {
        height: "100%",
        width: "100%",
        //backgroundColor: blue,
        display: "flex",
        flexDirection: "column",
    },
    formContainer: {
        padding: 20,
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        height: "70%",
    },
    title: {
        fontSize: 22,
        textAlign: "center",
        margin: 20,
    },
    icon: {
        marginLeft: 5,
    },
    startButton: {
        margin: "30px auto",
    },
}));

type Props = {
    dispatch: Dispatch;
};

const AddProfileComponent = (props: Props) => {
    const { dispatch } = props;
    const classes = useStyles();
    const [profileInfo, setProfileInfo] = useState<Partial<Profile> | null>(null);

    const handleProfileInput = (key: string, value: string | number | Date | null) => {
        setProfileInfo({ ...profileInfo, [key]: value});
    };

    return (
        <div className={classes.container}>
            <span className={classes.title}>{"Tell us a little about yourself"}</span>
            <div className={classes.formContainer}>
                <TextField
                    required={true}
                    id={"firstname-input"}
                    label={"Name"}
                    variant={"outlined"}
                    onChange={(event: ChangeEvent<HTMLInputElement>) => handleProfileInput("name", event.target.value)}
                />
                <TextField
                    id={"surname-input"}
                    label={"Surname"}
                    variant={"outlined"}
                    onChange={(event: ChangeEvent<HTMLInputElement>) => handleProfileInput("surname", event.target.value)}
                />

                <KeyboardDatePicker
                    id={"dob-input"}
                    variant={"inline"}
                    inputVariant={"outlined"}
                    label={"Date of birth"}
                    onChange={(date: MaterialUiPickersDate) => handleProfileInput("dob", date !== null ? date.toDate() : date)}
                    value={null}
                    format="DD/MM/yyyy"
                />

                <TextField
                    id={"sex-input"}
                    label={"Sex"}
                    variant={"outlined"}
                    select={true}
                    required={true}
                    onChange={(event: ChangeEvent<HTMLInputElement>) => handleProfileInput("sex", event.target.value)}
                >
                    <MenuItem value={"male"}>{"Male"}</MenuItem>
                    <MenuItem value={"female"}>{"Female"}</MenuItem>
                </TextField>

                <TextField
                    id={"height-input"}
                    label={"Height"}
                    variant={"outlined"}
                    required={true}
                    InputProps={{endAdornment: <InputAdornment position="end"><IconButton>cm</IconButton></InputAdornment>}}
                    onChange={(event: ChangeEvent<HTMLInputElement>) => handleProfileInput("height", parseInt(event.target.value))}
                />

                <TextField
                    id={"weight-input"}
                    label={"Weight"}
                    variant={"outlined"}
                    required={true}
                    InputProps={{endAdornment: <InputAdornment position="end"><IconButton>kg</IconButton></InputAdornment>}}
                    onChange={(event: ChangeEvent<HTMLInputElement>) => handleProfileInput("weight", parseInt(event.target.value))}
                />
            </div>

            {/*TODO type check profile object to disable progression*/}
            <Fab variant={"extended"} disabled={profileInfo === null} color={"secondary"} className={classes.startButton} onClick={() => dispatch(setProfileInformation(profileInfo as Profile))}>
                {"Choose program"}
                <ForwardArrow className={classes.icon}/>
            </Fab>

        </div>
    );
};

const mapStateToProps = (store: StoreType) =>
{
    return {}
};

export default connect(mapStateToProps)(AddProfileComponent);
