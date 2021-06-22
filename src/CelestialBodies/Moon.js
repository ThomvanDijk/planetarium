import { useTexture, Sphere } from '@react-three/drei'

export default function Moon(props) {
  const texture = useTexture('assets/textures/moon.png')

  return (
    <Sphere {...props} args={[props.diameter, 32, 32]} >
      <meshBasicMaterial map={texture} />
    </Sphere>
  )
}