import { useRoutes } from "react-router-dom";

import { UserProvider } from "contexts";
import Routes from "./routes/Routes";

export const App = () => {
  const element = useRoutes(Routes);
  return (
    <UserProvider>
      {element}
    </UserProvider>
  );
}

export default App;
