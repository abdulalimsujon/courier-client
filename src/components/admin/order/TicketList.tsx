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

const TicketList = () => {
  // Demo ticket data
  const tickets = [
    {
      id: "TCKT001",
      name: "John Doe",
      category: "Billing",
      status: "Open",
      lastActivity: "2025-09-22",
      assignedAgent: "Alice Smith",
      priority: "High",
    },
    {
      id: "TCKT002",
      name: "Jane Smith",
      category: "Technical",
      status: "Pending",
      lastActivity: "2025-09-21",
      assignedAgent: "Bob Johnson",
      priority: "Medium",
    },
    {
      id: "TCKT003",
      name: "Michael Brown",
      category: "Account",
      status: "Resolved",
      lastActivity: "2025-09-20",
      assignedAgent: "Carol White",
      priority: "Low",
    },
    {
      id: "TCKT004",
      name: "Emily Davis",
      category: "Billing",
      status: "Open",
      lastActivity: "2025-09-19",
      assignedAgent: "David Lee",
      priority: "High",
    },
    {
      id: "TCKT005",
      name: "William Johnson",
      category: "Technical",
      status: "Pending",
      lastActivity: "2025-09-18",
      assignedAgent: "Eva Green",
      priority: "Medium",
    },
    {
      id: "TCKT006",
      name: "Olivia Wilson",
      category: "Account",
      status: "Resolved",
      lastActivity: "2025-09-17",
      assignedAgent: "Frank Taylor",
      priority: "Low",
    },
    {
      id: "TCKT007",
      name: "James Taylor",
      category: "Billing",
      status: "Open",
      lastActivity: "2025-09-16",
      assignedAgent: "Grace King",
      priority: "High",
    },
    {
      id: "TCKT008",
      name: "Sophia Martinez",
      category: "Technical",
      status: "Pending",
      lastActivity: "2025-09-15",
      assignedAgent: "Henry Adams",
      priority: "Medium",
    },
    {
      id: "TCKT009",
      name: "Benjamin Anderson",
      category: "Account",
      status: "Resolved",
      lastActivity: "2025-09-14",
      assignedAgent: "Isla Scott",
      priority: "Low",
    },
    {
      id: "TCKT010",
      name: "Mia Thomas",
      category: "Billing",
      status: "Open",
      lastActivity: "2025-09-13",
      assignedAgent: "Jack Brown",
      priority: "High",
    },
  ];

  return (
    <Container>
      <ReusableHeading
        text="All support tickets"
        description="Here you can view and manage all incoming support tickets submitted by customers."
      />

      <div className="w-full my-5">
        <Table>
          <TableHeader className="bg-[#FDFDFD] text-[#717680]">
            <TableRow>
              {[
                "Ticket ID",
                "Name",
                "Category",
                "Status",
                "Last activity",
                "Assig. Agent",
                "Priority",
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
            {tickets.map((ticket, index) => {
              const fields = [
                ticket.id,
                ticket.name,
                ticket.category,
                ticket.status,
                ticket.lastActivity,
                ticket.assignedAgent,
                ticket.priority,
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
      </div>
    </Container>
  );
};

export default TicketList;
