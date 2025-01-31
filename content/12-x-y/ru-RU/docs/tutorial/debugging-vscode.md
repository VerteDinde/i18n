# Отладка в VSCode

Это руководство посвящено тому, как настроить VSCode отладку как для вашего проекта Electron, так и для родного кода Electron.

## Отладка приложения Electron

### Главный процесс

#### 1. Откройте проект Electron в VSCode.

```sh
$ git clone git@github.com:electron/electron-quick-start.git
$ code electron-quick-start
```

#### 2. Создайте файл `.vscode/launch.json` со следующей конфигурацией:

```json
{
  "version": "0.2.0",
  "configurations": [
    {
      "name": "Debug Main Process",
      "type": "node",
      "request": "launch",
      "cwd": "${workspaceFolder}",
      "runtimeExecutable": "${workspaceFolder}/node_modules/.bin/electron",
      "windows": {
        "runtimeExecutable": "${workspaceFolder}/node_modules/.bin/electron.cmd"
      },
      "args" : ["."]
    }
  ]
}
```


#### 3. Отладка

Установите некоторые точки останова в `main.js`и начните отладку в [Виде отладки](https://code.visualstudio.com/docs/editor/debugging). Вы должны иметь возможность попасть в точки останова.

Here is a pre-configured project that you can download and directly debug in VSCode: https://github.com/octref/vscode-electron-debug/tree/master/electron-quick-start

## Debugging the Electron codebase

If you want to build Electron from source and modify the native Electron codebase, this section will help you in testing your modifications.

For those unsure where to acquire this code or how to build it, [Electron's Build Tools](https://github.com/electron/build-tools) automates and explains most of this process. If you wish to manually set up the environment, you can instead use these [build instructions](https://www.electronjs.org/docs/development/build-instructions-gn).

### Windows (C++)

#### 1. Откройте проект Electron в VSCode.

```sh
$ git clone git@github.com:electron/electron-quick-start.git
$ code electron-quick-start
```

#### 2. Создайте файл `.vscode/launch.json` со следующей конфигурацией:

```json
{
  "version": "0.2.0",
  "configurations": [
    {
      "name": "(Windows) Launch",
      "type": "cppvsdbg",
      "request": "launch",
      "program": "${workspaceFolder}\\out\\your-executable-location\\electron.exe",
      "args": ["your-electron-project-path"],
      "stopAtEntry": false,
      "cwd": "${workspaceFolder}",
      "environment": [
          {"name": "ELECTRON_ENABLE_LOGGING", "value": "true"},
          {"name": "ELECTRON_ENABLE_STACK_DUMPING", "value": "true"},
          {"name": "ELECTRON_RUN_AS_NODE", "value": ""},
      ],
      "externalConsole": false,
      "sourceFileMap": {
          "o:\\": "${workspaceFolder}",
      },
    },
  ]
}
```
**Примечание о настройке**

- `cppvsdbg` требует включённого [built-in C/C++ extension](https://marketplace.visualstudio.com/items?itemName=ms-vscode.cpptools).
- `${workspaceFolder}` is the full path to Chromium's `src` directory.
- `ваше исполняемое местоположение` будет одним из следующих в зависимости от нескольких элементов:
  -  `Testing`: If you are using the default settings of [Electron's Build-Tools](https://github.com/electron/build-tools) or the default instructions when [building from source](https://www.electronjs.org/docs/development/build-instructions-gn#building).
  -  `Release`: If you built a Release build rather than a Testing build.
  -  `your-directory-name`: If you modified this during your build process from the default, this will be whatever you specified.
- The `args` array string `"your-electron-project-path"` should be the absolute path to either the directory or `main.js` file of the Electron project you are using for testing. В этом примере должен быть ваш путь к `electron-quick-start`.


#### 3. Отладка

Установите некоторые точки останова в .cc файле выбранного вами кода Electron C++ и начните отладку в [Debug View](https://code.visualstudio.com/docs/editor/debugging).
