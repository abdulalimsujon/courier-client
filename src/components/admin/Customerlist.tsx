import Container from "@/ReusebaleComponent/Container";
import ReusableHeading from "@/ReusebaleComponent/ReusableHeading";
import { HiOutlineDotsVertical } from "react-icons/hi";

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import React from "react";
import { getAllCustomers } from "@/services/customers";

const Customerlist = async() => {
  // Sample customer data (10 entries)


  const customers = await getAllCustomers();



  return (
    <Container>
      <ReusableHeading
        text="Customer list"
        description="Display a list of all customers with relevant details and actions"
      />

      <div className="w-full my-5">
        <Table>
          <TableHeader className="bg-[#FDFDFD] text-[#717680]">
            <TableRow>
              {[
                "ID",
                "Name",
                "Email",
                "Phone",
                "Status",
                "Total Number",
                "Action",
              ].map((header, idx) => (
                <TableHead
                  key={idx}
                  className="font-['Open_Sans'] font-semibold text-[20px] leading-[22px] tracking-[0] text-center"
                >
                  {header}
                </TableHead>
              ))}
            </TableRow>
          </TableHeader>

          <TableBody>
            {customers.data.map((customer, index) => {
              // Array of fields in the order of the table
              const fields = [
                customer.id,
                customer.name,
                customer.email,
                customer.phone,
                customer.status,
                customer.total,
              ];

              return (
                <TableRow key={index}>
                  {fields.map((field, idx) => (
                    <TableCell
                      key={idx}
                      className=" p-[24px] border-b-[#B2DDFF] font-['DM_Sans'] font-normal text-[18px] text-[#717680] text-center"
                    >
                      {field}
                    </TableCell>
                  ))}

                  {/* Action cell */}
                  <TableCell className="flex justify-center items-center text-center cursor-pointer">
                    <HiOutlineDotsVertical size={20} />
                  </TableCell>
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
      </div>
    </Container>
  );
};

export default Customerlist;
