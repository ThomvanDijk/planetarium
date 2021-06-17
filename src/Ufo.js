/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
author: SpiderCraft9972 (https://sketchfab.com/oscar.lopez.riviello)
license: CC-BY-4.0 (http://creativecommons.org/licenses/by/4.0/)
source: https://sketchfab.com/3d-models/ufo-ef687f700ed64686834aaa912ac0e70f
title: U.F.O.
*/

import React, { useRef, useEffect, useCallback } from 'react'
import { useGLTF, useAnimations } from '@react-three/drei'
import { useFrame } from '@react-three/fiber';

export default function Model(props) {
  const group = useRef()
  const { nodes, materials, animations } = useGLTF('assets/ufo/scene.gltf')
  const { actions } = useAnimations(animations, group)
  
  let move = true
  let angle = 0
  const radius = 0.4
  const speed = 0.01

  useEffect(() => {
    // Actions: hover flight abduction_rings
    actions.hover.play()
  });

  useFrame(({ clock }) => {
    if (move) {
      // Move ufo vertically around the given position on the y and z plane
      angle += speed
      group.current.position.y = props.position[1] + Math.sin(angle) * radius
      group.current.position.z = props.position[2] + Math.cos(angle) * radius
    }

    // Rotate ufo towards the origin of the rotation (center of earth)
    const rotation_x = Math.atan2(props.position[2] - group.current.position.z, props.position[1] - group.current.position.y)
    group.current.rotation.x = rotation_x + Math.PI

  });

  const handleClick = useCallback(e => {
    move = !move

    if (move) {
      actions.abduction_rings.stop()
      actions.hover.play()
      // group.current.position.y += 0.2 // Animation offset, blame the artist
    } else {
      actions.hover.stop()
      actions.abduction_rings.play()
      // group.current.position.y -= 0.2
    }
  })

  return (
    <group ref={group} {...props} dispose={null}>
      <group rotation={[-Math.PI / 2, 0, 0]} scale={[2, 2, 2]}>
        <group rotation={[Math.PI / 2, 0, 0]}>
          <group scale={[0.01, 0.01, 0.01]}>
            <primitive object={nodes.GLTF_created_0_rootJoint} />
            <skinnedMesh
              onClick={handleClick}
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
