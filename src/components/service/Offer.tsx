/* eslint-disable @typescript-eslint/no-explicit-any */
import React from "react";
import {
  Clock,
  MapPin,
  Package,
  Users,
  Calendar,
  Truck,
  Building2,
  BarChart3,
} from "lucide-react";
import Container from "@/ReusebaleComponent/Container";

const services = [
  {
    id: 1,
    title: "Same-Day Delivery",
    description:
      "Need a package delivered urgently? With our same-day delivery service, we guarantee that your parcels will be delivered to any Brisbane address within the same day. From important documents to small packages, we handle all deliveries with reliability and speed.",
    features: [
      { icon: Clock, text: "Fast and reliable delivery service in Brisbane" },
      {
        icon: MapPin,
        text: "Real-time tracking so you know when to expect your delivery",
      },
      { icon: Package, text: "Available for both individuals and businesses" },
    ],
    highlight: true,
  },
  {
    id: 2,
    title: "Scheduled Deliveries",
    description:
      "Plan your deliveries ahead of time with our scheduled delivery service. Whether it's for a specific date or a recurring need, we'll ensure your package reaches its destination on time, exactly when you need it.",
    features: [
      {
        icon: Calendar,
        text: "Schedule deliveries in advance for specific dates",
      },
      {
        icon: Users,
        text: "Flexible timings that suit your business or personal needs",
      },
      {
        icon: Truck,
        text: "Customized service based on the volume of deliveries",
      },
    ],
  },
  {
    id: 3,
    title: "Bulk and Business Deliveries",
    description:
      "We offer customized delivery solutions for businesses, from bulk item shipments to regular corporate deliveries. Our business delivery service is designed to meet the specific needs of your organization, ensuring you can count on us for efficient and timely deliveries.",
    features: [
      {
        icon: Building2,
        text: "Bulk deliveries for corporate clients and events",
      },
      { icon: BarChart3, text: "Regular route management for businesses" },
      {
        icon: Package,
        text: "Dedicated account manager for large-scale businesses",
      },
      {
        icon: Truck,
        text: "Integration with logistics software for streamlined operations",
      },
    ],
  },
];

const WhatWeOffer = () => {
  return (
    <div className="">
      <Container>
        <div className="mb-8">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            What We Offer
          </h2>
          <p className="text-lg text-gray-600 leading-relaxed">
            We are dedicated to offering fast, reliable, and affordable courier
            services within Brisbane. Whether you&apos;re an individual needing
            a quick delivery or a business requiring frequent shipments, we
            tailor our services to meet your specific needs.
          </p>
        </div>

        {/* Hero Image */}
        <div className="relative rounded-lg overflow-hidden shadow-lg mb-8">
          <img
            src="https://images.pexels.com/photos/4391470/pexels-photo-4391470.jpeg?auto=compress&cs=tinysrgb&w=1200&h=600&fit=crop"
            alt="Delivery van with worker loading packages"
            className="w-full h-64 object-cover"
          />
          <div className="absolute top-4 left-4 bg-orange-500 text-white px-3 py-1 rounded text-sm font-medium">
            From Urgent Deliveries to Bulk Shipments – We&apos;ve Got You
            Covered
          </div>
        </div>
      </Container>

      <div className="py-16 bg-gray-50">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            {/* Left side - Header and first service */}
            <div>
              {/* First service - highlighted */}
              <ServiceCard service={services[0]} />
            </div>

            {/* Right side - Other services */}
            <div className="space-y-8">
              {services.slice(1).map((service) => (
                <ServiceCard key={service.id} service={service} />
              ))}
            </div>
          </div>
        </Container>
      </div>
    </div>
  );
};

const ServiceCard = ({ service }: any) => {
  return (
    <div
      className={`bg-white rounded-lg p-6 shadow-md ${
        service.highlight ? "border-l-4 border-orange-500" : ""
      }`}
    >
      <div className="flex items-start gap-3 mb-4">
        <div className="bg-orange-100 p-2 rounded-lg">
          <span className="text-orange-600 font-bold text-lg">
            {service.id}
          </span>
        </div>
        <h3 className="text-xl font-bold text-gray-900 mt-1">
          {service.title}
        </h3>
      </div>

      <p className="text-gray-600 mb-6 leading-relaxed">
        {service.description}
      </p>
    </div>
  );
};

export default WhatWeOffer;
