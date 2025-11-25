import React from "react";
import Hero from "../Hero";
import Features from "../Features";
import ProductGrid from "../ProductGrid";

const Home: React.FC = () => {
  return (
    <>
        <Hero />
        <Features />
        <ProductGrid />
    </>
  );
};

export default Home;
