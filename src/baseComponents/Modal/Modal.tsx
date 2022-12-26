import { Dialog, Transition } from '@headlessui/react'
import { Fragment } from 'react'
import { Button } from '../Button'
import { ModalProps } from './model'

export const Modal = ({
  open,
  content,
  footerButtons,
  toggleModal,
  title,
  description,
  blurOverlay = true,
  size = 'md',
}: ModalProps) => {
  const modalSize =  `max-w-${size}`

  const closeModal = () => {
    toggleModal?.(false)
  }

  return (
    <>
      <Transition appear show={open} as={Fragment}>
        <Dialog as="div" className="relative z-10" onClose={closeModal}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-100"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-100"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className={`fixed inset-0 bg-black bg-opacity-25 ${blurOverlay ? `backdrop-blur-md` : ""}`} />
          </Transition.Child>

          <div className="fixed inset-0 overflow-y-auto shadow-sm">
            <div className="flex min-h-full items-center justify-center p-4 text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-50 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-100"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className={`w-full ${modalSize} transform overflow-hidden rounded-xl bg-slate-900 p-8 text-left align-middle shadow-md transition-all`}>
                  {
                    title && (
                      <Dialog.Title
                        as="h3"
                        className="text-lg font-medium leading-6 text-slate-400"
                      >
                        {title}
                      </Dialog.Title>

                    )
                  }
                  {
                    description && (

                      <Dialog.Description className="mt-2 text-slate-600 font-medium">
                        {description}
                      </Dialog.Description>
                    )
                  }

                  <div className="mt-2">
                    {content}
                  </div>

                  <div className="mt-2 flex justify-end gap-4">
                    {
                      footerButtons?.map((button) =>
                        <Button {...button}> {button.text} </Button>
                      )
                    }
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  )
}
