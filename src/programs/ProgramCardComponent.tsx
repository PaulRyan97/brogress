import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import { StoreType } from '../store';
import { connect, ConnectedProps, useDispatch } from 'react-redux';
import { Program } from './programTypes';
import { Typography } from '@material-ui/core';
import LevelStar from '../common/components/LevelStar';
import DateRangeIcon from '@material-ui/icons/DateRange';

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
        boxShadow: props.isSelected ? 'none' : '8px 10px 13px 0px rgba(0,0,0,0.16), 8px 10px 8px 3px rgba(0,0,0,0.08), 8px 8px 30px 5px rgba(0,0,0,0.05)',
        cursor: 'pointer',
        border: props.isSelected ? `2px solid ${theme.palette.secondary.main}` : '2px solid transparent',
        transition: 'border-color 0.1s linear',
        margin: 5,
        padding: '10px 15px',
    }),
    header: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    descText: {
        fontSize: 14,
    },
    icon: {
        marginRight: 5,
    },
    footer: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginTop: 10,
    },
}));

type Props = {
    program: Program;
    isSelected: boolean;
    onSelect: (program: Program) => void;
};

function ProgramCardComponent(props: Props) {
    const { program, onSelect, isSelected } = props;
    const classes = useStyles({ isSelected });

    return (
        <Paper className={classes.root} onClick={() => onSelect(program)}>
            <div className={classes.header}>
                <Typography variant={'h6'}>{program.name}</Typography>
                <LevelStar level={program.level} />
            </div>
            <span className={classes.descText}>{program.description}</span>
            <div className={classes.footer}>
                <div className={classes.header}>
                    <DateRangeIcon className={classes.icon} />
                    {program.days.length + ' days'}
                </div>
            </div>
        </Paper>
    );
}

export default ProgramCardComponent;
