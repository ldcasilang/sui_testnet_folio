import React from "react";
import "./AboutSui.css";

const AboutSui = () => {
  return (
    <section className="about-sui">
      <h3>About Sui</h3>
      <p>
        Sui is a Layer 1 blockchain designed from the ground up to enable creators and developers
        to build experiences that cater to the next billion users in Web3. With its unique object-centric model and
        the Move programming language, Sui offers unparalleled speed, security, and scalability.
      </p>
      <ul>
        <li>Parallel Execution: Process transactions for maximum throughput</li>
        <li>Move Language: Safe, expressive smart contract development</li>
        <li>Low Latency: Sub-second finality for seamless user experiences</li>
        <li>Horizontal Scaling: Scales with demand without compromising performance</li>
      </ul>
      <button className="learn-more">Learn More About Sui</button>
    </section>
  );
};

export default AboutSui;
