import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import BasicLayout from "../components/BasicLayout";
import Grid from '@mui/material/Grid';


import { Post } from 'components/Post';
import { fetchPosts, fetchTags } from '../../../redux/slices/post';
import DataTable from "examples/Tables/DataTable";
import { useMediaQuery } from '@mui/material';
import Typography from '@mui/material/Typography';
import { Container } from '@mui/material';

function Basic (props) {
  const isMobile = useMediaQuery('(max-width:600px)');
  const dispatch = useDispatch()
  const userData = useSelector(state => state.auth.data)
  const { posts, tags } = useSelector(state => state.posts)

  const isPostsLoading = posts.status === 'loading'
  const isTagsLoading = tags.status === 'loading'

  React.useEffect(() => {
    dispatch(fetchPosts())
    dispatch(fetchTags())
  }, [])


 

  return (
    <BasicLayout>
  
      <Container>
        <Typography variant={isMobile ? 'h5' : 'h4'} gutterBottom>
          Статьи
        </Typography>
  
        <Grid container spacing={2}>
          {(isPostsLoading ? [...Array(5)] : posts.items).map((obj, index) =>
            isPostsLoading ? (
              <Grid sx={{ pl: 0 }} xs={12} item>
                <Post key={index} isLoading={true} />
              </Grid>
            ) : (
              <Grid sm={12} md={4} item>
                <Post
                  _id={obj._id}
                  title={obj.title}
                  imageUrl={obj.imageUrl ? `${process.env.REACT_APP_API_URL}${obj.imageUrl}` : ''}
                  user={obj.user}
                  createdAt={obj.createdAt}
                  viewsCount={obj.viewsCount}
                  commentsCount={3}
                  tags={obj.tags}
                  isEditable={userData?._id == obj.user._id}
                  first={index == 0 ? true : false}
                />
              </Grid>
            ))}

      

        </Grid>
        
      </Container>
    </BasicLayout>
  );
};

export default Basic;