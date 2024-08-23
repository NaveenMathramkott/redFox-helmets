import { useEffect, useState } from "react";
import { useCustomization } from "../context/Customization";
import { configOptions } from "../context/data";

const Configurator = ({ handleCancel, selectedMesh }) => {
  const [showModal, setShowModal] = useState(false);
  const { customMeshId, setCustomMeshId, setCustomSelect, customSelect } =
    useCustomization();
  const [options, setOptions] = useState({});
  const [opt, setOpt] = useState("choose your items");

  useEffect(() => {
    configOptions.forEach((item) => {
      item.data.forEach((innerItem) => {
        if (innerItem.meshName.includes(selectedMesh.id)) {
          customSelect.map((data) => {
            if (data.type === item.type) {
              setOpt(data.selected);
            }
          });
          setOptions(item);
          return;
        }
      });
    });
  }, [selectedMesh]);

  const handleChange = (newId, itemName) => {
    const newBaseId = newId.split("-")[0];
    setOpt(itemName);
    setCustomSelect((prevCustomSelect) => {
      const existingIndex = prevCustomSelect.findIndex(
        (item) => item.type === options.type
      );

      if (existingIndex !== -1) {
        // If the type already exists, update the selected value
        const updatedSelect = [...prevCustomSelect];
        updatedSelect[existingIndex].selected = itemName;
        return updatedSelect;
      } else {
        // If the type doesn't exist, add the new type and selected value
        return [
          ...prevCustomSelect,
          { type: options.type, selected: itemName },
        ];
      }
    });
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
  return (
    <div>
      <div className="configurator">
        <h1 className="title">Choose {options.type}</h1>
        <div className="config-section">
          <label htmlFor="product-dropdown" className="label">
            Choose Product
          </label>
          <button
            id="product-dropdown"
            className="dropdown"
            onClick={() => setShowModal(!showModal)}
          >
            {opt}
          </button>
          {showModal && (
            <div className="modal" id="modal">
              <div className="modal-content">
                {options?.data?.map((item, index) => (
                  <ul
                    key={`${index}-01`}
                    value={item.meshName}
                    onClick={() => handleChange(item.meshName, item.name)}
                  >
                    {item.name}
                  </ul>
                ))}
              </div>
              <button
                className="btn-close-modal"
                onClick={() => {
                  setShowModal(false);
                }}
              >
                Close
              </button>
            </div>
          )}
        </div>

        <div className="config-section btn-section">
          {/* <button
            className="btn-cancel"
            // onClick={handleCancel}
          >
            Cancel
          </button> */}
          <button className="btn-save" onClick={handleCancel}>
            Save
          </button>
        </div>
      </div>
    </div>
  );
};

export default Configurator;
