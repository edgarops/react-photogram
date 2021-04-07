import React, { useCallback, useEffect, useState } from 'react';
import { FiUpload } from 'react-icons/fi';

import { StyledModal, Button, Div } from './styles';
import Upload from '../Upload';
import { useUpload } from '../../hooks/upload';
import { useFeed } from '../../hooks/feed';

const ModalUploadPhoto = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [opacity, setOpacity] = useState(0);

    const { data, resetValues } = useUpload()
    const { addFeed } = useFeed();

    const toggleModal = useCallback(() => {
        setIsOpen(!isOpen)
    }, [isOpen])

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

    useEffect(() => {
        if(data){
            toggleModal();
            addFeed(data);
            resetValues();
        }
    }, [data, resetValues, toggleModal])

    return(
        <>
        <FiUpload size={25} onClick={toggleModal}  />

        <StyledModal
            isOpen={isOpen}
            afterOpen={afterOpen}
            beforeClose={beforeClose}
            onBackgroundClick={toggleModal}
            onEscapeKeydown={toggleModal}
            opacity={opacity}
            backgroundProps={{opacity}}
            
        >
            <Div>
            <Upload />
            <Button onClick={toggleModal}>Cerrar</Button></Div>
        </StyledModal>
        </>

    )
}

export default ModalUploadPhoto;