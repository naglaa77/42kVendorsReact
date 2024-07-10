import { TextField } from '@mui/material';
import PropTypes from 'prop-types';

const PitchDescription = ({ data, handleChange, path, enabled }) => {
    const handleTextChange = (event) => {
        handleChange(path, event.target.value);
    };

    return (
        <TextField
            label="More detailed description"
            multiline
            fullWidth
            rows={4}
            value={data || ''}
            onChange={handleTextChange}
            disabled={!enabled}
            variant="outlined"
        />
    );
};

PitchDescription.propTypes = {
    data: PropTypes.string,
    handleChange: PropTypes.func.isRequired,
    path: PropTypes.string.isRequired,
    enabled: PropTypes.bool
};

PitchDescription.defaultProps = {
    enabled: true
};

export default PitchDescription;
