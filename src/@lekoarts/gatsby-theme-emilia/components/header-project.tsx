/** @jsx jsx */
import React from "react"
import { Flex, jsx, Container, Heading, Styled } from "theme-ui"
import { animated, useSpring, config } from "react-spring"
import { useStaticQuery, graphql, Link } from "gatsby"
import { MDXRenderer } from "gatsby-plugin-mdx"
import Img from "gatsby-image"
import HeaderBackground from "./header-background"
import LeftArrow from "../assets/left-arrow"
import useEmiliaConfig from "../hooks/use-emilia-config"
import { ChildImageSharpFixed } from "../types"

type HeaderProjectProps = {
  title: string
  areas: string[]
  description?: string
  date: string
}

type AvatarStaticQuery = {
  file: {
    childImageSharp: ChildImageSharpFixed
  }
}

const HeaderProject = ({ title, areas, description = ``, date }: HeaderProjectProps) => {
  const { name } = useEmiliaConfig()
  const avatar = useStaticQuery<AvatarStaticQuery>(graphql`
    query {
      file(name: { eq: "avatar" }) {
        childImageSharp {
          fixed(width: 40, height: 40, quality: 100) {
            ...GatsbyImageSharpFixed_withWebp
          }
        }
      }
    }
  `)

  const titleProps = useSpring({
    config: config.slow,
    from: { opacity: 0, transform: `translate3d(0, -30px, 0)` },
    to: { opacity: 1, transform: `translate3d(0, 0, 0)` },
  })
  const backButtonProps = useSpring({
    config: config.slow,
    from: { opacity: 0, transform: `translate3d(-30px, 0, 0)` },
    to: { opacity: 1, transform: `translate3d(0, 0, 0)` },
  })
  const infoProps = useSpring({ config: config.slow, delay: 500, from: { opacity: 0 }, to: { opacity: 1 } })

  return (
    <Flex as="header" variant="layout.header">
      <HeaderBackground />
      <Container sx={{ textAlign: `center`, my: 4, zIndex: 10 }}>
        <animated.div style={backButtonProps}>
          <Link
            to="/"
            aria-label={`${name} - Back to homepage`}
            sx={{
              display: `flex`,
              alignItems: `center`,
              color: `text`,
              textDecoration: `none`,
              svg: {
                transition: `transform 0.25s cubic-bezier(0.455, 0.03, 0.515, 0.955)`,
              },
              "&:hover, &:focus": { svg: { transform: `translateX(-6px)` } },
            }}
          >
            <LeftArrow />
            <div
              sx={{
                overflow: `hidden`,
                borderRadius: `full`,
                width: `40px`,
                height: `40px`,
                display: `inline-block`,
                boxShadow: `md`,
                mx: 2,
              }}
            >
              {avatar?.file?.childImageSharp?.fixed && <Img fixed={avatar.file.childImageSharp.fixed} />}
            </div>
            <span sx={{ fontWeight: `medium` }}>{name}</span>
          </Link>
        </animated.div>
        <div sx={{ mt: 4, mb: [6, 6, 7] }}>
          <animated.div style={titleProps}>
            <Heading as="h1" variant="styles.h1">
              {title}
            </Heading>
          </animated.div>


  <animated.div style={{ maxWidth: '900px', /*border: '4px solid red', padding: '20px', */ overflow: 'hidden', }} sx={{ maxWidth: `900px`, mx: `auto`, mt: 5, p: { textAlign: `left` } }}>

<animated.div style={{ marginRight:'15px', float: 'left'}}>
  <embed
    src="https://www.youtube.com/embed/HlNOiWodqFY"
    //wmode="transparent"
    type="video/mp4"
    width="550px" height="310px"
    allow="autoplay; encrypted-media; picture-in-picture"
    allowfullscreen="true"
    title="Amplify Reading"
  />
</animated.div>

  <animated.div style={{textAlign:'left'}}>
              <animated.div style={infoProps}>
                {/* <Styled.p sx={{ mb: 0, mt: 4 }}>{date}</Styled.p> */}

                <ul>
                  {areas.map((area, index) => (
                    <React.Fragment key={area}>
                      <div style={{fontSize:21}}>
                      {area}
                      </div>
                      
                    </React.Fragment>
                  ))}
                   </ul>

                
              </animated.div>
            </animated.div>


      {/* <h3  style={{ marginLeft: '15px', display: 'block', margin: '2px 0 0 0'}}>Title</h3>
      <p style={{ marginLeft: '15px', display: 'block', margin: '2px 0 0 0'}}>Some Description</p> */}
    </animated.div>


    
  <animated.div style={infoProps}>
  {description && (
                <div sx={{ maxWidth: `900px`, mx: `auto`, mt: 5, p: { textAlign: `left` } }}>
                  <MDXRenderer>{description}</MDXRenderer>
                </div>
              )}
 </animated.div>

 
<div style={{flex: 2, flexDirection: 'row'}} >
          {/* <iframe
          src={"https://www.youtube.com/embed/HlNOiWodqFY"}
          title={"Title"}
          allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
          frameBorder="0"
          allowFullScreen
        /> */}



       

</div>





        </div>


      </Container>
    </Flex>
  )
}

export default HeaderProject
