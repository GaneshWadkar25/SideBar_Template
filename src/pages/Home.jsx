import React from 'react';

function Home() {
  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <header className="bg-white shadow-md rounded-md p-4 mb-6">
        <h1 className="text-3xl font-bold text-gray-800">Welcome to XYZ Software Solutions</h1>
        <p className="text-gray-600 mt-2">
          Your trusted partner for innovative and tailored software solutions.
        </p>
      </header>

      <main>
        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">Our Key Offerings</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Card 1 */}
            <div className="bg-white shadow-md rounded-md p-4 hover:shadow-lg transition-all">
              <h3 className="text-xl font-semibold text-gray-800">Web Development</h3>
              <p className="text-gray-600 mt-2">
                Build responsive and scalable web applications for your business needs.
              </p>
            </div>
            {/* Card 2 */}
            <div className="bg-white shadow-md rounded-md p-4 hover:shadow-lg transition-all">
              <h3 className="text-xl font-semibold text-gray-800">Mobile App Development</h3>
              <p className="text-gray-600 mt-2">
                Create intuitive mobile applications to enhance customer engagement.
              </p>
            </div>
            {/* Card 3 */}
            <div className="bg-white shadow-md rounded-md p-4 hover:shadow-lg transition-all">
              <h3 className="text-xl font-semibold text-gray-800">AI/ML Solutions</h3>
              <p className="text-gray-600 mt-2">
                Leverage the power of AI/ML to automate processes and gain insights.
              </p>
            </div>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">Why Choose Us?</h2>
          <ul className="list-disc list-inside text-gray-600 space-y-2">
            <li>Experienced professionals dedicated to delivering excellence.</li>
            <li>Customized solutions tailored to your specific needs.</li>
            <li>Comprehensive support and maintenance services.</li>
            <li>Cutting-edge technology to keep you ahead of the competition.</li>
          </ul>
        </section>
      </main>
    </div>
  );
}

export default Home;
