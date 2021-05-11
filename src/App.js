import { ARCanvas } from '@react-three/xr'
import { Box } from '@react-three/drei'

function App() {
  return (
    <ARCanvas>
      <ambientLight />
      <pointLight position={[10, 10, 10]} />
      <Box position={[0, 0, -1]} args={[0.1, 0.1, 0.1]}/>      
    </ARCanvas>
  );
}

export default App;
