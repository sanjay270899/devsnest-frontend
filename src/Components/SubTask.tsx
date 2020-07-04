import React,{useEffect,useState} from 'react'
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

function SubTask({id}) {
    let token = localStorage.getItem("Token")
    const [subTask,setSubTask] = useState([{}])
    const fetchDetails =async ()=>{
        const res= await Axios.get("http://localhost:3000/api/tasks/id",{
          headers:{
            'Authorization':'Bearer'+' '+token
          }
        })
        const {data} =res;
        console.log(data)
        const SubTask = data.data.map((item:any)=>{
          const task = {
            id:item.id,
            text:item.text,
            link:item.link,
          }
        })
        setSubTask([...subTask,SubTask])
      }
      useEffect(() => {
        fetchDetails()
      }, [])
    return (
        <div>
          
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
        </div>
    )
}

export default SubTask







