import AppBar from '@mui/material/AppBar';
import React from 'react';
import NavBar from './menuBar/NavBar';
import TopBar from './menuBar/TopBar';

export default function MenuAppBar() {

  return (
    <AppBar position="static" style={{backgroundColor: 'white', color: 'black'}}>
      <TopBar />
      <NavBar />
    </AppBar>
  );
}