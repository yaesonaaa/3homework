
import React from 'react';
const SkillCard = ({ title, description, level, removeSkill }) => {
  return (
    <div className='skillcard'>
      <h3>{title}</h3>
      <p>{description}</p>
      <p className='level'>Уровень освоения: {level}%</p>
      <button onClick={removeSkill}>Удалить</button>
    </div>
  );
}

export default SkillCard;
