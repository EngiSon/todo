import React from "react";
import {CardContent, Card, Typography} from '@mui/material'

export default function TodoCard() {
  return(
    <Card sx={{ width: 400}} style={{backgroundColor: '#282c34'}}>
      <CardContent>
       <Typography sx={{ fontSize:14 }} color="white" gutterBottom>
          Name
       </Typography>
       <Typography variant="body2" color="white">
          Description
        </Typography>
      </CardContent>
    </Card>
   )
}