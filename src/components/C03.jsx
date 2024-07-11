import { useEffect, useState } from "react";
import { TextField, Autocomplete, Checkbox, Box, Typography } from "@mui/material";
import { withJsonFormsControlProps } from "@jsonforms/react";
import PropTypes from "prop-types";

const continents = [
    { continent: "Europe", countries: ["Belgium", "France", "Germany", "Italy", "Spain"] },
    { continent: "Afrique", countries: ["Egypt", "Syria", "Algeria", "Morocco", "Tunisia"] },
    { continent: "Asia", countries: ["China", "Japan", "India", "South Korea", "Indonesia"] }
];

const C03 = ({ data = {}, handleChange, path }) => {
    const [selectedValues, setSelectedValues] = useState(data.aV || []);

    useEffect(() => {
        if (data.aV !== selectedValues) {
            handleChange(path, {
                ...data,
                aV: selectedValues
            });
        }
    }, [selectedValues, handleChange, path, data]);

    const handleOnChange = (event, value) => {
        setSelectedValues(value);
    };

    const renderOption = (props, option) => (
        <li {...props}>
            <Checkbox style={{ marginRight: 8 }} checked={selectedValues.includes(option)} />
            {option}
        </li>
    );

    const options = continents.flatMap(group => group.countries);

    return (
        <Box display="flex" alignItems="center" sx={{ mt: 2, width: "100%", mb: 2 }}>
            <Box sx={{ flex: 1, paddingRight: 1 }}>
                <Typography variant="h6" sx={{ mb: 1, alignSelf: 'flex-start', fontSize: "1rem"}}>
                    {data.qV || "Loading question..."}
                </Typography>
            </Box>
            <Box sx={{ flex: 1, paddingLeft: 1 }}>
                <Autocomplete
                    options={options}
                    getOptionLabel={(option) => option}
                    multiple
                    renderOption={renderOption}
                    value={selectedValues}
                    onChange={handleOnChange}
                    renderInput={(params) => <TextField {...params} />}
                    disableCloseOnSelect
                    fullWidth
                />
            </Box>
        </Box>
    );
};

C03.propTypes = {
    data: PropTypes.shape({
        qV: PropTypes.string,
        qU: PropTypes.string,
        typ: PropTypes.string,
        cV: PropTypes.arrayOf(PropTypes.string),
        av: PropTypes.arrayOf(PropTypes.string),
        v: PropTypes.string,
        pt: PropTypes.string
    }),
    handleChange: PropTypes.func.isRequired,
    path: PropTypes.string.isRequired
};

export default withJsonFormsControlProps(C03);