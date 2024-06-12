import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { Button, FloatingLabel, Form } from 'react-bootstrap';
import { useAuth } from '../../utils/context/authContext';
import { getRanks } from '../../api/rankData';
import { createGame, updateGame } from '../../api/gameData';

const initialState = {
  description: '',
  image: '',
  game_name: '',
};

function GameRankForm({ obj }) {
  const [formInput, setFormInput] = useState(initialState);
  const [ranks, setRanks] = useState([]);
  const router = useRouter();
  const { user } = useAuth();

  useEffect(() => {
    getRanks(user.uid).then(setRanks);

    if (obj.game_id) setFormInput(obj);
  }, [obj, user]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormInput((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (obj.game_id) {
      updateGame(formInput).then(() => router.push(`/gamerank/${obj.game_id}`));
    } else {
      const payload = { ...formInput, uid: user.uid };
      createGame(payload).then(({ name }) => {
        const patchPayload = { game_id: name };
        updateGame(patchPayload).then(() => {
          router.push('/');
        });
      });
    }
  };

  return (
    <Form onSubmit={handleSubmit}>
      <h2 className="text-white mt-5">{obj.game_id ? 'Update' : 'Create'} Game Rank</h2>

      <FloatingLabel controlId="floatingInput1" label="Game Name" className="mb-3">
        <Form.Control
          type="text"
          placeholder="Enter a game"
          name="game_name"
          value={formInput.game_name}
          onChange={handleChange}
          required
        />
      </FloatingLabel>

      <FloatingLabel controlId="floatingInput2" label="Game Image" className="mb-3">
        <Form.Control
          type="url"
          placeholder="Enter an image url"
          name="image"
          value={formInput.image}
          onChange={handleChange}
          required
        />
      </FloatingLabel>

      <FloatingLabel controlId="floatingSelect" label="Rank">
        <Form.Select
          aria-label="Rank"
          name="rank_id"
          onChange={handleChange}
          className="mb-3"
          value={formInput.rank_id}
          required
        >
          <option value="">Select a Rank</option>
          {
            ranks.map((rank) => (
              <option
                key={rank.rank_id}
                value={rank.rank_id}
              >
                {rank.rank_name}
              </option>
            ))
          }
        </Form.Select>
      </FloatingLabel>

      {/* DESCRIPTION TEXTAREA  */}
      <FloatingLabel controlId="floatingTextarea" label="Description" className="mb-3">
        <Form.Control
          as="textarea"
          placeholder="Description"
          style={{ height: '100px' }}
          name="description"
          value={formInput.description}
          onChange={handleChange}
          required
        />
      </FloatingLabel>

      <Button type="submit">{obj.game_id ? 'Update' : 'Create'} Game</Button>
    </Form>
  );
}

GameRankForm.propTypes = {
  obj: PropTypes.shape({
    description: PropTypes.string,
    image: PropTypes.string,
    game_id: PropTypes.string,
    rank_id: PropTypes.string,
    game_name: PropTypes.string,
  }),
};

GameRankForm.defaultProps = {
  obj: initialState,
};

export default GameRankForm;
