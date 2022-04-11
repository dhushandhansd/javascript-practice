import {BrowserRouter, Route, Routes} from 'react-router-dom';
import UserPage from './Pages/UserPage';
import NotePage from './Pages/NotePage';
import NotebookPage from './Pages/NotebookPage';
function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<UserPage/>}></Route>
        <Route path='/notes' element={<NotePage/>}></Route>
        <Route path='/notebook' element={<NotebookPage/>}></Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
