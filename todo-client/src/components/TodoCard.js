import React from "react";
import CheckIcon from '@mui/icons-material/Check';
import DeleteIcon from '@mui/icons-material/Delete';
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import {CardContent, Card, Typography, IconButton} from '@mui/material'

export default function TodoCard(props) {
  return(
    <Card sx={{ width:500}}>
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
          <ArrowUpwardIcon/>
        </IconButton>
        <IconButton color="primary">
          <ArrowDownwardIcon/>
        </IconButton>
        <IconButton color="primary" onClick={() => props.deleteTodo(props.id)}>
          <DeleteIcon/>
        </IconButton>
      </CardContent>
    </Card>
   )
}