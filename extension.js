const {St, Clutter} = imports.gi;
const Main = imports.ui.main;

// const GLib = imports.gi.GLib;

const Gio = imports.gi.Gio;

let panelButton;

function init () {
    function launchDaemon () {
        // GLib.spawn_command_line_async('gnome-control-center') unsafe?
        let proc = Gio.Subprocess.new(
            ['gnome-control-center'],
            Gio.SubprocessFlags.STDOUT_PIPE | Gio.SubprocessFlags.STDERR_PIPE,
        );
    }

    // Create a Button with "Hello World" text
    panelButton = new St.Button({
        style_class : "panel-button",
        reactive: true,
        can_focus: true,
        track_hover: true,
        toggle_mode: false,
        width: 40,
    });
    let panelButtonText = new St.Icon({
        icon_name: 'fedora-logo-icon',
        icon_size: "24",
    });
    panelButton.set_child(panelButtonText);
    openToggle = panelButton.connect("clicked", launchDaemon);
}

function enable () {
    // Add the button to the panel
    Main.panel._leftBox.insert_child_at_index(panelButton, 0);
}

function disable () {
    // Remove the added button from panel
    Main.panel._leftBox.remove_child(panelButton);
}