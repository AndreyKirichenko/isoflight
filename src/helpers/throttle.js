const throttle = (callback, wait) => {
  let isThrottled = false,
    savedArgs,
    savedThis;

  function wrapper (){

    if (isThrottled) {
      savedArgs = arguments;
      savedThis = this;
      return;
    }

    callback.apply(this, arguments);

    isThrottled = true;

    setTimeout(() => {
      isThrottled = false;

      if (savedArgs) {
        wrapper.apply(savedThis, savedArgs);
        savedArgs = savedThis = null;
      }
    }, wait);
  }

  return wrapper;
};

export default throttle;
