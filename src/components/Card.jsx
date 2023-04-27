import React from 'react';
import propTypes from 'prop-types';

function Card({ data }) {
  const { location, current } = data;
  const tempInt = parseInt(current.temp_c, 10);
  return (
    <div className="bg-white p-6 mt-10 rounded-lg shadow-md min-w-[220px] items-center ">
      <div className="flex flex-col items-center">
        <span className="text-xl text-slate-800 font-bold">{location.name}</span>
        <span className="text-slate-400 text-sm font-medium">{`${location.region} | ${location.country}`}</span>
      </div>
      <div className="font-semibold text-slate-800 flex mt-4 mb-2 items-center justify-center">
        <span className="text-8xl">{tempInt}</span>
        <span className="text-2xl mt-3 text-slate-600">°C</span>
      </div>
      <div className="flex flex-col items-center">
        <img src={current.condition.icon} alt="weather" />
        <span className="text-slate-800 font-semibold">{current.condition.text}</span>
      </div>
    </div>
  );
}

export default Card;

Card.propTypes = {
  data: propTypes.object,
}.isRequired;
