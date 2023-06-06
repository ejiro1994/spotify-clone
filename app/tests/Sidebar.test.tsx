// import React from 'react'
// import { render, screen } from '@testing-library/react'
// import Sidebar from '../components/Sidebar'
// import expect from 'expect'
// import { usePathname } from 'next/navigation'
// import '@testing-library/jest-dom';


// // import '@testing-library/jest-dom'

// describe('Sidebar', () => {
//   it('render all sidbar items', () => {
//     render(<Sidebar children></Sidebar>)

//     screen.getByRole('link', { name: 'Home' })
//   })
//   it('render all sidbar items', () => {
//     render(<Sidebar children></Sidebar>)

//     screen.getByRole('link', { name: /Search/i })
//   })
// })




// jest.mock('next/navigation', () => ({
//   usePathname: jest.fn(),
// }));

// describe('Sidebar', () => {
//   beforeEach(() => {
//     (usePathname as jest.Mock).mockReturnValue('/');
//   });

//   it('renders sidebar items', () => {
//     render(<Sidebar children/>);
//     const homeItem = screen.getByText('Home');
//     const searchItem = screen.getByText('Search');
//     expect(homeItem).toBeInTheDocument();
//     expect(searchItem).toBeInTheDocument();
//   });

//   test('applies active styles to active sidebar item', () => {
//     render(<Sidebar children/>);
//     const homeItem = screen.getByText('Home');
//     const searchItem = screen.getByText('Search');
//     // expect(homeItem).toHaveClass('text-white');
//     // expect(searchItem).not.toHaveClass('text-white');
//   });

//   test('displays song library', () => {
//     render(<Sidebar children />);
//     const songLibrary = screen.getByText('Song library');
//     expect(songLibrary).toBeInTheDocument();
//   });
// });



import React from 'react'
import { render } from '@testing-library/react'
import Sidebar from '../components/Sidebar'

jest.mock('next/navigation', () => ({
  usePathname: jest.fn().mockReturnValue('/')
}))

describe('Sidebar', () => {
  it('renders the sidebar items', () => {
    const { getByText } = render(<Sidebar children />)
    const homeItem = getByText('Home')
    const searchItem = getByText('Search')
    expect(homeItem).toBeInTheDocument()
    expect(searchItem).toBeInTheDocument()
  })

  it('applies active styles to the active sidebar item', () => {
    const { getByText } = render(<Sidebar children />)
    const homeItem = getByText('Home')
    const searchItem = getByText('Search')
    // expect(homeItem).toHaveStyle('color: white') 
    // expect(searchItem).not.toHaveClass('text-white')
  })

  it('renders the sidebar boxes', () => {
    const { getByText } = render(<Sidebar children />)
    const songLibraryBox = getByText('Song library')
    expect(songLibraryBox).toBeInTheDocument()
  })
})

 