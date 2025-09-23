import SupportSystem from "@/components/admin/order/SupportSystem";
import TicketList from "@/components/admin/order/TicketList";
import TicketOverview from "@/components/admin/order/TicketOverview";
import Container from "@/ReusebaleComponent/Container";
import React from "react";

const page = () => {
  return (
    <div>
      <Container>
        <TicketOverview />
        <TicketList />
        <SupportSystem />
      </Container>
    </div>
  );
};

export default page;
