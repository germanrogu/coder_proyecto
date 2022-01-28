import React from 'react'


import { ThemeProvider } from '@mui/styles'
import { AppRouter } from './routes/AppRouter';
import { CartProvider } from './context/CartContext';
import { createTheme } from '@mui/material/styles';

export const theme = createTheme({

    typography: {
        fontFamily: 'Dongle',

        h1: {
            fontSize: '2.7rem',
        },
        h2: {
            fontSize: '2.3rem',
        },
        h3: {
            fontSize: '1.9rem',
        },
        h4: {
            fontSize: '1.5rem',
        },
        h5: {
            fontSize: '1.3rem',
        },
        h6: {
            fontSize: '1rem',
        },
        subtitle1: {
            fontSize: '1.1rem',
        },
        subtitle2: {
            fontSize: '1rem',
        },
        body1: {
            fontSize: '0.9rem',
        },
        body2: {
            fontSize: '0.8rem',
        },

    },




});


export const App = () => {
    return (
        <CartProvider>
            <ThemeProvider theme={theme}>
                <AppRouter />
            </ThemeProvider>
        </CartProvider>

    )
}
