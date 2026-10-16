let origin = null

export function setTransitionOrigin(x, y) {
  origin = { x, y }
}

export function getTransitionOrigin() {
  return origin ?? { x: window.innerWidth / 2, y: window.innerHeight / 2 }
}

export function resetTransitionOrigin() {
  origin = null
}
