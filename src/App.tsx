import { ErrorBoundary } from 'react-error-boundary';
import { SideBar } from './components/SideBar';
import { Map } from './components/Map';
import { ErrFallBackMessage } from './components/UI/ErrFallBackMessage';
import './styles.css';

export default function App() {
  return (
    <ErrorBoundary fallback={<ErrFallBackMessage />}>
      <div className="app-container">
        <SideBar />
        <Map />
      </div>
    </ErrorBoundary>
  );
}
