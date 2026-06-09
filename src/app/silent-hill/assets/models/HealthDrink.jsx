"use client";

import { useGLTF } from "@react-three/drei";

export default function HealthDrink({props, position=[0, -1, 0]}) {
    const { nodes, materials } = useGLTF('/assets/silent-hill/models/HealthDrink.glb')
    return (
        <group {...props} dispose={null}>
            <mesh
                geometry={nodes.Health_Drink.geometry}
                material={materials.HealthDrink_texture}
                position={position}
                scale={4}
            />
        </group>
    )
};

useGLTF.preload('/assets/silent-hill/models/HealthDrink.glb');