import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

import { IProductionData } from '../../interfaces/interfaces';
import { Typography } from '@mui/material';
import { dateNow } from '../../helpers/helpers'

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  '&:nth-of-type(odd)': {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  '&:last-child td, &:last-child th': {
    border: 0,
  },
}));

const tableHeadStyle = { 
    p: "8px 4px 8px 4px", 
    fontSize: "0.8rem", 
    background: "#FFCE07"

}

const tableCellStyle = { 
    p: "8px 4px 8px 4px", 
    fontSize: "0.8rem"
}

const perfomanceDataTableHead = ['Показатели', 'С начала месяца, факт', 'С начала месяца, %', 'С начала года, факт', 'С начала года, %']

interface IPerfomanceDataProps {
    data: IProductionData[]
}

const PerfomanceData = ({data}: IPerfomanceDataProps) => {

  return (
    <>
    <Typography variant="h5" sx={{ mt: 2, mb: 1}}>Выполнение основных показателей на {dateNow(0)}</Typography>

    <TableContainer component={Paper}>
        <Table sx={{ minWidth: 300 }} aria-label="customized table">
        <TableHead>
          <TableRow>
            {perfomanceDataTableHead.map((title) => (
                <TableCell sx={tableHeadStyle} key={title} align="center">
                    <Typography sx={{ fontWeight: 'bold' }}>{title}</Typography>
                </TableCell>
            ))}
          </TableRow>
        </TableHead>
        <TableBody>
            { data.map((item) =>(
                <StyledTableRow key={item.title}>
                <TableCell component="th" scope="row" sx={tableCellStyle}>
                    <Typography sx={{ fontWeight: 'bold' }}>
                        {item.title}
                    </Typography>
                </TableCell>
                <TableCell component="th" scope="row" sx={tableCellStyle} align="right">
                    <Typography>
                        {item.monthFact}
                    </Typography>
                </TableCell>
                <TableCell component="th" scope="row" sx={tableCellStyle} align="right">
                         {item.monthFactProc}
                </TableCell>
                <TableCell component="th" scope="row" sx={tableCellStyle} align="right">
                         {item.yearFact}
                </TableCell>                
                <TableCell component="th" scope="row" sx={tableCellStyle} align="right">
                         {item.yearFactProc}
                </TableCell>
              </StyledTableRow>
            ))}           
        </TableBody>
      </Table>
    </TableContainer>

    </>
  );
}

export default PerfomanceData;