import { Button } from '@mui/material';
import InputBase from '@mui/material/InputBase';
import Paper from '@mui/material/Paper';
import React from 'react';

function SubscribeInput() {
  return (
      <Paper
      component="form"
      sx={{ p: '2px 4px', display: 'flex', alignItems: 'center', width: "100%" }}
      >
      <InputBase
          sx={{ ml: 1, flex: 1, padding: "0 15px" }}
          placeholder="Enter Your Email"
          inputProps={{ 'aria-label': 'search google maps' }}
      />
      <Button sx={{padding: "14px 30px", background: "#dddddd99", }} type="button">Submit</Button>
      </Paper>
  );
}

export default SubscribeInput;
