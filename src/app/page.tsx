'use client';
import { MantineProvider } from '@mantine/core';
import MainContent from '@authComponents/main-content/main-content';

function App() {
  return (
    <MantineProvider >
              <MainContent />
    </MantineProvider>
  );
}

export default App;
