import { useState } from "react";
import {Button} from "../component/Button.tsx";
import {useDispatch, useSelector} from "react-redux";
import {RootState} from "../store/Store.ts";
import {deleteMonitoring, setMonitoring, updateMonitoring} from "../slice/Monitoring.ts";
import {Monitoring} from "../model/Monitoring.ts";

export const MonitoringForm = () => {
    const [showForm, setShowForm] = useState(false);
    const [lastLogNumber, setLastLogNumber] = useState("");

    //generate code
    const generateLogCode =()=>{
        const nextNumber = lastLogNumber +1;
        const formattedNumber = String(nextNumber).padStart(3, "0");
        setLastLogNumber(nextNumber);
        return `LOG-${formattedNumber}`;
    };
    const toggleForm = () => {
        if (!showForm){
            setLogCode(generateLogCode());
        }
        setShowForm(!showForm);
    };

    // image preview
    const [monitoringImagePreview, setMonitoringImagePreview] = useState("");
    const handleImageChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = (event) => {
                setMonitoringImagePreview(event.target.result);
            };
            reader.readAsDataURL(file);
            setObservedImage(file);
        } else {
            setMonitoringImagePreview("");
        }
    };

    const dispatch = useDispatch();
    const [logCode, setLogCode] = useState("");
    const [logDate, setLogDate] = useState("");
    const [logDetails, setLogDetail] = useState("");
    const [cropCode, setCropCode] = useState("");
    const [observedImage, setObservedImage] = useState("");
    const monitorings = useSelector((state:RootState) => state.monitoring.monitorings);

    //add monitoring
    function AddMonitoring(e) {
        e.preventDefault();
        const newMonitoring = {logCode,logDate,logDetails,cropCode,observedImage};
        dispatch(setMonitoring(newMonitoring));
        alert("Log was added Successfully!");
        clear();
        setShowForm(false);
    }

    //update monitoring
    function handleRowClick(monitoring:Monitoring) {
        setLogCode(monitoring.logCode);
        setLogDate(monitoring.logDate);
        setLogDetail(monitoring.logDetails);
        setCropCode(monitoring.cropCode);
        setObservedImage(monitoring.observedImage);
        setShowForm(true);
    }

    function UpdateMonitoring() {
        const updatedMonitoring = {logCode,logDate,logDetails,cropCode,observedImage};
        dispatch(updateMonitoring(updatedMonitoring));
        alert("Log was updated Successfully!");
        clear();
        setShowForm(false);
    }

    //delete log
    function DeleteMonitoring(logCode:string) {
        alert("Log was deleted Successfully!");
        dispatch(deleteMonitoring(logCode));
        setShowForm(false);
    }
    function clear(){
        setLogCode("");
        setLogDate("");
        setLogDetail("");
        setCropCode("");
        setObservedImage("");
    }
    return (
        <div className="main">
            <nav className="flex justify-between items-center text-white p-4 rounded-md md-7">
                <h1 className="text-xl font-bold text-green-500">Monitoring Management</h1>
                <Button label={showForm ? "Close Form" : "Add Monitoring"} onClick={toggleForm} className="bg-green-500 rounded-full text-white hover:bg-green-600"/>
            </nav>
            {/* Monitoring Form */}
            {showForm && (
                <div className="bg-gray-900 p-4 rounded-md shadow-md mb-8 m-4">
                    <h2 className="text-2xl font-bold text-white mb-4">Monitoring Form</h2>
                    <form className="space-y-4" onSubmit={AddMonitoring}>
                        <div className="grid grid-cols-3 gap-4">
                            <div>
                                <label className="block mb-1 text-gray-50">Log Code</label>
                                <input type="text" className="w-full p-2 border border-gray-300 rounded-full"
                                       readOnly value={logCode}  onChange={(e) => setLogCode(e.target.value)}/>
                            </div>
                            <div>
                                <label className="block mb-1 text-gray-50">Log Date</label>
                                <input type="date" className="w-full p-2 border border-gray-300 rounded-full" value={logDate}  onChange={(e) => setLogDate(e.target.value)}/>
                            </div>
                            <div>
                                <label className="block mb-1 text-gray-50">Log Details</label>
                                <input type="text" className="w-full p-2 border border-gray-300 rounded-full"
                                       placeholder="Log Details" value={logDetails} onChange={(e) => setLogDetail(e.target.value)}/>
                            </div>
                            <div>
                                <label className="block mb-1 text-gray-50">Crop Code</label>
                                <select className="w-full p-2 border border-gray-300 rounded-full" value={cropCode}  onChange={(e) => setCropCode(e.target.value)}>
                                    <option>Select Code</option>
                                    <option value="CRP-001">CRP-001</option>
                                    <option value="CRP-002">CRP-002</option>
                                    <option value="CRP-003">CRP-003</option>
                                </select>
                            </div>
                            <div>
                                <label className="block mb-1 text-gray-50"> Image</label>
                                <input type="file" className="w-full p-2 border border-gray-300 rounded-full"  onChange={handleImageChange}/>
                                {monitoringImagePreview && (
                                    <div className="mt-4">
                                        <img src={monitoringImagePreview} alt="Preview"
                                             className="h-32 w-32 object-cover rounded-md"/>
                                    </div>
                                )}
                            </div>
                        </div>
                        <Button label="Save"
                                className="px-4 py-2 m-4 bg-green-500 text-white rounded-full hover:bg-green-600" onClick={AddMonitoring}/>
                        <Button label="Update"
                                className="px-4 py-2 m-4 bg-blue-500 text-white rounded-full hover:bg-blue-600" onClick={UpdateMonitoring}/>
                    </form>
                </div>
            )}
            {/* Crop Table */}
            <div>
                <h2 className="text-2xl font-bold mb-4">Monitoring List</h2>
                <div className="mb-4 flex justify-between items-center">
                    <input type="text" className="w-1/3 p-2 m-2 border border-gray-300 rounded-full" placeholder="Search Crop"/>
                    <button className="px-4 py-2 bg-green-900  text-white rounded-full hover:bg-green-600">
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
                    {monitorings.map((monitoring) => (
                        <tr key={monitoring.logCode}>
                            <td className="border border-gray-300 px-4 py-2">{monitoring.logCode}</td>
                            <td className="border border-gray-300 px-4 py-2">{monitoring.logDate}</td>
                            <td className="border border-gray-300 px-4 py-2">{monitoring.logDetails}</td>
                            <td className="border border-gray-300 px-4 py-2">{monitoring.cropCode}</td>
                            <td className="border border-gray-300 px-4 py-2">{monitoring.observedImage &&
                                <img src={monitoringImagePreview} alt=" Image "
                                     className="h-16 w-16 object-cover rounded-md"/>}</td>
                            <td className="border border-gray-300 px-4 py-2">
                                <Button label="Update"
                                        className="px-4 py-2 m-4 bg-blue-500 rounded-full text-white hover:bg-blue-600" onClick={() => handleRowClick(monitoring)}/>
                                <Button label="Delete"
                                        className=" px-4 py-2 m-4 bg-red-500 rounded-full text-white hover:text-red-700" onClick ={() => DeleteMonitoring(monitoring.logCode)}/>
                            </td>
                        </tr>
                    ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};
