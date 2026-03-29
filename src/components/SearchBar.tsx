import InputAdornment from "@mui/material/InputAdornment"
import TextField from "@mui/material/TextField"
import SearchIcon from '@mui/icons-material/Search';

type Props = {
    value: string;
    onChange: (value: string) => void;
}

export const SearchBar = ({ value, onChange }: Props) => {
    return(       
       <TextField 
        placeholder="Search products..."
        label={undefined}
        variant="outlined"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        sx={{ minWidth: '450px' }} 
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
    )
} 