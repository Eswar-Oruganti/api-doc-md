import React from "react";
import Head from "next/head";
import Link from "next/link";
import { ThemeProvider } from "next-themes";

import { SideNav, TopNav } from "../components";

import "prismjs";
// Import other Prism themes here
import "prismjs/components/prism-bash.min";
import "prism-themes/themes/prism-duotone-sea.css";
import "../public/globals.css";
import type { AppProps } from "next/app";
import type { MarkdocNextJsPageProps } from "@markdoc/next.js";

const TITLE = "ABC Docs";
const DESCRIPTION = "Documentation of APIs";

function collectHeadings(node, sections = []) {
  if (node) {
    if (node.name === "Heading") {
      const title = node.children[0];

      if (typeof title === "string") {
        sections.push({
          ...node.attributes,
          title,
        });
      }
    }

    if (node.children) {
      for (const child of node.children) {
        collectHeadings(child, sections);
      }
    }
  }

  return sections;
}

export type MyAppProps = MarkdocNextJsPageProps;

export default function MyApp({ Component, pageProps }: AppProps<MyAppProps>) {
  const { markdoc } = pageProps;

  let title = TITLE;
  let description = DESCRIPTION;
  if (markdoc) {
    if (markdoc.frontmatter.title) {
      title = markdoc.frontmatter.title;
    }
    if (markdoc.frontmatter.description) {
      description = markdoc.frontmatter.description;
    }
  }

  const toc = pageProps.markdoc?.content
    ? collectHeadings(pageProps.markdoc.content)
    : [];

  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="referrer" content="strict-origin" />
        <meta name="title" content={title} />
        <meta name="description" content={description} />
        <link rel="shortcut icon" href="/favicon.ico" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <ThemeProvider
        themes={["light", "dark"]}
        enableSystem={false}
        defaultTheme="dark">
        <>
          <TopNav>
            <Link href="/docs">Docs</Link>
          </TopNav>
          <SideNav />

          <main className="main">
            <Component {...pageProps} />
          </main>
        </>
      </ThemeProvider>

      <style jsx>
        {`
          .main {
            overflow: auto;
            margin-top: 56px;
            flex-grow: 1;
            font-size: 16px;
            padding: 0 2rem 2rem;
            margin-left: 260px;
          }
          @media (max-width: 768px) {
            .main {
              margin-left: 0 !important;
            }
          }
        `}
      </style>
    </>
  );
}
