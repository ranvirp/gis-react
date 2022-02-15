import React from "react";
import {TableContainer, Table, TableHead, TableRow, TableCell, TableBody, Paper} from "@mui/material";

export default function BasicTable(props) {
    return (
        <TableContainer component={Paper}>
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
                <TableHead>
                    <TableRow>
                        {props.columns.map((value)=>{
                           return  <TableCell align={"center"}>{value.label}</TableCell>
                        })}

                    </TableRow>
                </TableHead>
                <TableBody>
                    {props.items.map((row) => (
                        <TableRow
                            key={row.name}
                            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                        >
                            {props.columns.map((value)=>{
                               return <TableCell align={"center"}>{row[value.id]}</TableCell>

                            })}


                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
}