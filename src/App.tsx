import ErrorBoundary from './component/ErrorBoundary';
import AuthProvider from './context/AuthProvider';
import RoutesComponent from './routes/RoutesComponent';

function App() {
  return (
    <AuthProvider>
      <ErrorBoundary>
        <RoutesComponent />
      </ErrorBoundary>
    </AuthProvider>
  )
}

export default App
