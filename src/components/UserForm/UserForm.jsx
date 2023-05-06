import React, { useState } from 'react';
import style from './style.module.scss';
import UserReg from './UserReg';
import UserLogin from './UserLogin';

// типы форм (регистрация, вход)
const formTypes = ['signup', 'login'];

function UserForm() {
  //изначально устанавливаем тип формы на регистрацию
  const [formType, setFormType] = useState(formTypes[0]);

  //функция для изменения типа формы (передается в каждую компоненту)
  function changeForm(type) {
    setFormType(type);
  }

  return (
    <div className={style.user_form}>
      {/* Проверка на то, какая форма будет показываться */}
      {formType === formTypes[0] ? (
        <UserReg changeForm={changeForm} />
      ) : (
        <UserLogin changeForm={changeForm} />
      )}
    </div>
  );
}

export default UserForm;
