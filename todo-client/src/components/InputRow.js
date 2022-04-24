import * as React from 'react';
import SendIcon from '@mui/icons-material/Send';
import TextField from '@mui/material/TextField';
import { Card, IconButton, Stack } from '@mui/material';

export default function InputRow(props) {

  function handleSubmit(e) {
    e.preventDefault();
    const name = document.getElementById('name');
    const desc = document.getElementById('description');
    const date = document.getElementById('date');
    props.addTodo(name, desc, date, 'prog')
  }

  return (
    <form id='input-form' onSubmit={handleSubmit}>
      <Stack direction="row">
        <Card
          noValidate
          autoComplete="off"
        >
          <TextField id="name" label="Name" variant="filled"/>
          <TextField id="description" label="Todo" variant="filled"/>
          <TextField
            id="date"
            label="Due date"
            type="date"
            variant='filled'
            InputLabelProps={{
              shrink: true,
            }}
          />
        </Card>
        <IconButton color='primary' type='submit'>
          <SendIcon/>
        </IconButton>
      </Stack>
    </form>
  );
}