
// import React, { useState } from 'react';
// import Box from '@mui/material/Box';
// import Typography from '@mui/material/Typography';
// import Select from '@mui/material/Select';
// import MenuItem from '@mui/material/MenuItem';
// import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';

// const filterOptions = [
//   { id: 1, label: "Prize Range" },
//   { id: 2, label: "Make And Model" },
//   { id: 3, label: "Year" },
//   { id: 4, label: "Fuel" },
//   { id: 5, label: "KM Driven" },
//   { id: 6, label: "Body Type" },
//   { id: 7, label: "Transmission" },
// ];

// const priceRanges = [
//   "Under 3 Lakhs",
//   "3 - 4 Lakhs",
//   "4 - 5 Lakhs",
//   "5 - 6 Lakhs",
// ];

// const makeAndModelOptions = [
//   "Maruti Suzuki",
//   "Renault",
//   "Tata",
//   "Mahindra",
//   "Skoda",
// ];

// const yearOptions = [
//   "2022 and above",
//   "2020 and above",
//   "2018 and above",
//   "2016 and above",
//   "2014 and above",
//   "2012 and above",
//   "2010 and above",
//   "2008 and above",
// ];

// const fuelOptions = ["Petrol", "Diesel", "CNG", "Electric"];

// const kmDrivenOptions = [
//   "10,000kms or less",
//   "30,000kms or less",
//   "50,000kms or less",
//   "75,000kms or less",
//   "1,00,000kms or less",
//   "1,25,000kms or less",
//   "1,50,000kms or less",
// ];

// const bodyTypeOptions = ["Hatchback", "Sedan", "SUV", "MUV"];

// const transmissionOptions = ["Manual", "Automatic"];

// const DropdownSection = () => {
//   const [selectedPrice, setSelectedPrice] = useState('');
//   const [selectedMakeModel, setSelectedMakeModel] = useState('');
//   const [selectedYear, setSelectedYear] = useState('');
//   const [selectedFuel, setSelectedFuel] = useState('');
//   const [selectedKmDriven, setSelectedKmDriven] = useState('');
//   const [selectedBodyType, setSelectedBodyType] = useState('');
//   const [selectedTransmission, setSelectedTransmission] = useState('');

//   return (
//     <Box
//       sx={{
//         position: "absolute",
//         width: "100%",
//         height: "66px",
//         top: "100px",
//         left: 0,
//         bgcolor: "#9c27b0",
//         overflow: "hidden",
//       }}
//     >
//       {/* <Typography
//         sx={{
//           position: "absolute",
//           height: "20px",
//           top: "12px",
//           left: "40px",
//           fontFamily: "'Montserrat', Helvetica",
//           fontWeight: 500,
//           fontStyle: "italic",
//           color: "secondary.main",
//           fontSize: "16px",
//           textAlign: "center",
//         }}
//       >
//         Explore By
//       </Typography> */}

//       {filterOptions.map((option, index) => {
//         let leftPosition;
//         switch (index) {
//           case 0: leftPosition = "4px"; break;
//           case 1: leftPosition = "188px"; break;
//           case 2: leftPosition = "373px"; break;
//           case 3: leftPosition = "559px"; break;
//           case 4: leftPosition = "745px"; break;
//           case 5: leftPosition = "930px"; break;
//           default: leftPosition = "1111px";
//         }

