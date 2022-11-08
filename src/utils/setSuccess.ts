import toast from 'react-hot-toast'
import consoleLog from './consoleLog'

const setSuccess = (title: string, message: string): void => {
  consoleLog(`${title} success`, '#00FF00', message)
  toast.success(message)
}

export default setSuccess
