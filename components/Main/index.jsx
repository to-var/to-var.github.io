/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react'
import { useState } from 'react'
import Character from '../Character'
import debounce from 'lodash.debounce'

function Main(props) {
  const [{ left, top }, setState] = useState({ left: 0, top: 0 })
  const onMouseMove = debounce((e) => {
    e.persist()
    setState({
      left: e.clientX,
      top: e.clientY
    })
  }, 200)

  const styles = { minHeight: '100vh', color: 'blue', position: 'relative' }

  return (
    <main onMouseMove={onMouseMove} css={styles}>
      {/* Character sprite */}
      <Character left={left} top={top} sprites={props.sprites} />

      {/* Page contents */}
      {props.children}
    </main>
  )
}

export default Main;