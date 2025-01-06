import  { useState } from "react";
import "../style/Staff.css"
import {useDispatch, useSelector} from "react-redux";
import {RootState} from "../store/Store.ts";
import {deleteStaff, setStaff, updateStaff} from "../slice/StaffSlice.ts";
import {IonIcon} from "@ionic/react";
import {Staff} from "../model/Staff.ts";

export const Staffs = () => {
    const [showForm, setShowForm] = useState(false);
    const toggleForm = () => {
        setShowForm(!showForm);
    };
    const dispatch = useDispatch();
    const [id, setId] = useState("");
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [ designation, setDesignation] = useState("");
    const [gender, setGender] = useState("");
    const [joinDate, setJoinDate] = useState("");
    const [dob, setDob] = useState("");
    const [addressLine1, setAddressLine1] = useState("");
    const [addressLine2, setAddressLine2] = useState("");
    const [addressLine3, setAddressLine3] = useState("");
    const [addressLine4, setAddressLine4] = useState("");
    const [addressLine5, setAddressLine5] = useState("");
    const [contactNumber, setContactNumber] = useState("");
    const [email, setEmail] = useState("");
    const [role, setRole] = useState("");
    const  staff = useSelector((state:RootState) => state.staff.staffs);

    //add staff
    function addStaff(e) {
        e.preventDefault(); // Prevent form from submitting
        const newStaff = {
            id, firstName, lastName, designation, gender, joinDate, dob, addressLine1, addressLine2, addressLine3, addressLine4, addressLine5, contactNumber, email, role
        };
        dispatch(setStaff(newStaff));
        alert("Staff member added successfully!");
    }

    //update staff
    function handleRowClick(staff:Staff) {
        setId(staff.id);
        setFirstName(staff.firstName);
        setLastName(staff.lastName);
        setDesignation(staff.designation);
        setGender(staff.gender);
        setJoinDate(staff.joinedDate);
        setDob(staff.dob);
        setAddressLine1(staff.addressLine1);
        setAddressLine2(staff.addressLine2);
        setAddressLine3(staff.addressLine3);
        setAddressLine4(staff.addressLine4);
        setAddressLine5(staff.addressLine5);
        setContactNumber(staff.contactNumber);
        setEmail(staff.email);
        setRole(staff.role);
        setShowForm(true);
    }
    function UpdateStaff() {
        const updateStaffs ={id, firstName, lastName, designation, gender, joinDate, dob, addressLine1, addressLine2, addressLine3, addressLine4, addressLine5, contactNumber, email, role};
        dispatch(updateStaff(updateStaffs));
        alert("Staff member updated successfully!");
        setShowForm(false);
    }

    //delete staff
    function handleDeleteStaff(email:string) {
        dispatch(deleteStaff(email))
    }
    return (
        <div className="main">
            {/* Navigation bar with "Add Staff " button */}
            <nav className="flex justify-between items-center  text-white p-4 rounded-md md-7">
                <h1 className="text-xl font-bold text-green-500">Staff Management</h1>
                <button className="px-4 py-2 bg-green-500 rounded-md hover:bg-green-600"
                        onClick={toggleForm}>{showForm ? "Close Form" : "Add Staff"}</button>
            </nav>
            {/* Staff Form */}
            {showForm && (
                <div className="bg-gray-900 p-4 rounded-md shadow-md mb-8 m-4">
                    <h2 className="text-2xl font-bold text-white mb-4">Staff Form</h2>
                    <form className="space-y-4">
                        <div className="grid grid-cols-3 gap-4">
                            <div>
                                <label className="block mb-1 text-gray-50">Staff ID</label>
                                <input type="text" className="w-full p-2 border border-gray-300 rounded-md" placeholder="id" value={id}
                                       onChange={(e) => setId(e.target.value)}/>
                            </div>
                            <div>
                                <label className="block mb-1 text-gray-50">First Name</label>
                                <input type="text" className="w-full p-2 border border-gray-300 rounded-md" placeholder="firstName" value={firstName}
                                       onChange={(e) => setFirstName(e.target.value)}/>
                            </div>
                            <div>
                                <label className="block mb-1 text-gray-50">Last Name</label>
                                <input type="text" className="w-full p-2 border border-gray-300 rounded-md" placeholder="lastName" value={lastName}
                                       onChange={(e) => setLastName(e.target.value)}/>
                            </div>
                            <div>
                                <label className="block mb-1 text-gray-50">Designation</label>
                                <input type="text" className="w-full p-2 border border-gray-300 rounded-md" placeholder='designation' value={designation}
                                       onChange={(e) => setDesignation(e.target.value)}/>
                            </div>
                            <div>
                                <label className="block mb-1 text-gray-50">Gender</label>
                                <select className="w-full p-2 border border-gray-300 rounded-md" value={gender}
                                        onChange={(e) => setGender(e.target.value)}>
                                    <option value="">Select Gender</option>
                                    <option value="Male">Male</option>
                                    <option value="Female">Female</option>
                                    <option value="Other">Other</option>
                                </select>
                            </div>
                            <div>
                                <label className="block mb-1 text-gray-50">Joined Date</label>
                                <input type="date" className="w-full p-2 border border-gray-300 rounded-md" value={joinDate}
                                       onChange={(e) => setJoinDate(e.target.value)}/>
                            </div>
                            <div>
                                <label className="block mb-1 text-gray-50">Date of Birth</label>
                                <input type="date" className="w-full p-2 border border-gray-300 rounded-md" value={dob}
                                       onChange={(e) => setDob(e.target.value)}/>
                            </div>
                            <div>
                                <label className="block mb-1 text-gray-50">Address Line1</label>
                                <input type="text" className="w-full p-2 border border-gray-300 rounded-md" value={addressLine1}
                                       onChange={(e) => setAddressLine1(e.target.value)}/>
                            </div>
                            <div>
                                <label className="block mb-1 text-gray-50">Address Line2</label>
                                <input type="text" className="w-full p-2 border border-gray-300 rounded-md" value={addressLine2}
                                       onChange={(e) => setAddressLine2(e.target.value)}/>
                            </div>
                            <div>
                                <label className="block mb-1 text-gray-50">Address Line3</label>
                                <input type="text" className="w-full p-2 border border-gray-300 rounded-md" value={addressLine3}
                                       onChange={(e) => setAddressLine3(e.target.value)}/>
                            </div>
                            <div>
                                <label className="block mb-1 text-gray-50">Address Line4</label>
                                <input type="text" className="w-full p-2 border border-gray-300 rounded-md" value={addressLine4}
                                       onChange={(e) => setAddressLine4(e.target.value)}/>
                            </div>
                            <div>
                                <label className="block mb-1 text-gray-50">Address Line5</label>
                                <input type="text" className="w-full p-2 border border-gray-300 rounded-md" value={addressLine5}
                                       onChange={(e) => setAddressLine5(e.target.value)}/>
                            </div>
                            <div>
                                <label className="block mb-1 text-gray-50">Contact Number</label>
                                <input type="text" className="w-full p-2 border border-gray-300 rounded-md" value={contactNumber}
                                       onChange={(e) => setContactNumber(e.target.value)}/>
                            </div>
                            <div>
                                <label className="block mb-1 text-gray-50">Email</label>
                                <input type="email" className="w-full p-2 border border-gray-300 rounded-md" value={email}
                                       onChange={(e) => setEmail(e.target.value)}/>
                            </div>
                            <div>
                                <label className="block mb-1 text-gray-50">Role</label>
                                <select className="w-full p-2 border border-gray-300 rounded-md" value={role}
                                        onChange={(e) => setRole(e.target.value)}>
                                    <option value="MANAGER">Manager</option>
                                    <option value="ADMINISTRATIVE">Administrative</option>
                                    <option value="SCIENTIST">Scientist</option>
                                </select>
                            </div>
                        </div>
                        <button type="submit"
                                className="px-4 py-2 m-4 bg-green-500 text-white rounded-md hover:bg-green-600"
                                onClick={addStaff}>Save
                        </button>
                        <button type="submit"
                                className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600"
                                onClick={UpdateStaff}>Update
                        </button>
                    </form>
                </div>
            )}

            {/* Staff Table */}
            <div>
                <h2 className="text-2xl font-bold mb-4">Staff List</h2>
                <div className="mb-4 flex justify-between items-center">
                    <input type="text" className="w-1/3 p-2 m-2 border border-gray-300 rounded-md"
                           placeholder="Search Staff"/>
                    <button className="px-4 py-2 bg-green-500 text-white rounded-md hover:bg-green-600">Download PDF
                    </button>
                </div>
                <table className="table m-2">
                    <thead>
                    <tr className="bg-gray-900">
                        <th className="border border-gray-300 px-4 py-2">Staff ID</th>
                        <th className="border border-gray-300 px-4 py-2">First Name</th>
                        <th className="border border-gray-300 px-4 py-2">Gender</th>
                        <th className="border border-gray-300 px-4 py-2">Contact No</th>
                        <th className="border border-gray-300 px-4 py-2">Email</th>
                        <th className="border border-gray-300 px-4 py-2">Role</th>
                        <th className="border border-gray-300 px-4 py-2">Actions</th>
                    </tr>
                    </thead>
                    <tbody id="staffTableBody">
                    {staff.map((staff) => (
                        <tr key={staff.id}>
                            <td className="border border-gray-300 px-4 py-2 border border-gray-300 rounded-md">{staff.id}</td>
                            <td className="border border-gray-300 px-4 py-2 border border-gray-300 rounded-md">{staff.firstName}</td>
                            <td className="border border-gray-300 px-4 py-2 border border-gray-300 rounded-md">{staff.gender}</td>
                            <td className="border border-gray-300 px-4 py-2 border border-gray-300 rounded-md">{staff.contactNumber}</td>
                            <td className="border border-gray-300 px-4 py-2 border border-gray-300 rounded-md">{staff.email}</td>
                            <td className="border border-gray-300 px-4 py-2 border border-gray-300 rounded-md">{staff.role}</td>
                            <td className="border border-gray-300 px-4 py-2">
                                <button className="text-blue-500 hover:text-blue-700 mr-2 " title="Update"
                                        onClick={() => handleRowClick(staff)}>
                                    <IonIcon className="icon"/> Update
                                </button>
                                <button className="text-red-500 hover:text-red-700" title="Delete" onClick={()=>handleDeleteStaff(staff.email)}>
                                    <IonIcon className="icon"/> Delete
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
