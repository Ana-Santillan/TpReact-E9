import React from 'react';
import { ListGroup, Row } from 'react-bootstrap';
import Elemento from './Elemento';

const Lista = ({listaCitas, eliminarCita}) => {
    return (
        <ListGroup>
            <Row>
                {listaCitas.map((cita, index)=>{
                    return (
                        <Elemento cita={cita} key={index} eliminarCita={eliminarCita} index={index}/>
                    )
                })}
            </Row>
        </ListGroup>
    );
};

export default Lista;