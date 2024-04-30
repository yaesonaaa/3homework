// components/SkillForm.js
import React, { useState } from 'react';

const SkillForm = ({ addSkill }) => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [level, setLevel] = useState(0);

  const handleSubmit = (e) => {
    e.preventDefault();
    addSkill({ title, description, level });
    setTitle('');
    setDescription('');
    setLevel(0);
  };

  return (
    <form className='form formGroup' onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Название компетенции"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <textarea
        type="text"
        placeholder="Описание компетенции"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
      <input
        type="number"
        placeholder="Уровень освоения"
        value={level}
        onChange={(e) => setLevel(e.target.value)}
      />
      <button className='submitButton' type="submit">Создать</button>
    </form>
  );
}

export default SkillForm;
