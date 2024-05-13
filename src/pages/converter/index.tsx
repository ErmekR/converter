import React from 'react';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import TextField from '@material-ui/core/TextField';
import useStyles from '../../styles';
import { inject, observer } from 'mobx-react';
import ConverterStore from '../../stores/converterStore';

type TConverter = {
  converterStore?: ConverterStore;
};

const Converter = inject('converterStore')(
  observer(({ converterStore }: TConverter) => {
    const classes = useStyles();
    const [selectFrom, setSelectFrom] = React.useState('');
    const [selectTo, setSelectTo] = React.useState('');
    const [inputFrom, setInputFrom] = React.useState(0);
    const [inputTo, setInputTo] = React.useState(0);
  
    React.useEffect(() => {
      converterStore?.fetchData();
    }, []);

    React.useEffect(() => {
      onChange(inputFrom, true);
    }, [selectFrom]);

    React.useEffect(() => {
      onChange(inputTo, false);
    }, [selectTo]);

    const onChange = (value: number, from: boolean) => {
      const resultFrom = converterStore?.data?.find((item: any) => item.name === selectFrom);
      const resultTo = converterStore?.data?.find((item: any) => item.name === selectTo);
      if (resultFrom && resultTo) {
        const price = from ? resultFrom?.price / resultTo?.price : resultTo?.price / resultFrom?.price;
        const result = price * value;
        from ? setInputTo(result) : setInputFrom(result);
      };
      from ? setInputFrom(value) : setInputTo(value);
    };
  
    return (
      <Paper
        className={classes.paper}
        elevation={0}
      >
        <Grid container className={classes.gridContainer}>
          <Grid
            className={classes.grid}
            item
            xs={6}
          >
            <FormControl
              className={classes.formControl}
              variant="outlined"
              fullWidth
            >
              <InputLabel id="demo-simple-select-outlined-label">Валюта</InputLabel>
              <Select
                labelId="demo-simple-select-outlined-label"
                id="demo-simple-select-outlined"
                value={selectFrom}
                onChange={(e: any) => setSelectFrom(e.target.value)}
                label="Валюта"
              >
                {converterStore?.data?.map((item) => <MenuItem value={item.name}>{item.name}</MenuItem>)}
              </Select>
            </FormControl>
            <TextField
              className={classes.textField}
              label="Количество"
              variant="outlined"
              value={inputFrom}
              onChange={(e: any) => onChange(e.target.value, true)}
              type="number"
              fullWidth
            />
          </Grid>
          <Grid
            className={classes.grid}
            item
            xs={6}
          >
            <FormControl
              className={classes.formControl}
              variant="outlined"
              fullWidth
            >
              <InputLabel id="demo-simple-select-outlined-label">Валюта</InputLabel>
              <Select
                labelId="demo-simple-select-outlined-label"
                id="demo-simple-select-outlined"
                value={selectTo}
                onChange={(e: any) => setSelectTo(e.target.value)}
                label="Валюта"
              >
              {converterStore?.data?.map((item) => <MenuItem value={item.name}>{item.name}</MenuItem>)}
              </Select>
            </FormControl>
            <TextField
              className={classes.textField}
              label="Количество"
              variant="outlined"
              value={inputTo}
              onChange={(e: any) => onChange(e.target.value, false)}
              type="number"
              fullWidth
            />
          </Grid>
        </Grid>
      </Paper>
    );
  }),
);

export default Converter;