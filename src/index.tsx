import { createRoot } from 'react-dom/client'
import { Authenticator,View } from '@aws-amplify/ui-react';
import '@aws-amplify/ui-react/styles.css'
import './index.css';
import  { App } from './App';

const container = document.getElementById('root');
const root = createRoot(container!);
root.render(
    <Authenticator.Provider>
    	<View><App /></View>
    </Authenticator.Provider>

 );

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
