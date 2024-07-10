import React from 'react';
import { TextField, Tooltip, IconButton, Box, InputAdornment } from '@mui/material';
import PropTypes from 'prop-types';
import ErrorOutlineIcon from '@mui/icons-material/ErrorOutline';

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
                        <InputAdornment position="end">
                            <Tooltip title={tooltipTitle} placement="bottom" arrow>
                                <IconButton>
                                    <ErrorOutlineIcon />
                                </IconButton>
                            </Tooltip>
                        </InputAdornment>
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