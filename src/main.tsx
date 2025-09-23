import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import "antd/dist/reset.css"
import React from 'react';
import { RecoilRoot } from "recoil";
import { BrowserRouter } from 'react-router-dom';
import { CartProvider } from './contexts/CartContext.tsx';
import { UserProvider } from './contexts/UserContext.tsx';
import { ThemeProvider } from './contexts/ThemeContext.tsx';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RecoilRoot>
      <BrowserRouter>
        <UserProvider>
          <CartProvider>
            <ThemeProvider>
              <App />
            </ThemeProvider>
          </CartProvider>
        </UserProvider>
      </BrowserRouter>
    </RecoilRoot>
  </StrictMode>,
)
