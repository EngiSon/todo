import * as React from 'react';
import {useState} from 'react';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import TextField from '@mui/material/TextField';
import { Card, IconButton, Stack } from '@mui/material';

export default function InputRow(props) {

  const [name, setName] = useState('');
  const [description, setDesc] = useState('');
  const [date, setDate] = useState('');

  function handleSubmit(e) {
    e.preventDefault();
    props.addTodo(name, description, date, 'prog')
    setName('');
    setDesc('');
    setDate('');
  }

  function handleNameChange(e) {
    setName(e.target.value);
  }

  function handleDescChange(e) {
    setDesc(e.target.value);
  }

  function handleDateChange(e) {
    setDate(e.target.value);
  }

  return (
    <form id='input-form' onSubmit={handleSubmit}>
      <Stack direction="row">
        <Card
          noValidate
          autoComplete="off"
        >
          <TextField id="name-input" label="Name" variant="filled" value={name} onChange={handleNameChange} required/>
          <TextField id="description-input" label="Todo" variant="filled" value={description} onChange={handleDescChange} required/>
          <TextField
            id="date-input"
            label="Due date"
            type="date"
            variant='filled'
            InputLabelProps={{
              shrink: true,
            }}
            value={date}
            onChange={handleDateChange}
            required
          />
        </Card>
        <IconButton color='primary' type='submit'>
          <AddCircleIcon/>
        </IconButton>
      </Stack>
    </form>
  );
}