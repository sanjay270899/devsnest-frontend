import React from 'react'
import { Grid, Container } from '@material-ui/core'
import CurriculumCard from './CurriculumCard'

function Curriculum() {
    return (
        <Container className="container">
           <Grid container spacing={2} >
               <Grid item md={6} >
                    <CurriculumCard/>
               </Grid>
               <Grid item md={6}>
                   <CurriculumCard/>               
               </Grid>
               <Grid item md={12}>
                   <CurriculumCard/> 
               </Grid>
           </Grid>
        </Container>
    )
}

export default Curriculum
