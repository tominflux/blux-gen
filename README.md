blux-gen
========

Static-site generator for blux apps.

[![oclif](https://img.shields.io/badge/cli-oclif-brightgreen.svg)](https://oclif.io)
[![Version](https://img.shields.io/npm/v/blux-gen.svg)](https://npmjs.org/package/blux-gen)
[![Downloads/week](https://img.shields.io/npm/dw/blux-gen.svg)](https://npmjs.org/package/blux-gen)
[![License](https://img.shields.io/npm/l/blux-gen.svg)](https://github.com/tominflux/blux-gen/blob/master/package.json)

<!-- toc -->
* [Usage](#usage)
* [Commands](#commands)
<!-- tocstop -->
# Usage
<!-- usage -->
```sh-session
$ npm install -g blux-gen
$ blux-gen COMMAND
running command...
$ blux-gen (-v|--version|version)
blux-gen/0.1.0 linux-x64 node-v10.13.0
$ blux-gen --help [COMMAND]
USAGE
  $ blux-gen COMMAND
...
```
<!-- usagestop -->
# Commands
<!-- commands -->
* [`blux-gen build`](#blux-gen-build)
* [`blux-gen help [COMMAND]`](#blux-gen-help-command)

## `blux-gen build`

Build static site.

```
USAGE
  $ blux-gen build

DESCRIPTION
  ...
    - Clones blux-app repository.
    - Looks for app config.
    - Performs parcel build.
```

_See code: [src/commands/build.js](https://github.com/tominflux/blux-gen/blob/v0.1.0/src/commands/build.js)_

## `blux-gen help [COMMAND]`

display help for blux-gen

```
USAGE
  $ blux-gen help [COMMAND]

ARGUMENTS
  COMMAND  command to show help for

OPTIONS
  --all  see all commands in CLI
```

_See code: [@oclif/plugin-help](https://github.com/oclif/plugin-help/blob/v3.2.0/src/commands/help.ts)_
<!-- commandsstop -->
