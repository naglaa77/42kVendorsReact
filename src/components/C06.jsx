import { useEffect, useState } from 'react';
import { TextField, Box, Typography } from '@mui/material';
import { withJsonFormsControlProps } from '@jsonforms/react';
import PropTypes from 'prop-types';

const C06 = ({ data, handleChange, path }) => {
    const [fieldValue, setFieldValue] = useState(data.aV || '');

    useEffect(() => {
        handleChange(path, {
            qV: ": please provide the stock code(s) & stock market(s)",
            qU: "State(s)",
            typ: "shorttext",
            cV: "",
            aV: fieldValue,
            v: "1.0",
            pt: "0"
        });
    }, [fieldValue, handleChange, path]);

    const handleInputChange = (event) => {
        setFieldValue(event.target.value);
    };

    return (
        <Box display="flex" alignItems="center" sx={{ mt: 2, width: "100%", mb: 2 }}>
            <Box sx={{ width: "50%", paddingRight: 1 }}>
                <Typography variant="h6" sx={{ mb: 1, alignSelf: 'flex-start', fontSize: "1rem", fontWeight: "bold" }}>
                    {data.qV}
                </Typography>
            </Box>
            <Box sx={{ width: "50%", paddingLeft: 1 }}>
                <TextField
                    value={fieldValue}
                    onChange={handleInputChange}
                    fullWidth
                />
            </Box>
        </Box>
    );
};

C06.propTypes = {
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

export default withJsonFormsControlProps(C06);