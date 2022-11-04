import React, { useState, ComponentProps } from 'react';
import { PieChart } from 'react-minimal-pie-chart';
import { BarChart, Bar, CartesianGrid, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts';
import { motion } from 'framer-motion'

function TicketGraphs() {

  return (
    <motion.div
      className='flex justify-center w-full mx-auto' >
      <table className='w-11/12 h-52 mt-10'>
        <thead>
          <tr>
            <th className='bg-gray-200 border border-gray-100 h-16 text-gray-600 text-xl'>Tickets by Status</th>
            <th className='bg-gray-200 border border-gray-100 h-16 text-gray-600 text-xl'>Tickets by Priority</th>
            <th className='bg-gray-200 border border-gray-100 h-16 text-gray-600 text-xl'>Tickets by Type</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className='border w-1/3 h-60 p-8'>
              <div className='flex justify-between items-center w-full my-2 mx-auto'>
                <div className='bg-[#E38627] grow h-2 w-2'></div><span className='mx-2 text-[12px] whitespace-nowrap'>Open</span>
                <div className='bg-[#C13C37] grow h-2 w-2'></div><span className='mx-2 text-[12px] whitespace-nowrap'>In Progress</span>
                <div className='bg-[#6A2135] grow h-2 w-2'></div><span className='mx-2 text-[12px] whitespace-nowrap'>Resolved</span>
              </div>
              <FullOption data={[{ title: 'Open', value: 10, color: '#E38627' },
              { title: 'In Progress', value: 15, color: '#C13C37' },
              { title: 'Resolved', value: 20, color: '#6A2135' },]} />
            </td>
            <td className='border w-1/3 h-60 pt-8'>
              <MyBarChart />
            </td>
            <td className='border w-1/3 h-60 p-8'>
              <div className='flex justify-between items-center w-full my-2 mx-auto'>
                <div className='bg-[#E63946] grow h-2 w-2'></div><span className='mx-2 text-[12px] whitespace-nowrap'>Prototype</span>
                <div className='bg-[#A8DADC] grow h-2 w-2'></div><span className='mx-2 text-[12px] whitespace-nowrap'>Engineering</span>
                <div className='bg-[#1D3557] grow h-2 w-2'></div><span className='mx-2 text-[12px] whitespace-nowrap'>Fixture</span>
                <div className='bg-[#8338EC] grow h-2 w-2'></div><span className='mx-2 text-[12px] whitespace-nowrap'>Misc</span>
              </div>
              <FullOption data={[{ title: 'Prototype', value: 10, color: '#E63946' },
              { title: 'Eng', value: 15, color: '#A8DADC' },
              { title: 'Fixture', value: 20, color: '#1D3557' },
              { title: 'Misc', value: 13, color: '#8338EC' },]} />
            </td>
          </tr>
        </tbody>
      </table>
    </motion.div>
  )
}


type Props = {
  data: ComponentProps<typeof PieChart>['data'];
};
function FullOption(props: Props) {

  const [selected, setSelected] = useState<number | undefined>(0);
  const [hovered, setHovered] = useState<number | undefined>(undefined);

  const data = props.data.map((entry, i) => {
    if (hovered === i) {
      return {
        ...entry,
        color: 'grey',
      };
    }
    return entry;
  });

  const lineWidth = 60;

  return (
    <PieChart
      style={{
        fontFamily:
          '"Nunito Sans", -apple-system, Helvetica, Arial, sans-serif',
        fontSize: '8px',
      }}
      data={data}
      radius={PieChart.defaultProps.radius - 6}
      lineWidth={60}
      segmentsStyle={{ transition: 'stroke .3s', cursor: 'pointer' }}
      segmentsShift={(index) => (index === selected ? 6 : 1)}
      animate
      label={({ dataEntry }) => Math.round(dataEntry.percentage) + '%'}
      labelPosition={100 - lineWidth / 2}
      labelStyle={{
        fill: '#fff',
        opacity: 0.75,
        pointerEvents: 'none',
      }}
      onClick={(_, index) => {
        setSelected(index === selected ? undefined : index);
      }}
      onMouseOver={(_, index) => {
        setHovered(index);
      }}
      onMouseOut={() => {
        setHovered(undefined);
      }}
    />
  );
}

function MyBarChart() {
  const data = [
    {
      name: 'Low',
      amount: 15,
    },
    {
      name: 'Medium',
      amount: 13,
    },
    {
      name: 'High',
      amount: 5,
    },
  ]

  return (
    <ResponsiveContainer width="100%" height="100%">
      <BarChart
        width={500}
        height={300}
        data={data}
        margin={{
          top: 5,
          right: 30,
          left: 20,
          bottom: 5,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Bar dataKey="amount" fill="#70bbc2" />
      </BarChart>
    </ResponsiveContainer>
  )

}

export default TicketGraphs
