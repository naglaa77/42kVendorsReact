import React from 'react';
import PropTypes from "prop-types";
import { withJsonFormsControlProps } from "@jsonforms/react";
import MuiPhoneNumber from 'mui-phone-number';
import CustomInputField from './CustomInputField';

const PhoneNumber = ({ path, data, handleChange }) => {
    return (
        <CustomInputField
            data={data || ''}
            handleChange={handleChange}
            path={path}
            label="Phone Number"
            tooltipTitle="will be provide to the users of the platform"
        />
    );
}

PhoneNumber.propTypes = {
    path: PropTypes.string.isRequired,
    data: PropTypes.string.isRequired,
    handleChange: PropTypes.func.isRequired,
};

export default withJsonFormsControlProps(PhoneNumber);

// import { styled } from '@mui/material/styles';
// import PropTypes from "prop-types";
// import { withJsonFormsControlProps } from "@jsonforms/react";
// import MuiPhoneNumber from 'mui-phone-number';
// import { TextField } from "@mui/material";
//
// const StyledTextField = styled(TextField)({
//     '& .MuiInputBase-root': {
//         borderRadius: 4,
//         borderColor: 'rgba(0, 0, 0, 0.23)',
//     }
// });
//
// const PhoneNumber = ({ path, data, handleChange }) => {
//     return (
//         <MuiPhoneNumber
//             defaultCountry={'fr'}
//             value={data || ''}
//             onChange={(value) => handleChange(path, value)}
//             fullWidth
//             renderInput={(params) => (
//                 <StyledTextField
//                     {...params}
//                     variant="outlined"
//                     fullWidth
//                     required
//                 />
//             )}
//         />
//     );
// }
//
// PhoneNumber.propTypes = {
//     path: PropTypes.string.isRequired,
//     data: PropTypes.string.isRequired,
//     handleChange: PropTypes.func.isRequired,
// };
//
// export default withJsonFormsControlProps(PhoneNumber);
