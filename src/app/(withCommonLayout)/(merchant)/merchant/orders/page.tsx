"use client";

import React, { useEffect, useState, useRef } from "react";
import Container from "@/ReusebaleComponent/Container";
import SectionHeading from "@/ReusebaleComponent/SectionHeading";
import { getAllCustomers } from "@/services/customers";

const Page = () => {
  const [customers, setCustomers] = useState([]);
  const [selectedCustomer, setSelectedCustomer] = useState(null);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [modalOpen, setModalOpen] = useState(false);

  // Add customer form state
  const [newCustomer, setNewCustomer] = useState({
    fullName: "",
    email: "",
    phone: "",
    postalCode: "",
    shippingAddress: "",
    billingAddress: "",
  });

  const dropdownRef = useRef(null);

  useEffect(() => {
    async function fetchCustomers() {
      try {
        const result = await getAllCustomers();
        setCustomers(result.data || []);
      } catch (error) {
        console.error("Failed to fetch customers", error);
      }
    }
    fetchCustomers();
  }, []);

  // Close dropdown if clicked outside
  useEffect(() => {
    function handleClickOutside(event) {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target)
      ) {
        setDropdownOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const filteredCustomers = customers.filter((customer) =>
    customer.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // Handle input change in add customer modal
  function handleNewCustomerChange(e) {
    const { name, value } = e.target;
    setNewCustomer((prev) => ({
      ...prev,
      [name]: value,
    }));
  }

  // Handle add customer save
  function handleSaveCustomer() {
    // Simple validation example
    if (!newCustomer.fullName.trim()) {
      alert("Full name is required");
      return;
    }

    // Create new customer object
    const newCust = {
      id: `CUST${(customers.length + 1).toString().padStart(3, "0")}`, // Example ID generator
      name: newCustomer.fullName,
      email: newCustomer.email,
      phone: newCustomer.phone,
      postalCode: newCustomer.postalCode,
      shippingAddress: newCustomer.shippingAddress,
      billingAddress: newCustomer.billingAddress,
    };

    // Add new customer to list & select it
    setCustomers((prev) => [...prev, newCust]);
    setSelectedCustomer(newCust);
    setModalOpen(false);
    setDropdownOpen(false);
    setNewCustomer({
      fullName: "",
      email: "",
      phone: "",
      postalCode: "",
      shippingAddress: "",
      billingAddress: "",
    });
  }

  return (
    <div>
      <Container>
        <SectionHeading
          title="Add parcel"
          textColor="#194185"
          description="Fill in the details below to start your delivery. We’ll take care of the rest."
        />
        <div className="w-full max-w-[380px] lg:w-[380px] px-2 h-[56px] flex gap-[24px] opacity-100">
          <div className="bg-[#EF6820] w-[181px] h-[56px] flex items-center justify-center rounded-[8px] text-white font-medium">
            Regular
          </div>

          <div className="bg-white w-[180px] h-[56px] flex items-center justify-center rounded-[8px] border border-[#B2DDFF] text-[#344054] font-medium">
            Express
          </div>
        </div>

        <Container>
          <div className="w-full max-w-[792px] lg:max-w-[792px] text-[#717680] rotate-0 opacity-100 flex flex-col gap-[16px] p-4">
            <input
              className="bg-white w-full p-[16px] h-[56px] rounded-[8px] border border-[#B2DDFF] pt-[8px] pr-[24px] pb-[8px] pl-[24px] gap-[16px] rotate-0 opacity-100"
              placeholder="Parcel Name"
              type="text"
            />
            <input
              className="bg-white w-full p-[16px] h-[56px] rounded-[8px] border border-[#B2DDFF] pt-[8px] pr-[24px] pb-[8px] pl-[24px] gap-[16px] rotate-0 opacity-100"
              placeholder="Parcel Weight"
              type="text"
            />
            <textarea
              rows={5}
              cols={20}
              className="bg-white w-full h-[113px] rounded-[8px] pt-[8px] pr-[24px] pb-[8px] pl-[24px] gap-[16px] rotate-0 opacity-100 border border-[#B2DDFF]"
              placeholder="Description"
            />
            <input
              className="bg-white w-full p-[16px] h-[56px] rounded-[8px] border border-[#B2DDFF] pt-[8px] pr-[24px] pb-[8px] pl-[24px] gap-[16px] rotate-0 opacity-100"
              placeholder="(Invoice If any)"
              type="text"
            />
            <input
              className="bg-white w-full p-[16px] h-[56px] rounded-[8px] border border-[#B2DDFF] pt-[8px] pr-[24px] pb-[8px] pl-[24px] gap-[16px] rotate-0 opacity-100"
              placeholder="Notes"
              type="text"
            />

            <select className="bg-white p-[16px] h-[56px] rounded-[8px] border border-[#B2DDFF] pt-[8px] pr-[24px] pb-[8px] pl-[24px] gap-[16px] rotate-0 opacity-100">
              <option value="">Select your Address</option>
              <option value="invoice1">Invoice 1</option>
              <option value="invoice2">Invoice 2</option>
            </select>

            {/* CUSTOM DROPDOWN FOR CUSTOMER SELECTION */}
            <div className="relative" ref={dropdownRef}>
              <label className="block mb-2 text-[#717680] font-medium">
                Select your Customer
              </label>
              <button
                type="button"
                onClick={() => setDropdownOpen((open) => !open)}
                className="w-full bg-white p-[16px] h-[56px] rounded-[8px] border border-[#B2DDFF] text-left flex justify-between items-center"
                aria-haspopup="listbox"
                aria-expanded={dropdownOpen}
              >
                <span>
                  {selectedCustomer
                    ? `${selectedCustomer.name} (ID: ${selectedCustomer.id})`
                    : "Select your Customer"}
                </span>
                <svg
                  className={`w-5 h-5 ml-2 transition-transform ${
                    dropdownOpen ? "rotate-180" : ""
                  }`}
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M19 9l-7 7-7-7"
                  ></path>
                </svg>
              </button>

              {dropdownOpen && (
                <div className="absolute z-20 mt-1 w-full bg-white border border-[#B2DDFF] rounded-[8px] shadow-lg max-h-60 overflow-auto">
                  <div className="flex p-3 border-b border-gray-200">
                    <input
                      type="text"
                      placeholder="Search"
                      className="flex-grow p-2 border border-gray-300 rounded-l"
                      value={searchTerm}
                      onChange={(e) => setSearchTerm(e.target.value)}
                    />
                    <button
                      type="button"
                      className="bg-[#EF6820] text-white px-3 py-2 rounded-r ml-2"
                      onClick={() => setModalOpen(true)}
                    >
                      Add customer
                    </button>
                  </div>
                  <ul
                    tabIndex={-1}
                    role="listbox"
                    aria-activedescendant={
                      selectedCustomer ? selectedCustomer.id : undefined
                    }
                    className="max-h-56 overflow-auto"
                  >
                    {filteredCustomers.length === 0 && (
                      <li className="p-3 text-gray-500">No customers found</li>
                    )}
                    {filteredCustomers.map((customer) => (
                      <li
                        key={customer.id}
                        role="option"
                        aria-selected={
                          selectedCustomer?.id === customer.id ? "true" : "false"
                        }
                        onClick={() => {
                          setSelectedCustomer(customer);
                          setDropdownOpen(false);
                          setSearchTerm("");
                        }}
                        className={`cursor-pointer flex justify-between px-4 py-3 hover:bg-gray-100 ${
                          selectedCustomer?.id === customer.id
                            ? "bg-[#EF6820] text-white"
                            : ""
                        }`}
                      >
                        <span>{customer.name}</span>
                        <span>ID: {customer.id}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>

            {/* Modal for Add Customer */}
            {modalOpen && (
              <div
                className="fixed inset-0 bg-[#FFFFFF] bg-opacity-50 flex items-center justify-center z-50"
                role="dialog"
                aria-modal="true"
                aria-labelledby="addCustomerTitle"
              >
                <div className="bg-white rounded-lg w-full max-w-md p-6 relative">
                  <h2
                    id="addCustomerTitle"
                    className="text-xl font-semibold mb-4 text-[#194185]"
                  >
                    Add customer
                  </h2>
                  <p className="text-sm text-gray-500 mb-6">
                    Customer Details Section
                  </p>

                  <input
                    type="text"
                    name="fullName"
                    placeholder="Full name"
                    className="w-full mb-3 p-3 border border-[#B2DDFF] rounded"
                    value={newCustomer.fullName}
                    onChange={handleNewCustomerChange}
                  />
                  <input
                    type="email"
                    name="email"
                    placeholder="Email address"
                    className="w-full mb-3 p-3 border border-[#B2DDFF] rounded"
                    value={newCustomer.email}
                    onChange={handleNewCustomerChange}
                  />
                  <input
                    type="tel"
                    name="phone"
                    placeholder="Phone number"
                    className="w-full mb-3 p-3 border border-[#B2DDFF] rounded"
                    value={newCustomer.phone}
                    onChange={handleNewCustomerChange}
                  />
                  <input
                    type="text"
                    name="postalCode"
                    placeholder="Postal code"
                    className="w-full mb-3 p-3 border border-[#B2DDFF] rounded"
                    value={newCustomer.postalCode}
                    onChange={handleNewCustomerChange}
                  />
                  <textarea
                    name="shippingAddress"
                    placeholder="Shipping address"
                    className="w-full mb-3 p-3 border border-[#B2DDFF] rounded resize-none"
                    rows={2}
                    value={newCustomer.shippingAddress}
                    onChange={handleNewCustomerChange}
                  />
                  <textarea
                    name="billingAddress"
                    placeholder="Billing address"
                    className="w-full mb-6 p-3 border border-[#B2DDFF] rounded resize-none"
                    rows={2}
                    value={newCustomer.billingAddress}
                    onChange={handleNewCustomerChange}
                  />

                  <div className="flex justify-end gap-4">
                    <button
                      type="button"
                      onClick={() => setModalOpen(false)}
                      className="border border-[#EF6820] text-[#EF6820] px-4 py-2 rounded hover:bg-[#ef6820]/10 transition"
                    >
                      Cancel
                    </button>
                    <button
                      type="button"
                      onClick={handleSaveCustomer}
                      className="bg-[#EF6820] text-white px-4 py-2 rounded hover:bg-[#d95f00] transition"
                    >
                      Save changes
                    </button>
                  </div>

                  <button
                    type="button"
                    aria-label="Close modal"
                    onClick={() => setModalOpen(false)}
                    className="absolute top-3 right-3 text-gray-400 hover:text-gray-600"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth="2"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M6 18L18 6M6 6l12 12"
                      />
                    </svg>
                  </button>
                </div>
              </div>
            )}

            <div className="flex items-center gap-4">
              <label className="w-[100px]">Height (cm)</label>
              <input
                className="flex-grow bg-white p-[16px] h-[56px] rounded-[8px] border border-[#B2DDFF] pt-[8px] pr-[24px] pb-[8px] pl-[24px]"
                type="number"
                placeholder="Height"
                min="0"
              />
            </div>

            <div className="flex items-center gap-4">
              <label className="w-[100px]">Weight (kg)</label>
              <input
                className="flex-grow bg-white p-[16px] h-[56px] rounded-[8px] border border-[#B2DDFF] pt-[8px] pr-[24px] pb-[8px] pl-[24px]"
                type="number"
                placeholder="Weight"
                min="0"
              />
            </div>

            <div className="flex items-center gap-4">
              <label className="w-[100px]">Length (cm)</label>
              <input
                className="flex-grow bg-white p-[16px] h-[56px] rounded-[8px] border border-[#B2DDFF] pt-[8px] pr-[24px] pb-[8px] pl-[24px]"
                type="number"
                placeholder="Length"
                min="0"
              />
            </div>

            <button
              className="bg-[#EF6820] text-white w-full h-[56px] rounded-[8px] 
                 pt-[16px] pr-[120px] pb-[16px] pl-[120px] gap-[10px] 
                 opacity-100 transition"
            >
              Next
            </button>
          </div>
        </Container>
      </Container>
    </div>
  );
};

export default Page;
