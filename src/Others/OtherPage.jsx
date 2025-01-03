import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Button, Container, Typography, Box, Paper } from '@mui/material';

function OtherPage() {
  const navigate = useNavigate();

  const handleNavigate = (path) => {
    navigate(path);
  };

  return (
    <Container maxWidth="sm" sx={{ marginTop: 4 }}>
      <Paper elevation={3} sx={{ padding: 4, textAlign: 'center' }}>
        <Typography variant="h4" gutterBottom>
         {/* Open */}
        </Typography>
        <Typography variant="body1" paragraph>
          {/* Select one of the following options to view deleted entries: */}
        </Typography>
        <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
          <Button
            variant="contained"
            color="primary"
            size="large"
            onClick={() => handleNavigate('/ShowDeletedSales')}
            sx={{ width: '100%' }}
          >
            Show Deleted Sales Entries
          </Button>
          <Button
            variant="contained"
            color="secondary"
            size="large"
            onClick={() => handleNavigate('/ShowDeletedPurchases')}
            sx={{ width: '100%' }}
          >
            Show Deleted Purchases Entries
          </Button>
        </Box>
      </Paper>
    </Container>
  );
}

export default OtherPage;
