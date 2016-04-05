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


(function() {
    "use strict";

    WinJS.Namespace.define("ImageResizePlugin", {
        IMAGE_DATA_TYPE_BASE64: "base64Image",
        IMAGE_DATA_TYPE_URL: "urlImage",
        RESIZE_TYPE_FACTOR: "factorResize",
        RESIZE_TYPE_MIN_PIXEL: "minPixelResize",
        RESIZE_TYPE_MAX_PIXEL: "maxPixelResize",
        RETURN_BASE64: "returnBase64",
        RETURN_URI: "returnUri",
        FORMAT_JPG: "jpg",
        FORMAT_PNG: "png",
        DEFAULT_FORMAT: "jpg"
    });
    WinJS.Namespace.define("ImageResizePlugin", {
        DEFAULT_IMAGE_DATA_TYPE: ImageResizePlugin.IMAGE_DATA_TYPE_BASE64,
        DEFAULT_RESIZE_TYPE: ImageResizePlugin.RESIZE_TYPE_FACTOR
    });
    WinJS.Namespace.define("ImageResizePlugin", {
        ImageTools: WinJS.Class.define(
            // Define the constructor function for the ColorsClass.
            function ImageTools(args) {
                this._imageData = args["data"];
                this._imageDataType = args["imageDataType"];
                if (!this._imageDataType) {
                    this._imageDataType = ImageResizePlugin.DEFAULT_IMAGE_DATA_TYPE;
                }
                this._format = args["format"];
                if (!this._format) {
                    this._format = ImageResizePlugin.DEFAULT_FORMAT;
                }
            }, {
                imageData: {
                    get: function() {
                        return this._imageData;
                    }
                },
                imageDataType: {
                    get: function() {
                        return this._imageDataType;
                    }
                },
                format: {
                    get: function() {
                        return this._format;
                    }  
                },
                resizeImage: function (successCallback, errorCallback) {
                },
                imageSize: function (successCallback, errorCallback) {
                },
                storeImage: function (successCallback, errorCallback) {
                }
            }
        )
    });
})();

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
