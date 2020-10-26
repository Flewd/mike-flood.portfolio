import React from "react"
import { Global } from "@emotion/core"
import Footer from "./footer"
import SEO from "./seo"

import { MDXProvider } from "@mdx-js/react"
import VideoHeader from "./video-header"

const shortcodes = { VideoHeader }

type LayoutProps = { children: React.ReactNode }

const Layout = ({ children }: LayoutProps) => (
  <React.Fragment>
   
    <Global
      styles={(theme) => ({
        "*": {
          boxSizing: `inherit`,
        },
        html: {
          fontSize: `18px`,
          WebkitTextSizeAdjust: `100%`,
        },
        img: {
          borderStyle: `none`,
        },
        pre: {
          fontFamily: `monospace`,
          fontSize: `1em`,
        },
        "[hidden]": {
          display: `none`,
        },
        "::selection": {
          background: theme.colors.text,
          color: theme.colors.background,
        },
        "@media(max-width: 600px)": {
          html: {
            fontSize: `16px`,
          },
        },
      })}
    />
    <SEO />
     <MDXProvider components={shortcodes}>{children}</MDXProvider>
    <Footer />
  </React.Fragment>
)

export default Layout
