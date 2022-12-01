import * as React from "react";
import { useTheme } from "@mui/material/styles";
import OutlinedInput from "@mui/material/OutlinedInput";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

const ITEM_HEIGHT = 68;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
      marginTop:0,
    }
  }
};
const divStyles={
  // @apply flex rounded-tl-md rounded-bl-md justify-center items-center font-AmazonEmberMedium font-medium text-12px relative ;
  fontSize:"12px",
  width: 'fit-content',
  backgroundColor: "#f3f3f3",
  color: "#555",
  borderRadius:"0",
  height: "38px",
    fontFamily:"AmazonEmberMedium",
}

const names = [
  "All Categories",
  "Alex Skills",
  "Amazon Device",
  "Amazon Fresh",
  "Amazon Fashion",
  "Amazon Pharmacy",
  "Appliances",
  "Apps & Games",
  "Baby",
  "Beauty",
  "Clothing & Accessories",
  "Collectibles",
  "Deals",
  "Furniture",
  "Garden",
  "Gift Cards",
  "Jewellery",
  "Kindle Store",
  "Luxury Beauty",
  "Music",
  "Musical Instruments",
  "Office Products",
  "Pet Supplies",
  "Prime Video",
  "Same-Day Delivery",
  "Shoes",
  "Software",
  "Sports",
  "Subscribe & Save",
  "Tools & Home Improvement",
  "Toys & Games",
  "Under ₹500",
  "Video Games",
  "Watches",
];

function getStyles(name, personName, theme) {
  return {
    color:"#0F1111",
    fontFamily: 'AmazonEmber-medium',
    fontSize:"12px",
    fontWeight:
      personName.indexOf(name) === -1
        ? theme.typography.fontWeightRegular
        : theme.typography.fontWeightMedium

  };
}

export default function SelectInput() {
  const theme = useTheme();
  const [personName, setPersonName] = React.useState([]);

  const handleChange = (event) => {
    const {
      target: { value }
    } = event;
    setPersonName(
      // On autofill we get a stringified value.
      typeof value === "string" ? value.split(",") : value
    );
  };

  return (
    <div>
      <FormControl sx={{ width: 60, mt: 0, background: '#f3f3f3' }}>
        <Select
        style={divStyles}
          displayEmpty
          value={personName}
          onChange={handleChange}
          input={<OutlinedInput />}
          renderValue={(selected) => {
            if (selected.length === 0) {
              return <em>All</em>;
            }

            return selected.join(", ");
          }}
          MenuProps={MenuProps}
          inputProps={{ "aria-label": "Without label" }}
        >
          {/* <MenuItem disabled value="">
            <em sx={{fontSize:"12px"}}>All Categories</em>
          </MenuItem> */}
          {names.map((name) => (
            <MenuItem
              key={name}
              value={name}
              style={getStyles(name, personName, theme)}
            >
              {name}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </div>
  );
}
