import { AuthProvider } from "./context/auth"
import { RoutesComponent } from "./routes"

function App() {
  return (
    <AuthProvider>
      <RoutesComponent />
    </AuthProvider>
  )
}

export default App
