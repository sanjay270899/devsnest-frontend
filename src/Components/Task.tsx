import React,{useEffect} from 'react'
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import Checkbox from '@material-ui/core/Checkbox';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Collapse from '@material-ui/core/Collapse';
import Axios from 'axios'
import Header from '../Components/Header'

import Typography from '@material-ui/core/Typography';

import { Grid } from '@material-ui/core';


function Task() {
  const [expanded, setExpanded] = React.useState(true)
  const [checked, setChecked] = React.useState(false);
  const handleExpandClick = () => {
    setExpanded(!expanded);
  }
  const handleChange = (event:any) => {
    setChecked(event.target.checked);
  };
  const header={
    'Authorization': `Bearer ${localStorage.getItem("Token")}`,
  }
  const fetchDetails =async ()=>{
    const {data}= await Axios.get("http://localhost:3000/api/tasks",{
      headers:header      
    }
    )
    console.log(data)
  }
  useEffect(() => {
    fetchDetails()
  }, [])


    return (
      <>
      <Header/>
      <div className="container">
      <Card  style={{boxShadow:' 4px 4px 8px 4px rgba(0,0,0,0.2)'}}>
        <Grid container  direction="row"
        justify="space-between"
        alignItems="flex-end">
          <Grid item >
          <CardContent>
          <Typography >
          <h2>Task Name</h2>
        </Typography>
      </CardContent>
          </Grid>
          <Grid item style={{alignSelf:"center",padding:"20px"}}>
         
            <Checkbox
                       
            aria-expanded={expanded}
            onClick={handleExpandClick}
            color="primary"
            inputProps={{ 'aria-label': 'secondary checkbox' }}
            />
          </Grid>
        </Grid>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
      <Grid container direction="row"
        justify="space-between"
        alignItems="flex-end">
          <Grid item md={6}>
          <CardContent>
          <Typography >
          <h4>SubTask Name</h4>

        </Typography>
        <Typography variant="body1" gutterBottom>
         Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos blanditiis tenetur
        unde suscipit, quam beatae rerum inventore consectetur, neque doloribus, 
      </Typography>
      </CardContent>
          </Grid>
          <Grid item style={{alignSelf:"center",padding:"20px"}}>
            <Checkbox
            onClick={handleChange}
        color="primary"
        inputProps={{ 'aria-label': 'secondary checkbox' }}
      />
          </Grid>
          </Grid>
      </Collapse>
    </Card>
    </div>
    </>
  );

}

export default Task;
