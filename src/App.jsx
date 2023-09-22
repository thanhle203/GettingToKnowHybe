import './App.css';
import Layout from './components/Layout';

const App = () => {

  return (
    <>
      <div className='header'>
        <img src='./purple-awning.png' />
        <h1>Getting to Know Hybe</h1>
      </div>
      <div className='container'>
        <Layout />
      </div>
    </>
    
  )
}

export default App
