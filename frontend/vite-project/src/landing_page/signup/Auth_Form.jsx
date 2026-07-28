import React, { useState } from "react";
import {
  Box,
  Button,
  Card,
  TextField,
  Typography,
  Link,
} from "@mui/material";
import axios from "axios";

export default function Auth_Form() {
  const [isSignup, setIsSignup] = useState(true);

  const [name, setName] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      if (isSignup) {
        const res = await axios.post(
          "https://brokzyn.onrender.com/api/v1/users/register",
          {
            name,
            username,
            password,
          }
        );

        alert(res.data.message);

        setIsSignup(false);

        setName("");
        setUsername("");
        setPassword("");
      } else {
        const res = await axios.post(
          "https://brokzyn.onrender.com/api/v1/users/login",
          {
            username,
            password,
          }
        );


        alert(res.data.message);

        localStorage.setItem("token", res.data.token);
        //dashboard 
        window.location.href = " http://localhost:5174/";

       
      }
    } catch (err) {
      console.error(err);

      alert(err.response?.data?.message || "Something went wrong");
    }
  };

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        minHeight: "100vh",
        bgcolor: "#f5f5f5",
      }}
    >
      <Card
        sx={{
          width: 400,
          p: 4,
          borderRadius: 3,
          boxShadow: 3,
        }}
      >
        <Typography
          variant="h4"
          textAlign="center"
          fontWeight="bold"
          mb={3}
        >
          {isSignup ? "Sign Up" : "Login"}
        </Typography>

        <Box
          component="form"
          onSubmit={handleSubmit}
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: 2,
          }}
        >
          {isSignup && (
            <TextField
              label="Full Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              fullWidth
              required
            />
          )}

          <TextField
            label="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            fullWidth
            required
          />

          <TextField
            label="Password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            fullWidth
            required
          />

          <Button
            type="submit"
            variant="contained"
            size="large"
            sx={{
              mt: 1,
              bgcolor: "#387ed1",
              "&:hover": {
                bgcolor: "#2f6db5",
              },
            }}
          >
            {isSignup ? "Sign Up" : "Login"}
          </Button>

          <Typography textAlign="center">
            {isSignup ? (
              <>
                Already have an account?{" "}
                <Link
                  component="button"
                  underline="hover"
                  onClick={() => setIsSignup(false)}
                >
                  Login
                </Link>
              </>
            ) : (
              <>
                Don't have an account?{" "}
                <Link
                  component="button"
                  underline="hover"
                  onClick={() => setIsSignup(true)}
                >
                  Sign Up
                </Link>
              </>
            )}
          </Typography>
        </Box>
      </Card>
    </Box>
  );
}