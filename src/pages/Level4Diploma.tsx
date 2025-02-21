import React from "react";

function Level4Diploma() {
  return (
    <div className="bg-gray-100 min-h-screen">
      {/* Hero Section with Background */}
      <section
        className="relative bg-cover bg-center py-20"
        style={{
          backgroundImage: "url('https://source.unsplash.com/1600x900/?business,corporate')",
        }}
      >
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="relative text-center text-white">
          <h1 className="text-4xl font-extrabold">LEVEL 4 DIPLOMA IN BUSINESS MANAGEMENT</h1>
          <p className="text-lg mt-2">
            Build a strong foundation in business and leadership, preparing for university or career growth.
          </p>
        </div>
      </section>

      <div className="max-w-6xl mx-auto p-8 bg-white shadow-lg rounded-lg mt-8">
        {/* Overview Section */}
        <section className="p-6 border-l-4 border-blue-600 bg-gray-50 rounded-lg shadow-sm">
          <h2 className="text-2xl font-semibold text-gray-800">OVERVIEW</h2>
          <p className="mt-4 text-gray-700">
            The **OTHM Level 4 Diploma in Business Management** provides learners with an **excellent foundation** for 
            a successful career in business. This qualification ensures that learners become **business-ready, confident, 
            independent thinkers** with a **deep knowledge of business and management.**
          </p>
          <p className="mt-2 text-gray-700">
            This qualification equips learners with **business policies, procedures, and operational skills** needed 
            to excel in professional environments. The curriculum covers both **theoretical and practical** business 
            knowledge, including:
          </p>
          <ul className="list-disc list-inside mt-4 text-gray-700">
            <li>Academic and Research Skills</li>
            <li>Business and Global Operations</li>
            <li>Finance and Accounting</li>
            <li>Business Communication</li>
            <li>Leadership and Team Management</li>
          </ul>
          <p className="mt-4 text-gray-700">
            Upon successful completion, learners can **progress to university** or enter the workforce in **various business sectors**.
          </p>
        </section>

        {/* Entry Requirements */}
        <section className="mt-8 p-6 border-l-4 border-green-600 bg-gray-50 rounded-lg shadow-sm">
          <h2 className="text-2xl font-semibold text-gray-800">ENTRY REQUIREMENT</h2>
          <p className="mt-4 text-gray-700">
            The qualification is designed for learners **aged 18+**. The entry profile may include:
          </p>
          <ul className="list-disc list-inside mt-4 text-gray-700">
            <li>A **relevant Level 3 Diploma** or equivalent qualification.</li>
            <li>GCE Advanced Level in **two subjects** or an equivalent qualification.</li>
            <li>For mature learners (**21+**), relevant **management experience** may be considered.</li>
          </ul>
        </section>

        {/* Mode of Assessment */}
        <section className="mt-8 p-6 border-l-4 border-yellow-600 bg-gray-50 rounded-lg shadow-sm">
          <h2 className="text-2xl font-semibold text-gray-800">MODE OF ASSESSMENT</h2>
          <p className="mt-4 text-gray-700">
            - All units are **internally assessed** and **externally verified** by OTHM.  
            - The qualification is **criterion-referenced**, meaning learners must meet **all learning outcomes**.  
            - Assessments include **written assignments, case studies, and research projects**.  
          </p>
        </section>

        {/* Delivery Methods */}
        <section className="mt-8 p-6 border-l-4 border-purple-600 bg-gray-50 rounded-lg shadow-sm">
          <h2 className="text-2xl font-semibold text-gray-800">DELIVERY</h2>
          <p className="mt-4 text-gray-700">
            The program is designed for **one academic year (full-time)** but also offers **flexible part-time and distance learning** options.
          </p>
          <p className="mt-2 text-gray-700">Delivery methods include:</p>
          <ul className="list-disc list-inside mt-4 text-gray-700">
            <li>Face-to-face **lectures, tutorials, and seminars**.</li>
            <li>**Online learning modules** with interactive content.</li>
            <li>Case studies, simulations, and **real-world business applications**.</li>
          </ul>
        </section>

        {/* Language Requirements */}
        <section className="mt-8 p-6 border-l-4 border-red-600 bg-gray-50 rounded-lg shadow-sm">
          <h2 className="text-2xl font-semibold text-gray-800">LANGUAGE REQUIREMENT</h2>
          <p className="mt-4 text-gray-700">
            If a learner is **not from a majority English-speaking country**, they must provide evidence of **English language competency**.
          </p>
        </section>

        {/* Modules Section */}
        <section className="mt-8 p-6 border-l-4 border-blue-700 bg-gray-50 rounded-lg shadow-sm">
          <h2 className="text-2xl font-semibold text-gray-800">MODULES</h2>
          <p className="mt-4 text-gray-700">
            The qualification consists of **6 mandatory units**, totaling **120 credits, 1200 hours Total Qualification Time (TQT), and 600 Guided Learning Hours (GLH)**.
          </p>
          <table className="mt-6 w-full border-collapse border border-gray-300 shadow-md">
            <thead>
              <tr className="bg-blue-600 text-white">
                <th className="border border-gray-300 px-4 py-2 text-left">Module</th>
                <th className="border border-gray-300 px-4 py-2 text-left">Credits</th>
              </tr>
            </thead>
            <tbody className="text-gray-700 bg-gray-50">
              <tr><td className="border px-4 py-2">Academic Writing and Research Skills</td><td className="border px-4 py-2">20</td></tr>
              <tr><td className="border px-4 py-2">Business Operations</td><td className="border px-4 py-2">20</td></tr>
              <tr><td className="border px-4 py-2">Communication in Business</td><td className="border px-4 py-2">20</td></tr>
              <tr><td className="border px-4 py-2">Finance and Accounting</td><td className="border px-4 py-2">20</td></tr>
              <tr><td className="border px-4 py-2">Leading and Managing Teams</td><td className="border px-4 py-2">20</td></tr>
              <tr><td className="border px-4 py-2">Operating in a Global Context</td><td className="border px-4 py-2">20</td></tr>
            </tbody>
          </table>
        </section>
      </div>
    </div>
  );
}

export default Level4Diploma;
