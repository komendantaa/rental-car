'use client';

import Button from '@/components/Button';
import NotFound from '@/components/NotFound';

type Props = {
  error: Error & { digest?: string };
  reset: () => void;
};

const Error = ({ error, reset }: Props) => {
  return (
    <NotFound title="Could not load this car" description={error.message}>
      <Button variant="outlined" onClick={reset}>
        Try again
      </Button>
    </NotFound>
  );
};

export default Error;
