import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';

// images
// import SnapVDILogo from 'assets/img/SnapVDI.png';
import ScmLogo from 'assets/img/scmeLogin.png';

const styles = {
  card: {
    maxWidth: 345,
  },
  media: {
    // ⚠️ object-fit is not supported by IE 11.
    //objectFit: 'cover',
    // padding: '30px 70px 30px 70px',
    margin: 0, 
  },
};

function AboutSnapVDICard(props) {
  const { classes/*, handleShare, handleKnowMore*/ } = props;
  return (
    <Card className={classes.card}>
      <div>
        <CardMedia
          component="img"
          alt="SCM enterprise"
          className={classes.media}
          // height="154"
          // width="207"
          // style={{width: '207px', height: '154px'}}
          image={ScmLogo}
          title="SCM enterprise"
        />
        <CardContent>
          {/* <Typography gutterBottom variant="h5" component="h2">
          SnapVDI-Enterprise
          </Typography> */}
          <Typography component="p">
          Manage thousands of devices with ease.  Generate customised reports and much more.
          </Typography>
        </CardContent>
      </div>
      <CardActions>
        {/*<Button onClick={handleShare} size="small" color="primary">
          Share
        </Button>
        <Button onClick={handleKnowMore} size="small" color="primary">
          Know More
  </Button>*/}
      </CardActions>
    </Card>
  );
}

AboutSnapVDICard.propTypes = {
  classes: PropTypes.object.isRequired,
  handleShare: PropTypes.func,
  handleKnowMore: PropTypes.func
};

export default withStyles(styles)(AboutSnapVDICard);