import {Form, FormLayout, Checkbox, TextField, Button,Page} from '@shopify/polaris';
import {useState, useCallback} from 'react';

export function FormP() {
  const [product, setproduct] = useState('');
  const [name, setName] = useState('');
  const [code, setCode] = useState('');

  const handleSubmit = useCallback((_event) => {
    setName('');
    setproduct('');
    setCode('');
  }, []);

  const handleProductChange = useCallback((value) => setproduct(value),[]);

  const handleNameChange = useCallback((value) => setName(value),[]);

  const handleCodeChange = useCallback((value) => setCode(value),[]);

  return (
    <Page narrowWidth >
        <Form onSubmit={handleSubmit}>
        <FormLayout>
            <TextField
            value={name}
            onChange={handleNameChange}
            label="Nombre de la característica"
            type="text"
            />
            <TextField
            value={product}
            onChange={handleProductChange}
            label="Producto asignado"
            type="text"
            />
            <TextField
            value={code}
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