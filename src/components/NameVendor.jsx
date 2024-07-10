
import { withJsonFormsControlProps } from '@jsonforms/react';
import CustomInputField from './CustomInputField';
import PropTypes from 'prop-types';


const NameVendor = ({data, handleChange, path}) => {
    return (
        <CustomInputField path={path} data={data} handleChange={handleChange} tooltipTitle="full name including the type of company, for example CyberX France SAS"  label="Name"/>
    );
};
NameVendor.propTypes = {
    data: PropTypes.object.isRequired,
    handleChange: PropTypes.func.isRequired,
    path: PropTypes.string.isRequired,
};

export default withJsonFormsControlProps(NameVendor);