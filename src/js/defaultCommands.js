const clear = () => {
    terminal.textContent = "";
}

const help = () => {
    let output = "";
    for (const command of defaultcommands) {
        output += `${command.command}   -   ${command.description}\n`;
    }
    for (const command of config.commands) {
        output += `${command.command}   -   ${command.description}\n`;
    }
    terminal.append(appendClass("span", "output", output));
}

let defaultCommands = {
    clear,
    help
}
