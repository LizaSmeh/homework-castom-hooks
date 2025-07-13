import { useState } from "react";
import {useWindowEvent} from './useWindowEvent'

export const useViewportSize = () => {
  
  const [windowWidth, setWindowWidth] = useState(() => window.innerWidth)
  const [windowHeight, setWindowHeight] = useState(() => window.innerHeight)

  useWindowEvent('resize', () => {
    setWindowWidth(window.innerWidth)
    setWindowHeight(window.innerHeight)
  })

  return {
    width: windowWidth,
    height: windowHeight,
  }
};
