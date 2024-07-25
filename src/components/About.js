import React from 'react';

export default function About() {
  return (
    <div name='about' id='about' className='w-full h-screen bg-[#17191A] text-[#E5E5E5]'>
      <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
        <div className='w-full flex justify-center items-center flex-col mb-7'>
          <p className='text-4xl font-bold inline border-b-4 border-[#0099CC] text-center'>About</p>
          <div className='p-4'></div>
          <div className='p-10 rounded-md bg-[#0099CC] flex flex-col justify-center items-center'>
            <div className='max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4 text-[#E5E5E5]'>
              <p className='sm:text-left text-4xl font-bold'>
                Hi, <br />mein Name ist <br />Samet.
              </p>
              <p>
                Als leidenschaftlicher Entwickler aus Deutschland,
                verfüge ich über eine fundierte Ausbildung und strebe stets danach, meine Fähigkeiten zu erweitern.
                Aktuell vertiefe ich mein Wissen durch eine Weiterbildung im Bereich Webentwicklung.
                Ich bin stets auf der Suche nach neuen Herausforderungen, um mein Können kontinuierlich zu verbessern.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
