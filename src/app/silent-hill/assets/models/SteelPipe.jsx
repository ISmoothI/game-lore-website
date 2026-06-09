"use client";

import { useGLTF } from '@react-three/drei'
import {prefix} from "@/lib/prefix";

export default function SteelPipe({props, position=[0, 0, 0]})  {
    const { nodes, materials } = useGLTF(`${prefix}/assets/silent-hill/models/SteelPipe.glb`)
    return (
        <group {...props} dispose={null}>
            <mesh
                geometry={nodes.Steel_Pipe.geometry}
                material={materials.SteelPipe_texture}
                position={position}
                scale={10}
                rotation={[-0.2, 0, 0]}
            />
        </group>
    )
}

useGLTF.preload(`${prefix}/assets/silent-hill/models/SteelPipe.glb`)
