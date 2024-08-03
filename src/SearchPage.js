  import { Fragment, useState, useEffect } from "react";
  import { Dialog, Disclosure, Transition } from "@headlessui/react";
  import ProspectTable from "./ProspectTable";
  import Loader from "./Loader";

  import {
    XMarkIcon,
    ChevronDownIcon,
    PlusIcon,
    MinusIcon,
  } from "@heroicons/react/20/solid";
  import Navbar from "./Navbar";

  const filters = [
    {
      id: "industry",
      name: "Industry",
      options: [
        { value: "Airlines and Aviation", label: "Airlines and Aviation" },
        { value: "Food & Agriculture", label: "Food & Agriculture" },
        { value: "IT", label: "IT" },
        { value: "Finance", label: "Finance" },
        { value: "Operations", label: "Operations" },
        { value: "Healthcare", label: "Healthcare" },
        { value: "Education", label: "Education" },
        { value: "Manufacturing", label: "Manufacturing" },
        { value: "Retail", label: "Retail" },
        { value: "Construction", label: "Construction" },
        { value: "Energy", label: "Energy" },
        { value: "Transportation", label: "Transportation" },
        { value: "Real Estate", label: "Real Estate" },
        { value: "Telecommunications", label: "Telecommunications" },
        { value: "Pharmaceuticals", label: "Pharmaceuticals" },
        { value: "Legal", label: "Legal" },
        { value: "Insurance", label: "Insurance" },
        { value: "Hospitality", label: "Hospitality" },
        { value: "Entertainment", label: "Entertainment" },
        { value: "Publishing", label: "Publishing" },
        { value: "Government", label: "Government" },
        { value: "Non-Profit Organization", label: "Non-Profit Organization" },
        { value: "Consumer Goods", label: "Consumer Goods" },
        { value: "Mining", label: "Mining" },
        { value: "Agriculture", label: "Agriculture" },
        { value: "Automotive", label: "Automotive" },
        { value: "Chemicals", label: "Chemicals" },
        { value: "Defense", label: "Defense" },
        { value: "Education Technology", label: "Education Technology" },
        { value: "Electronics", label: "Electronics" },
        { value: "Environmental Services", label: "Environmental Services" },
        { value: "Fashion", label: "Fashion" },
        { value: "Fintech", label: "Fintech" },
        { value: "Food & Beverages", label: "Food & Beverages" },
        {
          value: "Health, Wellness & Fitness",
          label: "Health, Wellness & Fitness",
        },
        {
          value: "Information Technology & Services",
          label: "Information Technology & Services",
        },
        { value: "Logistics & Supply Chain", label: "Logistics & Supply Chain" },
        { value: "Luxury Goods & Jewelry", label: "Luxury Goods & Jewelry" },
        { value: "Maritime", label: "Maritime" },
        { value: "Marketing & Advertising", label: "Marketing & Advertising" },
        { value: "Media Production", label: "Media Production" },
      ],
    },
    {
      id: "title",
      name: "Job Title",
      options: [
        {
          value: "Deputy Director IT Projects Airport Operations",
          label: "Deputy Director IT Projects Airport Operations",
        },
        {
          value: "Team Manager - IT Solution Architect",
          label: "Team Manager - IT Solution Architect",
        },
        {
          value: "Deputy Director IT Enterprise Architecture",
          label: "Deputy Director IT Enterprise Architecture",
        },
        { value: "IT Solutions Architect", label: "IT Solutions Architect" },
        { value: "Chief Executive Officer", label: "Chief Executive Officer" },
        {
          value: "Director, IT - Business Analysis",
          label: "Director, IT - Business Analysis",
        },
        { value: "IT Service Desk Manager", label: "IT Service Desk Manager" },
        { value: "Food & Agriculture", label: "Food & Agriculture" },
        { value: "Software Engineer", label: "Software Engineer" },
      ],
    },
    {
      id: "country",
      name: "Country",
      options: [
        { value: "United States", label: "United States" },
        { value: "Canada", label: "Canada" },
        // Add more countries as needed
      ],
    },
    {
      id: "state",
      name: "State",
      options: [
        // States could be dynamically loaded based on the selected country
        { value: "California", label: "California" },
        { value: "New York", label: "New York" },
        // Add more states as needed
      ],
    },
    {
      id: "city",
      name: "City",
      options: [
        // Cities could be dynamically loaded based on the selected state
        { value: "Los Angeles", label: "Los Angeles" },
        { value: "New York City", label: "New York City" },
        // Add more cities as needed
      ],
    },
  ];

  export default function Example() {
    
    const [selectedCountry, setSelectedCountry] = useState("");
  const [selectedState, setSelectedState] = useState("");
  const [selectedCity, setSelectedCity] = useState("");

    const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false);
    const [selectedIndustries, setSelectedIndustries] = useState([]);
    const [totalCompanies, setTotalCompanies] = useState(0); // New state for company count
    const [selectedTitles, setSelectedTitles] = useState([]);
    const [companyName, setCompanyName] = useState("");
    const [fetchedProspects, setFetchedProspects] = useState([]);
    const [totalContacts, setTotalContacts] = useState(0);
    const [industrySearchTerm, setIndustrySearchTerm] = useState("");
    const [loading, setLoading] = useState(true);

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
            
            // Calculate the count of unique companies
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
    }, [selectedIndustries, selectedTitles, companyName, selectedCountry, selectedState, selectedCity]); // Ensure all relevant states are listed here

    // Function to handle industry filter selection
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

    // Function to handle company name input
    const handleCompanyNameInput = (event) => {
      setCompanyName(event.target.value);
    };

    const handleIndustrySearchChange = (event) => {
      setIndustrySearchTerm(event.target.value.toLowerCase());
    };

    const handleCountryChange = (event) => {
      setSelectedCountry(event.target.value);
      // Reset state and city selections when country changes
      setSelectedState("");
      setSelectedCity("");
    };
    
    const handleStateChange = (event) => {
      setSelectedState(event.target.value);
      // Reset city selection when state changes
      setSelectedCity("");
    };
    
    const handleCityChange = (event) => {
      setSelectedCity(event.target.value);
    };
    

    const filteredIndustryOptions = filters
      .find((f) => f.id === "industry")
      .options.filter((option) =>
        option.label.toLowerCase().includes(industrySearchTerm)
      );

    return (
      <>
        <Navbar />
        <div className="">
          <main className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="flex gap-11 items-center  border-b border-gray-200 pb-6 pt-14">
              <h1 className="text-4xl font-bold tracking-tight text-gray-900 mr-4">
                Prospect search
              </h1>
              <div className="gap-2 flex items-center bg-blue-100 text-blue-800 text-sm font-semibold px-3 py-1 rounded-md">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 16 16"
                  height="16"
                  width="16"
                >
                  <g clip-path="url(#clip0_8183_21)">
                    <path
                      fill="#151417"
                      d="M4.00012 9.66666C4.60542 9.66678 5.20267 9.80543 5.74612 10.072C5.78786 10.0924 5.82486 10.1214 5.85475 10.1569C5.88464 10.1925 5.90676 10.234 5.91969 10.2786C5.93263 10.3232 5.93608 10.3701 5.92984 10.4161C5.9236 10.4622 5.9078 10.5064 5.88346 10.546C5.30601 11.4845 5.00022 12.5648 5.00012 13.6667C5.00012 13.7551 4.965 13.8399 4.90249 13.9024C4.83998 13.9649 4.75519 14 4.66679 14H0.333445C0.245039 14 0.160254 13.9649 0.0977421 13.9024C0.0352297 13.8399 0.000110626 13.7551 0.000110626 13.6667C0.000110626 12.6058 0.421538 11.5884 1.17169 10.8382C1.92183 10.0881 2.93925 9.66666 4.00012 9.66666Z"
                    ></path>
                    <path
                      fill="#151417"
                      d="M6.53735 6.83334C6.53735 7.16165 6.47269 7.48674 6.34705 7.79005C6.22142 8.09337 6.03727 8.36896 5.80512 8.60111C5.57297 8.83326 5.29738 9.01741 4.99406 9.14304C4.69075 9.26868 4.36566 9.33334 4.03735 9.33334C3.70905 9.33334 3.38396 9.26868 3.08065 9.14304C2.77733 9.01741 2.50173 8.83326 2.26959 8.60111C2.03744 8.36896 1.85329 8.09337 1.72765 7.79005C1.60202 7.48674 1.53735 7.16165 1.53735 6.83334C1.53735 6.50504 1.60202 6.17995 1.72765 5.87663C1.85329 5.57332 2.03744 5.29772 2.26959 5.06558C2.50173 4.83343 2.77733 4.64928 3.08065 4.52364C3.38396 4.39801 3.70905 4.33334 4.03735 4.33334C4.36566 4.33334 4.69075 4.39801 4.99406 4.52364C5.29738 4.64928 5.57297 4.83343 5.80512 5.06558C6.03727 5.29772 6.22142 5.57332 6.34705 5.87663C6.47269 6.17995 6.53735 6.50504 6.53735 6.83334Z"
                    ></path>
                    <path
                      fill="#151417"
                      d="M14.1667 5.16667C14.1667 6.00652 13.8331 6.81198 13.2393 7.40584C12.6454 7.99971 11.8399 8.33334 11.0001 8.33334C10.1602 8.33334 9.35478 7.99971 8.76091 7.40584C8.16705 6.81198 7.83342 6.00652 7.83342 5.16667C7.83342 4.32682 8.16705 3.52136 8.76091 2.9275C9.35478 2.33363 10.1602 2 11.0001 2C11.8399 2 12.6454 2.33363 13.2393 2.9275C13.8331 3.52136 14.1667 4.32682 14.1667 5.16667Z"
                    ></path>
                    <path
                      fill="#151417"
                      d="M6 13.6667C6 12.3406 6.52678 11.0688 7.46447 10.1311C8.40215 9.19344 9.67392 8.66666 11 8.66666C12.3261 8.66666 13.5979 9.19344 14.5355 10.1311C15.4732 11.0688 16 12.3406 16 13.6667C16 13.7551 15.9649 13.8399 15.9024 13.9024C15.8399 13.9649 15.7551 14 15.6667 14H6.33333C6.24493 14 6.16014 13.9649 6.09763 13.9024C6.03512 13.8399 6 13.7551 6 13.6667Z"
                    ></path>
                  </g>
                  <defs>
                    <clipPath id="clip0_8183_21">
                      <rect
                        transform="matrix(-1 0 0 1 16 0)"
                        fill="white"
                        height="16"
                        width="16"
                      ></rect>
                    </clipPath>
                  </defs>
                </svg>
                <div className="gap-2 flex items-center bg-blue-100 text-blue-800 text-sm font-semibold px-3 py-1 rounded-md">
          <span>Contacts ({totalContacts})</span>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 16" height="16" width="16">
  <path fill="#151417" d="M0.6 15H5.4C5.55913 15 5.71174 14.9617 5.82426 14.8935C5.93679 14.8253 6 14.7328 6 14.6364V7.36364C6 7.26719 5.93679 7.1747 5.82426 7.10651C5.71174 7.03831 5.55913 7 5.4 7H0.6C0.44087 7 0.288258 7.03831 0.175736 7.10651C0.0632138 7.1747 0 7.26719 0 7.36364V14.6364C0 14.7328 0.0632138 14.8253 0.175736 14.8935C0.288258 14.9617 0.44087 15 0.6 15ZM2.1 9.18182C2.1 9.03715 2.19482 8.89842 2.3636 8.79612C2.53239 8.69383 2.76131 8.63636 3 8.63636C3.23869 8.63636 3.46761 8.69383 3.6364 8.79612C3.80518 8.89842 3.9 9.03715 3.9 9.18182V9.90909C3.9 10.0538 3.80518 10.1925 3.6364 10.2948C3.46761 10.3971 3.23869 10.4545 3 10.4545C2.76131 10.4545 2.53239 10.3971 2.3636 10.2948C2.19482 10.1925 2.1 10.0538 2.1 9.90909V9.18182ZM2.1 12.0909C2.1 11.9462 2.19482 11.8075 2.3636 11.7052C2.53239 11.6029 2.76131 11.5455 3 11.5455C3.23869 11.5455 3.46761 11.6029 3.6364 11.7052C3.80518 11.8075 3.9 11.9462 3.9 12.0909V12.8182C3.9 12.9628 3.80518 13.1016 3.6364 13.2039C3.46761 13.3062 3.23869 13.3636 3 13.3636C2.76131 13.3636 2.53239 13.3062 2.3636 13.2039C2.19482 13.1016 2.1 12.9628 2.1 12.8182V12.0909Z"></path>
  <path fill="#151417" d="M15.3933 3.39612L8.39333 1.06269C8.2413 1.0121 8.0755 0.991627 7.91079 1.0031C7.74608 1.01458 7.58761 1.05764 7.44955 1.12844C7.31149 1.19924 7.19816 1.29557 7.1197 1.4088C7.04125 1.52202 7.00012 1.64862 7 1.77724V14.2222C7 14.4285 7.10536 14.6263 7.29289 14.7722C7.48043 14.9181 7.73478 15 8 15H15C15.2652 15 15.5196 14.9181 15.7071 14.7722C15.8946 14.6263 16 14.4285 16 14.2222V4.11067C16 3.95843 15.9425 3.80954 15.8347 3.6825C15.7268 3.55547 15.5734 3.45588 15.3933 3.39612ZM10.6667 11.3702C10.6667 11.5765 10.5613 11.7744 10.3738 11.9202C10.1862 12.0661 9.93188 12.148 9.66667 12.148C9.40145 12.148 9.1471 12.0661 8.95956 11.9202C8.77202 11.7744 8.66667 11.5765 8.66667 11.3702V10.3331C8.66667 10.1269 8.77202 9.92902 8.95956 9.78315C9.1471 9.63728 9.40145 9.55534 9.66667 9.55534C9.93188 9.55534 10.1862 9.63728 10.3738 9.78315C10.5613 9.92902 10.6667 10.1269 10.6667 10.3331V11.3702ZM10.6667 6.70337C10.6667 6.90966 10.5613 7.1075 10.3738 7.25336C10.1862 7.39923 9.93188 7.48118 9.66667 7.48118C9.40145 7.48118 9.1471 7.39923 8.95956 7.25336C8.77202 7.1075 8.66667 6.90966 8.66667 6.70337V5.66629C8.66667 5.46 8.77202 5.26216 8.95956 5.11629C9.1471 4.97043 9.40145 4.88848 9.66667 4.88848C9.93188 4.88848 10.1862 4.97043 10.3738 5.11629C10.5613 5.26216 10.6667 5.46 10.6667 5.66629V6.70337ZM14 11.3702C14 11.5765 13.8946 11.7744 13.7071 11.9202C13.5196 12.0661 13.2652 12.148 13 12.148C12.7348 12.148 12.4804 12.0661 12.2929 11.9202C12.1054 11.7744 12 11.5765 12 11.3702V10.3331C12 10.1269 12.1054 9.92902 12.2929 9.78315C12.4804 9.63728 12.7348 9.55534 13 9.55534C13.2652 9.55534 13.5196 9.63728 13.7071 9.78315C13.8946 9.92902 14 10.1269 14 10.3331V11.3702ZM14 6.70337C14 6.90966 13.8946 7.1075 13.7071 7.25336C13.5196 7.39923 13.2652 7.48118 13 7.48118C12.7348 7.48118 12.4804 7.39923 12.2929 7.25336C12.1054 7.1075 12 6.90966 12 6.70337V5.66629C12 5.46 12.1054 5.26216 12.2929 5.11629C12.4804 4.97043 12.7348 4.88848 13 4.88848C13.2652 4.88848 13.5196 4.97043 13.7071 5.11629C13.8946 5.26216 14 5.46 14 5.66629V6.70337Z"></path>
  </svg>
          {/* Display the count of unique companies */}
          <span>Companies ({totalCompanies})</span>
        </div>
                
              </div>
            </div>

            {/* Display selected industries above the search box */}

            <section aria-labelledby="prospects-heading" className="pb-24 pt-6">
              <h2 id="prospects-heading" className="sr-only">
                Prospects
              </h2>

              <div className="grid grid-cols-1 gap-x-8 gap-y-10 lg:grid-cols-4">
                {/* Filters */}
                <form className="hidden lg:block">
                  {filters.map((section) => (
                    <Disclosure
                      as="div"
                      key={section.id}
                      className="border-b border-gray-200 py-4"
                    >
                      {({ open }) => (
                        <>
                          <h3 className="flow-root">
                            <Disclosure.Button className="py-2 flex justify-between w-full text-left text-sm font-medium text-gray-700 hover:text-gray-900">
                              <span>{section.name}</span>
                              <span className="ml-6 flex items-center">
                                {open ? (
                                  <MinusIcon
                                    className="h-5 w-5 text-gray-400"
                                    aria-hidden="true"
                                  />
                                ) : (
                                  <PlusIcon
                                    className="h-5 w-5 text-gray-400"
                                    aria-hidden="true"
                                  />
                                )}
                              </span>
                            </Disclosure.Button>
                          </h3>
                          {section.id === "industry" &&
                            selectedIndustries.length > 0 && (
                              <div className="flex flex-wrap gap-2 p-2 mt-2">
                                {selectedIndustries.map((industry) => (
                                  <span
                                    key={industry}
                                    className="flex items-center gap-2 bg-blue-50 text-blue-800 text-sm px-3 py-1 rounded-full"
                                  >
                                    {industry}
                                    <XMarkIcon
                                      className="cursor-pointer h-4 w-4"
                                      onClick={() =>
                                        handleIndustrySelection(industry)
                                      }
                                    />
                                  </span>
                                ))}
                              </div>
                            )}
                          <Disclosure.Panel className="pt-4 ">
                            {section.id === "industry" && (
                              <div className="pb-2">
                                <input
                                  type="text"
                                  placeholder="Search industries"
                                  className="mt-1 block w-full pl-3 pr-10 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                                  onChange={handleIndustrySearchChange}
                                />
                              </div>
                            )}
                            {/* Wrap this div around the options to make them scrollable */}
                            <div className="max-h-60 overflow-y-auto">
                              <div className="space-y-2">
                                {(section.id === "industry"
                                  ? filteredIndustryOptions
                                  : section.options
                                ).map((option, optionIdx) => (
                                  <div
                                    key={option.value}
                                    className="flex items-center"
                                  >
                                    <input
                                      id={`filter-${section.id}-${optionIdx}`}
                                      name={`${section.id}[]`}
                                      value={option.value}
                                      type="checkbox"
                                      checked={
                                        section.id === "industry"
                                          ? selectedIndustries.includes(
                                              option.value
                                            )
                                          : selectedTitles.includes(option.value)
                                      }
                                      onChange={() =>
                                        section.id === "industry"
                                          ? handleIndustrySelection(option.value)
                                          : handleTitleSelection(option.value)
                                      }
                                      className="h-4 w-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                                    />
                                    <label
                                      htmlFor={`filter-${section.id}-${optionIdx}`}
                                      className="ml-3 text-sm text-gray-700"
                                    >
                                      {option.label}
                                    </label>
                                  </div>
                                ))}
                              </div>
                            </div>
                          </Disclosure.Panel>
                        </>
                      )}
                    </Disclosure>
                  ))}

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
              {/* </div> */}
            </section>
          </main>
        </div>
      </>
    );
  }