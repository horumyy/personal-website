import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import Box from './Boxes';
import { useEffect } from 'react';

function ThreeScene() {
    useEffect(() => {
        const canvas = document.getElementById('canvas');
        canvas?.classList.remove('opacity-0');
        canvas?.classList.add('opacity-100');
    }, []);

    const boxGeometry = <boxBufferGeometry args={[0.5, 0.5, 0.5]} />;
    const boxMaterial = <meshStandardMaterial color={'white'} />;

    return (
        <>
            <Canvas
                id="canvas"
                className="transition-all duration-[1000ms] opacity-0 w-screen h-screen overflow-y-hidden"
            >
                <ambientLight />
                <OrbitControls autoRotate />
                {[...Array(800)].map((_, i) => (
                    <Box
                        key={i}
                        material={boxMaterial}
                        geometry={boxGeometry}
                    />
                ))}
            </Canvas>
        </>
    );
}

export default ThreeScene;
