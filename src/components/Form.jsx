import React from 'react'
import styled from '@emotion/styled'
import useSelectMonedas from '../hooks/useSelectMonedas'

const [ SelectMonedas ] = useSelectMonedas();

SelectMonedas();

const Form = () => {

    const InputSubmit = styled.input `
        background-color: #9497FF;
        border: none;
        width: 100%;
        padding: 10px;
        color: #FFFFFF;
        font-weight: 700;
        text-transform: uppercase;
        font-size: 20px;
        border-radius: 5px;
        transition: background-color .3s ease;

        &:hover {
            background-color: #7A7DFE;
            cursor: pointer;
        }
    `

    return (
        <form>
            <InputSubmit 
                type="submit" 
                value="Cotizar" 
            />
        </form>
    )
}

export default Form