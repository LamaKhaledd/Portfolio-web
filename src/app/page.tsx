'use client';
import { AppShell, MantineProvider } from '@mantine/core';
import { useScrollIntoView } from '@mantine/hooks';
import MainContent from './[locale]/(auth)/_lib/components/main-content/main-content';

function App() {
  const { scrollIntoView, targetRef } = useScrollIntoView<HTMLDivElement>({ offset: 60 });

  function onPrimaryHeaderButtonClick() {
    scrollIntoView({ alignment: 'center' });
  }

  return (
    <MantineProvider >
              <MainContent />
    </MantineProvider>
  );
}

export default App;
