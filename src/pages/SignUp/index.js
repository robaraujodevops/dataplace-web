import React, { useState, useEffect } from "react";
import { useForm, ErrorMessage } from "react-hook-form";
import api from "../../services/api";
import { customBackendErrors } from "../../helpers";
import { Helmet } from "react-helmet";
import { Link, useHistory } from "react-router-dom";

import { Form, Container, Section } from "./styles";

export default function SignUp() {
    const [username, setUsername] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [error, setError] = useState('')

    const { register, errors, handleSubmit } = useForm()
    const history = useHistory();

    const handleSingUp = async formData => {
        try{
            const { data } = await api.post( "/users", formData );
            
            if( data.name && data.name === "error" ){
                setError(customBackendErrors(data.code));
            } else {
                history.push("/");
            }

        } catch( err ) {
           setError(err.message);
        }
    }

    useEffect(() => {
        setError("");
    }, [username, email, password])

    return (
        <>
        <Helmet title="Dataplace - Admin - Signup" />
        <Container>
            {/*<a className="hiddenanchor" id="signup"></a>
            <a className="hiddenanchor" id="signin"></a>*/}

            <Container className="login_wrapper">
                <Container id="register" className="animate form registration_form">
                    <Section className="login_content">
                        <Form onSubmit={handleSubmit(handleSingUp)}>
                        <h1>DataPlace Admin</h1>
                        <Container>
                            <input 
                                type="text" 
                                className="form-control" 
                                required="" 
                                placeholder="Nome do Usuário"
                                name="username"
                                ref={register({required: true})}
                                onChange={(e) => setUsername(e.target.value)}
                            />
                            <ErrorMessage errors={errors} name="username">
                                {({ message }) => <p className="error">* Insira o nome de usuário</p>}
                            </ErrorMessage>
                        </Container>
                        <Container>
                            <input
                                className="form-control" 
                                required="" 
                                type="email"
                                placeholder="Endereço de e-mail"
                                name="email"
                                ref={register({required: true})}
                                onChange={(e) => setEmail(e.target.value)}
                            />
                            <ErrorMessage errors={errors} name="email">
                                {({ message }) => <p className="error">* Insira o e-mail</p>}
                            </ErrorMessage>
                        </Container>
                        <Container>
                            <input 
                                className="form-control"
                                required="" 
                                type="password"
                                placeholder="Senha"
                                name="password"
                                ref={register({required: true, pattern: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[#$^+=!*()@%&]).{8,10}$/})}
                                onChange={(e) => setPassword(e.target.value)}
                            />
                            {errors.password &&
                              errors.password.type === "required" &&
                              <p className="error">* Insira uma senha"</p>}
                            {errors.password &&
                              errors.password.type === "pattern" &&
                              <p className="error">* Sua senha deve conter de 8 a 10 caracteres minusculos, maiusculos, numéricos e especiais!!"</p>}
                        </Container>
                        <Container>
                            <button type="submit" className="btn btn-default submit">Submit</button>
                            {error && <p className="error">{error}</p>}
                        </Container>

                        <Container className="clearfix"></Container>
                        <Container className="separator">
                            <p className="change_link">Já possui conta ?
                            <Link to="/signin" className="to_register"> Acessar </Link>
                            </p>

                            <Container className="clearfix"></Container>
                            <br />

                            <Container>
                            <p>©2020 Todos os direitos reservados. DataPlace.com.br. Termos e Privacidade</p>
                            </Container>
                        </Container>
                        </Form>
                    </Section>
                </Container>
            </Container>
        </Container>
        </>
    )
}