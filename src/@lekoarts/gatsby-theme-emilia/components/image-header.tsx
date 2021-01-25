/** @jsx jsx */
import { Box, jsx, useColorMode } from "theme-ui"
import { animated, useSpring, config } from "react-spring"
import useEmiliaConfig from "../hooks/use-emilia-config"
import Img from "gatsby-image"

// @ts-ignore
import React from "react"

type ImageHeaderProps = {
  imageUrl: string
  imageTitle: string
  textItems: string[]
}

const ImageHeader = ({ imageUrl, imageTitle, textItems }: ImageHeaderProps) => {
  const { showThemeAuthor } = useEmiliaConfig()
  const [colorMode, setColorMode] = useColorMode()
  const isDark = colorMode === `dark`
  const toggleColorMode = (e: any) => {
    e.preventDefault()
    setColorMode(isDark ? `light` : `dark`)
  }


  const infoProps = useSpring({ config: config.slow, delay: 500, from: { opacity: 0 }, to: { opacity: 1 } })

  return (
   

    <animated.div style={{ maxWidth: '900px', /*border: '4px solid red', padding: '20px', */ overflow: 'hidden', }} sx={{ maxWidth: `900px`, mx: `auto`, mt: 5, p: { textAlign: `left` } }}>


<animated.div style={{ marginRight:'15px', float: 'left'}}>
<img src={process.env.PUBLIC_URL   + imageUrl} />
</animated.div>



  <animated.div style={{textAlign:'left'}}>
              <animated.div style={infoProps}>
                {/* <Styled.p sx={{ mb: 0, mt: 4 }}>{date}</Styled.p> */}

                <ul>
                  {textItems.map((item, index) => (
                    <React.Fragment key={item}>
                      <div style={{fontSize:21}}>
                      {item}
                      </div>
                      
                    </React.Fragment>
                  ))}
                   </ul>

                
              </animated.div>
            </animated.div>


      {/* <h3  style={{ marginLeft: '15px', display: 'block', margin: '2px 0 0 0'}}>Title</h3>
      <p style={{ marginLeft: '15px', display: 'block', margin: '2px 0 0 0'}}>Some Description</p> */}
      </animated.div>

  )
}

export default ImageHeader
