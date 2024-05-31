import React, { useState } from "react";
import { IAddress } from "src/interfaces/common";
import CreateAddress from "./CreateAddress";
import AddressCard from "@components/common/AddressCard";

const Address = () => {
  const [addresses, setAddresses] = useState<IAddress[]>([]);
  const handleAddAddress = (address: IAddress) => {
    setAddresses((values) => {
      return [...values, address];
    });
  };
  return (
    <div>
      <div className="ml-auto">
        <CreateAddress setAddress={handleAddAddress} />
      </div>
      <div className="mt-4">
        <div className="grid grid-cols-3 gap-4">
          {addresses.map((obj, i) => {
            return <AddressCard address={obj} key={`address-${i}`} />;
          })}
        </div>
      </div>
    </div>
  );
};

export default Address;
