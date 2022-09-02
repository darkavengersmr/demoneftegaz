import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { IPerfomanceIndicatorData } from '../../interfaces/interfaces';
import { Typography } from '@mui/material';

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
    p: "12px 1px 12px 1px", 
    fontSize: "0.8rem", 
    background: "#FFCE07"
}

const tableCellStyle = { 
    p: "12px 1px 12px 1px", 
    fontSize: "0.8rem"
}

interface IPerfomanceDataProps {
    data: IPerfomanceIndicatorData
}

const PerfomanceData = ({data}: IPerfomanceDataProps) => {

  return (
    <>
    <Typography variant="h6" sx={{ mt: 2, mb: 1}}>Показатели добычи</Typography>
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 300 }} aria-label="customized table">
        <TableHead>
          <TableRow>
            <TableCell sx={tableHeadStyle}> </TableCell>
            {data.days.map((day) => (
                <TableCell sx={tableHeadStyle} key={day}>{day}</TableCell>
            ))}
          </TableRow>
        </TableHead>
        <TableBody>
            { data.data.map((dng) =>(
                <StyledTableRow>
                <TableCell component="th" scope="row" sx={tableCellStyle}>
                  {dng.title}
                </TableCell>
                {dng.params.map((el) => (
                  <TableCell sx={tableCellStyle} key={el}>{el}</TableCell>
                ))}
              </StyledTableRow>
            ))}           
        </TableBody>
      </Table>
    </TableContainer>
    </>
  );
}

export default PerfomanceData;