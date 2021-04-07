import React, { useCallback, useEffect, useState } from 'react';
import { FiMoreHorizontal } from 'react-icons/fi';
import { Link } from 'react-router-dom';
import { useFeed } from '../../hooks/feed';
import { useFollow } from '../../hooks/follow';


import { StyledModal, MoreOptions } from './styles';

 function ModalMoreOptions({ isAuthor, photo}) {

    const { deletePhotoAction, deleteFollowAction } = useFeed();
    const { removeFollow } = useFollow();

    const [isOpen, setIsOpen ] = useState(false);
    const [opacity, setOpacity] = useState(0); 

    const toggleModal = useCallback(() => {
            setIsOpen(!isOpen);
        },[isOpen])

    const afterOpen = useCallback(() => {
        setTimeout(() => {
            setOpacity(1);
        }, 100)
    },[])
    
    const beforeClose = useCallback(() => {
        return new Promise(resolve => {
            setOpacity(0);
            setTimeout(resolve, 200);
        })
    },[])

    const handleDelete = useCallback((photo) => {
        deletePhotoAction(photo);
        toggleModal();
    },[deletePhotoAction, toggleModal]);

    const handleFollow = useCallback((idUser) => {
        deleteFollowAction(idUser);
        removeFollow(idUser);
        toggleModal();
    },[deleteFollowAction, toggleModal]);

    return (
        <>
            <FiMoreHorizontal size={20} style={{cursor: 'pointer'}} onClick={toggleModal} />
            <StyledModal
            isOpen={isOpen}
            afterOpen={afterOpen}
            beforeClose={beforeClose}
            onBackgroundClick={toggleModal}
            onEscapeKeydown={toggleModal}
            opacity={opacity}
            backgroundProps={{opacity}}>

            {isAuthor ? (
                <MoreOptions>
                    <li>Ir a la publicacion</li>
                    <li className="red" onClick={() => handleDelete(photo)}>
                        Eliminar publicacion
                    </li>
                    <li onClick={toggleModal}>Cancelar</li>
                </MoreOptions>
            ): (
                <MoreOptions>
                    <li>
                        <Link to={`/photo/${photo.id}`}>Ir a publicacion</Link>
                    </li>
                    <li className="red" onClick={() => handleFollow(photo.user_id)}>
                        Dejar de seguir
                    </li>
                    <li onClick={toggleModal}>Cancelar</li>
                </MoreOptions>

            )}

            </StyledModal>
        </>
    )
}

export default React.memo(ModalMoreOptions);