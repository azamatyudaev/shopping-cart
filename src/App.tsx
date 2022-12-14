import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { Container } from 'react-bootstrap'
import HomePage from './pages/HomePage'
import StorePage from './pages/StorePage'
import AboutPage from './pages/AboutPage'
import Header from './components/Header'
import { ShoppingCartProvider } from './context/ShoppingCartContext'

function App() {
  return (
    <ShoppingCartProvider>
      <Header />
      <Container className="mb-4">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/store" element={<StorePage />} />
          <Route path="/about" element={<AboutPage />} />
        </Routes>
      </Container>
    </ShoppingCartProvider>
  )
}

export default App
