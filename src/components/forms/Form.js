import {Container, Grid, TextField} from "@mui/material";
import Header from "../layout/Header";

const Form = ({handleChange, formStruture}) => {

    return (
        <Container maxWidth={false}>
            <Header/>
            <Grid container spacing={2}>
                {
                    formStruture.map((field) => (
                        <Grid item xs={field.grid}>
                            <TextField
                                id={field.line1}
                                label= {field.label}
                                type={field.type}
                                variant="outlined"
                                fullWidth
                                onChange={handleChange}
                            />
                        </Grid>
                    ))
                }
            </Grid>
        </Container>
    )

}
export default Form;