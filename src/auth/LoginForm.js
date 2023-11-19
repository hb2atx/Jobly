import React, { useState } from 'react';
import { Button, Form, Input, Label } from "reactstrap";
import './LoginForm.css';

const LoginForm = () => {

    const INITIAL_STATE = {
        username: "",
        password: ""
    }

    const [formData, setFormData] = useState(INITIAL_STATE)


    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(data => ({
            ...data,
            [name]: value
        }))
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        setFormData(INITIAL_STATE)  
    }

return (
    <Form className="LoginForm" onClick={handleSubmit}>
        <h2>Log In</h2>
        <div className="loginForm">
        <Label htmlFor="username">Username:</Label>
        <Input 
        type="text" 
        name="username" 
        id="username" 
        value={formData.username} 
        onChange={handleChange}
        />

        <Label htmlFor="password">Password</Label>
        <Input 
        type="text" 
        name="password" 
        id="password" 
        value={formData.password} 
        onChange={handleChange}
        />
        <Button color="secondary">Submit</Button>
        </div>
    </Form>
  )
}

export default LoginForm;
