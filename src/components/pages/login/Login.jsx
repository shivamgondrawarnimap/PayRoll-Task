import React from "react";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { LOGIN } from "../../../services/apiEndPoints";
import publicRequest from "../../../services/publicRequest";

const Login = () => {
  const initialValues = {
    Username: "",
    Password: "",
  };

  const validationSchema = Yup.object({
    Username: Yup.string().required("Username is required"),
    Password: Yup.string().required("Password is required"),
  });

  const handleSubmit = (values) => {
    console.log("Login Form Submitted:", values);
    return publicRequest.post(LOGIN, values).then((res) => {
      console.log('res :>> ', res);
      //   const { token, } = res?.data?.data || {}
      //   localStorage.setItem("token", token)
      //   localStorage.setItem("currentUser", JSON.stringify({
      //     token,
      //     // role : role,
      //     // userId: userId,
      //   }))

      //   localStorage.setItem("email", values.email)
      //   if (token) {
      //     navigate("/")
      //   }
      //   else {
      //     navigate('/login')
      //   }
      })
    };

    return (
      <div>
        <h1>Login</h1>
        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={handleSubmit}
        >
          {({ errors, touched, handleChange, handleBlur, values }) => (
            <Form>
              <Box
                sx={{
                  "& .MuiTextField-root": { m: 1, width: "30ch" },
                }}
                noValidate
                autoComplete="off"
              >
                <div>
                  <TextField
                    name="Username"
                    label="Username"
                    value={values.Username}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    error={touched.Username && Boolean(errors.Username)}
                    helperText={touched.Username && errors.Username}
                  />
                </div>
                <div>
                  <TextField
                    name="Password"
                    label="Password"
                    type="password"
                    value={values.Password}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    error={touched.Password && Boolean(errors.Password)}
                    helperText={touched.Password && errors.Password}
                  />
                </div>
                <div style={{ paddingTop: "8px" }}>
                  <Button type="submit" variant="contained">
                    Login
                  </Button>
                </div>
              </Box>
            </Form>
          )}
        </Formik>
      </div>
    );
  };

  export default Login;