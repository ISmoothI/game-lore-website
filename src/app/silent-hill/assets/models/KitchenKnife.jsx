"use client";

import { useGLTF } from '@react-three/drei'
import {prefix} from "@/lib/prefix";

export default function KitchenKnife({props, position=[0, -3, 0]})  {
    const { nodes, materials } = useGLTF(`${prefix}/assets/silent-hill/models/KitchenKnife.glb`)
    return (
        <group {...props} dispose={null}>
            <mesh
                geometry={nodes.Kitchen_Knife.geometry}
                material={materials.KitchenKnife_texture}
                position={position}
                scale={23}
                rotation={[1.7, 3.1, 0]}
            />
        </group>
    )
}

useGLTF.preload(`${prefix}/assets/silent-hill/models/KitchenKnife.glb`)
