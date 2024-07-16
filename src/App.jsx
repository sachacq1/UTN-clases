import './App.css';
import { useUser } from './context/UserContext.jsx';


function App() {
  const { userData, updateUser, showName } = useUser();

  return (
    <div>
      {userData.name}
    </div>

  )
}

export default App
