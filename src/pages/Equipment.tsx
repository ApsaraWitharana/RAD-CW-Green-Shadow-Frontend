import { useState } from "react";
import {Button} from "../component/Button.tsx";


export const EquipmentForm = () => {
    const [showForm, setShowForm] = useState(false);
    const toggleForm = () => {
        setShowForm(!showForm);
    };

    return (
        <div className="main">
            <nav className="flex justify-between items-center text-white p-4 rounded-md md-7">
                <h1 className="text-xl font-bold text-green-500">Equipment Management</h1>
                <Button label={showForm ? "Close Form" : "Add Equipment"} onClick={toggleForm} className="bg-green-500 text-white hover:bg-green-600"/>
            </nav>
            {/* Equipment Form */}
            {showForm && (
                <div className="bg-gray-900 p-4 rounded-md shadow-md mb-8 m-4">
                    <h2 className="text-2xl font-bold text-white mb-4">Equipment Form</h2>
                    <form className="space-y-4">
                        <div className="grid grid-cols-3 gap-4">
                            <div>
                                <label className="block mb-1 text-gray-50">Equipment Code</label>
                                <input type="text" className="w-full p-2 border border-gray-300 rounded-md"
                                       placeholder="Code"/>
                            </div>
                            <div>
                                <label className="block mb-1 text-gray-50">Equipment Name</label>
                                <input type="text" className="w-full p-2 border border-gray-300 rounded-md"
                                       placeholder="Common Name" />
                            </div>
                            <div>
                                <label className="block mb-1 text-gray-50">Equipment Type</label>
                                <input type="text" className="w-full p-2 border border-gray-300 rounded-md"
                                       placeholder="Scientific Name"/>
                            </div>
                            <div>
                                <label className="block mb-1 text-gray-50">Status</label>
                                <select className="w-full p-2 border border-gray-300 rounded-md">
                                    <option>Select Category</option>
                                    <option value="A">A</option>
                                    <option value="B">B</option>
                                    <option value="C">C</option>
                                </select>
                            </div>
                            <div>
                                <label className="block mb-1 text-gray-50">Field Code</label>
                                <select className="w-full p-2 border border-gray-300 rounded-md">
                                    <option>Select File</option>
                                    <option value="FED-001">FED-001</option>
                                    <option value="FED-002">FED-002</option>
                                    <option value="FED-003">FED-003</option>
                                </select>
                            </div>
                            <div>
                                <label className="block mb-1 text-gray-50">Staff Code</label>
                                <select className="w-full p-2 border border-gray-300 rounded-md" >
                                    <option>Select Staff</option>
                                    <option value="FED-001">SFD-001</option>
                                    <option value="FED-002">SFD-002</option>
                                    <option value="FED-003">SFD-003</option>
                                </select>
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
                <h2 className="text-2xl font-bold mb-4">Equipment List</h2>
                <div className="mb-4 flex justify-between items-center">
                    <input type="text" className="w-1/3 p-2 m-2 border border-gray-300 rounded-md" placeholder="Search Crop"/>
                    <button className="px-4 py-2 bg-green-500 text-white rounded-md hover:bg-green-600">
                        Download PDF
                    </button>
                </div>
                <table className="table m-2">
                    <thead>
                    <tr className="bg-gray-900">
                        <th className="border border-gray-300 px-4 py-2">Equipment Code</th>
                        <th className="border border-gray-300 px-4 py-2">Equipment Name</th>
                        <th className="border border-gray-300 px-4 py-2">Equipment Type</th>
                        <th className="border border-gray-300 px-4 py-2">Status</th>
                        <th className="border border-gray-300 px-4 py-2">Field code</th>
                        <th className="border border-gray-300 px-4 py-2">Staff Code</th>
                        <th className="border border-gray-300 px-4 py-2">Actions</th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr>
                        <td className="border border-gray-300 px-4 py-2"></td>
                        <td className="border border-gray-300 px-4 py-2"></td>
                        <td className="border border-gray-300 px-4 py-2"></td>
                        <td className="border border-gray-300 px-4 py-2"></td>
                        <td className="border border-gray-300 px-4 py-2"></td>
                        <td className="border border-gray-300 px-4 py-2"></td>
                        <td className="border border-gray-300 px-4 py-2">
                            <Button label="Update" className="px-4 py-2 m-4 bg-blue-500 text-white hover:bg-blue-600"/>
                            <Button label="Delete" className="text-red-500 hover:text-red-700"/>
                        </td>
                    </tr>
                    </tbody>
                </table>
            </div>
        </div>
    );
};
