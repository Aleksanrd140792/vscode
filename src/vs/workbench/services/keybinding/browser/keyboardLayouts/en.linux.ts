/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/

import { KeyboardLayoutProvider, KeyboardLayoutInfo } from 'vs/workbench/services/keybinding/browser/keyboardLayoutProvider';

KeyboardLayoutProvider.INSTANCE.registerKeyboardLayout(new KeyboardLayoutInfo(
	{ model: 'pc105', layout: 'us', variant: '', options: '', rules: 'evdev' },
	[
		{ model: 'pc105', layout: 'cn', variant: '', options: '', rules: 'evdev' },
	],
	{
		Sleep: [],
		WakeUp: [],
		KeyA: ['a', 'A', 'a', 'A', 0],
		KeyB: ['b', 'B', 'b', 'B', 0],
		KeyC: ['c', 'C', 'c', 'C', 0],
		KeyD: ['d', 'D', 'd', 'D', 0],
		KeyE: ['e', 'E', 'e', 'E', 0],
		KeyF: ['f', 'F', 'f', 'F', 0],
		KeyG: ['g', 'G', 'g', 'G', 0],
		KeyH: ['h', 'H', 'h', 'H', 0],
		KeyI: ['i', 'I', 'i', 'I', 0],
		KeyJ: ['j', 'J', 'j', 'J', 0],
		KeyK: ['k', 'K', 'k', 'K', 0],
		KeyL: ['l', 'L', 'l', 'L', 0],
		KeyM: ['m', 'M', 'm', 'M', 0],
		KeyN: ['n', 'N', 'n', 'N', 0],
		KeyO: ['o', 'O', 'o', 'O', 0],
		KeyP: ['p', 'P', 'p', 'P', 0],
		KeyQ: ['q', 'Q', 'q', 'Q', 0],
		KeyR: ['r', 'R', 'r', 'R', 0],
		KeyS: ['s', 'S', 's', 'S', 0],
		KeyT: ['t', 'T', 't', 'T', 0],
		KeyU: ['u', 'U', 'u', 'U', 0],
		KeyV: ['v', 'V', 'v', 'V', 0],
		KeyW: ['w', 'W', 'w', 'W', 0],
		KeyX: ['x', 'X', 'x', 'X', 0],
		KeyY: ['y', 'Y', 'y', 'Y', 0],
		KeyZ: ['z', 'Z', 'z', 'Z', 0],
		Digit1: ['1', '!', '1', '!', 0],
		Digit2: ['2', '@', '2', '@', 0],
		Digit3: ['3', '#', '3', '#', 0],
		Digit4: ['4', '$', '4', '$', 0],
		Digit5: ['5', '%', '5', '%', 0],
		Digit6: ['6', '^', '6', '^', 0],
		Digit7: ['7', '&', '7', '&', 0],
		Digit8: ['8', '*', '8', '*', 0],
		Digit9: ['9', '(', '9', '(', 0],
		Digit0: ['0', ')', '0', ')', 0],
		Enter: ['\r', '\r', '\r', '\r', 0],
		Escape: ['\u001b', '\u001b', '\u001b', '\u001b', 0],
		Backspace: ['\b', '\b', '\b', '\b', 0],
		Tab: ['\t', '', '\t', '', 0],
		Space: [' ', ' ', ' ', ' ', 0],
		Minus: ['-', '_', '-', '_', 0],
		Equal: ['=', '+', '=', '+', 0],
		BracketLeft: ['[', '{', '[', '{', 0],
		BracketRight: [']', '}', ']', '}', 0],
		Backslash: ['\\', '|', '\\', '|', 0],
		Semicolon: [';', ':', ';', ':', 0],
		Quote: ['\'', '"', '\'', '"', 0],
		Backquote: ['`', '~', '`', '~', 0],
		Comma: [',', '<', ',', '<', 0],
		Period: ['.', '>', '.', '>', 0],
		Slash: ['/', '?', '/', '?', 0],
		CapsLock: [],
		F1: [],
		F2: [],
		F3: [],
		F4: [],
		F5: [],
		F6: [],
		F7: [],
		F8: [],
		F9: [],
		F10: [],
		F11: [],
		F12: [],
		PrintScreen: [],
		ScrollLock: [],
		Pause: [],
		Insert: [],
		Home: [],
		PageUp: [],
		Delete: ['', '', '', '', 0],
		End: [],
		PageDown: [],
		ArrowRight: [],
		ArrowLeft: [],
		ArrowDown: [],
		ArrowUp: [],
		NumLock: [],
		NumpadDivide: ['/', '/', '/', '/', 0],
		NumpadMultiply: ['*', '*', '*', '*', 0],
		NumpadSubtract: ['-', '-', '-', '-', 0],
		NumpadAdd: ['+', '+', '+', '+', 0],
		NumpadEnter: ['\r', '\r', '\r', '\r', 0],
		Numpad1: ['', '1', '', '1', 0],
		Numpad2: ['', '2', '', '2', 0],
		Numpad3: ['', '3', '', '3', 0],
		Numpad4: ['', '4', '', '4', 0],
		Numpad5: ['', '5', '', '5', 0],
		Numpad6: ['', '6', '', '6', 0],
		Numpad7: ['', '7', '', '7', 0],
		Numpad8: ['', '8', '', '8', 0],
		Numpad9: ['', '9', '', '9', 0],
		Numpad0: ['', '0', '', '0', 0],
		NumpadDecimal: ['', '.', '', '.', 0],
		IntlBackslash: ['<', '>', '|', '¦', 0],
		ContextMenu: [],
		Power: [],
		NumpadEqual: ['=', '=', '=', '=', 0],
		F13: [],
		F14: [],
		F15: [],
		F16: [],
		F17: [],
		F18: [],
		F19: [],
		F20: [],
		F21: [],
		F22: [],
		F23: [],
		F24: [],
		Open: [],
		Help: [],
		Select: [],
		Again: [],
		Undo: [],
		Cut: [],
		Copy: [],
		Paste: [],
		Find: [],
		AudioVolumeMute: [],
		AudioVolumeUp: [],
		AudioVolumeDown: [],
		NumpadComma: ['.', '.', '.', '.', 0],
		IntlRo: [],
		KanaMode: [],
		IntlYen: [],
		Convert: [],
		NonConvert: [],
		Lang1: [],
		Lang2: [],
		Lang3: [],
		Lang4: [],
		Lang5: [],
		NumpadParenLeft: ['(', '(', '(', '(', 0],
		NumpadParenRight: [')', ')', ')', ')', 0],
		ControlLeft: [],
		ShiftLeft: [],
		AltLeft: [],
		MetaLeft: [],
		ControlRight: [],
		ShiftRight: [],
		AltRight: [],
		MetaRight: [],
		BrightnessUp: [],
		BrightnessDown: [],
		MediaPlay: [],
		MediaRecord: [],
		MediaFastForward: [],
		MediaRewind: [],
		MediaTrackNext: [],
		MediaTrackPrevious: [],
		MediaStop: [],
		Eject: [],
		MediaPlayPause: [],
		MediaSelect: [],
		LaunchMail: [],
		LaunchApp2: [],
		LaunchApp1: [],
		SelectTask: [],
		LaunchScreenSaver: [],
		BrowserSearch: [],
		BrowserHome: [],
		BrowserBack: [],
		BrowserForward: [],
		BrowserStop: [],
		BrowserRefresh: [],
		BrowserFavorites: [],
		MailReply: [],
		MailForward: [],
		MailSend: []
	}

));
