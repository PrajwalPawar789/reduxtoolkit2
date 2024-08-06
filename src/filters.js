// filters.js

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
        { value: "Deputy Director IT Projects Airport Operations", label: "Deputy Director IT Projects Airport Operations" },
        { value: "Team Manager - IT Solution Architect", label: "Team Manager - IT Solution Architect" },
        { value: "Deputy Director IT Enterprise Architecture", label: "Deputy Director IT Enterprise Architecture" },
        { value: "IT Solutions Architect", label: "IT Solutions Architect" },
        { value: "Chief Executive Officer", label: "Chief Executive Officer" },
        { value: "Director, IT - Business Analysis", label: "Director, IT - Business Analysis" },
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
  
  export default filters;
  