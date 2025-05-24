

import '@testing-library/jest-dom';


if (typeof global.TextEncoder === 'undefined') {
    const { TextEncoder } = require('util');
    global.TextEncoder = TextEncoder;
}
if (typeof global.TextDecoder === 'undefined') {
    const { TextDecoder } = require('util');
    global.TextDecoder = TextDecoder;
}


jest.mock('next/navigation', () => ({
  useRouter: jest.fn(() => ({
    push: jest.fn(),
    replace: jest.fn(),
    reload: jest.fn(),
    back: jest.fn(),
    prefetch: jest.fn(),
  })),
}));



jest.mock('next/link', () => {
  
  const Link = ({ children, href, ...props }) => {
    const router = require('next/navigation').useRouter(); 
    
    return (
      <a
        href={href}
        onClick={(e) => {
          e.preventDefault(); 
          router.push(href); 
        }}
        {...props}
      >
        {children}
      </a>
    );
  };
  return Link;
});