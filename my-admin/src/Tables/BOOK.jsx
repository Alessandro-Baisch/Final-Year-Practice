import { Create, DataTable, List } from 'react-admin';
import { DateField, NumberField, Show, SimpleShowLayout, TextField } from 'react-admin';
import { DateInput, Edit, NumberInput, SimpleForm, TextInput } from 'react-admin';

export const BookCreate = () => (
  <Create>
        <SimpleForm>
            <NumberInput source="BOOK_ISBN" />
            <TextInput source="id" />
            <DateInput source="BOOK_DATE" />
            <TextInput source="BOOK_NAME" />
            <NumberInput source="BOOK_EDITION" />
            <TextInput source="BOOK_STATUS" />
            <NumberInput source="PUB_ID" />
        </SimpleForm>
</Create>
);

export const BookList = () => (
    <List>
        <DataTable>
            <DataTable.NumberCol source="BOOK_ISBN" />
            <DataTable.Col source="id" />
            <DataTable.Col source="BOOK_DATE">
                <DateField source="BOOK_DATE" />
            </DataTable.Col>
            <DataTable.Col source="BOOK_NAME" />
            <DataTable.NumberCol source="BOOK_EDITION" />
            <DataTable.Col source="BOOK_STATUS" />
            <DataTable.NumberCol source="PUB_ID" />
        </DataTable>
    </List>
);


export const BookEdit = () => (
    <Edit>
        <SimpleForm>
            <NumberInput source="BOOK_ISBN" />
            <TextInput source="id" />
            <DateInput source="BOOK_DATE" />
            <TextInput source="BOOK_NAME" />
            <NumberInput source="BOOK_EDITION" />
            <TextInput source="BOOK_STATUS" />
            <NumberInput source="PUB_ID" />
        </SimpleForm>
    </Edit>
);

export const BookShow = () => (    
    <Show>        
        <SimpleShowLayout>            
            <NumberField source="BOOK_ISBN" />            
            <TextField source="id" />            
            <DateField source="BOOK_DATE" />            
            <TextField source="BOOK_NAME" />            
            <NumberField source="BOOK_EDITION" />            
            <TextField source="BOOK_STATUS" />           
            <NumberField source="PUB_ID" />        
        </SimpleShowLayout>    
    </Show>);