import { XCircleIcon } from '@heroicons/react/solid';

const Alert = ({ alert, handleClose }) => {
  if (alert && alert?.autoClose) {
    setTimeout(() => {
      handleClose();
    }, 9000);
  }
  let alertColor = '';  
  switch (alert?.type) {
    case 'success':
      alertColor='green';
      break;
    case 'error':
      alertColor='red';
      break;
  }
  let alertStyle = `p-5 w-full mb-8 border-${alertColor}-400 border-t-4`;

  return (
    <>
      {alert?.active && (
        <div x-data className={alertStyle}>
          <div className="flex space-x-3">
            <div className="flex-1 leading-tight text-sm font-medium">{alert.message}</div>
            <button type="button">
              <XCircleIcon className="w-6 h-6 text-gray-600" onClick={handleClose} />
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default Alert;
