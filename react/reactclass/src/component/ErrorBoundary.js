import React, { Component } from "react";

// Error Boundary
// React provides us a way to handles error that occur in the component
// this way we can make sure that we provide some output to the user (and not like empty output)
//consider error boundary as try catch blocks

// for this we will need a class that  implements the following code
// getDerivedStateFromError()
// componentDidCatch()

// Note : class can implement at least one of the methods(or both)

export class ErrorBoundary extends Component {
  constructor(props) {
    super(props);

    this.state = {
      hasError: false,
    };
  }

  static getDerivedStateFromError(error) {
    console.log("Error: " + error);
    return {
      hasError: true,
    };
  }

  componentDidCatch(error, errroInfo) {
    console.log("Error(componentDidCatch) : " + error);
    console.log("Error Description : " + errroInfo);
  }

  render() {
    if (this.state.hasError != undefined && this.state.hasError) {
      return <h2>Something went wrong</h2>;
    }
    return this.props.children;
  }
}

export default ErrorBoundary;
