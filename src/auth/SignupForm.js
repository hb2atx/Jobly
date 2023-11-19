import React, { useState } from 'react';
import { Form, FormGroup, Label, Input, Button} from "reactstrap";
import './SignupForm.css'

const SignupForm = () => {
    
    const INITIAL_STATE = {
        username: "",
        password: "",
        firstName: "",
        lastName: "",
        email: ""
    }
    
    const [formData, setFormData] = useState(INITIAL_STATE);
    
    const handleChange = (e) => {
        const { name, value} = e.target;
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
    <div className="signupBody">
    <Form className="SignupForm" onSubmit={handleSubmit}>
        <h2>Signup</h2>
    <FormGroup>
        <Label htmlFor="username">Username:</Label>
        <Input type="text" name="username" id="username" value={formData.username} onChange={handleChange} />
    </FormGroup>
    <FormGroup>
        <Label htmlFor="password">Password</Label>  
        <Input type="text" name="password" id="password" value={formData.password} onChange={handleChange} />
    </FormGroup>
    <FormGroup>
        <Label htmlFor="firstName">First Name</Label>  
        <Input type="text" name="firstName" id="firstName" value={formData.firstName} onChange={handleChange} />
    </FormGroup>
    <FormGroup>
        <Label htmlFor="lastName">Last Name</Label>  
        <Input type="text" name="lastName" id="lastName" value={formData.lastName} onChange={handleChange} />
    </FormGroup>
    <FormGroup>
        <Label htmlFor="email">Email</Label>  
        <Input type="text" name="email" id="email" value={formData.email} onChange={handleChange} />
    </FormGroup>
    <Button color="secondary">Submit</Button>
    </Form>
    </div>
  )
}

export default SignupForm;
