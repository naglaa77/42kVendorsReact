
import PropTypes from 'prop-types';
import { withJsonFormsControlProps } from '@jsonforms/react';
import {Box, TextField} from '@mui/material';

const ShortText = ({ data, handleChange, path }) => {
    return (
        <Box marginBottom="2rem">
            <TextField
                label="Small description of your activities / pitch"
                value={data || ''}
                onChange={(event) => handleChange(path, event.target.value)}
                variant="outlined"
                fullWidth
            />
        </Box>
    );
};

ShortText.propTypes = {
    data: PropTypes.any,
    handleChange: PropTypes.func.isRequired,
    path: PropTypes.string.isRequired,
    label: PropTypes.string
};

export default withJsonFormsControlProps(ShortText);