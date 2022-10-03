/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react'
import { useState, useEffect, useRef } from 'react'

function Character({ top = 0, left = 0, sprites = {} }) {

  const characterBox = useRef(null)
  const minDuration = 0.3
  const pxPerSecond = 400
  const [duration, setDuration] = useState(9999)
  const [direction, setDirection] = useState(1)
  const [sprite, setSprite] = useState('standing')
  const [{ topPosition, leftPosition }, setPosition] = useState({ topPosition: 0, leftPosition: 0 })

  useEffect(() => {
    setSprite('running')
    const deltaX = Math.abs(left - characterBox.current.offsetLeft)
    const durationX = deltaX / pxPerSecond
    const deltaY = Math.abs(top - characterBox.current.offsetTop)
    const durationY = deltaY / pxPerSecond

    setDuration(durationX > durationY
      ? durationX > minDuration ? durationX : minDuration
      : durationY > minDuration ? durationY : minDuration
    )

    setTimeout(() => {
      const newDirection = left - characterBox.current.offsetLeft >= 0 ? 1 : -1
      setDirection(newDirection)
      setPosition({ topPosition: top, leftPosition: left })
    }, 100)
  }, [left, top])

  function onTransitionEnd(e) {
    setSprite('standing')
  }

  const baseStyles = {
    position: 'absolute',
    width: '78px',
    height: '140px',
    backgroundColor: 'transparent',
    transform: `translate(-50%, -50%) scaleX(${direction})`,
    zIndex: 1,
    transitionProperty: 'left, top',
    transitionTimingFunction: 'ease-in-out, ease-in-out',
    backgroundImage: 'url(/assets/character.png)',
  }

  const animatedStyles = {
    left: `${leftPosition}px`,
    top: `${topPosition}px`,
    transitionDuration: `${duration}s, ${duration}s`
  }

  return (
    <div
      ref={characterBox}
      css={[baseStyles, animatedStyles]}
      onTransitionEnd={onTransitionEnd}
      aria-hidden="true"
      tabIndex="-1"
    >
      <pre css={{ position: 'absolute', top: '-50px' }}>x:{leftPosition} y:{topPosition}</pre>
      <pre css={{ position: 'absolute', bottom: '-50px' }}>sprite: {sprite}</pre>
    </div>
  )
}

export default Character;