import {Form, FormLayout, Checkbox, TextField, Button,Page} from '@shopify/polaris';
import {useState, useCallback} from 'react';

export function FormP() {
  const [productos, setproduct] = useState('');
  const [nombre, setName] = useState('');
  const [codigo, setCode] = useState('');

  const handleSubmit = ()=> {
    console.log('====================================');
    console.log(productos,nombre,codigo);
    console.log('====================================');
    // return;

    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body:JSON.stringify({nombre,productos,codigo}) 
    };
    console.log('====================================');
    console.log(requestOptions);
    console.log('====================================');
    // return;
    fetch('/api/insertar', requestOptions)
        .then(idProductoInsertado => {
            console.log('====================================');
            console.log('bien');
            console.log('====================================');
        })
        .catch(err => {
            return res.status(500).send("Error insertando producto");
        });

  };

  const handleProductChange = useCallback((v) => setproduct(v),[]);

  const handleNameChange = useCallback((v1) => setName(v1),[]);

  const handleCodeChange = useCallback((v2) => setCode(v2),[]);

  return (
    <Page narrowWidth >
        <Form onSubmit={handleSubmit}>
        <FormLayout>
            <TextField
            value={nombre}
            onChange={handleNameChange}
            label="Nombre de la característica"
            type="text"
            />
            <TextField
            value={productos}
            onChange={handleProductChange}
            label="Producto asignado"
            type="text"
            />
            <TextField
            value={codigo}
            onChange={handleCodeChange}
            label="Código de la característica"
            type="text"
            />

            <Button submit primary>Guardar</Button>
        </FormLayout>
        </Form>
    </Page>
    
  );
}