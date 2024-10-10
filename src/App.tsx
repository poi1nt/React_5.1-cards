import 'bootstrap/dist/css/bootstrap.min.css';
import { Card } from './components/Card';

const App: React.FC = () => {
  return (
    <div className="container">
      <div className="row">
        <div className="col mb-3">
          <Card
            title="Card title"
            text="Some quick example text to build on the card title and make up the bulk of the card's content."
            buttonText="Go somewhere"
          />
        </div>

        <div className="col mb-3">
          <Card
            title="Special title treatment"
            text="With supporting text below as a natural lead-in to additional content."
            buttonText="Go somewhere"
            specialTitle
            hideImage
          >
            <p className="card-text">Supporting text</p>
          </Card>
        </div>
      </div>
    </div>
  );
}

export default App;
