import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setCrop } from "../slice/CropSlice.ts";
import {RootState} from "../store/Store.ts";
import {Button} from "../component/Button.tsx";


export const CropForm = () => {
    const [showForm, setShowForm] = useState(false);
    const toggleForm = () => {
        setShowForm(!showForm);
    };
    // image preview
    const [cropImage, setCropImage] = useState("");
    const handleImageChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = (event) => {
                setCropImage(event.target.result);
            };
            reader.readAsDataURL(file);
            cropImage(file);
        } else {
            setCropImage("");
        }
    };

    const dispatch = useDispatch();
    const [cropCode, setCropCode] = useState("");
    const [cropCommonName, setCropCommonName] = useState("");
    const [cropScientificName, setCropScientificName] = useState("");
    const [category, setCategory] = useState("");
    const [cropSeason, setCropSeason] = useState("");
    const [fileCode, setFileCode] = useState("");
    const crops = useSelector((state:RootState) => state.crop.crops);

    //add crop
    function AddCrop(e) {
        e.preventDefault();
        const newCrop = {cropCode, cropCommonName, cropScientificName, cropImage, category, cropSeason, fileCode,};
        dispatch(setCrop(newCrop));
        alert("Crop was added Successfully!!.");
    }
    return (
        <div className="main">
            <nav className="flex justify-between items-center text-white p-4 rounded-md md-7">
                <h1 className="text-xl font-bold text-green-500">Crop Management</h1>
                <Button label={showForm ? "Close Form" : "Add Crop"} onClick={toggleForm} className="bg-green-500 text-white hover:bg-green-600"/>
            </nav>
            {/* Crop Form */}
            {showForm && (
                <div className="bg-gray-900 p-4 rounded-md shadow-md mb-8 m-4">
                    <h2 className="text-2xl font-bold text-white mb-4">Crop Form</h2>
                    <form className="space-y-4" onSubmit={AddCrop}>
                        <div className="grid grid-cols-3 gap-4">
                            <div>
                                <label className="block mb-1 text-gray-50">Crop Code</label>
                                <input type="text" className="w-full p-2 border border-gray-300 rounded-md" placeholder="Code" value={cropCode} onChange={(e) => setCropCode(e.target.value)}/>
                            </div>
                            <div>
                                <label className="block mb-1 text-gray-50">Crop Common Name</label>
                                <input type="text" className="w-full p-2 border border-gray-300 rounded-md" placeholder="Common Name" value={cropCommonName} onChange={(e) => setCropCommonName(e.target.value)}/>
                            </div>
                            <div>
                                <label className="block mb-1 text-gray-50">Crop Scientific Name</label>
                                <input type="text" className="w-full p-2 border border-gray-300 rounded-md" placeholder="Scientific Name" value={cropScientificName} onChange={(e) => setCropScientificName(e.target.value)}/>
                            </div>
                            <div>
                                <label className="block mb-1 text-gray-50">Category</label>
                                <select className="w-full p-2 border border-gray-300 rounded-md" value={category} onChange={(e) => setCategory(e.target.value)}>
                                    <option>Select Category</option>
                                    <option value="A">A</option>
                                    <option value="B">B</option>
                                    <option value="C">C</option>
                                </select>
                            </div>
                            <div>
                                <label className="block mb-1 text-gray-50">Crop Section</label>
                                <select className="w-full p-2 border border-gray-300 rounded-md" value={cropSeason} onChange={(e) => setCropSeason(e.target.value)}>
                                    <option>Select Section</option>
                                    <option value="Section A">Section A</option>
                                    <option value="Section B">Section B</option>
                                    <option value="Section C">Section C</option>
                                </select>
                            </div>
                            <div>
                                <label className="block mb-1 text-gray-50">Field Code</label>
                                <select className="w-full p-2 border border-gray-300 rounded-md" value={fileCode} onChange={(e) => setFileCode(e.target.value)} >
                                    <option>Select File</option>
                                    <option value="FED-001">FED-001</option>
                                    <option value="FED-002">FED-002</option>
                                    <option value="FED-003">FED-003</option>
                                </select>
                            </div>
                            <div>
                                <label className="block mb-1 text-gray-50">Field Image</label>
                                <input type="file" className="w-full p-2 border border-gray-300 rounded-md" onChange={handleImageChange}/>
                                {cropImage && (
                                    <div className="mt-4">
                                        <img src={cropImage} alt="Preview"
                                             className="h-32 w-32 object-cover rounded-md"/>
                                    </div>
                                )}
                            </div>
                        </div>
                        <Button label="Save" onClick={AddCrop} className="px-4 py-2 m-4 bg-green-500 text-white rounded-md hover:bg-green-600"/>
                    </form>
                </div>
            )}
            {/* Crop Table */}
            <div>
                <h2 className="text-2xl font-bold mb-4">Crop List</h2>
                <div className="mb-4 flex justify-between items-center">
                    <input type="text" className="w-1/3 p-2 m-2 border border-gray-300 rounded-md" placeholder="Search Crop"/>
                    <button className="px-4 py-2 bg-green-500 text-white rounded-md hover:bg-green-600">
                        Download PDF
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
                    <tbody>
                    {crops.map((crop) => (
                        <tr key={crop.cropCode}>
                            <td className="border border-gray-300 px-4 py-2">{crop.cropCode}</td>
                            <td className="border border-gray-300 px-4 py-2">{crop.cropCommonName}</td>
                            <td className="border border-gray-300 px-4 py-2">{crop.cropSeason}</td>
                            <td className="border border-gray-300 px-4 py-2">{crop.cropImage &&
                                <img src={cropImage} alt="Field Image 1"
                                     className="h-16 w-16 object-cover rounded-md"/>}</td>
                            <td className="border border-gray-300 px-4 py-2">{crop.fieldCode}</td>
                            <td className="border border-gray-300 px-4 py-2">
                                <Button label="Update" className="px-4 py-2 m-4 bg-blue-500 text-white hover:bg-blue-600"/>
                                <button
                                    className="text-red-500 hover:text-red-700"
                                    title="Delete"
                                >
                                    Delete
                                </button>
                            </td>
                        </tr>
                    ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};
