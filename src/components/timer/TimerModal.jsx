import React, { useImperativeHandle, forwardRef, useRef } from "react";

const TimerModal = forwardRef(({ time, remaining, onResetTimer }, ref) => {
  const dialog = useRef();

  let formattedValue = (remaining / 1000).toFixed(2);
  let score = Math.round((1 - remaining / (time * 1000)) * 100);
  let userLost = remaining <= 0;

  useImperativeHandle(ref, () => {
    return {
      open() {
        dialog.current.showModal();
      },
    };
  });

  return (
    <dialog ref={dialog} onClose={onResetTimer}>
      {userLost ? <p>You Lost</p> : <p>Your Score: {score}</p>}
      <p>The target time was {time} seconds</p>
      {userLost ? (
        <p>You didn't stop the timer.</p>
      ) : (
        <div>
          <p>You stopped the timer with {formattedValue} seconds left.</p>
        </div>
      )}
      <form method="dialog">
        <button onClick={onResetTimer}>Restart</button>
      </form>
    </dialog>
  );
});

export default TimerModal;
