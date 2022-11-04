import { AiFillEdit } from 'react-icons/ai'
import { MdDeleteForever } from 'react-icons/md'
import { BsCheckLg } from 'react-icons/bs'
import { motion } from 'framer-motion'
import Tickets from '../tickets.json'

function TicketTable({ heading }) {
    return (
        <motion.div

            className='w-11/12 flex flex-col justify-start items-start mx-auto mt-8'>
            <h2 className=' self-start text-2xl mb-4 font-semibold'>{heading}</h2>
            <table className='w-full mx-auto'>
                <thead>
                    <tr>
                        <th className='text-left bg-gray-200 h-auto text-gray-600 text-sm w-[20%] p-4'>Title</th>
                        <th className='text-left bg-gray-200 h-auto text-gray-600 text-sm w-[25%] p-4'>Description</th>
                        <th className='text-left bg-gray-200 h-auto text-gray-600 text-sm w-[20%] p-4'>Charge Code</th>
                        <th className='text-left bg-gray-200 h-auto text-gray-600 text-sm p-4'>Assigned To</th>
                        <th className='text-left bg-gray-200 h-auto text-gray-600 text-sm p-4'>Priority</th>
                        <th className='text-left bg-gray-200 h-auto text-gray-600 text-sm p-4'>Status</th>
                        <th className='text-left bg-gray-200 h-auto text-gray-600 text-sm p-4'>Type</th>
                        <th className='text-left bg-gray-200 h-auto text-gray-600 text-sm p-4'>Actions</th>
                    </tr>
                </thead>
                <tbody className='overflow-y'>
                    <TableRow title='Lorem'
                        desc='Lorem ipsum dolor sit amet, consectetur adipiscing elit'
                        charge='PLSH4L' assigned='Joseph Butcher' priority='High' status='Open' type='Engineering' />
                    <TableRow title='CC Fixture'
                        desc='Fixture to hold common controller'
                        charge='PLSH4L' assigned='Michael Caldwell' priority='Low' status='In Progress' type='Fixture' />
                    <TableRow title='Ticket System'
                        desc='Ticket system for 3D Printing'
                        charge='TRAIN' assigned='Mena Ibrahim' priority='Medium' status='In Progress' type='Misc' />
                    <TableRow title='Multidirectional Threading'
                        desc='Test to see if bidirectional nuts and bolts thread together.'
                        charge='ABC123' assigned='Joseph Butcher' priority='Low' status='Open' type='Engineering' />
                </tbody>
            </table>
        </motion.div>
    )
}

function TableRow({ title, desc, charge, assigned, priority, status, type }) {
    return (
        <tr className=' border-b-2 leading-6'>
            <td className='text-left text-sm whitespace-nowrap p-4 align-top'>{title}</td>
            <td className='text-left text-sm text-ellipsis p-4 align-top'>{desc}</td>
            <td className='text-left text-sm whitespace-nowrap p-4 align-top'>{charge}</td>
            <td className='text-left text-sm whitespace-nowrap p-4 align-top'>{assigned}</td>
            <td className={`${priority === 'High' ? 'text-red-600' : priority === 'Medium' ? ' text-yellow-600' : priority === 'Low' ? 'text-green-600' : ''} text-left text-sm whitespace-nowrap p-4 align-top`}>{priority}</td>
            <td className='text-left text-sm whitespace-nowrap p-4 align-top'>{status}</td>
            <td className='text-left text-sm whitespace-nowrap p-4 align-top'>{type}</td>
            <td className='text-left text-sm whitespace-nowrap p-4 align-top flex justify-evenly items-center'>
                <button className='bg-blue-400 text-gray-100 w-auto rounded-sm shadow-sm p-2 mr-1' data-bs-toggle="tooltip" title="Edit"><AiFillEdit className='text-lg' /></button>
                <button className='bg-red-400 text-gray-100 w-auto rounded-sm shadow-sm p-2 mr-1' data-bs-toggle="tooltip" title="Delete"><MdDeleteForever className='text-lg' /></button>
                <button className='bg-green-400 text-white w-auto rounded-sm shadow-sm p-2' data-bs-toggle="tooltip" title="Mark As Resolved"><BsCheckLg className='text-lg' /></button>
            </td>
        </tr>

    )
}

export default TicketTable