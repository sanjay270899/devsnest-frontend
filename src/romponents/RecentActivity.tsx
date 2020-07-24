import React from 'react';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
const RecentActivity = () => {
  return (
    <Card>
      <CardContent>
        <Typography color="textSecondary" gutterBottom>
          Recent Activity
        </Typography>
      </CardContent>
      {/*  */}
      <CardActions>
        <Button size="small">Workdone</Button>
      </CardActions>
    </Card>
  );
};
export default RecentActivity;
