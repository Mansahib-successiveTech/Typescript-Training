"use client";

import { FC, useEffect } from "react";
import { useRouter } from "next/navigation";
import { useAuth } from "../context/AuthContext";

const withAuth = <P extends object>(WrappedComponent: FC<P>): FC<P> => {
  const ComponentWithAuth: FC<P> = (props) => {
    const { loggedIn } = useAuth();
    const router = useRouter();

    useEffect(() => {
      if (!loggedIn) {
        router.replace("/login");
      }
    }, [loggedIn, router]);


    return <WrappedComponent {...props} />;
  };

  return ComponentWithAuth;
};

export default withAuth;
