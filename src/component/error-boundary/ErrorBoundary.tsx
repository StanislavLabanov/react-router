import { Typography } from "antd";
import { Component, ErrorInfo, ReactNode } from "react";

interface Props {
   children: ReactNode
}

export class ErrorBoundary extends Component<Props, { hasError: boolean }> {
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
         return <Typography.Text type="danger">Ошибка...</Typography.Text>
      }
      return this.props.children
   }
}