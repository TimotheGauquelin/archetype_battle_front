import { Link } from 'react-router-dom';

interface NavigateButtonProps {
  buttonText: string;
  className?: string;
  url: string;
}

const NavigateButton = ({
  buttonText,
  className,
  url,
}: NavigateButtonProps) => {
  return (
    <Link to={url} className={`block ${className} cursor-pointer`}>
      {buttonText}
    </Link>
  );
};

export default NavigateButton;
