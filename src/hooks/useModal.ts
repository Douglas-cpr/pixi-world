import bus from '@/utils/bus'

type ModalCallback = (
  (...args: any) => void
)

interface IUseModal {
  open: (payload: any) => void;
  close: (payload: any) => void;
  listen: (cb: ModalCallback) => void;
  off: (cb: ModalCallback) => void;
}

const EVENT_NAME = 'modal:toggle'

export function useModal(): IUseModal {
  function open(payload = {}) {
    bus.emit(EVENT_NAME, {
      ...payload,
      status: true
    })
  }

  function close(payload = {}) {
    bus.emit(EVENT_NAME, {
      ...payload,
      status: false
    })
  }

  function listen(cb: ModalCallback) { 
    bus.on(EVENT_NAME, cb)
  }

  function off(cb: ModalCallback) {
    bus.off(EVENT_NAME, cb)
  }

  return {
    open,
    close,
    listen,
    off
  }
}

