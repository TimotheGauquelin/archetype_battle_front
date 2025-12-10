import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { Input } from '../components/generic/form/Input';
import { InputPassword } from '../components/generic/form/InputPassword';
import ErrorText from '../components/generic/errors/ErrorText';
import ActionButton from '../components/generic/buttons/ActionButton';
import { URL_FRONT_PASSWORD_LOST } from '../utils/urls/urlFront';
import NavigateButton from '../components/generic/buttons/NavigateButton';
import { LogProps } from '../interfaces/auth/Login.interface';
import { logIn } from '../services/auth/LogIn';
import { toast } from 'react-toastify';

const Login = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [log, setLog] = useState<LogProps>({
    email: '',
    password: '',
  } as LogProps);

  const [error, setError] = useState<string>('');
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const handleLogin = () => {
    setIsLoading(true);
    setError('');

    if (!log.email || !log.email.includes('@')) {
      setError('Veuillez saisir une adresse email valide');
      setIsLoading(false);
      return;
    }

    if (!log.password) {
      setError('Veuillez saisir votre mot de passe');
      setIsLoading(false);
      return;
    }

    logIn(log, dispatch, navigate, toast, setError, setIsLoading);
  };

  return (
    <div className="bg-gray-200 w-screen min-h-screen fixed left-0 top-0 flex justify-center items-center p-4">
      <div
        className={`bg-white w-full max-w-[400px] cardShadow rounded-xl flex flex-col p-4 sm:p-6`}
      >
        <div>
          <h3 className="text-xl sm:text-2xl text-center mb-4 font-semibold">
            Connectez-vous
          </h3>

          <div className="mb-4">
            <Input
              label="Email"
              required
              inputType="email"
              inputName="email"
              colSpanWidth="12"
              attribute="email"
              data={log.email}
              setAction={setLog}
              disabled={isLoading}
            />
          </div>

          <div className="mb-4">
            <InputPassword
              label="Mot de passe"
              required
              colSpanWidth="12"
              attribute="password"
              data={log.password}
              setAction={setLog}
              disabled={isLoading}
            />
          </div>

          {error && <ErrorText errorText={error} />}

          <ActionButton
            buttonText="Se connecter"
            className="bg-black text-white w-full mt-2 p-3 rounded font-medium transition-all duration-200"
            disabled={isLoading}
            loadingText="Connexion en cours..."
            action={handleLogin}
          />
        </div>

        <div className="text-center flex-grow h-[1px] m-2 bg-gray-300">
          <NavigateButton
            buttonText="Mot de passe oublié ?"
            className="text-sm text-blue-900 hover:underline transition-all duration-200"
            url={URL_FRONT_PASSWORD_LOST}
          />
        </div>
      </div>
    </div>
  );
};

export default Login;
