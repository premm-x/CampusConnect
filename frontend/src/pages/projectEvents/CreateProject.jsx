import React, { useState } from 'react';

const CreateProject = () => {
    const [projectName, setProjectName] = useState('');
    const [description, setDescription] = useState('');
    const [member, setMember] = useState('');
    const [startDate, setStartDate] = useState('');
    const [endDate, setEndDate] = useState('');

    const [dateError, setDateError] = useState('');
    
    const [bundel, setBundel] = useState([]);

    const handleSubmit = (e) => {
        e.preventDefault();
        if (new Date(startDate) >= new Date(endDate)) {
            setDateError('End date should be greater than start date');
            return;
        }
        setDateError('');
        // Handle form submission logic here

        setBundel(prev => [...prev, {
            projectName, description, startDate, endDate
        }])
        
        localStorage.setItem('info' , JSON.stringify(bundel));

        console.log({ projectName, description, startDate, endDate });
    };

    return (
        <div className="max-w-lg mx-auto mt-10 p-6 bg-white rounded-lg shadow-md">
            <h1 className="text-2xl font-bold mb-6 text-center">Create New Project</h1>
            <form onSubmit={handleSubmit}>
                <div className="mb-4">
                    <label className="block text-gray-700">Project Name: <span className="text-red-500">*</span></label>
                    <input
                        type="text"
                        value={projectName}
                        onChange={(e) => setProjectName(e.target.value)}
                        required
                        className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700">Description: <span className="text-red-500">*</span></label>
                    <textarea
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                        required
                        className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                </div>

                <div className='flex items-center justify-between gap-4 md:flex-row flex-col'>
                    {/* number of member */}
                    <div className="mb-4 md:w-[50%] w-full">
                        <label className="block  text-gray-700">Member Required:  <span className="text-red-500">*</span></label>
                        <input
                            type="number"
                            value={member}
                            onChange={(e) => setMember(e.target.value)}
                            required
                            className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                    </div>

                    {/* upload file and image */}
                    <div className="mb-4">
                        <label className="block text-gray-700">Project File:</label>
                        <input
                            type="file"
                            className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                    </div>
                </div>

                {/* selectng date range */}
                <div className='flex items-center justify-between gap-4 md:flex-row flex-col'>
                    <div className="mb-4 md:w-[50%] w-full">
                        <label className="block text-gray-700">Start Date: <span className="text-red-500">*</span></label>
                        <input
                            type="date"
                            value={startDate}
                            onChange={(e) => setStartDate(e.target.value)}
                            required
                            className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                    </div>
                    <div className="mb-4 md:w-[50%] w-full">
                        <label className="block text-gray-700">End Date: <span className="text-red-500">*</span></label>
                        <input
                            type="date"
                            value={endDate}
                            onChange={(e) => setEndDate(e.target.value)}
                            required
                            className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                    </div>
                </div>
                {dateError && <p className="text-red-500 mb-4">{dateError}</p>}

                
                
                <button
                    type="submit"
                    className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
                > Create Project </button>
            </form>
        </div>
    );
};

export default CreateProject;