import {Box, Button} from "@mui/material";

const OnSubmitButton = ({handleSubmit}) => {
  return(
    <Box mt={2}>
      <Button variant={"contained"} onClick={handleSubmit}>Submit</Button>
    </Box>
  )
}
export default OnSubmitButton