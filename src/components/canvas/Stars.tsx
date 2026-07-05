import { Suspense, useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Points, PointMaterial, Preload } from '@react-three/drei';
import * as random from 'maath/random';
import type { Points as PointsType } from 'three';




const Stars = () => {

  const ref = useRef<PointsType>(null);

  // buffer length must be divisible by 3 (x, y, z per star) or the last vertex is NaN
  const sphere = random.inSphere(new Float32Array(21999), {radius: 8}) as Float32Array

  useFrame((_state, delta) => {
    if (ref.current) {
      ref.current.rotation.x += delta / 15;
      ref.current.rotation.y += delta / 10;
    }
  })

  return (
    <group>
      <Points ref={ref} positions={sphere} stride={3} frustumCulled>
        <PointMaterial transparent color='#fff' size={0.01} sizeAttenuation={true} depthWrite={false} />
      </Points>
    </group>
  )
}

const StarsCanvas = () => {
  return (
    <div className='w-full h-auto absolute inset-0 z-[-1]'>
      <Canvas camera={{position: [0, 0, 1]}}>
        <Suspense fallback={null}>
          <Stars />
        </Suspense>

        <Preload all/>
      </Canvas>
    </div>
  )
}

export default StarsCanvas
