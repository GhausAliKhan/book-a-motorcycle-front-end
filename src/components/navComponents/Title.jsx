import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import Logo from '../../images/Logo.png';
import { setIconUser } from '../../store/userSlice';

const Title = () => {
  const navegate = useNavigate();
  const dispatch = useDispatch();
  return (
    <>
      <div className="titleContainer flexH">
        <button
          id="logoBtn"
          type="button"
          onClick={() => {
            document.querySelector('.navContainer').classList.add('controlVisibility');
            navegate('/motorcycles');
            dispatch(setIconUser());
          }}
        >
          <img
            src={Logo}
            alt="Logo"
          />
        </button>
      </div>
    </>
  );
};
export default Title;
