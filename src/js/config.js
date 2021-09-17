let config = {
    // The title of your website
    websiteName: "Portfolio Name",

    // You can put anyone as the author. Whos going to notice...
    author : "Author",

    // The welcome text basically
    terminalTitle: "Welcome to",
        // If you want a portion of the title to be highlighted you can do that here. It will be added at the end of the title
        terminalTitleHighlight: "my portfolio!",

    // You can put stuff here. Subtitley!
    terminalSubtitle: `Type "help" for the list of available commands.`,

    // Website name and author name by default (remember put a space at the end)
    pathText: "author@websitename~$ ",

    // Copyright goes here. You can leave this blank if you dont want one.
    copyrightText: "Put your copyright stuff here",

    // Custom commands. You can delete or add more. Go to customCommands.js to add commands. Then add a line here to link to it as demonstrated below.
    commands: [
        {command: "about", description: "Describe yourself", arg: custom.about},
        {command: "contact", description: "A list of links to be contacted with", arg: custom.contact},
        {command: "projects", description: "A list of projects", arg: custom.projects},
        {command: "exit", description: "Closes the tab", arg: custom.exit},
        {command: "echo", description: "Echoes things and stuffs", arg: custom.echo},
    ]
}
