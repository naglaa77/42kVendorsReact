import { Box, Select, MenuItem, FormControl, InputLabel, Tooltip, IconButton, InputAdornment } from '@mui/material';
import { withJsonFormsControlProps } from '@jsonforms/react';
import PropTypes from 'prop-types';
import ErrorOutlineIcon from '@mui/icons-material/ErrorOutline';

const SizeOfCompany = ({ data, handleChange, path }) => {
    return (
        <FormControl fullWidth>
            <InputLabel id="employee-size-label">Size of company</InputLabel>
            <Box display="flex" justifyContent="space-between" gap=".5rem" marginBottom="2rem">
                <Box flexGrow={1}>
                    <Select
                        labelId="employee-size-label"
                        id="employee-size-select"
                        value={data}
                        label="Employee Size"
                        onChange={event => handleChange(path, event.target.value)}
                        fullWidth
                        endAdornment={
                            <InputAdornment position="end">
                                <Tooltip title="Vendor size" placement="bottom" arrow>
                                    <IconButton>
                                        <ErrorOutlineIcon />
                                    </IconButton>
                                </Tooltip>
                            </InputAdornment>
                        }
                    >
                        <MenuItem value="A">Self-employed</MenuItem>
                        <MenuItem value="B">1-10 employees</MenuItem>
                        <MenuItem value="C">11-50 employees</MenuItem>
                        <MenuItem value="D">51-200 employees</MenuItem>
                        <MenuItem value="E">201-500 employees</MenuItem>
                        <MenuItem value="F">501-1000 employees</MenuItem>
                        <MenuItem value="G">1001-5000 employees</MenuItem>
                        <MenuItem value="H">5001-10000 employees</MenuItem>
                        <MenuItem value="I">10001+ employees</MenuItem>
                    </Select>
                </Box>
            </Box>
        </FormControl>
    );
};

SizeOfCompany.propTypes = {
    data: PropTypes.object.isRequired,
    handleChange: PropTypes.func.isRequired,
    path: PropTypes.string.isRequired
};

export default withJsonFormsControlProps(SizeOfCompany);