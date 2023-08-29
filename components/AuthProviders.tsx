"use client";

import { getProviders, signIn } from "next-auth/react";
import React, { useState, useEffect } from "react";

type Provider = {
  id: string;
  name: string;
  type: string;
  signinUrl: string;
  callbackUrl: string;
  signinUrlParams?: Record<string, string> | undefined;
};

type Providers = Record<string, Provider>;

const AuthProviders = () => {
  const [providers, setProviders] = useState<Providers | null>(null);

  useEffect(() => {
    const fethcProviders = async () => {
      const res = await getProviders();

      setProviders(res);
    };
    fethcProviders();
  }, []);

  if (!providers) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      {Object.values(providers).map((provider: Provider, i) => (
        <button key={i} onClick={() => signIn(provider?.id)}>
          {provider.id}
        </button>
      ))}
    </div>
  );
};

export default AuthProviders;
