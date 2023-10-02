import { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const PasswordResetForm = ({ userId, token }) => {
  const [newPassword, setNewPassword] = useState("");
  const [oldUser, setOldUser] = useState("");
  const [message, setMessage] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    // Check the token against the server when the component mounts
    verifyToken();
  }, []);

  const verifyToken = async () => {
    try {
      const response = await axios.get(`/verify-token/${token}`);
      if (response.data.status === "Token Verified") {
        setMessage("Token is valid. You can reset your password.");
      } else {
        setMessage("Token is invalid.");
        // Redirect to an error page or handle the invalid token scenario
        navigate("/error");
      }
    } catch (error) {
      console.error(error);
      setMessage("An error occurred while verifying the token.");
    }
  };

  const handlePasswordChange = (e) => {
    setNewPassword(e.target.value);
  };

  const handleResetPassword = async () => {
    try {        
      const response = await axios.post(`http://localhost:5000/reset-password/$${userId}/${token}`, {
        newPassword,
      });
          
      if (response.data.status === "Password Reset Successfully") {
        setMessage("Password reset successfully.");
        <div>
    <p>Password reset successfully.</p>
    <button onClick={() => navigate("/login")}>Go to Login</button>
    </div>
      } else {
        setMessage("Password reset failed.");
      }
    } catch (error) {
      console.error(error);
      setMessage("An error occurred during password reset.");
    }
  };

  return (
    <div>
      <h2>Password Reset</h2>
      <p>{message}</p>
      {message === "Token is valid. You can reset your password." && (
        <div>
          <input
            type="password"
            placeholder="New Password"
            value={newPassword}
            onChange={handlePasswordChange}
          />
          <button onClick={handleResetPassword}>Reset Password</button>
        </div>
      )}
    </div>
  );
};

export default PasswordResetForm;
