import React, { useState, useEffect } from 'react';
import { TextField, Autocomplete, Box, Typography, Tooltip } from '@mui/material';
import InfoIcon from '@mui/icons-material/Info';
import { withJsonFormsControlProps } from '@jsonforms/react';
import PropTypes from 'prop-types';

const binaryOptions = [
    { label: "Yes", value: "yes" },
    { label: "No", value: "no" }
];

const C07 = ({ data, handleChange, path }) => {
    const [selectedValue, setSelectedValue] = useState(data.aV || "");

    useEffect(() => {
        handleChange(path, {
            qV: "Is the VENDOR, under direct or indirect, individual or joint \"effective control\" (as defined in comment) of entities ?",
            qU: "The vendor is under effictive control of entities ",
            typ: "ynu",
            cV: "effective control definition:\n" +
                "« a relationship constituted by rights, contracts or any other means which, either separately or jointly and having regard to the considerations of fact or law involved, confer the possibility of directly or indirectly exercising a decisive influence on an undertaking, in particular by:\n" +
                "(a) the right to use all or part of the assets of an undertaking;\n" +
                "(b) rights or contracts which confer a decisive influence on the composition, voting or decisions of the bodies of an undertaking\n" +
                "or otherwise confer a decisive influence on the running of the business of the undertaking;\n" +
                "[SOURCE: Regulation (EC) No 139/2004 on the control of concentrations between undertakings, Article 3(2)] »",
            aV: selectedValue,
            v: "1.0",
            pt: ""
        });
    }, [selectedValue, handleChange, path]);

    const handleOnChange = (event, value) => {
        setSelectedValue(value);
    };

    return (
        <Box display="flex" alignItems="center" sx={{ mt: 2, width: "100%", mb: 2 }}>
            <Box sx={{ flex: 1, paddingRight: 1 }}>
                <Typography variant="h6" sx={{ mb: 1, alignSelf: 'flex-start', fontSize: "1rem", fontWeight: "bold" }}>
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
                    renderInput={(params) => (
                        <TextField
                            {...params}
                            required
                            fullWidth
                            InputProps={{
                                ...params.InputProps,
                                endAdornment: (
                                    <>
                                        {params.InputProps.endAdornment}
                                        <Tooltip title={data.cV} arrow placement="top" PopperProps={{ sx: { backgroundColor: 'white' } }}>
                                            <InfoIcon sx={{ ml: 1 }} />
                                        </Tooltip>
                                    </>
                                )
                            }}
                        />
                    )}
                    disableCloseOnSelect
                    fullWidth
                />
            </Box>
        </Box>
    );
};

C07.propTypes = {
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

export default withJsonFormsControlProps(C07);