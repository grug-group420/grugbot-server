#!/usr/bin/env node
/**
 * grugbot420 v4.2.0
 * A simple bot built the grug way
 * 
 * Zero dependencies. Zero complexity. Just works.
 * 
 * @license MIT
 * @author grug-group420
 */

const grugbot = {
    version: '4.2.0',
    
    // Grug wisdom collection
    wisdoms: [
        "Complexity very very bad. Simple good.",
        "Say no to complexity. Say yes to ship.",
        "Best code is no code. Second best is simple code.",
        "Clever code is enemy. Future grug not understand.",
        "Type system good. Help grug catch bug before user see.",
        "Test good, but simple code better than many test.",
        "Copy paste not always bad. Abstraction can be worse.",
        "Senior grug mass delete code. Junior grug add code.",
        "When bug appear, first ask: is this too complex?",
        "Premature optimization root of mass diff evil.",
        "Refactor when pain, not when bored.",
        "Naming hard. But good name worth many comment.",
        "If function need many argument, maybe do too much.",
        "Grug not mass diff. Grug small diff many time."
    ],

    // Ship messages
    shipMessages: [
        "🚀 SHIPPED! Code in production. Grug happy.",
        "🚀 Deploy complete. Time for club sandwich.",
        "🚀 git push origin main... Success!",
        "🚀 Ship now, fix later. This is the way.",
        "🚀 Code shipped! Zero downtime. Grug proud."
    ],

    // Jokes
    jokes: [
        "Why did grug cross road? To mass delete code on other side.",
        "How many grug to change lightbulb? One. But first ask: need lightbulb?",
        "Grug walk into bar. Barkeeper: 'Why long face?' Grug: 'Just review PR. 47 files changed.'",
        "What grug favorite band? The Delete Keys.",
        "How grug count? 0, 1, many, too many, refactor time."
    ],

    // Get random item from array
    random(arr) {
        return arr[Math.floor(Math.random() * arr.length)];
    },

    // Commands
    wisdom() {
        return `🦴 "${this.random(this.wisdoms)}"`;
    },

    ship() {
        return this.random(this.shipMessages);
    },

    joke() {
        return this.random(this.jokes);
    },

    think() {
        const thoughts = [
            "🧠 *processing*... no wait, grug no think. Grug DO.",
            "🧠 Grug think about simple solution. Answer: delete code.",
            "🧠 Brain hurt from complexity. Must simplify.",
            "🧠 if (works) { ship(); } else { console.log('here'); }"
        ];
        return this.random(thoughts);
    },

    debug() {
        return `🔍 Grug Debug Protocol™:
1. console.log("here 1")
2. console.log("here 2")
3. console.log("why this no work")
4. Take break. Drink water.
5. Find typo. Ship it.`;
    },

    complexity() {
        const level = Math.floor(Math.random() * 100);
        const status = level < 30 ? '🟢 GOOD' : level < 60 ? '🟡 OK' : level < 80 ? '🟠 WARNING' : '🔴 BAD';
        return `📊 Complexity: ${level}/100 ${status}`;
    },

    coffee() {
        const cups = Math.floor(Math.random() * 5) + 1;
        return `☕ Coffee: ${'☕'.repeat(cups)} (${cups} cups)`;
    },

    help() {
        return `🤖 grugbot420 v${this.version}

Commands:
  wisdom()      - Get grug wisdom
  ship()        - Ship some code
  joke()        - Tell a joke
  think()       - Grug thoughts
  debug()       - Debug protocol
  complexity()  - Check complexity
  coffee()      - Coffee status
  help()        - Show this help

Usage:
  const grugbot = require('grugbot420');
  console.log(grugbot.wisdom());

🦴 Complexity is the enemy.`;
    },

    // Process text commands (for CLI/chat)
    process(input) {
        const cmd = (input || '').toLowerCase().trim();
        const commands = {
            wisdom: () => this.wisdom(),
            ship: () => this.ship(),
            joke: () => this.joke(),
            think: () => this.think(),
            debug: () => this.debug(),
            complexity: () => this.complexity(),
            coffee: () => this.coffee(),
            help: () => this.help()
        };
        return commands[cmd] ? commands[cmd]() : this.help();
    }
};

// CLI mode
if (require.main === module) {
    const args = process.argv.slice(2);
    if (args.length === 0) {
        console.log(grugbot.help());
    } else {
        console.log(grugbot.process(args[0]));
    }
}

// Export for use as module
module.exports = grugbot;
