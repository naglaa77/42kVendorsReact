import PropTypes from "prop-types";
import { withJsonFormsControlProps } from "@jsonforms/react";
import {FormControl, FormLabel, RadioGroup, FormControlLabel, Radio, FormGroup} from "@mui/material";

const EffectiveControl = ({ path, data, handleChange }) => {
    const handleRadioChange = (event) => {
        handleChange(path, event.target.value);
        // // Ensure that changing this resets or clears the group name when 'no' is selected
        // if (event.target.value === 'no') {
        //     handleChange(`${path}.group.name`, '');
        // }
    };

    return (
        <FormControl component="fieldset">
            <FormLabel component="legend">
                The VENDOR is under effective control of another entity (a GROUP)?
            </FormLabel>
            <RadioGroup
                aria-label="effective-control"
                name="effective-control"
                value={data || ''}
                onChange={handleRadioChange}
            >
                <FormGroup row>
                    <FormControlLabel value="yes" control={<Radio />} label="Yes" />
                    <FormControlLabel value="no" control={<Radio />} label="No" />
                </FormGroup>
            </RadioGroup>
        </FormControl>
    );
};

EffectiveControl.propTypes = {
    path: PropTypes.string.isRequired,
    data: PropTypes.string.isRequired,
    handleChange: PropTypes.func.isRequired,
};

export default withJsonFormsControlProps(EffectiveControl);
