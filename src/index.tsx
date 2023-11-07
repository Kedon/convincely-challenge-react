import React from 'react'
import ReactDOM from 'react-dom/client'
import Layout from './Layout'
import './index.scss'

const root = document.getElementById('root') as HTMLElement
ReactDOM.createRoot(root).render(
  <React.StrictMode>
    <Layout />
  </React.StrictMode>
)
