import { MenuItem } from "@mui/material";
import TextField from "@mui/material/TextField";
import type { Category } from "../types/category";
import { CATEGORY_LIST } from "../types/category";

type Props = {
  value: Category;
  onChange: (value: Category) => void;
};

export const CategoryFilter = ({ value, onChange }: Props) => {  
  return (
    <TextField
      select
      label="Categories"
      value={value}
      onChange={(e) => onChange(e.target.value as Category)}
      sx={{ minWidth: "250px" }}
    >
      {CATEGORY_LIST.map((category) => (
        <MenuItem key={category.value} value={category.value}>
          {category.label}
        </MenuItem>
      ))}
    </TextField>
  );
};

export default CategoryFilter;
