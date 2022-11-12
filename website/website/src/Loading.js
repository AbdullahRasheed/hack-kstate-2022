import loadingIcon from './Rolling-1s-200px.svg';
import './Loading.css';
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';



function Loading() {
  return (  
        <header className="Loading-header">
            <img src={loadingIcon} className="Loading-logo" alt="loading..." />
            <p>
                Loading...
            </p>
            <Button variant="primary" size="lg">Reload</Button>
        </header>
    );
}

export default Loading;