import ButtonGroup from '@material-ui/core/ButtonGroup';
import Button from '@material-ui/core/Button';
import Paper from '@material-ui/core/Paper';
import { Link } from "react-router-dom";
import useStyles from "../styles";

const Navbar = () => {
  const classes = useStyles();

  return (
    <Paper
      className={classes.buttonPaper}
      elevation={0}
    >
      <ButtonGroup variant="text" aria-label="text button group">
        <Button component={Link} to="/">Курсы валют</Button>
        <Button component={Link} to="/converter">Калькулятор</Button>
      </ButtonGroup>
    </Paper>
  );
};

export default Navbar;