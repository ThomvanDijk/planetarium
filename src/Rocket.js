/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
author: chrisonciuconcepts (https://sketchfab.com/chrisonciuconcepts)
license: CC-BY-4.0 (http://creativecommons.org/licenses/by/4.0/)
source: https://sketchfab.com/models/587941c9c11742c6b82dfb99e7b210b9
title: low poly space ship
*/

import React, { useRef, useCallback } from 'react'
import { useGLTF } from '@react-three/drei'
import { useFrame } from '@react-three/fiber';
// import { Interactive } from '@react-three/xr'

export default function Model(props) {
  const group = useRef()
  const { nodes, materials } = useGLTF('assets/space_ship/scene.gltf')
  let newRotation = 0
  const radius = 3

  useFrame(({ clock }) => {
    const a = clock.getElapsedTime() / 2;

    // Move rocket around a point
    group.current.position.x = 0 + Math.sin(a) * radius
    group.current.position.z = -1 + Math.cos(a) * radius

    // Rotate rocket towards center
    let angle = Math.atan2(-1 - group.current.position.x, 0 - group.current.position.z)
    // console.log(angle)
    group.current.rotation.y = angle - Math.PI / 2

    if (group.current.rotation.z <= newRotation) {
      group.current.rotation.z += 0.1
    }
  });

  const handleClick = useCallback(e => {
    console.log(group.current.rotation.z)
    newRotation = group.current.rotation.z + 2 * Math.PI
  })

  return (
    <group ref={group} {...props} dispose={null}>
      <group rotation={[-Math.PI / 2, 0, 0]}>
        <mesh 
          onClick={handleClick} 
          geometry={nodes.ship_1.geometry} 
          material={materials.Material} 
        />
      </group>
    </group>
  )
}

useGLTF.preload('assets/space_ship/scene.gltf')
