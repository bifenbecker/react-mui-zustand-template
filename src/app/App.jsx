import "./index.css";
import OpenAPIClientAxios from "openapi-client-axios";

function App() {
  const api = new OpenAPIClientAxios({
    definition: import.meta.env.VITE_OPEN_API_SCHEMA_URL,
    axiosConfigDefaults: {
      baseURL: import.meta.env.VITE_API_HOST,
    },
  });
  api
    .init()
    .then((client) => client.getUserById(1))
    .then((res) => console.log(res));

  return <div>Hello world</div>;
}

export default App;
