import { createMuiTheme } from '@material-ui/core/styles';

export const lightBlue = '#B9D0F8';
export const blue = '#8BB1F3';
export const green = '#D0F8B9';
export const darkPrimary = '#212121';
export const red = '#FF8080';
export const textColor = '#5F6368';

export const LevelColors = {
    '1': '#74E381',
    '2': '#E3DF74',
    '3': '#E3BC74',
    '4': '#E3A652',
    '5': '#D96C6C',
};

export const theme = createMuiTheme({
    palette: {
        primary: {
            main: lightBlue,
        },
        secondary: {
            main: '#f44336',
        },
        text: {
            primary: textColor,
            secondary: textColor,
        },
    },
});
