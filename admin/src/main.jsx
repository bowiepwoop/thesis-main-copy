import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import App from './App.jsx'
import AdminContextProvider from './context/AdminContext.jsx'
import TeacherContextProvider from './context/TeacherContext.jsx'
import AppContextProvider from './context/AppContext.jsx'
import StudentContextProvider from './context/StudentContext.jsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <AdminContextProvider>
      <TeacherContextProvider>
      <StudentContextProvider>
        
        <AppContextProvider>
          <App />
        </AppContextProvider>
        
      </StudentContextProvider>
      </TeacherContextProvider>
    </AdminContextProvider>
  </BrowserRouter>,
)
