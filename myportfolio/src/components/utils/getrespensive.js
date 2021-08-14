import React from "react";

export default function useWindowSize() {
  // if (typeof window !== "undefined") {
  // return { width: 1200, height: 800 };
  // }
  const isSSR = typeof window !== "undefined";
  const [windowSize, setWindowSize] = React.useState({
    width: isSSR ? 1200 : window.innerWidth,
    height: isSSR ? 800 : window.innerHeight,
  });

  React.useEffect(() => {
    window.addEventListener("resize", () => {
      setWindowSize({ width: window.innerWidth, height: window.innerHeight });
    });
  }, []);
}








                    <Controller>
                      <Scene
                        triggerElement="#trigger"
                        duration={300}
                      >
                        {(progress) => (
                          <Tween
                            from={{
                              left: '-200%',
                              width: '0px',
                              height: '0px',
                            }}
                            ease="Strong.easeOut"
                            totalProgress={progress}
                            paused
                          >
                            // enter code here 

                          </Tween>
                        )}

                      </Scene>
                    </Controller>


















