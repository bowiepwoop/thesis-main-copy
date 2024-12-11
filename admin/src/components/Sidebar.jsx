import React, { useContext, useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import { assets } from '../assets/assets';
import { AdminContext } from '../context/AdminContext';
import { TeacherContext } from '../context/TeacherContext';

const Sidebar = () => {
  const { dToken } = useContext(TeacherContext);
  const { aToken } = useContext(AdminContext);
  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    if (dToken || aToken) {
      setIsReady(true);
    }
  }, [dToken, aToken]);

  if (!isReady) return null;

  return (
    <div className="min-h-screen border-r">
      {aToken && (
        <ul className="text-gray mt-5">
          <NavLink
            to="/admin-dashboard"
            className={({ isActive }) =>
              `flex items-center gap-3 py-3.5 px-3 md:px-9 md:min-w-72 cursor-pointer ${
                isActive ? 'bg-[#F2F3FF] border-r-4 border-customRed' : ''
              }`
            }
          >
            <img className="min-w-5" src={assets.home_icon} alt="" />
            <p className="hidden md:block">Dashboard</p>
          </NavLink>
          {/* Other Admin Links */}
        </ul>
      )}
      {dToken && (
        <ul className="text-[#515151] mt-5">
          <NavLink
            to="/teacher-dashboard"
            className={({ isActive }) =>
              `flex items-center gap-3 py-3.5 px-3 md:px-9 md:min-w-72 cursor-pointer ${
                isActive ? 'bg-[#F2F3FF] border-r-4 border-customRed' : ''
              }`
            }
          >
            <img className="min-w-5" src={assets.home_icon} alt="" />
            <p className="hidden md:block">Dashboard</p>
          </NavLink>
          <NavLink
            to="/teacher-appointments"
            className={({ isActive }) =>
              `flex items-center gap-3 py-3.5 px-3 md:px-9 md:min-w-72 cursor-pointer ${
                isActive ? 'bg-[#F2F3FF] border-r-4 border-customRed' : ''
              }`
            }
          >
            <img className="min-w-5" src={assets.appointment_icon} alt="" />
            <p className="hidden md:block">Attendance</p>
          </NavLink>
        </ul>
      )}
    </div>
  );
};

export default Sidebar;
