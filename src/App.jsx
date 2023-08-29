import { useState } from 'react';
import Preview from './components/Preview';

function Form() {
  return (
    <div>Form</div>
  )
}

function App() {
  return (
    <div className="wrapper">
      <header>
        <h1>Ironsworn : Starforged Asset Workbench</h1>
      </header>

      <main>
        <Preview />
        <Form />
      </main>

      <footer>Footer</footer>
    </div>
  )
}

export default App
