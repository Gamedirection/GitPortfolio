import { useEffect, useRef } from 'react'
import { useTheme } from '../context/ThemeContext'
import { usePrefersReducedMotion } from '../hooks/usePrefersReducedMotion'

const SPACING = 42
const CURSOR_RADIUS = 150
const LINK_DISTANCE = SPACING * 1.6

export function Background() {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const { theme } = useTheme()
  const reducedMotion = usePrefersReducedMotion()

  useEffect(() => {
    const canvas = canvasRef.current
    const ctx = canvas?.getContext('2d')
    if (!canvas || !ctx) return

    let width = 0
    let height = 0
    let points: { x: number; y: number }[] = []
    let mouseX = -9999
    let mouseY = -9999
    let frameRequested = false

    const dpr = Math.min(window.devicePixelRatio || 1, 2)

    function buildGrid() {
      points = []
      const cols = Math.ceil(width / SPACING) + 1
      const rows = Math.ceil(height / SPACING) + 1
      for (let i = 0; i <= cols; i++) {
        for (let j = 0; j <= rows; j++) {
          points.push({ x: i * SPACING, y: j * SPACING })
        }
      }
    }

    function resize() {
      width = window.innerWidth
      height = window.innerHeight
      canvas!.width = width * dpr
      canvas!.height = height * dpr
      canvas!.style.width = `${width}px`
      canvas!.style.height = `${height}px`
      ctx!.setTransform(dpr, 0, 0, dpr, 0, 0)
      buildGrid()
      draw()
    }

    function draw() {
      const styles = getComputedStyle(document.documentElement)
      const dotColor = styles.getPropertyValue('--color-text-muted').trim()
      const lineColor = styles.getPropertyValue('--color-accent').trim()

      ctx!.clearRect(0, 0, width, height)

      ctx!.globalAlpha = 0.35
      ctx!.fillStyle = dotColor
      for (const p of points) {
        ctx!.beginPath()
        ctx!.arc(p.x, p.y, 1.1, 0, Math.PI * 2)
        ctx!.fill()
      }
      ctx!.globalAlpha = 1

      if (!reducedMotion && mouseX > -1000) {
        const near = points.filter(
          (p) => Math.hypot(p.x - mouseX, p.y - mouseY) < CURSOR_RADIUS,
        )

        ctx!.strokeStyle = lineColor
        ctx!.lineWidth = 1

        for (let a = 0; a < near.length; a++) {
          for (let b = a + 1; b < near.length; b++) {
            const dist = Math.hypot(
              near[a].x - near[b].x,
              near[a].y - near[b].y,
            )
            if (dist < LINK_DISTANCE) {
              ctx!.globalAlpha = (1 - dist / LINK_DISTANCE) * 0.5
              ctx!.beginPath()
              ctx!.moveTo(near[a].x, near[a].y)
              ctx!.lineTo(near[b].x, near[b].y)
              ctx!.stroke()
            }
          }
        }
        ctx!.globalAlpha = 1
      }
    }

    function scheduleDraw() {
      if (frameRequested) return
      frameRequested = true
      requestAnimationFrame(() => {
        frameRequested = false
        draw()
      })
    }

    function onMouseMove(e: MouseEvent) {
      mouseX = e.clientX
      mouseY = e.clientY
      scheduleDraw()
    }

    function onMouseLeave() {
      mouseX = -9999
      mouseY = -9999
      scheduleDraw()
    }

    resize()
    window.addEventListener('resize', resize)
    if (!reducedMotion) {
      window.addEventListener('mousemove', onMouseMove)
      window.addEventListener('mouseleave', onMouseLeave)
    }

    return () => {
      window.removeEventListener('resize', resize)
      window.removeEventListener('mousemove', onMouseMove)
      window.removeEventListener('mouseleave', onMouseLeave)
    }
  }, [theme, reducedMotion])

  return (
    <canvas
      ref={canvasRef}
      aria-hidden="true"
      className="bg-canvas"
    />
  )
}
