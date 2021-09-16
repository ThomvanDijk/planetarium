import { Suspense } from 'react'
import { ARCanvas } from '@react-three/xr'
import { OrbitControls } from '@react-three/drei'

import Spaceship from './models/Spaceship'
import Ufo from './models/Ufo'
import Earth from './celestial_bodies/Earth'
import Moon from './celestial_bodies/Moon'

export default function App() {
  const earth_diameter = 0.4
  const earth_position = [0, 0, -1]
  
  return (
    // The height property is css code and used to make the
    // canvas element higher when AR is not active
    <ARCanvas style={{height:900}}>
      <Suspense fallback={null}>
        <pointLight position={[0, 200, 200]} intensity={1} />
        <ambientLight intensity={1} />

        {/* The distance between earth and moon is NOT TO SCALE! */}
        <Earth position={earth_position} diameter={earth_diameter}/>
        
        {/* The radius of the moon is 27 percent the size of earth*/}
        <Moon position={[-1, 0, -1]} diameter={earth_diameter * 0.27}/>

        <Spaceship position={earth_position} orbit_radius={1.5} speed={0.5} scale={0.05}/>
        <Ufo position={earth_position} orbit_radius={0.4} speed={0.01} scale={0.05}/>

        {/* Orbit controls are used to move the camera around when AR is not active */}
        <OrbitControls/>
      </Suspense>
    </ARCanvas>
  )
}
