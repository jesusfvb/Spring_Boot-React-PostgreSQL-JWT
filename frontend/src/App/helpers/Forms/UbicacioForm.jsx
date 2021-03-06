import React from 'react'
import { Form, Col, Button } from 'react-bootstrap'
import { Name, Grupo, Apartamento } from '../Balidaciones';
import InputAutocompletar from '../InputAutocompletar';

const UbicacionForm = ({ saveData, update = false, updateData, onCansel, rol }) => {
    return (
        <Form className="mt-1" autoComplete="off" onSubmit={(e) => { e.preventDefault(); if (!update) { saveData(Array.from(e.target)) } else { updateData(Array.from(e.target)) } }}>
            <Form.Group as={Col}>
                <Form.Label>Nombre</Form.Label>
                <InputAutocompletar url="/users/noubicados" acceso="name" name="fromInputs" placeholder="Escriba el Nombre" isInvalid onChange={(e) => { Name(e.target) }} disabled={(rol === "ROLE_VICDECEXTENCION") ? true : false} />
            </Form.Group>

            <Form.Group as={Col}>
                <Form.Label>Grupo</Form.Label>
                <Form.Control name="fromInputs" placeholder="Escriba el Grupo" isInvalid onChange={(e) => { Grupo(e.target) }} disabled={(rol === "ROLE_VICDECEXTENCION") ? (update) ? false : true : false} />
            </Form.Group>

            <Form.Group as={Col}>
                <Form.Label>Apartamento</Form.Label>
                <Form.Control name="fromInputs" placeholder="Escriba el Apartamento" isInvalid onChange={(e) => { Apartamento(e.target) }} disabled={(rol === "ROLE_VICDECEXTENCION") ? (update) ? false : true : false} />
            </Form.Group>

            <Col className="text-right">
                {(update) ? <Button className="ml-3" variant="danger" type="reset" onClick={(e) => { onCansel() }}> Cancelar </Button> : ""}
                <Button className="ml-3" variant="success" type="submit" disabled={(rol === "ROLE_VICDECEXTENCION") ? (update) ? false : true : false}> Aceptar </Button>
            </Col>
        </Form >
    )
}
export default UbicacionForm