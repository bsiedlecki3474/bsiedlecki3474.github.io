import { useCallback } from "react";
import { default as TSParticles } from 'react-tsparticles'
import { loadFull } from "tsparticles";

import options from 'particles-config.json'

const Particles = () => {

  const particlesInit = useCallback(async engine => {
    await loadFull(engine);
  }, []);

  return (
    <TSParticles
      id="tsparticles"
      init={particlesInit}
      options={options}
    />
  )
}

export default Particles