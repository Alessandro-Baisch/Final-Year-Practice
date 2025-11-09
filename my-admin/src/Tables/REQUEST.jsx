import { Create, DateField, NumberField, Show, SimpleShowLayout, TextField } from 'react-admin';
import { DateInput, NumberInput, SimpleForm, TextInput } from 'react-admin';
import {  Edit } from 'react-admin';
import { DataTable, List } from 'react-admin'


export const RequestCreate = () => (
    <Create>
        <SimpleForm>
            <NumberInput source="REQ_NUM" />
            <TextInput source="id" />
            <DateInput source="REQ_DATE" />
            <DateInput source="REQ_STARTDATE" />
            <DateInput source="REQ_ENDDATE" />
            <NumberInput source="STU_NUM" />
        </SimpleForm>
    </Create>
);

;

export const RequestList = () => (
    <List>
        <DataTable>
            <DataTable.NumberCol source="REQ_NUM" />
            <DataTable.Col source="id" />
            <DataTable.Col source="REQ_DATE">
                <DateField source="REQ_DATE" />
            </DataTable.Col>
            <DataTable.Col source="REQ_STARTDATE">
                <DateField source="REQ_STARTDATE" />
            </DataTable.Col>
            <DataTable.Col source="REQ_ENDDATE">
                <DateField source="REQ_ENDDATE" />
            </DataTable.Col>
            <DataTable.NumberCol source="STU_NUM" />
        </DataTable>
    </List>
);

export const RequestShow = () => (    
    <Show>        
        <SimpleShowLayout>            
            <NumberField source="REQ_NUM" />            
            <TextField source="id" />            
            <DateField source="REQ_DATE" />            
            <DateField source="REQ_STARTDATE" />            
            <DateField source="REQ_ENDDATE" />            
            <NumberField source="STU_NUM" />        
        </SimpleShowLayout>    
    </Show>
);

export const RequestEdit = () => (
    <Edit>
        <SimpleForm>
            <NumberInput source="REQ_NUM" />
            <TextInput source="id" />
            <DateInput source="REQ_DATE" />
            <DateInput source="REQ_STARTDATE" />
            <DateInput source="REQ_ENDDATE" />
            <NumberInput source="STU_NUM" />
        </SimpleForm>
    </Edit>
);
