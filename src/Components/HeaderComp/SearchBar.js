// import * as React from 'react';
// import Paper from '@mui/material/Paper';
// import InputBase from '@mui/material/InputBase';
// import Divider from '@mui/material/Divider';
// import IconButton from '@mui/material/IconButton';
// import MenuIcon from '@mui/icons-material/Menu';
// import SearchIcon from '@mui/icons-material/Search';
// import DirectionsIcon from '@mui/icons-material/Directions';

// export default function SearchBar() {
//   return (
//     <Paper
//       component="form"
//       sx={{ p: '2px 4px', display: 'flex', alignItems: 'center', width: 400 }}
//     >
//       <IconButton sx={{ p: '10px' }} aria-label="menu">
//         <MenuIcon />
//       </IconButton>
//       <InputBase
//         sx={{ ml: 1, flex: 1 }}
//         placeholder="Search"
//         inputProps={{ 'aria-label': 'search google maps' }}
//       />
//       <IconButton type="button" sx={{ p: '10px' }} aria-label="search">
//         <SearchIcon />
//       </IconButton>
//       <Divider sx={{ height: 28, m: 0.5 }} orientation="vertical" />
//       <IconButton color="primary" sx={{ p: '10px' }} aria-label="directions">
//         <DirectionsIcon />
//       </IconButton>
//     </Paper>
//   );
// }


import * as React from 'react';
import Paper from '@mui/material/Paper';
import InputBase from '@mui/material/InputBase';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';

const searchDescriptions = ['model','price','fuel type','make','body type','km driven','year','owner count'];

function genRandomInt(max){
  return Math.floor(Math.random() * (max + 1));
}
export default function SearchBar() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [descr, setDescr] = React.useState(searchDescriptions[genRandomInt(searchDescriptions.length - 1)]);

  React.useEffect(() => {
    const interval = setInterval(() => {
      setDescr(searchDescriptions[genRandomInt(searchDescriptions.length - 1)]);
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
      <Paper
        component="form"
        sx={{ p: '2px 4px', display: 'flex', alignItems: 'center', width: 300 }}
        onClick={handleClick}
      >
        <IconButton sx={{ p: '10px' }} aria-label="menu">
          <MenuIcon />
        </IconButton>
        <InputBase
          sx={{ ml: 1, flex: 1 }}
          placeholder={`Search by ${descr}`}
          inputProps={{ 'aria-label': 'search google maps' }}
        />
        <IconButton type="button" sx={{ p: '10px' }} aria-label="search">
          <SearchIcon />
        </IconButton>
        {/* <Divider sx={{ height: 28, m: 0.5 }} orientation="vertical" /> */}
        {/* <IconButton color="primary" sx={{ p: '10px' }} aria-label="directions">
          <DirectionsIcon />
        </IconButton> */}
      </Paper>
      <Menu
        anchorEl={anchorEl}
        open={Boolean(anchorEl)}
        onClose={handleClose}
        sx={{ mt: '1px',
        
         }}
      >
        <MenuItem onClick={handleClose}>Option 1</MenuItem>
        <MenuItem onClick={handleClose}>Option 2</MenuItem>
        <MenuItem onClick={handleClose}>Option 3</MenuItem>
      </Menu>
    </div>
  );
}
