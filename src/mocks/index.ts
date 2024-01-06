const initMocks = async () => {
  const isBrowser = typeof window !== "undefined";
  if (isBrowser) {
    const { worker } = await import("@/mocks/browser");
    worker.start({ onUnhandledRequest: "bypass" });
  } else {
    const { server } = await import("@/mocks/server");
    server.listen({ onUnhandledRequest: "bypass" });
  }
};

export default initMocks;
