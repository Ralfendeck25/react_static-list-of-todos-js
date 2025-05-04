import PropTypes from 'prop-types';
import { UserInfo } from '../UserInfo/UserInfo';
import './TodoInfo.scss';

const TodoInfo = ({ todo }) => {
  const { title, completed, user } = todo;

  return (
    <article
      className={completed ? 'TodoInfo TodoInfo--completed' : 'TodoInfo'}
      data-cy="TodoInfo"
    >
      <h2 className="TodoInfo__title">{title}</h2>
      {user && <UserInfo user={user} />}
    </article>
  );
};

TodoInfo.propTypes = {
  todo: PropTypes.shape({
    title: PropTypes.string.isRequired,
    completed: PropTypes.bool.isRequired,
    user: PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
    }),
  }).isRequired,
};

export default TodoInfo;