//         return (
//           <Box
//             key={option.id}
//             sx={{
//               position: "absolute",
//               width: "176px",
//               height: "182px",
//               top: 0,
//               left: leftPosition,
//             }}
//           >
//             <Box sx={{ width: "167px", height: "182px" }}>
//               <Box
//                 sx={{
//                   position: "relative",
//                   width: "176px",
//                   height: "49px",
//                 }}
//               >
//                 <Box sx={{ width: "100%" }}>
//                   {option.label === "Prize Range" ? (
//                     <Select
//                       value={selectedPrice}
//                       onChange={(e) => setSelectedPrice(e.target.value)}
//                       displayEmpty
//                       renderValue={(selected) => selected ? selected : "Price Range"}
//                       sx={{
//                         position: "absolute",
//                         width: "100%",
//                         height: "49px",
//                         top: 0,
//                         left: 0,
//                         bgcolor: "#9c27b0",
//                         color: "text.primary",
//                         "& .MuiSelect-select": {
//                           paddingTop: "18px",
//                           textAlign: "center",
//                           fontWeight: "bold",
//                           color: "white",
//                         },
//                         "&:hover": { bgcolor: "#63268B" },
//                         "&.Mui-focused": { bgcolor: "#561381" },
//                       }}
//                       MenuProps={{
//                         PaperProps: {
//                           sx: { bgcolor: "#561381", color: "white" },
//                         },
//                       }}
//                       IconComponent={KeyboardArrowDownIcon}
//                     >
//                       {priceRanges.map((range, index) => (
//                         <MenuItem
//                           key={index}
//                           value={range}
//                           sx={{
//                             backgroundColor: "#9c27b0",
//                             "&:hover": { backgroundColor: "#63268B", color: "white" },
//                           }}
//                         >
//                           {range}
//                         </MenuItem>
//                       ))}
//                     </Select>
//                   ) : option.label === "Make And Model" ? (
//                     <Select
//                       value={selectedMakeModel}
//                       onChange={(e) => setSelectedMakeModel(e.target.value)}
//                       displayEmpty
//                       renderValue={(selected) => selected ? selected : "Make And Model"}
//                       sx={{
//                         position: "absolute",
//                         width: "100%",
//                         height: "49px",
//                         top: 0,
//                         left: 0,
//                         bgcolor: "#9c27b0",
//                         color: "text.primary",
//                         "& .MuiSelect-select": {
//                           paddingTop: "18px",
//                           textAlign: "center",
//                           fontWeight: "bold",
//                           color: "white",
//                         },
//                         "&:hover": { bgcolor: "#63268B" },
//                         "&.Mui-focused": { bgcolor: "#561381" },
//                       }}
//                       MenuProps={{
//                         PaperProps: {
//                           sx: { bgcolor: "#561381", color: "white" },
//                         },
//                       }}
//                       IconComponent={KeyboardArrowDownIcon}
//                     >
//                       {makeAndModelOptions.map((model, index) => (
//                         <MenuItem
//                           key={index}
//                           value={model}
//                           sx={{
//                             backgroundColor: "#9c27b0",
//                             "&:hover": { backgroundColor: "#63268B", color: "white" },
//                           }}
//                         >
//                           {model}
//                         </MenuItem>
//                       ))}
//                     </Select>
//                   ) : option.label === "Year" ? (
//                     <Select
//                       value={selectedYear}
//                       onChange={(e) => setSelectedYear(e.target.value)}
//                       displayEmpty
//                       renderValue={(selected) => selected ? selected : "Year"}
//                       sx={{
//                         position: "absolute",
//                         width: "100%",
//                         height: "49px",
//                         top: 0,
//                         left: 0,
//                         bgcolor: "#9c27b0",
//                         color: "text.primary",
//                         "& .MuiSelect-select": {
//                           paddingTop: "18px",
//                           textAlign: "center",
//                           fontWeight: "bold",
//                           color: "white",
//                         },
//                         "&:hover": { bgcolor: "#63268B" },
//                         "&.Mui-focused": { bgcolor: "#561381" },
//                       }}
//                       MenuProps={{
//                         PaperProps: {
//                           sx: { bgcolor: "#561381", color: "white" },
//                         },
//                       }}
//                       IconComponent={KeyboardArrowDownIcon}
//                     >
//                       {yearOptions.map((year, index) => (
//                         <MenuItem
//                           key={index}
//                           value={year}
//                           sx={{
//                             backgroundColor: "#9c27b0",
//                             "&:hover": { backgroundColor: "#63268B", color: "white" },
//                           }}
//                         >
//                           {year}
//                         </MenuItem>
//                       ))}
//                     </Select>
//                   ) : option.label === "Fuel" ? (
//                     <Select
//                       value={selectedFuel}
//                       onChange={(e) => setSelectedFuel(e.target.value)}
//                       displayEmpty
//                       renderValue={(selected) => selected ? selected : "Fuel"}
//                       sx={{
//                         position: "absolute",
//                         width: "100%",
//                         height: "49px",
//                         top: 0,
//                         left: 0,
//                         bgcolor: "#9c27b0",
//                         color: "text.primary",
//                         "& .MuiSelect-select": {
//                           paddingTop: "18px",
//                           textAlign: "center",
//                           fontWeight: "bold",
//                           color: "white",
//                         },
//                         "&:hover": { bgcolor: "#63268B" },
//                         "&.Mui-focused": { bgcolor: "#561381" },
//                       }}
//                       MenuProps={{
//                         PaperProps: {
//                           sx: { bgcolor: "#561381", color: "white" },
//                         },
//                       }}
//                       IconComponent={KeyboardArrowDownIcon}
//                     >
//                       {fuelOptions.map((fuel, index) => (
//                         <MenuItem
//                           key={index}
//                           value={fuel}
//                           sx={{
//                             backgroundColor: "#9c27b0",
//                             "&:hover": { backgroundColor: "#63268B", color: "white" },
//                           }}
//                         >
//                           {fuel}
//                         </MenuItem>
//                       ))}
//                     </Select>
//                   ) : option.label === "KM Driven" ? (
//                     <Select
//                       value={selectedKmDriven}
//                       onChange={(e) => setSelectedKmDriven(e.target.value)}
//                       displayEmpty
//                       renderValue={(selected) => selected ? selected : "KM Driven"}
//                       sx={{
//                         position: "absolute",
//                         width: "100%",
//                         height: "49px",
//                         top: 0,
//                         left: 0,
//                         bgcolor: "#9c27b0",
//                         color: "text.primary",
//                         "& .MuiSelect-select": {
//                           paddingTop: "18px",
//                           textAlign: "center",
//                           fontWeight: "bold",
//                           color: "white",
//                         },
//                         "&:hover": { bgcolor: "#63268B" },
//                         "&.Mui-focused": { bgcolor: "#561381" },
//                       }}
//                       MenuProps={{
//                         PaperProps: {
//                           sx: { bgcolor: "#561381", color: "white" },
//                         },
//                       }}
//                       IconComponent={KeyboardArrowDownIcon}
//                     >
//                       {kmDrivenOptions.map((km, index) => (
//                         <MenuItem
//                           key={index}
//                           value={km}
//                           sx={{
//                             backgroundColor: "#9c27b0",
//                             "&:hover": { backgroundColor: "#63268B", color: "white" },
//                           }}
//                         >
//                           {km}
//                         </MenuItem>
//                       ))}
//                     </Select>
//                   ) : option.label === "Body Type" ? (
//                     <Select
//                       value={selectedBodyType}
//                       onChange={(e) => setSelectedBodyType(e.target.value)}
//                       displayEmpty
//                       renderValue={(selected) => selected ? selected : "Body Type"}
//                       sx={{
//                         position: "absolute",
//                         width: "100%",
//                         height: "49px",
//                         top: 0,
//                         left: 0,
//                         bgcolor: "#9c27b0",
//                         color: "text.primary",
//                         "& .MuiSelect-select": {
//                           paddingTop: "18px",
//                           textAlign: "center",
//                           fontWeight: "bold",
//                           color: "white",
//                         },
//                         "&:hover": { bgcolor: "#63268B" },
//                         "&.Mui-focused": { bgcolor: "#561381" },
//                       }}
//                       MenuProps={{
//                         PaperProps: {
//                           sx: { bgcolor: "#561381", color: "white" },
//                         },
//                       }}
//                       IconComponent={KeyboardArrowDownIcon}
//                     >
//                       {bodyTypeOptions.map((type, index) => (
//                         <MenuItem
//                           key={index}
//                           value={type}
//                           sx={{
//                             backgroundColor: "#9c27b0",
//                             "&:hover": { backgroundColor: "#63268B", color: "white" },
//                           }}
//                         >
//                           {type}
//                         </MenuItem>
//                       ))}
//                     </Select>
//                   ) : option.label === "Transmission" ? (
//                     <Select
//                       value={selectedTransmission}
//                       onChange={(e) => setSelectedTransmission(e.target.value)}
//                       displayEmpty
//                       renderValue={(selected) => selected ? selected : "Transmission"}
//                       sx={{
//                         position: "absolute",
//                         width: "100%",
//                         height: "49px",
//                         top: 0,
//                         left: 0,
//                         bgcolor: "#9c27b0",
//                         color: "text.primary",
//                         "& .MuiSelect-select": {
//                           paddingTop: "18px",
//                           textAlign: "center",
//                           fontWeight: "bold",
//                           color: "white",
//                         },
//                         "&:hover": { bgcolor: "#63268B" },
//                         "&.Mui-focused": { bgcolor: "#561381" },
//                       }}
//                       MenuProps={{
//                         PaperProps: {
//                           sx: { bgcolor: "#561381", color: "white" },
//                         },
//                       }}
//                       IconComponent={KeyboardArrowDownIcon}
//                     >
//                       {transmissionOptions.map((trans, index) => (
//                         <MenuItem
//                           key={index}
//                           value={trans}
//                           sx={{
//                             backgroundColor: "#9c27b0",
//                             "&:hover": { backgroundColor: "#63268B", color: "white" },
//                           }}
//                         >
//                           {trans}
//                         </MenuItem>
//                       ))}
//                     </Select>
//                   ) : (
//                     <Select
//                       value=""
//                       displayEmpty
//                       sx={{
//                         position: "absolute",
//                         width: "100%",
//                         height: "49px",
//                         top: 0,
//                         left: 0,
//                         bgcolor: "#9c27b0",
//                         color: "text.primary",
//                         "& .MuiSelect-select": {
//                           paddingTop: "11px",
//                           textAlign: "center",
//                         },
//                       }}
//                       IconComponent={KeyboardArrowDownIcon}
//                     >
//                       <MenuItem value="">
//                         <Typography sx={{ textAlign: "center" }}>
//                           {option.label}
//                         </Typography>
//                       </MenuItem>
//                     </Select>
//                   )}
//                 </Box>
//               </Box>
//             </Box>
//           </Box>
//         );
//       })}
//     </Box>
//   );
// };

