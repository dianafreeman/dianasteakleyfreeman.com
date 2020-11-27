
import React from 'react';
import Layout from '../Layout';

const WrapperStyles = {
  textAign: 'center',
  height: 'inherit',
  margin: 'auto',
}

const TextStyles = {
  fontSize: '1.5em',
  fontStyle: 'italic',
}
const ComingSoon = () => {
  return (
    <Layout>
      <div style={WrapperStyles}>
        <h1 style={{ paddingTop: '25vh' }}>Diana M Steakley Freeman</h1>

        <p style={TextStyles}>
          Hang tight -- a brand new site is coming soon!{' '}
        </p>
      </div>
    </Layout>
  );
};

export default ComingSoon;
