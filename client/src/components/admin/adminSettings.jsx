import { useState, useEffect } from "react";
import Axios from "axios";
import AdminNav from "./adminNav";
import "../../css/teacher/settings.css";
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

export default function Settings(){
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");

    const [userId, setUserId] = useState();

    useEffect(() => {
        Axios.get("http://localhost:5000/api/getUserId").then((response) => {
                setUserId(response.data.user[0].id);
                console.log("user id: ", userId);
          });
    }, [userId])

    const createNewPassword = () => {
        if (password === "" || confirmPassword === "") {
          alert("Please enter a password and confirm it.");
        } else if (password !== confirmPassword) {
          alert("Make sure password is equal to confirm password");
        } else {
          Axios.put("http://localhost:5000/api/settingsResetPassword", { password: password, userId:userId })
            .then((response) => {
              if (!response.data.err) {
                alert("Password successfully updated.");
              } else {
                console.log(response);
              }
            })
            .catch((error) => {
              console.log(error);
            });
        }
    };
    Axios.defaults.withCredentials = true;
    return(<>
        <AdminNav />
        <div className="settings-container">
            <div className="reset-password-container">
                <div>
                <   h3>Enter Your New Password</h3>
                </div>
                <div>
                    <TextField 
                    id="outlined-basic" 
                    label="Set New Password" 
                    variant="outlined" 
                    type="password"
                    onChange={(event) => {
                        setPassword(event.target.value);
                    }}
                    />
                </div>
                <div>
                    <TextField 
                    id="outlined-basic" 
                    label="Confirm New Password" 
                    variant="outlined" 
                    type="password"
                    onChange={(event) => {
                        setConfirmPassword(event.target.value);
                    }}
                    />
                </div>
                <div className="new-password-btn">
                    <Button 
                        sx={{float:'right'}}
                        onClick={createNewPassword}
                        >Submit</Button>
                </div>
            </div>
        </div>

    </>);
}