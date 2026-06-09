"use client";

import { useGLTF } from '@react-three/drei'

export default function FirstAidKit({props, position=[0, 0, 0]})  {
    const { nodes, materials } = useGLTF('/assets/silent-hill/models/FirstAidKit.glb')
    return (
        <group {...props} dispose={null}>
            <mesh
                geometry={nodes.First_Aid_Kit.geometry}
                material={materials.FirstAidKit_texture}
                position={position}
                scale={30}
                rotation={[1.6, 0, 0]}
            />
        </group>
    )
}

useGLTF.preload('/assets/silent-hill/models/FirstAidKit.glb')
