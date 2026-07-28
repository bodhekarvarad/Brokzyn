import React from "react";
import  { useState } from "react";
import Typography from "@mui/material/Typography";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import Auth_Form from "./Auth_Form";

function Signup() {
  const [open, setOpen]=useState(false);
  return (
    <div>
      {!open ? (
        <>
          <Avatar
            src="/landing_sign.svg"
            alt="auth_img"
            sx={{
              width: "50%",
              height: "50%",
              ml: "25%",
              mt: 2,
            }}
          />

          <Typography
            variant="h3"
            sx={{
              mt: 5,
              textAlign: "center",
            }}
          >
            Open a Brokzyn account
          </Typography>

          <Button
            variant="contained"
            size="large"
            sx={{
              display: "block",
              mx: "auto",
              mt: 3,
            }}
            onClick={() => setOpen(true)}
          >
            Sign up for Free
          </Button>
        </>
      ) : (
        <Auth_Form />
      )}
    </div>
  );
}
export default Signup;
