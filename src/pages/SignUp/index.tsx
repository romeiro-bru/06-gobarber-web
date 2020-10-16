import React from 'react';
import { FiArrowLeft, FiMail, FiLock, FiUser } from 'react-icons/fi';
import { Form } from '@unform/web';
import * as Yup from 'yup';

import logoImg from '../../assets/logo.svg';
import { Container, Content, Background } from './styles';

import Input from '../../components/Input';
import Button from '../../components/Button';

const SignUp: React.FC = () => {

    function handleSubmit(data: object): void {
        try {
            const schema = Yup.object().shape({
                name: Yup.string().required(),
                email: '',
                password: ''
            })
        } catch (err) {

        }
    }

    return (
        <Container>
        <Background />
        <Content>
            <img src={logoImg} alt="GoBarber" />

            <Form onSubmit={handleSubmit}>
                <h1>Faça seu cadastro</h1>
                <Input name="name" icon={FiUser} placeholder="Nome" />
                <Input name="email" icon={FiMail} placeholder="E-mail" />


                <Input name="password" icon={FiLock} type="password" placeholder="Senha" />
                <Button type="submit">Cadastrar</Button>
            </Form>
            <a href="login">
                <FiArrowLeft />
                Voltar para logon
            </a>
        </Content>
    </Container>
    )
};
 export default SignUp;