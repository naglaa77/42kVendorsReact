import { useState } from 'react';
import { withJsonFormsControlProps } from '@jsonforms/react';
import { Autocomplete, TextField, Box, Button, Typography, IconButton } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import PropTypes from 'prop-types';

const countries = [
    { label: "United States", code: "US" },
    { label: "Germany", code: "DE" },
    { label: "France", code: "FR" },
    { label: "China", code: "CN" },
    { label: "Russia", code: "RU" },
    { label: "United Kingdom", code: "GB" },
    { label: "Brazil", code: "BR" },
    { label: "Italy", code: "IT" },
    { label: "India", code: "IN" },
    { label: "Canada", code: "CA" },
    { label: "Australia", code: "AU" },
    { label: "Spain", code: "ES" },
    { label: "Mexico", code: "MX" },
    { label: "Indonesia", code: "ID" },
    { label: "Netherlands", code: "NL" },
    { label: "Saudi Arabia", code: "SA" },
    { label: "Turkey", code: "TR" },
    { label: "Switzerland", code: "CH" },
    { label: "Sweden", code: "SE" },
    { label: "Poland", code: "PL" },
    { label: "Belgium", code: "BE" },
    { label: "Norway", code: "NO" },
    { label: "Austria", code: "AT" },
    { label: "Ukraine", code: "UA" },
    { label: "Romania", code: "RO" },
    { label: "Czech Republic", code: "CZ" },
    { label: "Greece", code: "GR" },
    { label: "Portugal", code: "PT" },
];

const I01 = ({ data, handleChange, path }) => {
    const [entries, setEntries] = useState(data || []);

    const handleAddEntry = () => {
        setEntries([...entries, { country: '', capital: '' }]);
    };

    const handleRemoveEntry = (index) => {
        const updatedEntries = [...entries];
        updatedEntries.splice(index, 1);
        setEntries(updatedEntries);
        handleChange(path, updatedEntries);
    };

    const updateEntry = (index, field, value) => {
        const updatedEntries = entries.map((entry, idx) => {
            if (idx === index) {
                return { ...entry, [field]: value };
            }
            return entry;
        });
        setEntries(updatedEntries);
        handleChange(path, updatedEntries);
    };

    return (
        <Box>
            <Typography variant="h6" sx={{ mb: 2 }}>
                Describe the capital repartition by country of the VENDOR and of any entity HOLDING &quot;effective control&quot; of the VENDOR:
            </Typography>
            {entries.map((entry, index) => (
                <Box key={index} display="flex" alignItems="center" marginBottom={2}>
                    <Autocomplete
                        options={countries}
                        getOptionLabel={(option) => option.label}
                        style={{ width: '40%', marginRight: '10px' }}
                        value={countries.find(c => c.label === entry.country) || null}
                        onChange={(e, newValue) => updateEntry(index, 'country', newValue ? newValue.label : '')}
                        renderInput={(params) => <TextField {...params} label="Country" />}
                    />
                    <TextField
                        label="Capital %"
                        type="number"
                        value={entry.capital}
                        onChange={(e) => updateEntry(index, 'capital', e.target.value)}
                        style={{ width: '20%', marginRight: '10px' }}
                    />
                    <IconButton onClick={() => handleRemoveEntry(index)} color="error">
                        <DeleteIcon />
                    </IconButton>
                </Box>
            ))}
            <Button variant="contained" onClick={handleAddEntry} color="primary">
                Add Entry
            </Button>
        </Box>
    );
};

I01.propTypes = {
    data: PropTypes.arrayOf(
        PropTypes.shape({
            country: PropTypes.string,
            capital: PropTypes.string
        })
    ),
    handleChange: PropTypes.func.isRequired,
    path: PropTypes.string.isRequired
};

export default withJsonFormsControlProps(I01);