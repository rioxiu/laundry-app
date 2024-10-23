"use client";

import React, { FC, ReactNode, useRef } from "react";
import { Provider } from "react-redux";
import store from "./";

const ProviderComp: FC<{ children: ReactNode }> = ({ children }) => {
  const storeRef = useRef();
  return <Provider store={store}>{children}</Provider>;
};

export default ProviderComp;
