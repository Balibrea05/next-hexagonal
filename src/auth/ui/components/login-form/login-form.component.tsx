import { FC } from 'react';
import { useLoginUserHook } from '@/auth/application/use-cases/login-user.hook';
import { useEmailValidationHook } from '@/auth/application/validations/email-validation.hook';
import Form from 'next/form';
import { useLengthValidationHook } from '@/shared/application/validations/length-validation.hook';

const LoginFormComponent: FC = () => {
  const {
    isLoading,
    visibility,
    setPassword,
    setEmail,
    login,
    changeVisibility,
    error,
  } = useLoginUserHook();

  const { isValidEmail, ensureEmailIsValid } = useEmailValidationHook();
  const { isValidLength, ensureHaveLength } = useLengthValidationHook();
  return (
    <div
      className={
        'd-flex flex-column justify-content-center align-items-center w-100'
      }
    >
      <h2 className={'w-50 text-center'}>
        Únete a nuestra App para comprar ropa
      </h2>
      <Form action={''} className={'w-25'}>
        <div className={'d-flex flex-column'}>
          <div className={'py-3'}>
            <input
              className={'p-1 w-100'}
              name={'email'}
              type={'text'}
              onChange={(e) => {
                setEmail(e.target.value);
                ensureEmailIsValid(e.target.value);
              }}
              placeholder={'email'}
              aria-label={'email input'}
            />
          </div>
          <div className="input-container-right py-3">
            <input
              className={'p-1 w-100'}
              name="password"
              type={visibility ? 'text' : 'password'}
              onChange={(e) => {
                setPassword(e.target.value);
                ensureHaveLength(e.target.value);
              }}
              placeholder="password"
              aria-label={'password input'}
            />
            <button
              onClick={changeVisibility}
              className="icon-button"
              aria-label={visibility ? 'Hide password' : 'Show password'}
            >
              <i
                className={`pi ${visibility ? 'pi-eye-slash' : 'pi-eye'}`}
                style={{ fontSize: '1rem' }}
              ></i>
            </button>
          </div>
          {error && <p className={'text-danger'}>Invalid email or password</p>}
          <button
            className={'rounded-3 border-0 p-2'}
            disabled={!isValidLength || !isValidEmail || isLoading}
            type={'button'}
            aria-label={'login button'}
            onClick={login}
          >
            Login
          </button>
        </div>
      </Form>
    </div>
  );
};

export default LoginFormComponent;
