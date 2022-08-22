import { TextField , Autocomplete , CircularProgress , Avatar , Box, Typography }from '@mui/material';
import { useState } from "react";

function CreateASessionStepTwoSearchBar( {  } ) {
    const [open, setOpen] = useState(false);
    const [options, setOptions] = useState([]);
    const [searchDrillName , setSearchDrillName] = useState("")
    const loading = open && searchDrillName.length>=3 && options.length === 0;

    function handleChange(e) {
        setSearchDrillName(e.target.value)
        
        if (e.target.value.length>=3) {
            fetch(`/search_drill_name/${e.target.value}`)
            .then( (r) => r.json() )
            .then( (j) => {
                console.log(j)
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
            getOptionLabel={(option) => option.drill_title}
            loading={loading}
            sx={{ width: "100%" , mt:1 }}
            renderOption={(props , option)=> (
                <Box
                    style={{ textDecoration: 'none' }}
                    {...props}
                    onClick={(e)=>{
                        console.log(e)
                    }}>
                        <Typography color="textPrimary">{option.drill_title}</Typography>
                </Box>
            )}
            renderInput={(params) =>
                <TextField
                    value={searchDrillName}
                    onChange={(e)=>{handleChange(e)}}
                    {...params}
                    label="Add your drills to the session"
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

export default CreateASessionStepTwoSearchBar