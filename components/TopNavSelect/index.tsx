import * as React from "react";
import * as Select from "@radix-ui/react-select";
import classnames from "classnames";
import { useRouter } from "next/router"; // For navigation
import {
  CheckIcon,
  ChevronDownIcon,
  ChevronUpIcon,
} from "@radix-ui/react-icons";
import styles from "./styles.module.css";

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

const TopNavSelect = () => {
  const router = useRouter();

  // Function to handle navigation
  const handleSelect = (value) => {
    router.push(value);
  };

  return (
    <>
      <Select.Root onValueChange={handleSelect}>
        <Select.Trigger
          className={styles.SelectTrigger}
          aria-label="Navigation">
          <Select.Value placeholder="Select a page..." />
          <Select.Icon className={styles.SelectIcon}>
            <ChevronDownIcon />
          </Select.Icon>
        </Select.Trigger>
        <Select.Portal>
          <Select.Content className={styles.SelectContent}>
            <Select.ScrollUpButton className={styles.SelectScrollButton}>
              <ChevronUpIcon />
            </Select.ScrollUpButton>
            <Select.Viewport className={styles.SelectViewport}>
              {/* Render Select Items */}
              {items.map((item) =>
                item.type === "route" ? (
                  // For individual routes
                  <SelectItem key={item.id} value={item.link}>
                    {item.title}
                  </SelectItem>
                ) : (
                  // For categories with children
                  <Select.Group key={item.id}>
                    <Select.Label className={styles.SelectLabel}>
                      {item.title}
                    </Select.Label>
                    {item.children.map((child) => (
                      <SelectItem key={child.link} value={child.link}>
                        {child.title}
                      </SelectItem>
                    ))}
                  </Select.Group>
                )
              )}
            </Select.Viewport>
            <Select.ScrollDownButton className={styles.SelectScrollButton}>
              <ChevronDownIcon />
            </Select.ScrollDownButton>
          </Select.Content>
        </Select.Portal>
      </Select.Root>
    </>
  );
};

// Reusable SelectItem component
const SelectItem = React.forwardRef(
  ({ children, className, ...props }, forwardedRef) => {
    return (
      <Select.Item
        className={classnames(styles.SelectItem, className)}
        {...props}
        ref={forwardedRef}>
        <Select.ItemText>{children}</Select.ItemText>
        <Select.ItemIndicator className={styles.SelectItemIndicator}>
          <CheckIcon />
        </Select.ItemIndicator>
      </Select.Item>
    );
  }
);

export default TopNavSelect;
