import React from 'react';
import { Box, Button, Typography } from '@mui/material';
import './Header.css';

export default function Header() {
    return (
        <Box
            className="main-header d-flex justify-content-between align-items-center"
            sx={{ width: '100%' }}
        >
            <Box>
                <Typography>This is Header</Typography>
            </Box>
            <Box>
                <Button variant="contained">Login</Button>
                <Button variant="outlined">Sign up</Button>
            </Box>
        </Box>
    );
}
