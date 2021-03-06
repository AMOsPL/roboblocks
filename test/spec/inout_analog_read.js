/* global describe, it, expect */
(function() {
	'use strict';

	var root = this;

	root.define([], function() {

		describe('In Roboblocks.Blocks.inout_analog_read block', function () {

			it('generates expected default Arduino code', function () {
				expect( true ).to.equal( true );
				var bool = Blockly.Block.obtain(Blockly.mainWorkspace, 'inout_analog_read');

				assert.equal(Blockly.Arduino.workspaceToCode(), '/***   Global variables   ***/\n\n/***   Function declaration   ***/\n\nvoid setup()\n{\n\n}\n\n\nvoid loop()\n{\n  pinMode(,INPUT);\n  analogRead();\n\n}\n\n/***   Function definition   ***/\n');
			});
		});
	});

}).call( this );
