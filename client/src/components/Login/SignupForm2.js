import React, { useState } from "react";
import { Box, Button , TextField } from '@mui/material';

import { Formik, Form, Field , useFormik } from 'formik';
import * as Yup from 'yup';

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

function SignupForm2({ setUser }) {

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
            console.log(values)
            // fetch("/signup", {
            //     method: "POST",
            //     headers: {
            //         "Content-Type": "application/json",
            //     },
            //     body: JSON.stringify( {...values } ),
            // })
            // .then((r) => {
            //     if (r.ok) {
            //         r.json()
            //         .then((user) => setUser(user));
            //     }
            // });
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
                Sign Up
            </Button>
        </Box>
        </form>
    )







//   const [ newUser , setNewUser ] = useState({
//     username: "",
//     name: "",
//     email: "",
//     password: "",
//     password_confirmation: ""
//   })

//   function handleSubmit(e) {
//     fetch("/signup", {
//       method: "POST",
//       headers: {
//         "Content-Type": "application/json",
//       },
//       body: JSON.stringify( newUser ),
//     })
//     .then((r) => {
//       if (r.ok) {
//         r.json()
//         .then((user) => setUser(user));
//       }
//     });
//   }

//   return (
//     <Box>
//       <TextField
//         id="username"
//         label="Username"
//         placeholder="Pick your unique username..."
//         value={newUser.username}
//         fullWidth
//         onChange={(e) => setNewUser({ ...newUser,
//           username: e.target.value })
//         }
//         sx={{mb:2}}
//       />

//       <TextField
//         id="email"
//         label="Email"
//         placeholder="Enter your email..."
//         value={newUser.email}
//         fullWidth
//         onChange={(e) => setNewUser({ ...newUser,
//           email: e.target.value })
//         }
//         sx={{mb:2}}
//       />

//       <TextField
//         id="name"
//         label="Full Name"
//         placeholder="Enter your full name..."
//         value={newUser.name}
//         fullWidth
//         onChange={(e) => setNewUser({ ...newUser,
//           name: e.target.value })
//         }
//         sx={{mb:2}}
//       />

//       <TextField
//         id="password"
//         label="Password"
//         placeholder="Enter a strong password..."
//         value={newUser.password}
//         onChange={(e) => setNewUser({ ...newUser,
//           password: e.target.value })
//         }
//         sx={{mb:2}}
//         fullWidth
//         type="password"
//       />
      
//       <TextField
//         id="password-confirmation"
//         placeholder="Confirm your password..."
//         label="Password Confirmation"
//         value={newUser.password_confirmation}
//         onChange={(e) => setNewUser({ ...newUser,
//           password_confirmation: e.target.value })
//         }
//         sx={{mb:2}}
//         fullWidth
//         type="password"
//       />
        
//       <Button
//         variant="outlined"
//         onClick={handleSubmit}
//         sx={{color: "black"}}
//       >
//         Sign Up
//       </Button>

//     </Box>
//     );
}

export default SignupForm2;