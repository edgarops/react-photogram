import React, { useCallback, useEffect, useMemo, useState } from 'react';
import { Container, DescriptionContainer, ImageProfile, Username, Button, ButtonFollow, CountsContainer, Description, ContainerPhotos, Photo } from '../Profile/styles';
import { Link, useParams } from 'react-router-dom';

import avatar from '../../assets/avatar.png';
import Layout from '../Layout';
import api from '../../services/api';
import { useFeed } from '../../hooks/feed';


 function Profile() {

    const { username} = useParams();

    const { deleteFollowAction } = useFeed();

    const [loading, setLoading] = useState(false);
    
    const [user, setUser] = useState(null);
    const [photos, setPhotos] = useState([]);
    const [isFollow, setIsFollow] = useState(false);
    const [isProfile, setIsProfile] = useState(false);
    const [count, setCount] = useState(null);

    const [countfollows, setCountFollows] = useState(false);
    

    useEffect(() => {
       
        async function getProfile() {
        const response = await api.get(`/users/${username}`, {
            params: {
                page: 0,
                pageSize: 12,
            }
        });
        const { isFollow: isfollowin, isProfile: isprofile, count_followers, count_follows, count_photos, user } = response.data;
        setIsFollow(isfollowin);
        setIsProfile(isprofile);
        setCountFollows({count_followers});
        setCount({
            count_followers,
            count_follows,
            count_photos,
        })
        setUser(user);
        setPhotos(user.photoUploads);
        //console.log(response);
        }

        getProfile();
       
    },[username]);
    
    const loadingMemo = useMemo(() => {
        return user && user.id ? false : true;  
    },[user]);

    const handleFollowButton = useCallback(async(id) => {
        try {
            setLoading(true);
            deleteFollowAction(id);
            setIsFollow(!isFollow);
            //setCount(false);
            
            
        } catch (error) {
            console.log(error);
        }finally{
            setLoading(false);
        }
    },[deleteFollowAction, isFollow]);

    if(loadingMemo){
        return <p>Cargando...</p>
    }

    return (
        <Layout>
            <Container>
                <DescriptionContainer>
                    <ImageProfile src={user.avatar_url || avatar} alt={user.name} />

                    <div>
                        <Username>{user.username}</Username>

                        {isProfile ? (
                            <Button>Editar Perfil</Button>
                        ): isFollow ? (
                            <ButtonFollow
                                onClick={() => handleFollowButton(user.id)}
                                disabled={loading ? true : false}
                            >
                                {loading ? "Cargando ...." : "Siguiendo"}
                            </ButtonFollow>
                        ): (
                            <ButtonFollow
                                onClick={() => handleFollowButton(user.id)}
                                disabled={loading ? true : false}
                            >
                                {loading ? "Cargando ...." : "Seguir"}
                            </ButtonFollow>
                        )}

                        <CountsContainer>
                            <span>{count.count_photos} publicaciones</span>
                            <span>{count.count_followers} seguidores</span>
                            <span>{count.count_follows} seguidos</span>
                        </CountsContainer>
                    </div>

                        <Description>
                            <p>{user.name}</p>
                            <span>{user.bio}</span>
                        </Description>
                    </DescriptionContainer>

                    <ContainerPhotos>
                        {photos.length > 0 && photos.map((photo) => (
                            <Link key={photo.id} to={`/photo/${photo.id}`}>
                                <Photo src={photo.photo_url} alt={photo.body} />
                            </Link>
                        ))}
                    </ContainerPhotos>
            </Container>
        </Layout>
    )
}

export default Profile;