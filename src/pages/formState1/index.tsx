import { useNavigate } from 'react-router-dom';
import * as C from './stiled';
// import { useForm, FormActions } from '../../contexts/FormContext';
import { Theme } from '../../components/theme';
import { ChangeEvent, useEffect } from 'react';
import {  useForm, FormActions } from "../../contexts/formContext";
import { Header } from '../../components/header';

export const FormStep1 = () => {
    const navigate = useNavigate();
    const { state, dispatch } = useForm();

    useEffect(() => {
        dispatch({
            type: FormActions.setCurrentStep,
            payload: 1
        });
    }, []);

    const handleNextStep = () => {
        if (state.name !== '') {
            navigate('/step2');
        } else {
            alert("Preencha os dados.");
        }
    }

    const handleNameChange = (e: ChangeEvent<HTMLInputElement>) => {
        dispatch({
            type: FormActions.setName,
            payload: e.target.value
        });
    }

    return (
        <Theme>
            <Header></Header>
            <C.Container>
                <p>Passo 1/3</p>
                <h1>Vamos começar com seu nome</h1>
                <p>Preencha o campo abaixo com seu nome completo.</p>
<p>{state.name}</p>
                <hr/>

                <label>
                    Seu nome completo
                    <input
                        type="text"
                        autoFocus
                        value={state.name} // Ative a linha para sincronizar o estado com o input
                        onChange={handleNameChange} // Ative a linha para lidar com as mudanças de entrada
                    />
                </label>

                <button onClick={handleNextStep}>Próximo</button>
            </C.Container>
        </Theme>
    );
}
