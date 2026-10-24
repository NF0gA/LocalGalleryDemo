# Local Gallery Demo

An offline sample web app package for [LocalWebAppPlatform](https://github.com/NF0gA/LocalWebAppPlatform).

## Features

- Four bundled SVG illustrations
- Previous/next image navigation and thumbnail grid
- Favorites saved in `localStorage`
- Favorites-only filter
- No network requests and no native bridge

## Package and installation

The source files in this repository correspond to the package root. To create an importable ZIP, archive the files and folders in the repository root so that `app.json` is at the ZIP root (do not wrap the package in an extra parent directory).

A ready-to-import `LocalGalleryDemo.zip` was provided separately in the project conversation.

Import the ZIP into LocalWebAppPlatform.

This is a platform integration test, not a device-photo browser. Accessing arbitrary photos on the Android device requires a platform file-picker/API, which is not implemented yet.

## Package format

The package uses LocalWebAppPlatform format v0.2.0. The `requested_capabilities`, `network`, and `data_schema_version` entries are descriptive metadata for this sample; current parser enforcement is centered on the required manifest fields.
