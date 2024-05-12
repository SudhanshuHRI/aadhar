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
                            <img src={sentData.photo ? sentData.photo : "/dummy2.jpg"} height={200} width={200} alt="img" className='pic' />
                            <div className="p-2">
                                <p><b>Name:</b>{" "} {sentData.name ? sentData.name: "XXXXXXXXXX"}</p>
                                <p><b>Dob:</b>{" "}{getFormatedDate(sentData.dob)? getFormatedDate(sentData.dob) : "xx/xx/xxxx"}</p>
                                <p><b>Mobile:</b>{" "}{sentData.phone ? sentData.phone: "XXXXXXXXXX"}</p>
                                <p><b>Sex:</b>{" "}{sentData.sex ? sentData.sex : 'XXXXX'}</p>
                            </div>

                        </div>
                        <div className="text-center">
                            <h4>{sentData?.random ? sentData?.random : "XXXX XXXX XXXX XXXX"}</h4>
                        </div>
                        <div className='foot'>
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
                                    <p>C/O {sentData.fatherName ? sentData.fatherName : "XXXXXXXXXX"},</p>
                                    <p>{sentData.address ? sentData.address:" XXXXXXXX"},{sentData.locality ? sentData.locality : 'XXXXXXXX'},</p>
                                    <p>{sentData.state ? sentData.state : "XXXXXXX"}{" "}-{" "}{sentData.zip ? sentData.zip : "XXXXXX"}</p>
                                </div>
                                <img src="/qr.png" height={200} width={200} alt="qr" className='pic' />
                            </div>

                        </div>
                        <div className="text-center">
                            <h4>{sentData?.random ? sentData?.random : "XXXX XXXX XXXX XXXX"}</h4>
                        </div>
                        <div>
                            <img src="/backfoot.jpg" height={30} width={30} className='imgs' />
                        </div>
                    </div>
                    <div className='download mt-3'>
                        <button className='btn btn-info' onClick={()=>window.print()}>Download</button>
                    </div>
                </div>





            </div>


        </div>
    );
}

export default Output;