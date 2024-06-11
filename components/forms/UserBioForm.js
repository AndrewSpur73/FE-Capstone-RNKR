import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { Button, FloatingLabel, Form } from 'react-bootstrap';
import { useAuth } from '../../utils/context/authContext';
import { createUserBio, updateUserBio } from '../api/userData';

const initialState = {
  bio: '',
};

function UserBioForm({ obj }) {
  const [formInput, setFormInput] = useState(initialState);
  const router = useRouter();
  const { user } = useAuth();

  useEffect(() => {
    if (obj.firebaseKey) setFormInput(obj);
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
    if (obj.firebaseKey) {
      updateUserBio(formInput).then(() => router.push('/profile'));
    } else {
      const payload = { ...formInput, bio: user.bio };
      createUserBio(payload).then(({ name }) => {
        const patchPayload = { firebaseKey: name };
        updateUserBio(patchPayload).then(() => {
          router.push('/profile');
        });
      });
    }
  };

  return (
    <Form onSubmit={handleSubmit}>
      <h2 className="text-white mt-5">{obj.bio ? 'Update' : 'Create'} Bio</h2>

      {/* DESCRIPTION TEXTAREA  */}
      <FloatingLabel controlId="floatingTextarea" label="Bio" className="mb-3">
        <Form.Control
          as="textarea"
          placeholder="Bio"
          style={{ height: '100px' }}
          name="bio"
          value={formInput.bio}
          onChange={handleChange}
          required
        />
      </FloatingLabel>

      <Button type="submit">{user.bio ? 'Update' : 'Create'} Bio</Button>
    </Form>
  );
}

UserBioForm.propTypes = {
  obj: PropTypes.shape({
    bio: PropTypes.string,
    firebaseKey: PropTypes.string,
  }),
};

UserBioForm.defaultProps = {
  obj: initialState,
};

export default UserBioForm;
