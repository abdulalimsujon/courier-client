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

const RecentOrder = () => {
  // Demo data matching your headers
  const orders = [
    {
      id: "ORD-001",
      customerName: "John Doe",
      orderDate: "2025-09-22",
      status: "Processing",
      amount: "$120.00",
      payment: "Paid",
      delivery: "Pending",
    },
    {
      id: "ORD-002",
      customerName: "Jane Smith",
      orderDate: "2025-09-21",
      status: "Completed",
      amount: "$85.50",
      payment: "Paid",
      delivery: "Delivered",
    },
    {
      id: "ORD-003",
      customerName: "Michael Johnson",
      orderDate: "2025-09-20",
      status: "Cancelled",
      amount: "$45.00",
      payment: "Refunded",
      delivery: "Cancelled",
    },
  ];

  return (
    <div className="w-full max-w-full lg:mb-[100px]">
      <Container>
        <ReusableHeading
          text="Customer list"
          description="View, manage, and track all customer orders"
        />
        <Table>
          <TableHeader className="bg-[#FDFDFD] text-[#717680]">
            <TableRow>
              {[
                "ID",
                "Customer Name",
                "Order Date",
                "Status",
                "Amount",
                "Payment",
                "Delivery",
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
            {orders.map((order, index) => {
              const fields = [
                order.id,
                order.customerName,
                order.orderDate,
                order.status,
                order.amount,
                order.payment,
                order.delivery,
              ];

              return (
                <TableRow key={index}>
                  {fields.map((field, idx) => (
                    <TableCell
                      key={idx}
                      className="p-[24px] border-b-[#B2DDFF] font-['DM_Sans'] font-normal text-[18px] text-[#717680] text-center"
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
      </Container>
    </div>
  );
};

export default RecentOrder;