// export default DropdownSection;

import React, { useState } from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';

const filterOptions = [
  { id: 1, label: "Prize Range" },
  { id: 2, label: "Make And Model" },
  { id: 3, label: "Year" },
  { id: 4, label: "Fuel" },
  { id: 5, label: "KM Driven" },
  { id: 6, label: "Body Type" },
  { id: 7, label: "Transmission" },
];

const priceRanges = [
  "Under 3 Lakhs",
  "3 - 4 Lakhs",
  "4 - 5 Lakhs",
  "5 - 6 Lakhs",
];

const makeAndModelOptions = [
  "Maruti Suzuki",
  "Renault",
  "Tata",
  "Mahindra",
  "Skoda",
];

const yearOptions = [
  "2022 and above",
  "2020 and above",
  "2018 and above",
  "2016 and above",
  "2014 and above",
  "2012 and above",
  "2010 and above",
  "2008 and above",
];

const fuelOptions = ["Petrol", "Diesel", "CNG", "Electric"];

const kmDrivenOptions = [
  "10,000kms or less",
  "30,000kms or less",
  "50,000kms or less",
  "75,000kms or less",
  "1,00,000kms or less",
  "1,25,000kms or less",
  "1,50,000kms or less",
];

const bodyTypeOptions = ["Hatchback", "Sedan", "SUV", "MUV"];

