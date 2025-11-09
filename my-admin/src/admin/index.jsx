// in src/admin/index.tsx
import { Admin, Resource, ListGuesser, EditGuesser } from "react-admin";
import {createTrailbaseProvider} from "/workspaces/Final-Year-Practice/my-admin/src/admin/index.jsx";

const TRAILBASE_URL = "https://refactored-happiness-x59qj7xpwxv43694j-4000.app.github.dev/"
const{dataProvider, authProvider} =await createTrailbaseProvider (TRAILBASE_URL);

const App = () => (
  <Admin dataProvider={dataProvider} authProvider={authProvider}>
    <Resource name="BOOK" list={ListGuesser} edit={EditGuesser} />
    <Resource name="ORDERS" list={ListGuesser} edit={EditGuesser} />
    <Resource name="PUBLISHER" list={ListGuesser} edit={EditGuesser} />
    <Resource name="REQUEST" list={ListGuesser} edit={EditGuesser} />
    <Resource name="STUDENT" list={ListGuesser} edit={EditGuesser} />
  </Admin>
);

export default App;