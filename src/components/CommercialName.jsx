import React from 'react';
import { withJsonFormsControlProps } from '@jsonforms/react';
import CustomInputField from './CustomInputField';
import PropTypes from 'prop-types';

const CommercialName = ({path,data,handleChange}) => {
    return (
        <CustomInputField path={path} data={data} handleChange={handleChange} tooltipTitle="generaly the brand name, for example CYBERX France"  label="Commercial Name"/>
    );
};
CommercialName.propTypes = {
    path: PropTypes.string.isRequired,
    data: PropTypes.object.isRequired,
    handleChange: PropTypes.func.isRequired,
};

export default withJsonFormsControlProps(CommercialName);