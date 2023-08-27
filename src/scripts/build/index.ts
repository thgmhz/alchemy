import fs from 'fs'
import path from 'path'
import { ThemeSchema } from '~/@types/ThemeSchema'
import { config } from '~/config'

const { themesDir } = config

export async function build(theme: ThemeSchema) {
  if (!fs.existsSync(themesDir)) {
    await fs.promises.mkdir(themesDir, { recursive: true })
  }

  const fileName = `${theme.name.replace(' ', '-').toLocaleLowerCase()}.json`

  const themeBuffer = JSON.stringify(theme, null, 2)
  const themeFile = path.join(themesDir, fileName)

  await fs.promises.writeFile(themeFile, themeBuffer)

  console.log(`Successfully built "${fileName}" into file ${themeFile}`)
}
