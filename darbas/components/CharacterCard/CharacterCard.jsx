import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function CharacterCard(props) {
  return (
    <Card style={{ width: '18rem' }}>
      <Card.Body>
        <Card.Title><div className='title'>{props.title}</div></Card.Title>
        <Card.Img variant="top" src={props.img} />
        <Card.Text>                          
          <div>Name: {props.name}</div>
          <div>Age: {props.age}</div>
          <div>Job: {props.job}</div>
        </Card.Text>
      </Card.Body>
    </Card>
  );
}

export default CharacterCard;