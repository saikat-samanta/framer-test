'use client'

import { motion } from 'framer-motion'
import { prepareAnimatableContent } from 'lib/utils/prepareAnimatableContent'
import asReact, { HTMLReactParserOptions, Element, domToReact } from 'html-react-parser'
import { useState } from 'react'

const variants = {
  visible: { color: '#222' },
  hidden: { color: '#fff' },
}

const parserOptions: HTMLReactParserOptions = {
  replace: domNode => {
    if (domNode instanceof Element && domNode.attribs.class === 'character-animatable') {

      return <motion.span
        variants={variants}
        transition={{
          delay: Math.random() * 0.5,
          duration: Math.random(),
          easing: 'circIn',
        }}
      >
        {domToReact(domNode.children)}
      </motion.span>
    }
  }
}

type LoadablePageProps = {
  rawContent: string,
  wrappedContent?: string,
}

export const LoadablePage: React.FC<LoadablePageProps> = ({ rawContent, wrappedContent }) => {
  const [animationComplete, setAnimationComplete] = useState<boolean>(false)

  return <>{wrappedContent && !animationComplete ?
    <motion.div
      initial="hidden"
      animate="visible"
      transition={{ duration: 0 }}
      onAnimationComplete={() => { setAnimationComplete(true) }}>
        {asReact(wrappedContent, parserOptions)}
    </motion.div> :
    <div dangerouslySetInnerHTML={{ __html: rawContent }} />}</>
}
