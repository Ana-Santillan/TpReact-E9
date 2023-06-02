import { React, useState, useEffect } from 'react';
import { Form, Card, Button, Row, Col } from 'react-bootstrap';
import Lista from './Lista';
import './Elemento.css'

const Formulario = () => {
    const ListaPeliculasLS = JSON.parse(localStorage.getItem('Citas')) || [];
    const [nombreMascota, setNombreMascota] = useState("");
    const [nombreDueño, setNombreDueño] = useState("");
    const [fecha, setFecha] = useState("");
    const [hora, setHora] = useState("");
    const [sintomas, setSintomas] = useState("");
    const [listaCitas, setCitas] = useState([]);

    const handleSubmit = (e) => {
        e.preventDefault();
        let cita = {
            nombreMascota: nombreMascota,
            nombreDueño: nombreDueño,
            fecha: fecha,
            hora: hora,
            sintomas: sintomas,
        }
        console.log(cita);
        setCitas([...listaCitas, cita])
        setNombreMascota("")
        setNombreDueño("")
        setFecha("")
        setHora("")
        setSintomas("")
    }

    const eliminarCita = (index) => {
        console.log(index);
        let CitasActualizadas = listaCitas.filter((cita, indexCita) => indexCita != index);
        setCitas(CitasActualizadas);
    }

    useEffect(() => {
        localStorage.setItem('Citas', JSON.stringify(listaCitas))
    }, [listaCitas])

    return (
        <>
            <Form onSubmit={handleSubmit}>
                <Card>
                    <Card.Header className='text-center'>
                        <h3>Llenar el formulario para crear una cita</h3>
                    </Card.Header>
                    <Card.Body className='Card-body'>

                        <Form.Group as={Row} className='mt-3'>
                            <Form.Label column sm="2">Nombre de la mascota</Form.Label>
                            <Col sm="10">
                                <Form.Control required type='text' placeholder='nombre de la mascota' value={nombreMascota} onChange={(e)=>setNombreMascota(e.target.value)}/>
                            </Col>
                        </Form.Group>

                        <Form.Group as={Row} className='mt-3'>
                            <Form.Label column sm="2">Nombre de dueño</Form.Label>
                            <Col sm="10">
                                <Form.Control required type='text' placeholder='nombre de dueño' value={nombreDueño} onChange={(e)=>setNombreDueño(e.target.value)}/>
                            </Col>
                        </Form.Group>

                        <Form.Group as={Row} className='mt-3'>
                            <Form.Label column sm="2">Fecha</Form.Label>
                            <Col sm="4">
                                <Form.Control required type='date' value={fecha} onChange={(e)=>setFecha(e.target.value)}/>
                            </Col>
                            <Form.Label column sm="2">Hora</Form.Label>
                            <Col sm="4">
                                <Form.Control required type='time' value={hora} onChange={(e)=>setHora(e.target.value)}/>
                            </Col>
                        </Form.Group>

                        <Form.Group as={Row} className='mt-3'>
                            <Form.Label column sm="2">Sintomas</Form.Label>
                            <Col sm="10">
                                <Form.Control required as="textarea" row={2} placeholder='describir los sintomas' value={sintomas} onChange={(e)=>setSintomas(e.target.value)}/>
                            </Col>
                        </Form.Group>

                    </Card.Body>
                    <Card.Footer className='text-end'>
                        <Button variant="primary" type="submit">Guardar</Button>
                    </Card.Footer>
                </Card>
            </Form>
            <Lista listaCitas={listaCitas} eliminarCita={eliminarCita}></Lista>
        </>

    );
};

export default Formulario;