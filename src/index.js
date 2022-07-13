import React from 'react';

import { createRoot } from 'react-dom/client';

import App from './App';
import './index.css';

const root=document.querySelector('#root');
const main = createRoot(root);

main.render(<App />);