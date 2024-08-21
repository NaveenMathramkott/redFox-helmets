import { useEffect, useState } from "react";
import { useCustomization } from "../context/Customization";
import { configOptions } from "../context/data";

const Configurator = ({ handleCancel, selectedMesh }) => {
  const [showModal, setShowModal] = useState(false);
  const { customMeshId, setCustomMeshId } = useCustomization();
  const [options, setOptions] = useState({});
  const [opt, setOpt] = useState("");

  useEffect(() => {
    configOptions.forEach((item) => {
      item.data.forEach((innerItem) => {
        if (innerItem.meshName.includes(selectedMesh.id)) {
          setOptions(item);
          return;
        }
      });
    });
  }, [selectedMesh]);

  const handleChange = (event) => {
    const newId = event.target.value;
    const newBaseId = newId.split("-")[0];
    setOpt(newId);
    const updatedIds = customMeshId.map((id) => {
      const baseId = id.split("-")[0];
      if (baseId === newBaseId) {
        // Replace the similar ID with the new ID
        return newId;
      }
      return id;
    });
    setCustomMeshId(updatedIds);
  };

  useEffect(() => {
    customMeshId?.forEach((item) => {
      options?.data?.forEach((innerItem) => {
        if (item === innerItem.meshName) {
          console.log("customMeshId", item === innerItem.meshName);
          setOpt(innerItem.name);
        }
      });
    });
  }, [customMeshId]);

  return (
    <div>
      <div className="configurator">
        <h1 className="title">Choose item</h1>
        <div className="config-section">
          <label htmlFor="product-dropdown" className="label">
            Choose Product
          </label>
          <select
            id="product-dropdown"
            className="dropdown"
            onChange={handleChange}
            defaultValue={opt}
          >
            {options?.data?.map((item, index) => (
              <option
                key={`${index}-01`}
                value={item.meshName}
                // selected={item.name === opt}
              >
                {item.name}
              </option>
            ))}
          </select>
        </div>
        {/* <div className="config-section">
          <label className="label">Select Color</label>
          <div className="color-selection">
            <div className="color-option color-red" />
            <div className="color-option color-blue" />
            <div className="color-option color-green" />
          </div>
        </div> */}
        <div className="config-section btn-section">
          <button className="btn-configure" onClick={() => setShowModal(true)}>
            Configure
          </button>
          <button className="btn-reset" onClick={handleCancel}>
            Reset
          </button>
        </div>
      </div>
      {/* Modal Popup */}
      {showModal ? (
        <div className="modal" id="modal">
          <div className="modal-content">
            <span className="close-button" id="close-button">
              ×
            </span>
            <h2>Configuration Saved</h2>
            <p>Your product configuration has been saved successfully!</p>
            <button
              className="btn-close-modal"
              onClick={() => {
                setShowModal(false);
                handleCancel();
              }}
            >
              Close
            </button>
          </div>
        </div>
      ) : null}
    </div>
  );
};

export default Configurator;
