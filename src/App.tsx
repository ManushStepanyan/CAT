import { FC } from 'react';
import './App.css';
import Categories from './components/Categories';

const App: FC = () => {
  return (
    <div className="App">
      <div className="App-header">
        <Categories />
      </div>
    </div>
  );
}

export default App;
