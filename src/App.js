import {useState} from "react";
import useForm from './hooks/useForm'
import TextField from './components/form/TextField'
import CheckBoxField from './components/form/CheckBoxField'
import Form from './components/form/Form'
import RadioButton from "./components/form/RadioButton";
import Paper from "./components/common/Paper";
import {isEmpty, isEmail, isValidPassword} from "./helpers/validations";

function App() {

    const initialFormValues = {
        firstName: '',
        lastName: '',
        email: '',
        password: '',
        hobbies: [],
        gender: '',
    }

    function validateForm(values) {
        const errors = {};

        if (isEmpty(values.firstName)) {
            errors.firstName = 'First name is required';
        }
        if (isEmpty(values.lastName)) {
            errors.lastName = 'Last name is required';
        }
        if (!isEmail(values.email)) {
            errors.email = 'Email is invalid';
        }
        if (!isValidPassword(values.password)) {
            errors.password = 'Password is invalid';
        }

        return errors;
    }

    const handleSubmit = (e) => {
        e.preventDefault()
    }
    const {
        formValues,
        formErrors,
        handleChange,
        handleBlur,
        handleCheckboxChange
    } = useForm(initialFormValues, validateForm)

    return (
        <div className="app">
            <h1>This my app</h1>
            <Paper>
                <Form onSubmit={handleSubmit}>
                    <TextField name="firstName" label="First Name" id="firstName" value={formValues.firstName}
                               onChange={handleChange} onBlur={handleBlur} error={formErrors.firstName}/>
                    <CheckBoxField value={formValues.hobbies} id="run" label="Correr" name="hobbies" value="Run"
                                   onCheckboxChange={handleCheckboxChange}/>
                    <CheckBoxField value={formValues.hobbies} id="dance" label="Bailar" name="hobbies" value="Dance"
                                   onCheckboxChange={handleCheckboxChange}/>
                    <CheckBoxField value={formValues.hobbies} id="sleep" label="Dormir" name="hobbies" value="Sleep"
                                   onCheckboxChange={handleCheckboxChange}/>
                    <TextField name="lastName" label="Last Name" id="lastName" value={formValues.lastName} error={formErrors.lastName}
                               onBlur={handleBlur} onChange={handleChange}/>

                    <RadioButton name="gender" value="Male" id="male" label="Hombre" onChange={handleChange}/>
                    <RadioButton name="gender" value="Female" id="female" label="Mujer" onChange={handleChange}/>
                </Form>
            </Paper>
        </div>
    );

}

export default App;
