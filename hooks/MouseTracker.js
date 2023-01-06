import React, { useEffect } from 'react';
const useMousePosition = () => {
    const [mousePosition, setMousePosition] = React.useState({
        x: 0,
        y: 0,
    });

    useEffect(() => {
        const sizes = {
            width: window.innerWidth,
            height: window.innerHeight,
        };
        console.log(sizes);
        const updateMousePosition = (e) => {
            setMousePosition({
                x: -(e.clientX / sizes.width - 0.5),
                y: e.clientY / sizes.width - 0.5,
            });
        };
        window.addEventListener('mousemove', updateMousePosition);
        return () => {
            window.removeEventListener('mousemove', updateMousePosition);
        };
    }, []);
    return mousePosition;
};
export default useMousePosition;
