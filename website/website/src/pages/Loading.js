import loadingIcon from './Rolling-1s-200px.svg';
import './Loading.css';
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';

function Reload() {
    window.location.reload(false);
}

function Loading() {
  return (
        <div className='Loading'>
            <header className="Loading-header">
                <img src={loadingIcon} className="Loading-logo" alt="loading..." />
                <p>
                    Loading...
                </p>
                <Button variant="secondary" size="lg" onClick={Reload}>Reload</Button>
            </header>
        </div>
    );
}

export default Loading;