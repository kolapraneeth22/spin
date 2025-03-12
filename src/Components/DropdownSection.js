import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import MenuItem from '@mui/material/MenuItem';

const dropdownOptions = {
  priceRange: [
    { value: 'low', label: 'Low' },
    { value: 'medium', label: 'Medium' },
    { value: 'high', label: 'High' },
  ],
  makeAndModel: [
    { value: 'model1', label: 'Model 1' },
    { value: 'model2', label: 'Model 2' },
    { value: 'model3', label: 'Model 3' },
  ],
  year: [
    { value: '2020', label: '2020' },
    { value: '2021', label: '2021' },
    { value: '2022', label: '2022' },
  ],
  fuel: [
    { value: 'petrol', label: 'Petrol' },
    { value: 'diesel', label: 'Diesel' },
    { value: 'electric', label: 'Electric' },
  ],
  kmDriven: [
    { value: '10000', label: '10,000 km' },
    { value: '20000', label: '20,000 km' },
    { value: '30000', label: '30,000 km' },
  ],
  bodyType: [
    { value: 'sedan', label: 'Sedan' },
    { value: 'suv', label: 'SUV' },
    { value: 'hatchback', label: 'Hatchback' },
  ],
  transmission: [
    { value: 'manual', label: 'Manual' },
    { value: 'automatic', label: 'Automatic' },
  ],
};

const DropdownSection = () => {
  return (
    <Box className="dropdown-section" sx={{ display: 'flex', justifyContent: 'space-around', padding: '7px', backgroundColor: '#4B0082' }}>
      {Object.keys(dropdownOptions).map((key) => (
        <TextField
          key={key}
          select
          label={key.replace(/([A-Z])/g, ' $1').trim()}
          defaultValue=""
          className='dropdown-box'
          sx={{
            '& .MuiInputBase-input': {
              color: 'white',
            },
            '& .MuiInputLabel-root': {
              color: 'white',
            },
            // '& .MuiOutlinedInput-root': {
            //   '& fieldset': {
            //     borderColor: 'white',
            //   },
            //   '&:hover fieldset': {
            //     borderColor: 'white',
            //   },
            //   '&.Mui-focused fieldset': {
            //     borderColor: 'white',
            //   },
            // },
            // '& .MuiFormHelperText-root': {
            //   color: 'white',
            // },
            width: `${key.replace(/([A-Z])/g, ' $1').trim().length * 10}px`, 
            margin : '0 8px',
            
          }}
        >
          {dropdownOptions[key].map((option) => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
        </TextField>
      ))}
    </Box>
  );
};

export default DropdownSection;
