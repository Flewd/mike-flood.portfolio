/** @jsx jsx */
import { Box, jsx, Container, Flex, Link, useColorMode } from "theme-ui"
import useEmiliaConfig from "../hooks/use-emilia-config"
import SocialMediaList from "./social-media-list"
import ColorModeToggle from "./colormode-toggle"
// @ts-ignore
import AboutMeMDX from "../texts/about-me"

const Footer = () => {
  const { showThemeAuthor } = useEmiliaConfig()
  const [colorMode, setColorMode] = useColorMode()
  const isDark = colorMode === `dark`
  const toggleColorMode = (e: any) => {
    e.preventDefault()
    setColorMode(isDark ? `light` : `dark`)
  }

  return (
    <Box
      as="footer"
      variant="layout.footer"
      sx={{
        background: `linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, ${isDark ? `0.35` : `0.15`}) 100%)`,
      }}
    >
      <Container>
        <div sx={{ display: `grid`, gridGap: 4, gridTemplateColumns: [`1fr`, `1fr`, `1fr`, `2fr 1fr`] }}>
          <div
            sx={{
              p: { mb: 0 },
              h2: {
                mt: 0,
                mb: 1,
              },
            }}
          >
      {showThemeAuthor && (
        <Container
          sx={{
           // display: `flex`,
            justifyContent: `center`,
            alignItems: `center`,
            color: `text`,
            fontWeight: `semibold`,
            a: { color: `text` },
            mt: 4,
          }}
        >
          
     {"Website developed by me using"}
     
          <Link
            aria-label="Link to the theme's GitHub repository"
            sx={{ ml: 2 }}
            href="https://reactjs.org/"
          >
            <b>ReactJS</b>
          </Link>

      {" and a"}

          <Link
            aria-label="Link to the theme's GitHub repository"
            sx={{ ml: 2 }}
            href="https://github.com/LekoArts/gatsby-themes/tree/master/themes/gatsby-theme-emilia"
          >
            <b>Gatsby Theme</b>
          </Link>

      {" by"}

          <Link aria-label="Link to the theme author's website" href="https://www.lekoarts.de/en">
          <b>{" LekoArts"}</b>
          </Link>
          {" as a template. Hosted from"}
          <Link
            aria-label="Link to the theme's GitHub repository"
            sx={{ ml: 2 }}
            href="https://github.com/Flewd/flewd.portfolio.code"
          >
            <b>{"GitHub Pages."}</b>
            </Link>
        </Container>
      )}
            {/* { <AboutMeMDX /> } */}
          </div>
          <Flex
            sx={{
              textAlign: [`center`, `center`, `center`, `right`],
              flexDirection: `column`,
              justifyContent: `space-between`,
            }}
          >
            <ColorModeToggle isDark={isDark} toggle={toggleColorMode} />
            <div sx={{ mt: [4, 4, 4, 0] }}>
              <div sx={{ a: { ml: [1, 1, 1, 2], mr: [1, 1, 1, 0] } }}>
                <SocialMediaList />
              </div>
              <div sx={{ color: `textMuted` }}>Copyright &copy; {new Date().getFullYear()}. All rights reserved.</div>
            </div>
          </Flex>
        </div>
      </Container>
    </Box>
  )
}

export default Footer
