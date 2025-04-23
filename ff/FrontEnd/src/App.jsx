import React, { useEffect } from 'react'
import HomePage from './pages/HomePage'
import { Route, Routes, useNavigate } from 'react-router-dom'
import Kitoblar from './pages/Kitoblar'
import AuthorBio from './pages/AuthorBio'
import AboutBook from './pages/AboutBook'
import ProfilePage from './pages/ProfilePage'
import ProfileSecurityPage from './pages/ProfileSecurityPage'
import ProfileSettingsPage from './pages/ProfileSettingsPage'
import AddNewBook from './pages/AddNewBook'
import AddNewAuthor from './pages/AddNewAuthor'
import SignIn from './pages/SignIn'
import SignUp from './pages/SignUp'
import Bulut from './Bulut'


function App() {
 
  return (
    <Routes>
      <Route path="/" element={<HomePage/>}/>
      <Route path="/home" element={<HomePage/>}/>
      <Route path="/kitoblar" element={<Kitoblar/>}/>
      <Route path='/home/bio' element={<AuthorBio/>}/>
      <Route path='/kitoblar/:id' element={<AboutBook/>}/>
      <Route path='/profile' element={<ProfilePage/>}/>
      <Route path='/profile/security' element={<ProfileSecurityPage/>}/>
      <Route path='/profile/settings' element={<ProfileSettingsPage/>}/>
      <Route path='/addbook' element={<AddNewBook/>}/>
      <Route path='/addAuthor' element={<AddNewAuthor/>}/>
      <Route path='/signin' element={<SignIn/>}/>
      <Route path='/signup' element={<SignUp/>}/>
      <Route path='/bulut' element={<Bulut/>} />
    </Routes>
  )
}

export default App