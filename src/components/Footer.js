import React from 'react';
import { Box, Typography, Container } from '@mui/material';
const packageJson = require('../../package.json');

function Footer() {
  return (
    <Box component="footer" sx={{ bgcolor: 'background.paper', py: 6 }}>
      <Container maxWidth="lg">
        <Typography variant="body1" align="center" color="text.secondary">
          © 2023 Parsa Kargari with 💙 @ 4:39 AM
        </Typography>
        <Typography variant="body2" align="center" color="text.secondary">
          v{packageJson.version}
        </Typography>
      </Container>
    </Box>
  );
}

export default Footer;
