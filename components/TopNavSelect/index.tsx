import * as React from "react";
import * as Select from "@radix-ui/react-select";
import classnames from "classnames";
import { useRouter } from "next/router"; // For navigation
import {
  CheckIcon,
  ChevronDownIcon,
  ChevronUpIcon,
} from "@radix-ui/react-icons";
import { items } from "../SideNav";
import styles from "./styles.module.css";

interface Item {
  id: number;
  title: string;
  link?: string;
  type: "route" | "category";
  children?: Item[]; // Optional for categories
}

const TopNavSelect = () => {
  const router = useRouter();

  // Function to handle navigation
  const handleSelect = (value: string) => {
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
                  <SelectItem key={item.id} value={item.link!}>
                    {item.title}
                  </SelectItem>
                ) : (
                  // For categories with children
                  <Select.Group key={item.id}>
                    <Select.Label className={styles.SelectLabel}>
                      {item.title}
                    </Select.Label>
                    {item.children?.map((child) => (
                      <SelectItem key={child.link!} value={child.link!}>
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

// Type for SelectItem props
interface SelectItemProps {
  children: React.ReactNode;
  className?: string;
  value: string;
}

const SelectItem = React.forwardRef<HTMLDivElement, SelectItemProps>(
  ({ children, className, value, ...props }, forwardedRef) => {
    return (
      <Select.Item
        className={classnames(styles.SelectItem, className)}
        value={value}
        ref={forwardedRef}
        {...props}>
        <Select.ItemText>{children}</Select.ItemText>
        <Select.ItemIndicator className={styles.SelectItemIndicator}>
          <CheckIcon />
        </Select.ItemIndicator>
      </Select.Item>
    );
  }
);

export default TopNavSelect;
