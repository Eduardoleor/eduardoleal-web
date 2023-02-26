import { Container } from '@mui/material';

type LayoutProps = {
  children: React.ReactNode;
};

export default function Layout({ children }: LayoutProps) {
  return <Container>{children}</Container>;
}
