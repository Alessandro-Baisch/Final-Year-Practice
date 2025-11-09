import { Create, DataTable, List } from 'react-admin';
import { NumberField, Show, SimpleShowLayout, TextField } from 'react-admin';
import { Edit, NumberInput, SimpleForm, TextInput } from 'react-admin';

export const PublisherCreate = () => (
    <Create>
        <SimpleForm>
            <NumberInput source="PUB_ID" />
            <TextInput source="id" />
            <TextInput source="PUB_NAME" />
            <TextInput source="PUB_TELNUM" />
            <TextInput source="PUB_ADDRESS" />
        </SimpleForm>
    </Create>
);

export const PublisherList = () => (
    <List>
        <DataTable>
            <DataTable.NumberCol source="PUB_ID" />
            <DataTable.Col source="id" />
            <DataTable.Col source="PUB_NAME" />
            <DataTable.Col source="PUB_TELNUM" />
            <DataTable.Col source="PUB_ADDRESS" />
        </DataTable>
    </List>
);

export const PublisherShow = () => (    
    <Show>        
        <SimpleShowLayout>            
            <NumberField source="PUB_ID" />            
            <TextField source="id" />            
            <TextField source="PUB_NAME" />            
            <TextField source="PUB_TELNUM" />            
            <TextField source="PUB_ADDRESS" />        
        </SimpleShowLayout>    
    </Show>
);



export const PublisherEdit = () => (
    <Edit>
        <SimpleForm>
            <NumberInput source="PUB_ID" />
            <TextInput source="id" />
            <TextInput source="PUB_NAME" />
            <TextInput source="PUB_TELNUM" />
            <TextInput source="PUB_ADDRESS" />
        </SimpleForm>
    </Edit>
);