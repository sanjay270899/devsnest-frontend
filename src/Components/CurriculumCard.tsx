import React from 'react'
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { Grid } from '@material-ui/core';
import {Redirect} from 'react-router-dom';




function CurriculumCard({key,name,duration}) {
  // const handleClick=()=>{
  //   <Redirect to=`/task/${key}`/>
  // }
    return (
     
    <Card className="card">
        <Grid container>
      <Grid item md={6}>
      <CardMedia
          image="#"
          title="Contemplative Reptile"
        />
      </Grid>
        <Grid item md={6}>
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {name}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Provident necessitatibus corporis facere temporibus rem animi, doloribus sint? Praesentium, itaque autem nobis amet dolorem, minima expedita, est explicabo quae eos voluptatibus.
          </Typography>
        </CardContent>
        </Grid>
     </Grid>
     <Grid container>
         <Grid item md={6}>
            <CardContent>
                <Typography gutterBottom  component="h6">
                    Estimated Duration : {duration} 
                </Typography>
            </CardContent>
         </Grid>
         <Grid item md={6}>
            <CardActions>
            <Button variant="contained" color="primary" onClick={(key)=>(<Redirect to="/task:{key}" />)}>
                Tasks
            </Button>
            </CardActions>
         </Grid>
     
     </Grid>
    </Card>
        
    )
}

export default CurriculumCard
