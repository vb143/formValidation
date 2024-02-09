import Form from "../../components/forms/Form";
import {useState} from "react";
import OnSubmitButton from "../../components/buttons/OnSubmitButton";
import {Snackbar} from "@mui/material";
import {SnackbarOrigin} from "@mui/material/Snackbar/Snackbar";


const AddressForm = () => {
    const [formValues, setFormValues] = useState({});
    const [open, setOpen] = useState(false);

   const formStructure = [
       {
           index: 0,
           label: "Line 1",
           type: "text",
           id: "line1",
           grid: 12,
           placeholder: "required field",
           required: true,
       },
       {
           index: 1,
           label: "Line 2",
           type: "text",
           id: "line2",
           grid: 12,
           placeholder: "optional field",
           required: false,
       },
       {
           index: 2,
           label: "Country Code",
           type: "text",
           id: "code",
           grid: 2,
           required: true,
           placeholder: "required field",
       },
       {
           index: 3,
           label: "Country",
           type: "text",
           id: "country",
           grid: 6,
           required: true,
           placeholder: "required field",
       },
       {
           index: 4,
           label: "Postcode",
           type: "text",
           id: "passcode",
           grid: 4,
           required: true,
           placeholder: "required field",
       },
    ]


    const handleSubmit = (event) => {
        event.preventDefault();
        setOpen(true)
    }


    return(
    <div>
      <Form formStructure={formStructure} setFormValues={setFormValues} formValues={formValues} handleSubmit={handleSubmit}/>
        <Snackbar open={open} anchorOrigin={{vertical: 'top', horizontal: 'right'}} autoHideDuration={6000} onClose={()=>setOpen(false)} message="Form Submitted Successfully" />
    </div>
  )
}
export default AddressForm