// in src/admin/index.tsx
import { Admin, Resource, ListGuesser } from "react-admin";
import {createTrailbaseProvider} from "ra-data-/workspaces/Final-Year-Practice/my-admin/ra-trailbase.js-server";

const TRAILBASE_URL = "https://refactored-happiness-x59qj7xpwxv43694j-4000.app.github.dev/"
const{dataProvider, authProvider}=await createTrailbaseProvider(TRAILBASE_URL);

const App = () => (
  <Admin dataProvider={dataProvider} authProvider={authProvider}>
    <Resource name="posts" list={ListGuesser} />
    <Resource name="comments" list={ListGuesser} />
  </Admin>
);

export default App;