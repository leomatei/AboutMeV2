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
  delay: number = 100
) => {
  const [scrolled, setScrolled] = useState(false)
  const scrollPositionRef = useRef(0)
  const isAboveThresholdRef = useRef(false)

  const updateScrollValues = () => {
    scrollPositionRef.current = window.scrollY
    isAboveThresholdRef.current =
      window.scrollY > threshold
  }

  const handleScrollUp = useMemo(
    () =>
      debounce(() => setScrolled(false), delay),
    [delay]
  )

  const handleScroll = useCallback(() => {
    updateScrollValues()

    if (
      isAboveThresholdRef.current &&
      !scrolled
    ) {
      setScrolled(true)
    } else if (
      !isAboveThresholdRef.current &&
      scrolled
    ) {
      handleScrollUp()
    }
  }, [scrolled, handleScrollUp])

  useEffect(() => {
    window.addEventListener(
      'scroll',
      handleScroll
    )
    return () => {
      window.removeEventListener(
        'scroll',
        handleScroll
      )
    }
  }, [handleScroll])

  return scrolled
}

export default useScroll
