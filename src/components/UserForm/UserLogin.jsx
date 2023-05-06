import React, { useState } from 'react';
import style from './style.module.scss';

function UserLogin({ changeForm }) {
  const [values, setValues] = useState({
    username: '',
    password: ''
  });

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

  return (
    <form className={style.form} onSubmit={submitForm}>
      <h2 className={style.title}>Welcome back!</h2>
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
        />
        <label className={style.input_label}>Username</label>
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
        />
        <label className={style.input_label}>Password</label>
      </div>
      <button className={style.form_btn} type="submit">
        Login
      </button>
      <button onClick={() => changeForm('signup')} className={style.change_form}>
        I don't have an account
      </button>
    </form>
  );
}

export default UserLogin;
