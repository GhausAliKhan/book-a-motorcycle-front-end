import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faMagnifyingGlass, faXmark } from '@fortawesome/free-solid-svg-icons';
import { library } from '@fortawesome/fontawesome-svg-core';
import { useState } from 'react';
import Navbar from './Navbar';
import ReserveForm from './ReserveForm';
import '../styles/reserve.css';
import Message from './Message';

library.add(faXmark, faBars);

const Reserve = () => {
  const currentUser = useSelector((state) => state.user.currentUser);
  const { information } = useSelector((state) => state.reserve);
  const [icon, setIcon] = useState('bars');
  if (!currentUser) return (<Navigate to="/login" />);
  return (
    <section className="reserveContainer">
      <div className="reserveContainerContent">
        <div className="reserveFormHeader flexH">
          <FontAwesomeIcon
            icon={icon}
            id="hamburguerIcon"
            onClick={() => {
              if (icon === 'bars') {
                setIcon('xmark');
              } else {
                setIcon('bars');
              }
              document.querySelector('.reseverNavbarContainer').classList.toggle('hide');
            }}
          />

          <div className="glassContainer">
            <FontAwesomeIcon icon={faMagnifyingGlass} id="glass" />
          </div>
        </div>
        <div className="reseveBodyContainer flexH">
          <section className="reseverNavbarContainer hide">
            <Navbar />
          </section>
          <div className="reserveDiv">
            <ReserveForm />
            {information && information !== 'Loading...' && <Message message={information} />}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Reserve;
