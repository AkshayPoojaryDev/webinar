/* -------------------------------------------------------------------- */
/* FooterTwoRowHorizontal.jsx                                           */
/* -------------------------------------------------------------------- */
import { Link } from "react-router-dom";          // remove if you don’t use R-R-D
import {
  Facebook,
  Instagram,
  Linkedin,
  Twitter,
  ChevronRight,
} from "lucide-react";

/*────────────────────  link data  ────────────────────*/
const QUICK_LINKS = [
  ["Courses",  "/courses"],
  ["Webinars", "/webinar"],
  ["Pricing",  "/pricing"],
  ["Contact",  "/contact"],
];

const CATEGORIES = [
  ["AI & ML",           "/categories/ai-ml"],
  ["Cloud ",   "/categories/cloud"],
  ["DevOps",            "/categories/devops"],
  ["Data Analytics",    "/categories/data"],
  ["Cyber-security",    "/categories/security"],
  ["Project Mgmt",      "/categories/pm"],
  ["UI / UX",           "/categories/uiux"],
  ["Digital ", "/categories/marketing"],
];

/*────────────────────  tiny helpers  ────────────────────*/
const A = ({ to, children, className = "" }) => (
  <Link to={to} className={`hover:text-gray-200 transition-colors ${className}`}>
    {children}
  </Link>
);

const IconLink = ({ href, children }) => (
  <a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    className="hover:text-gray-300 transition-colors"
  >
    {children}
  </a>
);

/*──────────────────────  main footer  ───────────────────*/
export default function FooterTwoRowHorizontal() {
  return (
    <footer className="bg-black text-white pt-12 pb-8 px-4 sm:px-6 lg:px-12">
      <div className="mx-auto max-w-7xl flex flex-col gap-16">
        {/* ──────────  Row 1 – your two CTA cards  ───────── */}
        <div className="flex flex-col md:flex-row gap-8">
          <GetStartedCard className="flex-1" />
          <SupportCard     className="flex-1" />
        </div>

        {/* ──────────  Row 2 – logo + quick links + categories  ───────── */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-">
          <LogoColumn />
          <QuickLinks />
          <CategoriesCol />
           
        </div>
      </div>

      {/* bottom strip */}
      <BottomBar />
    </footer>
  );
}

/*────────────────────  sub-components  ───────────────────*/

// 1️⃣ Logo, mission
const LogoColumn = () => (
  <div>
    <img
      src="https://mangates.us/uploads/system/007d4a1214289aea09b9759ae1324e96.png"
      alt="Mangates logo"
      className="h-12 mb-4"
    />
    <p className="text-sm">
      Empowering professionals through AI-integrated programs.
    </p>
  </div>
);

// 2️⃣ Quick Links – 2 cols × 2 rows
const QuickLinks = () => (
  <div className="text-center">
    <h4 className="text-lg font-bold mb-4 ">
      Quick Links
    </h4>
    <ul className="grid grid-cols-2 gap-4 text-sm ">
      {QUICK_LINKS.map(([txt, to]) => (
        <li key={txt}>
          <A to={to}>{txt}</A>
        </li>
      ))}
    </ul>
  </div>
);

// 3️⃣ Categories – 4 cols × 2 rows
const CategoriesCol = () => (
  <div>
    <h4 className="text-lg font-bold mb-4 text-center ">
      Categories
    </h4>
    <ul className="grid grid-cols-4 gap-4 text-sm">
      {CATEGORIES.map(([txt, to]) => (
        <li key={txt}>
          <A to={to}>{txt}</A>
        </li>
      ))}
    </ul>
  </div>
);

// 4️⃣ Get-Started & Support cards...
const GetStartedCard = ({ className = "" }) => (
  <CardShell className={className} title="Get started for free">
    <CTAButton href="/join">Join</CTAButton>
  </CardShell>
);
const SupportCard = ({ className = "" }) => (
  <CardShell className={className} title="24/7 customer support">
    <CTAButton href="/help/contact">Contact&nbsp;Support</CTAButton>
  </CardShell>
);
const CardShell = ({ title, children, className = "" }) => (
  <div className={`rounded-xl bg-white/5 p-8 ${className}`}>
    <h4 className="text-2xl font-semibold mb-4">{title}</h4>
    <p className="text-sm mb-6 max-w-md">
      Our support team is available 24/7. Enterprise members also receive
      dedicated account managers and a guaranteed uptime&nbsp;SLA.
    </p>
    {children}
  </div>
);

// bottom strip with social + language + legal
const BottomBar = () => (
  <div className="mt-16 border-t border-white/20 pt-6 flex flex-col gap-6 md:flex-row md:justify-between md:items-center text-xs text-footer-sub-content">
    <div className="flex flex-col sm:flex-row sm:items-center gap-6">
      <div className="flex gap-4">
        <IconLink href="https://instagram.com"><Instagram size={24} /></IconLink>
        <IconLink href="https://twitter.com"  ><Twitter   size={24} /></IconLink>
        <IconLink href="https://facebook.com" ><Facebook size={24} /></IconLink>
        <IconLink href="https://linkedin.com" ><Linkedin size={24} /></IconLink>
      </div>
      <div className="flex items-center gap-2">
        <span>Language:</span>
        <button className="flex items-center gap-1 bg-white/10 px-2 py-1 rounded-md">
          English <ChevronRight size={14} className="opacity-75" />
        </button>
      </div>
    </div>

    <p className="flex flex-wrap gap-2">
      © {new Date().getFullYear()} Mangates. All rights reserved.
      <A to="/terms"    className="after:mx-1 after:content-['•']">Terms</A>
      <A to="/privacy"  className="after:mx-1 after:content-['•']">Privacy</A>
      <A to="/copyright" className="after:mx-1 after:content-['•']">Copyright</A>
      <A to="/cookies"  >Cookies</A>
    </p>
  </div>
);

// 6️⃣ CTA with subtle offset-shadow
const CTAButton = ({ href, children }) => (
  <a
    href={href}
    className="
      inline-flex items-center gap-2 rounded-xl bg-[#FFD400] px-6 py-3 font-bold text-black
      shadow-[-4px_4px_0_0_#ffffff80] transition
      hover:-translate-y-1 hover:translate-x-1
    "
  >
    {children}
    <ChevronRight size={18} />
  </a>
);
