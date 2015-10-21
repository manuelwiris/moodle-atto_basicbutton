// This file is part of Moodle - http://moodle.org/
//
// Moodle is free software: you can redistribute it and/or modify
// it under the terms of the GNU General Public License as published by
// the Free Software Foundation, either version 3 of the License, or
// (at your option) any later version.
//
// Moodle is distributed in the hope that it will be useful,
// but WITHOUT ANY WARRANTY; without even the implied warranty of
// MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
// GNU General Public License for more details.
//
// You should have received a copy of the GNU General Public License
// along with Moodle.  If not, see <http://www.gnu.org/licenses/>.

/*
 * Atto basicButton example.
 *
 * @package    atto_basicbutton
 * @license    http://www.gnu.org/copyleft/gpl.html GNU GPL v3 or later
 */

/**
 * @module moodle-atto_basicbutton-button
 */

/**
 * Atto
 *
 * @namespace M.atto_basicbutton
 * @class button
 * @extends M.editor_atto.EditorPlugin
 */

Y.namespace('M.atto_basicbutton').Button = Y.Base.create('button', Y.M.editor_atto.EditorPlugin, [], {
    initializer: function() {
    	// Add a basic button which ties into the execCommand.
        this.addBasicButton({
			exec: '',
            icon: '',
            // Watch the following tags and add/remove highlighting as appropriate:
            tags: ''
        });
    }
});
