import React, { Component } from "react";

export const ErrorAlert = ({ error }) => {
  return (
    <div className="bg-red-100 border-red-500 rounded-md">
      <pre>{JSON.stringify(error, null, 2)}</pre>
    </div>
  );
};

class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error) {
    // Update state so the next render will show the fallback UI.
    return { hasError: true, error };
  }

  // eslint-disable-next-line no-unused-vars
  componentDidCatch(_error, _errorInfo) {
    // You can also log the error to an error reporting service
    // logErrorToMyService(error, errorInfo);
  }

  render() {
    const { hasError, error } = this.state;
    const { children } = this.props;
    if (hasError) {
      return <ErrorAlert error={error} />;
    }
    return children;
  }
}

export default ErrorBoundary;
