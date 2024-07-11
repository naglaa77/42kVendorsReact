import React, { useState, useEffect } from 'react';
import { TextField, Autocomplete, Box, Typography } from '@mui/material';
import { withJsonFormsControlProps } from '@jsonforms/react';
import PropTypes from 'prop-types';

const binaryOptions = [
    { label: "Yes", value: "yes" },
    { label: "No", value: "no" }
];

const H01 = ({ data, handleChange, path }) => {
    const [selectedValue, setSelectedValue] = useState(data.aV || "no");

    useEffect(() => {
        handleChange(path, {
            qV: ": Do these entities have their registered head office or strategic decision centers not established in a Member State of the EU?",
            qU: "These entities have their head office or strategic decision centers outside EU",
            typ: "ynu",
            cV: "",
            aV: selectedValue,
            v: "1.0",
            pt: "5"
        });
    }, [selectedValue, handleChange, path]);

    const handleOnChange = (event, value) => {
        setSelectedValue(value);
    };

    return (
        <Box display="flex" alignItems="center" sx={{ mt: 2, width: "100%", mb: 2 }}>
            <Box sx={{ flex: 1, paddingRight: 1 }}>
                <Typography variant="h6" sx={{ mb: 1, alignSelf: 'flex-start', fontSize: "1rem"}}>
                    {data.qV}
                </Typography>
            </Box>
            <Box sx={{ flex: 1, paddingLeft: 1 }}>
                <Autocomplete
                    options={binaryOptions}
                    getOptionLabel={(option) => option.label}
                    isOptionEqualToValue={(option, value) => option.value === value}
                    value={binaryOptions.find(option => option.value === selectedValue) || null}
                    onChange={(event, newValue) => handleOnChange(event, newValue.value)}
                    renderInput={(params) => <TextField {...params} required/>}
                    disableCloseOnSelect
                    fullWidth
                />
            </Box>
        </Box>
    );
};

H01.propTypes = {
    data: PropTypes.shape({
        qV: PropTypes.string,
        qU: PropTypes.string,
        typ: PropTypes.string,
        cV: PropTypes.string,
        aV: PropTypes.string,
        v: PropTypes.string,
        pt: PropTypes.string
    }),
    handleChange: PropTypes.func.isRequired,
    path: PropTypes.string.isRequired
};

export default withJsonFormsControlProps(H01);
