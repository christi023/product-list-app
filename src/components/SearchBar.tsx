import InputAdornment from "@mui/material/InputAdornment";
import TextField from "@mui/material/TextField";
import SearchIcon from "@mui/icons-material/Search";

type Props = {
  value: string;
  onChange: (value: string) => void;
};

export const SearchBar = ({ value, onChange }: Props) => {
  return (
    <TextField
      placeholder="Search products..."
      label={undefined}
      variant="outlined"
      value={value}
      onChange={(e) => onChange(e.target.value)}
      sx={{
        flex: { xs: "1 1 100%", sm: "2" },
        minWidth: { xs: "100%", sm: "300px" },
      }}
      slotProps={{
        input: {
          startAdornment: (
            <InputAdornment position="start">
              <SearchIcon color="action" />
            </InputAdornment>
          ),
        },
      }}
    />
  );
};
