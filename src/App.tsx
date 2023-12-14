import { AuthProvider } from "./context/auth"
import { RoutesComponent } from "./routes"


function App() {
  if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('./sw.js')
      .then(reg => console.log('register', reg))
      .catch(err => console.log('noregister', err))
  }

  return (
    <AuthProvider>
      <RoutesComponent />
    </AuthProvider>
  )
}

export default App
