"use client";

import React from "react";
import MainBanner from "./landing-Page/mainbanner";
import CustomerApp from "./landing-Page/CustomerApp";
import OwnerApp from "./landing-Page/OwnerApp";

export default function Home() {
  return (
    <>
      <MainBanner />
      <CustomerApp />
      <OwnerApp />
    </>
  );
}
