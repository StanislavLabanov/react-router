import { AuthProvider } from "./context/auth"
import { RoutesComponent } from "./routes"

function App() {
  if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('../sw.js')
  }

  return (
    <AuthProvider>
      <RoutesComponent />
    </AuthProvider>
  )
}

export default App
