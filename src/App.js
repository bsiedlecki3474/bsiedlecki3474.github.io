import './App.css';

import PageContainer from './components/PageContainer';
import ThemeWrapper from './components/ThemeWrapper';

window.DASH = '—';

const App = () => (
  <div className="App">
    <ThemeWrapper>
      <PageContainer />
    </ThemeWrapper>
  </div>
);

export default App;