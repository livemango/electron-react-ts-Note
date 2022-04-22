import { createRoot } from 'react-dom/client';
// import * as ReactDOM from 'react-dom';
import App from './App';

const container = document.getElementById('root');
const root = createRoot(container);
root.render(<App />);
// ReactDOM.render(<App />, container);

// calling IPC exposed from preload script
window.electron.ipcRenderer.once('ipc-example', (arg) => {
  // eslint-disable-next-line no-console
  console.log(arg);
});
window.electron.ipcRenderer.myPing();
