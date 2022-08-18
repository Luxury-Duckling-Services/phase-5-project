import { useState } from "react";
import { Box, Button , TextField } from '@mui/material';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import LoginAlert from "./LoginAlert";

const validationSchema = Yup.object({
    username: Yup
        .string('Enter your username.')
        .min(5, 'Must be between 5 to 15 characters.')
        .max(15, 'Must be between 5 to 15 characters.')
        .matches(/^[a-zA-Z0-9]+$/, 'Cannot contain white space or special characters.')
        .required('Required'),
    name: Yup
        .string('Enter your full name.')
        .min(2, 'Must be between 2 to 20 characters.')
        .max(20, 'Must be between 2 to 20 characters.')
        .required('Required'),
    email: Yup
        .string('Enter your email.')
        .email('Invalid email.')
        .required('Required.'),
    password: Yup
        .string('Enter your password')
        .min(6, 'Password should be of minimum 6 characters length.')
        .required('Password is required'),
    password_confirmation: Yup
        .string('Confirm your password.')
        .oneOf([Yup.ref('password'), null], 'Passwords must match.')
});

function SignupStepOne({ setActiveStep , setNewUser }) {
    const [errors , setErrors] = useState([])

    const formik = useFormik({
        initialValues: {
            email: "",
            username: "",
            name: "",
            password: "",
            password_confirmation: "",
        },
        validationSchema: validationSchema,
        onSubmit: (values) => {
            fetch("/signup", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify( {...values } ),
            })
            .then((r) => {
                if (r.ok) {
                    r.json()
                    .then( (j) => {
                        setNewUser(j)
                        setActiveStep(1)
                    } )
                }
                else {
                    r.json()
                    .then((err)=>{
                        setErrors(err.errors)
                    })
                }
            });
        },
    });

    return (
        <form onSubmit={formik.handleSubmit}>
            <Box>
                <TextField
                    id="username"
                    label="Username"
                    placeholder="Pick your unique username..."
                    value={formik.values.username}
                    fullWidth
                    onChange={formik.handleChange}
                    sx={{mb:2}}
                    error={formik.touched.username && Boolean(formik.errors.username)}
                    helperText={formik.touched.username && formik.errors.username}
                />
                {errors.includes('Username has already been taken') ? <LoginAlert errorMessage={'Username has already been taken.'}/> : <></> }

                <TextField
                    id="email"
                    label="Email"
                    placeholder="Enter your email..."
                    value={formik.values.email}
                    fullWidth
                    onChange={formik.handleChange}
                    sx={{mb:2}}
                    error={formik.touched.email && Boolean(formik.errors.email)}
                    helperText={formik.touched.email && formik.errors.email}
                />
                {errors.includes('Email has already been taken') ? <LoginAlert errorMessage={'Email has already been taken.'}/> : <></> }

                <TextField
                    id="name"
                    label="Full Name"
                    placeholder="Enter your full name..."
                    value={formik.values.name}
                    fullWidth
                    onChange={formik.handleChange}
                    sx={{mb:2}}
                    error={formik.touched.name && Boolean(formik.errors.name)}
                    helperText={formik.touched.name && formik.errors.name}
                />

                <TextField
                    id="password"
                    label="Password"
                    placeholder="Enter a strong password..."
                    value={formik.values.password}
                    onChange={formik.handleChange}
                    sx={{mb:2}}
                    fullWidth
                    type="password"
                    error={formik.touched.password && Boolean(formik.errors.password)}
                    helperText={formik.touched.password && formik.errors.password}
                />
                
                <TextField
                    id="password_confirmation"
                    placeholder="Confirm your password..."
                    label="Password Confirmation"
                    value={formik.values.password_confirmation}
                    onChange={formik.handleChange}
                    sx={{mb:2}}
                    fullWidth
                    type="password"
                    error={formik.touched.password_confirmation && Boolean(formik.errors.password_confirmation)}
                    helperText={formik.touched.password_confirmation && formik.errors.password_confirmation}
                />
    
                <Button
                    variant="outlined"
                    sx={{color: "black"}}
                    type="submit"
                >
                    Sign Up & Next
                </Button>
            </Box>
        </form>
    )
}

export default SignupStepOne;