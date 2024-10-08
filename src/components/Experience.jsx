import { useRef } from "react";
import { useFrame } from "@react-three/fiber";

import { Trafic } from "./Trafic";
import { Environment } from "@react-three/drei";

export const Experience = () => {

    return (
        <>
            <Environment preset="sunset" />

            <Trafic position={[0, 0, 0]} />

            <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, 0, 0]} receiveShadow>
                <planeGeometry args={[100, 100]} />
                <meshStandardMaterial color="gray" />
            </mesh>


        </>
    );
};