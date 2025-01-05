import "./App.css";
import PostDetails from "./components/PostDetails";
import UserDetails from "./components/UserDetails";
import { PostContextProvider } from "./context/PostContext/Postcontext";
import { UserContextProvider } from "./context/UserContext/UserContext";

function App() {
  return (
    <UserContextProvider>
      <PostContextProvider>
        <UserDetails />
        <hr />
        <PostDetails />
      </PostContextProvider>
    </UserContextProvider>
  );
}

export default App;
