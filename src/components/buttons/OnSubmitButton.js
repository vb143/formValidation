import {Box, Button} from "@mui/material";

const OnSubmitButton = ({disabled, handleSubmit}) => {

    return(
    <Box mt={2}>
      <Button disabled={disabled} variant={"contained"} onClick={handleSubmit}>Submit</Button>
    </Box>
  )
}
export default OnSubmitButton