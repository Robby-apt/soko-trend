import React, { useEffect, useState } from 'react';
import { Unity, useUnityContext } from 'react-unity-webgl';
import './Unity.css'; // Import the CSS file for effects

const UnityWebGLSection = () => {
  const [isVisible, setIsVisible] = useState(false);

  const { unityProvider } = useUnityContext({
    loaderUrl: "unitybuild/2021.2/webgl trial.loader.js",
    dataUrl: "unitybuild/2021.2/webgl trial.data",
    frameworkUrl: "unitybuild/2021.2/webgl trial.framework.js",
    codeUrl: "unitybuild/2021.2/webgl trial.wasm",
    streamingAssetsUrl: "unitybuild/2020.1/streamingassets",
    webglContextAttributes: {
      preserveDrawingBuffer: true,
    },
  });

  // Trigger fade-in effect when component is mounted
  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section
      id="unity-webgl"
      className={`container py-5 text-center ${isVisible ? 'fade-in' : ''}`}
    >
      <h3 className="text-light mb-4 title-animation">Experience Our 3D Demo</h3>
      
      {/* Unity WebGL Container */}
      <div
        id="unityContainer"
        className="unity-container"
        style={{ width: '100%', height: '600px', margin: '0 auto' }}
      >
        <Unity unityProvider={unityProvider} style={{ width: '100%', height: '100%' }} />
      </div>

      <p className="text-light mt-3 fade-in-description">
        Interact with the 3D model and explore the experience we've built for you!
      </p>
    </section>
  );
};

export default UnityWebGLSection;
