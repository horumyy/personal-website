import { useFrame } from '@react-three/fiber';
import { useEffect, useRef } from 'react';
import { Mesh } from 'three';

interface BoxProps {
    color?: string;
    geometry?: JSX.Element;
    material?: JSX.Element;
}

function Box(props: BoxProps) {
    const boxRef = useRef<Mesh>(null);

    useFrame(() => {
        if (boxRef.current) {
            boxRef.current.rotation.x += 0.005;
            boxRef.current.rotation.y += 0.01;
        }
    });

    const randomNumber = (min: number, max: number) => {
        return Math.random() * (max - min) + min;
    };

    useEffect(() => {
        const x = randomNumber(-10, 10);
        const y = randomNumber(-10, 10);
        const z = randomNumber(-10, 10);

        boxRef.current?.position.set(x, y, z);
    }, []);

    return (
        <mesh ref={boxRef}>
            {props.geometry}
            {props.material}
        </mesh>
    );
}

export default Box;
