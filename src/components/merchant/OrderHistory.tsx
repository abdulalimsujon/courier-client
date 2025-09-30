import React from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { HiOutlineDotsVertical } from "react-icons/hi";
import Container from "@/ReusebaleComponent/Container";
import ReusableHeading from "@/ReusebaleComponent/ReusableHeading";
import SectionHeading from "@/ReusebaleComponent/SectionHeading";

const OrderHistory = () => {
  const customers = [
    {
      id: "CUST001",
      name: "John Doe",
      email: "john@example.com",
      phone: "+123456789",
      status: "Active",
      total: 5,
    },
    {
      id: "CUST002",
      name: "Jane Smith",
      email: "jane@example.com",
      phone: "+987654321",
      status: "Inactive",
      total: 2,
    },
    {
      id: "CUST003",
      name: "Michael Brown",
      email: "michael@example.com",
      phone: "+1122334455",
      status: "Active",
      total: 8,
    },
  ];

  return (
    <div>
      <Container>
        <ReusableHeading text="Order history" />
        <div className="w-full my-5">
          <Table>
            <TableHeader className="bg-[#FDFDFD] text-[#717680]">
              <TableRow>
                {[
                  "Order ID",
                  "Customer Name",
                  "Email",
                  "Phone",
                  "Status",
                  "Total Orders",
                  "Action",
                ].map((header, idx) => (
                  <TableHead
                    key={idx}
                    className="font-['Open_Sans'] font-semibold text-[18px] leading-[22px] text-center"
                  >
                    {header}
                  </TableHead>
                ))}
              </TableRow>
            </TableHeader>

            <TableBody className="text-[#717680]">
              {customers.map((customer, index) => (
                <TableRow key={index}>
                  <TableCell className="p-[24px] border-b border-[#B2DDFF] text-center">
                    {customer.id}
                  </TableCell>
                  <TableCell className="p-[24px] border-b border-[#B2DDFF] text-center">
                    {customer.name}
                  </TableCell>
                  <TableCell className="p-[24px] border-b border-[#B2DDFF] text-center">
                    {customer.email}
                  </TableCell>
                  <TableCell className="p-[24px] border-b border-[#B2DDFF] text-center">
                    {customer.phone}
                  </TableCell>
                  <TableCell
                    className={`p-[24px] border-b border-[#B2DDFF] text-center ${
                      customer.status === "Active"
                        ? "text-green-600"
                        : "text-red-500"
                    }`}
                  >
                    {customer.status}
                  </TableCell>
                  <TableCell className="p-[24px] border-b border-[#B2DDFF] text-center">
                    {customer.total}
                  </TableCell>
                  <TableCell className="p-[24px] border-b border-[#B2DDFF] flex justify-center items-center cursor-pointer">
                    <HiOutlineDotsVertical size={20} />
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </Container>
    </div>
  );
};

export default OrderHistory;
