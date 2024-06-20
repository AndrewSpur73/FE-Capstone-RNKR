import PropTypes from 'prop-types';
import Card from 'react-bootstrap/Card';

function GameCard({ gameObj }) {
  return (
    <Card style={{ width: '200px', margin: '10px', border: '3px solid black' }}>
      <Card.Img variant="top" src={gameObj.image} alt={gameObj.game_name} style={{ height: '195px', width: '195px' }} />
    </Card>
  );
}

GameCard.propTypes = {
  gameObj: PropTypes.shape({
    image: PropTypes.string,
    game_name: PropTypes.string,
    rank_id: PropTypes.string,
    rank_name: PropTypes.string,
    game_id: PropTypes.string,
  }).isRequired,

};

export default GameCard;
