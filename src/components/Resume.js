import React from 'react';

export default function Resume() {
    return (
        <div name='resume' className='w-full md:h-screen text-[#E5E5E5] bg-[#17191A]'>
            <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
                <div className='pb-8 w-full flex justify-center items-center flex-col'>
                    <p className='text-4xl font-bold inline border-b-4 border-[#0099CC]'>Resume</p>
                    <p className='py-6 text-2xl'>Meine Ausbildung</p>
                </div>
                {/* Container */}
                <div className='grid sm:grid-cols-2 md:grid-cols-2 gap-4 text-[#E5E5E5]'>
                    {/* Grid */}
                    <div className='shadow-lg shadow-[#040c16] bg-[#0099CC] container rounded-md flex justify-center items-center mx-auto hover:scale-110 hover:bg-[#007bb5] duration-500'>
                        <div className='min-h-52 flex justify-center items-center flex-col p-6'>
                            <span className='text-lg font-bold'>
                                04/2024 - 07/2024
                            </span>
                            <p className='text-lg font-bold'>Web Entwicklung</p>
                            <p>Example GmbH</p>
                        </div>
                    </div>
                    <div className='shadow-lg shadow-[#040c16] bg-[#0099CC] container rounded-md flex justify-center items-center mx-auto hover:scale-110 hover:bg-[#007bb5] duration-500'>
                        <div className='min-h-52 flex justify-center items-center flex-col p-6'>
                            <span className='text-lg font-bold'>
                                04/2017 - 01/2019
                            </span>
                            <p className='text-lg font-bold'>Fachinformatiker Anwendungsentwicklung</p>
                            <p>Example AG</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};