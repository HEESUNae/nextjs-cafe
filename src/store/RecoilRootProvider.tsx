'use client';
import React, { Suspense, useEffect, useState } from 'react';
import { RecoilRoot } from 'recoil';

export default function RecoilRootProvider({ children }: { children: React.ReactNode }) {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) return null;
  return (
    <RecoilRoot>
      <Suspense fallback={<></>}>{children}</Suspense>
    </RecoilRoot>
  );
}
