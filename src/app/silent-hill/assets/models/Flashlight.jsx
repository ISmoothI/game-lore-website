"use client";

import { useGLTF } from '@react-three/drei'
import {prefix} from "@/lib/prefix";

export default function Flashlight({props, position=[0, -3, 0]})  {
    const { nodes, materials } = useGLTF(`${prefix}/assets/silent-hill/models/Flashlight.glb`)
    return (
        <group {...props} dispose={null}>
            <mesh
                geometry={nodes.Flashlight.geometry}
                material={materials.Flashlight_texture}
                position={position}
                scale={34}
            />
        </group>
    )
}

useGLTF.preload(`${prefix}/assets/silent-hill/models/Flashlight.glb`)
