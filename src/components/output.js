import { useContext, useEffect } from 'react';
import { Data } from "../App"

const Output = () => {

    let { sentData } = useContext(Data);

    const getFormatedDate = (date) => {
        if (typeof date === 'string') {
            const unformattedDate = new Date(date);
            const yyyy = unformattedDate.getFullYear();
            let mm = unformattedDate.getMonth() + 1;
            let dd = unformattedDate.getDate();

            if (dd < 10) {
                dd = '0' + dd
            }
            if (mm < 10) {
                mm = '0' + mm
            }

            const formatted = dd + '/' + mm + '/' + yyyy
            return formatted
        } else {
            return '';
        }
    }

    console.log("senddata", sentData)

    if (typeof sentData !== 'object' || sentData === null) {
        sentData = {};
    } else {
        const mili = new Date();
        const randoms = mili.getMilliseconds() * 123456789123456;
        const randomNumber = randoms.toString().slice(0, 16);
        // console.log("random number", randomNumber)
        sentData.random = randomNumber;
    }
    return (
        <div className="outputDiv">

            <div className="container ">
                <div className="row aadharfront aadharback">
                    <div className="col-12 col-md-5">
                        <div>
                            <img src="/fonthead.jpg" height={30} width={30} alt="img" className='imgs' />
                        </div>
                        <div className="d-flex p-2">
                            <img src="https://www.shutterstock.com/image-photo/close-head-shot-confident-serious-260nw-1481322794.jpg" height={200} width={200} alt="img" className='pic'/>
                            <div className="p-2">
                                <p><b>Name:</b>{" "} {sentData.name}</p>
                                <p><b>Dob:</b>{" "}{getFormatedDate(sentData.dob)}</p>
                                <p><b>Mobile:</b>{" "}{sentData.phone}</p>
                                <p><b>Sex:</b>{" "}{sentData.sex}</p>
                            </div>

                        </div>
                        <div className="text-center">
                            <h4>{sentData?.random ? sentData?.random : "XXXX XXXX XXXX XXXX"}</h4>
                        </div>
                        <div>
                            <img src="/frontfoot.jpg" height={30} width={30} alt="img" className="frontfoot" />
                        </div>
                    </div>
                    <div className='col-12 col-md-5 '>
                        <div className="">
                            <div>

                                <img src='/backhead.jpg' height={30} width={30} alt="img" className='imgs' />
                            </div>
                            <div className="d-flex justify-content-around p-3">
                                <div className="w-100 ">
                                    <p><b>Address:</b></p>
                                    <p>C/O {sentData.fatherName},</p>
                                    <p>{sentData.address},{sentData.locality},</p>
                                    <p>{sentData.state}{" "}-{" "}{sentData.zip}</p>
                                </div>
                                <img src="/qr.png" height={200} width={200} alt="qr" className='pic'/>
                            </div>

                        </div>
                        <div className="text-center">
                            <h4>{sentData?.random ? sentData?.random : "XXXX XXXX XXXX XXXX"}</h4>
                        </div>
                        <div>
                            <img src="/backfoot.jpg" height={30} width={30} className='imgs' />
                        </div>
                    </div>
                </div>
               



            </div>


        </div>
    );
}

export default Output;