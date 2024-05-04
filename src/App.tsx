
import JobPage from './pages/JobPage';
import { Provider } from 'react-redux';
import store from './store';

function App() {

  
  return (
    <Provider store={store}>
      <JobPage />
    </Provider>
  )
}

export default App
