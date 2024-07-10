import { withJsonFormsControlProps } from '@jsonforms/react';
import CustomInputField from './CustomInputField';
import PropTypes from 'prop-types';

const HeadquarterAddress  = ({path,data,handleChange}) => {
    return (
        <CustomInputField path={path} data={data} handleChange={handleChange} tooltipTitle="full post address"  label="Headquarter Address"/>
    );
};
HeadquarterAddress.propTypes = {
    path: PropTypes.string.isRequired,
    data: PropTypes.object.isRequired,
    handleChange: PropTypes.func.isRequired,
};

export default withJsonFormsControlProps(HeadquarterAddress);