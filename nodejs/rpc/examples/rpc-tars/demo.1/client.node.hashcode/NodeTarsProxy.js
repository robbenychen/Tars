﻿// **********************************************************************
// This file was generated by a TARS parser!
// TARS version 1.0.1.
// **********************************************************************

var TarsStream = require('@tars/stream');
var TarsError  = require('@tars/rpc').error;

var tars = tars || {};
module.exports.tars = tars;

tars.NodeTarsProxy = function () {
    this._name   = undefined;
    this._worker = undefined;
}

tars.NodeTarsProxy.prototype.setTimeout = function (iTimeout) {
    this._worker.timeout = iTimeout;
}

tars.NodeTarsProxy.prototype.getTimeout = function ( ) {
    return this._worker.timeout;
}


tars.User_t = function() {
    this.id = 0;
    this.score = 0;
    this.name = "";
    this._classname = "tars.User_t";
};
tars.User_t._classname = "tars.User_t";

tars.User_t._write = function (os, tag, value) { os.writeStruct(tag, value); }
tars.User_t._read  = function (is, tag, def) { return is.readStruct(tag, true, def); }
tars.User_t._readFrom = function (is) {
    var tmp = new tars.User_t();
    tmp.id = is.readInt32(0, false, 0);
    tmp.score = is.readInt32(1, false, 0);
    tmp.name = is.readString(2, false, "");
    return tmp;
};
tars.User_t.prototype._writeTo = function (os) {
    os.writeInt32(0, this.id);
    os.writeInt32(1, this.score);
    os.writeString(2, this.name);
};
tars.User_t.prototype._equal = function (anItem) {
    assert(false, 'this structure not define key operation');
}
tars.User_t.prototype._genKey = function () {
    if (!this._proto_struct_name_) {
        this._proto_struct_name_ = 'STRUCT' + Math.random();
    }
    return this._proto_struct_name_;
}
tars.User_t.prototype.toObject = function() { 
    var tmp = {};

    tmp.id = this.id;
    tmp.score = this.score;
    tmp.name = this.name;
    
    return tmp;
}
tars.User_t.prototype.readFromObject = function(json) { 
    !json.hasOwnProperty("id") || (this.id = json.id);
    !json.hasOwnProperty("score") || (this.score = json.score);
    !json.hasOwnProperty("name") || (this.name = json.name);
}
tars.User_t.prototype.toBinBuffer = function () {
    var os = new TarsStream.OutputStream();
    this._writeTo(os);
    return os.getBinBuffer();
}
tars.User_t.new = function () {
    return new tars.User_t();
}
tars.User_t.create = function (is) {
    return tars.User_t._readFrom(is);
}
tars.Result_t = function() {
    this.id = 0;
    this.iLevel = 0;
    this._classname = "tars.Result_t";
};
tars.Result_t._classname = "tars.Result_t";

tars.Result_t._write = function (os, tag, value) { os.writeStruct(tag, value); }
tars.Result_t._read  = function (is, tag, def) { return is.readStruct(tag, true, def); }
tars.Result_t._readFrom = function (is) {
    var tmp = new tars.Result_t();
    tmp.id = is.readInt32(0, false, 0);
    tmp.iLevel = is.readInt32(1, false, 0);
    return tmp;
};
tars.Result_t.prototype._writeTo = function (os) {
    os.writeInt32(0, this.id);
    os.writeInt32(1, this.iLevel);
};
tars.Result_t.prototype._equal = function (anItem) {
    assert(false, 'this structure not define key operation');
}
tars.Result_t.prototype._genKey = function () {
    if (!this._proto_struct_name_) {
        this._proto_struct_name_ = 'STRUCT' + Math.random();
    }
    return this._proto_struct_name_;
}
tars.Result_t.prototype.toObject = function() { 
    var tmp = {};

    tmp.id = this.id;
    tmp.iLevel = this.iLevel;
    
    return tmp;
}
tars.Result_t.prototype.readFromObject = function(json) { 
    !json.hasOwnProperty("id") || (this.id = json.id);
    !json.hasOwnProperty("iLevel") || (this.iLevel = json.iLevel);
}
tars.Result_t.prototype.toBinBuffer = function () {
    var os = new TarsStream.OutputStream();
    this._writeTo(os);
    return os.getBinBuffer();
}
tars.Result_t.new = function () {
    return new tars.Result_t();
}
tars.Result_t.create = function (is) {
    return tars.Result_t._readFrom(is);
}

