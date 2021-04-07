import React, { useEffect, useState } from 'react'

import TimeAgo from 'react-timeago';
import spanishString from 'react-timeago/lib/language-strings/es';
import buildFormatter from 'react-timeago/lib/formatters/buildFormatter';

import Layout from '../Layout';

import Profile from '../../components/Profile';
import api from '../../services/api';

import { Container, ContainerPhoto, ContainerPost, Img, HeaderPost, ContainerComments, TimeStyle, ContainerOptions, ContainerComment } from './styles';
import { useParams } from 'react-router-dom';

const formatter = buildFormatter(spanishString);

function Post() {

    const { photo_id } = useParams();

    const [post, setPost] = useState(null);
    const [comments, setComments] = useState([]);
    const [isLiked, setIsLiked] = useState(false);
    const [isAuthor, setIsAuthor] = useState(false);

    useEffect(() => {
        async function getPost(params) {
            const response = await api.get(`/photos/${photo_id}`);

            const { isAuthor, isLiked, photo } = response.data;
            setPost(photo);
            setComments(photo.getComments);
            setIsLiked(isLiked);
            setIsAuthor(isAuthor);
            //console.log(response);
        }
        getPost();
    },[photo_id])

    if(!post){
        return(
            <Container>
                <p>Cargando....</p>
            </Container>
        )
    }else{
        return (
            <Layout>
                <Container>
                    <ContainerPhoto>
                        <Img src={post.photo_url} alt={post.body} />
                    </ContainerPhoto>

                    <ContainerPost>
                        <HeaderPost>
                            <div className="div">
                                <Profile 
                                    img={post.uploadedBy.avatar_url}
                                    username={post.uploadedBy.username}
                                
                                /> 
                            </div>
                            <p>{post.body}</p>
                        </HeaderPost>
                        <ContainerComments>
                            {comments.length > 0 ? comments.map((comment)=> (
                                <div  key={comment.id} style={{marginBottom: '10px'}}>
                                    <div className="div2">
                                        <Profile 
                                            img={comment.postedBy.avatar_url}
                                            username={comment.postedBy.username}
                                        />
                                    </div>

                                    <p style={{margin: '5px 0'}}>{comment.body}</p>

                                    <TimeStyle>
                                        <TimeAgo 
                                            date={`${comment.createdAt}`}
                                            formatter={formatter}
                                        />
                                    </TimeStyle>
                                </div>
                            )) : <p>No hay comentarios para mostrar</p> }
                        </ContainerComments>

                        <ContainerOptions>
                            <span>{post.likesCount} Me gustas</span>
                            <div>{/* Aqui el boton de like */}</div>
                        </ContainerOptions>

                        <ContainerComment>{/* La seccion de comentarios */}</ContainerComment>
                    </ContainerPost>
                </Container>
            </Layout>
            
        )
    }

    
}

export default Post;