import { useState, useEffect } from "react";
import ProspectTable from "./ProspectTable";
import Loader from "./Loader";
import Contactandcompany from './contactandcompany';
import IndustryFilter from './IndustryFilter';
import JobTitleFilter from './JobTitleFilter';
import Navbar from "./Navbar";
import CountryFilter from './CountryFilter';
import JobLevelFilter from './JobLevelFilter';
import JobFunctionFilter from './JobFunctionFilter'; 
import EmployeeSizeFilter from './EmployeeSizeFilter'; 
import CompanyNameFilter from "./CompanyNameFilter";

export default function SearchPage() {
  const [selectedCountry, setSelectedCountry] = useState("");
  const [selectedState, setSelectedState] = useState("");
  const [selectedCity, setSelectedCity] = useState("");
  const [selectedIndustries, setSelectedIndustries] = useState([]);
  const [totalCompanies, setTotalCompanies] = useState(0);
  const [selectedTitles, setSelectedTitles] = useState([]);
  const [selectedTitles1, setSelectedTitles1] = useState([]);
  const [selectedTitles3, setSelectedTitles3] = useState([]);
  const [selectedTitles4, setSelectedTitles4] = useState([]);

  const [selectedLevels, setSelectedLevels] = useState([]);
  const [selectedFunctions, setSelectedFunctions] = useState([]);
  const [companyName, setCompanyName] = useState("");
  const [fetchedProspects, setFetchedProspects] = useState([]);
  const [totalContacts, setTotalContacts] = useState(0);
  const [industrySearchTerm, setIndustrySearchTerm] = useState("");
  const [titleSearchTerm, setTitleSearchTerm] = useState("");
  const [functionSearchTerm, setFunctionSearchTerm] = useState(""); 
  const [levelSearchTerm, setLevelSearchTerm] = useState("");
  const [loading, setLoading] = useState(true);
  const [countrySearchTerm, setCountrySearchTerm] = useState("");
  const [selectedSizes, setSelectedSizes] = useState([]);
  const [sizeSearchTerm, setSizeSearchTerm] = useState("");

  useEffect(() => {
    const fetchFilteredProspects = async () => {
      setLoading(true);
      const response = await fetch("http://localhost:5000/api/v1/fetchLeads", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          selectedIndustries,
          selectedTitles,
          selectedTitles1,
          selectedTitles3,
          selectedTitles4,
          selectedLevels,
          selectedFunctions,
          selectedSizes,
          companyName,
          selectedCountry,
          selectedState,
          selectedCity,
        }),
      });

      if (response.ok) {
        const data = await response.json();
        console.log("Fetched data:", data.data);
        if (Array.isArray(data.data)) {
          setFetchedProspects(data.data);
          setTotalContacts(data.data.length);
          
          const companyNames = new Set(data.data.map(prospect => prospect.companyName));
          setTotalCompanies(companyNames.size);
        } else {
          console.error("Received data is not an array:", data.data);
        }
      } else {
        console.error("Failed to fetch prospects");
      }
      setLoading(false);
    };

    fetchFilteredProspects();
  }, [selectedIndustries, selectedTitles, selectedTitles1, selectedTitles3, selectedTitles4 , selectedLevels, selectedFunctions, selectedSizes, companyName, selectedCountry, selectedState, selectedCity]);

  const handleIndustrySelection = (selectedOption) => {
    console.log("Selected industry:", selectedOption);
    setSelectedIndustries((prevSelected) =>
      prevSelected.includes(selectedOption)
        ? prevSelected.filter((industry) => industry !== selectedOption)
        : [...prevSelected, selectedOption]
    );
  };

  const handleTitleSelection = (selectedOption) => {
    if (Array.isArray(selectedOption)) {
        // If an array is passed (from Excel), replace the selected titles with the new ones
        setSelectedTitles(selectedOption);
    } else {
        // If a single title is passed (from checkbox selection), toggle its selection
        setSelectedTitles((prevSelected) =>
            prevSelected.includes(selectedOption)
                ? prevSelected.filter((title) => title !== selectedOption)
                : [...prevSelected, selectedOption]
        );
    }
  };

  const handleTitleSelection1 = (selectedOption) => {
    if (Array.isArray(selectedOption)) {
        // If an array is passed (from Excel), replace the selected titles with the new ones
        setSelectedTitles1(selectedOption);
    } else {
        // If a single title is passed (from checkbox selection), toggle its selection
        setSelectedTitles1((prevSelected) =>
            prevSelected.includes(selectedOption)
                ? prevSelected.filter((title) => title !== selectedOption)
                : [...prevSelected, selectedOption]
        );
    }
  };

  const handleTitleSelection3 = (selectedOption) => {
    if (Array.isArray(selectedOption)) {
        // If an array is passed (from Excel), replace the selected titles with the new ones
        setSelectedTitles3(selectedOption);
    } else {
        // If a single title is passed (from checkbox selection), toggle its selection
        setSelectedTitles3((prevSelected) =>
            prevSelected.includes(selectedOption)
                ? prevSelected.filter((title) => title !== selectedOption)
                : [...prevSelected, selectedOption]
        );
    }
  };

  const handleTitleSelection4 = (selectedOption) => {
    if (Array.isArray(selectedOption)) {
        // If an array is passed (from Excel), replace the selected titles with the new ones
        setSelectedTitles4(selectedOption);
    } else {
        // If a single title is passed (from checkbox selection), toggle its selection
        setSelectedTitles4((prevSelected) =>
            prevSelected.includes(selectedOption)
                ? prevSelected.filter((title) => title !== selectedOption)
                : [...prevSelected, selectedOption]
        );
    }
  };

  
  const handleSizeSelection = (selectedOption) => {
    setSelectedSizes((prevSelected) =>
      prevSelected.includes(selectedOption)
        ? prevSelected.filter((size) => size !== selectedOption)
        : [...prevSelected, selectedOption]
    );
  };
  
  const handleSizeSearchChange = (event) => {
    setSizeSearchTerm(event.target.value.toLowerCase());
  };

  const handleFunctionSelection = (selectedOption) => {
    console.log("Selected function:", selectedOption);
    setSelectedFunctions((prevSelected) =>
      prevSelected.includes(selectedOption)
        ? prevSelected.filter((func) => func !== selectedOption)
        : [...prevSelected, selectedOption]
    );
  };

  const handleLevelSelection = (selectedOption) => {
    console.log("Selected level:", selectedOption);
    setSelectedLevels((prevSelected) =>
      prevSelected.includes(selectedOption)
        ? prevSelected.filter((level) => level !== selectedOption)
        : [...prevSelected, selectedOption]
    );
  };

  const handleCountrySelection = (selectedOption) => {
    console.log("Selected country:", selectedOption);
    setSelectedCountry(selectedOption);
  };

  const handleCompanyNameInput = (event) => {
    setCompanyName(event.target.value);
  };

  const handleIndustrySearchChange = (event) => {
    setIndustrySearchTerm(event.target.value.toLowerCase());
  };

  const handleTitleSearchChange = (event) => {
    setTitleSearchTerm(event.target.value.toLowerCase()); 
  };

  const handleFunctionSearchChange = (event) => {
    setFunctionSearchTerm(event.target.value.toLowerCase()); // Handle function search change
  };

  const handleLevelSearchChange = (event) => {
    setLevelSearchTerm(event.target.value.toLowerCase()); 
  };

  const handleCountrySearchChange = (event) => {
    setCountrySearchTerm(event.target.value.toLowerCase()); 
  };

  const handleCountryChange = (event) => {
    setSelectedCountry(event.target.value);
    setSelectedState("");
    setSelectedCity("");
  };

  const handleStateChange = (event) => {
    setSelectedState(event.target.value);
    setSelectedCity("");
  };

  const handleCityChange = (event) => {
    setSelectedCity(event.target.value);
  };

  return (
    <>
      <Navbar />
      <div className="">
        <main className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex gap-11 items-center border-b border-gray-200 pb-6 pt-14">
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 mr-4">
              Prospect search
            </h1>
            <Contactandcompany totalContacts={totalContacts} totalCompanies={totalCompanies}/>
          </div>

          <section aria-labelledby="prospects-heading" className="pb-24 pt-6">
            <h2 id="prospects-heading" className="sr-only">
              Prospects
            </h2>

            <div className="grid grid-cols-1 gap-x-8 gap-y-10 lg:grid-cols-4">
              {/* Filters */}
              <form className="hidden lg:block">
                <h3 className="sr-only">Categories</h3>
                
                <CountryFilter 
                  selectedCountry={selectedCountry}
                  handleCountrySelection={handleCountrySelection}
                  handleCountryChange={handleCountryChange}
                  handleStateChange={handleStateChange}
                  handleCityChange={handleCityChange}
                  countrySearchTerm={countrySearchTerm}
                  handleCountrySearchChange={handleCountrySearchChange}
                />
                <IndustryFilter
                  selectedIndustries={selectedIndustries}
                  handleIndustrySelection={handleIndustrySelection}
                  industrySearchTerm={industrySearchTerm}
                  handleIndustrySearchChange={handleIndustrySearchChange}
                />
                <JobTitleFilter
                  selectedTitles={selectedTitles}
                  handleTitleSelection={handleTitleSelection}
                  handleTitleSelection1={handleTitleSelection1}
                  handleTitleSelection3={handleTitleSelection3}
                  handleTitleSelection4={handleTitleSelection4}
                  titleSearchTerm={titleSearchTerm}
                  handleTitleSearchChange={handleTitleSearchChange}
                />
                <JobFunctionFilter
                  selectedFunctions={selectedFunctions}
                  handleFunctionSelection={handleFunctionSelection}
                  functionSearchTerm={functionSearchTerm}
                  handleFunctionSearchChange={handleFunctionSearchChange}
                />
                <JobLevelFilter
                  selectedLevels={selectedLevels} 
                  handleLevelSelection={handleLevelSelection} 
                  handleLevelSearchChange={handleLevelSearchChange}
                  levelSearchTerm={levelSearchTerm} 
                />
                <EmployeeSizeFilter
  selectedSizes={selectedSizes}
  handleSizeSelection={handleSizeSelection}
  sizeSearchTerm={sizeSearchTerm}
  handleSizeSearchChange={handleSizeSearchChange}
/>
                <div >
                {/* <input
                  type="text"
                  placeholder="Search by Company Name"
                  className="mt-5 mb-6 block w-full pl-3 pr-10 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                  onChange={handleCompanyNameInput}
                /> */}
                <CompanyNameFilter handleCompanyNameInput={handleCompanyNameInput} />
              </div>
              </form>
              
              <div className="lg:col-span-3">
                {loading ? (
                  <Loader />
                ) : (
                  <ProspectTable prospects={fetchedProspects} />
                )}
              </div>
            </div>
          </section>
        </main>
      </div>
    </>
  );
}
