import MenuItem from "@mui/material/MenuItem";
import TextField from "@mui/material/TextField";

type Props = {
  value: string;
  onChange: (value: string) => void;
};

export const SortDropdown = ({ value, onChange }: Props) => {
  return (
    <TextField
      select
      label="Sort: Featured"
      value={value}
      onChange={(e) => onChange(e.target.value)}
      sx={{
        flex: { xs: "1 1 100%", sm: "2" },
        minWidth: { xs: "100%", sm: "300px" },
      }}
    >
      <MenuItem value="">None</MenuItem>
      <MenuItem value="low">Price: Low → High</MenuItem>
      <MenuItem value="high">Price: High → Low</MenuItem>
    </TextField>
  );
};

export default SortDropdown;
