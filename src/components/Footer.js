import React from 'react';

export default function Footer() {
  return (
    <footer className='bg-[#17191A] text-[#E5E5E5] py-6 border-t-2'>
      <div className='container mx-auto text-center'>
        <div className='mb-4'>
          <a href='/' className='text-[#E5E5E5] hover:text-[#0099CC] mx-2'>Home</a>
        </div>
        <p className='text-sm'>
          © {new Date().getFullYear()} Samet.
        </p>
        <p className='text-sm'>
          Erstellt mit React und Tailwind CSS
        </p>
      </div>
    </footer>
  );
}
