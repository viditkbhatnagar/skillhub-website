import React from "react";

function Level5Diploma() {
  return (
    <div className="bg-gray-100 min-h-screen">
      {/* Hero Section with Background */}
      <section
        className="relative bg-cover bg-center py-20"
        style={{
          backgroundImage: "url('https://source.unsplash.com/1600x900/?corporate,management')",
        }}
      >
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="relative text-center text-white">
          <h1 className="text-4xl font-extrabold">LEVEL 5 DIPLOMA IN BUSINESS MANAGEMENT</h1>
          <p className="text-lg mt-2">
            Prepare for leadership roles in business with advanced management principles and strategies.
          </p>
        </div>
      </section>

      <div className="max-w-6xl mx-auto p-8 bg-white shadow-lg rounded-lg mt-8">
        {/* Overview Section */}
        <section className="p-6 border-l-4 border-blue-600 bg-gray-50 rounded-lg shadow-sm">
          <h2 className="text-2xl font-semibold text-gray-800">OVERVIEW</h2>
          <p className="mt-4 text-gray-700">
            The **OTHM Level 5 Diploma in Business Management** provides learners with a **strong foundation** for 
            careers in various organizations. This qualification ensures that learners become **business-ready, confident, 
            independent thinkers** with a detailed knowledge of **business and management.**
          </p>
          <p className="mt-2 text-gray-700">
            The course focuses on key business disciplines, including:
          </p>
          <ul className="list-disc list-inside mt-4 text-gray-700">
            <li>Human Resource Management</li>
            <li>Marketing for Managers</li>
            <li>Management Accounting</li>
            <li>Business Law</li>
            <li>Business Principles and Strategy</li>
          </ul>
          <p className="mt-4 text-gray-700">
            Learners will integrate knowledge from these areas and also learn **how to start a business** and develop a **viable business plan**.
          </p>
          <p className="mt-4 text-gray-700">
            This qualification is ideal for those who have started or plan to move into a career in **private or public sector business**. 
            Successful completion enables learners to **progress to further study or employment.**
          </p>
        </section>

        {/* Entry Requirements */}
        <section className="mt-8 p-6 border-l-4 border-green-600 bg-gray-50 rounded-lg shadow-sm">
          <h2 className="text-2xl font-semibold text-gray-800">ENTRY REQUIREMENT</h2>
          <p className="mt-4 text-gray-700">
            These qualifications are designed for learners **aged 18 and above**. The entry profile may include:
          </p>
          <ul className="list-disc list-inside mt-4 text-gray-700">
            <li>A **relevant Level 4 Diploma qualification** or equivalent.</li>
            <li>GCE Advanced Level in **3 subjects** or an equivalent qualification.</li>
            <li>For mature learners (**21+**), relevant **management experience** may be considered.</li>
          </ul>
        </section>

        {/* Mode of Assessment */}
        <section className="mt-8 p-6 border-l-4 border-yellow-600 bg-gray-50 rounded-lg shadow-sm">
          <h2 className="text-2xl font-semibold text-gray-800">MODE OF ASSESSMENT</h2>
          <p className="mt-4 text-gray-700">
            - All units are **internally assessed** and **externally verified** by OTHM.  
            - The qualification is **criterion-referenced**, meaning learners must meet **all learning outcomes**.  
            - Assessments include **written assignments, case studies, and business projects**.  
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
              <tr><td className="border px-4 py-2">Principles and Concepts of Strategy</td><td className="border px-4 py-2">20</td></tr>
              <tr><td className="border px-4 py-2">The Management of Human Resources</td><td className="border px-4 py-2">20</td></tr>
              <tr><td className="border px-4 py-2">Marketing for Managers</td><td className="border px-4 py-2">20</td></tr>
              <tr><td className="border px-4 py-2">Business Law for Managers</td><td className="border px-4 py-2">20</td></tr>
              <tr><td className="border px-4 py-2">Management Accounting and Decision Making</td><td className="border px-4 py-2">20</td></tr>
              <tr><td className="border px-4 py-2">Business Start-up; Conception to Market</td><td className="border px-4 py-2">20</td></tr>
            </tbody>
          </table>
        </section>
      </div>
    </div>
  );
}

export default Level5Diploma;
