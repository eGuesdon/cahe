(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
/// <reference path="./com/cahe/utils/MathUtils.ts" />
/// <reference path="./com/cahe/utils/StringUtils.ts" />
"use strict";
var StringUtils = com.cahe.utils.StringUtils;
var Init = (function () {
    function Init() {
        document.body.innerHTML = StringUtils.prefill("Eric", "0", 10);
    }
    Init.getInstance = function () {
        if (Init._instance == null) {
            Init._instance = new Init();
        }
        ;
        return Init._instance;
    };
    return Init;
}());
exports.Init = Init;
var i = Init.getInstance();

},{}]},{},[1]);
