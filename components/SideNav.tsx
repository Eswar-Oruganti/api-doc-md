import React, { useState } from "react";
import { useRouter } from "next/router";
import * as Collapsible from "@radix-ui/react-collapsible";
import { ChevronRightIcon, ChevronDownIcon } from "@radix-ui/react-icons";

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

const items = [
  {
    id: 1,
    title: "Introduction",
    link: "/introduction",
    type: "route",
  },
  {
    id: 2,
    title: "Getting Started",
    link: "/getting-started",
    type: "route",
  },
  {
    id: 3,
    title: "Authentication",
    link: "/authentication",
    type: "route",
  },
  {
    id: 4,
    title: "Endpoints",
    type: "category",
    children: [
      {
        title: "User Management",
        link: "/endpoints/user-management",
      },
      {
        title: "Data Retrieval",
        link: "/endpoints/data-retrieval",
      },
      {
        title: "Webhooks",
        link: "/endpoints/webhooks",
      },
    ],
  },
  {
    id: 5,
    title: "Guides",
    type: "category",
    children: [
      {
        title: "Error Handling",
        link: "/guides/error-handling",
      },
      {
        title: "Pagination",
        link: "/guides/pagination",
      },
    ],
  },
  {
    id: 7,
    title: "FAQs",
    link: "/faqs",
    type: "route",
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
          padding: 6px 8px;
          border-radius: 4px;
          border: 0;
          outline: 0;
          background: transparent;
          color: #585858;
          text-align: start;
          width: 100%;
        }

        .active-leaf-link {
          color: #cb1d31 !important;
          background: #fae8ea;
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
        }

        .trigger {
          cursor: pointer;
          font-weight: 500;
          font-size: 14px;
          color: #585858;
          padding: 6px 8px;
          display: flex;
          align-items: center;
          justify-content: space-between;
        }

        .content {
          padding-left: 10px;
          display: flex;
          flex-direction: column;
        }
      `}</style>
    </Collapsible.Root>
  );
};

export function SideNav() {
  return (
    <aside className="sidebar">
      <header className="sidebar-header"></header>
      {items.map((item) => (
        <div className="flex column" key={item.id}>
          {item.type === "route" ? (
            <LeafLink link={item.link} title={item.title} />
          ) : (
            <Accordion title={item.title} children={item.children} />
          )}
        </div>
      ))}
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
            border-right: 1px solid gray;
            background: white;
          }

          .sidebar-header {
            height: 56px;
            padding: 8px 0;
          }
        `}
      </style>
    </aside>
  );
}
