# Contributing to language config files

## General Rules

 - Please stay family friendly
 - Please be *Immersive* with the translation 

## How to contribute

 1. find the language you want to translate (e.g Japanese will find the jp.json), If the language you want to work on does not exist, you may refer to [Language Code Table (lingoes.net)](http://www.lingoes.net/en/translator/langcode.htm) for full list of language code, we ignore whatever is after "-", so we combine en-us / en-au etc to "en.json", if there is special reason we can make exception, for example, we will sperate Tranditional Chinese and Simplified Chinese (zh-tw/cn)
 2.  Edit the file with appropriate translations using the following format:
- `trans`  	-> the actuall translated text, this is the only field you need to modify
- `eng` 		-> pre-generated english text for reference, do not change it
- `vars` 		-> list of variable available for this translation, a example would be `the price is ${cost} dollar` when the var is `["cost"]`. also for reference only, do not change this
3. Submit the PR, when your PR is approved, the translation will be live in 5 ~ 15 minutes automatically

## Simple Video Tutorial
https://youtu.be/u-fvMsyJKH4

If anyone has time to make a better one, please let me know :D
