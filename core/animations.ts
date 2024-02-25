import { Animation } from "./types"

export const SlideDown: Animation = {
  from: {
    y: -10,
    opacity: 0.5,
  },
  to: {
    y: 0,
    opacity: 1,
  },
}

export const ZoomIn: Animation = {
  from: {
    scale: 1.2,
    opacity: 0.5,
  },
  to: {
    scale: 1,
    opacity: 1,
  },
}
