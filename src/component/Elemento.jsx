import {React, useEffect} from 'react';
import { ListGroup, Card, Col, Button, Form } from 'react-bootstrap';
import "./Elemento.css"

const Elemento = ({ cita , eliminarCita , index}) => {
    return (
        <Col xl={3} lg={4} md={6}>
            <ListGroup.Item className='mt-3 item'>
                <Card className='text-center Card'> 
                    <Card.Header className='titleCard'>
                        <h1>Mascota: {cita.nombreMascota}</h1>
                        <h3>Dueño: {cita.nombreDueño}</h3>
                    </Card.Header>
                    <Card.Body>
                        <p>Fecha: {cita.fecha}</p>
                        <p>Hora: {cita.hora}</p>
                        <p>sintomas: {cita.sintomas}</p>
                    </Card.Body>
                    <Card.Footer>
                        <Button variant='danger' onClick={()=>eliminarCita(index)}>Eliminar</Button>
                    </Card.Footer>
                </Card>
            </ListGroup.Item>
        </Col>
    );
};

export default Elemento;