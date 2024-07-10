import { withJsonFormsControlProps } from '@jsonforms/react';
import CustomInputField from './CustomInputField';
import PropTypes from 'prop-types';

const Email  = ({path,data,handleChange}) => {
    return (
        <CustomInputField path={path} data={data} handleChange={handleChange} tooltipTitle="will be provide to the users of the platform"  label="Email"/>
    );
};
Email.propTypes = {
    path: PropTypes.string.isRequired,
    data: PropTypes.object.isRequired,
    handleChange: PropTypes.func.isRequired,
};

// eslint-disable-next-line react-refresh/only-export-components
export default withJsonFormsControlProps(Email);