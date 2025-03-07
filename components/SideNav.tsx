import React, { useState } from "react";
import { useRouter } from "next/router";
import * as Collapsible from "@radix-ui/react-collapsible";
import {
  ChevronRightIcon,
  ChevronDownIcon,
  TriangleLeftIcon,
  TriangleRightIcon,
} from "@radix-ui/react-icons";
import Link from "next/link";
import ThemeSwitcher from "./ThemeSwitcher";

type Item =
  | {
      id: number;
      title: string;
      link: string;
      type: string;
      children?: undefined;
    }
  | {
      id: number;
      title: string;
      type: string;
      children: {
        title: string;
        link: string;
      }[];
      link?: undefined;
    };

export const items = [
  {
    id: 1,
    title: "Introduction",
    link: "/introduction",
    type: "route",
  },
  {
    id: 2,
    title: "Headers",
    link: "/headers",
    type: "route",
  },
  {
    id: 3,
    title: "Errors",
    link: "/errors",
    type: "route",
  },
  {
    id: 4,
    title: "Endpoints",
    type: "category",
    children: [
      {
        title: "Get DetailsBy CIINo",
        link: "/endpoints/get-detailsby-ciino",
      },
      {
        title: "Validate SSO Token",
        link: "/endpoints/validate-sso-token",
      },
      {
        title: "Authenticate In ABC",
        link: "/endpoints/authenticate-in-abc",
      },
      {
        title: "ABC CommonUser Check",
        link: "/endpoints/abc-commonuser-check",
      },
      {
        title: "User Logout",
        link: "/endpoints/user-logout",
      },
      {
        title: "Auth User Validate OTP",
        link: "/endpoints/auth-user-validate-otp",
      },
      {
        title: "Get CIINo",
        link: "/endpoints/get-ciino",
      },
      {
        title: "Forgot UserName",
        link: "/endpoints/forgot-username",
      },
      {
        title: "Update ContactDetails",
        link: "/endpoints/update-contactdetails",
      },
      {
        title: "Send Message",
        link: "/endpoints/send-message",
      },
      {
        title: "Generate SSO Token",
        link: "/endpoints/generate-sso-token",
      },
      {
        title: "Insert ABC UserID",
        link: "/endpoints/insert-abc-userid",
      },
      {
        title: "Map LOB Product",
        link: "/endpoints/map-lob-product",
      },
      {
        title: "Get LOBWise Product Details ",
        link: "/endpoints/get-lobwise-productdetails",
      },
      {
        title: "Capture App DeviceType ",
        link: "/endpoints/capture-app-devicedata",
      },
      {
        title: "Check LoginId For Mobile And Email ",
        link: "/endpoints/check-loginid-for-mobileandemail",
      },
      {
        title: "ABC Validate LoginID ",
        link: "/endpoints/abc-validate-loginid",
      },
    ],
  },
];

const LeafLink = ({ link, title }: { link: string; title: string }) => {
  const router = useRouter();

  return (
    <button
      onClick={() => router.push(link)}
      className={`leaf-link ${
        router.asPath === link ? "active-leaf-link" : ""
      }`}>
      {title}
      <style jsx>{`
        .leaf-link {
          font-size: 14px;
          font-weight: 500;
          padding: 6px 8px;
          border-radius: 4px;
          border: 0;
          outline: 0;
          background: transparent;
          color: var(--text-color-secondary);
          text-align: start;
          width: 100%;
          cursor: pointer;
        }

        .active-leaf-link {
          color: var(--text-color-active) !important;
          background: var(--background-active);
        }

        .active-leaf-link:hover {
          color: var(--text-color-secondary) !important;
        }
      `}</style>
    </button>
  );
};

const Accordion = ({
  title,
  children,
}: {
  title: string;
  children: { link: string; title: string }[];
}) => {
  const [isExpanded, setIsExpanded] = useState(true);

  const toggleChevron = () => setIsExpanded((prev) => !prev);

  return (
    <Collapsible.Root
      className="collapsible"
      open={isExpanded}
      onOpenChange={toggleChevron}>
      <Collapsible.Trigger asChild>
        <div className="trigger" tabIndex={0}>
          <span>{title}</span>
          <span>
            {isExpanded ? (
              <ChevronDownIcon width={16} height={16} />
            ) : (
              <ChevronRightIcon width={16} height={16} />
            )}
          </span>
        </div>
      </Collapsible.Trigger>
      <Collapsible.Content>
        <div className="content">
          {children.map((child) => (
            <LeafLink key={child.link} link={child.link} title={child.title} />
          ))}
        </div>
      </Collapsible.Content>
      <style jsx>{`
        .collapsible {
          margin: 0;
        }

        .trigger {
          cursor: pointer;
          font-weight: 500;
          font-size: 14px;
          color: var(--text-color-secondary);
          padding: 6px 8px;
          display: flex;
          align-items: center;
          justify-content: space-between;
        }

        .content {
          padding-left: 10px;
          display: flex;
          flex-direction: column;
          row-gap: 4px;
        }
      `}</style>
    </Collapsible.Root>
  );
};

export function SideNav() {
  return (
    <aside className="sidebar">
      <header className="sidebar-header">
        <Link href={"/"} className="banner-link">
          <span className="banner">ABC </span> <span>Doc</span>
        </Link>
        <ThemeSwitcher />
      </header>
      <div className="links-container">
        {items.map((item) => (
          <div className="flex column" key={item.id}>
            {item.type === "route" ? (
              <LeafLink link={item.link} title={item.title} />
            ) : (
              <Accordion title={item.title} children={item.children} />
            )}
          </div>
        ))}
      </div>
      <style jsx>
        {`
          .sidebar {
            position: fixed;
            overflow-y: auto;
            padding: 0 16px;
            width: 260px;
            z-index: 100;
            top: 0;
            left: 0;
            height: 100svh;
            background: var(--background-page);
            border-right: 1px solid var(--border-color-primary);
          }

          .sidebar-header {
            height: 56px;
            padding: 16px 8px;
            margin-bottom: 16px;
            display: flex;
            justify-content: space-between;
            align-items: center;
          }

          .links-container {
            display: flex;
            flex-direction: column;
            row-gap: 4px;
          }
          .banner-link {
            text-decoration: none;
            color: var(--text-color-primary);
          }
          .banner {
            font-size: 20px;
            font-weight: bold;
            color: var(--text-color-active);
          }
          @media (max-width: 768px) {
            /* Hides the sidebar on tablet and mobile */
            .sidebar {
              display: none;
            }
          }
        `}
      </style>
    </aside>
  );
}
