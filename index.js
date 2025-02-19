import * as readline from "node:readline/promises";
import { stdin, stdout } from "node:process";

const rl = readline.createInterface({ input: stdin, output: stdout });
// Use `const answer = await rl.question('write something ')`
// `await rl.write('stuff')` to write stuff to terminal
// `await rl.close()` to cleanup
