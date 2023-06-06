import React from 'react'
import { render, screen } from '@testing-library/react'
import { BsStar } from 'react-icons/bs'
import SidebarItem from '../components/SidebarItem'

describe('SidebarItem', () => {
  it('renders the label', () => {
    const sidebarItem = render(
      <SidebarItem icon={BsStar} label={'Dashboard'} active={false} href='#' />
    )
    expect(sidebarItem.getByText('Dashboard')).toBeInTheDocument()
  })
  it('renders the label', () => {
    render(
      <SidebarItem icon={BsStar} label={'Dashboard'} active={false} href='#' />
    )
    expect(screen.getByText('Dashboard')).toBeInTheDocument()
  })

    it('applies active styles when active prop is true', () => {
      const { container } = render(
        <SidebarItem icon={BsStar} label="Dashboard" active={true} href="#" />
      )
      const sidebarItem = container.firstChild
      expect(sidebarItem).toHaveClass('text-white')
    })

  //   it('applies default styles when active prop is false', () => {
  //     const { container } = render(
  //       <SidebarItem icon={BsStar} label="Dashboard" active={false} href="#" />
  //     )
  //     const sidebarItem = container.firstChild
  //     expect(sidebarItem).not.toHaveClass('text-white')
  //   })

  //   it('renders the correct href', () => {
  //     const href = '/dashboard'
  //     const { getByRole } = render(
  //       <SidebarItem icon={BsStar} label="Dashboard" active={false} href={href} />
  //     )
  //     const linkElement = getByRole('link')
  //     expect(linkElement).toHaveAttribute('href', href)
  //   })

  //   it('renders the icon with the correct size', () => {
  //     const { getByRole } = render(
  //       <SidebarItem icon={BsStar} label="Dashboard" active={false} href="#" />
  //     )
  //     const iconElement = getByRole('img')
  //     expect(iconElement).toHaveAttribute('width', '26')
  //   })
})
