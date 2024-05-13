import React from 'react';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import useStyles from '../../styles';
import { inject, observer } from 'mobx-react';
import ConverterStore from '../../stores/converterStore';
import FormComponent from './components/formCompnent';
import ConverterInput from './components/converterInput';

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
        <ConverterInput data={converterStore?.data} />
        <Grid container className={classes.gridContainer}>
          <FormComponent
            selectValue={selectFrom}
            selectOnChange={(e: any) => setSelectFrom(e.target.value)}
            inputValue={inputFrom}
            inputOnChange={(e: any) => onChange(e.target.value, true)}
            data={converterStore?.data}
          />
          <FormComponent
            selectValue={selectTo}
            selectOnChange={(e: any) => setSelectTo(e.target.value)}
            inputValue={inputTo}
            inputOnChange={(e: any) => onChange(e.target.value, false)}
            data={converterStore?.data}
          />
        </Grid>
      </Paper>
    );
  }),
);

export default Converter;