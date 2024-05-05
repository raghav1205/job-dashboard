
import JobPage from './pages/JobPage';
import { Provider } from 'react-redux';
import store from './store';
import { StrictMode } from 'react';

function App() {


  return (
    <StrictMode>
      <Provider store={store}>
        <JobPage />
      </Provider>
    </StrictMode>
  )
}

export default App
