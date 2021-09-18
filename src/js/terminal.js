"use strict"
const terminal = document.getElementById("terminal");
const website = document.getElementById("website-name");
const terminalTitle = document.getElementById("title");
const terminalTitleHighlight = document.getElementById("title-highlight");
const terminalSubtitle = document.getElementById("subtitle");
const copyright = document.getElementById("footer-text");

let promptText = config.pathText;

// These are for just to make my life easier
const prompt_ = (text) => {
    const html = document.createElement("span");
    html.className = "prompt current";
    html.textContent = text;
    return html;
}

const appendClass = (element, attrname = "", text = "") => {
    const htmlElement = document.createElement(element);
    htmlElement.className = attrname;
    htmlElement.textContent = text;
    return htmlElement;
}
//

// We want to prevent the string values of non letter/number characters being printed
const specialKeys = ["Control", "Shift", "Alt", "Tab", "CapsLock", "Backspace"];

// Allows typing
document.addEventListener("keypress", (event) => {
    // Because there will be a list of prompt spans, we want to always append to/modify the last one
    const prompts = document.querySelectorAll(".prompt");
    const _prompt = prompts[prompts.length - 1];

    if (event.key == "Enter") {
        event.preventDefault();
        _prompt.classList.remove("current");
        processCommand();
    }
    // Ignore special keys
    else if (specialKeys.includes(event.key)) {
        return;
    }
    else {
        _prompt.append(event.key);
        command += event.key;
    }
    handleCursor();
});

// Allows backspacing
document.addEventListener("keydown", (event) => {
    if (event.key == "Backspace") {
        event.preventDefault();
        if (command !== "" && command !== "\n") {
            erase(1);
        }
    }
});

const erase = (n) => {
    const prompts = document.querySelectorAll(".prompt");
    const _prompt = prompts[prompts.length - 1];

    command = command.slice(0, -n);
    _prompt.innerHTML = _prompt.innerHTML.slice(0, -n);
}

// Cursor handling
const handleCursor = () => {
    const _prompts = document.querySelectorAll(".prompt");
    const _prompt_ = _prompts[_prompts.length - 1];

    document.addEventListener("keydown", (e) => {
        _prompt_.classList.add("pause-cursor");
    })
    document.addEventListener("keyup", (e) => {
        _prompt_.classList.remove("pause-cursor");
    })
}

let command = "";
const defaultcommands = [
    {command: "clear", description: "Clears the terminal", arg: defaultCommands.clear},
    {command: "help", description: "Shows the commands you can use", arg: defaultCommands.help},
]
const processCommand = () => {
    let args = command.split(" ");
    let cmd = args[0];

    // Find the proper command from the input
    let input = defaultcommands.find(cmd => cmd.command === args[0]) || config.commands.find(cmd => cmd.command === args[0]);
    args.shift();

    // Print error message if the command isnt found
    if (input == null && command != "") {
        let commandhighlight = appendClass("span", "commandhighlight", `${cmd}`);
        terminal.append(appendClass("span", "error", `Command `));

        let errors = document.querySelectorAll(".error");
        let error = errors[errors.length - 1];

        error.append(commandhighlight);
        error.append(" not found.");
        terminal.append(appendClass("span", "output", `Type "help" for a list of available commands.`));
    }
    else {
        // Execute the command
        if (command != "")
            input.arg(args);
    }

    terminal.append(prompt_(promptText));
    command = "";
}

//TODO: Technically I could move this to another file (minus the prompt)...meh
const init = () => {
    website.textContent = config.websiteName;

    terminalTitle.innerText = config.terminalTitle;
    terminalTitle.append(terminalTitleHighlight);
    terminalTitleHighlight.textContent = ` ${config.terminalTitleHighlight}`;

    terminalSubtitle.textContent = config.terminalSubtitle;
    copyright.textContent = config.copyrightText;

    // Ah yes, the only important part so you know when the page loaded lol
    terminal.append(prompt_(promptText));
}

init();