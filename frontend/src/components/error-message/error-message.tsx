import {useAppSelector} from '../../hooks';
import './error-message.css';

function ErrorMessage(): JSX.Element | null {


  const error = useAppSelector((state) => state.error);
  return (error)
    ? <div className='error-container'><div className='error-message'>{error}</div></div>
    // ? error.map((er) => {return <div className='error-container'><div className='error-message'>{er}</div></div>})
    : null;

}

export default ErrorMessage;
