import { createMuiTheme } from '@material-ui/core/styles';

export const lightBlue = "#B9D0F8";
export const blue = "#8BB1F3";
export const green = "#D0F8B9";
export const darkPrimary = "#212121";
export const red = "#FF8080";
export const textColor = "#5F6368";

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
            secondary: "white",
        }
    },
});