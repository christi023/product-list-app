import MenuItem from "@mui/material/MenuItem"
import TextField from "@mui/material/TextField"


type Props = {
    value: string;
    onChange: (value: string) => void;
}

export const SortDropdown = ({ value, onChange }: Props) => {
  return (
     <TextField
      select
      label="Sort: Featured"
      value={value}
      onChange={(e) => onChange(e.target.value)}
      sx={{ minWidth: '250px' }} 
    >
      <MenuItem value="">None</MenuItem>
      <MenuItem value="low">Price: Low → High</MenuItem>
      <MenuItem value="high">Price: High → Low</MenuItem>
    </TextField>
  )
}

export default SortDropdown