import React, { useState, useRef, useCallback } from 'react';

import { Container, ImagePreview, MessagePreview, Body, Button, Button2, Div } from './styles';
import { useUpload } from '../../hooks/upload';

const Upload = () => {

    const inputFile = useRef(null);
    const inputBody = useRef(null);

    const { error, loading, uploadPhotoAction, resetValues } = useUpload();

    const [image, setImage] = useState('');
    const [body, setBody] = useState('');
    const [disabled, setDisabled] = useState(true);
     
    const handleUpload = useCallback((e) => {
        e.preventDefault();

        const dataImage = {
            file: inputFile.current.files[0],
            body
        };

        setDisabled(true);
        uploadPhotoAction(dataImage);
        
    }, [body, uploadPhotoAction]);

    const handleInputFile = useCallback((file) => {
        resetValues();
        //setBody('');
        if(file.target.files[0]){
            setImage(URL.createObjectURL(file.target.files[0]));
            setDisabled(false); //habilitar boton sin body
        }else{
            setImage('');
        }

        inputBody.current.focus();
    }, [resetValues]);

    const handleBody = useCallback((e) => {
        setBody(e.target.value);
        //body.trim().length > 0 ? setDisabled(false) : setDisabled(true); /*Que solo deje publicar si se a escrito en body */
    },[/*body*/]);

    return(
        <Container onSubmit={handleUpload} enctype="multipart/form-data">

            {image ? (
                <ImagePreview 
                src={image}
                title="image preview"
                onClick={() => inputFile.current.click()}
                /> 
            ): (
                <MessagePreview onClick={() => inputFile.current.click()}>
                    Seleccione su fotografia
                </MessagePreview>
            )}
           
            

            <input 
                ref={inputFile}
                type="file"
                onChange={handleInputFile}
                accept="image/*"
                style={{display: 'none'}}
            />

            <Body placeholder="Ponga alguna descripcion" value={body} onChange={handleBody} ref={inputBody}></Body>
        
            <Button type="submit" disabled={disabled} error={error}>
                {loading ? "Cargando..." : error ? "imagen muy grande" : "Publicar"}
            </Button>
            
        
        </Container>
    )
}

export default React.memo(Upload);