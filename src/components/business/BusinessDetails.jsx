import React, { useState } from 'react';
import ProgressStepper from './ProgressStepper';
import FileUpload from './FileUpload';

const BusinessDetails = () => {
  const [formData, setFormData] = useState({
    legalName: '',
    doingBusinessAs: '',
    companyRegNumber: '',
    randomRegNumber: '',
    website: '',
    industry: '',
    randomDropdown1: '',
    whichDropdown: '',
    randomDropdown2: '',
    accountUsage: '',
    randomCount: '',
    expectedVisits: '',
    purposeForm: '',
    description: '',
    contactEmail: '',
    incorporationCertificate: null,
    companyLogo: null
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleFileUpload = (fieldName, file) => {
    setFormData({ ...formData, [fieldName]: file });
  };

  return (
    <div className="min-h-screen bg-white p-8">
      <h2 className="text-gray-500 mb-4">Multi-Step Process Form Assignment</h2>
      <ProgressStepper />
      
      <div className="max-w-4xl mx-auto">
        <h1 className="text-2xl font-medium mb-2">Tell us more about your business</h1>
        <p className="text-gray-600 mb-8">You help us be the MI if possible – totally crucial for keeping things running, impressing the money folks, and making sure you get top notch service without any start/stop</p>

        <div className="grid grid-cols-2 gap-6">
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium mb-1">Legal Name *</label>
              <input
                type="text"
                name="legalName"
                className="w-full p-2 border rounded"
                placeholder="Legal name"
                onChange={handleChange}
                value={formData.legalName}
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-1">Company Registration Number *</label>
              <input
                type="text"
                name="companyRegNumber"
                className="w-full p-2 border rounded"
                placeholder="Company Registration Number"
                onChange={handleChange}
                value={formData.companyRegNumber}
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-1">Website URL *</label>
              <input
                type="text"
                name="website"
                className="w-full p-2 border rounded focus:border-green-500"
                placeholder="Website URL"
                onChange={handleChange}
                value={formData.website}
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-1">One Random Dropdown? *</label>
              <select
                name="randomDropdown1"
                className="w-full p-2 border rounded"
                onChange={handleChange}
                value={formData.randomDropdown1}
              >
                <option value="">Options no options</option>
                {/* Add options */}
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium mb-1">Another Random Dropdown? *</label>
              <select
                name="randomDropdown2"
                className="w-full p -2 border rounded"
                onChange={handleChange}
                value={formData.randomDropdown2}
              >
                <option value="">Return of the options</option>
                {/* Add options */}
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium mb-1">Random count per month *</label>
              <input
                type="text"
                name="randomCount"
                className="w-full p-2 border rounded"
                placeholder="Put the value get the answer"
                onChange={handleChange}
                value={formData.randomCount}
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-1">Purpose of using fake form *</label>
              <input
                type="text"
                name="purposeForm"
                className="w-full p-2 border rounded"
                placeholder="Purpose of using fake form"
                onChange={handleChange}
                value={formData.purposeForm}
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-1">Contact email *</label>
              <input
                type="email"
                name="contactEmail"
                className="w-full p-2 border rounded"
                placeholder="Contact email"
                onChange={handleChange}
                value={formData.contactEmail}
              />
            </div>
          </div>

          <div className="space-y-4">
            {/* Right column */}
            <div>
              <label className="block text-sm font-medium mb-1">Doing business as *</label>
              <input
                type="text"
                name="doingBusinessAs"
                className="w-full p-2 border rounded"
                placeholder="Doing business as"
                onChange={handleChange}
                value={formData.doingBusinessAs}
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-1">Random Registration Number *</label>
              <input
                type="text"
                name="randomRegNumber"
                className="w-full p-2 border rounded"
                placeholder="Random Registration Number"
                onChange={handleChange}
                value={formData.randomRegNumber}
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-1">Industry Name *</label>
              <select
                name="industry"
                className="w-full p-2 border rounded"
                onChange={handleChange}
                value={formData.industry}
              >
                <option value="">Industry Name</option>
                {/* Add industry options */}
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium mb-1">Which dropdown would you like to select? *</label>
              <select
                name="whichDropdown"
                className="w-full p-2 border rounded"
                onChange={handleChange}
                value={formData.whichDropdown}
              >
                <option value="">More Options</option>
                {/* Add options */}
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium mb-1">Account Usage Intent *</label>
              <select
                name="accountUsage"
                className="w-full p-2 border rounded"
                onChange={handleChange}
                value={formData.accountUsage}
              >
                <option value="">Account Usage Intent</option>
                {/* Add options */}
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium mb-1">Expected trial visits in this page *</label>
              <input
                type="text"
                name="expectedVisits"
                className="w-full p-2 border rounded"
                placeholder="In Number"
                onChange={handleChange}
                value={formData.expectedVisits}
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-1">Ex description toh banta hai *</label>
              <textarea
                name="description"
                className="w-full p-2 border rounded h-24"
                placeholder="Request Description"
                onChange={handleChange}
                value={formData.description}
              />
            </div>
          </div>
        </div>

        {/* File Upload Sections */}
        <div className="mt-8 space-y-6">
          <FileUpload 
            label="Certification of Incorporation *" 
            description="Upload the incorporation certificate"
            onFileUpload={(file) => handleFileUpload('incorporationCertificate', file)}
          />
          
          <FileUpload 
            label="Company Logo *" 
            description="Upload the company logo"
            onFileUpload={(file) => handleFileUpload('companyLogo', file)}
          />
        </div>

        {/* Next Button */}
        <div className="mt-8 flex justify-end">
          <button className="bg-red-500 text-white px-8 py-2 rounded">
            Next
          </button>
        </div>
      </div>
    </div>
  );
};

export default BusinessDetails;