const transmissionOptions = ["Manual", "Automatic"];

const Filterbar = () => {
  const [selectedPrice, setSelectedPrice] = useState('');
  const [selectedMakeModel, setSelectedMakeModel] = useState('');
  const [selectedYear, setSelectedYear] = useState('');
  const [selectedFuel, setSelectedFuel] = useState('');
  const [selectedKmDriven, setSelectedKmDriven] = useState('');
  const [selectedBodyType, setSelectedBodyType] = useState('');
  const [selectedTransmission, setSelectedTransmission] = useState('');

  return (
    <Box
      sx={{
        position: "relative",
        width: "100%",
        height: "66px",
        left: 0,
        bgcolor: "#9c27b0",
        overflow: "hidden",
        zIndex: 2, // Ensure Filterbar is above other elements
      }}
    >
      {filterOptions.map((option, index) => {
        let leftPosition;
        switch (index) {
          case 0: leftPosition = "4px"; break;
          case 1: leftPosition = "188px"; break;
          case 2: leftPosition = "373px"; break;
          case 3: leftPosition = "559px"; break;
          case 4: leftPosition = "745px"; break;
          case 5: leftPosition = "930px"; break;
          default: leftPosition = "1111px";
        }

        return (
          <Box
            key={option.id}
            sx={{
              position: "absolute",
              width: "176px",
              height: "182px",
              top: 0,
              left: leftPosition,
            }}
          >
            <Box sx={{ width: "167px", height: "182px" }}>
              <Box
                sx={{
                  position: "relative",
                  width: "176px",
                  height: "49px",
                }}
              >
                <Box sx={{ width: "100%" }}>
                  {option.label === "Prize Range" ? (
                    <Select
                      value={selectedPrice}
                      onChange={(e) => setSelectedPrice(e.target.value)}
                      displayEmpty
                      renderValue={(selected) => selected ? selected : "Price Range"}
                      sx={{
                        position: "absolute",
                        width: "100%",
                        height: "49px",
                        top: 0,
                        left: 0,
                        bgcolor: "#9c27b0",
                        color: "text.primary",
                        "& .MuiSelect-select": {
                          paddingTop: "18px",
                          textAlign: "center",
                          fontWeight: "bold",
                          color: "white",
                        },
                        "&:hover": { bgcolor: "#63268B" },
                        "&.Mui-focused": { bgcolor: "#561381" },
                      }}
                      MenuProps={{
                        PaperProps: {
                          sx: { bgcolor: "#561381", color: "white" },
                        },
                      }}
                      IconComponent={KeyboardArrowDownIcon}
                    >
                      {priceRanges.map((range, index) => (
                        <MenuItem
                          key={index}
                          value={range}
                          sx={{
                            backgroundColor: "#9c27b0",
                            "&:hover": { backgroundColor: "#63268B", color: "white" },
                          }}
                        >
                          {range}
                        </MenuItem>
                      ))}
                    </Select>
                  ) : option.label === "Make And Model" ? (
                    <Select
                      value={selectedMakeModel}
                      onChange={(e) => setSelectedMakeModel(e.target.value)}
                      displayEmpty
                      renderValue={(selected) => selected ? selected : "Make And Model"}
                      sx={{
                        position: "absolute",
                        width: "100%",
                        height: "49px",
                        top: 0,
                        left: 0,
                        bgcolor: "#9c27b0",
                        color: "text.primary",
                        "& .MuiSelect-select": {
                          paddingTop: "18px",
                          textAlign: "center",
                          fontWeight: "bold",
                          color: "white",
                        },
                        "&:hover": { bgcolor: "#63268B" },
                        "&.Mui-focused": { bgcolor: "#561381" },
                      }}
                      MenuProps={{
                        PaperProps: {
                          sx: { bgcolor: "#561381", color: "white" },
                        },
                      }}
                      IconComponent={KeyboardArrowDownIcon}
                    >
                      {makeAndModelOptions.map((model, index) => (
                        <MenuItem
                          key={index}
                          value={model}
                          sx={{
                            backgroundColor: "#9c27b0",
                            "&:hover": { backgroundColor: "#63268B", color: "white" },
                          }}
                        >
                          {model}
                        </MenuItem>
                      ))}
                    </Select>
                  ) : option.label === "Year" ? (
                    <Select
                      value={selectedYear}
                      onChange={(e) => setSelectedYear(e.target.value)}
                      displayEmpty
                      renderValue={(selected) => selected ? selected : "Year"}
                      sx={{
                        position: "absolute",
                        width: "100%",
                        height: "49px",
                        top: 0,
                        left: 0,
                        bgcolor: "#9c27b0",
                        color: "text.primary",
                        "& .MuiSelect-select": {
                          paddingTop: "18px",
                          textAlign: "center",
                          fontWeight: "bold",
                          color: "white",
                        },
                        "&:hover": { bgcolor: "#63268B" },
                        "&.Mui-focused": { bgcolor: "#561381" },
                      }}
                      MenuProps={{
                        PaperProps: {
                          sx: { bgcolor: "#561381", color: "white" },
                        },
                      }}
                      IconComponent={KeyboardArrowDownIcon}
                    >
                      {yearOptions.map((year, index) => (
                        <MenuItem
                          key={index}
                          value={year}
                          sx={{
                            backgroundColor: "#9c27b0",
                            "&:hover": { backgroundColor: "#63268B", color: "white" },
                          }}
                        >
                          {year}
                        </MenuItem>
                      ))}
                    </Select>
                  ) : option.label === "Fuel" ? (
                    <Select
                      value={selectedFuel}
                      onChange={(e) => setSelectedFuel(e.target.value)}
                      displayEmpty
                      renderValue={(selected) => selected ? selected : "Fuel"}
                      sx={{
                        position: "absolute",
                        width: "100%",
                        height: "49px",
                        top: 0,
                        left: 0,
                        bgcolor: "#9c27b0",
                        color: "text.primary",
                        "& .MuiSelect-select": {
                          paddingTop: "18px",
                          textAlign: "center",
                          fontWeight: "bold",
                          color: "white",
                        },
                        "&:hover": { bgcolor: "#63268B" },
                        "&.Mui-focused": { bgcolor: "#561381" },
                      }}
                      MenuProps={{
                        PaperProps: {
                          sx: { bgcolor: "#561381", color: "white" },
                        },
                      }}
                      IconComponent={KeyboardArrowDownIcon}
                    >
                      {fuelOptions.map((fuel, index) => (
                        <MenuItem
                          key={index}
                          value={fuel}
                          sx={{
                            backgroundColor: "#9c27b0",
                            "&:hover": { backgroundColor: "#63268B", color: "white" },
                          }}
                        >
                          {fuel}
                        </MenuItem>
                      ))}
                    </Select>
                  ) : option.label === "KM Driven" ? (
                    <Select
                      value={selectedKmDriven}
                      onChange={(e) => setSelectedKmDriven(e.target.value)}
                      displayEmpty
                      renderValue={(selected) => selected ? selected : "KM Driven"}
                      sx={{
                        position: "absolute",
                        width: "100%",
                        height: "49px",
                        top: 0,
                        left: 0,
                        bgcolor: "#9c27b0",
                        color: "text.primary",
                        "& .MuiSelect-select": {
                          paddingTop: "18px",
                          textAlign: "center",
                          fontWeight: "bold",
                          color: "white",
                        },
                        "&:hover": { bgcolor: "#63268B" },
                        "&.Mui-focused": { bgcolor: "#561381" },
                      }}
                      MenuProps={{
                        PaperProps: {
                          sx: { bgcolor: "#561381", color: "white" },
                        },
                      }}
                      IconComponent={KeyboardArrowDownIcon}
                    >
                      {kmDrivenOptions.map((km, index) => (
                        <MenuItem
                          key={index}
                          value={km}
                          sx={{
                            backgroundColor: "#9c27b0",
                            "&:hover": { backgroundColor: "#63268B", color: "white" },
                          }}
                        >
                          {km}
                        </MenuItem>
                      ))}
                    </Select>
                  ) : option.label === "Body Type" ? (
                    <Select
                      value={selectedBodyType}
                      onChange={(e) => setSelectedBodyType(e.target.value)}
                      displayEmpty
                      renderValue={(selected) => selected ? selected : "Body Type"}
                      sx={{
                        position: "absolute",
                        width: "100%",
                        height: "49px",
                        top: 0,
                        left: 0,
                        bgcolor: "#9c27b0",
                        color: "text.primary",
                        "& .MuiSelect-select": {
                          paddingTop: "18px",
                          textAlign: "center",
                          fontWeight: "bold",
                          color: "white",
                        },
                        "&:hover": { bgcolor: "#63268B" },
                        "&.Mui-focused": { bgcolor: "#561381" },
                      }}
                      MenuProps={{
                        PaperProps: {
                          sx: { bgcolor: "#561381", color: "white" },
                        },
                      }}
                      IconComponent={KeyboardArrowDownIcon}
                    >
                      {bodyTypeOptions.map((type, index) => (
                        <MenuItem
                          key={index}
                          value={type}
                          sx={{
                            backgroundColor: "#9c27b0",
                            "&:hover": { backgroundColor: "#63268B", color: "white" },
                          }}
                        >
                          {type}
                        </MenuItem>
                      ))}
                    </Select>
                  ) : option.label === "Transmission" ? (
                    <Select
                      value={selectedTransmission}
                      onChange={(e) => setSelectedTransmission(e.target.value)}
                      displayEmpty
                      renderValue={(selected) => selected ? selected : "Transmission"}
                      sx={{
                        position: "absolute",
                        width: "100%",
                        height: "49px",
                        top: 0,
                        left: 0,
                        bgcolor: "#9c27b0",
                        color: "text.primary",
                        "& .MuiSelect-select": {
                          paddingTop: "18px",
                          textAlign: "center",
                          fontWeight: "bold",
                          color: "white",
                        },
                        "&:hover": { bgcolor: "#63268B" },
                        "&.Mui-focused": { bgcolor: "#561381" },
                      }}
                      MenuProps={{
                        PaperProps: {
                          sx: { bgcolor: "#561381", color: "white" },
                        },
                      }}
                      IconComponent={KeyboardArrowDownIcon}
                    >
                      {transmissionOptions.map((trans, index) => (
                        <MenuItem
                          key={index}
                          value={trans}
                          sx={{
                            backgroundColor: "#9c27b0",
                            "&:hover": { backgroundColor: "#63268B", color: "white" },
                          }}
                        >
                          {trans}
                        </MenuItem>
                      ))}
                    </Select>
                  ) : (
                    <Select
                      value=""
                      displayEmpty
                      sx={{
                        position: "absolute",
                        width: "100%",
                        height: "49px",
                        top: 0,
                        left: 0,
                        bgcolor: "#9c27b0",
                        color: "text.primary",
                        "& .MuiSelect-select": {
                          paddingTop: "11px",
                          textAlign: "center",
                        },
                      }}
                      IconComponent={KeyboardArrowDownIcon}
                    >
                      <MenuItem value="">
                        <Typography sx={{ textAlign: "center" }}>
                          {option.label}
                        </Typography>
                      </MenuItem>
                    </Select>
                  )}
                </Box>
              </Box>
            </Box>
          </Box>
        );
      })}
    </Box>
  );
};

export default Filterbar;
