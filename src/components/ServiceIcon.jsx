import React from 'react';
import PropTypes from 'prop-types';

export default function ServiceIcon({ icon: Icon, title, color }) {
  return (
    <div className="w-full flex flex-col justify-center items-center group cursor-pointer p-5 rounded-xl bg-gradient-to-r from-gray-50 to-gray-100 shadow-md hover:shadow-xl hover:scale-105 transition-all duration-300 ease-in-out">
      <div className="flex items-center justify-center w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-white shadow-inner transform group-hover:scale-110 transition-transform duration-300">
        <Icon className={`w-8 h-8 sm:w-10 sm:h-10 ${color} transition-colors duration-300`} />
      </div>
      <h3 className="mt-4 text-center text-sm sm:text-base font-medium text-gray-700 group-hover:text-gray-900 transition-colors duration-300">
        {title}
      </h3>
    </div>
  );
}

ServiceIcon.propTypes = {
  icon: PropTypes.elementType.isRequired,
  title: PropTypes.string.isRequired,
  color: PropTypes.string,
};

ServiceIcon.defaultProps = {
  color: 'text-blue-500',
};
