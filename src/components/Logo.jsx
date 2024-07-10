import { useState } from 'react';
import {Box, TextField} from '@mui/material';
import { withJsonFormsControlProps } from '@jsonforms/react';
import PropTypes from 'prop-types';


const Logo = ({ data, handleChange, path }) => {
    const [logo, setLogo] = useState(data || '');
    const [fileName, setFileName] = useState('');

    const handleFileChange = (event) => {
        const file = event.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = (e) => {
                const logoData = e.target.result;
                setLogo(logoData);
                handleChange(path, logoData);
            };
            reader.readAsDataURL(file);
            setFileName(file.name);
        }
    };

    return (
        <Box display="flex" flexDirection="column" gap="1rem" marginBottom="2rem">
            <Box style={{display:"flex" ,justifyContent:"space-between"}} >
                <Box flexGrow={1}>
                    <TextField
                        type="file"
                        accept="image/*"
                        onChange={handleFileChange}
                        helperText={fileName}
                        label="Logo"
                        InputLabelProps={{ shrink: true }}
                        fullWidth
                    />
                </Box>
            </Box>
        </Box>
    );
};

Logo.propTypes = {
    data: PropTypes.string,
    handleChange: PropTypes.func.isRequired,
    path: PropTypes.string.isRequired,
};

export default withJsonFormsControlProps(Logo);