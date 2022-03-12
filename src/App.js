import logo from './logo.svg';
import './App.css';
import JotFormReact from 'jotform-react';

function App() {
  const handleSubmit = () => {
    console.log('hello')
  }
  return (
    <div className="App">
      <JotFormReact
      formURL="https://form.jotform.com/220694937171058"
      formID="211272589254055"
      onSubmit={handleSubmit}
      initialHeight={800}
    />
    </div>
  );
}

export default App;
