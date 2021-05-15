import React, { Suspense } from 'react';
import reportWebVitals from '@config/reportWebVitals';
import { a } from '@react-spring/web';

function Index() {
  // Use the spring to contol primary dark/light background and the svg fill (text color)
  const fill = 'blue';
  return (
    <div className="content">
      <h1>Hi! 👋🏾 I'm Diana</h1>
      <h2>Coder, Creator, Communicator.</h2>
      <p>
        10+ years of website and application development in academic, medical,
        nonprofit, and start-up environments. Enthusiastic nerd.
      </p>
    </div>
  );
}

export default Index;
