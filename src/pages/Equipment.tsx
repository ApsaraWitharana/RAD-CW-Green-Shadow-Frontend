import { useState } from "react";
import {Button} from "../component/Button.tsx";
import {useDispatch, useSelector} from "react-redux";
import {RootState} from "../store/Store.ts";
import {deleteEquipment, setEquipment, updateEquipment} from "../slice/Equipment.ts";
import {Equipment} from "../model/Equipment.ts";


export const EquipmentForm = () => {
    const [showForm, setShowForm] = useState(false);
    const [lastEquipmentNumber, setLastEquipmentNumber] = useState(0);

    //generate code

    const genetateEquipmentCode=()=>{
        const nextNumber = lastEquipmentNumber + 1;
        const formattedNumber = String(nextNumber).padStart(3, "0");
        setLastEquipmentNumber(nextNumber);
        return `EPT-${formattedNumber}`;
    };
    const toggleForm = () => {
        if (!showForm){
            setEquipmentCode(genetateEquipmentCode());
        }
        setShowForm(!showForm);
    };

    const dispatch = useDispatch();
    const [equipmentCode, setEquipmentCode] = useState("");
    const [equipmentName, setEquipmentName] = useState("");
    const [equipmentType, setEquipmentType] = useState("");
    const [status, setStatus] = useState("");
    const [fieldCode, setFieldCode] = useState("");
    const [staffCode,setStaffCode] = useState("");
    const equipments = useSelector((state:RootState) => state.equipment.equipments)

    //add equipment
    function AddEquipment(e) {
        e.preventDefault();
        const newEquipment = {equipmentCode,equipmentName,equipmentType,status,fieldCode,staffCode}
        dispatch(setEquipment(newEquipment))
        alert("Successfully Added Equipment");
        clear();
        setShowForm(false);

    }
    //update equipment
    function handleRowClick(equipment: Equipment) {
        setEquipmentCode(equipment.equipmentCode);
        setEquipmentName(equipment.equipmentName);
        setEquipmentType(equipment.equipmentType);
        setStatus(equipment.status);
        setFieldCode(equipment.fieldCode);
        setStaffCode(equipment.staffCode);
        setShowForm(true);
    }

    function UpdateEquipment() {
        const updateEquipments = {equipmentCode,equipmentName,equipmentType,status,fieldCode,staffCode};
        dispatch(updateEquipment(updateEquipments));
        alert("Successfully Update Equipment");
        clear();
        setShowForm(false);
    }

    //delete equipment
    function DeleteEquipment(equipmentCode: string) {
        alert("Deleting Equipment");
        dispatch(deleteEquipment(equipmentCode));
        setShowForm(false);
    }
    function clear(){
        setEquipmentCode("");
        setEquipmentName("");
        setStatus("");
        setEquipmentType("");
        setFieldCode("");
        setStaffCode("");

    }
    return (
        <div className="main">
            <nav className="flex justify-between items-center text-white p-4 rounded-md md-7">
                <h1 className="text-xl font-bold text-green-500">Equipment Management</h1>
                <Button label={showForm ? "Close Form" : "Add Equipment"} onClick={toggleForm} className="bg-green-500 rounded-full text-white hover:bg-green-600"/>
            </nav>
            {/* Equipment Form */}
            {showForm && (
                <div className="bg-gray-900 p-4 rounded-md shadow-md mb-8 m-4">
                    <h2 className="text-2xl font-bold text-white mb-4">Equipment Form</h2>
                    <form className="space-y-4">
                        <div className="grid grid-cols-3 gap-4">
                            <div>
                                <label className="block mb-1 text-gray-50">Equipment Code</label>
                                <input type="text" className="w-full p-2 border border-gray-300 rounded-full"
                                       readOnly value={equipmentCode} onChange={(e) => setEquipmentCode(e.target.value)}/>
                            </div>
                            <div>
                                <label className="block mb-1 text-gray-50">Equipment Name</label>
                                <input type="text" className="w-full p-2 border border-gray-300 rounded-full"
                                       placeholder="Common Name" value={equipmentName}  onChange={(e) => setEquipmentName(e.target.value)}/>
                            </div>
                            <div>
                                <label className="block mb-1 text-gray-50">Equipment Type</label>
                                <input type="text" className="w-full p-2 border border-gray-300 rounded-full"
                                       placeholder="Scientific Name" value={equipmentType}  onChange={(e) => setEquipmentType(e.target.value)}/>
                            </div>
                            <div>
                                <label className="block mb-1 text-gray-50">Status</label>
                                <select className="w-full p-2 border border-gray-300 rounded-full" value={status}  onChange={(e) => setStatus(e.target.value)}>
                                    <option>Select Category</option>
                                    <option value="A">A</option>
                                    <option value="B">B</option>
                                    <option value="C">C</option>
                                </select>
                            </div>
                            <div>
                                <label className="block mb-1 text-gray-50">Field Code</label>
                                <select className="w-full p-2 border border-gray-300 rounded-full" value={fieldCode} onChange={(e) => setFieldCode(e.target.value)}>
                                    <option>Select File</option>
                                    <option value="FED-001">FED-001</option>
                                    <option value="FED-002">FED-002</option>
                                    <option value="FED-003">FED-003</option>
                                </select>
                            </div>
                            <div>
                                <label className="block mb-1 text-gray-50">Staff Code</label>
                                <select className="w-full p-2 border border-gray-300 rounded-full" value={staffCode}  onChange={(e) => setStaffCode(e.target.value)}>
                                    <option>Select Staff</option>
                                    <option value="SFD-001">SFD-001</option>
                                    <option value="SFD-002">SFD-002</option>
                                    <option value="SFD-003">SFD-003</option>
                                </select>
                            </div>
                        </div>
                        <Button label="Save"
                                className="px-4 py-2 m-4 bg-green-500 text-white rounded-full hover:bg-green-600" onClick={AddEquipment}/>
                        <Button label="Update"
                                className="px-4 py-2 m-4 bg-blue-500 text-white rounded-full hover:bg-blue-600" onClick ={UpdateEquipment}/>
                    </form>
                </div>
            )}
            {/* Crop Table */}
            <div>
                <h2 className="text-2xl font-bold mb-4">Equipment List</h2>
                <div className="mb-4 flex justify-between items-center">
                    <input type="text" className="w-1/3 p-2 m-2 border border-gray-300 rounded-full" placeholder="Search Crop"/>
                    <button className="px-4 py-2 bg-green-900 text-white rounded-full hover:bg-green-600">
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
                    {equipments.map((equipment) =>(
                        <tr key={equipment.equipmentCode}>
                            <td className="border border-gray-300 px-4 py-2">{equipment.equipmentCode}</td>
                            <td className="border border-gray-300 px-4 py-2">{equipment.equipmentName}</td>
                            <td className="border border-gray-300 px-4 py-2">{equipment.equipmentType}</td>
                            <td className="border border-gray-300 px-4 py-2">{equipment.status}</td>
                            <td className="border border-gray-300 px-4 py-2">{equipment.fieldCode}</td>
                            <td className="border border-gray-300 px-4 py-2">{equipment.staffCode}</td>
                            <td className="border border-gray-300 px-4 py-2">
                                <Button label="Update"
                                        className="px-4 py-2 m-4 bg-blue-500 text-white hover:bg-blue-600" onClick = {() => handleRowClick(equipment)}/>
                                <Button label="Delete" className="px-4 py-2 m-4 bg-red-500 text-white  hover:text-red-700" onClick ={()=> DeleteEquipment(equipment.equipmentCode)}/>
                            </td>
                        </tr>
                    ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};
