import * as cheerio from 'cheerio/lib/slim'

export const prepareAnimatableContent = (input: string): string => {
  const $ = cheerio.load(input, null, false)

  $.root()
    .find('*')
    .contents()
    .filter(function () {
      return this.nodeType === 3
    })
    .each(function() {
      let output = ''
      for(let character of $(this).text().split('')) {
        output += character !== ' ' ? `<span class="character-animatable">${character}</span>` : character
      }

      $(this).replaceWith($(output))
    })

  return $.root().html() as string
}


