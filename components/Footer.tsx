import Link from "next/link";
import { Facebook, Twitter, Linkedin, Instagram } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 py-8">
      <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center gap-6">
        
        {/* Left: Company Info */}
        <div className="text-center md:text-left">
          <p className="text-lg font-semibold">Newsino Energy Co</p>
          <p className="text-sm">© {new Date().getFullYear()} Newsinoenergy. All rights reserved.</p>
        </div>

        {/* Policy Links */}
        <div className="flex flex-wrap justify-center md:justify-start gap-4 mt-2 text-sm">
            <Link href="/refund-policy" className="hover:text-white">
              Refund Policy
            </Link>
            <Link href="/privacy-policy" className="hover:text-white">
              Privacy Policy
            </Link>
            <Link href="/terms-of-service" className="hover:text-white">
              Terms of Service
            </Link>
          </div>

        {/* Right: Social Media Links */}
        <div className="flex gap-4">
          <Link href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
            <Facebook className="w-5 h-5 hover:text-white transition-colors" />
          </Link>
          <Link href="https://twitter.com" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
            <Twitter className="w-5 h-5 hover:text-white transition-colors" />
          </Link>
          <Link href="https://linkedin.com" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
            <Linkedin className="w-5 h-5 hover:text-white transition-colors" />
          </Link>
          <Link href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
            <Instagram className="w-5 h-5 hover:text-white transition-colors" />
          </Link>
        </div>
      </div>
    </footer>
  );
}
