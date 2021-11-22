import React, { Suspense } from 'react'
import { Canvas } from '@react-three/fiber'
import Light from './Light'
import MeadlightBottle from './MeadlightBottle'

export default function CanvasController() {
    return (
        <div className="canvas">
            <Canvas colorManagement shadows camera={{ position: [0, 0, -3.7], fov: 40 }} style={{ width: '400px' }}>
                <Light />
                <Suspense fallback={null}>
                    <MeadlightBottle />
                </Suspense>
            </Canvas>
        </div>
    )
}
