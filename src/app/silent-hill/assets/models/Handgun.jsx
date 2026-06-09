"use client";

import { useGLTF } from '@react-three/drei'

export default function Handgun({props, position=[0, 0, 0]})  {
    const { nodes, materials } = useGLTF('/assets/silent-hill/models/Handgun.glb')
    return (
        <group {...props} dispose={null}>
            <mesh
                geometry={nodes.Handgun.geometry}
                material={materials.Handgun_texture}
                position={position}
                scale={22}
            />
        </group>
    )
}

useGLTF.preload('/assets/silent-hill/models/Handgun.glb')
