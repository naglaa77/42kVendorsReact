import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { withJsonFormsControlProps } from '@jsonforms/react';
import { TextField, Typography, Box, Tooltip } from '@mui/material';
import InfoIcon from "@mui/icons-material/Info.js";

const H02 = ({ data, handleChange, path }) => {
    // Initialize selectedValue with data.aV or default to "no"
    const [selectedValue, setSelectedValue] = useState(data.aV || "");

    // Update the form data when selectedValue changes
    useEffect(() => {
        handleChange(path, {
            qV: ": if needed, describe the different relationships between VENDOR and entities HOLDING effective control over it",
            qU: "relationships between vendor and entities",
            typ: "longtext",
            cV: "Non exhaustive examples of answers:\n" +
                " - \"Entity X is the major shareholder of the VENDOR\"\n" +
                " - \"VENDOR is a joint venture between entities X and Y\"",
            aV: selectedValue,
            v: "1.0",
            pt: ""
        });
    }, [selectedValue, handleChange, path]);

    // Handle changes to the TextField and update state
    const handleOnChange = (event) => {
        setSelectedValue(event.target.value);
    };

    return (
        <Box sx={{ mt: 2, width: "100%", mb: 2 }}>
            <Typography variant="subtitle1" gutterBottom>
                : If needed, describe the different relationships between VENDOR and entities HOLDING effective control over it
            </Typography>
            <TextField
                value={selectedValue}
                onChange={handleOnChange}
                multiline
                rows={4}
                variant="outlined"
                fullWidth
                InputProps={{
                    endAdornment: (
                        <>
                            <Tooltip title={data.cV} arrow placement="top" PopperProps={{ sx: { backgroundColor: 'white' } }}>
                                <InfoIcon color="info"/>
                            </Tooltip>
                        </>
                    )
                }}
            />
        </Box>
    );
};

H02.propTypes = {
    data: PropTypes.shape({
        aV: PropTypes.string,
        cV: PropTypes.string
    }),
    handleChange: PropTypes.func.isRequired,
    path: PropTypes.string.isRequired
};

export default withJsonFormsControlProps(H02);