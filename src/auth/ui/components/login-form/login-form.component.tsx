import { JSX } from 'react';
import { useLoginUser } from '@/auth/application/login-user/use-login-user';

const LoginFormComponent: JSX.Element = () => {
  const {
    isLoading,
    visibility,
    setPassword,
    setEmail,
    login,
    changeVisibility,
  } = useLoginUser();
  return (
    <div
      className={
        'd-flex flex-column justify-content-center align-items-center w-100'
      }
    >
      <h2 className={'w-50 text-center'}>
        Únete a nuestra App para comprar ropa
      </h2>
      <button onClick={changeVisibility}>Cambiar visibilidad</button>
      <form>
        <div className={'d-flex flex-column'}>
          <div className={'py-3'}>
            <input
              className={'p-1'}
              name={'email'}
              type={'text'}
              onChange={setEmail}
              placeholder={'email'}
            />
          </div>
          <div className={'py-3'}>
            <input
              className={'p-1'}
              name={'password'}
              type={visibility ? 'text' : 'password'}
              onChange={setPassword}
              placeholder={'password'}
            />
          </div>
          <button
            className={'rounded-3 border-0 p-2'}
            disabled={isLoading}
            type={'submit'}
            onSubmit={login}
          >
            Login
          </button>
        </div>
      </form>
    </div>
  );
};

export default LoginFormComponent;
