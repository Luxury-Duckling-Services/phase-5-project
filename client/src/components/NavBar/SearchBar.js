import { TextField , Autocomplete , CircularProgress , Avatar , Box, Typography }from '@mui/material';
import { useState } from "react";
import { Link } from 'react-router-dom';

function SearchBar( { usersId , setUsersId} ) {
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
        setOptions(j)
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
      getOptionLabel={(option) => option.username}
      loading={loading}
      sx={{ width: "50%" , mt:1 }}
      renderOption={(props , option)=> (
        <Box
          style={{ textDecoration: 'none' }}
          component={Link}
          to="/account"
          {...props}
          onClick={(e)=>{
            setUsersId( { ...usersId , userToViewId: option.id })
        }}>
          <Avatar sx={{mr:1}} src={option.profile_picture}/>
          <Typography color="textPrimary">{option.username}</Typography>
        </Box>
      )}
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