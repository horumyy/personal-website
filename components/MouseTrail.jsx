import React, { useEffect, useRef, useState } from "react";

function MouseTrail() {
  const trailRefs = useRef([]);
  const lastMousePosition = useRef({ x: 0, y: 0 });
  const rAFIndex = useRef(0);
  const [isDragging, setIsDragging] = useState(0);
  const [degree, setDegree] = useState(190);
  function registerMousePosition({ clientX, clientY }) {
    lastMousePosition.current.x = clientX;
    lastMousePosition.current.y = clientY;
  }

  function startDrag() {
    setIsDragging(1);
  }

  function stopDrag() {
    setIsDragging(0);
  }

  function drawCircles() {
    for (let i = 0; i < 30; i++) {
      trailRefs.current.push(React.createRef());
    }

    return [...Array(30)].map((item, index) => {
      const ease = index * 0.04;
      return (
        <div
          className="z-50"
          style={{ position: "absolute", transition: `transform ${ease}s` }}
          ref={trailRefs.current[index]}
        >
          <div className="flex text-[8px] flex-col animate-rotate-infinite">
            <span className={``}>🌟💖</span>
            <span>💖✨</span>
          </div>
        </div>
      );
    });
  }

  function updateCollectedLettersPosition() {
    for (let i = 0; i < 30; i++) {
      const xpos = lastMousePosition.current.x;
      const ypos = lastMousePosition.current.y;
      trailRefs.current[
        i
      ].current.style.transform = `translate(${xpos}px, ${ypos}px)`;
    }
  }

  useEffect(() => {
    function update() {
      if (isDragging) {
        rAFIndex.current = requestAnimationFrame(update);
      }
      updateCollectedLettersPosition();
    }

    // cancel the existing rAF
    cancelAnimationFrame(rAFIndex.current);

    document.addEventListener("mousemove", startDrag);
    // document.addEventListener("mouseup", stopDrag);
    document.addEventListener("mousemove", registerMousePosition);
    rAFIndex.current = requestAnimationFrame(update);

    return () => {
      document.removeEventListener("mousemove", registerMousePosition);
      document.removeEventListener("mousemove", startDrag);
      // document.removeEventListener("mouseup", stopDrag);
    };
  }, [isDragging]);

  return (
    <div
      style={{
        pointerEvents: "none",
      }}
    >
      {drawCircles()}
    </div>
  );
}

export default MouseTrail;
