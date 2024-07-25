import React from 'react';
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts';

export default function SkillsDiagram({ data }) {
    return (
        <div className='p-4 rounded-lg shadow-lg'>
            <ResponsiveContainer width='100%' height={400}>
                <BarChart
                    width={500}
                    height={300}
                    data={data}
                    margin={{
                        top: 20, right: 30, left: 20, bottom: 50,
                    }}
                >
                    <XAxis 
                        dataKey='name' 
                        tick={{ fontSize: 12, fill: '#E5E5E5' }}
                        angle={-45}
                        textAnchor='end'
                    />
                    <YAxis />
                    <Tooltip />
                    <Bar dataKey='level' fill='#0099CC' />
                </BarChart>
            </ResponsiveContainer>
        </div>
    );
};
