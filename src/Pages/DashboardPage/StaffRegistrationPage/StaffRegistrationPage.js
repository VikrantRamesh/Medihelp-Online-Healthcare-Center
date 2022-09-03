import React, { useState } from 'react'
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router';
import Sidebar from '../../../Components/Dashboad/Sidebar/Sidebar';
import './StaffRegistrationPage.css'

export default function StaffRegistrationPage() {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const navigate = useNavigate()
    const [showPassword, setShowPassword] = useState(false)
    const handleShowPassword = () => {
        if(showPassword){
            setShowPassword(false)
        }
        else{
            setShowPassword(true)
        }
    }
    const onSubmit = data => {
        const staffData = {
            isPatient: false,
            patientName: data.patientName[0].toUpperCase() + data.patientName.substring(1),
            patientEmail: data.patientEmail,
            patientPassword: data.patientPassword,
            patientGender: data.patientGender[0].toUpperCase() + data.patientGender.substring(1),
            patientAge: data.patientAge,
            patientPhoneNumber: data.patientPhoneNumber,
            patientAddress: data.patientAddress[0].toUpperCase() + data.patientAddress.substring(1),
            patientDisease: "",
            patientBloodGroup: data.patientBloodGroup,
            departmentName: '',
            doctorName: '',
            ambulanceDate: '',
            admitFormatDate: '',
            admitFloorNo: '',
            admitRoomNo: '',
            admitBedNo: '',
            appointmentFormatDate: '',
            appointmentTime:''
        };

        fetch("https://secure-scrubland-67511.herokuapp.com/registerPatient", {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(staffData)
        })

            .then(res => {
                if (res) {
                    alert('Staff registered Successfully')
                    navigate('/dashboard')
                }
            })
            .catch(err => {
                alert('Something went wrong, try again.')
            })
    };


    return (
           <form>
               <div className = "inner_Form">

                   <h2 className="title">STAFF SIGNUP</h2>

                   <div class = "form_Grp">
                       <label htmlFor="name">Name:</label><br />
                       <input className = "input" type = 'text' name = "name" id = 'name' />
                   </div>
                   <div class = "form_Grp">
                       <label htmlFor="email">E-Mail:</label><br />
                       <input className = "input" type = 'email' name = "email" id = 'email' />
                   </div>
                   <div class = "form_Grp">
                       <label htmlFor="FieldOfWork">Field of Work:</label><br />
                       <select className = "input" name="FieldOfWork" id="FieldOfWork">
                           <option value="Neurology">Neurology</option>
                           <option value="Orthopaedics">Orthopaedics</option>
                           <option value="Children">Children</option>
                           <option value="Ear,Nose and Throat">Ear,Nose and Throat</option>
                           <option value="Endocrinology">Endocrinology</option>
                       </select>
                   </div>
                   <div class = "form_Grp">
                       <label htmlFor="BloodGrp">Blood Group:</label><br />
                       <select className = "input" name="BloodGrp" id="BloodGrp">
                           <option value="A+">A+</option>
                           <option value="A-">A-</option>
                           <option value="B-">B+</option>
                           <option value="O+">O+</option>
                           <option value="O-">O-</option>
                           <option value="A-">A-</option>
                           <option value="AB+">AB+</option>
                           <option value="AB-">AB-</option>
                       </select>
                   </div>

                   <div class = "form_Grp">
                       <label htmlFor="address">Address:</label><br />
                       <textarea name="address" rows="4" cols="50" className = "input_textarea" id = 'c' />
                   </div>
                   <div class = "form_Grp">
                       <label htmlFor="password">Password:</label><br />
                       <input className = "input" type = 'password' name = "pass" id = 'pass' />
                   </div>
                   <div class = "form_Grp">
                       <label htmlFor="password">Repeat Password:</label><br />
                       <input className = "input" type = 'password' name = "rep_pass" id = 'rep_pass' />
                   </div>
                   <div class = "form_Grp_submit">
                       <input type="submit" className="submit" value="REGISTER"/>
                   </div>
               </div>
           </form>
   )
}
