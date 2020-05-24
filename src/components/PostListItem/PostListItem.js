import React from 'react';
import {Link} from 'react-router-dom';

import {
  CircularProgress,
  Card,
  CardContent,
  Grid,
  Typography,
  CardActions,
  Button,
  Box,
  makeStyles
} from "@material-ui/core";
import DeleteForeverIcon from "@material-ui/icons/DeleteForever";

const useStyles = makeStyles({
  delete: {
    cursor: 'pointer',
    justifySelf: 'right',
  },
  group: {
    display: 'grid',
    gridTemplateColumns: '50% 50%',
    justifyContent: 'space-between',
  }
})

const PostListItem = ({postList, loaded, loading, deletePost}) => {
  const classes = useStyles();

  if (!loaded || loading) return <CircularProgress color="secondary"/>
  if (!loaded || !postList.length) return <h2>There are no posts !</h2>
  return (
    <Grid container spacing={5}>
      <Grid item xs={12}>
        <Grid container justify="center" spacing={5}>
          {
            postList.map(({title, description, id}) => {
              return (
                <Grid key={id} lg={4} item>
                  <Card>
                    <CardContent>
                      <Typography align="center" color="secondary" variant="h5" component="h2">{title}</Typography>
                      <Box m={3}/>
                      <Typography>
                        {description.length > 100 ? `${description.substring(0, 100)}...` : description}
                      </Typography>
                    </CardContent>
                    <CardActions className={classes.group}>
                      <Link to={`post/${id}`}>
                        <Button variant="contained" color="primary">View detail</Button>
                      </Link>
                      <Box component="span" className={classes.delete} >
                        <DeleteForeverIcon
                          color="error"
                          fontSize="large"
                          onClick={() => deletePost(id)} />
                      </Box>
                    </CardActions>
                  </Card>
                </Grid>
              );
            })
          }
        </Grid>
      </Grid>
    </Grid>
  );
}

export default PostListItem;