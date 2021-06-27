import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import GradeIcon from '@material-ui/icons/Grade';
import { LiftLevel } from '../../programs/programTypes';
import { LevelColors } from '../../theme/theme';

type StyleProps = { level: LiftLevel };

const useStyles = makeStyles((theme) => ({
    star: (props: StyleProps) => ({
        color: LevelColors[props.level],
        fontSize: 48,
    }),
    level: {
        position: 'absolute',
        left: '50%',
        top: '50%',
        transform: 'translate( -50%, -55%)',
    },
    wrapper: {
        position: 'relative',
        width: 'fit-content',
    },
}));

type Props = {
    level: LiftLevel;
};

const LevelStar = (props: Props) => {
    const { level } = props;
    const classes = useStyles({ level });

    return (
        <div className={classes.wrapper}>
            <GradeIcon className={classes.star} />
            <span className={classes.level}>{level}</span>
        </div>
    );
};

export default LevelStar;
