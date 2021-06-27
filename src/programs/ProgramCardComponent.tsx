import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import { StoreType } from '../store';
import { connect, ConnectedProps, useDispatch } from 'react-redux';
import { Program } from './programTypes';
import { Typography } from '@material-ui/core';
import LevelStar from '../common/components/LevelStar';
import { selectProgram } from './programActions';

type StyleProps = {
    isSelected: boolean;
};

const useStyles = makeStyles((theme) => ({
    root: (props: StyleProps) => ({
        position: 'relative',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        userSelect: 'none',
        borderRadius: 8,
        backgroundColor: 'white',
        boxShadow: '8px 10px 13px 0px rgba(0,0,0,0.16), 8px 10px 8px 3px rgba(0,0,0,0.08), 8px 8px 30px 5px rgba(0,0,0,0.05)',
        cursor: 'pointer',
        border: props.isSelected ? `2px solid ${theme.palette.primary.main}` : '2px solid transparent',
        margin: 5,
    }),
    header: {
        margin: '10px 15px',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
}));

type Props = ReduxProps & {
    program: Program;
};

function ProgramCardComponent(props: Props) {
    const { selectedProgram, program } = props;
    const isSelected = selectedProgram ? selectedProgram.id === program.id : false;
    const classes = useStyles({ isSelected });
    const dispatch = useDispatch();

    return (
        <Paper className={classes.root} onClick={() => dispatch(selectProgram(program))}>
            <div className={classes.header}>
                <Typography variant={'h6'}>{program.name}</Typography>
                <LevelStar level={program.level} />
            </div>
        </Paper>
    );
}

const mapStateToProps = (store: StoreType) => {
    return {
        selectedProgram: store.programsState.selectedProgram,
    };
};
const connector = connect(mapStateToProps);
type ReduxProps = ConnectedProps<typeof connector>;
export default connector(ProgramCardComponent);
