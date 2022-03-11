import React from 'react'
import styled from '@emotion/styled'

const Label = styled.label `
    color: #FFFFFF;
`

const useSelectMonedas = (label, opciones) => {

    const SelectMonedas = () => (
        <>
            <Label>{label}</Label>
            <select>
                <option value="">Sleccione</option>

                {opciones.map( opcion => (
                    <option
                        key={opcion.id}
                        value={opcion.id}
                    >{opcion.nombre}</option>
                ))}
            </select>
        </>
    )

    return [ SelectMonedas ]
}

export default useSelectMonedas