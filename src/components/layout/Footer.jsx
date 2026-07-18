import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const FOOTER_LINKS = {
  company: [
    { label: "About Us", href: "/about" },
    { label: "Our Team", href: "/team" },
    { label: "Careers", href: "/careers" },
    { label: "Contact", href: "/contact" },
  ],
  services: [
    { label: "Architecture", href: "/services/architecture" },
    { label: "Interior Design", href: "/services/interior-design" },
    { label: "Renovation", href: "/services/renovation" },
    { label: "Consulting", href: "/services/consulting" },
  ],
  projects: [
    { label: "Residential", href: "/projects/residential" },
    { label: "Commercial", href: "/projects/commercial" },
    { label: "Hospitality", href: "/projects/hospitality" },
  ],
};

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-border bg-background pt-16 pb-8 mt-24">
      <div className="container mx-auto px-4 md:px-8 max-w-[1440px]">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 lg:gap-8 mb-16">
          {/* Brand & Newsletter */}
          <div className="lg:col-span-2 flex flex-col">
            <Link
              href="/"
              className="text-2xl font-bold font-heading tracking-tight text-primary mb-6 inline-block"
            >
              RENOVERA
            </Link>
            <p className="text-muted-foreground mb-8 max-w-sm leading-relaxed">
              Premium architecture and luxury home renovation studio crafting timeless spaces for modern living.
            </p>

            <div className="mb-4">
              <h4 className="text-sm font-semibold text-foreground mb-3 uppercase tracking-wider">
                Subscribe to our newsletter
              </h4>
              <form className="flex gap-2 max-w-md">
                <Input
                  type="email"
                  placeholder="Email address"
                  className="bg-background"
                  required
                />
                <Button type="submit" variant="default">
                  Subscribe
                </Button>
              </form>
            </div>
          </div>

          {/* Links: Company */}
          <div className="flex flex-col">
            <h4 className="text-sm font-semibold text-foreground mb-6 uppercase tracking-wider">
              Company
            </h4>
            <ul className="flex flex-col gap-3">
              {FOOTER_LINKS.company.map((link, idx) => (
                <li key={idx}>
                  <Link
                    href={link.href}
                    className="text-muted-foreground hover:text-primary transition-colors text-sm"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Links: Services */}
          <div className="flex flex-col">
            <h4 className="text-sm font-semibold text-foreground mb-6 uppercase tracking-wider">
              Services
            </h4>
            <ul className="flex flex-col gap-3">
              {FOOTER_LINKS.services.map((link, idx) => (
                <li key={idx}>
                  <Link
                    href={link.href}
                    className="text-muted-foreground hover:text-primary transition-colors text-sm"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Links: Projects */}
          <div className="flex flex-col">
            <h4 className="text-sm font-semibold text-foreground mb-6 uppercase tracking-wider">
              Projects
            </h4>
            <ul className="flex flex-col gap-3">
              {FOOTER_LINKS.projects.map((link, idx) => (
                <li key={idx}>
                  <Link
                    href={link.href}
                    className="text-muted-foreground hover:text-primary transition-colors text-sm"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-border flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-muted-foreground">
            &copy; {currentYear} Renovera Studio. All rights reserved.
          </p>
          
          <div className="flex items-center gap-6">
            <Link
              href="#"
              className="text-xs uppercase tracking-wider font-medium text-muted-foreground hover:text-primary transition-colors"
            >
              Instagram
            </Link>
            <Link
              href="#"
              className="text-xs uppercase tracking-wider font-medium text-muted-foreground hover:text-primary transition-colors"
            >
              Twitter
            </Link>
            <Link
              href="#"
              className="text-xs uppercase tracking-wider font-medium text-muted-foreground hover:text-primary transition-colors"
            >
              LinkedIn
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
