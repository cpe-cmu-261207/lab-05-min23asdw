import React from 'react';
import { useState } from 'react'

import Header from './Header'
import Todo from './Todo'
import Footer from './Footer'

function App() {



  return (
    <>
    <div>
      {/* header section */}
      <Header></Header>


      {/* todo section */}
      <Todo></Todo>

      {/* footer section */}

    </div>
    <Footer></Footer></>
  );
}

export default App;
