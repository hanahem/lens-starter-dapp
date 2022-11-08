import toast from 'react-hot-toast'
import consoleLog from './consoleLog'

const setLoading = (title: string, message: string): void => {
  consoleLog(`${title} loading`, '#FFA500', message)
  toast.loading(message)
}

export default setLoading
