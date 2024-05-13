import React from 'react';
import TextField from '@material-ui/core/TextField';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import useStyles from '../../../styles';
import { TConvertCurrency } from '../../../types';

interface TConverterInput {
  data: TConvertCurrency[] | null | undefined;
};

const ConverterInput = ({ data }: TConverterInput) => {
    const classes = useStyles();
    const [input, setInput] = React.useState('');
    const [answer, setAnswer] = React.useState('Введите в формате 1 usd to eur');
  
    const parseInput = (value: string) => {
      const parts = value.split(' ');
      const amount = parseFloat(parts[0]);
      const from = parts[1];
      const to = parts[3];

      if (parts.length === 4 && !isNaN(amount)) {
        const fromPrice = data?.find((item: any) => item.name === from?.toUpperCase())?.price;
        const toPrice = data?.find((item: any) => item.name === to.toUpperCase())?.price;

        if (fromPrice !== undefined && toPrice !== undefined) {
          const result = fromPrice / toPrice;
          setAnswer(`${amount} ${from.toUpperCase()} = ${result} ${to.toUpperCase()}`);
        } else {
          setAnswer('Введите в формате 1 usd to eur');
        }
      }

      setInput(value);
    }

    return (
      <Box className={classes.boxTextField}>
        <TextField
          label="Количество"
          variant="outlined"
          value={input}
          onChange={(e: any) => parseInput(e.target.value)}
          fullWidth
        />
        <Typography variant="body1">
          {answer}
        </Typography>
      </Box>
    );
  };

export default ConverterInput;