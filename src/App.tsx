import { UserProvider } from "./contexts/userContext";
import { Landing } from "./pages/Landing";

export const App = () => {
  return (
    <UserProvider>
      <Landing />
    </UserProvider>
  );
}

export default App;
