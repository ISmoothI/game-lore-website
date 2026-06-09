"use client";

import { useGLTF } from "@react-three/drei";

export default function Empty({props, position=[0, 0, 0]}) {
    const { nodes, materials } = useGLTF('/assets/silent-hill/models/HealthDrink.glb')
    return (
        <mesh scale={4}>
            <boxGeometry />
            <meshStandardMaterial color={"orange"} transparent={true} opacity={0} />
        </mesh>
    )
};

useGLTF.preload('/assets/silent-hill/models/HealthDrink.glb');