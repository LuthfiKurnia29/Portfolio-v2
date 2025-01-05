import React from 'react'
import Container from './Container';
import Logo from './Logo';
import { NavbarData } from '@/constants';
import Link from 'next/link';

const Header = () => {
  return (
    <header className='border-b border-b-hoverColor/10'>
      <Container className='py-5 flex items-center justify-between'>
        <Logo title="Luthfi" subtitle="_" />
        <div className="hidden md:inline-flex items-center gap-7 text-sm uppercase tracking-wide font-medium">
          {NavbarData?.map(({title, href}) => (
            <Link key={title} href={href}>{title}</Link>
          ))}
        </div>
      </Container>
    </header>
  )
}

export default Header;