"use client";
import { useState, useEffect } from "react";
import Select, { components } from "react-select";
import { TailSpin } from "react-loader-spinner";
import { apiBaseUrl } from "@/app/utils";

const LocationSelect = () => {
  const district = [
    {
      id: 1,
      name: "Chattagram",
      bn_name: "চট্টগ্রাম",
      url: "www.chittagongdiv.gov.bd",
      created_at: null,
      updated_at: null,
    },
    {
      id: 2,
      name: "Rajshahi",
      bn_name: "রাজশাহী",
      url: "www.rajshahidiv.gov.bd",
      created_at: null,
      updated_at: null,
    },
    {
      id: 3,
      name: "Khulna",
      bn_name: "খুলনা",
      url: "www.khulnadiv.gov.bd",
      created_at: null,
      updated_at: null,
    },
    {
      id: 4,
      name: "Barisal",
      bn_name: "বরিশাল",
      url: "www.barisaldiv.gov.bd",
      created_at: null,
      updated_at: null,
    },
    {
      id: 5,
      name: "Sylhet",
      bn_name: "সিলেট",
      url: "www.sylhetdiv.gov.bd",
      created_at: null,
      updated_at: null,
    },
    {
      id: 6,
      name: "Dhaka",
      bn_name: "ঢাকা",
      url: "www.dhakadiv.gov.bd",
      created_at: null,
      updated_at: null,
    },
    {
      id: 7,
      name: "Rangpur",
      bn_name: "রংপুর",
      url: "www.rangpurdiv.gov.bd",
      created_at: null,
      updated_at: null,
    },
    {
      id: 8,
      name: "Mymensingh",
      bn_name: "ময়মনসিংহ",
      url: "www.mymensinghdiv.gov.bd",
      created_at: null,
      updated_at: null,
    },
  ];
  const [options, setOptions] = useState([]);
  const [selectedValues, setSelectedValues] = useState({
    country: null,
    division: null,
    district: null,
  });
  const [step, setStep] = useState("country");
  const [showDropdown, setShowDropdown] = useState(false);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (step === "country") {
      fetchCountries();
    } else if (step === "division" && selectedValues.country) {
      fetchDivisions(selectedValues.country.value);
    } else if (step === "district" && selectedValues.division) {
      fetchDistricts(selectedValues.division.id);
    }
  }, [step, selectedValues]);

  const fetchCountries = async () => {
    setLoading(true);
    try {
      const response = await fetch(`${apiBaseUrl}/get-divisions`); // Replace with your API endpoint
      const data = await response.json();

      setOptions(
        data?.results?.divisions.map((country) => ({
          value: country.id,
          label: country.name,
        }))
      );
    } catch (error) {
      console.error("Error fetching countries:", error);
    } finally {
      setLoading(false);
    }
  };

  const fetchDivisions = async (countryId) => {
    setLoading(true);
    try {
      const response = await fetch(
        `${apiBaseUrl}/get-districts/${countryId}`
      ); // Replace with your API endpoint
      const data = await response.json();
      setOptions(
        data?.results?.districts?.map((division) => ({
          value: division.id,
          label: division.name,
        }))
      );
    } catch (error) {
      console.error("Error fetching divisions:", error);
    } finally {
      setLoading(false);
    }
  };

  const fetchDistricts = async (divisionId) => {
    setLoading(true);
    try {
      const data = district;
      setOptions(
        data.map((district) => ({
          value: district.id,
          label: district.name,
        }))
      );
    } catch (error) {
      console.error("Error fetching districts:", error);
    } finally {
      setLoading(false);
    }
  };

  const handleChange = (selectedOption) => {
    if (step === "country") {
      setSelectedValues({
        country: selectedOption,
        division: null,
        district: null,
      });
      setStep("division");
    } else if (step === "division") {
      setSelectedValues((prev) => ({
        ...prev,
        division: selectedOption,
        district: null,
      }));
      setStep("district");
    } else if (step === "district") {
      setSelectedValues((prev) => ({ ...prev, district: selectedOption }));
      setShowDropdown(false);
    }
  };

  const handleStartSelect = () => {
    setShowDropdown(true);
    setStep("country");
    setSelectedValues({ country: null, division: null, district: null });
  };

  const DropdownIndicator = (props) => (
    <components.DropdownIndicator {...props}>
      {loading && <TailSpin color="#00BFFF" height={20} width={20} />}
    </components.DropdownIndicator>
  );

  const NoOptionsMessage = (props) => (
    <components.NoOptionsMessage {...props}>
      {loading ? (
        <TailSpin color="#00BFFF" height={20} width={20} />
      ) : (
        "No options"
      )}
    </components.NoOptionsMessage>
  );

  return (
    <div>
      <h2>
        {selectedValues.country ? selectedValues.country.label : ""}
        {selectedValues.division ? ` > ${selectedValues.division.label}` : ""}
        {selectedValues.district ? ` > ${selectedValues.district.label}` : ""}
      </h2>
      <button onClick={handleStartSelect}>Start Select</button>
      {showDropdown && (
        <div>
          <label htmlFor="location">Select Location</label>
          <Select
            id="location"
            options={loading ? [] : options}
            value={selectedValues[step]}
            onChange={handleChange}
            placeholder={`Select ${
              step.charAt(0).toUpperCase() + step.slice(1)
            }`}
            isClearable
            menuIsOpen={true}
            components={{ DropdownIndicator, NoOptionsMessage }}
          />
        </div>
      )}
    </div>
  );
};

export default LocationSelect;
