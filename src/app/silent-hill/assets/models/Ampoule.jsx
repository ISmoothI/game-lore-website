"use client";

import { useGLTF } from '@react-three/drei'

export default function Ampoule({props, position=[0, -1, 0]})  {
    const { nodes, materials } = useGLTF('/assets/silent-hill/models/Ampoule.glb')
    return (
        <group {...props} dispose={null}>
            <mesh
                geometry={nodes.Ampoule.geometry}
                material={materials.Ampoule_texture}
                position={position}
                scale={70}
            />
        </group>
    )
}

useGLTF.preload('/assets/silent-hill/models/Ampoule.glb')
