"use client";

import { useGLTF } from '@react-three/drei'
import {prefix} from "@/lib/prefix";

export default function Radio({props, position=[0, 0, 0]})  {
    const { nodes, materials } = useGLTF(`${prefix}/assets/silent-hill/models/Radio.glb`)
    return (
        <group {...props} dispose={null}>
            <mesh
                geometry={nodes.Radio.geometry}
                material={materials.Radio_texture}
                position={position}
                scale={40}
            />
        </group>
    )
}

useGLTF.preload(`${prefix}/assets/silent-hill/models/Radio.glb`)
