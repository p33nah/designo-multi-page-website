import {useState} from 'react'

const useToggle = () => {
  const [on, setOn] = useState(false)
  const handleChange = () => setOn(!on)
  return [on, handleChange]
}

export default useToggle
