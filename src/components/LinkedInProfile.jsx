import { withJsonFormsControlProps } from '@jsonforms/react';
import CustomInputField from './CustomInputField';
import PropTypes from 'prop-types';

const LinkedinProfile  = ({path,data,handleChange}) => {
    return (
        <CustomInputField path={path} data={data} handleChange={handleChange} tooltipTitle="url of linkeIn profile, for example https://www.linkedin.com/in/cy-cyberun-8b5b00170/"  label="Linkedin profile"/>
    );
};
LinkedinProfile.propTypes = {
    path: PropTypes.string.isRequired,
    data: PropTypes.object.isRequired,
    handleChange: PropTypes.func.isRequired,
};

// eslint-disable-next-line react-refresh/only-export-components
export default withJsonFormsControlProps(LinkedinProfile);