import React, { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom'; // Import Link for routing
import { ChevronDown, GraduationCap, Menu, X } from 'lucide-react';

interface SubMenuItem {
  title: string;
  href: string;
}

interface MenuItem {
  title: string;
  items: (SubMenuItem | { title: string; subItems: SubMenuItem[] })[];
}

// Update these items EXACTLY as shown, especially the "subItems" property
const navItems: Record<string, MenuItem> = {
  About: {
    title: 'About',
    items: [
      { title: 'Skill Hub', href: '#' },
      { title: 'Vision', href: '#' },
      { title: 'Partnerships', href: '#' },
      { title: 'Accreditation', href: '#' },
      { title: 'Academic Philosophy', href: '#' },
      { title: 'Leadership', href: '#' },
      { title: 'Advisory Board', href: '#' }
    ]
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
          { title: 'Level 6 Top-Up', href: '/business-management/level-6-top-up' }
        ]
      },
      {
        title: 'HR Management',
        subItems: [
          { title: 'Level 3 Diploma in HRM', href: '#' },
          { title: 'Level 4 Diploma in HRM', href: '#' },
          { title: 'Level 5 Diploma in HRM', href: '#' },
          { title: 'Level 6 Top-Up', href: '#' }
        ]
      },
      {
        title: 'Computer Science',
        subItems: [
          { title: 'Level 3 Diploma in CS (OPHM)', href: '#' },
          { title: 'Level 4 Diploma in CS (OPHM)', href: '#' },
          { title: 'Level 5 Diploma in CS (OPHM)', href: '#' }
        ]
      },
      {
        title: 'Accounting and Finance',
        subItems: [
          { title: 'Level 3 Diploma in Accounting and Finance', href: '#' },
          { title: 'Level 4 Diploma in Accounting and Finance', href: '#' },
          { title: 'Level 5 Diploma in Accounting and Finance', href: '#' },
          { title: 'Level 6 Top-Up', href: '#' }
        ]
      },
      {
        title: 'Logistics & Supply Chain',
        subItems: [
          { title: 'Level 4 Diploma in LSC Management', href: '#' },
          { title: 'Level 5 Diploma in LSC Management', href: '#' },
          { title: 'Level 6 Diploma in LSC Management', href: '#' }
        ]
      }
    ]
  },
  Students: {
    title: 'Students',
    items: [
      { title: 'How to Apply', href: '#' },
      { title: 'Course Fees', href: '#' },
      { title: 'Accommodation', href: '#' },
      { title: 'Refund Policy', href: '#' },
      { title: 'Visas', href: '#' }
    ]
  },
  'Study in Dubai': {
    title: 'Study in Dubai',
    items: [
      { title: 'Dubai as a Destination', href: '#' },
      { title: 'Dubai Malta Pathway Program', href: '#' }
    ]
  },
  'Contact Us': {
    title: 'Contact Us',
    items: [
      { title: 'Email and Numbers', href: '#' },
      { title: 'Enquiry Form', href: '#' },
      { title: 'Student Support', href: '#' },
      { title: 'Partner Support', href: '#' }
    ]
  }
};

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [activeSubDropdown, setActiveSubDropdown] = useState<string | null>(null);
  const navRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (navRef.current && !navRef.current.contains(event.target as Node)) {
        setActiveDropdown(null);
        setActiveSubDropdown(null);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  useEffect(() => {
    setActiveSubDropdown(null);
  }, [activeDropdown]);

  const handleDropdownToggle = (category: string) => {
    setActiveDropdown(activeDropdown === category ? null : category);
  };

  const handleSubDropdownToggle = (title: string) => {
    setActiveSubDropdown(activeSubDropdown === title ? null : title);
  };

  return (
    <nav ref={navRef} className="fixed w-full z-50 bg-white">
      <div className="border-b border-gray-200 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 flex items-center justify-between h-16">
          <div className="flex items-center">
            <GraduationCap className="h-8 w-8 text-gray-700" />
            <span className="ml-2 text-xl font-semibold text-gray-900">Skill-Hub</span>
          </div>

          <div className="hidden md:flex items-center space-x-8">
            {Object.entries(navItems).map(([category, { items }]) => (
              <div key={category} className="relative">
                <button
                  onClick={() => handleDropdownToggle(category)}
                  onMouseEnter={() => setActiveDropdown(category)}
                  className="flex items-center space-x-1 px-3 py-2 text-gray-700 hover:text-gray-900 focus:outline-none"
                >
                  <span>{category}</span>
                  <ChevronDown className="h-4 w-4" />
                </button>

                {activeDropdown === category && (
                  <div className="absolute left-0 top-full mt-2 w-64 bg-white border border-gray-200 rounded-md shadow-lg py-1 z-50">
                    {items.map((item) =>
                      'subItems' in item ? (
                        <div key={item.title} className="relative">
                          <button
                            onClick={(e) => {
                              e.stopPropagation();
                              handleSubDropdownToggle(item.title);
                            }}
                            onMouseEnter={() => setActiveSubDropdown(item.title)}
                            className="w-full flex items-center justify-between text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 focus:outline-none"
                          >
                            <span>{item.title}</span>
                            <ChevronDown className="h-4 w-4" />
                          </button>

                          {activeSubDropdown === item.title && (
                            <div className="absolute left-full top-0 ml-2 w-64 bg-white border border-gray-200 rounded-md shadow-lg py-1 z-50">
                              {item.subItems.map((subItem) => (
                                <Link
                                  key={subItem.title}
                                  to={subItem.href}
                                  className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                                >
                                  {subItem.title}
                                </Link>
                              ))}
                            </div>
                          )}
                        </div>
                      ) : (
                        <a key={item.title} href={item.href} className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                          {item.title}
                        </a>
                      )
                    )}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
}
