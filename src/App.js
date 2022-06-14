import './App.css';
import Header from './Header'
import Footer from './Footer'
import Content from './Content';

function App() {
  return (
    <div className="App">
      <Header title="Task List"/>
      <Content />
      <Footer />
    </div>
  );
}

export default App;
