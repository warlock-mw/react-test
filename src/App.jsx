import React from 'react';
import styled from 'styled-components';
import HelloWorld from '@/components/HelloWorld';
import Counter from '@/components/Counter';

const AppCss = styled.div`
  border: 1px solid red;
`;

function App() {
  return (
    <AppCss>
      <HelloWorld />
      <hr />
      <Counter />
    </AppCss>
  );
}

export default App;