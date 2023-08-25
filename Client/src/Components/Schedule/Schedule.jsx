import React, { useState } from 'react';
import dayjs from 'dayjs';
import { DemoContainer, DemoItem } from '@mui/x-date-pickers/internals/demo';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';

import './Schedule.css';

export default function Schedule() {
  const tomorrow = dayjs().add(1, 'day');

  const [Data, setData] = useState({});

  const handleFormSubmit = (event) => {
    event.preventDefault();
    console.log(Data); // Log the Data state
  };

  const handleInputChange = (event) => {
    const { id, value } = event.target;
    setData((prevData) => ({
      ...prevData,
      [id]: value,
    }));
  };

  return (
    <div className='schedulecontainer'>
      <div className='scheduleheader'>
        Schedule a pickup
      </div>

      <div className='details'>
        <div className='date'>
          <h2>Select Pickup Date</h2>

          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DemoContainer
              components={[
                'DatePicker',
                'MobileDatePicker',
                'DesktopDatePicker',
                'StaticDatePicker',
              ]}
            >
              <DemoItem label="Select your pick up date">
                <DatePicker
                  minDate={tomorrow}
                  defaultValue={tomorrow}
                />
              </DemoItem>
            </DemoContainer>
          </LocalizationProvider>
        </div>

        <h2>Enter pick up details </h2>

        <div>
          <form onSubmit={handleFormSubmit}>
            <div>
              <label htmlFor="houseNo">House no.</label>
              <input type="number" autoComplete="off" id="houseNo" className="addressbox" onChange={handleInputChange} />
            </div>

            <div>
              <label htmlFor="pincode">Pincode</label>
              <input type="number" autoComplete="off" id="pincode" className="addressbox" onChange={handleInputChange} />
            </div>

            <div>
              <label htmlFor="address">Address</label>
              <input type="text" autoComplete="off" id="address" className="addressbox" onChange={handleInputChange} />
            </div>
            <div>
              <label htmlFor="landmark">Landmark</label>
              <input type="text" autoComplete="off" id="landmark" className="addressbox" onChange={handleInputChange} />
            </div>

            <button type="submit">Submit</button>
          </form>
        </div>
      </div>
    </div >
  );
}
