import './cards.css';
import data from './data';

function CardComponent() {
  return (
    <div className="card-container">
      {data.map((item) => (
        <div key={item.id} className="card">
          <img src={item.image} alt={item.name} className="card-image" />
          <div className="card-content">
            <h3>{item.title}</h3>
            <p>{item.description}</p>
            <p className="card-price">${item.price}</p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default CardComponent;
