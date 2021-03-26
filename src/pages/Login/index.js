import React, { useState, useEffect, useContext } from "react";
import { useForm, ErrorMessage } from "react-hook-form";
import api from "../../services/api";
import { login } from "../../services/auth"
import { Helmet } from "react-helmet";
import { customBackendErrors } from "../../helpers";
import { Link, useHistory, Redirect } from "react-router-dom";
import { RootContext } from "../../contexts/root";

import { Form, Container, Section, ErrorInput } from "./styles";

export default function Login(props) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { userContext } = useContext(RootContext);
  const { register, errors, handleSubmit, setError, clearError } = useForm({reValidateMode: 'onSubmit'})
  const history = useHistory();
  
  if(userContext.auth) history.push("/admin/analytics")

  const handleSingIn = async formData => {
    try{
      const { data } = await api.post("/login", formData, {
        validateStatus: status => status < 500
      }).catch(error => console.log(error.toJSON()));
      
      if(data.errorType){
        setError("email", data.errorType, customBackendErrors(data.errorType));
        return false
      }
      
      if(data.access_token 
        && data.access_token.type === "bearer"){
        login(data.access_token.token)
        userContext.setAuth(true);
        userContext.setUser(data.user);

        return (<Redirect to={"/admin/analytics"}></Redirect>)
      }
      
    }catch(err){
      setError(err.message);
    }
  }
    
  return (
    <>
      <Helmet title="Dataplace - Admin - SignIn" />
    
      <Container className="login_wrapper ">
        <Container className="animate form login_form">
          <Section className="login_content">
            <Form onSubmit={handleSubmit(handleSingIn)}>
              <h1>DataPlace Admin</h1>
              <Container>
                <input 
                  type="text"
                  className="form-control"
                  placeholder="E-mail do Usuário"
                  required=""
                  name="email"
                  value={email}
                  ref={register({
                    required: "* Insira o nome de usuário",
                    pattern: {
                      value: /\S+@\S+\.\S+/,
                      message: '* E-mail inválido',
                    }
                  })}
                  onChange={(e) => {clearError("email"); setEmail(e.target.value)}}
                />
                <ErrorMessage errors={errors} name="email" as={<ErrorInput />} />

              </Container>
              <Container>
                <input 
                  type="password"
                  className="form-control"
                  placeholder="Senha do Usuário"
                  name="password"
                  value={password}
                  ref={register({
                    required: "* Insira uma senha", 
                    pattern: {
                      value: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[#$^+=!*()@%&]).{8,10}$/,
                      message: "* Sua senha deve conter de 8 a 10 caracteres minusculos, maiusculos, numéricos e especiais"
                    }
                  })}
                  onChange={(e) => setPassword(e.target.value)}
                />
                <ErrorMessage errors={errors} name="password" as={<ErrorInput />} />
              </Container>
              <Container>
                <button type="submit" className="btn btn-default submit">Log in</button>
                <a className="reset_pass" href="#">Lost your password?</a>
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
    </>
  )
}