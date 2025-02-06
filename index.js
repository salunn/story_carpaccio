import * as readline from "node:readline/promises";
import { stdin, stdout } from "node:process";

const rl = readline.createInterface({ input: stdin, output: stdout });
// Use `const answer = await rl.question('write something ')`
// rl.write to write stuff to terminal
// rl.close to cleanup
