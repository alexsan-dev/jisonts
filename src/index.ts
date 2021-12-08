import * as parser from 'parser'

const code: string = 'int x = 0;'

const compileBtn = document.getElementById('runtimeBtn')
compileBtn?.addEventListener('click', () => {
  try {
    parser.parse(code)
  } catch {
    console.log("Error al analizar")
  }
})

export default {}
