// in src/admin/index.tsx
import { Admin, Resource, ListGuesser, EditGuesser, ShowGuesser, radiantLightTheme} from "react-admin";
import {createTrailbaseProvider} from "/workspaces/Final-Year-Practice/my-admin/ra-trailbase.js";


import { BookEdit, BookList, BookShow, BookCreate} from "./Tables/BOOK";
import { PublisherEdit, PublisherList, PublisherShow, PublisherCreate } from "./Tables/PUBLISHER";
import { OrderList, OrderShow, OrderEdit, OrderCreate} from "./Tables/ORDERS";
import { RequestEdit, RequestList, RequestShow, RequestCreate } from "./Tables/REQUEST";
import { StudentCreate, StudentEdit, StudentList, StudentShow } from "./Tables/STUDENT";


const TRAILBASE_URL = "https://refactored-happiness-x59qj7xpwxv43694j-4000.app.github.dev/"
const{dataProvider, authProvider} =await createTrailbaseProvider (TRAILBASE_URL);

const App = () => (
  <Admin dataProvider={dataProvider} authProvider={authProvider} theme={radiantLightTheme}>
    <Resource name="BOOK" list={BookList} edit={BookEdit} create={BookCreate} show={BookShow} />
    <Resource name="PUBLISHER" list={PublisherList} edit={PublisherEdit} create={PublisherCreate} show={PublisherShow} />
    <Resource name="ORDERS" list={OrderList} edit={OrderEdit} create={OrderCreate} show={OrderShow}/>
    <Resource name="REQUEST" list={RequestList} edit={RequestEdit} create={RequestCreate} show={RequestShow}/>
    <Resource name="STUDENT" list={StudentList} edit={StudentEdit} create={StudentCreate} show={StudentShow}/>
  </Admin>
);

export default App;