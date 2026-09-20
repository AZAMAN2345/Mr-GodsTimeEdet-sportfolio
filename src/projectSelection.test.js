import assert from "node:assert/strict";
import { test } from "node:test";
import { initialSelection, projectSelection as reduce } from "./projectSelection.js";
import { existsSync } from "node:fs";
import { createServer } from "vite";
import { createElement } from "react";
import { renderToStaticMarkup } from "react-dom/server";

test("switching papers fully closes the old one before opening the next", () => {
  let state = reduce(initialSelection, { type: "select", index: 0 });
  assert.equal(state.phase, "opening");
  state = reduce(state, { type: "settled" });
  state = reduce(state, { type: "select", index: 2 });
  assert.deepEqual(state, { active: 0, pending: 2, phase: "closing" });
  state = reduce(state, { type: "settled" });
  assert.deepEqual(state, { active: 2, pending: null, phase: "opening" });
  state = reduce(state, { type: "settled" });
  assert.equal(state.phase, "open");
});

test("rapid selection uses the latest requested file and close cancels it", () => {
  let state = reduce(initialSelection, { type: "select", index: 1 });
  state = reduce(state, { type: "select", index: 2 });
  state = reduce(state, { type: "select", index: 5 });
  assert.equal(state.active, 1);
  assert.equal(reduce(state, { type: "settled" }).active, 5);
  state = reduce(state, { type: "select", index: null });
  assert.deepEqual(reduce(state, { type: "settled" }), initialSelection);
});

test("clicking an open file or closing during its rise returns it to the folder", () => {
  let state = reduce(initialSelection, { type: "select", index: 4 });
  state = reduce(state, { type: "select", index: 4 });
  assert.equal(state.phase, "closing");
  assert.deepEqual(reduce(state, { type: "settled" }), initialSelection);
});

test("the folder renders six independent papers with existing image assets", async () => {
  const server = await createServer({ server: { middlewareMode: true }, appType: "custom" });
  try {
    const { default: Projects } = await server.ssrLoadModule("/src/Projects.jsx");
    const html = renderToStaticMarkup(createElement(Projects));
    assert.equal((html.match(/class="project-file-trigger"/g) || []).length, 6);
    assert.equal((html.match(/class="project-file-paper"/g) || []).length, 6);
    assert.ok(!/project-modal|project-drawer|project-list|project-hotspot/.test(html));
    for (const [, src] of html.matchAll(/src="(\/assets\/[^"]+)"/g)) {
      assert.ok(existsSync(`public${src}`), `Missing image: ${src}`);
    }
  } finally {
    await server.close();
  }
});
