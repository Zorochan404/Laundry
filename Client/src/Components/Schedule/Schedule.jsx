import React from 'react';
import dayjs from 'dayjs';
import { DemoContainer, DemoItem } from '@mui/x-date-pickers/internals/demo';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { MobileDatePicker } from '@mui/x-date-pickers/MobileDatePicker';
import { DesktopDatePicker } from '@mui/x-date-pickers/DesktopDatePicker';
import { StaticDatePicker } from '@mui/x-date-pickers/StaticDatePicker';

import './Schedule.css';

export default function Schedule() {
  const tomorrow = dayjs().add(1, 'day');


  return (
    <div className='schedulecontainer'>
      <div className='scheduleheader'>
        Schedule a pickup
      </div>
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
            <DemoItem label="Responsive variant">
              <DatePicker
                minDate={tomorrow}
                defaultValue={tomorrow} 
              />
            </DemoItem>
          </DemoContainer>
        </LocalizationProvider>
      </div>
      <div className='details'>
        
      </div>
    </div>
  );
}
