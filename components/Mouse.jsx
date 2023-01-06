import React, { useEffect } from 'react';

function Mouse() {
    const [x, setX] = React.useState(0);
    const [y, setY] = React.useState(0);

    useEffect(() => {
        window.addEventListener('mousemove', (e) => {
            setX(e.clientX);
            setY(e.clientY);
        });
    }, []);

    return (
        <div
            style={{
                left: `${x - 5}px`,
                top: `${y}px`,
                position: 'absolute',
                zIndex: '100',
                pointerEvents: 'none',
            }}
        >
            <img
                src="https://i.ibb.co/Pgpx4kz/pixil-frame-0-1.png"
                className="w-6"
            />
        </div>
    );
}

export default Mouse;
