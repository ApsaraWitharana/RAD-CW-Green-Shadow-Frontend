import { useState } from "react";
import {Button} from "../component/Button.tsx";
import {useDispatch, useSelector} from "react-redux";
import {RootState} from "../store/Store.ts";
import {deleteVehicle, setVehicle, updateVehicle} from "../slice/Vehicle.ts";
import {Vehicle} from "../model/Vehicle.ts";
import {searchOutline} from "ionicons/icons";
import {IonIcon} from "@ionic/react";



export const VehicleForm = () => {
    const [showForm, setShowForm] = useState(false);
    const [lastVehicleNumber, setLastVehicleNumber] = useState(0);

    //generate code
    const generateVehicleCode = () => {
        const nextNumber = lastVehicleNumber + 1;
        const formattedNumber = String(nextNumber).padStart(3, "0");
        setLastVehicleNumber(nextNumber);
        return `VEH-${formattedNumber}`;
    };

    const toggleForm = () => {
        if (!showForm){
            setVehicleCode(generateVehicleCode());
        }
        setShowForm(!showForm);
    };

    const dispatch = useDispatch();
    const [vehicleCode, setVehicleCode] = useState("");
    const [licensePlateNumber,setLicensePlateNumber] = useState<number>();
    const [vehicleCategory, setVehicleCategory] = useState("");
    const [fuelType, setFuelType] = useState("");
    const [status,setStatus] = useState("");
    const [staffId,setStaffId] = useState("");
    const [remarks,setRemarks] = useState("");
    const vehicles = useSelector((state:RootState) => state.vehicle.vehicles);

    //add vehicle
    function AddVehicle(e) {
        e.preventDefault();
        const newVehicle = {vehicleCode,licensePlateNumber,vehicleCategory,fuelType,status,staffId,remarks};
        dispatch(setVehicle(newVehicle));
        alert("Vehicle Added Successfully!");
        clearData();
        setShowForm(false);
    }

    //update
    function handleRowClick(vehicle: Vehicle) {
        setVehicleCode(vehicle.vehicleCode);
        setLicensePlateNumber(vehicle.licensePlateNumber);
        setVehicleCategory(vehicle.vehicleCategory);
        setFuelType(vehicle.fuelType);
        setStatus(vehicle.status);
        setStaffId(vehicle.staffId);
        setRemarks(vehicle.remarks);
        setShowForm(true);
    }

    function UpdateVehicle() {
        const updateVehicles = {vehicleCode,licensePlateNumber,vehicleCategory,fuelType,status,staffId,remarks}
        dispatch(updateVehicle(updateVehicles));
        alert("Vehicle Updated Successfully!");
        clearData();
        setShowForm(false);
    }

    //delete vehicle
    function DeleteVehicle(vehicleCode: string) {
        alert("Vehicle Deleted Successfully!");
        dispatch(deleteVehicle(vehicleCode));
        setShowForm(false);
    }

    function clearData(){
        setVehicleCode("");
        setLicensePlateNumber(0);
        setVehicleCategory("");
        setFuelType("");
        setStatus("");
        setStaffId("");
        setRemarks("");
        setShowForm(true);
    }
    return (
        <div className="main">
            <nav className="flex justify-between items-center text-white p-4 rounded-md md-7">
                <h1 className="text-xl font-bold text-green-500">Vehicle Management</h1>
                <Button label={showForm ? "Close Form" : "Add Vehicle"} onClick={toggleForm} className="bg-green-500 rounded-full text-white hover:bg-green-600"/>
            </nav>
            {/* Vehicle Form */}
            {showForm && (
                <div className="bg-gray-900 p-4 rounded-md shadow-md mb-8 m-4">
                    <h2 className="text-2xl font-bold text-white mb-4">Vehicle Form</h2>
                    <form className="space-y-4">
                        <div className="grid grid-cols-3 gap-4">
                            <div>
                                <label className="block mb-1 text-gray-50">Vehicle Code</label>
                                <input type="text" className="w-full p-2 border border-gray-300 rounded-full"
                                       readOnly value={vehicleCode} onChange={(e) => setVehicleCode(e.target.value)}/>
                            </div>
                            <div>
                                <label className="block mb-1 text-gray-50">License Plate Number</label>
                                <input type="text" className="w-full p-2 border border-gray-300 rounded-full"
                                       placeholder="Plate Number" value={licensePlateNumber} onChange={(e) => setLicensePlateNumber(e.target.value)}/>
                            </div>
                            <div>
                                <label className="block mb-1 text-gray-50">Vehicle Category</label>
                                <input type="text" className="w-full p-2 border border-gray-300 rounded-full"
                                       placeholder="Vehicle Category" value={vehicleCategory} onChange={(e) => setVehicleCategory(e.target.value)}/>
                            </div>
                            <div>
                                <label className="block mb-1 text-gray-50">Fuel Type</label>
                                <select className="w-full p-2 border border-gray-300 rounded-full" value={fuelType} onChange={(e) => setFuelType(e.target.value)}>
                                    <option>Select Type</option>
                                    <option value="Petrol">Petrol</option>
                                    <option value="Descale">Descale</option>
                                    <option value="Author">Author</option>
                                </select>
                            </div>
                            <div>
                                <label className="block mb-1 text-gray-50">Status</label>
                                <select className="w-full p-2 border border-gray-300 rounded-full" value={status} onChange={(e) => setStatus(e.target.value)}>
                                    <option>Select Status</option>
                                    <option value="Available">Available</option>
                                    <option value="Out of Service">Out of Service</option>
                                </select>
                            </div>
                            <div>
                                <label className="block mb-1 text-gray-50">Staff Code</label>
                                <select className="w-full p-2 border border-gray-300 rounded-full" value={staffId} onChange={(e) => setStaffId(e.target.value)}>
                                    <option>Select Staff</option>
                                    <option value="SFD-001">SFD-001</option>
                                    <option value="SFD-002">SFD-002</option>
                                    <option value="SFD-003">SFD-003</option>
                                </select>
                            </div>
                            <div>
                                <label className="block mb-1 text-gray-50">Remark</label>
                                <input type="text" className="w-full p-2 border border-gray-300 rounded-full"
                                       placeholder="Enter Remark" value={remarks} onChange={(e) => setRemarks(e.target.value)}/>
                            </div>
                        </div>
                        <Button label="Save"
                                className="px-4 py-2 m-4 bg-green-500 text-white rounded-full hover:bg-green-600" onClick={AddVehicle}/>
                        <Button label="Update"
                                className="px-4 py-2 m-4 bg-blue-500 text-white rounded-full hover:bg-blue-600" onClick={UpdateVehicle}/>
                    </form>
                </div>
            )}
            {/* Crop Table */}
            <div>
                <h2 className="text-2xl font-bold mb-4">Equipment List</h2>
                <div className="mb-4 flex justify-between items-center">
                    <input type="text" className="w-1/3 p-2  border border-gray-300 rounded-full"
                           placeholder="Search Vehicle"/>
                    {/*<div className="iconBx">*/}
                    {/*    <IonIcon icon={searchOutline}/>*/}
                    {/*</div>*/}
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
                    {vehicles.map((vehicle) => (
                        <tr key={vehicle.vehicleCode}>
                            <td className="border border-gray-300 px-4 py-2">{vehicle.vehicleCode}</td>
                            <td className="border border-gray-300 px-4 py-2">{vehicle.licensePlateNumber}</td>
                            <td className="border border-gray-300 px-4 py-2">{vehicle.vehicleCategory}</td>
                            <td className="border border-gray-300 px-4 py-2">{vehicle.fuelType}</td>
                            <td className="border border-gray-300 px-4 py-2">{vehicle.staffId}</td>
                            <td className="border border-gray-300 px-4 py-2">{vehicle.remarks}</td>
                            <td className="border border-gray-300 px-4 py-2">
                                <Button label="Update" className="px-4 py-2 m-4 rounded-full bg-blue-500 text-white hover:bg-blue-600" onClick={() => handleRowClick(vehicle)}/>
                                <Button label="Delete" className="px-4 py-2 m-4 rounded-full bg-red-500 text-white hover:text-red-700" onClick ={()=>DeleteVehicle(vehicle.vehicleCode)}/>
                            </td>
                        </tr>
                    ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};
