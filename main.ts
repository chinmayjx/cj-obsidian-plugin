import {
	App,
	Editor,
	MarkdownView,
	Modal,
	Notice,
	Plugin,
	PluginSettingTab,
	Setting,
} from "obsidian";
import Snips from "./obsidian_snips.mjs";

// Remember to rename these classes and interfaces!

interface MyPluginSettings {}

const DEFAULT_SETTINGS: MyPluginSettings = {};

function addMarks(ob) {
	let tmp = "";
	const marks: Array<number> = [];
	for (let [i, c] of ob.completion.split("").entries()) {
		if (i > 0 && c === "%" && ob.completion[i - 1] !== "\\") {
			marks.push(tmp.length);
		} else {
			tmp += c;
		}
	}
	ob.completion = tmp;
	ob.marks = marks;
	return ob;
}

export default class MyPlugin extends Plugin {
	settings: MyPluginSettings;
	marks = {};

	async onload() {
		await this.loadSettings();
		const snipsSorted = Object.values(Snips)
			.sort((a, b) => b.trigger.length - a.trigger.length)
			.map((x) => addMarks(x));
		this.addCommand({
			id: "completion",
			name: "Autocomplete",
			editorCallback: (editor: Editor, view: MarkdownView) => {
				const e = editor.getCursor();
				if (!e.ch) return;
				const b = { line: e.line, ch: Math.max(e.ch - 3, 0) };
				const trigger = editor.getRange(b, e);
				for (let v of snipsSorted) {
					if (trigger.endsWith(v.trigger)) {
						editor.replaceRange(
							v.completion,
							{ line: e.line, ch: e.ch - v.trigger.length },
							e
						);
						if (v?.marks?.length > 0) {
							editor.setCursor({
								line: e.line,
								ch: e.ch - v.trigger.length + v.marks[0],
							});
							this.marks[e.line] = {
								len: editor.getLine(e.line).length,
								marks: v.marks.map(
									(x) => x + e.ch - v.trigger.length
								),
							};
						}
						break;
					}
				}
			},
		});
		this.addCommand({
			id: "move-cursor",
			name: "Next cursor position",
			editorCallback: (editor: Editor, view: MarkdownView) => {
				const c = editor.getCursor();
				const mk = this.marks[c.line];
				if (mk) {
					console.log(editor.getLine(c.line).length, mk.len);
					for (let m of mk.marks) {
						let mm = editor.getLine(c.line).length - mk.len + m;
						if (mm > c.ch) {
							editor.setCursor({
								line: c.line,
								ch: mm,
							});
							break;
						}
					}
				}
			},
		});

		this.addCommand({
			id: "decrease-heading-level",
			name: "Decrease heading levels",
			editorCallback: (editor: Editor, view: MarkdownView) => {
				const c = editor.getCursor();
				const line = editor.getLine(c.line);
				const selection = editor.getSelection();
				if (!selection.length) {
					const lineMod = line.replace(/^#/, "");
					editor.replaceRange(
						lineMod,
						{ line: c.line, ch: 0 },
						{ line: c.line, ch: line.length }
					);
				} else {
					const selectionMod = selection.replace(/^#/gm, "");
					editor.replaceSelection(selectionMod);
				}
			},
		});

		this.addCommand({
			id: "increase-heading-level",
			name: "Increase heading levels",
			editorCallback: (editor: Editor, view: MarkdownView) => {
				const c = editor.getCursor();
				const line = editor.getLine(c.line);
				const selection = editor.getSelection();
				if (!selection.length) {
					const lineMod = line.replace(/^#/, "##");
					editor.replaceRange(
						lineMod,
						{ line: c.line, ch: 0 },
						{ line: c.line, ch: line.length }
					);
				} else {
					const selectionMod = selection.replace(/^#/gm, "##");
					editor.replaceSelection(selectionMod);
				}
			},
		});

		this.addSettingTab(new SampleSettingTab(this.app, this));
	}

	onunload() {}

	async loadSettings() {
		this.settings = Object.assign(
			{},
			DEFAULT_SETTINGS,
			await this.loadData()
		);
	}

	async saveSettings() {
		await this.saveData(this.settings);
	}
}

class SampleSettingTab extends PluginSettingTab {
	plugin: MyPlugin;

	constructor(app: App, plugin: MyPlugin) {
		super(app, plugin);
		this.plugin = plugin;
	}

	display(): void {
		const { containerEl } = this;

		containerEl.empty();
		containerEl.createEl("h2", { text: "Settings" });
		const tb = containerEl.createEl("table")
		const r1 = tb.createEl("tr")
		r1.createEl("td", {text: "name"})
		r1.createEl("td", {text: "trigger"})
		r1.createEl("td", {text: "completion"})
		Object.entries(Snips).forEach(([k, v]) => {
			const tr = tb.createEl("tr")
			tr.createEl("td", {text: k})
			tr.createEl("td", {text: v.trigger})
			tr.createEl("td", {text: v.completion})
		})
	}
}
