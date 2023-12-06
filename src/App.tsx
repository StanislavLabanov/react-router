import AuthProvider from './context/AuthProvider';
import RoutesComponent from './routes/RoutesComponent';

function App() {
  return (
    <AuthProvider>
      <RoutesComponent />
    </AuthProvider>
  )
}

export default App
