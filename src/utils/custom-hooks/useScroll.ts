import {
  useState,
  useEffect,
  useCallback,
  useMemo,
  useRef,
} from 'react'
import { debounce } from '../debounce'

export const useScroll = (
  threshold: number = 20,
  delay: number = 100,
  element?: HTMLElement | null,
): boolean => {
  const [scrolled, setScrolled] = useState(false)
  const scrollPositionRef = useRef(0)
  const isAboveThresholdRef = useRef(false)

  const updateScrollValues = () => {
    const scrollY =
      element?.scrollTop ?? window.scrollY
    scrollPositionRef.current = scrollY
    isAboveThresholdRef.current =
      scrollY > threshold
  }

  const handleScrollUp = useMemo(
    () =>
      debounce(() => setScrolled(false), delay),
    [delay],
  )

  const handleScroll = useCallback(() => {
    updateScrollValues()
    if (isAboveThresholdRef.current) {
      setScrolled(true)
    } else {
      handleScrollUp()
    }
  }, [handleScrollUp, element, threshold])

  useEffect(() => {
    const targetElement = element || window

    targetElement.addEventListener(
      'scroll',
      handleScroll,
    )

    return () => {
      targetElement.removeEventListener(
        'scroll',
        handleScroll,
      )
    }
  }, [handleScroll, element])

  return scrolled
}

export default useScroll
