import React, { useState, useEffect, useContext } from 'react';
import { useParams } from 'react-router-dom';
import { AppContext } from '../context/AppContext';
import { assets } from '../assets/assets';
import RelatedDoctor from '../components/RelatedDoctors';

const Appointment = () => {

  const { docId } = useParams();
  const { doctors, currencySymbol } = useContext(AppContext);
  const daysOfWeek = ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT'];

  const [docInfo, setDocInfo] = useState(null);
  const [docSlots, setDocSlots] = useState([]);
  const [slotIndex, setSlotIndex] = useState(0);
  const [slotTime, setSlotTime] = useState('');

  const fetchDocInfo = () => {
    const docInfo = doctors.find(doc => doc._id === docId);
    setDocInfo(docInfo);
  };

  const getAvailableSlots = () => {
    setDocSlots([]);

    let today = new Date();
    let currentDate = new Date(today);

    for (let i = 0; i < 7; i++) {
      currentDate = new Date(today);
      currentDate.setDate(today.getDate() + i);

      let endTime = new Date(today);
      endTime.setDate(today.getDate() + i);
      endTime.setHours(21, 0, 0, 0);

      if (today.getDate() === currentDate.getDate()) {
        currentDate.setHours(currentDate.getHours() > 10 ? currentDate.getHours() + 1 : 10);
        currentDate.setMinutes(currentDate.getMinutes() > 30 ? 30 : 0);
      } else {
        currentDate.setHours(10);
        currentDate.setMinutes(0);
      }

      let timeSlots = [];
      while (currentDate < endTime) {
        let formattedTime = currentDate.toLocaleTimeString([], {
          hour: '2-digit',
          minute: '2-digit'
        });

        timeSlots.push({
          datetime: new Date(currentDate),
          time: formattedTime
        });

        currentDate.setMinutes(currentDate.getMinutes() + 30);
      }

      setDocSlots(prev => [...prev, timeSlots]);
    }
  };

  useEffect(() => {
    fetchDocInfo();
  }, [doctors, docId]);

  useEffect(() => {
    if (docInfo) {
      getAvailableSlots();
    }
  }, [docInfo]);

  return docInfo && (
    <div className='flex flex-col gap-4'>

      {/* Top layout section */}
      <div className='flex flex-col sm:flex-row gap-4'>

        <div>
          <img className='bg-red-500 w-500px sm:max-w-72 rounded-4xl' src={docInfo.image} alt={docInfo.name} />
        </div>

        <div className='flex-1'>

          {/* Doctor Info */}
          <div className='border border-gray-400 rounded-lg p-8 py-7 bg-white mx-2 sm:mx-0 mt-[-80px] sm:mt-0'>
            <p className='flex items-center gap-2 text-2xl font-medium text-gray-900'>
              {docInfo.name}
              <img className='w-5' src={assets.verified_icon} alt="" />
            </p>

            <div className='flex items-center gap-2 text-sm mt-1 text-gray-600'>
              <p>{docInfo.degree} - {docInfo.speciality}</p>
              <button className='py-0.5 px-2 border text-xs rounded-full'>{docInfo.experience}</button>
            </div>

            <div>
              <p className='flex items-center gap-1 text-sm mt-3 text-gray-900 font-medium'>
                About <img src={assets.info_icon} alt="" />
              </p>
              <p className='text-sm text-gray-500 max-w-[700px] mt-1'>{docInfo.about}</p>
            </div>

            <p className='text-gray-500 font-medium mt-4'>
              Appointment fee: <span className='text-gray-600'>{currencySymbol}{docInfo.fees}</span>
            </p>
          </div>

          {/* Booking Slots */}
          <div className='mt-6 font-medium text-gray-700'>
            <p>Booking slots</p>

            {/* DAY BUTTONS */}
            <div className='flex gap-4 items-center w-full overflow-x-scroll mt-4 pb-2'>
              {docSlots.length > 0 && docSlots.map((item, index) => (
                <div
                  onClick={() => setSlotIndex(index)}
                  className={`text-center py-4 min-w-16 rounded-full cursor-pointer transition-all ${
                    slotIndex === index ? 'bg-red-500 text-white' : 'border border-gray-300 text-gray-700'
                  }`}
                  key={index}
                >
                  <p>{item[0] && daysOfWeek[item[0].datetime.getDay()]}</p>
                  <p>{item[0] && item[0].datetime.getDate()}</p>
                </div>
              ))}
            </div>

            {/* TIME BUTTONS */}
            <div className='flex gap-3 w-full overflow-x-scroll mt-4 pb-2'>
              {docSlots.length > 0 && docSlots[slotIndex]?.map((item, index) => (
                <p
                  onClick={() => setSlotTime(item.time)}
                  className={`text-sm font-light flex-shrink-0 px-5 py-2 rounded-full cursor-pointer ${
                    item.time === slotTime ? 'bg-red-500 text-white' : 'text-gray-600 border border-gray-300'
                  }`}
                  key={index}
                >
                  {item.time.toLowerCase()}
                </p>
              ))}
            </div>

            {/* BOOK BUTTON */}
            <button className='bg-red-500 text-white text-sm font-medium px-14 py-3 rounded-full my-6 w-fit'>
              Book an appointment
            </button>
          </div>

        </div>
      </div>

      {/* Related Doctors section */}
      <RelatedDoctor docId={docId} speciality={docInfo.speciality} />

    </div>
  );
};

export default Appointment;
