/*
 *
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 *
*/

/*jshint unused:true, undef:true, browser:true */
/*global Windows:true, URL:true, module:true, require:true, WinJS:true */


var IMAGE_DATA_TYPE_BASE64 = "base64Image";
var IMAGE_DATA_TYPE_URL = "urlImage";
var RESIZE_TYPE_FACTOR = "factorResize";
var RESIZE_TYPE_MIN_PIXEL = "minPixelResize";
var RESIZE_TYPE_MAX_PIXEL = "maxPixelResize";
var RETURN_BASE64 = "returnBase64";
var RETURN_URI = "returnUri";
var FORMAT_JPG = "jpg";
var FORMAT_PNG = "png";
var DEFAULT_FORMAT = "jpg";
var DEFAULT_IMAGE_DATA_TYPE = IMAGE_DATA_TYPE_BASE64;
var DEFAULT_RESIZE_TYPE = RESIZE_TYPE_FACTOR;

var ImageTools = WinJS.Class.define(
    // Define the constructor function for the ColorsClass.
    function ImageTools(args) {
        var options;
        if (args && args.length === 1) {
            options = args[0];
        } else {
            options = {};
        }
        this._imageData = options["data"];
        this._imageDataType = options["imageDataType"];
        if (!this._imageDataType) {
            this._imageDataType = DEFAULT_IMAGE_DATA_TYPE;
        }
        this._format = options["format"];
        if (!this._format) {
            this._format = DEFAULT_FORMAT;
        }
    }, {
        resizeImage: function(successCallback, errorCallback) {
        },
        imageSize: function (successCallback, errorCallback) {
            var that = this;
            var ret = new WinJS.Promise.as().then(function() {
                var img = new Image();
                if (that._imageDataType === IMAGE_DATA_TYPE_BASE64) {
                    img.src = "data:image/jpeg;base64," + that._imageData;
                } else {
                    img.src = that._imageData;
                }
                var width = img.width;
                var height = img.height;
                successCallback({ width: width, height: height });
                return WinJS.Promise.as();
            });
            return ret;
        },
        storeImage: function(successCallback, errorCallback) {
        }
    }
);

module.exports = {
    resizeImage: function (successCallback, errorCallback, args) {
        var imageTools = new ImageTools(args);
        return imageTools.resizeImage(successCallback, errorCallback);
    },

    imageSize: function (successCallback, errorCallback, args) {
        var imageTools = new ImageTools(args);
        return imageTools.imageSize(successCallback, errorCallback);
    },

    storeImage: function (successCallback, errorCallback, args) {
        var imageTools = new ImageTools(args);
        return imageTools.storeImage(successCallback, errorCallback);
    }
};

require("cordova/exec/proxy").add("ImageResizePlugin", module.exports);
