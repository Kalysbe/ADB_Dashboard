import React from "react";
import { useParams } from "react-router-dom";
import ReactMarkDown from "react-markdown"
import BasicLayout from "../components/BasicLayout";
import axios from "../../../axios";

import { Post } from "../../../components/Post";


import Container from '@mui/material/Container';

function Basic()  {
  const [data , setData] = React.useState()
  const [isLoading , setLoading] = React.useState(true)
  const { id } = useParams()
  const params = useParams()

  React.useEffect(() => {
    axios.get(`/posts/${id}`).then((res) => {
      setData(res.data)
      setLoading(false)
    }).catch((err) => {
      console.warn(err)
      alert('Ошибка при получении статьи')
    })
  }, [])



  if(isLoading) {
    return <Post isLoading={isLoading} isFullPost/>
  }
  return (
    <BasicLayout>
    <Container>
      <Post
       _id={data._id}
       title={data.title}
       imageUrl={data.imageUrl ? `${process.env.REACT_APP_API_URL}${data.imageUrl}` : ''}
       user={data.user}
       createdAt={data.createdAt}
       viewsCount={data.viewsCount}
       commentsCount={3}
       tags={data.tags}
       isFullPost
      >
        <ReactMarkDown children={data.text}/>
      </Post>
      {/* <CommentsBlock
        items={[
          {
            user: {
              fullName: "Вася Пупкин",
              avatarUrl: "https://mui.com/static/images/avatar/1.jpg",
            },
            text: "Это тестовый комментарий 555555",
          },
          {
            user: {
              fullName: "Иван Иванов",
              avatarUrl: "https://mui.com/static/images/avatar/2.jpg",
            },
            text: "When displaying three lines or more, the avatar is not aligned at the top. You should set the prop to align the avatar at the top",
          },
        ]}
        isLoading={false}
      >
        <Index />
      </CommentsBlock> */}
    </Container>
    </BasicLayout>
  );
};

export default Basic
