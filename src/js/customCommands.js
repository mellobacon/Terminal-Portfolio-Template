let custom = {
    about: function about() {

        // Look this is self explanitory. Just talk about yourself.
        terminal.append(appendClass("span", "section-title", "About Me:"));

        const aboutMe = `Put whatever about yourself here. "Brag" as one does if you want.`
        //

        terminal.append(appendClass("span", "output", `     ${aboutMe}`));
    },
    contact: function contact() {
        output = "";
        const linkBox = appendClass("span", "output contacts");
        
        // Add your contact links here.
        terminal.append(appendClass("span", "section-title", "Contact:"));

        const links = [
            {contact: "https://www.discord.com", link: "#"},
            {contact: "http://www.afakelink.org", link: "#"},
            {contact: "http://www.anotherfakelink.com", link: "#"}
        ];
        //

        for (const link of links) {
            let createdLink = appendClass("a", "contact-link", `- ${link.contact}`);
            createdLink.setAttribute("href", link.link);
            linkBox.append(createdLink);
            linkBox.append("\n");
        }
        terminal.append(linkBox);
    },
    projects: function projects() {
        const projectBox = appendClass("div", "output project-box");

        // Add your projects here. Delete the placeholders if you want.
        // To add a project, call the createProject method inside projectBox.append(). Add the: project title, project description, a picture or logo of your project, and optionally a link to your project. If you dont want a picture, no worries. You can randomly generate a picture. Just use "https://loremflickr.com/200/200" instead. It generates kittens!
        terminal.append(appendClass("span", "section-title", "Projects:"));

        projectBox.append(createProject("Kittens!!!", "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent dapibus turpis sit amet diam aliquam ultrices. Mauris congue finibus justo.", "http://placekitten.com/200/200"));

        projectBox.append(createProject("A title", "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent dapibus turpis sit amet diam aliquam ultrices. Mauris congue finibus justo.", "https://via.placeholder.com/600?text=hehehe"));
        //

        terminal.append(projectBox);
    },

    exit: function exit() {
        window.close();  
    },

    echo: function echo(args) {
        terminal.append(...args);
    },

    // You can start here if you want. Rename the command and function name. Add functionality. Cool stuff.
    yourCommandHere: function yourCommand() {
        let output = "";

        // Add stuff here. Refer to the premade commands if you want.

        // Make it print to the terminal
        terminal.append(appendClass("span", "output", output));
    }
}

// Ah yes the magic and chaos of making adding a project so you dont have to
const createProject = (title, desc, image = null, href = "#") => {
    const link = appendClass("a");
    const _image = appendClass("img", "project-image");
    _image.setAttribute("src", image);
    link.append(_image);
    link.setAttribute("href", href);

    const project = appendClass("div", "project");
    project.append(appendClass("h3", "project-title", title));
    project.append(appendClass("p", "project-desc", desc));
    project.append(link);
    return project;
}
