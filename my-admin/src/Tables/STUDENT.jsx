import { Create, DataTable, List } from 'react-admin';
import { NumberField, Show, SimpleShowLayout, TextField } from 'react-admin';
import { Edit, NumberInput, SimpleForm, TextInput } from 'react-admin';

export const StudentCreate = () => (
    <Create>
        <SimpleForm>
            <NumberInput source="STU_NUM" />
            <TextInput source="id" />
            <TextInput source="STU_NAME" />
            <TextInput source="STU_LNAME" />
            <TextInput source="STU_TELNUM" />
            <TextInput source="STU_ADDRESS" />
        </SimpleForm>
    </Create>
);

export const StudentList = () => (
    <List>
        <DataTable>
            <DataTable.NumberCol source="STU_NUM" />
            <DataTable.Col source="id" />
            <DataTable.Col source="STU_NAME" />
            <DataTable.Col source="STU_LNAME" />
            <DataTable.Col source="STU_TELNUM" />
            <DataTable.Col source="STU_ADDRESS" />
        </DataTable>
    </List>
);


export const StudentEdit = () => (
    <Edit>
        <SimpleForm>
            <NumberInput source="STU_NUM" />
            <TextInput source="id" />
            <TextInput source="STU_NAME" />
            <TextInput source="STU_LNAME" />
            <TextInput source="STU_TELNUM" />
            <TextInput source="STU_ADDRESS" />
        </SimpleForm>
    </Edit>
);

export const StudentShow = () => (
    <Show>
        <SimpleShowLayout>
            <NumberField source="STU_NUM" />
            <TextField source="id" />
            <TextField source="STU_NAME" />
            <TextField source="STU_LNAME" />
            <TextField source="STU_TELNUM" />
            <TextField source="STU_ADDRESS" />
        </SimpleShowLayout>
    </Show>
);