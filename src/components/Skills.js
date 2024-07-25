import React, { useEffect, useState } from 'react';
import useToggle from '../customHooks/useToggle';
import { FaChartBar } from 'react-icons/fa';
import SkillsDiagram from './SkillsDiagram';

export default function Skills() {
  const [data, setData] = useState(null);
  const [hoveredSkill, setHoveredSkill] = useState(null);
  const [defaultValue, toggleValue] = useToggle(false);

  useEffect(() => {
    // Datenabruf von skills.json
    fetch('/data/skills.json')
      .then((response) => {
        if (!response.ok) {
          throw new Error('Netzwerkantwort fehlerhaft');
        }
        return response.json();
      })
      .then((data) => setData(data))
      .catch((error) => console.error('Fetch error:', error));
  }, []);

  return (
    <div name='skills' className='w-full h-screen bg-[#17191A] text-[#E5E5E5]'>
      {/* Container für Skills */}
      <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
        <div className='w-full flex justify-center items-center flex-col mb-7'>
          <p className='text-4xl font-bold inline border-b-4 border-[#0099CC] text-center'>Skills</p>
          <p className='py-4 text-2xl'>Eine Liste der Technologien mit denen ich mich auskenne</p>
          {/* Button zum Wechseln zwischen Diagramm und Kartenansicht */}
          <button onClick={toggleValue} className='text-[#E5E5E5] border-2 hover:bg-[#0099CC] hover:border-[#0099CC] px-4 py-3 mt-4 mx-auto flex items-center rounded'>
            {defaultValue ? 'Zeige Karten' : 'Zeige Chart'} <FaChartBar className='ml-2' />
          </button>
        </div>
        <div>
          {/* Entscheidung zwischen Diagramm und Kartenansicht */}
          {defaultValue ? (
            <SkillsDiagram data={data.skills} />
          ) : (
            <div className='w-full grid grid-cols-2 sm:grid-cols-4 gap-4 text-center py-8 text-[#E5E5E5]'>
              {/* Anzeige der Skills als Karten */}
              {data ? (
                data.skills.map((skill, index) => (
                  <div
                    key={index}
                    className='min-h-32 rounded-md shadow-md bg-[#0099CC] shadow-[#040c16] hover:scale-110 hover:bg-[#007bb5] duration-500 flex items-center justify-center'
                    onMouseEnter={() => setHoveredSkill(index)}
                    onMouseLeave={() => setHoveredSkill(null)}
                  >
                    {hoveredSkill === index ? (
                      <p className='absolute text-xs text-center p-4'>{skill.description}</p>
                    ) : (
                      <p className='my-4'>{skill.name}</p>
                    )}
                  </div>
                ))
              ) : (
                <p>Lädt...</p>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
