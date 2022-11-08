import React, { FC, Fragment, ReactNode, useRef } from 'react'
import { Transition, Dialog } from '@headlessui/react'

type Props = {
  open: boolean
  setOpen: (v: boolean) => void
  title: string
  children: ReactNode
}

const Modal: FC<Props> = ({ open, setOpen, title, children }) => {
  const cancelButtonRef = useRef(null)
  return (
    <>
      <Transition.Root show={open} as={Fragment}>
        <Dialog
          as="div"
          className="fixed z-50 inset-0 overflow-y-auto w-full text-white"
          initialFocus={cancelButtonRef}
          onClose={setOpen}
        >
          <div className="flex items-center md:items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0 relative">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <Dialog.Overlay className="fixed inset-0 bg-black/30 bg-opacity-75 transition-opacity" />
            </Transition.Child>
            <span
              className="hidden sm:inline-block sm:align-middle sm:h-screen"
              aria-hidden
            >
              &#8203;
            </span>
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
              enterTo="opacity-100 translate-y-0 sm:scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 translate-y-0 sm:scale-100"
              leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
            >
              <div className="relative sm:min-h-96 inline-block align-bottom bg-blue rounded px-4 pt-5 pb-4 text-left overflow-hidden shadow-xl transform transition-all w-full sm:my-8 sm:align-middle sm:max-w-xl sm:w-full sm:p-8 post">
                <div className="w-full flex items-center justify-between mb-4">
                  <p className="text-2xl text-basil font-semibold font-header">
                    {title}
                  </p>
                  <button
                    onClick={(e) => {
                      e.stopPropagation()
                      setOpen(false)
                    }}
                  >
                    X
                  </button>
                </div>
                {children}
              </div>
            </Transition.Child>
          </div>
        </Dialog>
      </Transition.Root>
    </>
  )
}

export default Modal
