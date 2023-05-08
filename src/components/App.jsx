import '../App.css';
import Layout from './Layout/Layout';
import Sidebar from './Sidebar/Sidebar';
import Workspace from './Workspace/Workspace';

function App() {

  return (
    <div className="App">
      <Layout>
        <Sidebar />
        <div className='line'></div>
        <Workspace />
      </Layout>
    </div>
  );
}

export default App;
