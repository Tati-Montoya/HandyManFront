import React from 'react'
import { Button } from 'reactstrap'
import { useHistory } from 'react-router-dom'

export default function Aside() {
    const history = useHistory()

    const goToRegistrar = () => {
        history.push('/registrar')
    }

    const goToConsultar = () => {
        history.push('/consultar')
    }

    return (
        <div>
            <span>
                <Button color="primary" onClick={goToRegistrar}>Registrar Servicio</Button>
            </span>
            <span>
                <Button color="primary" onClick={goToConsultar}>Consultar Horas</Button>
            </span>
        </div>
    )
}
