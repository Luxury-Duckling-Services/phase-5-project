import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import CircularProgress from '@mui/material/CircularProgress';
import { useState } from "react";

function SearchBar() {
  const [open, setOpen] = useState(false);
  const [options, setOptions] = useState([]);
  const [searchUsername , setSearchUsername] = useState("")
  const loading = open && searchUsername.length>=5 && options.length === 0;

  function handleChange(e) {
    setSearchUsername(e.target.value)
    if (e.target.value.length>=5) {
      fetch(`/search_username/${e.target.value}`)
      .then( (r) =>r.json() )
      .then( (j) => {
        setOptions(j.map( user => (user.username)))
      })
    }
  }
  
  return (
    <Autocomplete
      open={open}
      onOpen={() => {
        setOpen(true);
      }}
      onClose={() => {
        setOpen(false);
      }}
      options={options}
      loading={loading}
      sx={{ width: "45%" }}
      renderInput={(params) =>
        <TextField
          value={searchUsername}
          onChange={(e)=>{handleChange(e)}}
          {...params}
          label="Searh User"
          InputProps={{
            ...params.InputProps,
            endAdornment: (
              <>
                {loading ? <CircularProgress color="inherit" size={20} /> : null}
                {params.InputProps.endAdornment}
              </>
            )
          }}
        />
      }
    />
  );
}

export default SearchBar