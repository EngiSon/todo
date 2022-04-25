import React from "react";
import CheckIcon from '@mui/icons-material/Check';
import RotateRightIcon from '@mui/icons-material/RotateRight';
import PendingIcon from '@mui/icons-material/Pending';
import HourglassEmptyIcon from '@mui/icons-material/HourglassEmpty';
import DeleteIcon from '@mui/icons-material/Delete';
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import {CardContent, Card, Typography, IconButton} from '@mui/material'

export default function TodoCard(props) {
  return(
    <Card sx={{ width:500}} variant='outlined'>
      <CardContent>
       <Typography sx={{ fontSize:14 }} id='card-name' gutterBottom>
          {props.name}
       </Typography>
       <Typography id='card-desc' variant="body2" gutterBottom>
          {props.desc}
        </Typography>
        <Typography sx={{ fontSize:12 }} id='card-date'>
          {props.date}
        </Typography>
        <IconButton color="primary">
          <CheckIcon/>
        </IconButton>
        <IconButton color="primary">
          <RotateRightIcon/>
        </IconButton>
        <IconButton color="primary">
          <HourglassEmptyIcon/>
        </IconButton>
        <IconButton color="primary">
          <PendingIcon/>
        </IconButton>
        <IconButton color="primary" onClick={() => props.moveUp(props.id)}>
          <ArrowUpwardIcon/>
        </IconButton>
        <IconButton color="primary" onClick={() => props.moveDown(props.id)}>
          <ArrowDownwardIcon/>
        </IconButton>
        <IconButton color='warning' onClick={() => props.deleteTodo(props.id)}>
          <DeleteIcon/>
        </IconButton>
      </CardContent>
    </Card>
   )
}