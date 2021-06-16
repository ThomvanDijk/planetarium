/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
author: SpiderCraft9972 (https://sketchfab.com/oscar.lopez.riviello)
license: CC-BY-4.0 (http://creativecommons.org/licenses/by/4.0/)
source: https://sketchfab.com/3d-models/ufo-ef687f700ed64686834aaa912ac0e70f
title: U.F.O.
*/

import React, { useRef, useEffect } from 'react'
import { useGLTF, useAnimations } from '@react-three/drei'

export default function Model(props) {
  const group = useRef()
  const { nodes, materials, animations } = useGLTF('assets/ufo/scene.gltf')
  const { actions } = useAnimations(animations, group)

  useEffect(() => {
    console.log(actions); // hover flight abduction_rings
    actions.flight.play();
  });

  return (
    <group ref={group} {...props} dispose={null}>
      <group rotation={[-Math.PI / 2, 0, 0]} scale={[2, 2, 2]}>
        <group rotation={[Math.PI / 2, 0, 0]}>
          <group scale={[0.01, 0.01, 0.01]}>
            <primitive object={nodes.GLTF_created_0_rootJoint} />
            <skinnedMesh
              geometry={nodes.Object_17.geometry}
              material={materials.material_0}
              skeleton={nodes.Object_17.skeleton}
            />
          </group>
        </group>
      </group>
    </group>
  )
}

useGLTF.preload('assets/ufo/scene.gltf')
