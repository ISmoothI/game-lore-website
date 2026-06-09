"use client";

import { useGLTF } from '@react-three/drei'
import {prefix} from "@/lib/prefix";

export default function Ampoule({props, position=[0, -1, 0]})  {
    const { nodes, materials } = useGLTF(`${prefix}/assets/silent-hill/models/Ampoule.glb`)
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

useGLTF.preload(`${prefix}/assets/silent-hill/models/Ampoule.glb`)
