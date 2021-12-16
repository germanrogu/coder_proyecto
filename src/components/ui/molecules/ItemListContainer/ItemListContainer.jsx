import React from 'react'
import { Typography } from '@mui/material'


export const ItemListContainer = ({greeting}) => {
    return (
        <div>
            <Typography>{greeting}</Typography>
        </div>
    )
}
