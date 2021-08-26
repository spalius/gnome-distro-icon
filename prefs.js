
const Gio   = imports.gi.Gio;
const GLib  = imports.gi.GLib;
const GObj  = imports.gi.GObject;
const Gtk   = imports.gi.Gtk;
const Lang  = imports.lang;

const ExtensionUtils = imports.misc.extensionUtils;
const Me = ExtensionUtils.getCurrentExtension();

function init() {
    log(`initializing ${Me.metadata.name} Preferences`);
};

function buildPrefsWidget() {
    let prefsWidget = new Gtk.Label({
        label: `${Me.metadata.name}`,
        visible: true
    });

    
    return 0;
};