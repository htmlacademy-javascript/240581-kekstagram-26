const getData = (onSuccess, onFail) => {
  fetch('https://26.javascript.pages.academy/kekstagram/data')
    .then((response) => {
      if (response.ok) {
        return response.json();
      }
      throw new Error('Не удалось загрузить новые фотографии');
    })
    .then((photos) => onSuccess(photos))
    .catch((err) => {
      onFail(err.message);
    });
};

const sendData = (onSuccess, onFail, body) => {
  fetch('https://26.javascript.pages.academy/kekstagram',
    {
      method: 'POST',
      body,
    }
  )
    .then((response) => {
      if (response.ok) {
        return onSuccess();
      }
      throw new Error('Не удалось отправить форму. Попробуйте ещё раз!');
    })
    .catch((err) => {
      onFail(err.message);
    });
};

export {getData, sendData};
