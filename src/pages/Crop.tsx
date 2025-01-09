import {useState} from "react";
import {IonIcon} from "@ionic/react";

export const CropFrom = ()=>{
    const [showForm, setShowForm] = useState(false);
    const toggleForm = () => {
        setShowForm(!showForm);
    };

    return (
        <div className="main">
            {/* Navigation bar with "Add Field " button */}
            <nav className="flex justify-between items-center  text-white p-4 rounded-md md-7">
                <h1 className="text-xl font-bold text-green-500">Crop Management</h1>
                <button className="px-4 py-2 bg-green-500 rounded-md hover:bg-green-600"
                        onClick={toggleForm}>{showForm ? "Close Form" : "Add Field"}</button>
            </nav>
            {/* Field Form */}
            {showForm && (
                <div className="bg-gray-900 p-4 rounded-md shadow-md mb-8 m-4">
                    <h2 className="text-2xl font-bold text-white mb-4">Crop Form</h2>
                    <form className="space-y-4">
                        <div className="grid grid-cols-3 gap-4">
                            <div>
                                <label className="block mb-1 text-gray-50">Crop Code</label>
                                <input type="text" className="w-full p-2 border border-gray-300 rounded-md"
                                       placeholder="code"/>
                            </div>
                            <div>
                                <label className="block mb-1 text-gray-50">Crop Common Name</label>
                                <input type="text" className="w-full p-2 border border-gray-300 rounded-md"
                                       placeholder="Common Name"/>
                            </div>
                            <div>
                                <label className="block mb-1 text-gray-50">Crop Scientific Name</label>
                                <input type="text" className="w-full p-2 border border-gray-300 rounded-md"
                                       placeholder='Scientific Name'/>
                            </div>
                            <div>
                                <label className="block mb-1 text-gray-50">Category</label>
                                <select className="w-full p-2 border border-gray-300 rounded-md">
                                    <option>Select Category</option>
                                    <option value={"A"}>A</option>
                                    <option value={"B"}>B</option>
                                    <option value={"C"}>C</option>
                                </select>
                            </div>
                            <div>
                                <label className="block mb-1 text-gray-50">Crop Section</label>
                                <select className="w-full p-2 border border-gray-300 rounded-md">
                                    <option>Select Category</option>
                                    <option value={"Section A"}>Section A</option>
                                    <option value={"Section B"}>Section B</option>
                                    <option value={"Section C"}>Section C</option>
                                </select>
                            </div>
                            <div>
                                <label className="block mb-1 text-gray-50">Field Code</label>
                                <input type="text" className="w-full p-2 border border-gray-300 rounded-md"
                                       placeholder='Field Code'/>
                            </div>
                            <div>
                                <label className="block mb-1 text-gray-50">Field Image</label>
                                <input type="file" className="w-full p-2 border border-gray-300 rounded-md"/>
                            </div>

                        </div>
                        <button type="submit"
                                className="px-4 py-2 m-4 bg-green-500 text-white rounded-md hover:bg-green-600"
                        >Save
                        </button>
                        <button type="submit"
                                className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600"
                        >Update
                        </button>
                    </form>
                </div>
            )}

            {/* Staff Table */}
            <div>
                <h2 className="text-2xl font-bold mb-4">Crop List</h2>
                <div className="mb-4 flex justify-between items-center">
                    <input type="text" className="w-1/3 p-2 m-2 border border-gray-300 rounded-md"
                           placeholder="Search Staff"/>
                    <button className="px-4 py-2 bg-green-500 text-white rounded-md hover:bg-green-600">Download PDF
                    </button>
                </div>
                <table className="table m-2">
                    <thead>
                    <tr className="bg-gray-900">
                        <th className="border border-gray-300 px-4 py-2">Crop Code</th>
                        <th className="border border-gray-300 px-4 py-2">Crop Common Name</th>
                        <th className="border border-gray-300 px-4 py-2">Crop Section</th>
                        <th className="border border-gray-300 px-4 py-2">Crop Image</th>
                        <th className="border border-gray-300 px-4 py-2">Field code</th>
                        <th className="border border-gray-300 px-4 py-2">Actions</th>
                    </tr>
                    </thead>
                    <tbody id="fieldTableBody">
                        <tr>
                            <td className="border border-gray-300 px-4 py-2 border border-gray-300 rounded-md"></td>
                            <td className="border border-gray-300 px-4 py-2 border border-gray-300 rounded-md"></td>
                            <td className="border border-gray-300 px-4 py-2 border border-gray-300 rounded-md"></td>
                            <td className="border border-gray-300 px-4 py-2 border border-gray-300 rounded-md"></td>
                            <td className="border border-gray-300 px-4 py-2 border border-gray-300 rounded-md">
                                <img  alt="Field Image 1"
                                     className="h-16 w-16 object-cover rounded-md"/></td>
                            <td className="border border-gray-300 px-4 py-2">
                                <button className="text-blue-500 hover:text-blue-700 mr-2 " title="Update" >
                                    <IonIcon className="icon"/> Update
                                </button>
                                <button className="text-red-500 hover:text-red-700" title="Delete">
                                    <IonIcon className="icon"/> Delete
                                </button>
                            </td>
                        </tr>

                    </tbody>
                </table>
            </div>
        </div>
    );
};


