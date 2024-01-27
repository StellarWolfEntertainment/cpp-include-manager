import * as vscode from 'vscode';
import * as fs from 'fs';
import * as path from 'path';

interface IncManJson {
  'standardized-libraries': string[];
  'explicit-libraries': string[];
}

interface SettingsJson {
  [key: string]: any;
}

const inputFilePath = '/.vscode/incMan.json';
const outputFilePath = '/.vscode/settings.json';

function getPath(filePath : string) : string
{
  let workspace = vscode.workspace.workspaceFolders;

  let root = "";
  
  if(workspace != null)
  {
    let space = workspace[0];

    if(space != null)
    {
      root = space.uri.fsPath;
    }
  }
  return path.join(root, filePath);
}

const inputPath = getPath(inputFilePath);
const outputPath = getPath(outputFilePath);

function handleFileChange()
{  
  let config = vscode.workspace.getConfiguration('cpp-include-manager');
  let libraryPathTemplate: string = config.get('libraryPath') ?? "C:/Libraries/${lib}/include";

  fs.readFile(inputPath, 'utf8', (err, inputData) => {
    if(err)
    {
      vscode.window.showInformationMessage('Error reading IncMan.json');
    }
      const inputJson: IncManJson = JSON.parse(inputData);

      const standardizedLibraries = inputJson['standardized-libraries'] || [];
      const explicitLibraries = inputJson['explicit-libraries'] || [];

      const includePaths = [
        ...standardizedLibraries.map(lib => libraryPathTemplate.replace('${lib}', lib)),
        ...explicitLibraries
      ];

      fs.readFile(outputPath, 'utf8', (err, outputData) => {
        if (err) {
          vscode.window.showInformationMessage('Error reading settings.json');
          return;  // Exit early on error
        }
        
        let outputJson: SettingsJson = JSON.parse(outputData);
        outputJson["C_Cpp.default.includePath"] = includePaths;
        const updatedData = JSON.stringify(outputJson, null, 2);

        fs.writeFile(outputPath, updatedData, (err) => {
          if (err) {
            vscode.window.showInformationMessage('Error writing settings.json');
          }
        });
      });
  });
}


export function activate(context: vscode.ExtensionContext) {
  let watcher = vscode.workspace.createFileSystemWatcher(inputPath);
  watcher.onDidChange(handleFileChange);
  handleFileChange();
}

// This method is called when your extension is deactivated
export function deactivate() {}