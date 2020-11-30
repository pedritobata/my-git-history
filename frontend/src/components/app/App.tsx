import React from 'react';
import './App.css';
import Layout from '../../containers/layout/Layout';
import Commits from '../../pages/commits/Commits';

function App() {


  return (
    <div className="">
     <Layout>
       <Commits />
     </Layout>
    </div>
  );
}

export default App;
