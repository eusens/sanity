import React from 'react';
import Image from 'next/image';

const AboutUs = () => {
  return (
    <main className="px-8 py-10 max-w-screen-lg mx-auto">
      <h1 className="text-4xl font-bold mb-6 text-center">About Us</h1>
      <div className="relative w-full h-56 sm:h-72 lg:h-80 mb-6">
         <Image
           src="https://sanityimages.s3.us-west-2.amazonaws.com/20250618.webp"
           alt="Industrial automation showcase"
           fill
           className="object-cover rounded-lg"
           priority
         />
       </div>

      <section className="space-y-6">
        <p>
          Our Company has been a reliable retailer specializing in well-known industrial automation products for over a decade. Headquartered in Guangzhou, the capital city of  province, we have expanded with branches and a warehouse in Dongguan city, Guangdong province, to ensure convenient and efficient delivery to our clients.
        </p>

        <p>
          We primarily deal with advanced automation products that are 100% original and new. Our product range includes Programmable Logic Controllers (PLCs), Human Machine Interfaces (HMIs), Servo Motors, Sensors, Encoders, Inverters, Servo Drives, Batteries, Cables, and Relay Switches from leading brands such as Mitsubishi, Omron, Proface, Fuji, Siemens, and more.
        </p>

        <p>
          We take full responsibility for all of our products and maintain stringent quality control. Our dedication to customer satisfaction extends beyond just selling products; we focus on providing excellent before and after-sales service, consultations, quality guarantees, and training based on customer needs.
        </p>

        <p>
          We understand the demands of the automation market, which is why we offer competitive prices for high-quality automation parts. Our product range includes:
        </p>

        <div className="flex flex-col md:flex-row items-start gap-6 mt-4">
          {/* Left side: product list */}
          <ul className="list-disc pl-5 space-y-1 flex-1">
            <li><strong>Omron:</strong> CJ1W, CJ2M, CP1H, CJ1G, CS1G, CS1H, E2E, E3T, XW2Z, NB10, NB7W...</li>
            <li><strong>Proface HMI:</strong> PFXGP4301, PFXGP4401, PFXGP4601, PFXGP4501...</li>
            <li><strong>Fuji:</strong> V9, TS Series HMI, RY, GY Servo, FRN Inverter...</li>
            <li><strong>Mitsubishi:</strong> Q, A, FX, GT, GS, MR, HG, HF, FR...</li>
          </ul>

          {/* Right side: image */}
          <div className="relative w-full md:w-1/2 h-48 md:h-64">
            <Image
              src="https://sanityimages.s3.us-west-2.amazonaws.com/20220329115429_57587.jpg"
              alt="Automation equipment"
              fill
              className="object-cover rounded-lg"
            />
          </div>
        </div>

        <p>
          Our products are widely used in industries such as motors, fans, automobiles, internal combustion engines, aerospace, textile machinery, metallurgy, and more.
        </p>

        <p>
          We supply companies worldwide with hard-to-find automation spare parts, including PLCs, operator panels, servo drives, servo motors, inverters, other electrical devices, and pneumatic parts.
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-4">Our Main Focus Areas</h2>
        {/* Main Focus Areas + Image side by side */}
        <div className="flex flex-col md:flex-row items-start gap-6 mt-8">
          {/* Left side: industry list */}
          <ul className="list-disc pl-5 space-y-1 flex-1">
            <li>Cement Industry</li>
            <li>Environment and Recycling</li>
            <li>Paper Industry</li>
            <li>Ship and Yacht Building</li>
            <li>Oil &amp; Gas Offshore</li>
            <li>Refining and Petrochemical</li>
            <li>Energy</li>
            <li>Building Materials</li>
            <li>Water and Wastewater</li>
            <li>Chemical</li>
            <li>Food Industry</li>
          </ul>

          {/* Right side: image */}
          <div className="relative w-full md:w-1/2 h-48 md:h-64">
            <Image
              src="https://sanityimages.s3.us-west-2.amazonaws.com/20220329114834_37539.jpg"
              alt="Industrial sectors collage"
              fill
              className="object-cover rounded-lg"
            />
          </div>
        </div>


        <p className="mt-6">
          Our goal is to help manufacturers and warehouse operators across a wide range of industries thrive in highly competitive, fast-paced supply chains. We achieve this by providing tailored automation solutions that meet each client&apos;s unique needs.
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-4">Our Mission</h2>
        <blockquote className="italic text-lg">
          “We exist to apply technical solutions to human challenges in our fields of endeavor towards an efficient and safe world.”
        </blockquote>

        <h2 className="text-2xl font-semibold mt-8 mb-4">Our Vision</h2>
        <blockquote className="italic text-lg">
          “To be our client&apos;s best partner in providing systems that work.”
        </blockquote>
      </section>
    </main>
  );
};

export default AboutUs;
