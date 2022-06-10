import React from "react"
import { createRoot } from 'react-dom/client';
import App from "./App"
import './style.css'

const main = document.getElementById('root')
const root = createRoot(main); 

root.render(<App/>)
