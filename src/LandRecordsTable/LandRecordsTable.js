import * as React from 'react';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  '&:nth-of-type(odd)': {
    backgroundColor: theme.palette.action.hover,
  },
  '&:last-child td, &:last-child th': {
    border: 0,
  },
}));

// Updated function with meaningful names
function createData(name, pdfUrl, fee, timeLimit, website) {
  return { name, pdfUrl, fee, timeLimit, website };
}

// Add real or placeholder links for all rows
const rows = [
  createData('Mutation', 'pdfs/mutation.pdf', 'Rs. 50', '30 Days', 'https://example.com'),
  createData('Change of Land Use (Conversion of Land)', '/pdfs/land_use.pdf', 'Rs. 100', '45 Days', 'https://example.com'),
  createData('Partition of Land on Mutual Agreement', '/pdfs/partition.pdf', 'Rs. 75', '20 Days', 'https://example.com'),
  createData('Demarcation For Industries/Corporate Sectors Only', '/pdfs/demarcation.pdf', 'Rs. 150', '60 Days', 'https://example.com'),
  createData('Payment of Land Revenue(e-Pauti)', '/pdfs/e-pauti.pdf', 'No Fee', 'Instant', 'https://example.com'),
];

export default function LandRecordsTable() {
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 700 }} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell>Sl No</StyledTableCell>
            <StyledTableCell>Services</StyledTableCell>
            <StyledTableCell align="right">Procedure</StyledTableCell>
            <StyledTableCell align="right">Fee Structure</StyledTableCell>
            <StyledTableCell align="right">ORTPS Time Limit</StyledTableCell>
            <StyledTableCell align="right">Website</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row, index) => (
            <StyledTableRow key={row.name}>
              <StyledTableCell>{index + 1}</StyledTableCell>
              <StyledTableCell component="th" scope="row">{row.name}</StyledTableCell>
              <StyledTableCell align="right">
                <a href={row.pdfUrl} target="_blank" rel="noopener noreferrer">
                  View PDF
                </a>
              </StyledTableCell>
              <StyledTableCell align="right">{row.fee}</StyledTableCell>
              <StyledTableCell align="right">{row.timeLimit}</StyledTableCell>
              <StyledTableCell align="right">
                <a href={row.website} target="_blank" rel="noopener noreferrer">
                  Visit
                </a>
              </StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
