// ResourceForm.js

import React, { useState } from 'react';
import '../styles/ResourceForm.css'; // You can create this CSS file for styling

const ResourceForm = () => {
  const [resourceForms, setResourceForms] = useState([
    { title: 'Dev', resources: [] },
    { title: 'Pre-Prod', resources: [] },
    { title: 'Prod', resources: [] },
    { title: 'Test', resources: [] },
  ]);

  const handleAddResource = (index) => {
    const updatedResourceForms = [...resourceForms];
    updatedResourceForms[index].resources.push({ resource: '', instance: '' });
    setResourceForms(updatedResourceForms);
  };

  const handleRemoveResource = (envIndex, resIndex) => {
    const updatedResourceForms = [...resourceForms];
    updatedResourceForms[envIndex].resources.splice(resIndex, 1);
    setResourceForms(updatedResourceForms);
  };

  const handleInputChange = (envIndex, resIndex, field, value) => {
    const updatedResourceForms = [...resourceForms];
    updatedResourceForms[envIndex].resources[resIndex][field] = value;
    setResourceForms(updatedResourceForms);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here (e.g., send data to backend)
  };

  return (
    <div className="resource-form-container">
      <h2>TAD</h2><hr></hr>
      <form onSubmit={handleSubmit} className="resource-form">
        {resourceForms.map((environment, envIndex) => (
          <div key={envIndex} className="environment-card">
            <h3>{environment.title}</h3>
            <div className="resource-card-container">
              {environment.resources.map((resource, resIndex) => (
                <div key={resIndex} className="resource-card">
                  <input
                    type="text"
                    placeholder="Resource Name"
                    value={resource.resource}
                    onChange={(e) => handleInputChange(envIndex, resIndex, 'resource', e.target.value)}
                  />
                  <input
                    type="text"
                    placeholder="Number of Instances"
                    value={resource.instance}
                    onChange={(e) => handleInputChange(envIndex, resIndex, 'instance', e.target.value)}
                  />
                  <button type="button" className="remove-button" onClick={() => handleRemoveResource(envIndex, resIndex)}>Remove</button>
                </div>
              ))}
            </div>
            <button type="button" className="add-resource-button" onClick={() => handleAddResource(envIndex)}>Add Resource</button>
          </div>
        ))}
        <button className="add-resource-button" type="submit">Submit</button>
      </form>
    </div>
  );
};

export default ResourceForm;
