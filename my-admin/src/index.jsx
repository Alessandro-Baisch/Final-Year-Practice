// in src/admin/index.tsx
import { Admin, Resource, ListGuesser, EditGuesser } from "react-admin";
import {createTrailbaseProvider} from "/workspaces/Final-Year-Practice/my-admin/ra-trailbase.js";

const TRAILBASE_URL = "https://refactored-happiness-x59qj7xpwxv43694j-4000.app.github.dev/"
const{dataProvider} =await createTrailbaseProvider (TRAILBASE_URL);

const App = () => (
  <Admin dataProvider={dataProvider}>
    <Resource name="posts" list={ListGuesser} />
    <Resource name="comments" list={ListGuesser} />
  </Admin>
);

export default App;