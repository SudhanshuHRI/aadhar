
import { useContext, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import axios, { toFormData } from 'axios';
import { FaStarOfLife } from "react-icons/fa";

import { useNavigate } from "react-router-dom";
import { Data } from '../App';
const Input = () => {
    // style={{border:'1px solid black'}}
    const [name, setNeme] = useState('');
    const [father, setFather] = useState('');
    const [dob, setDob] = useState('');
    const [phone, setPhone] = useState('');
    const [address, setAddress] = useState('');
    const [locality, setLocality] = useState('');
    const [state, setState] = useState('');
    const [sex, setSex] = useState('');
    const [zip, setZip] = useState('');
    const [photo, setPhoto] = useState('');
    // const [formdata,setformdata] = useState({});

    const route = useNavigate();

    const { parentData } = useContext(Data);
    // console.log(parent)

    const savedata = (e) => {

        e.preventDefault();
        try {
            if (name == '' || father == '' || dob == '' || address == '' || locality == '' || state == '' || sex == '' || zip == '' || photo=='') {
                alert("All fields are required!!");
            } else if (phone.length != 10) {
                alert("Phone number should have 10 digits");
            } else if (zip.length !== 6) {
                alert('ZipCode should have 6 digits');
            } else {
                const data = {
                    "name": name,
                    "fatherName": father,
                    "dob": dob,
                    "phone": phone,
                    "address": address,
                    "locality": locality,
                    "state": state,
                    "sex": sex,
                    "zip": zip,
                    "photo":photo
                }
               
                parentData(data)
                route("/output");
         

            }

        } catch (error) {
            console.log("try-catch error", error)
        }

    }

    return (

        <div className=' mainInput container'>
            <div className='container '>
                <div className='row p-2' >
                    <div className='col-md-12'>
                        <div className='logo'>
                            <img src='/Aadhaar_Logo.svg' height={100} width={100} />
                        </div>
                        <Form>
                            <Row className="mb-3 mt-3 astrk">
                                <Form.Group as={Col} className='col-12 col-md-4' >
                                    <Form.Label>Name</Form.Label><FaStarOfLife />
                                    <Form.Control type="text" placeholder="Name" value={name} onChange={(e) => setNeme(e.target.value)} />
                                </Form.Group>

                                <Form.Group as={Col} className='col-12 col-md-4'>
                                    <Form.Label>Father Name</Form.Label><FaStarOfLife />
                                    <Form.Control type="text" placeholder="Father Name" value={father} onChange={(e) => setFather(e.target.value)} />
                                </Form.Group>
                                <Form.Group as={Col} className='col-12 col-md-4'>
                                    <Form.Label>Date of Birth</Form.Label><FaStarOfLife />
                                    <Form.Control type="date" placeholder="Father Name" value={dob} onChange={(e) => setDob(e.target.value)} max={new Date()}/>
                                </Form.Group>
                            </Row>
                            <Row className="mb-3 astrk">
                                <Form.Group as={Col} className='col-12 col-md-4'>
                                    <Form.Label>Phone</Form.Label><FaStarOfLife />
                                    <Form.Control type='number' placeholder='Phone' value={phone} onChange={(e) => setPhone(e.target.value)} />
                                </Form.Group>

                                <Form.Group as={Col} className='col-12 col-md-4'>
                                    <Form.Label>Address</Form.Label><FaStarOfLife />
                                    <Form.Control type="text" placeholder="Address" value={address} onChange={(e) => setAddress(e.target.value)} />
                                </Form.Group>
                                <Form.Group as={Col} className='col-12 col-md-4'>
                                    <Form.Label>Locality</Form.Label><FaStarOfLife />
                                    <Form.Control type="text" placeholder="Locality" value={locality} onChange={(e) => setLocality(e.target.value)} />
                                </Form.Group>

                            </Row>

                            <Row className="mb-3 astrk">
                                <Form.Group as={Col} className='col-12 col-md-4'>
                                    <Form.Label>State</Form.Label><FaStarOfLife />
                                    <Form.Control type='text' placeholder='State' value={state} onChange={(e) => setState(e.target.value)} />
                                </Form.Group>
                                <Form.Group as={Col} className='col-12 col-md-4'>
                                    <Form.Label>Sex</Form.Label><FaStarOfLife />
                                    <Form.Select defaultValue="Choose..." value={sex} onChange={(e) => setSex(e.target.value)}>
                                        <option>Choose...</option>
                                        <option>Male</option>
                                        <option>Female</option>
                                        <option>Others</option>
                                    </Form.Select>
                                </Form.Group>
                                <Form.Group as={Col} className='col-12 col-md-4'>
                                    <Form.Label>Zip</Form.Label><FaStarOfLife />
                                    <Form.Control type="number" placeholder="Zip" value={zip} onChange={(e) => setZip(e.target.value)} />
                                </Form.Group>

                            </Row>
                            <Row className='astrk'>
                                <Form.Group as={Col} className='col-12 col-md-12'>
                                    <Form.Label>Photo</Form.Label><FaStarOfLife />   
                                    <Form.Control type="file" name='file' onChange={(e) => setPhoto(URL.createObjectURL(e.target.files[0]))} />
                                </Form.Group>
                            </Row>

                            <Button className='btn buttn mb-3 mt-3  ' onClick={savedata} >
                                Generate Aadhar
                            </Button>
                        </Form>
                    </div>

                </div>
            </div>

        </div>

    );
}

export default Input;
