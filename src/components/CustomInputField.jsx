import React from 'react';
import { TextField, Tooltip, IconButton, Box, InputAdornment } from '@mui/material';
import PropTypes from 'prop-types';
import ErrorOutlineIcon from '@mui/icons-material/ErrorOutline';
import InfoIcon from "@mui/icons-material/Info";

const CustomInputField = ({ data, handleChange, path, label, tooltipTitle }) => {
    return (
        <Box display="flex" gap=".5rem" marginBottom="2rem">
            <TextField
                fullWidth
                label={label}
                variant="outlined"
                value={data || ''}
                onChange={(event) => handleChange(path, event.target.value)}
                required
                InputProps={{
                    endAdornment: (
                        <>
                            <Tooltip title={tooltipTitle} arrow placement="top" PopperProps={{ sx: { backgroundColor: 'white' } }}>
                                <InfoIcon color="info"/>
                            </Tooltip>
                        </>
                    )
                }}
            />
        </Box>
    );
};

CustomInputField.propTypes = {
    data: PropTypes.string,
    handleChange: PropTypes.func.isRequired,
    path: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    tooltipTitle: PropTypes.string.isRequired,
};

export default CustomInputField;