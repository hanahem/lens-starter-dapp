import toast from 'react-hot-toast'
import consoleLog from './consoleLog'

const setError = (title: string, message: string): void => {
  consoleLog(`${title} error`, '#ef4444', message)
  toast.error(message)
}

export default setError
