import { toast } from "react-toastify";

const toastWarning = (message) => {
  toast.warn(message, {
    position: toast.POSITION.BOTTOM_CENTER,
    autoClose: 1000,
  });
};

const toastError = (message) => {
  toast.error(message, {
    position: toast.POSITION.BOTTOM_CENTER,
    autoClose: 1000,
  });
};

export { toastWarning, toastError };
