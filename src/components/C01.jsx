import  { useState } from "react";
import { TextField, Autocomplete, Checkbox } from "@mui/material";
import { withJsonFormsControlProps } from "@jsonforms/react";
import PropTypes from "prop-types";

const continents = [
    { continent: "Europe", countries: ["Belgium", "France", "Germany", "Italy", "Spain"] },
    { continent: "Afrique", countries: ["Egypt", "Syria", "Algeria", "Morocco", "Tunisia"] },
    { continent: "Asia", countries: ["China", "Japan", "India", "South Korea", "Indonesia"] }
];

const C01 = ({ data, handleChange, path }) => {
    const [selectedValues, setSelectedValues] = useState(data || []);
    const handleOnChange = (event, value, reason) => {
        if (reason === 'selectOption') {
            const lastSelectedValue = value[value.length - 1];
            const continent = continents.find(c => c.continent === lastSelectedValue);
            if (continent) {
                // If a continent is selected, select all its countries
                const newSelectedValues = Array.from(new Set([...selectedValues, ...continent.countries]));
                setSelectedValues(newSelectedValues);
                handleChange(path, newSelectedValues);
            } else {
                setSelectedValues(value);
                handleChange(path, value);
            }
        } else {
            setSelectedValues(value);
            handleChange(path, value);
        }
    };

    const renderOption = (props, option) => {
        const isContinent = continents.some(continent => continent.continent === option);
        if (isContinent) {
            return (
                <li {...props} style={{ fontWeight: 'bold' }}>
                    {option}
                </li>
            );
        } else {
            return (
                <li {...props} style={{ paddingLeft: '20px' }}>
                    <Checkbox style={{ marginRight: 8 }} checked={selectedValues.includes(option)} />
                    {option}
                </li>
            );
        }
    };
    const options = continents.flatMap(group => [group.continent, ...group.countries]);

    return (
        <div>
            <Autocomplete
                sx={{ mt: 2, width: "100%" }}
                options={options}
                getOptionLabel={(option) => option}
                renderOption={renderOption}
                value={selectedValues}
                onChange={handleOnChange}
                renderInput={(params) => <TextField {...params} label="Select Continent and Countries" />}
                disableCloseOnSelect
            />
        </div>
    );
};
C01.propTypes = {
    data: PropTypes.array,
    handleChange: PropTypes.func.isRequired,
    path: PropTypes.string.isRequired
};

export default withJsonFormsControlProps(C01);