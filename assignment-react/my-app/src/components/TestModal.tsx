// MuiBasicModal.js
import * as React from 'react';
import { Box, Button, Modal, Typography } from '@mui/material';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 300,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

export default function MuiBasicModal({ title = "MUI Modal", description = "This is a MUI modal" }) {
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div>
      <Button onClick={handleOpen}>Open Modal</Button>

      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="mui-modal-title"
        aria-describedby="mui-modal-description"
      >
        <Box sx={style}>
          <Typography id="mui-modal-title" variant="h6" component="h2">
            {title}
          </Typography>
          <Typography id="mui-modal-description" sx={{ mt: 2 }}>
            {description}
          </Typography>
          <Button onClick={handleClose}>Close</Button>
        </Box>
      </Modal>
    </div>
  );
}
