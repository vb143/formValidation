import {Box, Typography} from "@mui/material";

const Header = () => {

    return(
        <div>
            <Box display={"flex"} flexDirection={"column"} mt={5} mb={5}>
                <Typography variant={"h3"}>
                    Welcome
                </Typography>
                <Typography variant={'h5'} mt={2}>
                    Please fill out the form
                </Typography>
            </Box>
        </div>
    )

}
export default Header;