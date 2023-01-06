import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import Star from './Star';
import { useEffect } from 'react';

function ThreeScene() {
    useEffect(() => {
        const canvas = document.getElementById('canvas');
        canvas?.classList.remove('opacity-0');
        canvas?.classList.add('opacity-100');
    }, []);

    const starGeometry = <sphereGeometry args={[0.25, 24, 24]} />;
    const starMaterial = <meshStandardMaterial color={'white'} />;

    return (
        <>
            <Canvas
                id="canvas"
                className="transition-all duration-[1000ms] opacity-0 w-screen h-screen overflow-y-hidden"
            >
                <ambientLight />
                <OrbitControls autoRotate />
                {[...Array(1000)].map((_, i) => (
                    <Star
                        key={i}
                        material={starMaterial}
                        geometry={starGeometry}
                    />
                ))}
            </Canvas>
        </>
    );
}

export default ThreeScene;
