import { Button } from '@mui/material';
import { useRouter } from 'next/router';

import Layout from '@/components/layout';

export default function Demo() {
  const router = useRouter();

  return (
    <Layout>
      <h1>Demo</h1>
      <Button onClick={() => router.back()}>Back</Button>
    </Layout>
  );
}
