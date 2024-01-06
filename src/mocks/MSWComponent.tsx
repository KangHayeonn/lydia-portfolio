"use client";

import React, { useState, useEffect, type PropsWithChildren } from "react";
import initMocks from "@/mocks";

const isMockingMode = process.env.NEXT_PUBLIC_API_MOCKING === "enable";

const MSWComponent = ({ children }: PropsWithChildren) => {
  const [mswReady, setMSWReady] = useState(() => !isMockingMode);

  useEffect(() => {
    const init = async () => {
      if (isMockingMode) {
        await initMocks();
        setMSWReady(true);
      }
    };
    if (!mswReady) {
      init();
    }
  }, [mswReady]);

  if (!mswReady) return;

  return <>{children}</>;
};

export default MSWComponent;
