import {BrowserRouter, Route, Routes} from 'react-router-dom';
import UserPage from './UserPage';
function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/user' element={<UserPage/>}></Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
