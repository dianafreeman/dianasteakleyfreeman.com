import React, { Component } from "react";
import PropTypes from "prop-types";

export const ErrorAlert = ({ error }) => {
  return (
    <div style={{ width: "inherit", padding: "1em" }}>
      <h1
        style={{
          fontWeight: 900,
          color: "red",
          fontSize: "48px",
          lineHeight: "2em",
        }}
      >
        Error
      </h1>
      <h1 style={{ color: "red" }}>{error}</h1>
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
  componentDidCatch(error, errorInfo) {
    // logErrorToMyService(error, errorInfo);
  }

  render() {
    const { hasError, error } = this.state;
    const { children, hideIn } = this.props;

    if (hasError && !hideIn.includes(process.env.NODE_ENV)) {
      return <ErrorAlert error={error.message} />;
    }
    return children;
  }
}

export default ErrorBoundary;

ErrorBoundary.propTypes = {
  hideIn: PropTypes.arrayOf(PropTypes.string).isRequired,
};
