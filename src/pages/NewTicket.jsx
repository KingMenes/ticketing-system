import React from 'react'

function NewTicket() {

    //Title, Desc, Charge Code, Assigned To, Priority, Type
    return (
        <div className='w-3/4 flex flex-col justify-start items-start h-[100vh] mx-auto'>
            <h1 className='text-2xl mb-4 font-semibold mt-8 w-full'>Submit a Ticket</h1>
            <TextField name='title' label='Title:' className='' />
            <TextField name='charge' label='Charge Code:' className='' />
            <TextField name='desc' label='Description:' className='h-40' />
            <label htmlFor="assigned">Assigned to:</label>
            <input type="text" id='assigned' className='border' />
            <label htmlFor="priority">Priority:</label>
            <input type="text" id='priority' className='border' />
            <label htmlFor="type">Type:</label>
            <input type="text" id='type' className='border' />
            <button
                type="button"
                data-mdb-ripple="true"
                data-mdb-ripple-color="light"
                className=" my-8 flex space-x-2 justify-center px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
            >Submit Ticket</button>
        </div>
    )
}

function TextField({ name, label, className }) {
    return (
        <div className='w-full'>
            <label htmlFor={name} className='my-2'>{label}</label>
            <input type="text" id={name} className={`${className} border w-full`} />
        </div>
    )

}

export default NewTicket