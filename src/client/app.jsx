import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { ThemeProvider, createTheme } from '@mui/material/styles';
import TextField from '@mui/material/TextField';
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import DatePicker from '@mui/lab/DatePicker';
import ruLocale from 'date-fns/locale/ru';

import ButtonGroup from '@mui/material/ButtonGroup';
import Button from '@mui/material/Button';

import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import { Box, FormControl, IconButton, InputLabel } from '@mui/material';
import { cyan, lightBlue } from '@mui/material/colors';

const theme = createTheme({
  palette: {
    primary: {
      main: lightBlue[300],
      contrastText: '#1d5395',
    },
    secondary: {
      main: cyan[400],
      // contrastText: '#4d4d4d',
    },
    background: {
      paper: lightBlue[200],
    },
    // text: {
    //   primary: '#ff0000',
    // },
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <div className='App'></div>
    </ThemeProvider>
  );
}

export default App;
