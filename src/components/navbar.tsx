'use client'

import * as Headless from '@headlessui/react'
import clsx from 'clsx'
import { LayoutGroup, motion } from 'framer-motion'
import React, { forwardRef, useId } from 'react'
import { TouchTarget } from './button'
import { Link } from './link'
import { Avatar } from './avatar'
import { Dropdown, DropdownButton, DropdownDivider, DropdownItem, DropdownLabel, DropdownMenu } from './dropdown'
import {
  ArrowRightStartOnRectangleIcon,
  Cog8ToothIcon,
  LightBulbIcon,
  ShieldCheckIcon,
  UserIcon,
} from '@heroicons/react/16/solid'
import { InboxIcon, MagnifyingGlassIcon } from '@heroicons/react/20/solid'

interface NavbarProps {
  children: React.ReactNode
}

export function Navbar({ children }: NavbarProps) {
  return (
    <div className="flex h-16 items-center justify-between border-b border-zinc-200 bg-white px-4 dark:border-zinc-800 dark:bg-zinc-900">
      {children}
    </div>
  )
}

export function NavbarSection({ children }: { children: React.ReactNode }) {
  return <div className="flex items-center gap-2">{children}</div>
}

export function NavbarItem({ children, href, className = '' }: { children: React.ReactNode; href?: string; className?: string }) {
  const Component = href ? Link : 'button'
  return (
    <Component
      href={href}
      className={`flex items-center justify-center rounded-lg p-2 text-zinc-600 hover:bg-zinc-100 hover:text-zinc-900 dark:text-zinc-400 dark:hover:bg-zinc-800 dark:hover:text-white ${className}`}
    >
      {children}
    </Component>
  )
}

export function NavbarSpacer() {
  return <div className="flex-1" />
}

export function MainNavbar() {
  return (
    <Navbar>
      <NavbarSpacer />
      <NavbarSection>
        <NavbarItem href="/search" aria-label="Search">
          <MagnifyingGlassIcon className="size-5" />
        </NavbarItem>
        <NavbarItem href="/inbox" aria-label="Inbox">
          <InboxIcon className="size-5" />
        </NavbarItem>
        <Dropdown>
          <DropdownButton as={NavbarItem}>
            <Avatar src="/profile-photo.jpg" square className="size-8" />
          </DropdownButton>
          <DropdownMenu className="min-w-64" anchor="bottom end">
            <DropdownItem href="/my-profile">
              <UserIcon />
              <DropdownLabel>My profile</DropdownLabel>
            </DropdownItem>
            <DropdownItem href="/settings">
              <Cog8ToothIcon />
              <DropdownLabel>Settings</DropdownLabel>
            </DropdownItem>
            <DropdownDivider />
            <DropdownItem href="/privacy-policy">
              <ShieldCheckIcon />
              <DropdownLabel>Privacy policy</DropdownLabel>
            </DropdownItem>
            <DropdownItem href="/share-feedback">
              <LightBulbIcon />
              <DropdownLabel>Share feedback</DropdownLabel>
            </DropdownItem>
            <DropdownDivider />
            <DropdownItem href="/logout">
              <ArrowRightStartOnRectangleIcon />
              <DropdownLabel>Sign out</DropdownLabel>
            </DropdownItem>
          </DropdownMenu>
        </Dropdown>
      </NavbarSection>
    </Navbar>
  )
}

export function NavbarDivider({ className, ...props }: React.ComponentPropsWithoutRef<'div'>) {
  return <div aria-hidden="true" {...props} className={clsx(className, 'h-6 w-px bg-zinc-950/10 dark:bg-white/10')} />
}

export function NavbarSpacer({ className, ...props }: React.ComponentPropsWithoutRef<'div'>) {
  return <div aria-hidden="true" {...props} className={clsx(className, '-ml-4 flex-1')} />
}

export function NavbarLabel({ className, ...props }: React.ComponentPropsWithoutRef<'span'>) {
  return <span {...props} className={clsx(className, 'truncate')} />
}
