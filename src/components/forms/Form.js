import {Autocomplete, Container, Grid, TextField} from "@mui/material";
import Header from "../layout/Header";
import {Countries} from "../countriesList/Countries";
import postalCodes from "postal-codes-js";
import OnSubmitButton from "../buttons/OnSubmitButton";

const Form = ({formStructure, formValues, setFormValues, handleSubmit}) => {

    const validateForm = (values) => {
        const errors = [];

        for (const field of formStructure) {
            if (!values[field.id]) {
                field.required && (errors[field.index] = `${field.label} is required`);
            }
        }
        return errors;
    };


    const handleCheckPasscode = (formValues) => {
        return  postalCodes.validate(formValues.code, formValues.passcode);
    }


    const handleChange = (event, value) => {
        value ? setFormValues({...formValues, code: value.code, country: value.name}):
            setFormValues({...formValues, [event.target.id]: event.target.value});
    }


    return (
        <Container maxWidth={false}>
            <Header/>
            <Grid container spacing={2}>
                {
                    formStructure.map((field, id) => (
                        <Grid item xs={field.grid} key={id}>
                            {field.id === "code" ?
                                // eslint-disable-next-line react/jsx-no-undef
                                <Autocomplete
                                    id={field.id}
                                    onChange={handleChange}
                                    options={Countries}
                                    getOptionLabel={(option) => option.code}
                                    renderInput={(params) => (
                                        <TextField
                                            {...params}
                                            id={field.line1}
                                            fullWidth
                                            label={field.label}
                                            variant="outlined"
                                            // onChange={(e) => this.onSearchTerm(e.target.value)}
                                        />
                                    )}
                                />
                                :
                                <TextField
                                    id={field.id}
                                    label={field.label}
                                    type={field.type}
                                    helperText={ field.id === 'passcode'? handleCheckPasscode(formValues) : (field.required && !formValues[field.id]) && "Required Field"}
                                    value={formValues[field.id]}
                                    required={field.required}
                                    placeholder={field.placeholder}
                                    variant="outlined"
                                    fullWidth
                                    onChange={handleChange}
                                />
                            }
                        </Grid>
                    ))
                }
            </Grid>

            <OnSubmitButton disabled={validateForm(formValues).length !== 0 || handleCheckPasscode(formValues) !== true} handleSubmit={handleSubmit}/>
        </Container>
    )

}
export default Form;