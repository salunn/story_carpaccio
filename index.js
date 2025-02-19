import * as readline from "node:readline/promises";
import { stdin, stdout } from "node:process";
import * as calculator from './calculator.js';

const rl = readline.createInterface({input: stdin, output: stdout});
// Use `const answer = await rl.question('write something ')`
// Use rl.close() at the end

rl.close()