import React from "react";

function Level3Diploma() {
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
          <h1 className="text-4xl font-extrabold">LEVEL 3 DIPLOMA IN BUSINESS MANAGEMENT</h1>
          <p className="text-lg mt-2">
            Gain a comprehensive understanding of business operations and key management skills.
          </p>
        </div>
      </section>

      <div className="max-w-6xl mx-auto p-8 bg-white shadow-lg rounded-lg mt-8">
        {/* Overview Section */}
        <section className="p-6 border-l-4 border-blue-600 bg-gray-50 rounded-lg shadow-sm">
          <h2 className="text-2xl font-semibold text-gray-800">OVERVIEW</h2>
          <p className="mt-4 text-gray-700">
            The **OTHM Level 3 Diploma in Business Management** qualification provides learners with an 
            **in-depth understanding of business operations and structure**. 
          </p>
          <p className="mt-2 text-gray-700">
            The qualification equips learners with **essential business knowledge, understanding, and skills**. 
            It encourages **research, investigation, and analysis** of key business areas, including:
          </p>
          <ul className="list-disc list-inside mt-4 text-gray-700">
            <li>Business Communication</li>
            <li>The Business Environment</li>
            <li>People Management</li>
            <li>Customer Service</li>
            <li>Finance</li>
            <li>Marketing</li>
          </ul>
        </section>

        {/* Knowledge & Understanding Section */}
        <section className="mt-8 p-6 border-l-4 border-green-600 bg-gray-50 rounded-lg shadow-sm">
          <h2 className="text-2xl font-semibold text-gray-800">KNOWLEDGE AND UNDERSTANDING</h2>
          <p className="mt-4 text-gray-700">
            After completing this diploma, learners will develop:
          </p>
          <ul className="list-disc list-inside mt-4 text-gray-700">
            <li>An understanding of **business theories, ideas, and principles**.</li>
            <li>Ability to **apply basic management techniques** to solve business challenges.</li>
            <li>Knowledge of **business structures, functions, and industries**.</li>
            <li>Skills to relate business sectors to **practical applications**.</li>
          </ul>
        </section>

        {/* Generic Skills Section */}
        <section className="mt-8 p-6 border-l-4 border-yellow-600 bg-gray-50 rounded-lg shadow-sm">
          <h2 className="text-2xl font-semibold text-gray-800">GENERIC SKILLS</h2>
          <p className="mt-4 text-gray-700">
            Learners will also develop key business skills, such as:
          </p>
          <ul className="list-disc list-inside mt-4 text-gray-700">
            <li>Effective **business communication (written and verbal)**.</li>
            <li>Utilizing **ICT tools** for business reporting and analysis.</li>
            <li>Strong **decision-making and problem-solving** skills.</li>
            <li>Working in teams, supervising tasks, and managing resources efficiently.</li>
          </ul>
          <p className="mt-4 text-gray-700">
            This qualification supports learners' **progression to university** or entry into **business sectors**.
          </p>
        </section>

        {/* Entry Requirements */}
        <section className="mt-8 p-6 border-l-4 border-purple-600 bg-gray-50 rounded-lg shadow-sm">
          <h2 className="text-2xl font-semibold text-gray-800">ENTRY REQUIREMENT</h2>
          <p className="mt-4 text-gray-700">
            The **OTHM Level 3 Diploma in Business Management** is open to learners **aged 16+**. 
            OTHM does not specify strict entry requirements, but centers must ensure that learners:
          </p>
          <ul className="list-disc list-inside mt-4 text-gray-700">
            <li>Meet their **learning needs and academic potential**.</li>
            <li>Have the ability to **progress toward further education or employment**.</li>
          </ul>
        </section>

        {/* Mode of Assessment */}
        <section className="mt-8 p-6 border-l-4 border-red-600 bg-gray-50 rounded-lg shadow-sm">
          <h2 className="text-2xl font-semibold text-gray-800">MODE OF ASSESSMENT</h2>
          <p className="mt-4 text-gray-700">
            - All units are **internally assessed** by the center and **externally verified** by OTHM.  
            - The qualification is **criterion-referenced**, meaning learners must meet **all learning outcomes**.  
            - Assessments include **written assignments, case studies, and practical exercises**.  
          </p>
        </section>

        {/* Modules Section */}
        <section className="mt-8 p-6 border-l-4 border-blue-700 bg-gray-50 rounded-lg shadow-sm">
          <h2 className="text-2xl font-semibold text-gray-800">MODULES</h2>
          <p className="mt-4 text-gray-700">
            The qualification consists of **6 mandatory units**, totaling **120 credits, 1200 hours Total Qualification Time (TQT), and 480 Guided Learning Hours (GLH)**.
          </p>
          <table className="mt-6 w-full border-collapse border border-gray-300 shadow-md">
            <thead>
              <tr className="bg-blue-600 text-white">
                <th className="border border-gray-300 px-4 py-2 text-left">Module</th>
                <th className="border border-gray-300 px-4 py-2 text-left">Credits</th>
              </tr>
            </thead>
            <tbody className="text-gray-700 bg-gray-50">
              <tr><td className="border px-4 py-2">Communication for Business</td><td className="border px-4 py-2">20</td></tr>
              <tr><td className="border px-4 py-2">The Business Environment</td><td className="border px-4 py-2">20</td></tr>
              <tr><td className="border px-4 py-2">People Management</td><td className="border px-4 py-2">20</td></tr>
              <tr><td className="border px-4 py-2">Customer Service</td><td className="border px-4 py-2">20</td></tr>
              <tr><td className="border px-4 py-2">Finance in Business</td><td className="border px-4 py-2">20</td></tr>
              <tr><td className="border px-4 py-2">Marketing</td><td className="border px-4 py-2">20</td></tr>
            </tbody>
          </table>
        </section>
      </div>
    </div>
  );
}

export default Level3Diploma;
