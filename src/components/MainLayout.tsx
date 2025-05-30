import { Avatar } from '@/components/avatar'
import {
  Dropdown,
  DropdownButton,
  DropdownDivider,
  DropdownItem,
  DropdownLabel,
  DropdownMenu,
} from '@/components/dropdown'
import { Navbar, NavbarItem, NavbarSection, NavbarSpacer } from '@/components/navbar'
import {
  Sidebar,
  SidebarBody,
  SidebarFooter,
  SidebarHeader,
  SidebarHeading,
  SidebarItem,
  SidebarLabel,
  SidebarSection,
  SidebarSpacer,
} from '@/components/sidebar'
import { SidebarLayout } from '@/components/sidebar-layout'
import {
  ArrowRightStartOnRectangleIcon,
  ChevronDownIcon,
  ChevronUpIcon,
  Cog8ToothIcon,
  LightBulbIcon,
  PlusIcon,
  ShieldCheckIcon,
  UserIcon,
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

interface MainLayoutProps {
  children: React.ReactNode;
}

export function MainLayout({ children }: MainLayoutProps) {
  return (
    <SidebarLayout
      navbar={
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
                <Avatar src="/profile-photo.svg" square />
              </DropdownButton>
              <DropdownMenu className="min-w-64" anchor="bottom end">
                <DropdownItem href="/my-profile">
                  <UserIcon className="size-5" />
                  <DropdownLabel>My profile</DropdownLabel>
                </DropdownItem>
                <DropdownItem href="/settings">
                  <Cog8ToothIcon className="size-5" />
                  <DropdownLabel>Settings</DropdownLabel>
                </DropdownItem>
                <DropdownDivider />
                <DropdownItem href="/privacy-policy">
                  <ShieldCheckIcon className="size-5" />
                  <DropdownLabel>Privacy policy</DropdownLabel>
                </DropdownItem>
                <DropdownItem href="/share-feedback">
                  <LightBulbIcon className="size-5" />
                  <DropdownLabel>Share feedback</DropdownLabel>
                </DropdownItem>
                <DropdownDivider />
                <DropdownItem href="/logout">
                  <ArrowRightStartOnRectangleIcon className="size-5" />
                  <DropdownLabel>Sign out</DropdownLabel>
                </DropdownItem>
              </DropdownMenu>
            </Dropdown>
          </NavbarSection>
        </Navbar>
      }
      sidebar={
        <Sidebar>
          <SidebarHeader>
            <Dropdown>
              <DropdownButton as={SidebarItem} className="lg:mb-2.5">
                <Avatar src="/tailwind-logo.svg" />
                <SidebarLabel>SaaS Admin</SidebarLabel>
                <ChevronDownIcon className="size-5" />
              </DropdownButton>
              <DropdownMenu className="min-w-80 lg:min-w-64" anchor="bottom start">
                <DropdownItem href="/settings">
                  <Cog8ToothIcon className="size-5" />
                  <DropdownLabel>Settings</DropdownLabel>
                </DropdownItem>
                <DropdownDivider />
                <DropdownItem href="/teams/create">
                  <PlusIcon className="size-5" />
                  <DropdownLabel>New team&hellip;</DropdownLabel>
                </DropdownItem>
              </DropdownMenu>
            </Dropdown>
            <SidebarSection className="max-lg:hidden">
              <SidebarItem href="/search">
                <MagnifyingGlassIcon className="size-5" />
                <SidebarLabel>Search</SidebarLabel>
              </SidebarItem>
              <SidebarItem href="/inbox">
                <InboxIcon className="size-5" />
                <SidebarLabel>Inbox</SidebarLabel>
              </SidebarItem>
            </SidebarSection>
          </SidebarHeader>
          <SidebarBody>
            <SidebarSection>
              <SidebarItem href="/">
                <HomeIcon className="size-5" />
                <SidebarLabel>Dashboard</SidebarLabel>
              </SidebarItem>
              <SidebarItem href="/analytics">
                <Square2StackIcon className="size-5" />
                <SidebarLabel>Analytics</SidebarLabel>
              </SidebarItem>
              <SidebarItem href="/orders">
                <TicketIcon className="size-5" />
                <SidebarLabel>Orders</SidebarLabel>
              </SidebarItem>
              <SidebarItem href="/settings">
                <Cog6ToothIcon className="size-5" />
                <SidebarLabel>Settings</SidebarLabel>
              </SidebarItem>
              <SidebarItem href="/notifications">
                <MegaphoneIcon className="size-5" />
                <SidebarLabel>Notifications</SidebarLabel>
              </SidebarItem>
            </SidebarSection>
            <SidebarSpacer />
            <SidebarSection>
              <SidebarItem href="/support">
                <QuestionMarkCircleIcon className="size-5" />
                <SidebarLabel>Support</SidebarLabel>
              </SidebarItem>
              <SidebarItem href="/changelog">
                <SparklesIcon className="size-5" />
                <SidebarLabel>Changelog</SidebarLabel>
              </SidebarItem>
            </SidebarSection>
          </SidebarBody>
          <SidebarFooter className="max-lg:hidden">
            <Dropdown>
              <DropdownButton as={SidebarItem}>
                <span className="flex min-w-0 items-center gap-3">
                  <Avatar src="/profile-photo.svg" className="size-10" square alt="" />
                  <span className="min-w-0">
                    <span className="block truncate text-sm/5 font-medium text-zinc-950 dark:text-white">Admin User</span>
                    <span className="block truncate text-xs/5 font-normal text-zinc-500 dark:text-zinc-400">
                      admin@example.com
                    </span>
                  </span>
                </span>
                <ChevronUpIcon className="size-5" />
              </DropdownButton>
              <DropdownMenu className="min-w-64" anchor="top start">
                <DropdownItem href="/my-profile">
                  <UserIcon className="size-5" />
                  <DropdownLabel>My profile</DropdownLabel>
                </DropdownItem>
                <DropdownItem href="/settings">
                  <Cog8ToothIcon className="size-5" />
                  <DropdownLabel>Settings</DropdownLabel>
                </DropdownItem>
                <DropdownDivider />
                <DropdownItem href="/privacy-policy">
                  <ShieldCheckIcon className="size-5" />
                  <DropdownLabel>Privacy policy</DropdownLabel>
                </DropdownItem>
                <DropdownItem href="/share-feedback">
                  <LightBulbIcon className="size-5" />
                  <DropdownLabel>Share feedback</DropdownLabel>
                </DropdownItem>
                <DropdownDivider />
                <DropdownItem href="/logout">
                  <ArrowRightStartOnRectangleIcon className="size-5" />
                  <DropdownLabel>Sign out</DropdownLabel>
                </DropdownItem>
              </DropdownMenu>
            </Dropdown>
          </SidebarFooter>
        </Sidebar>
      }
    >
      {children}
    </SidebarLayout>
  )
} 