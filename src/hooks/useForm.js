import {useState} from "react";
import {isEmpty} from "../helpers/validations";

const useForm = (initialValues, validateForm) => {

    const [formValues, setFormValues] = useState(initialValues);
    const [formErrors, setFormErrors] = useState({});

    const handleChange = (e) => {
        const {name, value} = e.target;
        setFormValues({
            ...formValues,
            [name]: value
        });
    }

    const handleSelectChange = (e) => {
        const {name, value} = e.target;
        setFormValues({
            ...formValues,
            [name]: value
        });
    }

    const handleCheckboxChange = (e) => {
        const {name, value} = e.target;
        const data = {...formValues}
        if (e.target.checked) {
            if (Array.isArray(data[name])) {
                const exists = data[name].indexOf(value)
                if (exists === -1) {
                    data[name].push(value)
                }
            } else {
                data[name] = true
            }
            setFormValues(data)
        } else {
            const index = data[name].indexOf(value)
            if (index !== -1) {
                data[name].splice(index, 1)
                setFormValues(data)
            }
        }

    }

    const handleBlur = (e) => {
        handleChange(e);
        setFormErrors(validateForm(formValues));
    }

    console.log(formValues)

    return {
        formValues,
        formErrors,
        handleBlur,
        handleChange,
        handleSelectChange,
        handleCheckboxChange,
    }

}

export default useForm;
