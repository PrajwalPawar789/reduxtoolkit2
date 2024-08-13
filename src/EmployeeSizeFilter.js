import { Disclosure } from "@headlessui/react";
import { XMarkIcon, PlusIcon, MinusIcon } from "@heroicons/react/20/solid";
import filters from './filters';

const EmployeeSizeFilter = ({ selectedSizes, handleSizeSelection, handleSizeSearchChange, sizeSearchTerm }) => {
  const employeeSizeFilter = filters.find((f) => f.id === "employee");
  const filteredEmployeeSizeOptions = employeeSizeFilter.options.filter((option) =>
    option.label.toLowerCase().includes(sizeSearchTerm)
  );

  return (
    <Disclosure as="div" key="employee" className="border-b border-gray-200 py-4">
      {({ open }) => (
        <>
          <h3 className="flow-root">
            <Disclosure.Button className="py-2 flex justify-between w-full text-left text-sm font-medium text-gray-700 hover:text-gray-900">
              <span>Employee Size</span>
              <span className="ml-6 flex items-center">
                {open ? (
                  <MinusIcon className="h-5 w-5 text-gray-400" aria-hidden="true" />
                ) : (
                  <PlusIcon className="h-5 w-5 text-gray-400" aria-hidden="true" />
                )}
              </span>
            </Disclosure.Button>
          </h3>
          {selectedSizes.length > 0 && (
            <div className="flex flex-wrap gap-2 p-2 mt-2">
              {selectedSizes.map((size) => (
                <span key={size} className="flex items-center gap-2 bg-blue-50 text-blue-800 text-sm px-3 py-1 rounded-full">
                  {size}
                  <XMarkIcon
                    className="cursor-pointer h-4 w-4"
                    onClick={() => handleSizeSelection(size)}
                  />
                </span>
              ))}
            </div>
          )}
          <Disclosure.Panel className="pt-4">
            <div className="pb-2">
              <input
                type="text"
                placeholder="Search employee sizes"
                className="mt-1 block w-full pl-3 pr-10 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                onChange={handleSizeSearchChange}
                value={sizeSearchTerm}
              />
            </div>
            <div className="max-h-60 overflow-y-auto">
              <div className="space-y-2">
                {filteredEmployeeSizeOptions.map((option, optionIdx) => (
                  <div key={option.value} className="flex items-center">
                    <input
                      id={`filter-size-${optionIdx}`}
                      name="size[]"
                      value={option.value}
                      type="checkbox"
                      checked={selectedSizes.includes(option.value)}
                      onChange={() => handleSizeSelection(option.value)}
                      className="h-4 w-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                    />
                    <label htmlFor={`filter-size-${optionIdx}`} className="ml-3 text-sm text-gray-700">
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
  );
};

export default EmployeeSizeFilter;
