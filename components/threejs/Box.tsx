import { useFrame } from '@react-three/fiber';
import { useRef } from 'react';
import { Mesh } from 'three';

interface BoxProps {
    color?: string;
}

function Box(props: BoxProps) {
    const boxRef = useRef<Mesh>(null);

    useFrame(() => {
        if (boxRef.current) {
            boxRef.current.rotation.x += 0.005;
            boxRef.current.rotation.y += 0.01;
        }
    });

    return (
        <mesh ref={boxRef}>
            <boxGeometry args={[1, 1, 1]} />
            <meshBasicMaterial color={props.color ? props.color : 'hotpink'} />
        </mesh>
    );
}

export default Box;
