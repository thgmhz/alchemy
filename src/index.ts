import { alchemy } from '~/variants/alchemy'
import { build } from './scripts/build'
import { pressEnterToExit } from './util/press-enter-to-exit'

async function run() {
  await build(alchemy)

  if (process.env.DEBUG_VSCODE) {
    pressEnterToExit() // Hold the process alive
  }
}

run()
