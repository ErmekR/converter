import Grid from '@material-ui/core/Grid';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import TextField from '@material-ui/core/TextField';
import useStyles from '../../../styles';
import { TConvertCurrency } from '../../../types';

interface TFormComponent {
  selectValue: string;
  selectOnChange: (v: any) => void;
  inputValue: number;
  inputOnChange: (v: any) => void;
  data: TConvertCurrency[] | null | undefined;
};

const FormComponent = ({ selectValue, selectOnChange, inputValue, inputOnChange, data }: TFormComponent) => {
    const classes = useStyles();
    return (
      <Grid
        className={classes.grid}
        item
        xs={6}
      >
        <FormControl
          variant="outlined"
          fullWidth
        >
          <InputLabel id="demo-simple-select-outlined-label">Валюта</InputLabel>
          <Select
            className={classes.formControl}
            labelId="demo-simple-select-outlined-label"
            id="demo-simple-select-outlined"
            value={selectValue}
            onChange={selectOnChange}
            label="Валюта"
          >
            {data?.map((item) => <MenuItem key={item.name} value={item.name}>{item.name}</MenuItem>)}
          </Select>
        </FormControl>
        <TextField
          className={classes.textField}
          label="Количество"
          variant="outlined"
          value={inputValue}
          onChange={inputOnChange}
          type="number"
          fullWidth
        />
      </Grid>
    );
  };

export default FormComponent;