import React, { useRef, useCallback } from 'react';
import { useHistory } from 'react-router-dom';
import { Link } from 'react-router-dom';
import * as Yup from 'yup';
import { toast } from 'react-toastify';
import api from '../../services/api';

import getValidationErrors from '../../utils/getValidationErrors';

import logo from '../../assets/logo.svg';

import Input from '../../components/Input';

import { Container, FromContainer, Form, Footer } from './styles';
import { useAuth } from '../../hooks/auth';

const SignIn = () => {
    const history = useHistory();
    
    const formRef = useRef(null);

    const { signIn } = useAuth();

    const handleSubmit = useCallback( async (data) => {
        try {
            formRef.current.setErrors({});

            const schema = Yup.object().shape({
                username: Yup.string().required('Username obligatorio'),
                password: Yup.string().required('Password obligatorio'),
            })

            await schema.validate(data, {abortEarly: false});

            //console.log(data);

            /*const response = */
            //await api.post('/auth', data);

            signIn({password: data.password, username: data.username});

            //console.log(response);

            //toast.success('Te registraste con exito');

            history.push('/');

        } catch (error) {
            if(error instanceof Yup.ValidationError){
                const errors = getValidationErrors(error);
                formRef.current.setErrors(errors);
                return;
            }
            toast.error(error.response.data.message);
        }
    },[history, signIn])

    return (
        <Container>

            <FromContainer>
                <Form ref={formRef} onSubmit={handleSubmit}>
                    <img src={logo} alt="photogram" />
                    <span>Inicia Sesion para ver fotos y videos de tus amigos</span>

                    <hr />

                    <Input name="username" placeholder="Escoja algun usuario" />
                    <Input type="password" name="password" placeholder="Ingrese alguna contraseña" />

                    <button type="submit">Ingresar</button>

                    <hr />

                    <span className="footer">
                        Mira lo que tus amigos tienen preparado para ti
                    </span>

                </Form>

                <Footer>
                    <p>
                        No tienes una cuenta? <Link to="signup">Registrarme</Link>
                    </p>
                </Footer>
            </FromContainer>
        </Container>
    )
}

export default SignIn;