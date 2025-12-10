import { useState } from 'react';
import { Input } from '../components/generic/form/Input';
import ErrorText from '../components/generic/errors/ErrorText';
import { URL_FRONT_LOGIN } from '../utils/urls/urlFront';
import NavigateButton from '../components/generic/buttons/NavigateButton';
import ActionButton from '../components/generic/buttons/ActionButton';

interface LogProps {
  email: string;
}

const PasswordLost = () => {
  const [log, setLog] = useState<LogProps>({ email: '' } as LogProps);
  const [error] = useState<string>('');
  const [requestIsDone] = useState<boolean>(false);
  const [isLoading] = useState<boolean>(false);

  const handleSubmit = () => {
    console.log('handleSubmit');
  };

  return (
    <div className="bg-gray-200 w-screen min-h-screen fixed left-0 top-0 flex justify-center items-center p-4">
      <div
        className={`bg-white w-full max-w-[400px] cardShadow rounded-xl flex flex-col p-4 sm:p-6`}
      >
        {requestIsDone ? (
          <>
            <div className="text-center mb-4">
              <h3 className="text-xl sm:text-2xl font-semibold">
                Email envoyé !
              </h3>
            </div>
            <div className="bg-green-100 rounded p-4 mb-4">
              <p className="text-sm sm:text-base text-green-700">
                Un e-mail vient de vous être envoyé. Il contient un lien valable
                24 heures pour réinitialiser votre mot de passe.
              </p>
            </div>
            <NavigateButton
              buttonText="Revenir à la page de connexion"
              className="bg-black text-white w-full mt-2 p-3 rounded font-medium transition-all duration-200"
              url={URL_FRONT_LOGIN}
            />
          </>
        ) : (
          <>
            <h3 className="text-xl sm:text-2xl text-center mb-4 font-semibold">
              Mot de passe oublié ?
            </h3>
            <div>
              <p className="text-sm sm:text-base text-gray-600 mb-4">
                Indiquez l'adresse e-mail associée à votre compte. Vous allez
                recevoir un lien pour réinitialiser votre mot de passe.
              </p>

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

              {error && <ErrorText errorText={error} errorTextCenter />}

              <ActionButton
                buttonText="Envoyer le lien"
                className="bg-black text-white w-full mt-2 p-3 rounded font-medium transition-all duration-200"
                disabled={isLoading}
                loadingText="Envoi en cours..."
                action={handleSubmit}
              />

              <div className="text-center flex-grow h-[1px] m-2 bg-gray-300">
                <NavigateButton
                  buttonText="Se connecter"
                  className="text-sm text-blue-900 hover:underline transition-all duration-200"
                  url={URL_FRONT_LOGIN}
                />
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default PasswordLost;
