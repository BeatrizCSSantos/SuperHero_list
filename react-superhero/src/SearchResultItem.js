import React, { useState } from 'react';
import Modal from 'react-modal';


Modal.setAppElement('#root')

function SearchResultItem(props) {
  const [ modalIsOpen, setModalIsOpen] = useState(false);
  const {data} = props;

  console.log('data', data);
  return (
    <div className="search-result">
      <div className="left">
        <img src={data.image.url} alt="super pic" />
      </div>
      <div className="right">
        <h1>{data.name}</h1>
        <span style={{ color:'rgba(8, 7, 7, 0.842)', marginBottom: 5 }}>{data.biography['full-name']}</span>
        <div className="stats">
          <button className="open-button" onClick={() => setModalIsOpen(true)}> Ver informações </button>
          <div>
          <Modal className="modal-info" isOpen={modalIsOpen} onRequestClose={() => setModalIsOpen(false)}>
          <div className="details">
          <div lassName="strength-space"> . </div>
          <div className="strength">strength: {data.powerstats.strength}</div>
          <div className="speed">speed: {data.powerstats.speed}</div>
          <div className="power">power: {data.powerstats.power}</div>
          </div>
          <div>
            <button className="close-button" onClick={() => setModalIsOpen(false)}>
              Fechar informações
            </button>
          </div>
          </Modal>
          </div>

        </div>
      </div>
    </div>
  );
}

export default SearchResultItem;