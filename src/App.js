import logo from './logo.svg';
import './App.css';
import { Navbar } from './components/organisms/navbar/Navbar';
import Treeview  from './components/templates/Treeview';
import { useAuth0 } from "@auth0/auth0-react";
import { Welcome } from './components/templates/Welcome';
import Container from '@material-ui/core/Container';
function App() {
  const { isAuthenticated } = useAuth0();
  return (
    <div className="App">
      <>
        <Navbar/>
        { isAuthenticated ?
          <Treeview/>:
          <Welcome/>
        }
      </>
    </div>
    
  );
}

export default App;