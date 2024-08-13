import React from "react";
import * as XLSX from "xlsx";

const CompanyNameFilter = ({ handleCompanyNameInput, handleFileUpload }) => {
  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      handleFileUpload(file);
    }
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Search by Company Name"
        className="mt-5 mb-6 block w-full pl-3 pr-10 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
        onChange={handleCompanyNameInput}
      />
      <input
        type="file"
        accept=".xlsx, .xls"
        onChange={handleFileChange}
        className="mt-5 block"
      />
    </div>
  );
};

export default CompanyNameFilter;
