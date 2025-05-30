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
  ChevronDownIcon,
  ChevronUpIcon,
  Cog8ToothIcon,
  LightBulbIcon,
  PlusIcon,
  ShieldCheckIcon,
  UserIcon,
} from '@heroicons/react/16/solid'
import {
  Cog6ToothIcon,
  HomeIcon,
  InboxIcon,
  MagnifyingGlassIcon,
  MegaphoneIcon,
  QuestionMarkCircleIcon,
  SparklesIcon,
  Square2StackIcon,
  TicketIcon,
} from '@heroicons/react/20/solid'

export function Sidebar({ children }: { children: React.ReactNode }) {
  return (
    <div className="w-64 border-r border-zinc-200 bg-white dark:border-zinc-800 dark:bg-zinc-900">
      {children}
    </div>
  )
}

export function SidebarHeader({ children }: { children: React.ReactNode }) {
  return <div className="border-b border-zinc-200 p-4 dark:border-zinc-800">{children}</div>
}

export function SidebarBody({ children }: { children: React.ReactNode }) {
  return <div className="flex flex-col gap-4 p-4">{children}</div>
}

export function SidebarFooter({ children }: { children: React.ReactNode }) {
  return <div className="border-t border-zinc-200 p-4 dark:border-zinc-800">{children}</div>
}

export function SidebarSection({ children, className = '' }: { children: React.ReactNode; className?: string }) {
  return <div className={`flex flex-col gap-1 ${className}`}>{children}</div>
}

export function SidebarHeading({ children }: { children: React.ReactNode }) {
  return <div className="px-2 text-xs font-semibold text-zinc-500 dark:text-zinc-400">{children}</div>
}

export function SidebarItem({ children, href, className = '' }: { children: React.ReactNode; href?: string; className?: string }) {
  const Component = href ? Link : 'button'
  return (
    <Component
      href={href}
      className={`flex items-center gap-3 rounded-lg px-2 py-1.5 text-sm text-zinc-600 hover:bg-zinc-100 hover:text-zinc-900 dark:text-zinc-400 dark:hover:bg-zinc-800 dark:hover:text-white ${className}`}
    >
      {children}
    </Component>
  )
}

export function SidebarLabel({ children }: { children: React.ReactNode }) {
  return <span className="flex-1">{children}</span>
}

export function SidebarSpacer() {
  return <div className="flex-1" />
}

export function MainSidebar() {
  return (
    <Sidebar>
      <SidebarHeader>
        <Dropdown>
          <DropdownButton as={SidebarItem} className="lg:mb-2.5">
            <Avatar src="/tailwind-logo.svg" />
            <SidebarLabel>SaaS Admin</SidebarLabel>
            <ChevronDownIcon />
          </DropdownButton>
          <DropdownMenu className="min-w-80 lg:min-w-64" anchor="bottom start">
            <DropdownItem href="/settings">
              <Cog8ToothIcon />
              <DropdownLabel>Settings</DropdownLabel>
            </DropdownItem>
            <DropdownDivider />
            <DropdownItem href="/teams/create">
              <PlusIcon />
              <DropdownLabel>New team&hellip;</DropdownLabel>
            </DropdownItem>
          </DropdownMenu>
        </Dropdown>
        <SidebarSection className="max-lg:hidden">
          <SidebarItem href="/search">
            <MagnifyingGlassIcon />
            <SidebarLabel>Search</SidebarLabel>
          </SidebarItem>
          <SidebarItem href="/inbox">
            <InboxIcon />
            <SidebarLabel>Inbox</SidebarLabel>
          </SidebarItem>
        </SidebarSection>
      </SidebarHeader>
      <SidebarBody>
        <SidebarSection>
          <SidebarItem href="/">
            <HomeIcon />
            <SidebarLabel>Home</SidebarLabel>
          </SidebarItem>
          <SidebarItem href="/events">
            <Square2StackIcon />
            <SidebarLabel>Events</SidebarLabel>
          </SidebarItem>
          <SidebarItem href="/orders">
            <TicketIcon />
            <SidebarLabel>Orders</SidebarLabel>
          </SidebarItem>
          <SidebarItem href="/settings">
            <Cog6ToothIcon />
            <SidebarLabel>Settings</SidebarLabel>
          </SidebarItem>
          <SidebarItem href="/broadcasts">
            <MegaphoneIcon />
            <SidebarLabel>Broadcasts</SidebarLabel>
          </SidebarItem>
        </SidebarSection>
        <SidebarSpacer />
        <SidebarSection>
          <SidebarItem href="/support">
            <QuestionMarkCircleIcon />
            <SidebarLabel>Support</SidebarLabel>
          </SidebarItem>
          <SidebarItem href="/changelog">
            <SparklesIcon />
            <SidebarLabel>Changelog</SidebarLabel>
          </SidebarItem>
        </SidebarSection>
      </SidebarBody>
      <SidebarFooter className="max-lg:hidden">
        <Dropdown>
          <DropdownButton as={SidebarItem}>
            <span className="flex min-w-0 items-center gap-3">
              <Avatar src="/profile-photo.jpg" className="size-10" square alt="" />
              <span className="min-w-0">
                <span className="block truncate text-sm/5 font-medium text-zinc-950 dark:text-white">Admin</span>
                <span className="block truncate text-xs/5 font-normal text-zinc-500 dark:text-zinc-400">
                  admin@example.com
                </span>
              </span>
            </span>
            <ChevronUpIcon />
          </DropdownButton>
          <DropdownMenu className="min-w-64" anchor="top start">
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
      </SidebarFooter>
    </Sidebar>
  )
}
