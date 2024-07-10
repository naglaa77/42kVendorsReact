import React from 'react';
import PropTypes from 'prop-types';
import { withJsonFormsControlProps } from '@jsonforms/react';
import { TextField } from '@mui/material';

const CustomTextarea = ({ data, handleChange, path }) => {
    return (
        <TextField
            label="More detailed description"
            value={data || ''}
            onChange={(event) => handleChange(path, event.target.value)}
            multiline
            rows={4}
            variant="outlined"
            fullWidth
        />
    );
};

CustomTextarea.propTypes = {
    data: PropTypes.any,
    handleChange: PropTypes.func.isRequired,
    path: PropTypes.string.isRequired
};

export default withJsonFormsControlProps(CustomTextarea);