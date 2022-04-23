import * as React from 'react';
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';

export default function ToggleButtons() {
  const [status, setStatus] = React.useState('prog');

  const handleStatus = (event, newStatus) => {
    setStatus(newStatus);
  };

  return (
    <ToggleButtonGroup
      value={status}
      exclusive
      onChange={handleStatus}
    >
      <ToggleButton value="prog" aria-label="in progress">
        In progress
      </ToggleButton>
      <ToggleButton value="done" aria-label="done">
        Done
      </ToggleButton>
      <ToggleButton value="postponed" aria-label="postponed">
        Postponed
      </ToggleButton>
      <ToggleButton value="pending" aria-label="pending">
        Pending
      </ToggleButton>
    </ToggleButtonGroup>
  );
}
