import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import {Button, Link} from '@material-ui/core';
//import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    margin:10,
    boxShadow:15,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
}));

export default function NewsCard({newsItem}) {
  const classes = useStyles();

  const fulldate = new Date(newsItem.publishedAt); // Sat  Jan 09 2021  17:45:30  GMT+0530
 var date = fulldate.toString().split(" "); // ["Sat", "Jan", "09", "2021", "17:45:30", "GMT+0530"]
   const hour = parseInt(date[4].substring(0, 2)); //
  const time = hour > 12 ? true : false;

 

  return (
    
    <div className={classes.root}>
      <Grid container spacing={3}>
        
        <Grid item xs={12}>
          <Paper className={classes.paper}>

          <Card className={classes.root}>
        <CardActionArea>
        <CardMedia
        alt={newsItem.title}
        image={
          newsItem.urlToImage
            ? newsItem.urlToImage
            : "http://www.aaru.edu.jo/websites/aaru2/wp-content/plugins/learnpress/assets/images/no-image.png?Mobile=1&Source=%2F%5Flayouts%2Fmobile%2Fdispform%2Easpx%3FList%3D78b536db%252De7c7%252D45d9%252Da661%252Ddb2a2aa2fbaf%26View%3D6efc759a%252D0646%252D433c%252Dab6e%252D2f027ffe0799%26RootFolder%3D%252Fwebsites%252Faaru2%252Fwp%252Dcontent%252Fplugins%252Flearnpress%252Fassets%252Fimages%26ID%3D4786%26CurrentPage%3D1"
        }
          component="img"
          // alt="Contemplative Reptile"
          height="200"
          // image={items.urlToImage}
          // title="Contemplative Reptile"
        />
        <CardContent>
          <Typography gutterBottom variant="h4" component="h2">
            {newsItem.title}
          </Typography>
          <span className="author">
          <Link href={newsItem.url} target="__blank">
              <b>short </b>
            </Link>{" "}
            <span className="muted">
               {" "}
               by {newsItem.author ? newsItem.author : "unknown"} /{" "}
             {time
                ? `${hour - 12}:${date[4].substring(3, 5)} pm`
              : `${hour}:${date[4].substring(3, 5)} am`}{" "}
            on {date[2]} {date[1]} {date[3]}, {date[0]}
            </span>
         </span>
          

          
          <Typography variant="h6" color="textSecondary" component="p">
            {newsItem.description}
          </Typography>
          <span className="readmore">
            read more at{" "}
            <Link href={newsItem.url} target="__blank" className="source">
             <b>{newsItem.source.name}</b>
             </Link>
         </span>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary">
          Share
        </Button>
        <Button size="small" color="primary" type="submit" href={newsItem.url}>
         Read More
        </Button>
      </CardActions>
    </Card>

          </Paper>
        </Grid>
        <br></br>
        {/* <Grid item xs={12} sm={6}>
          <Paper className={classes.paper}>xs=12 sm=6</Paper>
        </Grid> */}
        
      </Grid>
    </div>
     
  );
}