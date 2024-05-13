import React from 'react';
import Paper from '@material-ui/core/Paper';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import useStyles from '../../styles';
import { inject, observer } from 'mobx-react';
import CurrencyStore from '../../stores/currencyStore';

type TCurrencyTable = {
  currencyStore?: CurrencyStore;
};

const CurrencyTable = inject('currencyStore')(
  observer(({ currencyStore }: TCurrencyTable) => {{
    const classes = useStyles();

    React.useEffect(() => {
      currencyStore?.fetchData();
    }, [currencyStore]);

    return (
      <Paper
        className={classes.tablePaper}
        elevation={0}
      >
        <Table className={classes.table} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Валюта</TableCell>
              <TableCell align="right">Покупка</TableCell>
              <TableCell align="right">Продажа</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {currencyStore?.data?.map((item) => (
              <TableRow key={item.name}>
                <TableCell component="th" scope="row">
                  {item.name}
                </TableCell>
                <TableCell align="right">{item.buy}</TableCell>
                <TableCell align="right">{item.sell}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </Paper>
    );
  }}),
);

export default CurrencyTable;