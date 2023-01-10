import { Html } from '@react-three/drei';
import { Canvas, useFrame } from '@react-three/fiber';
import dynamic from 'next/dynamic';
import { Suspense, useEffect, useRef } from 'react';
import { isMobile } from 'react-device-detect';
import RingLoader from 'react-spinners/RingLoader';
import { Mesh } from 'three';

const Gltf = dynamic(() => import('../Gltf'), { ssr: false });

interface iAvatarProps {
    isMobile?: boolean;
}

function Avatar(props: iAvatarProps) {
    const avatarRef = useRef<Mesh>(null);

    function MoveCamera() {
        useFrame(({ camera }) => {
            camera.position.z = 2;
            camera.lookAt(avatarRef.current!.position);
        });
        return null;
    }
    useEffect(() => {
        if (isMobile) {
            console.log('Mobile');
        } else {
            window.addEventListener('mousemove', (event) => {
                if (avatarRef.current != null) {
                    avatarRef.current!.rotation.y =
                        event.clientX / window.innerWidth - 0.5;
                    avatarRef.current!.rotation.x =
                        event.clientY / window.innerHeight;

                    avatarRef.current!.position.x =
                        (event.clientX / window.innerWidth - 0.5) * 3;
                    avatarRef.current!.position.y =
                        (event.clientY / window.innerHeight - 0.5) * -3;
                }
            });
        }
    });

    return (
        <Canvas>
            <ambientLight />
            <MoveCamera />
            <mesh ref={avatarRef}>
                <Suspense
                    fallback={
                        <Html center>
                            <RingLoader color="white" />
                        </Html>
                    }
                >
                    <Gltf />
                </Suspense>
            </mesh>
        </Canvas>
    );
}

export default Avatar;
