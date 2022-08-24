import { AppBar, Link, Stack, styled, Typography } from '@mui/material'
import React from 'react'

const NavBar = () => {

    const StyledToolBar = styled('div')({
        display: "flex",
        justifyContent: "center",
        padding: "16px"
    })

    return (
        <AppBar position='static' style={{ backgroundColor: "white" }} elevation={4}>
            <StyledToolBar>
                <Stack display="flex" directio="column" justifyContent="center" alignItems="center" spacing={-1}>


                    <Link href='https://technext.github.io/medic-care/' sx={{ textDecoration: "none" }}>
                        <Typography variant="h6" sx={{
                            fontWeight: "bold", fontSize: "1.5rem", fontFamily: "sans-serif", textAlign: "center", color: "#247cff", padding: 0, margin: 0
                        }}>
                            Medic Care
                        </Typography>
                    </Link>

                    <Link href="https://technext.github.io/medic-care/" sx={{ textDecoration: "none" }}>
                        <Typography paragraph sx={{
                            color: "gray", textAlign: "center", fontWeight: "bold", fontFamily: "sans-serif", fontSize: "0.75rem", padding: 0, margin: 0
                        }}>
                            Health Specialist
                        </Typography>
                    </Link>

                </Stack>
            </StyledToolBar>
        </AppBar>
    )
}

export default NavBar