// filters.js

const filters = [
    {
    id: "employee",
    name: "Employee",
    options: 
      [
        { value: "0-1 employees", label: "0-1" },
        { value: "2-10 employees", label: "2-10" },
        { value: "11-50 employees", label: "11-50" },
        { value: "51-200 employees", label: "51-200" },
        { value: "201-500 employees", label: "201-500" },
        { value: "501-1,000 employees", label: "501-1,000" },
        { value: "1,001-5,000 employees", label: "1,001-5,000" },
        { value: "5,001-10,000 employees", label: "5,001-10,000" },
        { value: "10,001+ employees", label: "10,001+" }
      ],
    },
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
        { value: "Health, Wellness & Fitness", label: "Health, Wellness & Fitness" },
        { value: "Information Technology & Services", label: "Information Technology & Services" },
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
    {
      id: "level",
      name: "Job Level",
      options: [
        // Cities could be dynamically loaded based on the selected state
        { value: "Manager", label: "Manager" },
        { value: "Board Memebers and Owners", label: "Board Memebers and Owners" },
        { value: "Individual Contributor", label: "Individual Contributor" },
        { value: "VP Level", label: "VP Level" },
        { value: "Director", label: "Director" },
        { value: "C Level", label: "C Level" },
        { value: "Supervisor", label: "Supervisor" },

      ],
    },
    {
      id: "function",
      name: "Job Function",
      options: [
        // Cities could be dynamically loaded based on the selected state
        { value: "IT", label: "IT" },
        { value: "Marketing", label: "Marketing" },
        { value: "Medical And Health", label: "Medical And Health" },
        { value: "Education and Library", label: "Education and Library" },
        { value: "Finance", label: "Finance" },
        { value: "Operations", label: "Operations" },
        { value: "Engineering and R&D", label: "Engineering and R&D" },
        { value: "Sales", label: "Sales" },
        { value: "HR", label: "HR" },
        { value: "Customer Service", label: "Customer Service" },
        { value: "Legal", label: "Legal" },
        { value: "Others", label: "Others" },

        // Add more cities as needed
      ],
    },
    
  ];
  
  export default filters;
  