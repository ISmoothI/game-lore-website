"use client";

import { useGLTF } from '@react-three/drei'
import {prefix} from "@/lib/prefix";

export default function HandgunAmmo({props, position=[0, 0, 0]})  {
    const { nodes, materials } = useGLTF(`${prefix}/assets/silent-hill/models/HandgunAmmo.glb`)
    return (
        <group {...props} dispose={null}>
            <mesh
                geometry={nodes.Handgun_Ammo.geometry}
                material={materials.HandgunAmmo_texture}
                position={position}
                scale={20}
                rotation={[1.7, 0, 0]}
            />
        </group>
    )
}

useGLTF.preload(`${prefix}/assets/silent-hill/models/HandgunAmmo.glb`)
