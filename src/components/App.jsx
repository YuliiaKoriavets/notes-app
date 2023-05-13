import '../App.css';
import Layout from './Layout/Layout';
import Sidebar from './Sidebar/Sidebar';
import Workspace from './Workspace/Workspace';
import { DataProvider } from '../context/dataContext';

function App() {
  return (
    <div className="App">
      <DataProvider>
        <Layout>
          <Sidebar />
          <div className="line"></div>
          <Workspace />
        </Layout>
      </DataProvider>
    </div>
  );
}

export default App;
