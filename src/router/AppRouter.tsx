import { Routes, Route,Navigate } from 'react-router-dom';


import { Materials,Pieces } from '../production/pages';
import { LoginPage } from '../auth/pages/LoginPage';
import { Navbar } from '../ui';

export const AppRouter = () => {
  return (
        <>
        <Navbar />
            <Routes>
                <Route path="materials" element={<Materials/>}/>
                <Route path="pieces" element={<Pieces/>}/>
                
                <Route path="login" element={<LoginPage/>}/>
            
                <Route path="/" element={<Navigate to="/pieces"/>}/>
            </Routes>

        </>
  )
}
  