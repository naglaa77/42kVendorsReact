import { withJsonFormsControlProps } from '@jsonforms/react';
import CustomInputField from './CustomInputField';
import PropTypes from 'prop-types';

const Website  = ({path,data,handleChange}) => {
    return (
        <CustomInputField path={path} data={data} handleChange={handleChange} tooltipTitle="url (with https://)"  label="Website"/>
    );
};
Website.propTypes = {
    path: PropTypes.string.isRequired,
    data: PropTypes.object.isRequired,
    handleChange: PropTypes.func.isRequired,
};

export default withJsonFormsControlProps(Website);