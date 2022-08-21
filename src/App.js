import './FAQ.css'
import TitleFAQ from './Components/TitleFAQ/TitleFAQ';
import SearchbarFAQ from './Utilities/SearchbarFAQ/SearchbarFAQ';
import DropdownFAQ from './Components/DropdownFAQ/DropdownFAQ';

function App() {
  return (
    <div className="App">
      <TitleFAQ />
      <SearchbarFAQ />
      <DropdownFAQ />
    </div>
  );
}

export default App;
