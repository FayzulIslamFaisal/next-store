import Image from "next/image";
import Link from "next/link";
import { useState, useEffect, useRef } from "react";
import Select, { components } from "react-select";
import { RotatingLines, TailSpin } from "react-loader-spinner";
import { IoSearchOutline } from "react-icons/io5";
import DeliveryAddress from "./DeliveryAddress";
const ProductDeliveryDetail = ({ productInfo }) => {
  const [locationPopUp, setLocationPopUp] = useState(false);
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
  const [selectedLocation, setSelectedLocation] = useState(
    typeof window !== "undefined"
      ? localStorage.getItem("shippingLocation") ||
          productInfo?.shipping_address
      : productInfo?.shipping_address
  );
  const [shippingAddress, setShippingAddress] = useState(null);
  const selectRef = useRef(null);
  useEffect(() => {
    if (step === "country") {
      fetchCountries();
    } else if (step === "division" && selectedValues.country) {
      fetchDivisions(selectedValues.country.value);
    } else if (step === "district" && selectedValues.division) {
      fetchDistricts(selectedValues.division.id);
    }
  }, [step, selectedValues]);
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (selectRef.current && !selectRef.current.contains(event.target)) {
        setShowDropdown(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const fetchCountries = async () => {
    try {
      setLoading(true);
      const response = await fetch("https://v3.nagadhat.com/api/get-divisions"); // Replace with your API endpoint
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
        `https://v3.nagadhat.com/api/get-districts/${countryId}`
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
      <IoSearchOutline label="Emoji" />
    </components.DropdownIndicator>
  );
  const NoOptionsMessage = (props) => (
    <components.NoOptionsMessage {...props}>
      {loading ? (
        <div className="locationLoader">
          <RotatingLines
            visible={true}
            height="50"
            width="50"
            color="red"
            strokeColor="#aea8ab"
            strokeWidth="5"
            animationDuration="0.75"
            ariaLabel="rotating-lines-loading"
            wrapperStyle={{}}
            menuIsOpen={true}
            wrapperClass=""
          />
        </div>
      ) : (
        "No options"
      )}
    </components.NoOptionsMessage>
  );

  useEffect(() => {
    selectedValues.country && selectedValues.division && selectedValues.district
      ? setSelectedLocation(
          `${selectedValues.country.label}, ${selectedValues.division.label} - ${selectedValues.district.label}`
        )
      : setSelectedLocation(productInfo?.shipping_address);
  }, [selectedValues]);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const savedAddress = localStorage.getItem("shippingLocation");
      setShippingAddress(savedAddress);
    }
  }, []);

  // Update localStorage whenever selectedLocation changes
  useEffect(() => {
    if (selectedLocation) {
      localStorage.setItem("shippingLocation", selectedLocation);
      setShippingAddress(selectedLocation); // Sync shippingAddress state with selectedLocation
    }
  }, [selectedLocation]);

  return (
    <div className="product-details-delivery-area">
      <div className="product-details-delivery-bg position-relative">
        <div className="product-delivery-top-title d-flex align-items-center justify-content-between">
          <h2>shipping address</h2>
          <div className="product-delivery-top-img">
            <Image
              className="img-fluid"
              src="/images/delivery.svg"
              alt="delivery image"
              fill={true}
            />
          </div>
        </div>
        <div className="product-delivery-address-area d-flex justify-content-between ">
          <div className="product-delivery-address-inner d-flex">
            <div className="product-delivery-address-icon sidebar-common-img-size">
              <Image
                className="img-fluid"
                src="/images/location-black-img.svg"
                alt="location image"
                fill={true}
              />
            </div>
            <p>{shippingAddress ? shippingAddress : "No Address Available"}</p>
          </div>
          <div className="product-delivery-address-inner">
            <Link
              href="#"
              className="custom-text-link"
              onClick={handleStartSelect}
            >
              Change
            </Link>
          </div>
        </div>
        <div ref={selectRef} className="shippingAddressShowsOption">
          {
            <div>
              {showDropdown && (
                <div className="drop-down">
                  <label htmlFor="location">
                    {selectedValues.country ? (
                      <p>
                        {selectedValues.country
                          ? selectedValues.country.label
                          : ""}
                        {selectedValues.division
                          ? ` > ${selectedValues.division.label}`
                          : ""}
                        {selectedValues.district
                          ? ` > <>
                          ${selectedValues.district.label}
                         
                          </>`
                          : ""}
                      </p>
                    ) : (
                      "Select Location"
                    )}
                  </label>
                  <Select
                    id="location"
                    className="bg-light"
                    options={loading ? [] : options}
                    value={selectedValues[step]}
                    onChange={handleChange}
                    placeholder={`Select ${
                      step.charAt(0).toUpperCase() + step.slice(1)
                    }`}
                    isClearable
                    isSearchable={false}
                    menuIsOpen={true}
                    components={{
                      DropdownIndicator,
                      NoOptionsMessage,
                    }}
                  />
                </div>
              )}
            </div>
          }
        </div>
        <div className="product-free-delivery-area">
          <div className="product-delivery-top-title d-flex align-items-center justify-content-between">
            <h2>delivery charge</h2>
            <div className="product-delivery-top-img">
              <Image
                className="img-fluid"
                src="/images/delivery.svg"
                alt="delivery image"
                fill={true}
              />
            </div>
          </div>
          <div className="product-free-delivery-top d-flex justify-content-between flex-column">
            <div className="product-free-delivery-info d-flex align-items-center">
              <div className="product-free-delivery-info-img sidebar-common-img-size">
                <Image
                  className="img-fluid"
                  src="/images/free-delivery.svg"
                  fill={true}
                  alt="free-delivery"
                />
              </div>
              <h5>Delivery</h5>
              {/* <p>12 Apr - 19 Apr</p> */}
            </div>
            <div className="product-free-delivery-info ">
              <h6 className="custom-text-link">Free</h6>
            </div>
          </div>
          <div className="product-free-delivery-end-time">
            {/* <p>12 - 19 day(s)</p>
                        <div className="product-free-delivery-textarea">
                            <textarea className="form-control" value="Enjoy free shipping promotion with minimum spend of ৳ 499 from Buy More Save More." />
                        </div> */}
          </div>
        </div>
        <div className="product-details-service-area">
          <div className="product-delivery-top-title d-flex align-items-center justify-content-between">
            <h2>Service</h2>
            <div className="product-delivery-top-img">
              <Image
                className="img-fluid"
                src="/images/delivery.svg"
                alt="delivery image"
                fill={true}
              />
            </div>
          </div>
          <div className="product-free-delivery-two-col-holder">
            <div className="product-free-delivery-two-col d-flex align-items-center">
              <div className="product-free-delivery-two-col-img sidebar-common-img-size">
                <Image
                  className="img-fluid"
                  src="/images/cash-on-delivery.svg"
                  fill={true}
                  alt="cash-on-delivery"
                />
              </div>
              <h5>Cash on Delivery </h5>
            </div>
            <div className="product-free-delivery-status">
              <h5>
                {productInfo?.cash_on_delivery == "on"
                  ? "Available"
                  : "Unavailable"}
              </h5>
            </div>
          </div>

          <div className="product-details-service-info">
            <div className="product-free-delivery-two-col d-flex align-items-center">
              <div className="product-free-delivery-two-col-img sidebar-common-img-size">
                <Image
                  className="img-fluid"
                  src="/images/return.svg"
                  alt="return image"
                  fill={true}
                />
              </div>
              <h5>
                {productInfo?.return_policy !== null
                  ? productInfo?.return_policy
                  : "Return Policy Unavailable"}
              </h5>
            </div>
            <p>Change of mind is not applicable</p>
            <div className="product-free-delivery-two-col d-flex align-items-center">
              <div className="product-free-delivery-two-col-img sidebar-common-img-size">
                <Image
                  className="img-fluid"
                  src="/images/warrant.svg"
                  alt="warrant image"
                  fill={true}
                />
              </div>
              <h5
                type="button"
                data-bs-toggle="modal"
                data-bs-target="#exampleModal50"
                data-bs-whatever="@getbootstrap"
              >
                {/* {productInfo?.warranty !== null
                  ? productInfo?.warranty */}
                Warranty
              </h5>
              <div
                className="modal fade"
                id="exampleModal50"
                tabindex="-1"
                aria-labelledby="exampleModalLabel"
                aria-hidden="true"
              >
                <div className="modal-dialog modal-dialog-centered">
                  <div className="modal-content">
                    <div className="modal-header">
                      <h1 className="modal-title fs-5" id="exampleModalLabel">
                        Product Warranty
                      </h1>
                      <button
                        type="button"
                        className="btn-close"
                        data-bs-dismiss="modal"
                        aria-label="Close"
                      ></button>
                    </div>
                    <div className="modal-body">
                      <form>
                        <div className="mb-3">
                          <label for="message-text" className="col-form-label">
                            {productInfo?.warranty !== null
                              ? productInfo?.warranty
                              : "No Warranty Available"}
                          </label>
                        </div>
                      </form>
                    </div>
                    <div className="modal-footer">
                      <button
                        type="button"
                        data-bs-dismiss="modal"
                        className="bg-primary-color text-light py-2 px-2 border-0 rounded-2"
                      >
                        Close
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="product-details-delivery-bg mt-3">
        <div className="product-details-sold-area bg-white">
          <div className="product-details-sold-top d-flex align-items-center justify-content-between">
            <div className="product-details-sold-item">
              <h5>Sold By</h5>{" "}
            </div>
          </div>
          <p>Imran Fashion House</p>
        </div>
      </div>
    </div>
  );
};

export default ProductDeliveryDetail;
