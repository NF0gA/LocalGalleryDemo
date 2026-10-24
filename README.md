# Local Gallery Demo

An offline sample web app package for [LocalWebAppPlatform](https://github.com/NF0gA/LocalWebAppPlatform).

## Features

- Four bundled SVG illustrations
- Previous/next image navigation and thumbnail grid
- Favorites saved in `localStorage`
- Favorites-only filter
- No network requests and no native bridge

## Install

Download `LocalGalleryDemo.zip` from the repository and import it into LocalWebAppPlatform.

This is a platform integration test, not a device-photo browser. Accessing arbitrary photos on the Android device requires a platform file-picker/API, which is not implemented yet.

## Package format

The ZIP root contains `app.json`, `index.html`, `style.css`, `app.js`, and `assets/`. The manifest follows LocalWebAppPlatform package format v0.2.0.
