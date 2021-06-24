import { useRef } from 'react'
import { useFrame } from '@react-three/fiber'
import { useTexture, Sphere } from '@react-three/drei'

export default function Earth(props) {
  const texture = useTexture('assets/textures/earth.jpg')
  const clouds_texture = useTexture('assets/textures/earth_clouds.jpg')

  // The cloud height is around 12 km at it's highest point and the earths diameter is 12,756 km at 
  // the equator. Therefore the magnification factor is: (12,756 + 24) / 12,756 = 1,001881467544685
  const cloud_diameter = props.diameter * 1.001881467544685

  const ref = useRef()

  useFrame(() => {
    // Rotation of clouds with a random unrealistic speed
    ref.current.rotation.x = ref.current.rotation.y += 0.0002
  })

  return (
    <>
      <Sphere {...props} args={[props.diameter, 64, 64]} >
        <meshBasicMaterial map={texture}/>
      </Sphere>
      <Sphere {...props} ref={ref} args={[cloud_diameter, 64, 64]} >
        <meshBasicMaterial alphaMap={clouds_texture} transparent/>
      </Sphere>
    </>
  )
}