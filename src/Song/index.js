import {AiOutlineDelete} from 'react-icons/ai'

import './index.css'

const Song = props => {
  const {songDetails, updateList} = props
  const {id, imageUrl, name, genre, duration} = songDetails
  const onDeleteBtn = () => {
    updateList(id)
  }
  return (
    <li className="app-list">
      <div className="play-list">
        <div className="genre-con">
          <img src={imageUrl} alt="track" className="image" />
          <div>
            <p className="name">{name}</p>
            <p className="genre">{genre}</p>
          </div>
        </div>
        <div className="delete-container">
          <p className="duration">{duration}</p>
          <button
            type="button"
            onClick={onDeleteBtn}
            data-testid="delete"
            className="button"
          >
            <AiOutlineDelete className="del" />
          </button>
        </div>
      </div>
    </li>
  )
}

export default Song
