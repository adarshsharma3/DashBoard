import React, { useState } from 'react';
import { Calendar, ChevronDown } from 'lucide-react';

export const DatePicker = ({
  value,
  onChange,
  className = '',
}) => {
  const [isOpen, setIsOpen] = useState(false);

  const formatDateRange = (dateRange) => {
    return `${dateRange.startDate} - ${dateRange.endDate}`;
  };

  const handlePresetClick = (days) => {
    const endDate = new Date();
    const startDate = new Date();
    startDate.setDate(endDate.getDate() - days);

    onChange({
      startDate: startDate.toISOString().split('T')[0],
      endDate: endDate.toISOString().split('T')[0],
    });
    setIsOpen(false);
  };

  return (
    <div className={`relative ${className}`}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center px-4 py-2 bg-white border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors duration-200"
      >
        <Calendar className="w-4 h-4 mr-2 text-gray-500" />
        <span className="text-sm text-gray-700">{formatDateRange(value)}</span>
        <ChevronDown className="w-4 h-4 ml-2 text-gray-500" />
      </button>

      {isOpen && (
        <div className="absolute top-full left-0 mt-2 w-64 bg-white border border-gray-200 rounded-lg shadow-lg z-50">
          <div className="p-4">
            <h3 className="text-sm font-medium text-gray-900 mb-3">Quick Select</h3>
            <div className="space-y-2">
              <button
                onClick={() => handlePresetClick(7)}
                className="w-full text-left px-3 py-2 text-sm text-gray-700 hover:bg-gray-100 rounded-md"
              >
                Last 7 days
              </button>
              <button
                onClick={() => handlePresetClick(30)}
                className="w-full text-left px-3 py-2 text-sm text-gray-700 hover:bg-gray-100 rounded-md"
              >
                Last 30 days
              </button>
              <button
                onClick={() => handlePresetClick(90)}
                className="w-full text-left px-3 py-2 text-sm text-gray-700 hover:bg-gray-100 rounded-md"
              >
                Last 90 days
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};