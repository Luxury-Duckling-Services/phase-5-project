import { Button , InputLabel , Select , OutlinedInput , MenuItem , Chip , Box , Avatar , FormControl } from '@mui/material';
import { useState , useEffect } from 'react'

function SignupStepTwo( { setUsersId , newUser }) {
    const [sports , setSports] = useState([])
    const [selectedSports, setSelectedSports] = useState([])

    useEffect( ()=> {
        fetch("/sports_categories")
        .then( (r) =>r.json())
        .then( (j) =>{
            console.log(j)
            setSports(j)
        })
    } , [])

    function finishSignup(e) {
        e.preventDefault()
        fetch('/favorite_sports' , {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({ 
                selected_sports_names: selectedSports ,
                user_id: newUser.id
            })
        })
        .then( (r) => {
            if (r.ok) {
                r.json()
                .then( (j) =>{
                    console.log(j)
                    setUsersId({
                        userId: j.id,
                        userToViewId: j.id})
                })
            }
        })
    }

    function handleChange(e) {
        console.log(e.target.value)
        setSelectedSports(e.target.value)
    }
    
    return (
        <form onSubmit={(e)=>{finishSignup(e)}}>
            <Box sx={{mb:2}}>
                <FormControl fullWidth>
                    <InputLabel>Favorite Sports</InputLabel>
                    
                    <Select
                        multiple
                        value={selectedSports}
                        onChange={handleChange}
                        input={<OutlinedInput label="Favorite Sports" />}
                        renderValue={ (selected) => (
                            <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.5 }}>
                                {selected.map( (value) => (
                                    <Chip key={value} label={value}/>
                                ))}
                            </Box>
                        )}
                    >
                        {sports.map((sport) => (
                            <MenuItem
                                key={sport.id}
                                value={sport.sport_name}
                            >
                                <Avatar key={sport.id} sx={{width: 27, height: 27, mr:2}} src={sport.sport_image}/>{sport.sport_name}
                            </MenuItem>
                        ))}
                    </Select>
                </FormControl>
            </Box>
            
            <Button
                variant="outlined"
                sx={{color: "black"}}
                type="submit"
            >
                Finish
            </Button>
        </form>
    )
}

export default SignupStepTwo;