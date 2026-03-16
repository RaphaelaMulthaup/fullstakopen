const Notification = ({ message }) => {
  if (message.message === null) {
    return null;
  }

  return (
    <div className={`notification ${message.error ? "error" : undefined}`}>{message.message}</div>
  );
};

export default Notification;
