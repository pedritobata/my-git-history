import React, { useState, useEffect } from 'react';
import './App.css';
import Layout from '../../containers/layout/Layout';
import Commits from '../../pages/commits/Commits';

function App() {


  return (
     <Layout>
       <Commits />
     </Layout>
  );
}

export default App;
