import React, { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ChevronDown, GraduationCap, Menu, X } from 'lucide-react';

interface NavSubItem {
  title: string;
  href: string;
}

interface NavItem {
  title: string;
  href?: string;
  subItems?: NavSubItem[];
}

interface NavCategory {
  title: string;
  items: NavItem[];
}

const navItems: Record<string, NavCategory> = {
  About: {
    title: 'About',
    items: [
      { title: 'Skill Hub', href: '#' },
      { title: 'Vision', href: '#' },
      { title: 'Partnerships', href: '#' },
      { title: 'Accreditation', href: '#' },
      { title: 'Academic Philosophy', href: '#' },
      { title: 'Leadership', href: '#' },
      { title: 'Advisory Board', href: '#' },
    ],
  },
  Programs: {
    title: 'Programs',
    items: [
      {
        title: 'Business Management',
        subItems: [
          { title: 'Level 3 Diploma in Business Management', href: '/business-management/level-3' },
          { title: 'Level 4 Diploma in Business Management', href: '/business-management/level-4' },
          { title: 'Level 5 Diploma in Business Management', href: '/business-management/level-5' },
          { title: 'Level 6 Top-Up', href: '/business-management/level-6-top-up' },
        ],
      },
      {
        title: 'HR Management',
        subItems: [
          { title: 'Level 3 Diploma in HRM', href: '#' },
          { title: 'Level 4 Diploma in HRM', href: '#' },
          { title: 'Level 5 Diploma in HRM', href: '#' },
          { title: 'Level 6 Top-Up', href: '#' },
        ],
      },
      {
        title: 'Computer Science',
        subItems: [
          { title: 'Level 3 Diploma in CS (OPHM)', href: '#' },
          { title: 'Level 4 Diploma in CS (OPHM)', href: '#' },
          { title: 'Level 5 Diploma in CS (OPHM)', href: '#' },
        ],
      },
      {
        title: 'Accounting and Finance',
        subItems: [
          { title: 'Level 3 Diploma in Accounting and Finance', href: '#' },
          { title: 'Level 4 Diploma in Accounting and Finance', href: '#' },
          { title: 'Level 5 Diploma in Accounting and Finance', href: '#' },
          { title: 'Level 6 Top-Up', href: '#' },
        ],
      },
      {
        title: 'Logistics & Supply Chain',
        subItems: [
          { title: 'Level 4 Diploma in LSC Management', href: '#' },
          { title: 'Level 5 Diploma in LSC Management', href: '#' },
          { title: 'Level 6 Diploma in LSC Management', href: '#' },
        ],
      },
    ],
  },
  Students: {
    title: 'Students',
    items: [
      { title: 'How to Apply', href: '#' },
      { title: 'Course Fees', href: '#' },
      { title: 'Accommodation', href: '#' },
      { title: 'Refund Policy', href: '#' },
      { title: 'Visas', href: '#' },
    ],
  },
  'Study in Dubai': {
    title: 'Study in Dubai',
    items: [
      { title: 'Dubai as a Destination', href: '#' },
      { title: 'Dubai Malta Pathway Program', href: '#' },
    ],
  },
  'Contact Us': {
    title: 'Contact Us',
    items: [
      { title: 'Email and Numbers', href: '#' },
      { title: 'Enquiry Form', href: '#' },
      { title: 'Student Support', href: '#' },
      { title: 'Partner Support', href: '#' },
    ],
  },
};

const Navbar: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [activeSubDropdown, setActiveSubDropdown] = useState<string | null>(null);
  const navRef = useRef<HTMLDivElement>(null);

  // Close dropdowns when clicking outside the nav
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (navRef.current && !navRef.current.contains(event.target as Node)) {
        setActiveDropdown(null);
        setActiveSubDropdown(null);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  // Reset sub-dropdown when active dropdown changes
  useEffect(() => {
    setActiveSubDropdown(null);
  }, [activeDropdown]);

  const handleDropdownToggle = (category: string) => {
    setActiveDropdown(prev => (prev === category ? null : category));
  };

  const handleSubDropdownToggle = (title: string) => {
    setActiveSubDropdown(prev => (prev === title ? null : title));
  };

  return (
    <nav ref={navRef} className="fixed w-full z-50 bg-white shadow-md">
      <div className="border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center">
            <GraduationCap className="h-8 w-8 text-gray-700" />
            <span className="ml-2 text-xl font-semibold text-gray-900">Skill-Hub</span>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setMobileMenuOpen(prev => !prev)}
              className="text-gray-700 focus:outline-none"
              aria-label="Toggle mobile menu"
            >
              {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`md:hidden ${mobileMenuOpen ? 'block' : 'hidden'} absolute top-16 left-0 w-full bg-white shadow-lg z-50`}>
        {Object.entries(navItems).map(([category, { items }]) => (
          <div key={category} className="px-4 py-2 border-b">
            <button
              onClick={() => handleDropdownToggle(category)}
              className="w-full flex justify-between text-left text-gray-800 text-lg font-semibold"
              aria-expanded={activeDropdown === category}
            >
              {category}
              <ChevronDown className="h-5 w-5" />
            </button>
            {activeDropdown === category && (
              <div className="pl-4 mt-2">
                {items.map((item) =>
                  item.subItems ? (
                    <div key={item.title}>
                      <button
                        onClick={() => handleSubDropdownToggle(item.title)}
                        className="w-full flex justify-between text-left text-gray-700 text-md font-medium"
                        aria-expanded={activeSubDropdown === item.title}
                      >
                        {item.title}
                        <ChevronDown className="h-4 w-4" />
                      </button>
                      {activeSubDropdown === item.title && (
                        <div className="pl-4">
                          {item.subItems.map((subItem) => (
                            <Link key={subItem.title} to={subItem.href} className="block py-1 text-gray-600">
                              {subItem.title}
                            </Link>
                          ))}
                        </div>
                      )}
                    </div>
                  ) : (
                    <Link key={item.title} to={item.href!} className="block py-1 text-gray-600">
                      {item.title}
                    </Link>
                  )
                )}
              </div>
            )}
          </div>
        ))}
      </div>
    </nav>
  );
};
console.log("VB")
export default Navbar;
