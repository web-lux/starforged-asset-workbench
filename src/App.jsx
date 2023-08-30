import Preview from './components/Preview.jsx';
import Form from './components/Form.jsx'

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
