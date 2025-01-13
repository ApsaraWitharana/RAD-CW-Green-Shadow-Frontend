import { useState } from "react";
import {Button} from "../component/Button.tsx";

export const MonitoringForm = () => {
    const [showForm, setShowForm] = useState(false);
    const toggleForm = () => {
        setShowForm(!showForm);
    };


    return (
        <div className="main">
            <nav className="flex justify-between items-center text-white p-4 rounded-md md-7">
                <h1 className="text-xl font-bold text-green-500">Monitoring Management</h1>
                <Button label={showForm ? "Close Form" : "Add Monitoring"} onClick={toggleForm} className="bg-green-500 text-white hover:bg-green-600"/>
            </nav>
            {/* Monitoring Form */}
            {showForm && (
                <div className="bg-gray-900 p-4 rounded-md shadow-md mb-8 m-4">
                    <h2 className="text-2xl font-bold text-white mb-4">Monitoring Form</h2>
                    <form className="space-y-4" >
                        <div className="grid grid-cols-3 gap-4">
                            <div>
                                <label className="block mb-1 text-gray-50">Log Code</label>
                                <input type="text" className="w-full p-2 border border-gray-300 rounded-md"
                                       placeholder="Code"/>
                            </div>
                            <div>
                                <label className="block mb-1 text-gray-50">Log Date</label>
                                <input type="date" className="w-full p-2 border border-gray-300 rounded-md"/>
                            </div>
                            <div>
                                <label className="block mb-1 text-gray-50">Log Details</label>
                                <input type="text" className="w-full p-2 border border-gray-300 rounded-md"
                                       placeholder="Scientific Name"/>
                            </div>
                            <div>
                                <label className="block mb-1 text-gray-50">Crop Code</label>
                                <select className="w-full p-2 border border-gray-300 rounded-md">
                                    <option>Select Code</option>
                                    <option value="CRP-001">CRP-001</option>
                                    <option value="CRP-002">CRP-002</option>
                                    <option value="CRP-003">CRP-003</option>
                                </select>
                            </div>
                            <div>
                                <label className="block mb-1 text-gray-50"> Image</label>
                                <input type="file" className="w-full p-2 border border-gray-300 rounded-md"/>
                                    <div className="mt-4">
                                        <img  alt="Preview"
                                             className="h-32 w-32 object-cover rounded-md"/>
                                    </div>
                            </div>
                        </div>
                        <Button label="Save"
                                className="px-4 py-2 m-4 bg-green-500 text-white rounded-md hover:bg-green-600"/>
                        <Button label="Update"
                                className="px-4 py-2 m-4 bg-blue-500 text-white rounded-md hover:bg-blue-600"/>
                    </form>
                </div>
            )}
            {/* Crop Table */}
            <div>
                <h2 className="text-2xl font-bold mb-4">Monitoring List</h2>
                <div className="mb-4 flex justify-between items-center">
                    <input type="text" className="w-1/3 p-2 m-2 border border-gray-300 rounded-md" placeholder="Search Crop"/>
                    <button className="px-4 py-2 bg-green-500 text-white rounded-md hover:bg-green-600">
                        Download PDF
                    </button>
                </div>
                <table className="table m-2">
                    <thead>
                    <tr className="bg-gray-900">
                        <th className="border border-gray-300 px-4 py-2">Log Code</th>
                        <th className="border border-gray-300 px-4 py-2">Log Date</th>
                        <th className="border border-gray-300 px-4 py-2">Log Details</th>
                        <th className="border border-gray-300 px-4 py-2">Crop Code</th>
                        <th className="border border-gray-300 px-4 py-2">Image</th>
                        <th className="border border-gray-300 px-4 py-2">Actions</th>
                    </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td className="border border-gray-300 px-4 py-2"></td>
                            <td className="border border-gray-300 px-4 py-2"></td>
                            <td className="border border-gray-300 px-4 py-2"></td>
                            <td className="border border-gray-300 px-4 py-2"></td>
                            <td className="border border-gray-300 px-4 py-2">
                                <img  alt="Field Image 1"
                                     className="h-16 w-16 object-cover rounded-md"/></td>
                            <td className="border border-gray-300 px-4 py-2">
                                <Button label="Update" className="px-4 py-2 m-4 bg-blue-500 text-white hover:bg-blue-600"/>
                                <Button label="Delete" className=" px-4 py-2 m-4 bg-red-500 text-white hover:text-red-700"/>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    );
};
