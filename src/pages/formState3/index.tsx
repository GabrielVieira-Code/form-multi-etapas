import { useNavigate, Link } from 'react-router-dom';
import * as C from './stiled';
import { useForm, FormActions } from '../../contexts/formContext';
import { Theme } from '../../components/theme';
import { Header } from '../../components/header';
import { ChangeEvent, useEffect } from 'react';

export const FormStep3 = () => {
    const history = useNavigate();
    const { state, dispatch } = useForm();

    useEffect(() => {
        if(state.name === '') {
            history('/');
        } else {
            dispatch({
                type: FormActions.setCurrentStep,
                payload: 3
            });
        }
    }, []);

    const handleNextStep = () => {
        if(state.email !== '' && state.github !== '') {
            console.log(state);
        } else {
            alert("Preencha os dados");
        }
    }

    const handleEmailChange = (e: ChangeEvent<HTMLInputElement>) => {
        dispatch({
            type: FormActions.setEmail,
            payload: e.target.value
        });
    }
    const handleGithubChange = (e: ChangeEvent<HTMLInputElement>) => {
        dispatch({
            type: FormActions.setGithub,
            payload: e.target.value
        });
    }

    return (
        <Theme>
            <Header></Header>
            <C.Container>
                <p>Passo 3/3</p>
                <h1>Legal , onde te achamos?</h1>
                <p>Preencha com seus contatos para conseguirmos entrar em contato.</p>

                <hr/>

                <label>
                    Qual seu e-mail?
                    <input
                        type="email"
                        value={state.email}
                        onChange={handleEmailChange}
                    />
                </label>

                <label>
                    Qual seu GitHub?
                    <input
                        type="url"
                        value={state.github}
                        onChange={handleGithubChange}
                    />
                </label>

                <Link to="/step2" className="backButton">Voltar</Link>
                <button onClick={handleNextStep}>Finalizar Cadastro</button>
            </C.Container>
            
        </Theme>
    );
}