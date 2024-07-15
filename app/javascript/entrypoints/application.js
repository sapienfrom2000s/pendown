// To see this message, add the following to the `<head>` section in your
// views/layouts/application.html.erb
//
//    <%= vite_client_tag %>
//    <%= vite_javascript_tag 'application' %>
console.log("Vite ⚡️ Rails");

// If using a TypeScript entrypoint file:
//     <%= vite_typescript_tag 'application' %>
//
// If you want to use .jsx or .tsx, add the extension:
//     <%= vite_javascript_tag 'application.jsx' %>

console.log(
  "Visit the guide for more information: ",
  "https://vite-ruby.netlify.app/guide/rails",
);

// Example: Load Rails libraries in Vite.
//
// import * as Turbo from '@hotwired/turbo'
// Turbo.start()
//
// import ActiveStorage from '@rails/activestorage'
// ActiveStorage.start()
//
// // Import all channels.
// const channels = import.meta.globEager('./**/*_channel.js')

// Example: Import a stylesheet in app/frontend/index.css
// import '~/index.css'
import _ from "lodash";

console.log("Testing lodash:");
console.log(_.capitalize("hello world"));
console.log(_.sum([1, 2, 3, 4]));

// import EditorJS from "@editorjs/editorjs";
// import Header from "@editorjs/header";
// import List from "@editorjs/list";
//
// const editor = new EditorJS({
//   /**
//    * Id of Element that should contain the Editor
//    */
//   holder: "editorjs",
//
//   /**
//    * Available Tools list.
//    * Pass Tool's class or Settings object for each Tool you want to use
//    */
//   tools: {
//     header: {
//       class: Header,
//       inlineToolbar: ["link"],
//     },
//     list: {
//       class: List,
//       inlineToolbar: true,
//     },
//   },
// });
