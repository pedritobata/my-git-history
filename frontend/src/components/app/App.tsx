import React, { useState, useEffect } from 'react';
import './App.css';
import Layout from '../../containers/layout/Layout';
import Commits from '../../pages/commits/Commits';

function App() {


  return (
    <div>
     <Layout>
       <Commits />
     </Layout>
    </div>
  );
}

export default App;
