# Example for AI assistance for styling & automatic workspace folders

This is a trivial Vanilla TypeScript project to illustrate the use of the
[vite-plugin-devtools-json](npmjs.com/package/vite-plugin-devtools-json)
plugin for [Vite](http://vite.dev). Checkout the [documentation] on how to
set up Google Chrome (Canary) to enable the feature. Follow the steps below
to try it out.

## Installation

Checkout and setup the example via:

```
git clone git@github.com:matthiasrohmer/styling-automatic-workspace.git
cd styling-automatic-workspace
npm install
npm run dev
```

Afterwards open [http://localhost:5173/](http://localhost:5173/) in your Google
Chrome (Canary), open DevTools, and reveal the Workspace tab in the Sources
panel. If you set up everything correctly, you'll see an folder row labeled
`styling-automatic-workspace` with a _Connect_ button next to it. Once
you've clicked _Connect_, Chrome will ask you to grant permission to the folder
via a browser permission prompt. You need to click _Allow_ here.

If everything went well, you'll now be able to use the project folder as part of
your Workspace and edit files from your project directly within DevTools, and
also persist changes that you made during debugging to your project source.

[documentation]: http://goo.gle/devtools-automatic-workspace-folders
