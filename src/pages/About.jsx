import React from 'react';

function About() {
  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <header className="bg-white shadow-md rounded-md p-4 mb-6">
        <h1 className="text-3xl font-bold text-gray-800">About Us</h1>
        <p className="text-gray-600 mt-2">
          Learn more about XYZ Software Solutions and our mission to empower businesses with innovative technology.
        </p>
      </header>

      <main>
        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">Who We Are</h2>
          <p className="text-gray-600 leading-6">
            XYZ Software Solutions is a leading provider of technology-driven solutions, catering to diverse industries 
            worldwide. Our team of experts is passionate about delivering cutting-edge software to meet the unique needs 
            of our clients.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">Our Mission</h2>
          <p className="text-gray-600 leading-6">
            To empower businesses through technology by providing efficient, scalable, and innovative software solutions. 
            Our mission is to drive digital transformation and help our clients stay ahead in an ever-changing world.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">Our Values</h2>
          <ul className="list-disc list-inside text-gray-600 space-y-2">
            <li>Customer Focus: Putting client needs at the forefront of everything we do.</li>
            <li>Innovation: Staying ahead with cutting-edge technology and creativity.</li>
            <li>Integrity: Upholding transparency, honesty, and ethical practices.</li>
            <li>Teamwork: Collaborating effectively to achieve success together.</li>
          </ul>
        </section>
      </main>
    </div>
  );
}

export default About;
