"use client";

import { FC, useEffect } from "react";

const withLog = <P extends object>(WrappedComponent: FC<P>): FC<P> => {
const ComponentWithLog: FC<P> = (props) => {
    useEffect(() => {
      console.log("component mount");

      return () => console.log("unmount");
    }, []);

    useEffect(() => {
      console.log("updated");
    }, [props]);

    return <WrappedComponent {...props} />;
  };

  return ComponentWithLog;
};

export default withLog;
