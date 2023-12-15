import store from "./state/store";
import App from './App.tsx'
import {Provider} from 'react-redux'

export const BootstrapedApp = () =>      <Provider store={store}>
<App />
</Provider>;