import { Component, ErrorInfo, ReactNode } from "react";

interface Props {
   children: ReactNode
}

class ErrorBoundary extends Component<Props, { hasError: boolean }> {
   constructor(props: Props) {
      super(props)

      this.state = {
         hasError: false
      }
   }

   static getDerivedStateFromError(error: Error) {
      console.log(error.message)
   }

   componentDidCatch(error: Error, errorInfo: ErrorInfo): void {
      console.log(error.message)
      console.log(errorInfo)
   }

   render() {
      if (this.state.hasError) {
         return <h3>Произошла ошибка</h3>
      }
      return this.props.children
   }
}

export default ErrorBoundary