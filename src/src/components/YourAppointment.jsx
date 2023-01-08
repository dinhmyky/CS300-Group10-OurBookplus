import React from 'react'

const YourAppointment = () => {
  return (
    <div className="your-appointment">
        <div className="container">
            <div className="your-appointment__text">
                <p>
                    Your appointment
                </p>
            </div>
            <div className="your-appointment__noappointment">
                <p>
                    You don't have any appointment yet.
                    Go to Search book to search for printed book and borrow
                </p>   
            </div>
        </div>
    </div>
  )
}

export default YourAppointment