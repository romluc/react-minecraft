import { useCallback, useEffect, useState } from 'react'

const actionByKey = (key) => {
  const keyActionMap = {
    KeyW: 'moveForward',
    KeyS: 'moveBackward',
    KeyA: 'moveLeft',
    KeyD: 'moveRight',
    Jump: 'space',
    Digit1: 'dirt',
    Digit2: 'grass',
    Digit3: 'glass',
    Digit4: 'wood',
    Digit5: 'log',
  }

  return keyActionMap[key]
}

export const useKeyboard = () => {
  const [actions, setActions] = useState({
    moveForward: false,
    moveBackward: false,
    moveLeft: false,
    moveRight: false,
    jump: false,
    texture1: false,
    texture2: false,
    texture3: false,
    texture4: false,
    texture5: false,
  })

  const handleKeyUp = useCallback((e) => {
    const action = actionByKey(e.code)

    if (action) {
      setActions((prev) => ({
        ...prev,
        [action]: true,
      }))
    }
  }, [])

  const handleKeyDown = useCallback((e) => {
    const action = actionByKey(e.code)

    if (action) {
      setActions((prev) => ({
        ...prev,
        [action]: true,
      }))
    }
  }, [])

  useEffect(() => {
    document.addEventListener('keyup', handleKeyUp)
    document.addEventListener('keydown', handleKeyDown)
    return () => {
      document.removeEventListener('keyup', handleKeyUp)
      document.removeEventListener('keydown', handleKeyDown)
    }
  })

  return actions
}
