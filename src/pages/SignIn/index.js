import React, { useState, useEffect } from "react";
import { useForm, ErrorMessage } from "react-hook-form";
import api from "../../services/api";
import { login } from "../../services/auth"

import { Head, customBackendErrors } from "../../helpers";
import { Link, useHistory } from "react-router-dom";

import { Form, Container, Section } from "./styles";

export default function SignIn() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('')
    const { register, errors, handleSubmit } = useForm()
    const history = useHistory();

    const handleSingIn = async formData => {
        try{
            const { data } = await api.post("/sessions", formData);
            console.log(data)
            if(data.name && data.name === "error" ){
                setError(customBackendErrors(data.code));
            }if(data.token && data.type === "bearer"){
                login(data.token)
                history.push("/admin");
            }
            else{
                history.push("/signin");
            }
        }catch(err){
           setError(err.message);
        }
    }

    useEffect(() => {
        setError("");
    }, [username, password])

    return (
        <>
        <Head title="Dataplace - Admin - SignIn" />
        <Container>
            {/*<a className="hiddenanchor" id="signup"></a>
            <a className="hiddenanchor" id="signin"></a>*/}

            <Container className="login_wrapper">
                <Container className="animate form login_form">
                    <Section className="login_content">
                        <Form onSubmit={handleSubmit(handleSingIn)}>
                        {error && <p>{error}</p>}
                            <h1>DataPlace Admin</h1>
                            <Container>
                                <input 
                                    type="text"
                                    className="form-control"
                                    placeholder="E-mail do Usuário"
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
                                    type="password"
                                    className="form-control"
                                    placeholder="Senha do Usuário"
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
                                <button type="submit" className="btn btn-default submit">Log in</button>
                                {/*<a className="reset_pass" href="#">Lost your password?</a>*/}
                            </Container>

                            <Container className="clearfix"></Container>

                            <Container className="separator">
                                <p className="change_link">Novo usuário?
                                <Link className="to_register" to="/signup"> Criar Conta </Link>
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