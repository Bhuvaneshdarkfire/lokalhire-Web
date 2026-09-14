import { useEffect, useRef } from 'react'
import * as THREE from 'three'

export function ThreeRadarScene() {
  const containerRef = useRef(null)

  useEffect(() => {
    const container = containerRef.current
    if (!container) return

    let width = container.clientWidth || window.innerWidth
    let height = container.clientHeight || 540

    const scene = new THREE.Scene()
    const camera = new THREE.PerspectiveCamera(42, width / height, 0.1, 1000)
    camera.position.set(0, 16, 24)
    camera.lookAt(0, 0, 0)

    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true })
    renderer.setSize(width, height)
    renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 2))
    container.appendChild(renderer.domElement)

    // Lighting
    const ambientLight = new THREE.AmbientLight(0xffffff, 1.2)
    scene.add(ambientLight)

    const blueLight = new THREE.DirectionalLight(0x2563eb, 1.6)
    blueLight.position.set(12, 20, 15)
    scene.add(blueLight)

    const emeraldLight = new THREE.PointLight(0x10b981, 2.2, 35)
    emeraldLight.position.set(-10, 10, -5)
    scene.add(emeraldLight)

    const mainGroup = new THREE.Group()
    scene.add(mainGroup)

    // Ground grid wireframe / subtle radar rings
    const ringRadii = [3.5, 6.2, 9.2, 12.4]
    ringRadii.forEach((r, idx) => {
      const curve = new THREE.EllipseCurve(0, 0, r, r, 0, 2 * Math.PI, false, 0)
      const pts = curve.getPoints(72)
      const geo = new THREE.BufferGeometry().setFromPoints(pts)
      const mat = new THREE.LineBasicMaterial({
        color: idx % 2 === 0 ? 0x2563eb : 0x10b981,
        transparent: true,
        opacity: 0.28 + idx * 0.08
      })
      const ring = new THREE.Line(geo, mat)
      ring.rotation.x = Math.PI / 2
      ring.position.y = 0
      mainGroup.add(ring)
    })

    // Subtle coordinate cross grid lines
    for (let i = -12; i <= 12; i += 4) {
      const ptsX = [new THREE.Vector3(-12, 0, i), new THREE.Vector3(12, 0, i)]
      const lineGeo = new THREE.BufferGeometry().setFromPoints(ptsX)
      const lineMat = new THREE.LineBasicMaterial({ color: 0x93c5fd, transparent: true, opacity: 0.15 })
      mainGroup.add(new THREE.Line(lineGeo, lineMat))

      const ptsZ = [new THREE.Vector3(i, 0, -12), new THREE.Vector3(i, 0, 12)]
      mainGroup.add(new THREE.Line(new THREE.BufferGeometry().setFromPoints(ptsZ), lineMat))
    }

    // Center Core - Glowing Pin / LOKALHIRE Beacon Hub
    const coreGeo = new THREE.CylinderGeometry(0.12, 0.12, 3.5, 16)
    const coreMat = new THREE.MeshStandardMaterial({
      color: 0x2563eb,
      roughness: 0.2,
      metalness: 0.1
    })
    const corePole = new THREE.Mesh(coreGeo, coreMat)
    corePole.position.y = 1.75
    mainGroup.add(corePole)

    const hubSphereGeo = new THREE.SphereGeometry(0.85, 32, 32)
    const hubSphereMat = new THREE.MeshPhongMaterial({
      color: 0x2563eb,
      emissive: 0x1d4ed8,
      shininess: 90,
      transparent: true,
      opacity: 0.9
    })
    const hubSphere = new THREE.Mesh(hubSphereGeo, hubSphereMat)
    hubSphere.position.y = 3.6
    mainGroup.add(hubSphere)

    const haloGeo = new THREE.TorusGeometry(1.4, 0.08, 16, 64)
    const haloMat = new THREE.MeshPhongMaterial({
      color: 0x10b981,
      emissive: 0x059669,
      transparent: true,
      opacity: 0.85
    })
    const halo = new THREE.Mesh(haloGeo, haloMat)
    halo.position.y = 3.6
    halo.rotation.x = Math.PI / 2
    mainGroup.add(halo)

    // Hyperlocal Venue Nodes
    const nodesData = [
      { x: 3.8, z: -2.8, color: 0x2563eb, h: 1.5, name: 'Supermarket' },
      { x: -4.6, z: 2.2, color: 0x10b981, h: 2.0, name: 'Pharmacy' },
      { x: 5.6, z: 4.0, color: 0x0284c7, h: 1.3, name: 'Cafe' },
      { x: -5.4, z: -4.2, color: 0x059669, h: 1.8, name: 'Delivery Hub' },
      { x: 1.5, z: 6.8, color: 0x4f46e5, h: 1.6, name: 'Mart' },
      { x: -2.2, z: -7.0, color: 0x0d9488, h: 1.4, name: 'Bakery' }
    ]

    const nodeMeshes = []
    nodesData.forEach((d, i) => {
      const g = new THREE.Group()
      g.position.set(d.x, 0, d.z)

      // Building block
      const bGeo = new THREE.BoxGeometry(1.2, d.h, 1.2)
      const bMat = new THREE.MeshPhongMaterial({
        color: 0xffffff,
        emissive: d.color,
        emissiveIntensity: 0.18,
        transparent: true,
        opacity: 0.9
      })
      const box = new THREE.Mesh(bGeo, bMat)
      box.position.y = d.h / 2
      g.add(box)

      // Floating map pin beacon sphere
      const pinGeo = new THREE.SphereGeometry(0.32, 16, 16)
      const pinMat = new THREE.MeshPhongMaterial({
        color: d.color,
        emissive: d.color,
        emissiveIntensity: 0.6
      })
      const pin = new THREE.Mesh(pinGeo, pinMat)
      pin.position.y = d.h + 0.6
      g.add(pin)

      // Beam to center
      const lineGeo = new THREE.BufferGeometry().setFromPoints([
        new THREE.Vector3(0, 0.2, 0),
        new THREE.Vector3(-d.x, 0.2, -d.z)
      ])
      const lineMat = new THREE.LineBasicMaterial({
        color: 0x60a5fa,
        transparent: true,
        opacity: 0.35
      })
      g.add(new THREE.Line(lineGeo, lineMat))

      mainGroup.add(g)
      nodeMeshes.push({ group: g, pin: pin, baseH: d.h, phase: i * 1.1 })
    })

    // Radar scanning fan wedge
    const sweepGeo = new THREE.RingGeometry(0.4, 12.8, 36, 1, 0, Math.PI / 3.2)
    const sweepMat = new THREE.MeshBasicMaterial({
      color: 0x10b981,
      transparent: true,
      opacity: 0.2,
      side: THREE.DoubleSide
    })
    const sweepMesh = new THREE.Mesh(sweepGeo, sweepMat)
    sweepMesh.rotation.x = Math.PI / 2
    sweepMesh.position.y = 0.05
    mainGroup.add(sweepMesh)

    // Floating talent connection particles
    const pCount = 90
    const pGeo = new THREE.BufferGeometry()
    const pPos = new Float32Array(pCount * 3)
    for (let i = 0; i < pCount * 3; i += 3) {
      pPos[i] = (Math.random() - 0.5) * 26
      pPos[i + 1] = Math.random() * 8
      pPos[i + 2] = (Math.random() - 0.5) * 26
    }
    pGeo.setAttribute('position', new THREE.BufferAttribute(pPos, 3))
    const pMat = new THREE.PointsMaterial({
      color: 0x2563eb,
      size: 0.16,
      transparent: true,
      opacity: 0.5
    })
    const particles = new THREE.Points(pGeo, pMat)
    mainGroup.add(particles)

    // Mouse interactive tilt
    let mouseX = 0
    let mouseY = 0
    const handleMouseMove = (e) => {
      const rect = container.getBoundingClientRect()
      mouseX = ((e.clientX - rect.left) / rect.width) * 2 - 1
      mouseY = -(((e.clientY - rect.top) / rect.height) * 2 - 1)
    }

    const handleResize = () => {
      if (!container) return
      const w = container.clientWidth || window.innerWidth
      const h = container.clientHeight || 540
      camera.aspect = w / h
      camera.updateProjectionMatrix()
      renderer.setSize(w, h)
    }

    window.addEventListener('mousemove', handleMouseMove)
    window.addEventListener('resize', handleResize)

    // Animation Loop
    let clock = new THREE.Clock()
    let animationFrameId
    function animate() {
      animationFrameId = requestAnimationFrame(animate)
      const time = clock.getElapsedTime()

      sweepMesh.rotation.z = -time * 0.8

      const pulse = 1 + Math.sin(time * 3.5) * 0.12
      hubSphere.scale.set(pulse, pulse, pulse)
      halo.scale.set(pulse * 1.05, pulse * 1.05, pulse * 1.05)

      nodeMeshes.forEach((n) => {
        n.pin.position.y = n.baseH + 0.6 + Math.sin(time * 2.2 + n.phase) * 0.22
      })

      mainGroup.rotation.y += ((mouseX * 0.4) - mainGroup.rotation.y) * 0.05 + 0.002
      mainGroup.rotation.x += ((mouseY * 0.2) - mainGroup.rotation.x) * 0.05

      particles.rotation.y = time * 0.025

      renderer.render(scene, camera)
    }
    animate()

    return () => {
      cancelAnimationFrame(animationFrameId)
      window.removeEventListener('mousemove', handleMouseMove)
      window.removeEventListener('resize', handleResize)
      if (renderer.domElement && container.contains(renderer.domElement)) {
        container.removeChild(renderer.domElement)
      }
      renderer.dispose()
    }
  }, [])

  return (
    <div
      ref={containerRef}
      className="w-full h-full min-h-[500px] sm:min-h-[540px] pointer-events-auto cursor-grab active:cursor-grabbing"
    />
  )
}
