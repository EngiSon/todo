import React from "react";
import {CardContent, Card, Typography} from '@mui/material'

export default function TodoCard() {
  return(
    <Card sx={{ width: 400}}>
      <CardContent>
       <Typography sx={{ fontSize:14 }} color="text.secondary" gutterBottom>
          Name
       </Typography>
       <Typography variant="body2">
          Description
        </Typography>
      </CardContent>
    </Card>
   )
}