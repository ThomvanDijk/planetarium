/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
author: chrisonciuconcepts (https://sketchfab.com/chrisonciuconcepts)
license: CC-BY-4.0 (http://creativecommons.org/licenses/by/4.0/)
source: https://sketchfab.com/models/587941c9c11742c6b82dfb99e7b210b9
title: low poly space ship
*/

import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export default function Model(props) {
  const group = useRef()
  const { nodes, materials } = useGLTF('assets/space_ship/scene.gltf')
  return (
    <group ref={group} {...props} dispose={null}>
      <group rotation={[-Math.PI / 2, 0, 0]}>
        <mesh geometry={nodes.ship_1.geometry} material={materials.Material} />
      </group>
    </group>
  )
}

useGLTF.preload('assets/space_ship/scene.gltf')
