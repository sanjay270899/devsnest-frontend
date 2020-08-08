import React from 'react';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const GbuCard = () => {
  return (
    <Card>
      <CardContent>
        <Typography variant="h6" gutterBottom style={{ fontWeight: 'bold' }}>
          Good
        </Typography>
        <Typography variant="body2" component="p">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aliquam,
          minus molestias officiis odio modi ab. Illo rem, rerum hic voluptatum
          libero esse repellat sunt, excepturi ipsam minus quam, recusandae
          aliquam.
        </Typography>
        <Typography variant="h6" gutterBottom style={{ fontWeight: 'bold' }}>
          Bad
        </Typography>
        <Typography variant="body2" component="p">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Commodi,
          dolorum nihil impedit quisquam nesciunt recusandae omnis, vero hic
          accusamus deserunt optio earum sunt at quasi exercitationem culpa
          reiciendis quo ipsa?
        </Typography>
        <Typography variant="h6" gutterBottom style={{ fontWeight: 'bold' }}>
          Ugly
        </Typography>
        <Typography variant="body2" component="p">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Commodi,
          dolorum nihil impedit quisquam nesciunt recusandae omnis, vero hic
          accusamus deserunt optio earum sunt at quasi exercitationem culpa
          reiciendis quo ipsa?
        </Typography>
      </CardContent>
    </Card>
  );
};
export default GbuCard;
