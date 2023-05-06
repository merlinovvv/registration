import React, { useEffect, useState } from 'react';
import style from './style.module.scss';

function UserReg({ changeForm }) {
  //создаем стейт для данных в нашей форме
  const [values, setValues] = useState({
    username: '',
    email: '',
    password: '',
    repeat_password: '',
    file: '',
    agree: '',
  });
  //стейт для проверки паролей
  const [valueCorrect, setValueCorrect] = useState(true);
  //функция для отправки данных формы
  function submitForm(e) {
    e.preventDefault();

    //тут напишешь, что захочешь
    console.log(values, 'Data is send');
  }

  //при записывании чего-либо в инпут, будет менятся соответствующий value в стейте
  function handleChange({ target: { value, name } }) {
    setValues({ ...values, [name]: value });
  }

  //здесь идет проверка на совпадения паролей. Если не совпадают, то в стейт устанавливаем false. Этот стейт потом используем в форме
  useEffect(() => {
    if (
      values.repeat_password.length !== 0 &&
      values.repeat_password !== values.password
    ) {
      setValueCorrect(false);
    } else {
      setValueCorrect(true);
    }
  }, [values]);

  return (
    <form className={style.form} onSubmit={submitForm}>
      <h2 className={style.title}>Welcome!</h2>
      <div className={style.input_container}>
        <input
          className={`${style.input_form} ${
            values.username.length ? style.label_up : ''
          }`}
          type="text"
          name="username"
          value={values.username}
          autoComplete="off"
          onChange={handleChange}
          required
        />
        <label className={style.input_label}>Username</label>
      </div>
      <div className={style.input_container}>
        <input
          className={`${style.input_form} ${
            values.email.length ? style.label_up : ''
          }`}
          type="email"
          name="email"
          value={values.email}
          autoComplete="off"
          onChange={handleChange}
          required
        />
        <label className={style.input_label}>Email</label>
      </div>
      <div className={style.input_container}>
        <input
          className={`${style.input_form} ${
            values.password.length ? style.label_up : ''
          }`}
          type="password"
          name="password"
          value={values.password}
          autoComplete="off"
          onChange={handleChange}
          required
        />
        <label
          className={`${style.input_label} ${
            !valueCorrect ? style.uncorrect : ''
          }`}>
          Password
        </label>
      </div>
      <div className={style.input_container}>
        <input
          className={`${style.input_form} ${
            values.repeat_password.length ? style.label_up : ''
          }`}
          type="password"
          name="repeat_password"
          value={values.repeat_password}
          autoComplete="off"
          onChange={handleChange}
          required
        />
        <label
          className={`${style.input_label} ${
            !valueCorrect ? style.uncorrect : ''
          }`}>
          {!valueCorrect ? 'Password mismatch' : 'Repeat password'}
        </label>
      </div>
      <div className={style.file_input}>
        <input
          value={values.file}
          type="file"
          name="file"
          id="file"
          className={style.file_input__input}
          autoComplete="off"
          onChange={handleChange}
          required
        />
        <label className={style.file_input__label} htmlFor="file">
          <svg
            aria-hidden="true"
            focusable="false"
            data-prefix="fas"
            data-icon="upload"
            role="img"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 512 512">
            <path
              fill="currentColor"
              d="M296 384h-80c-13.3 0-24-10.7-24-24V192h-87.7c-17.8 0-26.7-21.5-14.1-34.1L242.3 5.7c7.5-7.5 19.8-7.5 27.3 0l152.2 152.2c12.6 12.6 3.7 34.1-14.1 34.1H320v168c0 13.3-10.7 24-24 24zm216-8v112c0 13.3-10.7 24-24 24H24c-13.3 0-24-10.7-24-24V376c0-13.3 10.7-24 24-24h136v8c0 30.9 25.1 56 56 56h80c30.9 0 56-25.1 56-56v-8h136c13.3 0 24 10.7 24 24zm-124 88c0-11-9-20-20-20s-20 9-20 20 9 20 20 20 20-9 20-20zm64 0c0-11-9-20-20-20s-20 9-20 20 9 20 20 20 20-9 20-20z"></path>
          </svg>
          <span>Upload file</span>
        </label>
      </div>

      <div className={style.input_container}>
        <label className={style.checkbox_label} htmlFor="agree">
          <input
            className={style.checkbox_form}
            type="checkbox"
            name="agree"
            id="agree"
            value={values.agree}
            required
          />
          <div className={style.control_indicator}></div>I agree with the{' '}
          <a href="/" style={{ color: '#7c42a8' }}>
            {' '}
            privacy policy
          </a>
        </label>
      </div>
      <button className={style.form_btn} type="submit">
        Sign up
      </button>
      <button onClick={() => changeForm('login')} className={style.change_form}>
        I already have an account
      </button>
    </form>
  );
}

export default UserReg;
