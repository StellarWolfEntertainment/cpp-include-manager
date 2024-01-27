# C++ Include Manager

## Description

This Visual Studio Code extension, named C++ Include Manager, simplifies the management of include paths in your C++ projects. It reads from `/.vscode/IncMan.json` file and updates the `/.vscode/settings.json` file with the specified include paths.

## Features

- Automatically updates include paths based on the `IncMan.json` configuration.
- Supports both standardized library paths eg `C:/Libraries/${lib}/include` and explicit library paths eg `C:\Program Files (x86)\OpenAL 1.1 SDK\include`.

## Installation

1. Install the extension from the Visual Studio Code Marketplace.
2. Reload or restart Visual Studio Code to activate the extension.

## Usage

**Note**: This extension only overwrites the `C_Cpp.default.includePath` section of the `settings.json`, all other settings will remain unchanged.

1. Create an `IncMan.json` file in your project's `.vscode` directory.
2. Configure the extension by updating the `libraryPath` setting in your Visual Studio Code settings.
3. Define standardized and explicit library inlclude paths in the `IncMan.json` file.
```json
{
    "standardized-libraries":["lib1", "lib2"],
    "explicit-libraries":["path/to/ext_lib1", "path/to/ext_lib2"]
}
```
4. The extension will automatically update the `settings.json` file when the `IncMan.json` file changes.

## Extension Settings

- libraryPath: Template for library paths. Defaults to "C:/Libraries/${lib}/include".

## Known Issues

- Error messages may appear in case of issues reading or writing configuration files.

## Release Notes

### Version 1.0.0

- Initial Release

## Contribution

Feel free to contribute by reporting issues or submitting pull requests on [GitHub](https://github.com/StellarWolfEntertainment/cpp-include-manager)