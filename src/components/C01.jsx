import { useState, useEffect } from "react";
import { TextField, Autocomplete, Checkbox, Box, Typography } from "@mui/material";
import { withJsonFormsControlProps } from "@jsonforms/react";
import PropTypes from "prop-types";

const continents = [
    { continent: "Europe", countries: ["Belgium", "France", "Germany", "Italy", "Spain"] },
    { continent: "Afrique", countries: ["Egypt", "Syria", "Algeria", "Morocco", "Tunisia"] },
    { continent: "Asia", countries: ["China", "Japan", "India", "South Korea", "Indonesia"] }
];

const C01 = ({ data, handleChange, path }) => {
    const [selectedValue, setSelectedValue] = useState(data.aV || "");

    useEffect(() => {
        handleChange(path, {
            qV: "In which country is the VENDOR's registered head office is established?",
            qU: "Head office registered in:",
            typ: "uniqCountryCtrl",
            cV: "",
            aV:selectedValue,
            v: "1.0",
            pt: "5"
        });
    }, [selectedValue, handleChange, path]);

    const handleOnChange = (event, value) => {
        setSelectedValue(value);
    };

    const renderOption = (props, option) => (
        <li {...props}>
            <Checkbox style={{ marginRight: 8 }} checked={selectedValue === option} />
            {option}
        </li>
    );

    const options = continents.flatMap(group => group.countries);

    return (
        <Box display="flex" alignItems="center" sx={{ mt: 2, width: "100%", mb: 2 }}>
            <Box sx={{ width: "50%", paddingRight: 1 }}>
                <Typography variant="h6" sx={{ mb: 1, alignSelf: 'flex-start', fontSize: "1rem"}}>
                    In which country is the VENDOR's registered head office established?
                </Typography>
            </Box>
            <Box sx={{ width: "50%", paddingLeft: 1 }}>
                <Autocomplete
                    options={options}
                    getOptionLabel={(option) => option}
                    renderOption={renderOption}
                    value={selectedValue}
                    onChange={handleOnChange}
                    renderInput={(params) => <TextField {...params} />}
                    disableCloseOnSelect
                    fullWidth
                />
            </Box>
        </Box>
    );
};

C01.propTypes = {
    data: PropTypes.shape({
        qV: PropTypes.string,
        qU: PropTypes.string,
        typ: PropTypes.string,
        cV: PropTypes.string,
        v: PropTypes.string,
        pt: PropTypes.string
    }),
    handleChange: PropTypes.func.isRequired,
    path: PropTypes.string.isRequired
};

export default withJsonFormsControlProps(C01);
