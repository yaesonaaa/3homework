// App.js
import React, { useState } from 'react';
import SkillCard from './components/item';
import SkillForm from './components/list';

const initialSkills = [
  { title: 'React.js', description: 'Прохожу обучение в школе программирования ESOFT', level: 30 },
  { title: 'Сдача домашних заданий в срок', description: 'Я освоюсь и исправлюсь, правда Т.Т ...', level: 30 },
  { title: 'Python', description: 'Ну типа чета понимаю', level: 65 },
  { title: 'SQL', description: 'через кровь, пот и слезы...', level: 70 },
];

function App() {

  const [skills, setSkills] = useState(initialSkills);
  const [showSkills, setShowSkills] = useState(false);
  const [filterLevel, setFilterLevel] = useState(null);

  const toggleShowSkills = () => {
    setShowSkills(!showSkills);
    setFilterLevel(null);
  };

  const filterSkills = (level) => {
    setFilterLevel(level);
  };

  const addSkill = (skill) => {
    setSkills([...skills, skill]);
  };

  const removeSkill = (index) => {
    setSkills(skills.filter((_, i) => i !== index));
  };

  const filteredSkills = filterLevel
    ? skills.filter((skill) => (filterLevel > 0 ? skill.level > 50 : skill.level < 50))
    : skills;

  return (
    <>
      <div className="container">
        <button className='toggleButton' onClick={toggleShowSkills}>
          {showSkills ? 'Убрать компетенции' : 'Показать компетенции'}
        </button>
      
      {showSkills && (
        
        <div>
          <div className='formochka'>
            <SkillForm addSkill={addSkill} />
            <div className="filterbuttons">
              <button onClick={() => filterSkills(50)}>Показать компетенции с уровнем изучения &gt;50%</button>
              <button onClick={() => filterSkills(-1)}>Показать компетенции с уровнем изучения &lt;50%</button>
            </div>
          </div>
         <div className='skillsContainer'> 
         {filteredSkills.map((skill, index) => (
            
            <SkillCard
              key={index}
              title={skill.title}
              description={skill.description}
              level={skill.level}
              removeSkill={() => removeSkill(index)}
            />
            
          ))}
          </div>
          </div>
        

      )}
      </div>
    </>
  );
}

export default App;
