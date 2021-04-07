import React, { createContext, useCallback, useContext, useState } from 'react';
import { toast } from 'react-toastify';
import api from '../services/api';

const FeedContext = createContext();

const FeedProvider = ({ children }) => {

    const [feeds, setFeeds] = useState([]);
    //const [page, setPage] = useState(0);
    const [totalFeeds, setTotalFeeds] = useState(null);
    //const [loading, setLoading] = useState(false);
    //const [message, setMessage] = useState(null);
    //const [error, setError] = useState(null);

    const getFeeds = useCallback(async (page = 0) => {
            try {
                //setError(null);
                //setLoading(true);
                const res = await api.get("/feeds", {
                    params: {
                        page,
                        pageSize: 12
                    }
                });

                if(res.status == 200){
                    setFeeds((state) =>[...state, ...res.data]);
                    setTotalFeeds(res.headers["x-total-count"]);
                }
            } catch (error) {
                console.log(error.response);
                //setError("Hubo un error en la carga de publicaciones");
            }finally {
                //setLoading(false);
            }
    },[])

    const deletePhotoAction = useCallback(async (photo) => {
        try {
            const response = await api.delete(`/photos/${photo.id}`, 
            {
               params: { 
                   key: photo.key
               } 
            });

            if(response.status == 200){
                setFeeds((state) => state.filter((item) => item.photo.id != photo.id ));
            }
        } catch (error) {
            toast.error('Ocurrio un error');
        }    
    },[])

    const deleteFollowAction = useCallback(async(idUser) => {
            try {
                const response = await api.post(`/follows/${idUser}`);
                if(response.status == 200){
                    setFeeds((state) => state.filter((item) => item.photo.user_id != idUser));
                }
            } catch (error) {
                toast.error('Ocurrio un error');
            }
    },[])

    const addFeed = useCallback((data) => {
        setFeeds((state) => [data, ...state]);
    },[]);

    return (
        <FeedContext.Provider value={{totalFeeds, getFeeds, feeds, deletePhotoAction, deleteFollowAction, addFeed, setFeeds}}>
            {children}
        </FeedContext.Provider>
    )
}

function useFeed(){
    const context = useContext(FeedContext);

    if(!context) throw new Error('useFeed must be used within an FeedProvider');

    return context;
}

export { FeedProvider, useFeed };