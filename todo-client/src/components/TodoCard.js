import React from "react";
import CheckIcon from '@mui/icons-material/Check';
import DeleteIcon from '@mui/icons-material/Delete';
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import {CardContent, Card, Typography, IconButton} from '@mui/material'

export default function TodoCard() {
  return(
    <Card sx={{ width:500}}>
      <CardContent>
       <Typography sx={{ fontSize:14 }} gutterBottom>
          Name
       </Typography>
       <Typography variant="body2" gutterBottom>
          Description
        </Typography>
        <Typography sx={{ fontSize:12 }}>
          Due date
        </Typography>
        <IconButton color="primary">
          <CheckIcon/>
        </IconButton>
        <IconButton color="primary">
          <ArrowUpwardIcon/>
        </IconButton>
        <IconButton color="primary">
          <ArrowDownwardIcon/>
        </IconButton>
        <IconButton color="primary">
          <DeleteIcon/>
        </IconButton>
      </CardContent>
    </Card>
   )
}