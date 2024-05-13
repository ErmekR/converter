import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';

const useStyles = makeStyles((theme: Theme) => 
  createStyles({
    root: {
      flexGrow: 1,
    },
    tabs: {
      marginTop: theme.spacing(3),
      background: '#fff',
    },
    buttonPaper: {
      padding: theme.spacing(1),
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
    },
    paper: {
      marginTop: theme.spacing(3),
    },
    gridContainer: {
      flexWrap: 'nowrap',
    },
    grid: {
      margin: theme.spacing(2),
    },
    formControl: {
    },
    selectEmpty: {
      marginTop: theme.spacing(2),
    },
    textField: {
      marginTop: theme.spacing(2),
    },
    tablePaper: {
      marginTop: theme.spacing(2),
      padding: theme.spacing(2),
    },
    table: {
      minWidth: 650,
    },
    baseSelect: {
      marginRight: theme.spacing(1),
      width: 200,
    },
  }),
);

export default useStyles;
