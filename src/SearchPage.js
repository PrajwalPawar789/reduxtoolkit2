import { useState, useEffect } from "react";
import ProspectTable from "./ProspectTable";
import Loader from "./Loader";
import Contactandcompany from './contactandcompany';
import IndustryFilter from './IndustryFilter'; // Import the new component
import JobTitleFilter from './JobTitleFilter'; // Import the JobTitleFilter component
import Navbar from "./Navbar";
import CountryFilter from './CountryFilter'

export default function SearchPage() {
  const [selectedCountry, setSelectedCountry] = useState("");
  const [selectedState, setSelectedState] = useState("");
  const [selectedCity, setSelectedCity] = useState("");
  const [selectedIndustries, setSelectedIndustries] = useState([]);
  const [totalCompanies, setTotalCompanies] = useState(0);
  const [selectedTitles, setSelectedTitles] = useState([]);
  const [companyName, setCompanyName] = useState("");
  const [fetchedProspects, setFetchedProspects] = useState([]);
  const [totalContacts, setTotalContacts] = useState(0);
  const [industrySearchTerm, setIndustrySearchTerm] = useState("");
  const [titleSearchTerm, setTitleSearchTerm] = useState(""); // Added state for title search term
  const [loading, setLoading] = useState(true);
  const [countrySearchTerm, setCountrySearchTerm] = useState(""); // Added state for country search term

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
  }, [selectedIndustries, selectedTitles, companyName, selectedCountry, selectedState, selectedCity]);

  const handleIndustrySelection = (selectedOption) => {
    console.log("Selected industry:", selectedOption);
    setSelectedIndustries((prevSelected) =>
      prevSelected.includes(selectedOption)
        ? prevSelected.filter((industry) => industry !== selectedOption)
        : [...prevSelected, selectedOption]
    );
  };

  const handleTitleSelection = (selectedOption) => {
    console.log("Selected title:", selectedOption);
    setSelectedTitles((prevSelected) =>
      prevSelected.includes(selectedOption)
        ? prevSelected.filter((title) => title !== selectedOption)
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
    setTitleSearchTerm(event.target.value.toLowerCase()); // Handle title search change
  };

  const handleCountrySearchChange = (event) => {
    setCountrySearchTerm(event.target.value.toLowerCase()); // Handle country search change
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
                <IndustryFilter
                  selectedIndustries={selectedIndustries}
                  handleIndustrySelection={handleIndustrySelection}
                  handleIndustrySearchChange={handleIndustrySearchChange}
                  industrySearchTerm={industrySearchTerm}
                />
                <JobTitleFilter
                  selectedTitles={selectedTitles}
                  handleTitleSelection={handleTitleSelection}
                  handleTitleSearchChange={handleTitleSearchChange}
                  titleSearchTerm={titleSearchTerm}
                />
                <CountryFilter
                  selectedCountry={selectedCountry}
                  handleCountrySelection={handleCountrySelection}
                  handleCountrySearchChange={handleCountrySearchChange}
                  countrySearchTerm={countrySearchTerm}
                />
                <div className="pt-6">
                  <label
                    htmlFor="company-name"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Company Name
                  </label>
                  <input
                    type="text"
                    name="companyName"
                    id="company-name"
                    className="mt-1 block w-full pl-3 pr-10 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                    placeholder="Search by company name"
                    onChange={handleCompanyNameInput}
                  />
                </div>
              </form>

              {/* Prospect grid */}
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
