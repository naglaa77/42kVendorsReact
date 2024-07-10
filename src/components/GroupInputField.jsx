import { TextField } from '@mui/material';
import PropTypes from 'prop-types';

const GroupInputField = ({ data, handleChange, path, disabled, backgroundColor }) => {
    console.log("disabled", disabled)
    return (
        <TextField
            label="Group Name"
            variant="outlined"
            value={data || ''}
            onChange={(event) => handleChange(path, event.target.value)}
            disabled={disabled}
            fullWidth
            InputProps={{
                style: {
                    backgroundColor: disabled ? backgroundColor : 'default',
                }
            }}
        />
    );
};

GroupInputField.propTypes = {
    data: PropTypes.string,
    handleChange: PropTypes.func,
    path: PropTypes.string,
    disabled: PropTypes.bool,
    backgroundColor: PropTypes.string
};

GroupInputField.defaultProps = {
    disabled: false,
    backgroundColor: '#e0e0e0' // Default to a light gray when disabled
};

export default GroupInputField;
