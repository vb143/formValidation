import Form from "./Form";
import {useState} from "react";
import OnSubmitButton from "./OnSubmitButton";
const postalCodes = require('postal-codes-js');


const AddressForm = () => {
    const [formValues, setFormValues] = useState({});

   const formStructure = [
       {
           label: "Line 1",
           type: "text",
           id: "line1",
           grid: 12
       },
       {
           label: "Line 2",
           type: "text",
           id: "line2",
           grid: 12
       },
       {
           label: "Country",
           type: "text",
           id: "country",
           grid: 6
       },
       {
           label: "Pincode",
           type: "number",
           id: "pincode",
           grid: 6
       },
    ]


    const handleChange = (event) => {
        setFormValues({...formValues, [event.target.id]: event.target.value});
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log(formValues);
    }


    const postcodeValidation = (postcode) => {

        if (validatePostcode(postcode)) {
            console.log('The postcode is valid.');
        } else {
            console.log('The postcode is invalid.');
        }
    }

    console.log(formValues);

    return(
    <div>
      <Form handleChange={handleChange} formStruture={formStructure}/>
      <OnSubmitButton handleSubmit={handleSubmit}/>
    </div>
  )
}
export default AddressForm