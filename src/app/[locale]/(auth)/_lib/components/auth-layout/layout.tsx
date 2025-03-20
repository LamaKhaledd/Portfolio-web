import { AppShell } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import AuthHeader from './auth-header/auth-header';
import AuthFooter from './auth-footer/auth-footer';

const Layout=()=> {
  const [opened] = useDisclosure();

  return (
    <AppShell>
      <AppShell.Header>
        <AuthHeader />
      </AppShell.Header>
      <AppShell.Footer>
        <AuthFooter/>
      </AppShell.Footer>
    </AppShell>
  );
}
export default Layout;