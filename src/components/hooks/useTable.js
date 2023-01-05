import React from 'react'
import { Table, TableHead, TableRow, TableCell, makeStyles } from '@material-ui/core'

const useStyles = makeStyles(theme => ({
    table: {
        marginTop: theme.spacing(3),
        '& thead th': {
            fontWeight: '600',
            color: theme.palette.primary.main,
            backgroundColor: theme.palette.primary.light,
        },
        '& tbody td': {
            fontWeight: '300',
        },
        '& tbody tr:hover': {
            backgroundColor: '#fffbf2',
        },
    },
}))

export default function useTable(headCells) {

    const classes = useStyles();

    const TblContainer = props => (
        <Table className={classes.table}>
            {props?.children}
        </Table>
    )

    const TblHead = props => {

        return (<TableHead>
            <TableRow>
                {
                    headCells.map((headCell,id) => (
                        <TableCell key={id}>{headCell}
                        </TableCell>))
                }
            </TableRow>
        </TableHead>)
    }



    return {
        TblContainer,
        TblHead,
    }
}