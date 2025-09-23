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

const Customerlist = () => {
  // Sample customer data (10 entries)
  const customers = [
    {
      id: "CUST001",
      name: "John Doe",
      email: "john@example.com",
      phone: "+123456789",
      status: "Active",
      total: 5,
      action: "View",
    },
    {
      id: "CUST002",
      name: "Jane Smith",
      email: "jane@example.com",
      phone: "+987654321",
      status: "Inactive",
      total: 2,
      action: "View",
    },
    {
      id: "CUST003",
      name: "Michael Brown",
      email: "michael@example.com",
      phone: "+1122334455",
      status: "Active",
      total: 8,
      action: "View",
    },
    {
      id: "CUST004",
      name: "Emily Davis",
      email: "emily@example.com",
      phone: "+9988776655",
      status: "Active",
      total: 3,
      action: "View",
    },
    {
      id: "CUST005",
      name: "William Johnson",
      email: "william@example.com",
      phone: "+5566778899",
      status: "Inactive",
      total: 1,
      action: "View",
    },
    {
      id: "CUST006",
      name: "Olivia Wilson",
      email: "olivia@example.com",
      phone: "+4455667788",
      status: "Active",
      total: 6,
      action: "View",
    },
    {
      id: "CUST007",
      name: "James Taylor",
      email: "james@example.com",
      phone: "+2233445566",
      status: "Active",
      total: 4,
      action: "View",
    },
    {
      id: "CUST008",
      name: "Sophia Martinez",
      email: "sophia@example.com",
      phone: "+6677889900",
      status: "Inactive",
      total: 2,
      action: "View",
    },
    {
      id: "CUST009",
      name: "Benjamin Anderson",
      email: "benjamin@example.com",
      phone: "+3344556677",
      status: "Active",
      total: 7,
      action: "View",
    },
    {
      id: "CUST010",
      name: "Mia Thomas",
      email: "mia@example.com",
      phone: "+7788990011",
      status: "Active",
      total: 5,
      action: "View",
    },
  ];

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
            {customers.map((customer, index) => {
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
