# Insomnia Python Script

[![](https://img.shields.io/npm/v/insomnia-plugin-python-script.svg)](https://www.npmjs.com/package/insomnia-plugin-python-script)

Run any complex logic with python and get the result with Insomnia.

## Prerequisites

- Have `python3` configured at your `$PATH`

## Install

1. Open Insomnia
2. Go to Application > Preferences > Plugins
3. Type `insomnia-plugin-python-script`
4. Install the plugin

## Usage

### Write your complex python script

Your script must return de desired result by printing it.

At `~/path/to/file.py`:
```
def complex_logic():
    return ("complex_result")

print(complex_logic())
```

### Add the plugin to desired field

Type `CTRL + SPACE` then search for Python Script, and select the plugin

![Screenshot](https://raw.githubusercontent.com/wuerike/insomnia-plugin-python-script/main/npm/content/example1.png)


### Set the path of your python script

You'd better use a global path starting with `~/` to avoid any problem

![Screenshot](https://raw.githubusercontent.com/wuerike/insomnia-plugin-python-script/main/npm/content/example2.png)