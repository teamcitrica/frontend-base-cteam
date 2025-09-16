"use client";
import React from 'react'
import { Col, Container } from '@citrica/objects';
import { Text, Button, Icon } from '@citrica-ui';
import { siteConfig } from '@/config/site';

interface HeaderProps {
  logo?: React.ReactNode;
}

const Header = ({ logo }: HeaderProps) => {
  const [isScrolled, setIsScrolled] = React.useState(false);
  const [isOpen, setIsOpen] = React.useState(false);

  React.useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = siteConfig.navLinks;

  const scrollToSection = (href: string) => {
    if (href.startsWith('#')) {
      const element = document.getElementById(href.substring(1));
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
    setIsOpen(false);
  };

  return (
    <nav 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-white/95 backdrop-blur-md shadow-lg' 
          : 'bg-transparent'
      }`}
    >
      <Container>
        <Col cols={{ lg: 12, md: 6, sm: 4 }} className="flex justify-between items-center py-4">
          
          {/* Logo */}
          <div className="flex items-center space-x-2">
            {logo ? (
              logo
            ) : (
              <>
                <div className="flex items-center space-x-1">
                  <div className="w-8 h-8 bg-[#964f20] rounded-sm flex items-center justify-center">
                    <Text variant="label" color="#FFFFFF" weight="bold">L</Text>
                  </div>
                  <div className="w-2 h-8 bg-[#8d957e] rounded-sm"></div>
                </div>
                <div>
                  <Text 
                    variant="subtitle" 
                    textColor="color-on-surface"
                    weight="bold"
                  >
                    LIENZO
                  </Text>
                </div>
              </>
            )}
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item, index) => (
              <button
                key={index}
                onClick={() => scrollToSection(item.href)}
                className="transition-colors duration-200 hover:text-[#964f20] text-[#222222]"
              >
                <Text variant="body" className="font-medium">
                  {item.title}
                </Text>
              </button>
            ))}
            
            <Button
              onClick={() => scrollToSection('#contact')}
              variant="primary"
              size="md"
              label="Reservar"
              className="ml-4"
            />
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <Button 
              size="sm" 
              variant="flat" 
              onClick={() => setIsOpen(!isOpen)}
              className="p-2"
            >
              <Icon 
                name="Menu" 
                size={24} 
                className="text-[#222222]" 
              />
            </Button>
          </div>
        </Col>
      </Container>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-white shadow-lg border-t">
          <Container>
            <Col cols={{ sm: 4 }} className="py-4">
              <div className="space-y-4">
                {navItems.map((item, index) => (
                  <button
                    key={index}
                    onClick={() => scrollToSection(item.href)}
                    className="w-full text-left py-2 hover:text-[#964f20] transition-colors"
                  >
                    <Text variant="body" className="font-medium">
                      {item.title}
                    </Text>
                  </button>
                ))}
                
                <div className="pt-2">
                  <Button
                    onClick={() => scrollToSection('#contact')}
                    variant="primary"
                    fullWidth
                    size="md"
                    label="Reservar Estudio"
                  />
                </div>
              </div>
            </Col>
          </Container>
        </div>
      )}
    </nav>
  );
};

export default Header