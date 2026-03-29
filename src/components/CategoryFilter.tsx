import { MenuItem } from "@mui/material";
import TextField from "@mui/material/TextField";

type Props = {
  value: string;
  onChange: (value: string) => void;
};

export const CategoryFilter = ({ value, onChange }: Props) => {
  const categories = [
    "all",
    "electronics",
    "jewelery",
    "men's clothing",
    "women's clothing",
  ];

  return (
    <TextField
      select
      label="Categories"
      value={value}
      onChange={(e) => onChange(e.target.value)}
      sx={{ minWidth: "250px" }}
    >
      {categories.map((category) => (
        <MenuItem key={category} value={category}>
          {category}
        </MenuItem>
      ))}
    </TextField>
  );
};

export default CategoryFilter;
