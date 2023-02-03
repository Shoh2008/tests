import React from "react";
import { useNavigate } from "react-router-dom";
import { Button, Input } from "../../style";
import { Style, Box } from "./style";

function Login({ user, setUser }) {
  const navigate = useNavigate();

  function submit() {
    if (user.name && user.email && user.lastname) {
      navigate("/");
    }
  }

  return (
    <Style>
      <Box>
        <h2>Login</h2>
        <Input
          placeholder="Ism"
          onChange={(e) => setUser((p) => ({ ...p, name: e.target.value }))}
        />
        <Input
          placeholder="Email"
          onChange={(e) => setUser((p) => ({ ...p, email: e.target.value }))}
        />
        <Input
          placeholder="Familiya"
          onChange={(e) => setUser((p) => ({ ...p, lastname: e.target.value }))}
        />
        <Button onClick={submit}>Kirish</Button>
      </Box>
    </Style>
  );
}

export default Login;