tars.NodeTarsProxy.prototype.getUsrName = function (sUsrName) {
    var _encode = function () { 
        var os = new TarsStream.OutputStream();
        os.writeString(1, sUsrName);
        return os.getBinBuffer();
    }

    var _decode = function (data) {
        try {
            var response = {arguments:{}};
            var is = new TarsStream.InputStream(data.response.sBuffer);

            response.costtime = data.request.costtime;
            response.return   = is.readInt32(0, true, TarsStream.Int32);
            response.arguments.sValue1 = is.readString(2, true, TarsStream.String);
            response.arguments.sValue2 = is.readString(3, true, TarsStream.String);

            return {request:data.request, response:response};
        } catch (e) {
            var response = { };
            response.costtime      = data.request.costtime;
            response.error         = {};
            response.error.code    = TarsError.CLIENT.DECODE_ERROR;
            response.error.message = e.message;

            throw { request : data.request, response : response};
        }
    }

    var _error = function(data) {
        var response = {};
        response.costtime = data.request.costtime;
        response.error    = data.error;

        throw {request:data.request, response:response};
    }

    return this._worker.tars_invoke('getUsrName', _encode(), arguments.length != 0?arguments[arguments.length - 1]:undefined).then(_decode, _error);
}

tars.NodeTarsProxy.prototype.getall = function (stUser) {
    var _encode = function () { 
        var os = new TarsStream.OutputStream();
        os.writeStruct(1, stUser);
        return os.getBinBuffer();
    }

    var _decode = function (data) {
        try {
            var response = {arguments:{}};
            var is = new TarsStream.InputStream(data.response.sBuffer);

            response.costtime = data.request.costtime;
            response.return   = is.readInt32(0, true, TarsStream.Int32);
            response.arguments.stResult = is.readStruct(2, true, tars.Result_t);

            return {request:data.request, response:response};
        } catch (e) {
            var response = { };
            response.costtime      = data.request.costtime;
            response.error         = {};
            response.error.code    = TarsError.CLIENT.DECODE_ERROR;
            response.error.message = e.message;

            throw { request : data.request, response : response};
        }
    }

    var _error = function(data) {
        var response = {};
        response.costtime = data.request.costtime;
        response.error    = data.error;

        throw {request:data.request, response:response};
    }

    return this._worker.tars_invoke('getall', _encode(), arguments.length != 0?arguments[arguments.length - 1]:undefined).then(_decode, _error);
}

tars.NodeTarsProxy.prototype.test = function () {
    var _encode = function () { 
        var os = new TarsStream.OutputStream();
        return os.getBinBuffer();
    }

    var _decode = function (data) {
        try {
            var response = {arguments:{}};
            var is = new TarsStream.InputStream(data.response.sBuffer);

            response.costtime = data.request.costtime;
            response.return   = is.readInt32(0, true, TarsStream.Int32);

            return {request:data.request, response:response};
        } catch (e) {
            var response = { };
            response.costtime      = data.request.costtime;
            response.error         = {};
            response.error.code    = TarsError.CLIENT.DECODE_ERROR;
            response.error.message = e.message;

            throw { request : data.request, response : response};
        }
    }

    var _error = function(data) {
        var response = {};
        response.costtime = data.request.costtime;
        response.error    = data.error;

        throw {request:data.request, response:response};
    }

    return this._worker.tars_invoke('test', _encode(), arguments.length != 0?arguments[arguments.length - 1]:undefined).then(_decode, _error);
}


