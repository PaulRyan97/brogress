import React, { useState } from 'react'
import { StoreType } from '../store'
import { connect } from 'react-redux'
import { makeStyles } from '@material-ui/core/styles'
import { Dispatch } from 'redux'
import { blue, textColor } from '../theme/theme'
import { Slider } from '@material-ui/core'
import clsx from 'clsx'

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
}))

type Props = {
    dispatch: Dispatch
}

const ChooseProgramComponent = (props: Props) => {
    const { dispatch } = props
    const classes = useStyles()
    const [maxWorkOutDays, setMaxWorkOutDays] = useState(0)

    return (
        <div className={classes.container}>
            <span className={clsx(classes.title, classes.text)}>{'Choose a program to follow'}</span>
            <div>
                <div className={clsx(classes.dayCountPrompt, classes.text)}>{'How many days per week can you work out?'}</div>
                <Slider
                    color={'secondary'}
                    defaultValue={3}
                    valueLabelDisplay={'on'}
                    onChangeCommitted={(event, value: number | number[]) => setMaxWorkOutDays(Array.isArray(value) ? value[0] : value)}
                    step={1}
                    min={1}
                    max={6}
                    marks={true}
                />
            </div>
            <div>
            {/*    TODO filter programs from state to display here */}
            </div>
        </div>
    )
}

const mapStateToProps = (store: StoreType) => {
    return {}
}

export default connect(mapStateToProps)(ChooseProgramComponent)
