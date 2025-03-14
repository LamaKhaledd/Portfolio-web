import { AppShell } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import AuthHeader from './auth-header/auth-header';
import AuthFooter from './auth-footer/auth-footer';
import ProfileTabs from '@/app/[locale]/dashboard/_lib/components/profile/profile';
import { Welcome } from '@/app/[locale]/dashboard/_lib/components/welcome/welcome';

const Layout=()=> {
  const [opened] = useDisclosure();

  return (
    <AppShell>
      <AppShell.Header>
        <AuthHeader />
      </AppShell.Header>
      <Welcome></Welcome>
      <ProfileTabs></ProfileTabs>
      <AppShell.Footer>
        <AuthFooter/>
      </AppShell.Footer>
    </AppShell>
  );
}
export default Layout;