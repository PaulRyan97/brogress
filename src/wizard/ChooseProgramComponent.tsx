import React, { useState } from 'react';
import { StoreType } from '../store';
import { connect, ConnectedProps, useDispatch } from 'react-redux';
import { makeStyles } from '@material-ui/core/styles';
import { blue, textColor } from '../theme/theme';
import clsx from 'clsx';
import { Program } from '../programs/programTypes';
import ProgramCardComponent from '../programs/ProgramCardComponent';
import { Fab } from '@material-ui/core';
import { setWizardStage, WizardStages } from './wizardActions';
import ForwardArrow from '@material-ui/icons/ArrowForwardRounded';
import { selectProgram } from '../programs/programActions';
import { showWizard } from '../app/appActions';

const useStyles = makeStyles((theme) => ({
    container: {
        height: 'calc(100% - 40px)',
        width: 'calc(100% - 40px)',
        padding: 20,
        backgroundColor: blue,
        display: 'flex',
        flexDirection: 'column',
    },
    text: {
        textAlign: 'center',
        margin: 20,
        color: 'white',
    },
    title: {
        fontSize: 22,
    },
    dayCountPrompt: {
        marginBottom: 40,
    },
    button: {
        width: 64,
        height: 64,
        color: textColor,
        margin: 'auto',
    },
    programsList: {
        display: 'flex',
        flexDirection: 'column',
        '& > :not(:first-child)': {
            marginTop: 20,
        },
    },
    icon: {
        marginLeft: 5,
    },
    startButton: {
        margin: '30px auto',
        minWidth: 120,
    },
}));

type Props = ReduxProps & {};

const ChooseProgramComponent = (props: Props) => {
    const classes = useStyles();
    const { programs } = props;
    const [selectedProgram, setProgram] = useState<Program | null>(null);
    const dispatch = useDispatch();

    return (
        <div className={classes.container}>
            <span className={clsx(classes.title, classes.text)}>{'Choose a program to follow'}</span>
            <div className={classes.programsList}>
                {programs.map((program: Program) => {
                    return <ProgramCardComponent program={program} isSelected={selectedProgram ? selectedProgram.id === program.id : false} onSelect={setProgram} />;
                })}
            </div>
            {selectedProgram !== null ? (
                <Fab
                    variant={'extended'}
                    color={'secondary'}
                    className={classes.startButton}
                    onClick={() => {
                        dispatch(selectProgram(selectedProgram));
                        dispatch(setWizardStage(WizardStages.INACTIVE));
                        dispatch(showWizard(false));
                    }}>
                    {'Finish setup'}
                    <ForwardArrow className={classes.icon} />
                </Fab>
            ) : null}
        </div>
    );
};

const mapStateToProps = (store: StoreType) => {
    return {
        programs: store.programsState.programs,
    };
};

const connector = connect(mapStateToProps);
type ReduxProps = ConnectedProps<typeof connector>;
export default connector(ChooseProgramComponent);
