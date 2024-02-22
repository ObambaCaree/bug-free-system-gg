function GROWABLE_HEAP_I8() {
    if (wasmMemory.buffer != buffer) {
        updateGlobalBufferAndViews(wasmMemory.buffer)
    }
    return HEAP8
}
function GROWABLE_HEAP_U8() {
    if (wasmMemory.buffer != buffer) {
        updateGlobalBufferAndViews(wasmMemory.buffer)
    }
    return HEAPU8
}
function GROWABLE_HEAP_I16() {
    if (wasmMemory.buffer != buffer) {
        updateGlobalBufferAndViews(wasmMemory.buffer)
    }
    return HEAP16
}
function GROWABLE_HEAP_U16() {
    if (wasmMemory.buffer != buffer) {
        updateGlobalBufferAndViews(wasmMemory.buffer)
    }
    return HEAPU16
}
function GROWABLE_HEAP_I32() {
    if (wasmMemory.buffer != buffer) {
        updateGlobalBufferAndViews(wasmMemory.buffer)
    }
    return HEAP32
}
function GROWABLE_HEAP_U32() {
    if (wasmMemory.buffer != buffer) {
        updateGlobalBufferAndViews(wasmMemory.buffer)
    }
    return HEAPU32
}
function GROWABLE_HEAP_F32() {
    if (wasmMemory.buffer != buffer) {
        updateGlobalBufferAndViews(wasmMemory.buffer)
    }
    return HEAPF32
}
function GROWABLE_HEAP_F64() {
    if (wasmMemory.buffer != buffer) {
        updateGlobalBufferAndViews(wasmMemory.buffer)
    }
    return HEAPF64
}
var Module = typeof Module !== "undefined" ? Module : {};
var moduleOverrides = {};
var key;
for (key in Module) {
    if (Module.hasOwnProperty(key)) {
        moduleOverrides[key] = Module[key]
    }
}
var arguments_ = [];
var thisProgram = "./this.program";
var quit_ = function(status, toThrow) {
    throw toThrow
};
var ENVIRONMENT_IS_WEB = typeof window === "object";
var ENVIRONMENT_IS_WORKER = typeof importScripts === "function";
var ENVIRONMENT_IS_NODE = typeof process === "object" && typeof process.versions === "object" && typeof process.versions.node === "string";
var ENVIRONMENT_IS_PTHREAD = Module["ENVIRONMENT_IS_PTHREAD"] || false;
var _scriptDir = typeof document !== "undefined" && document.currentScript ? document.currentScript.src : undefined;
if (ENVIRONMENT_IS_WORKER) {
    _scriptDir = self.location.href
}
var scriptDirectory = "";
function locateFile(path) {
    if (Module["locateFile"]) {
        return Module["locateFile"](path, scriptDirectory)
    }
    return scriptDirectory + path
}
var read_, readAsync, readBinary, setWindowTitle;
if (ENVIRONMENT_IS_WEB || ENVIRONMENT_IS_WORKER) {
    if (ENVIRONMENT_IS_WORKER) {
        scriptDirectory = self.location.href
    } else if (typeof document !== "undefined" && document.currentScript) {
        scriptDirectory = document.currentScript.src
    }
    if (scriptDirectory.indexOf("blob:") !== 0) {
        scriptDirectory = scriptDirectory.substr(0, scriptDirectory.replace(/[?#].*/, "").lastIndexOf("/") + 1)
    } else {
        scriptDirectory = ""
    }
    {
        read_ = function(url) {
            var xhr = new XMLHttpRequest;
            xhr.open("GET", url, false);
            xhr.send(null);
            return xhr.responseText
        }
        ;
        if (ENVIRONMENT_IS_WORKER) {
            readBinary = function(url) {
                var xhr = new XMLHttpRequest;
                xhr.open("GET", url, false);
                xhr.responseType = "arraybuffer";
                xhr.send(null);
                return new Uint8Array(xhr.response)
            }
        }
        readAsync = function(url, onload, onerror) {
            var xhr = new XMLHttpRequest;
            xhr.open("GET", url, true);
            xhr.responseType = "arraybuffer";
            xhr.onload = function() {
                if (xhr.status == 200 || xhr.status == 0 && xhr.response) {
                    onload(xhr.response);
                    return
                }
                onerror()
            }
            ;
            xhr.onerror = onerror;
            xhr.send(null)
        }
    }
    setWindowTitle = function(title) {
        document.title = title
    }
} else {}
var out = Module["print"] || console.log.bind(console);
var err = Module["printErr"] || console.warn.bind(console);
for (key in moduleOverrides) {
    if (moduleOverrides.hasOwnProperty(key)) {
        Module[key] = moduleOverrides[key]
    }
}
moduleOverrides = null;
if (Module["arguments"])
    arguments_ = Module["arguments"];
if (Module["thisProgram"])
    thisProgram = Module["thisProgram"];
if (Module["quit"])
    quit_ = Module["quit"];
function warnOnce(text) {
    if (!warnOnce.shown)
        warnOnce.shown = {};
    if (!warnOnce.shown[text]) {
        warnOnce.shown[text] = 1;
        err(text)
    }
}
var tempRet0 = 0;
var setTempRet0 = function(value) {
    tempRet0 = value
};
var getTempRet0 = function() {
    return tempRet0
};
var Atomics_load = Atomics.load;
var Atomics_store = Atomics.store;
var Atomics_compareExchange = Atomics.compareExchange;
var wasmBinary;
if (Module["wasmBinary"])
    wasmBinary = Module["wasmBinary"];
var noExitRuntime = Module["noExitRuntime"] || true;
if (typeof WebAssembly !== "object") {
    abort("no native wasm support detected")
}
var wasmMemory;
var wasmModule;
var ABORT = false;
var EXITSTATUS;
function assert(condition, text) {
    if (!condition) {
        abort("Assertion failed: " + text)
    }
}
function TextDecoderWrapper(encoding) {
    var textDecoder = new TextDecoder(encoding);
    this.decode = function(data) {
        if (data.buffer instanceof SharedArrayBuffer) {
            data = new Uint8Array(data)
        }
        return textDecoder.decode.call(textDecoder, data)
    }
}
var UTF8Decoder = typeof TextDecoder !== "undefined" ? new TextDecoderWrapper("utf8") : undefined;
function UTF8ArrayToString(heap, idx, maxBytesToRead) {
    var endIdx = idx + maxBytesToRead;
    var endPtr = idx;
    while (heap[endPtr] && !(endPtr >= endIdx))
        ++endPtr;
    if (endPtr - idx > 16 && heap.subarray && UTF8Decoder) {
        return UTF8Decoder.decode(heap.subarray(idx, endPtr))
    } else {
        var str = "";
        while (idx < endPtr) {
            var u0 = heap[idx++];
            if (!(u0 & 128)) {
                str += String.fromCharCode(u0);
                continue
            }
            var u1 = heap[idx++] & 63;
            if ((u0 & 224) == 192) {
                str += String.fromCharCode((u0 & 31) << 6 | u1);
                continue
            }
            var u2 = heap[idx++] & 63;
            if ((u0 & 240) == 224) {
                u0 = (u0 & 15) << 12 | u1 << 6 | u2
            } else {
                u0 = (u0 & 7) << 18 | u1 << 12 | u2 << 6 | heap[idx++] & 63
            }
            if (u0 < 65536) {
                str += String.fromCharCode(u0)
            } else {
                var ch = u0 - 65536;
                str += String.fromCharCode(55296 | ch >> 10, 56320 | ch & 1023)
            }
        }
    }
    return str
}
function UTF8ToString(ptr, maxBytesToRead) {
    return ptr ? UTF8ArrayToString(GROWABLE_HEAP_U8(), ptr, maxBytesToRead) : ""
}
function stringToUTF8Array(str, heap, outIdx, maxBytesToWrite) {
    if (!(maxBytesToWrite > 0))
        return 0;
    var startIdx = outIdx;
    var endIdx = outIdx + maxBytesToWrite - 1;
    for (var i = 0; i < str.length; ++i) {
        var u = str.charCodeAt(i);
        if (u >= 55296 && u <= 57343) {
            var u1 = str.charCodeAt(++i);
            u = 65536 + ((u & 1023) << 10) | u1 & 1023
        }
        if (u <= 127) {
            if (outIdx >= endIdx)
                break;
            heap[outIdx++] = u
        } else if (u <= 2047) {
            if (outIdx + 1 >= endIdx)
                break;
            heap[outIdx++] = 192 | u >> 6;
            heap[outIdx++] = 128 | u & 63
        } else if (u <= 65535) {
            if (outIdx + 2 >= endIdx)
                break;
            heap[outIdx++] = 224 | u >> 12;
            heap[outIdx++] = 128 | u >> 6 & 63;
            heap[outIdx++] = 128 | u & 63
        } else {
            if (outIdx + 3 >= endIdx)
                break;
            heap[outIdx++] = 240 | u >> 18;
            heap[outIdx++] = 128 | u >> 12 & 63;
            heap[outIdx++] = 128 | u >> 6 & 63;
            heap[outIdx++] = 128 | u & 63
        }
    }
    heap[outIdx] = 0;
    return outIdx - startIdx
}
function stringToUTF8(str, outPtr, maxBytesToWrite) {
    return stringToUTF8Array(str, GROWABLE_HEAP_U8(), outPtr, maxBytesToWrite)
}
function lengthBytesUTF8(str) {
    var len = 0;
    for (var i = 0; i < str.length; ++i) {
        var u = str.charCodeAt(i);
        if (u >= 55296 && u <= 57343)
            u = 65536 + ((u & 1023) << 10) | str.charCodeAt(++i) & 1023;
        if (u <= 127)
            ++len;
        else if (u <= 2047)
            len += 2;
        else if (u <= 65535)
            len += 3;
        else
            len += 4
    }
    return len
}
var UTF16Decoder = typeof TextDecoder !== "undefined" ? new TextDecoderWrapper("utf-16le") : undefined;
function UTF16ToString(ptr, maxBytesToRead) {
    var endPtr = ptr;
    var idx = endPtr >> 1;
    var maxIdx = idx + maxBytesToRead / 2;
    while (!(idx >= maxIdx) && GROWABLE_HEAP_U16()[idx])
        ++idx;
    endPtr = idx << 1;
    if (endPtr - ptr > 32 && UTF16Decoder) {
        return UTF16Decoder.decode(GROWABLE_HEAP_U8().subarray(ptr, endPtr))
    } else {
        var str = "";
        for (var i = 0; !(i >= maxBytesToRead / 2); ++i) {
            var codeUnit = GROWABLE_HEAP_I16()[ptr + i * 2 >> 1];
            if (codeUnit == 0)
                break;
            str += String.fromCharCode(codeUnit)
        }
        return str
    }
}
function stringToUTF16(str, outPtr, maxBytesToWrite) {
    if (maxBytesToWrite === undefined) {
        maxBytesToWrite = 2147483647
    }
    if (maxBytesToWrite < 2)
        return 0;
    maxBytesToWrite -= 2;
    var startPtr = outPtr;
    var numCharsToWrite = maxBytesToWrite < str.length * 2 ? maxBytesToWrite / 2 : str.length;
    for (var i = 0; i < numCharsToWrite; ++i) {
        var codeUnit = str.charCodeAt(i);
        GROWABLE_HEAP_I16()[outPtr >> 1] = codeUnit;
        outPtr += 2
    }
    GROWABLE_HEAP_I16()[outPtr >> 1] = 0;
    return outPtr - startPtr
}
function lengthBytesUTF16(str) {
    return str.length * 2
}
function UTF32ToString(ptr, maxBytesToRead) {
    var i = 0;
    var str = "";
    while (!(i >= maxBytesToRead / 4)) {
        var utf32 = GROWABLE_HEAP_I32()[ptr + i * 4 >> 2];
        if (utf32 == 0)
            break;
        ++i;
        if (utf32 >= 65536) {
            var ch = utf32 - 65536;
            str += String.fromCharCode(55296 | ch >> 10, 56320 | ch & 1023)
        } else {
            str += String.fromCharCode(utf32)
        }
    }
    return str
}
function stringToUTF32(str, outPtr, maxBytesToWrite) {
    if (maxBytesToWrite === undefined) {
        maxBytesToWrite = 2147483647
    }
    if (maxBytesToWrite < 4)
        return 0;
    var startPtr = outPtr;
    var endPtr = startPtr + maxBytesToWrite - 4;
    for (var i = 0; i < str.length; ++i) {
        var codeUnit = str.charCodeAt(i);
        if (codeUnit >= 55296 && codeUnit <= 57343) {
            var trailSurrogate = str.charCodeAt(++i);
            codeUnit = 65536 + ((codeUnit & 1023) << 10) | trailSurrogate & 1023
        }
        GROWABLE_HEAP_I32()[outPtr >> 2] = codeUnit;
        outPtr += 4;
        if (outPtr + 4 > endPtr)
            break
    }
    GROWABLE_HEAP_I32()[outPtr >> 2] = 0;
    return outPtr - startPtr
}
function lengthBytesUTF32(str) {
    var len = 0;
    for (var i = 0; i < str.length; ++i) {
        var codeUnit = str.charCodeAt(i);
        if (codeUnit >= 55296 && codeUnit <= 57343)
            ++i;
        len += 4
    }
    return len
}
function writeArrayToMemory(array, buffer) {
    GROWABLE_HEAP_I8().set(array, buffer)
}
function writeAsciiToMemory(str, buffer, dontAddNull) {
    for (var i = 0; i < str.length; ++i) {
        GROWABLE_HEAP_I8()[buffer++ >> 0] = str.charCodeAt(i)
    }
    if (!dontAddNull)
        GROWABLE_HEAP_I8()[buffer >> 0] = 0
}
function alignUp(x, multiple) {
    if (x % multiple > 0) {
        x += multiple - x % multiple
    }
    return x
}
var buffer, HEAP8, HEAPU8, HEAP16, HEAPU16, HEAP32, HEAPU32, HEAPF32, HEAPF64;
if (ENVIRONMENT_IS_PTHREAD) {
    buffer = Module["buffer"]
}
function updateGlobalBufferAndViews(buf) {
    buffer = buf;
    Module["HEAP8"] = HEAP8 = new Int8Array(buf);
    Module["HEAP16"] = HEAP16 = new Int16Array(buf);
    Module["HEAP32"] = HEAP32 = new Int32Array(buf);
    Module["HEAPU8"] = HEAPU8 = new Uint8Array(buf);
    Module["HEAPU16"] = HEAPU16 = new Uint16Array(buf);
    Module["HEAPU32"] = HEAPU32 = new Uint32Array(buf);
    Module["HEAPF32"] = HEAPF32 = new Float32Array(buf);
    Module["HEAPF64"] = HEAPF64 = new Float64Array(buf)
}
var INITIAL_MEMORY = Module["INITIAL_MEMORY"] || 16777216;
if (ENVIRONMENT_IS_PTHREAD) {
    wasmMemory = Module["wasmMemory"];
    buffer = Module["buffer"]
} else {
    if (Module["wasmMemory"]) {
        wasmMemory = Module["wasmMemory"]
    } else {
        wasmMemory = new WebAssembly.Memory({
            "initial": INITIAL_MEMORY / 65536,
            "maximum": 2147483648 / 65536,
            "shared": true
        });
        if (!(wasmMemory.buffer instanceof SharedArrayBuffer)) {
            err("requested a shared WebAssembly.Memory but the returned buffer is not a SharedArrayBuffer, indicating that while the browser has SharedArrayBuffer it does not have WebAssembly threads support - you may need to set a flag");
            if (ENVIRONMENT_IS_NODE) {
                console.log("(on node you may need: --experimental-wasm-threads --experimental-wasm-bulk-memory and also use a recent version)")
            }
            throw Error("bad memory")
        }
    }
}
if (wasmMemory) {
    buffer = wasmMemory.buffer
}
INITIAL_MEMORY = buffer.byteLength;
updateGlobalBufferAndViews(buffer);
var wasmTable;
var __ATPRERUN__ = [];
var __ATINIT__ = [];
var __ATEXIT__ = [];
var __ATPOSTRUN__ = [];
var runtimeInitialized = false;
var runtimeExited = false;
var runtimeKeepaliveCounter = 0;
function keepRuntimeAlive() {
    return noExitRuntime || runtimeKeepaliveCounter > 0
}
function preRun() {
    if (ENVIRONMENT_IS_PTHREAD)
        return;
    if (Module["preRun"]) {
        if (typeof Module["preRun"] == "function")
            Module["preRun"] = [Module["preRun"]];
        while (Module["preRun"].length) {
            addOnPreRun(Module["preRun"].shift())
        }
    }
    callRuntimeCallbacks(__ATPRERUN__)
}
function initRuntime() {
    runtimeInitialized = true;
    if (ENVIRONMENT_IS_PTHREAD)
        return;
    callRuntimeCallbacks(__ATINIT__)
}
function exitRuntime() {
    if (ENVIRONMENT_IS_PTHREAD)
        return;
    PThread.terminateAllThreads();
    runtimeExited = true
}
function postRun() {
    if (ENVIRONMENT_IS_PTHREAD)
        return;
    if (Module["postRun"]) {
        if (typeof Module["postRun"] == "function")
            Module["postRun"] = [Module["postRun"]];
        while (Module["postRun"].length) {
            addOnPostRun(Module["postRun"].shift())
        }
    }
    callRuntimeCallbacks(__ATPOSTRUN__)
}
function addOnPreRun(cb) {
    __ATPRERUN__.unshift(cb)
}
function addOnInit(cb) {
    __ATINIT__.unshift(cb)
}
function addOnPostRun(cb) {
    __ATPOSTRUN__.unshift(cb)
}
var runDependencies = 0;
var runDependencyWatcher = null;
var dependenciesFulfilled = null;
function addRunDependency(id) {
    runDependencies++;
    if (Module["monitorRunDependencies"]) {
        Module["monitorRunDependencies"](runDependencies)
    }
}
function removeRunDependency(id) {
    runDependencies--;
    if (Module["monitorRunDependencies"]) {
        Module["monitorRunDependencies"](runDependencies)
    }
    if (runDependencies == 0) {
        if (runDependencyWatcher !== null) {
            clearInterval(runDependencyWatcher);
            runDependencyWatcher = null
        }
        if (dependenciesFulfilled) {
            var callback = dependenciesFulfilled;
            dependenciesFulfilled = null;
            callback()
        }
    }
}
Module["preloadedImages"] = {};
Module["preloadedAudios"] = {};
function abort(what) {
    if (ENVIRONMENT_IS_PTHREAD) {
        postMessage({
            "cmd": "onAbort",
            "arg": what
        })
    } else {
        if (Module["onAbort"]) {
            Module["onAbort"](what)
        }
    }
    what = "Aborted(" + what + ")";
    err(what);
    ABORT = true;
    EXITSTATUS = 1;
    what += ". Build with -s ASSERTIONS=1 for more info.";
    var e = new WebAssembly.RuntimeError(what);
    throw e
}
var dataURIPrefix = "data:application/octet-stream;base64,";
function isDataURI(filename) {
    return filename.startsWith(dataURIPrefix)
}
var wasmBinaryFile;
wasmBinaryFile = "imap.wasm";
if (!isDataURI(wasmBinaryFile)) {
    wasmBinaryFile = locateFile(wasmBinaryFile)
}
function getBinary(file) {
    try {
        if (file == wasmBinaryFile && wasmBinary) {
            return new Uint8Array(wasmBinary)
        }
        if (readBinary) {
            return readBinary(file)
        } else {
            throw "both async and sync fetching of the wasm failed"
        }
    } catch (err) {
        abort(err)
    }
}
function getBinaryPromise() {
    if (!wasmBinary && (ENVIRONMENT_IS_WEB || ENVIRONMENT_IS_WORKER)) {
        if (typeof fetch === "function") {
            return fetch(wasmBinaryFile, {
                credentials: "same-origin"
            }).then(function(response) {
                if (!response["ok"]) {
                    throw "failed to load wasm binary file at '" + wasmBinaryFile + "'"
                }
                return response["arrayBuffer"]()
            }).catch(function() {
                return getBinary(wasmBinaryFile)
            })
        }
    }
    return Promise.resolve().then(function() {
        return getBinary(wasmBinaryFile)
    })
}
function createWasm() {
    var info = {
        "a": asmLibraryArg
    };
    function receiveInstance(instance, module) {
        var exports = instance.exports;
        Module["asm"] = exports;
        registerTlsInit(Module["asm"]["Ba"]);
        wasmTable = Module["asm"]["za"];
        addOnInit(Module["asm"]["ya"]);
        wasmModule = module;
        if (!ENVIRONMENT_IS_PTHREAD) {
            var numWorkersToLoad = PThread.unusedWorkers.length;
            PThread.unusedWorkers.forEach(function(w) {
                PThread.loadWasmModuleToWorker(w, function() {
                    if (!--numWorkersToLoad)
                        removeRunDependency("wasm-instantiate")
                })
            })
        }
    }
    if (!ENVIRONMENT_IS_PTHREAD) {
        addRunDependency("wasm-instantiate")
    }
    function receiveInstantiationResult(result) {
        receiveInstance(result["instance"], result["module"])
    }
    function instantiateArrayBuffer(receiver) {
        return getBinaryPromise().then(function(binary) {
            return WebAssembly.instantiate(binary, info)
        }).then(function(instance) {
            return instance
        }).then(receiver, function(reason) {
            err("failed to asynchronously prepare wasm: " + reason);
            abort(reason)
        })
    }
    function instantiateAsync() {
        if (!wasmBinary && typeof WebAssembly.instantiateStreaming === "function" && !isDataURI(wasmBinaryFile) && typeof fetch === "function") {
            return fetch(wasmBinaryFile, {
                credentials: "same-origin"
            }).then(function(response) {
                var result = WebAssembly.instantiateStreaming(response, info);
                return result.then(receiveInstantiationResult, function(reason) {
                    err("wasm streaming compile failed: " + reason);
                    err("falling back to ArrayBuffer instantiation");
                    return instantiateArrayBuffer(receiveInstantiationResult)
                })
            })
        } else {
            return instantiateArrayBuffer(receiveInstantiationResult)
        }
    }
    if (Module["instantiateWasm"]) {
        try {
            var exports = Module["instantiateWasm"](info, receiveInstance);
            return exports
        } catch (e) {
            err("Module.instantiateWasm callback failed with error: " + e);
            return false
        }
    }
    instantiateAsync();
    return {}
}
var ASM_CONSTS = {
    47052: function($0, $1, $2) {
        window.InputMapperApi.enableRawMouseInput($0, $1, $2)
    },
    47111: function() {
        InputMapperApi.imapInitSuccess(true)
    },
    47153: function() {
        InputMapperApi.imapInitFailure(true)
    },
    47195: function($0, $1, $2, $3) {
        InputMapperApi.sendNativeMouse($0, $1, $2, $3)
    },
    47247: function($0, $1) {
        InputMapperApi.sendFakeEvents($0, $1)
    },
    47290: function($0) {
        window.InputMapperApi.sendControlStatus(UTF8ToString($0))
    },
    47353: function($0) {
        window.InputMapperApi.sendTouchPoints(JSON.parse(UTF8ToString($0)), $0)
    },
    47430: function($0, $1) {
        window.InputMapperApi.sendKeyToAndroid($0, $1)
    }
};
function callRuntimeCallbacks(callbacks) {
    while (callbacks.length > 0) {
        var callback = callbacks.shift();
        if (typeof callback == "function") {
            callback(Module);
            continue
        }
        var func = callback.func;
        if (typeof func === "number") {
            if (callback.arg === undefined) {
                getWasmTableEntry(func)()
            } else {
                getWasmTableEntry(func)(callback.arg)
            }
        } else {
            func(callback.arg === undefined ? null : callback.arg)
        }
    }
}
function withStackSave(f) {
    var stack = stackSave();
    var ret = f();
    stackRestore(stack);
    return ret
}
function _emscripten_futex_wake(addr, count) {
    if (addr <= 0 || addr > GROWABLE_HEAP_I8().length || addr & 3 != 0 || count < 0)
        return -28;
    if (count == 0)
        return 0;
    if (count >= 2147483647)
        count = Infinity;
    var mainThreadWaitAddress = Atomics.load(GROWABLE_HEAP_I32(), __emscripten_main_thread_futex >> 2);
    var mainThreadWoken = 0;
    if (mainThreadWaitAddress == addr) {
        var loadedAddr = Atomics.compareExchange(GROWABLE_HEAP_I32(), __emscripten_main_thread_futex >> 2, mainThreadWaitAddress, 0);
        if (loadedAddr == mainThreadWaitAddress) {
            --count;
            mainThreadWoken = 1;
            if (count <= 0)
                return 1
        }
    }
    var ret = Atomics.notify(GROWABLE_HEAP_I32(), addr >> 2, count);
    if (ret >= 0)
        return ret + mainThreadWoken;
    throw "Atomics.notify returned an unexpected value " + ret
}
Module["_emscripten_futex_wake"] = _emscripten_futex_wake;
function killThread(pthread_ptr) {
    GROWABLE_HEAP_I32()[pthread_ptr + 8 >> 2] = 0;
    var pthread = PThread.pthreads[pthread_ptr];
    delete PThread.pthreads[pthread_ptr];
    pthread.worker.terminate();
    freeThreadData(pthread);
    PThread.runningWorkers.splice(PThread.runningWorkers.indexOf(pthread.worker), 1);
    pthread.worker.pthread = undefined
}
function cancelThread(pthread_ptr) {
    var pthread = PThread.pthreads[pthread_ptr];
    pthread.worker.postMessage({
        "cmd": "cancel"
    })
}
function cleanupThread(pthread_ptr) {
    var pthread = PThread.pthreads[pthread_ptr];
    if (pthread) {
        GROWABLE_HEAP_I32()[pthread_ptr + 8 >> 2] = 0;
        var worker = pthread.worker;
        PThread.returnWorkerToPool(worker)
    }
}
function freeThreadData(pthread) {
    if (!pthread)
        return;
    if (pthread.threadInfoStruct) {
        _free(pthread.threadInfoStruct)
    }
    pthread.threadInfoStruct = 0;
    if (pthread.allocatedOwnStack && pthread.stackBase)
        _free(pthread.stackBase);
    pthread.stackBase = 0;
    if (pthread.worker)
        pthread.worker.pthread = null
}
function _exit(status) {
    exit(status)
}
Module["_exit"] = _exit;
function handleException(e) {
    if (e instanceof ExitStatus || e == "unwind") {
        return EXITSTATUS
    }
    quit_(1, e)
}
var PThread = {
    unusedWorkers: [],
    runningWorkers: [],
    tlsInitFunctions: [],
    initMainThreadBlock: function() {
        var pthreadPoolSize = 20;
        for (var i = 0; i < pthreadPoolSize; ++i) {
            PThread.allocateUnusedWorker()
        }
    },
    initWorker: function() {},
    pthreads: {},
    setExitStatus: function(status) {
        EXITSTATUS = status
    },
    terminateAllThreads: function() {
        for (var t in PThread.pthreads) {
            var pthread = PThread.pthreads[t];
            if (pthread && pthread.worker) {
                PThread.returnWorkerToPool(pthread.worker)
            }
        }
        for (var i = 0; i < PThread.unusedWorkers.length; ++i) {
            var worker = PThread.unusedWorkers[i];
            worker.terminate()
        }
        PThread.unusedWorkers = []
    },
    returnWorkerToPool: function(worker) {
        PThread.runWithoutMainThreadQueuedCalls(function() {
            delete PThread.pthreads[worker.pthread.threadInfoStruct];
            PThread.unusedWorkers.push(worker);
            PThread.runningWorkers.splice(PThread.runningWorkers.indexOf(worker), 1);
            freeThreadData(worker.pthread);
            worker.pthread = undefined
        })
    },
    runWithoutMainThreadQueuedCalls: function(func) {
        GROWABLE_HEAP_I32()[__emscripten_allow_main_runtime_queued_calls >> 2] = 0;
        try {
            func()
        } finally {
            GROWABLE_HEAP_I32()[__emscripten_allow_main_runtime_queued_calls >> 2] = 1
        }
    },
    receiveObjectTransfer: function(data) {},
    threadInit: function() {
        for (var i in PThread.tlsInitFunctions) {
            PThread.tlsInitFunctions[i]()
        }
    },
    loadWasmModuleToWorker: function(worker, onFinishedLoading) {
        worker.onmessage = function(e) {
            var d = e["data"];
            var cmd = d["cmd"];
            if (worker.pthread)
                PThread.currentProxiedOperationCallerThread = worker.pthread.threadInfoStruct;
            if (d["targetThread"] && d["targetThread"] != _pthread_self()) {
                var thread = PThread.pthreads[d.targetThread];
                if (thread) {
                    thread.worker.postMessage(d, d["transferList"])
                } else {
                    err('Internal error! Worker sent a message "' + cmd + '" to target pthread ' + d["targetThread"] + ", but that thread no longer exists!")
                }
                PThread.currentProxiedOperationCallerThread = undefined;
                return
            }
            if (cmd === "processQueuedMainThreadWork") {
                _emscripten_main_thread_process_queued_calls()
            } else if (cmd === "spawnThread") {
                spawnThread(d)
            } else if (cmd === "cleanupThread") {
                cleanupThread(d["thread"])
            } else if (cmd === "killThread") {
                killThread(d["thread"])
            } else if (cmd === "cancelThread") {
                cancelThread(d["thread"])
            } else if (cmd === "loaded") {
                worker.loaded = true;
                if (onFinishedLoading)
                    onFinishedLoading(worker);
                if (worker.runPthread) {
                    worker.runPthread();
                    delete worker.runPthread
                }
            } else if (cmd === "print") {
                out("Thread " + d["threadId"] + ": " + d["text"])
            } else if (cmd === "printErr") {
                err("Thread " + d["threadId"] + ": " + d["text"])
            } else if (cmd === "alert") {
                alert("Thread " + d["threadId"] + ": " + d["text"])
            } else if (cmd === "detachedExit") {
                PThread.returnWorkerToPool(worker)
            } else if (cmd === "cancelDone") {
                PThread.returnWorkerToPool(worker)
            } else if (d.target === "setimmediate") {
                worker.postMessage(d)
            } else if (cmd === "onAbort") {
                if (Module["onAbort"]) {
                    Module["onAbort"](d["arg"])
                }
            } else {
                err("worker sent an unknown command " + cmd)
            }
            PThread.currentProxiedOperationCallerThread = undefined
        }
        ;
        worker.onerror = function(e) {
            err("pthread sent an error! " + e.filename + ":" + e.lineno + ": " + e.message);
            throw e
        }
        ;
        worker.postMessage({
            "cmd": "load",
            "urlOrBlob": Module["mainScriptUrlOrBlob"] || _scriptDir,
            "wasmMemory": wasmMemory,
            "wasmModule": wasmModule
        })
    },
    allocateUnusedWorker: function() {
        var pthreadMainJs = locateFile("imap.worker.js");
        PThread.unusedWorkers.push(new Worker(pthreadMainJs))
    },
    getNewWorker: function() {
        if (PThread.unusedWorkers.length == 0) {
            PThread.allocateUnusedWorker();
            PThread.loadWasmModuleToWorker(PThread.unusedWorkers[0])
        }
        return PThread.unusedWorkers.pop()
    }
};
function establishStackSpace(stackTop, stackMax) {
    _emscripten_stack_set_limits(stackTop, stackMax);
    stackRestore(stackTop)
}
Module["establishStackSpace"] = establishStackSpace;
function exitOnMainThread(returnCode) {
    if (ENVIRONMENT_IS_PTHREAD)
        return _emscripten_proxy_to_main_thread_js(1, 0, returnCode);
    try {
        _exit(returnCode)
    } catch (e) {
        handleException(e)
    }
}
function getWasmTableEntry(funcPtr) {
    return wasmTable.get(funcPtr)
}
function invokeEntryPoint(ptr, arg) {
    return getWasmTableEntry(ptr)(arg)
}
Module["invokeEntryPoint"] = invokeEntryPoint;
function registerTlsInit(tlsInitFunc, moduleExports, metadata) {
    PThread.tlsInitFunctions.push(tlsInitFunc)
}
function ___assert_fail(condition, filename, line, func) {
    abort("Assertion failed: " + UTF8ToString(condition) + ", at: " + [filename ? UTF8ToString(filename) : "unknown filename", line, func ? UTF8ToString(func) : "unknown function"])
}
var _emscripten_get_now;
if (ENVIRONMENT_IS_PTHREAD) {
    _emscripten_get_now = function() {
        return performance.now() - Module["__performance_now_clock_drift"]
    }
} else
    _emscripten_get_now = function() {
        return performance.now()
    }
    ;
var _emscripten_get_now_is_monotonic = true;
function setErrNo(value) {
    GROWABLE_HEAP_I32()[___errno_location() >> 2] = value;
    return value
}
function _clock_gettime(clk_id, tp) {
    var now;
    if (clk_id === 0) {
        now = Date.now()
    } else if ((clk_id === 1 || clk_id === 4) && _emscripten_get_now_is_monotonic) {
        now = _emscripten_get_now()
    } else {
        setErrNo(28);
        return -1
    }
    GROWABLE_HEAP_I32()[tp >> 2] = now / 1e3 | 0;
    GROWABLE_HEAP_I32()[tp + 4 >> 2] = now % 1e3 * 1e3 * 1e3 | 0;
    return 0
}
function ___cxa_allocate_exception(size) {
    return _malloc(size + 16) + 16
}
function _atexit(func, arg) {
    if (ENVIRONMENT_IS_PTHREAD)
        return _emscripten_proxy_to_main_thread_js(2, 1, func, arg)
}
function ExceptionInfo(excPtr) {
    this.excPtr = excPtr;
    this.ptr = excPtr - 16;
    this.set_type = function(type) {
        GROWABLE_HEAP_I32()[this.ptr + 4 >> 2] = type
    }
    ;
    this.get_type = function() {
        return GROWABLE_HEAP_I32()[this.ptr + 4 >> 2]
    }
    ;
    this.set_destructor = function(destructor) {
        GROWABLE_HEAP_I32()[this.ptr + 8 >> 2] = destructor
    }
    ;
    this.get_destructor = function() {
        return GROWABLE_HEAP_I32()[this.ptr + 8 >> 2]
    }
    ;
    this.set_refcount = function(refcount) {
        GROWABLE_HEAP_I32()[this.ptr >> 2] = refcount
    }
    ;
    this.set_caught = function(caught) {
        caught = caught ? 1 : 0;
        GROWABLE_HEAP_I8()[this.ptr + 12 >> 0] = caught
    }
    ;
    this.get_caught = function() {
        return GROWABLE_HEAP_I8()[this.ptr + 12 >> 0] != 0
    }
    ;
    this.set_rethrown = function(rethrown) {
        rethrown = rethrown ? 1 : 0;
        GROWABLE_HEAP_I8()[this.ptr + 13 >> 0] = rethrown
    }
    ;
    this.get_rethrown = function() {
        return GROWABLE_HEAP_I8()[this.ptr + 13 >> 0] != 0
    }
    ;
    this.init = function(type, destructor) {
        this.set_type(type);
        this.set_destructor(destructor);
        this.set_refcount(0);
        this.set_caught(false);
        this.set_rethrown(false)
    }
    ;
    this.add_ref = function() {
        Atomics.add(GROWABLE_HEAP_I32(), this.ptr + 0 >> 2, 1)
    }
    ;
    this.release_ref = function() {
        var prev = Atomics.sub(GROWABLE_HEAP_I32(), this.ptr + 0 >> 2, 1);
        return prev === 1
    }
}
function CatchInfo(ptr) {
    this.free = function() {
        _free(this.ptr);
        this.ptr = 0
    }
    ;
    this.set_base_ptr = function(basePtr) {
        GROWABLE_HEAP_I32()[this.ptr >> 2] = basePtr
    }
    ;
    this.get_base_ptr = function() {
        return GROWABLE_HEAP_I32()[this.ptr >> 2]
    }
    ;
    this.set_adjusted_ptr = function(adjustedPtr) {
        GROWABLE_HEAP_I32()[this.ptr + 4 >> 2] = adjustedPtr
    }
    ;
    this.get_adjusted_ptr_addr = function() {
        return this.ptr + 4
    }
    ;
    this.get_adjusted_ptr = function() {
        return GROWABLE_HEAP_I32()[this.ptr + 4 >> 2]
    }
    ;
    this.get_exception_ptr = function() {
        var isPointer = ___cxa_is_pointer_type(this.get_exception_info().get_type());
        if (isPointer) {
            return GROWABLE_HEAP_I32()[this.get_base_ptr() >> 2]
        }
        var adjusted = this.get_adjusted_ptr();
        if (adjusted !== 0)
            return adjusted;
        return this.get_base_ptr()
    }
    ;
    this.get_exception_info = function() {
        return new ExceptionInfo(this.get_base_ptr())
    }
    ;
    if (ptr === undefined) {
        this.ptr = _malloc(8);
        this.set_adjusted_ptr(0)
    } else {
        this.ptr = ptr
    }
}
var exceptionCaught = [];
function exception_addRef(info) {
    info.add_ref()
}
var uncaughtExceptionCount = 0;
function ___cxa_begin_catch(ptr) {
    var catchInfo = new CatchInfo(ptr);
    var info = catchInfo.get_exception_info();
    if (!info.get_caught()) {
        info.set_caught(true);
        uncaughtExceptionCount--
    }
    info.set_rethrown(false);
    exceptionCaught.push(catchInfo);
    exception_addRef(info);
    return catchInfo.get_exception_ptr()
}
var exceptionLast = 0;
function ___cxa_free_exception(ptr) {
    return _free(new ExceptionInfo(ptr).ptr)
}
function exception_decRef(info) {
    if (info.release_ref() && !info.get_rethrown()) {
        var destructor = info.get_destructor();
        if (destructor) {
            getWasmTableEntry(destructor)(info.excPtr)
        }
        ___cxa_free_exception(info.excPtr)
    }
}
function ___cxa_end_catch() {
    _setThrew(0);
    var catchInfo = exceptionCaught.pop();
    exception_decRef(catchInfo.get_exception_info());
    catchInfo.free();
    exceptionLast = 0
}
function ___resumeException(catchInfoPtr) {
    var catchInfo = new CatchInfo(catchInfoPtr);
    var ptr = catchInfo.get_base_ptr();
    if (!exceptionLast) {
        exceptionLast = ptr
    }
    catchInfo.free();
    throw ptr
}
function ___cxa_find_matching_catch_2() {
    var thrown = exceptionLast;
    if (!thrown) {
        setTempRet0(0);
        return 0 | 0
    }
    var info = new ExceptionInfo(thrown);
    var thrownType = info.get_type();
    var catchInfo = new CatchInfo;
    catchInfo.set_base_ptr(thrown);
    catchInfo.set_adjusted_ptr(thrown);
    if (!thrownType) {
        setTempRet0(0);
        return catchInfo.ptr | 0
    }
    var typeArray = Array.prototype.slice.call(arguments);
    for (var i = 0; i < typeArray.length; i++) {
        var caughtType = typeArray[i];
        if (caughtType === 0 || caughtType === thrownType) {
            break
        }
        if (___cxa_can_catch(caughtType, thrownType, catchInfo.get_adjusted_ptr_addr())) {
            setTempRet0(caughtType);
            return catchInfo.ptr | 0
        }
    }
    setTempRet0(thrownType);
    return catchInfo.ptr | 0
}
function ___cxa_find_matching_catch_3() {
    var thrown = exceptionLast;
    if (!thrown) {
        setTempRet0(0);
        return 0 | 0
    }
    var info = new ExceptionInfo(thrown);
    var thrownType = info.get_type();
    var catchInfo = new CatchInfo;
    catchInfo.set_base_ptr(thrown);
    catchInfo.set_adjusted_ptr(thrown);
    if (!thrownType) {
        setTempRet0(0);
        return catchInfo.ptr | 0
    }
    var typeArray = Array.prototype.slice.call(arguments);
    for (var i = 0; i < typeArray.length; i++) {
        var caughtType = typeArray[i];
        if (caughtType === 0 || caughtType === thrownType) {
            break
        }
        if (___cxa_can_catch(caughtType, thrownType, catchInfo.get_adjusted_ptr_addr())) {
            setTempRet0(caughtType);
            return catchInfo.ptr | 0
        }
    }
    setTempRet0(thrownType);
    return catchInfo.ptr | 0
}
function ___cxa_rethrow() {
    var catchInfo = exceptionCaught.pop();
    if (!catchInfo) {
        abort("no exception to throw")
    }
    var info = catchInfo.get_exception_info();
    var ptr = catchInfo.get_base_ptr();
    if (!info.get_rethrown()) {
        exceptionCaught.push(catchInfo);
        info.set_rethrown(true);
        info.set_caught(false);
        uncaughtExceptionCount++
    } else {
        catchInfo.free()
    }
    exceptionLast = ptr;
    throw ptr
}
function ___cxa_throw(ptr, type, destructor) {
    var info = new ExceptionInfo(ptr);
    info.init(type, destructor);
    exceptionLast = ptr;
    uncaughtExceptionCount++;
    throw ptr
}
function ___cxa_uncaught_exceptions() {
    return uncaughtExceptionCount
}
function ___emscripten_init_main_thread_js(tb) {
    __emscripten_thread_init(tb, !ENVIRONMENT_IS_WORKER, 1);
    PThread.threadInit()
}
function spawnThread(threadParams) {
    var worker = PThread.getNewWorker();
    if (!worker) {
        return 6
    }
    PThread.runningWorkers.push(worker);
    var stackHigh = threadParams.stackBase + threadParams.stackSize;
    var pthread = PThread.pthreads[threadParams.pthread_ptr] = {
        worker: worker,
        stackBase: threadParams.stackBase,
        stackSize: threadParams.stackSize,
        allocatedOwnStack: threadParams.allocatedOwnStack,
        threadInfoStruct: threadParams.pthread_ptr
    };
    var tis = pthread.threadInfoStruct >> 2;
    Atomics.store(GROWABLE_HEAP_U32(), tis + (60 >> 2), threadParams.detached);
    Atomics.store(GROWABLE_HEAP_U32(), tis + (76 >> 2), threadParams.stackSize);
    Atomics.store(GROWABLE_HEAP_U32(), tis + (72 >> 2), stackHigh);
    Atomics.store(GROWABLE_HEAP_U32(), tis + (100 >> 2), threadParams.stackSize);
    Atomics.store(GROWABLE_HEAP_U32(), tis + (100 + 8 >> 2), stackHigh);
    Atomics.store(GROWABLE_HEAP_U32(), tis + (100 + 12 >> 2), threadParams.detached);
    worker.pthread = pthread;
    var msg = {
        "cmd": "run",
        "start_routine": threadParams.startRoutine,
        "arg": threadParams.arg,
        "threadInfoStruct": threadParams.pthread_ptr,
        "stackBase": threadParams.stackBase,
        "stackSize": threadParams.stackSize
    };
    worker.runPthread = function() {
        msg.time = performance.now();
        worker.postMessage(msg, threadParams.transferList)
    }
    ;
    if (worker.loaded) {
        worker.runPthread();
        delete worker.runPthread
    }
    return 0
}
function ___pthread_create_js(pthread_ptr, attr, start_routine, arg) {
    if (typeof SharedArrayBuffer === "undefined") {
        err("Current environment does not support SharedArrayBuffer, pthreads are not available!");
        return 6
    }
    var transferList = [];
    var error = 0;
    if (ENVIRONMENT_IS_PTHREAD && (transferList.length === 0 || error)) {
        return _emscripten_sync_run_in_main_thread_4(687865856, pthread_ptr, attr, start_routine, arg)
    }
    if (error)
        return error;
    var stackSize = 0;
    var stackBase = 0;
    var detached = 0;
    if (attr && attr != -1) {
        stackSize = GROWABLE_HEAP_I32()[attr >> 2];
        stackSize += 2097152;
        stackBase = GROWABLE_HEAP_I32()[attr + 8 >> 2];
        detached = GROWABLE_HEAP_I32()[attr + 12 >> 2] !== 0
    } else {
        stackSize = 2097152
    }
    var allocatedOwnStack = stackBase == 0;
    if (allocatedOwnStack) {
        stackBase = _memalign(16, stackSize)
    } else {
        stackBase -= stackSize;
        assert(stackBase > 0)
    }
    var threadParams = {
        stackBase: stackBase,
        stackSize: stackSize,
        allocatedOwnStack: allocatedOwnStack,
        detached: detached,
        startRoutine: start_routine,
        pthread_ptr: pthread_ptr,
        arg: arg,
        transferList: transferList
    };
    if (ENVIRONMENT_IS_PTHREAD) {
        threadParams.cmd = "spawnThread";
        postMessage(threadParams, transferList);
        return 0
    }
    return spawnThread(threadParams)
}
function ___pthread_detached_exit() {
    postMessage({
        "cmd": "detachedExit"
    })
}
function _emscripten_futex_wait(addr, val, timeout) {
    if (addr <= 0 || addr > GROWABLE_HEAP_I8().length || addr & 3 != 0)
        return -28;
    if (!ENVIRONMENT_IS_WEB) {
        var ret = Atomics.wait(GROWABLE_HEAP_I32(), addr >> 2, val, timeout);
        if (ret === "timed-out")
            return -73;
        if (ret === "not-equal")
            return -6;
        if (ret === "ok")
            return 0;
        throw "Atomics.wait returned an unexpected value " + ret
    } else {
        if (Atomics.load(GROWABLE_HEAP_I32(), addr >> 2) != val) {
            return -6
        }
        var tNow = performance.now();
        var tEnd = tNow + timeout;
        var lastAddr = Atomics.exchange(GROWABLE_HEAP_I32(), __emscripten_main_thread_futex >> 2, addr);
        while (1) {
            tNow = performance.now();
            if (tNow > tEnd) {
                lastAddr = Atomics.exchange(GROWABLE_HEAP_I32(), __emscripten_main_thread_futex >> 2, 0);
                return -73
            }
            lastAddr = Atomics.exchange(GROWABLE_HEAP_I32(), __emscripten_main_thread_futex >> 2, 0);
            if (lastAddr == 0) {
                break
            }
            _emscripten_main_thread_process_queued_calls();
            if (Atomics.load(GROWABLE_HEAP_I32(), addr >> 2) != val) {
                return -6
            }
            lastAddr = Atomics.exchange(GROWABLE_HEAP_I32(), __emscripten_main_thread_futex >> 2, addr)
        }
        return 0
    }
}
function _emscripten_check_blocking_allowed() {
    if (ENVIRONMENT_IS_WORKER)
        return;
    warnOnce("Blocking on the main thread is very dangerous, see https://emscripten.org/docs/porting/pthreads.html#blocking-on-the-main-browser-thread")
}
function __emscripten_do_pthread_join(thread, status, block) {
    if (!thread) {
        err("pthread_join attempted on a null thread pointer!");
        return 71
    }
    var self = GROWABLE_HEAP_I32()[thread + 8 >> 2];
    if (self !== thread) {
        err("pthread_join attempted on thread " + thread + ", which does not point to a valid thread, or does not exist anymore!");
        return 71
    }
    var detached = Atomics.load(GROWABLE_HEAP_U32(), thread + 60 >> 2);
    if (detached) {
        err("Attempted to join thread " + thread + ", which was already detached!");
        return 28
    }
    if (ENVIRONMENT_IS_PTHREAD && _pthread_self() == thread) {
        err("PThread " + thread + " is attempting to join to itself!");
        return 16
    } else if (!ENVIRONMENT_IS_PTHREAD && _emscripten_main_browser_thread_id() == thread) {
        err("Main thread " + thread + " is attempting to join to itself!");
        return 16
    }
    if (block) {
        _emscripten_check_blocking_allowed()
    }
    for (; ; ) {
        var threadStatus = Atomics.load(GROWABLE_HEAP_U32(), thread + 0 >> 2);
        if (threadStatus == 1) {
            if (status) {
                var result = Atomics.load(GROWABLE_HEAP_U32(), thread + 88 >> 2);
                GROWABLE_HEAP_I32()[status >> 2] = result
            }
            Atomics.store(GROWABLE_HEAP_U32(), thread + 60 >> 2, 1);
            if (!ENVIRONMENT_IS_PTHREAD)
                cleanupThread(thread);
            else
                postMessage({
                    "cmd": "cleanupThread",
                    "thread": thread
                });
            return 0
        }
        if (!block) {
            return 10
        }
        _pthread_testcancel();
        if (!ENVIRONMENT_IS_PTHREAD)
            _emscripten_main_thread_process_queued_calls();
        _emscripten_futex_wait(thread + 0, threadStatus, ENVIRONMENT_IS_PTHREAD ? 100 : 1)
    }
}
function ___pthread_join_js(thread, status) {
    return __emscripten_do_pthread_join(thread, status, true)
}
function __embind_register_bigint(primitiveType, name, size, minRange, maxRange) {}
function getShiftFromSize(size) {
    switch (size) {
    case 1:
        return 0;
    case 2:
        return 1;
    case 4:
        return 2;
    case 8:
        return 3;
    default:
        throw new TypeError("Unknown type size: " + size)
    }
}
function embind_init_charCodes() {
    var codes = new Array(256);
    for (var i = 0; i < 256; ++i) {
        codes[i] = String.fromCharCode(i)
    }
    embind_charCodes = codes
}
var embind_charCodes = undefined;
function readLatin1String(ptr) {
    var ret = "";
    var c = ptr;
    while (GROWABLE_HEAP_U8()[c]) {
        ret += embind_charCodes[GROWABLE_HEAP_U8()[c++]]
    }
    return ret
}
var awaitingDependencies = {};
var registeredTypes = {};
var typeDependencies = {};
var char_0 = 48;
var char_9 = 57;
function makeLegalFunctionName(name) {
    if (undefined === name) {
        return "_unknown"
    }
    name = name.replace(/[^a-zA-Z0-9_]/g, "$");
    var f = name.charCodeAt(0);
    if (f >= char_0 && f <= char_9) {
        return "_" + name
    } else {
        return name
    }
}
function createNamedFunction(name, body) {
    name = makeLegalFunctionName(name);
    return new Function("body","return function " + name + "() {\n" + '    "use strict";' + "    return body.apply(this, arguments);\n" + "};\n")(body)
}
function extendError(baseErrorType, errorName) {
    var errorClass = createNamedFunction(errorName, function(message) {
        this.name = errorName;
        this.message = message;
        var stack = new Error(message).stack;
        if (stack !== undefined) {
            this.stack = this.toString() + "\n" + stack.replace(/^Error(:[^\n]*)?\n/, "")
        }
    });
    errorClass.prototype = Object.create(baseErrorType.prototype);
    errorClass.prototype.constructor = errorClass;
    errorClass.prototype.toString = function() {
        if (this.message === undefined) {
            return this.name
        } else {
            return this.name + ": " + this.message
        }
    }
    ;
    return errorClass
}
var BindingError = undefined;
function throwBindingError(message) {
    throw new BindingError(message)
}
var InternalError = undefined;
function throwInternalError(message) {
    throw new InternalError(message)
}
function whenDependentTypesAreResolved(myTypes, dependentTypes, getTypeConverters) {
    myTypes.forEach(function(type) {
        typeDependencies[type] = dependentTypes
    });
    function onComplete(typeConverters) {
        var myTypeConverters = getTypeConverters(typeConverters);
        if (myTypeConverters.length !== myTypes.length) {
            throwInternalError("Mismatched type converter count")
        }
        for (var i = 0; i < myTypes.length; ++i) {
            registerType(myTypes[i], myTypeConverters[i])
        }
    }
    var typeConverters = new Array(dependentTypes.length);
    var unregisteredTypes = [];
    var registered = 0;
    dependentTypes.forEach(function(dt, i) {
        if (registeredTypes.hasOwnProperty(dt)) {
            typeConverters[i] = registeredTypes[dt]
        } else {
            unregisteredTypes.push(dt);
            if (!awaitingDependencies.hasOwnProperty(dt)) {
                awaitingDependencies[dt] = []
            }
            awaitingDependencies[dt].push(function() {
                typeConverters[i] = registeredTypes[dt];
                ++registered;
                if (registered === unregisteredTypes.length) {
                    onComplete(typeConverters)
                }
            })
        }
    });
    if (0 === unregisteredTypes.length) {
        onComplete(typeConverters)
    }
}
function registerType(rawType, registeredInstance, options) {
    options = options || {};
    if (!("argPackAdvance"in registeredInstance)) {
        throw new TypeError("registerType registeredInstance requires argPackAdvance")
    }
    var name = registeredInstance.name;
    if (!rawType) {
        throwBindingError('type "' + name + '" must have a positive integer typeid pointer')
    }
    if (registeredTypes.hasOwnProperty(rawType)) {
        if (options.ignoreDuplicateRegistrations) {
            return
        } else {
            throwBindingError("Cannot register type '" + name + "' twice")
        }
    }
    registeredTypes[rawType] = registeredInstance;
    delete typeDependencies[rawType];
    if (awaitingDependencies.hasOwnProperty(rawType)) {
        var callbacks = awaitingDependencies[rawType];
        delete awaitingDependencies[rawType];
        callbacks.forEach(function(cb) {
            cb()
        })
    }
}
function __embind_register_bool(rawType, name, size, trueValue, falseValue) {
    var shift = getShiftFromSize(size);
    name = readLatin1String(name);
    registerType(rawType, {
        name: name,
        "fromWireType": function(wt) {
            return !!wt
        },
        "toWireType": function(destructors, o) {
            return o ? trueValue : falseValue
        },
        "argPackAdvance": 8,
        "readValueFromPointer": function(pointer) {
            var heap;
            if (size === 1) {
                heap = GROWABLE_HEAP_I8()
            } else if (size === 2) {
                heap = GROWABLE_HEAP_I16()
            } else if (size === 4) {
                heap = GROWABLE_HEAP_I32()
            } else {
                throw new TypeError("Unknown boolean type size: " + name)
            }
            return this["fromWireType"](heap[pointer >> shift])
        },
        destructorFunction: null
    })
}
var emval_free_list = [];
var emval_handle_array = [{}, {
    value: undefined
}, {
    value: null
}, {
    value: true
}, {
    value: false
}];
function __emval_decref(handle) {
    if (handle > 4 && 0 === --emval_handle_array[handle].refcount) {
        emval_handle_array[handle] = undefined;
        emval_free_list.push(handle)
    }
}
function count_emval_handles() {
    var count = 0;
    for (var i = 5; i < emval_handle_array.length; ++i) {
        if (emval_handle_array[i] !== undefined) {
            ++count
        }
    }
    return count
}
function get_first_emval() {
    for (var i = 5; i < emval_handle_array.length; ++i) {
        if (emval_handle_array[i] !== undefined) {
            return emval_handle_array[i]
        }
    }
    return null
}
function init_emval() {
    Module["count_emval_handles"] = count_emval_handles;
    Module["get_first_emval"] = get_first_emval
}
var Emval = {
    toValue: function(handle) {
        if (!handle) {
            throwBindingError("Cannot use deleted val. handle = " + handle)
        }
        return emval_handle_array[handle].value
    },
    toHandle: function(value) {
        switch (value) {
        case undefined:
            {
                return 1
            }
        case null:
            {
                return 2
            }
        case true:
            {
                return 3
            }
        case false:
            {
                return 4
            }
        default:
            {
                var handle = emval_free_list.length ? emval_free_list.pop() : emval_handle_array.length;
                emval_handle_array[handle] = {
                    refcount: 1,
                    value: value
                };
                return handle
            }
        }
    }
};
function simpleReadValueFromPointer(pointer) {
    return this["fromWireType"](GROWABLE_HEAP_U32()[pointer >> 2])
}
function __embind_register_emval(rawType, name) {
    name = readLatin1String(name);
    registerType(rawType, {
        name: name,
        "fromWireType": function(handle) {
            var rv = Emval.toValue(handle);
            __emval_decref(handle);
            return rv
        },
        "toWireType": function(destructors, value) {
            return Emval.toHandle(value)
        },
        "argPackAdvance": 8,
        "readValueFromPointer": simpleReadValueFromPointer,
        destructorFunction: null
    })
}
function _embind_repr(v) {
    if (v === null) {
        return "null"
    }
    var t = typeof v;
    if (t === "object" || t === "array" || t === "function") {
        return v.toString()
    } else {
        return "" + v
    }
}
function floatReadValueFromPointer(name, shift) {
    switch (shift) {
    case 2:
        return function(pointer) {
            return this["fromWireType"](GROWABLE_HEAP_F32()[pointer >> 2])
        }
        ;
    case 3:
        return function(pointer) {
            return this["fromWireType"](GROWABLE_HEAP_F64()[pointer >> 3])
        }
        ;
    default:
        throw new TypeError("Unknown float type: " + name)
    }
}
function __embind_register_float(rawType, name, size) {
    var shift = getShiftFromSize(size);
    name = readLatin1String(name);
    registerType(rawType, {
        name: name,
        "fromWireType": function(value) {
            return value
        },
        "toWireType": function(destructors, value) {
            if (typeof value !== "number" && typeof value !== "boolean") {
                throw new TypeError('Cannot convert "' + _embind_repr(value) + '" to ' + this.name)
            }
            return value
        },
        "argPackAdvance": 8,
        "readValueFromPointer": floatReadValueFromPointer(name, shift),
        destructorFunction: null
    })
}
function new_(constructor, argumentList) {
    if (!(constructor instanceof Function)) {
        throw new TypeError("new_ called with constructor type " + typeof constructor + " which is not a function")
    }
    var dummy = createNamedFunction(constructor.name || "unknownFunctionName", function() {});
    dummy.prototype = constructor.prototype;
    var obj = new dummy;
    var r = constructor.apply(obj, argumentList);
    return r instanceof Object ? r : obj
}
function runDestructors(destructors) {
    while (destructors.length) {
        var ptr = destructors.pop();
        var del = destructors.pop();
        del(ptr)
    }
}
function craftInvokerFunction(humanName, argTypes, classType, cppInvokerFunc, cppTargetFunc) {
    var argCount = argTypes.length;
    if (argCount < 2) {
        throwBindingError("argTypes array size mismatch! Must at least get return value and 'this' types!")
    }
    var isClassMethodFunc = argTypes[1] !== null && classType !== null;
    var needsDestructorStack = false;
    for (var i = 1; i < argTypes.length; ++i) {
        if (argTypes[i] !== null && argTypes[i].destructorFunction === undefined) {
            needsDestructorStack = true;
            break
        }
    }
    var returns = argTypes[0].name !== "void";
    var argsList = "";
    var argsListWired = "";
    for (var i = 0; i < argCount - 2; ++i) {
        argsList += (i !== 0 ? ", " : "") + "arg" + i;
        argsListWired += (i !== 0 ? ", " : "") + "arg" + i + "Wired"
    }
    var invokerFnBody = "return function " + makeLegalFunctionName(humanName) + "(" + argsList + ") {\n" + "if (arguments.length !== " + (argCount - 2) + ") {\n" + "throwBindingError('function " + humanName + " called with ' + arguments.length + ' arguments, expected " + (argCount - 2) + " args!');\n" + "}\n";
    if (needsDestructorStack) {
        invokerFnBody += "var destructors = [];\n"
    }
    var dtorStack = needsDestructorStack ? "destructors" : "null";
    var args1 = ["throwBindingError", "invoker", "fn", "runDestructors", "retType", "classParam"];
    var args2 = [throwBindingError, cppInvokerFunc, cppTargetFunc, runDestructors, argTypes[0], argTypes[1]];
    if (isClassMethodFunc) {
        invokerFnBody += "var thisWired = classParam.toWireType(" + dtorStack + ", this);\n"
    }
    for (var i = 0; i < argCount - 2; ++i) {
        invokerFnBody += "var arg" + i + "Wired = argType" + i + ".toWireType(" + dtorStack + ", arg" + i + "); // " + argTypes[i + 2].name + "\n";
        args1.push("argType" + i);
        args2.push(argTypes[i + 2])
    }
    if (isClassMethodFunc) {
        argsListWired = "thisWired" + (argsListWired.length > 0 ? ", " : "") + argsListWired
    }
    invokerFnBody += (returns ? "var rv = " : "") + "invoker(fn" + (argsListWired.length > 0 ? ", " : "") + argsListWired + ");\n";
    if (needsDestructorStack) {
        invokerFnBody += "runDestructors(destructors);\n"
    } else {
        for (var i = isClassMethodFunc ? 1 : 2; i < argTypes.length; ++i) {
            var paramName = i === 1 ? "thisWired" : "arg" + (i - 2) + "Wired";
            if (argTypes[i].destructorFunction !== null) {
                invokerFnBody += paramName + "_dtor(" + paramName + "); // " + argTypes[i].name + "\n";
                args1.push(paramName + "_dtor");
                args2.push(argTypes[i].destructorFunction)
            }
        }
    }
    if (returns) {
        invokerFnBody += "var ret = retType.fromWireType(rv);\n" + "return ret;\n"
    } else {}
    invokerFnBody += "}\n";
    args1.push(invokerFnBody);
    var invokerFunction = new_(Function, args1).apply(null, args2);
    return invokerFunction
}
function ensureOverloadTable(proto, methodName, humanName) {
    if (undefined === proto[methodName].overloadTable) {
        var prevFunc = proto[methodName];
        proto[methodName] = function() {
            if (!proto[methodName].overloadTable.hasOwnProperty(arguments.length)) {
                throwBindingError("Function '" + humanName + "' called with an invalid number of arguments (" + arguments.length + ") - expects one of (" + proto[methodName].overloadTable + ")!")
            }
            return proto[methodName].overloadTable[arguments.length].apply(this, arguments)
        }
        ;
        proto[methodName].overloadTable = [];
        proto[methodName].overloadTable[prevFunc.argCount] = prevFunc
    }
}
function exposePublicSymbol(name, value, numArguments) {
    if (Module.hasOwnProperty(name)) {
        if (undefined === numArguments || undefined !== Module[name].overloadTable && undefined !== Module[name].overloadTable[numArguments]) {
            throwBindingError("Cannot register public name '" + name + "' twice")
        }
        ensureOverloadTable(Module, name, name);
        if (Module.hasOwnProperty(numArguments)) {
            throwBindingError("Cannot register multiple overloads of a function with the same number of arguments (" + numArguments + ")!")
        }
        Module[name].overloadTable[numArguments] = value
    } else {
        Module[name] = value;
        if (undefined !== numArguments) {
            Module[name].numArguments = numArguments
        }
    }
}
function heap32VectorToArray(count, firstElement) {
    var array = [];
    for (var i = 0; i < count; i++) {
        array.push(GROWABLE_HEAP_I32()[(firstElement >> 2) + i])
    }
    return array
}
function replacePublicSymbol(name, value, numArguments) {
    if (!Module.hasOwnProperty(name)) {
        throwInternalError("Replacing nonexistant public symbol")
    }
    if (undefined !== Module[name].overloadTable && undefined !== numArguments) {
        Module[name].overloadTable[numArguments] = value
    } else {
        Module[name] = value;
        Module[name].argCount = numArguments
    }
}
function dynCallLegacy(sig, ptr, args) {
    var f = Module["dynCall_" + sig];
    return args && args.length ? f.apply(null, [ptr].concat(args)) : f.call(null, ptr)
}
function dynCall(sig, ptr, args) {
    if (sig.includes("j")) {
        return dynCallLegacy(sig, ptr, args)
    }
    return getWasmTableEntry(ptr).apply(null, args)
}
function getDynCaller(sig, ptr) {
    var argCache = [];
    return function() {
        argCache.length = arguments.length;
        for (var i = 0; i < arguments.length; i++) {
            argCache[i] = arguments[i]
        }
        return dynCall(sig, ptr, argCache)
    }
}
function embind__requireFunction(signature, rawFunction) {
    signature = readLatin1String(signature);
    function makeDynCaller() {
        if (signature.includes("j")) {
            return getDynCaller(signature, rawFunction)
        }
        return getWasmTableEntry(rawFunction)
    }
    var fp = makeDynCaller();
    if (typeof fp !== "function") {
        throwBindingError("unknown function pointer with signature " + signature + ": " + rawFunction)
    }
    return fp
}
var UnboundTypeError = undefined;
function getTypeName(type) {
    var ptr = ___getTypeName(type);
    var rv = readLatin1String(ptr);
    _free(ptr);
    return rv
}
function throwUnboundTypeError(message, types) {
    var unboundTypes = [];
    var seen = {};
    function visit(type) {
        if (seen[type]) {
            return
        }
        if (registeredTypes[type]) {
            return
        }
        if (typeDependencies[type]) {
            typeDependencies[type].forEach(visit);
            return
        }
        unboundTypes.push(type);
        seen[type] = true
    }
    types.forEach(visit);
    throw new UnboundTypeError(message + ": " + unboundTypes.map(getTypeName).join([", "]))
}
function __embind_register_function(name, argCount, rawArgTypesAddr, signature, rawInvoker, fn) {
    var argTypes = heap32VectorToArray(argCount, rawArgTypesAddr);
    name = readLatin1String(name);
    rawInvoker = embind__requireFunction(signature, rawInvoker);
    exposePublicSymbol(name, function() {
        throwUnboundTypeError("Cannot call " + name + " due to unbound types", argTypes)
    }, argCount - 1);
    whenDependentTypesAreResolved([], argTypes, function(argTypes) {
        var invokerArgsArray = [argTypes[0], null].concat(argTypes.slice(1));
        replacePublicSymbol(name, craftInvokerFunction(name, invokerArgsArray, null, rawInvoker, fn), argCount - 1);
        return []
    })
}
function integerReadValueFromPointer(name, shift, signed) {
    switch (shift) {
    case 0:
        return signed ? function readS8FromPointer(pointer) {
            return GROWABLE_HEAP_I8()[pointer]
        }
        : function readU8FromPointer(pointer) {
            return GROWABLE_HEAP_U8()[pointer]
        }
        ;
    case 1:
        return signed ? function readS16FromPointer(pointer) {
            return GROWABLE_HEAP_I16()[pointer >> 1]
        }
        : function readU16FromPointer(pointer) {
            return GROWABLE_HEAP_U16()[pointer >> 1]
        }
        ;
    case 2:
        return signed ? function readS32FromPointer(pointer) {
            return GROWABLE_HEAP_I32()[pointer >> 2]
        }
        : function readU32FromPointer(pointer) {
            return GROWABLE_HEAP_U32()[pointer >> 2]
        }
        ;
    default:
        throw new TypeError("Unknown integer type: " + name)
    }
}
function __embind_register_integer(primitiveType, name, size, minRange, maxRange) {
    name = readLatin1String(name);
    if (maxRange === -1) {
        maxRange = 4294967295
    }
    var shift = getShiftFromSize(size);
    var fromWireType = function(value) {
        return value
    };
    if (minRange === 0) {
        var bitshift = 32 - 8 * size;
        fromWireType = function(value) {
            return value << bitshift >>> bitshift
        }
    }
    var isUnsignedType = name.includes("unsigned");
    registerType(primitiveType, {
        name: name,
        "fromWireType": fromWireType,
        "toWireType": function(destructors, value) {
            if (typeof value !== "number" && typeof value !== "boolean") {
                throw new TypeError('Cannot convert "' + _embind_repr(value) + '" to ' + this.name)
            }
            if (value < minRange || value > maxRange) {
                throw new TypeError('Passing a number "' + _embind_repr(value) + '" from JS side to C/C++ side to an argument of type "' + name + '", which is outside the valid range [' + minRange + ", " + maxRange + "]!")
            }
            return isUnsignedType ? value >>> 0 : value | 0
        },
        "argPackAdvance": 8,
        "readValueFromPointer": integerReadValueFromPointer(name, shift, minRange !== 0),
        destructorFunction: null
    })
}
function __embind_register_memory_view(rawType, dataTypeIndex, name) {
    var typeMapping = [Int8Array, Uint8Array, Int16Array, Uint16Array, Int32Array, Uint32Array, Float32Array, Float64Array];
    var TA = typeMapping[dataTypeIndex];
    function decodeMemoryView(handle) {
        handle = handle >> 2;
        var heap = GROWABLE_HEAP_U32();
        var size = heap[handle];
        var data = heap[handle + 1];
        return new TA(buffer,data,size)
    }
    name = readLatin1String(name);
    registerType(rawType, {
        name: name,
        "fromWireType": decodeMemoryView,
        "argPackAdvance": 8,
        "readValueFromPointer": decodeMemoryView
    }, {
        ignoreDuplicateRegistrations: true
    })
}
function __embind_register_std_string(rawType, name) {
    name = readLatin1String(name);
    var stdStringIsUTF8 = name === "std::string";
    registerType(rawType, {
        name: name,
        "fromWireType": function(value) {
            var length = GROWABLE_HEAP_U32()[value >> 2];
            var str;
            if (stdStringIsUTF8) {
                var decodeStartPtr = value + 4;
                for (var i = 0; i <= length; ++i) {
                    var currentBytePtr = value + 4 + i;
                    if (i == length || GROWABLE_HEAP_U8()[currentBytePtr] == 0) {
                        var maxRead = currentBytePtr - decodeStartPtr;
                        var stringSegment = UTF8ToString(decodeStartPtr, maxRead);
                        if (str === undefined) {
                            str = stringSegment
                        } else {
                            str += String.fromCharCode(0);
                            str += stringSegment
                        }
                        decodeStartPtr = currentBytePtr + 1
                    }
                }
            } else {
                var a = new Array(length);
                for (var i = 0; i < length; ++i) {
                    a[i] = String.fromCharCode(GROWABLE_HEAP_U8()[value + 4 + i])
                }
                str = a.join("")
            }
            _free(value);
            return str
        },
        "toWireType": function(destructors, value) {
            if (value instanceof ArrayBuffer) {
                value = new Uint8Array(value)
            }
            var getLength;
            var valueIsOfTypeString = typeof value === "string";
            if (!(valueIsOfTypeString || value instanceof Uint8Array || value instanceof Uint8ClampedArray || value instanceof Int8Array)) {
                throwBindingError("Cannot pass non-string to std::string")
            }
            if (stdStringIsUTF8 && valueIsOfTypeString) {
                getLength = function() {
                    return lengthBytesUTF8(value)
                }
            } else {
                getLength = function() {
                    return value.length
                }
            }
            var length = getLength();
            var ptr = _malloc(4 + length + 1);
            GROWABLE_HEAP_U32()[ptr >> 2] = length;
            if (stdStringIsUTF8 && valueIsOfTypeString) {
                stringToUTF8(value, ptr + 4, length + 1)
            } else {
                if (valueIsOfTypeString) {
                    for (var i = 0; i < length; ++i) {
                        var charCode = value.charCodeAt(i);
                        if (charCode > 255) {
                            _free(ptr);
                            throwBindingError("String has UTF-16 code units that do not fit in 8 bits")
                        }
                        GROWABLE_HEAP_U8()[ptr + 4 + i] = charCode
                    }
                } else {
                    for (var i = 0; i < length; ++i) {
                        GROWABLE_HEAP_U8()[ptr + 4 + i] = value[i]
                    }
                }
            }
            if (destructors !== null) {
                destructors.push(_free, ptr)
            }
            return ptr
        },
        "argPackAdvance": 8,
        "readValueFromPointer": simpleReadValueFromPointer,
        destructorFunction: function(ptr) {
            _free(ptr)
        }
    })
}
function __embind_register_std_wstring(rawType, charSize, name) {
    name = readLatin1String(name);
    var decodeString, encodeString, getHeap, lengthBytesUTF, shift;
    if (charSize === 2) {
        decodeString = UTF16ToString;
        encodeString = stringToUTF16;
        lengthBytesUTF = lengthBytesUTF16;
        getHeap = function() {
            return GROWABLE_HEAP_U16()
        }
        ;
        shift = 1
    } else if (charSize === 4) {
        decodeString = UTF32ToString;
        encodeString = stringToUTF32;
        lengthBytesUTF = lengthBytesUTF32;
        getHeap = function() {
            return GROWABLE_HEAP_U32()
        }
        ;
        shift = 2
    }
    registerType(rawType, {
        name: name,
        "fromWireType": function(value) {
            var length = GROWABLE_HEAP_U32()[value >> 2];
            var HEAP = getHeap();
            var str;
            var decodeStartPtr = value + 4;
            for (var i = 0; i <= length; ++i) {
                var currentBytePtr = value + 4 + i * charSize;
                if (i == length || HEAP[currentBytePtr >> shift] == 0) {
                    var maxReadBytes = currentBytePtr - decodeStartPtr;
                    var stringSegment = decodeString(decodeStartPtr, maxReadBytes);
                    if (str === undefined) {
                        str = stringSegment
                    } else {
                        str += String.fromCharCode(0);
                        str += stringSegment
                    }
                    decodeStartPtr = currentBytePtr + charSize
                }
            }
            _free(value);
            return str
        },
        "toWireType": function(destructors, value) {
            if (!(typeof value === "string")) {
                throwBindingError("Cannot pass non-string to C++ string type " + name)
            }
            var length = lengthBytesUTF(value);
            var ptr = _malloc(4 + length + charSize);
            GROWABLE_HEAP_U32()[ptr >> 2] = length >> shift;
            encodeString(value, ptr + 4, length + charSize);
            if (destructors !== null) {
                destructors.push(_free, ptr)
            }
            return ptr
        },
        "argPackAdvance": 8,
        "readValueFromPointer": simpleReadValueFromPointer,
        destructorFunction: function(ptr) {
            _free(ptr)
        }
    })
}
function __embind_register_void(rawType, name) {
    name = readLatin1String(name);
    registerType(rawType, {
        isVoid: true,
        name: name,
        "argPackAdvance": 0,
        "fromWireType": function() {
            return undefined
        },
        "toWireType": function(destructors, o) {
            return undefined
        }
    })
}
function __emscripten_notify_thread_queue(targetThreadId, mainThreadId) {
    if (targetThreadId == mainThreadId) {
        postMessage({
            "cmd": "processQueuedMainThreadWork"
        })
    } else if (ENVIRONMENT_IS_PTHREAD) {
        postMessage({
            "targetThread": targetThreadId,
            "cmd": "processThreadQueue"
        })
    } else {
        var pthread = PThread.pthreads[targetThreadId];
        var worker = pthread && pthread.worker;
        if (!worker) {
            return
        }
        worker.postMessage({
            "cmd": "processThreadQueue"
        })
    }
    return 1
}
function _abort() {
    abort("")
}
var readAsmConstArgsArray = [];
function readAsmConstArgs(sigPtr, buf) {
    readAsmConstArgsArray.length = 0;
    var ch;
    buf >>= 2;
    while (ch = GROWABLE_HEAP_U8()[sigPtr++]) {
        var readAsmConstArgsDouble = ch < 105;
        if (readAsmConstArgsDouble && buf & 1)
            buf++;
        readAsmConstArgsArray.push(readAsmConstArgsDouble ? GROWABLE_HEAP_F64()[buf++ >> 1] : GROWABLE_HEAP_I32()[buf]);
        ++buf
    }
    return readAsmConstArgsArray
}
function mainThreadEM_ASM(code, sigPtr, argbuf, sync) {
    var args = readAsmConstArgs(sigPtr, argbuf);
    if (ENVIRONMENT_IS_PTHREAD) {
        return _emscripten_proxy_to_main_thread_js.apply(null, [-1 - code, sync].concat(args))
    }
    return ASM_CONSTS[code].apply(null, args)
}
function _emscripten_asm_const_async_on_main_thread(code, sigPtr, argbuf) {
    return mainThreadEM_ASM(code, sigPtr, argbuf, 0)
}
function _emscripten_conditional_set_current_thread_status(expectedStatus, newStatus) {}
function _emscripten_proxy_to_main_thread_js(index, sync) {
    var numCallArgs = arguments.length - 2;
    var outerArgs = arguments;
    return withStackSave(function() {
        var serializedNumCallArgs = numCallArgs;
        var args = stackAlloc(serializedNumCallArgs * 8);
        var b = args >> 3;
        for (var i = 0; i < numCallArgs; i++) {
            var arg = outerArgs[2 + i];
            GROWABLE_HEAP_F64()[b + i] = arg
        }
        return _emscripten_run_in_main_runtime_thread_js(index, serializedNumCallArgs, args, sync)
    })
}
var _emscripten_receive_on_main_thread_js_callArgs = [];
function _emscripten_receive_on_main_thread_js(index, numCallArgs, args) {
    _emscripten_receive_on_main_thread_js_callArgs.length = numCallArgs;
    var b = args >> 3;
    for (var i = 0; i < numCallArgs; i++) {
        _emscripten_receive_on_main_thread_js_callArgs[i] = GROWABLE_HEAP_F64()[b + i]
    }
    var isEmAsmConst = index < 0;
    var func = !isEmAsmConst ? proxiedFunctionTable[index] : ASM_CONSTS[-index - 1];
    return func.apply(null, _emscripten_receive_on_main_thread_js_callArgs)
}
function emscripten_realloc_buffer(size) {
    try {
        wasmMemory.grow(size - buffer.byteLength + 65535 >>> 16);
        updateGlobalBufferAndViews(wasmMemory.buffer);
        return 1
    } catch (e) {}
}
function _emscripten_resize_heap(requestedSize) {
    var oldSize = GROWABLE_HEAP_U8().length;
    requestedSize = requestedSize >>> 0;
    if (requestedSize <= oldSize) {
        return false
    }
    var maxHeapSize = 2147483648;
    if (requestedSize > maxHeapSize) {
        return false
    }
    for (var cutDown = 1; cutDown <= 4; cutDown *= 2) {
        var overGrownHeapSize = oldSize * (1 + .2 / cutDown);
        overGrownHeapSize = Math.min(overGrownHeapSize, requestedSize + 100663296);
        var newSize = Math.min(maxHeapSize, alignUp(Math.max(requestedSize, overGrownHeapSize), 65536));
        var replacement = emscripten_realloc_buffer(newSize);
        if (replacement) {
            return true
        }
    }
    return false
}
var JSEvents = {
    inEventHandler: 0,
    removeAllEventListeners: function() {
        for (var i = JSEvents.eventHandlers.length - 1; i >= 0; --i) {
            JSEvents._removeHandler(i)
        }
        JSEvents.eventHandlers = [];
        JSEvents.deferredCalls = []
    },
    registerRemoveEventListeners: function() {
        if (!JSEvents.removeEventListenersRegistered) {
            __ATEXIT__.push(JSEvents.removeAllEventListeners);
            JSEvents.removeEventListenersRegistered = true
        }
    },
    deferredCalls: [],
    deferCall: function(targetFunction, precedence, argsList) {
        function arraysHaveEqualContent(arrA, arrB) {
            if (arrA.length != arrB.length)
                return false;
            for (var i in arrA) {
                if (arrA[i] != arrB[i])
                    return false
            }
            return true
        }
        for (var i in JSEvents.deferredCalls) {
            var call = JSEvents.deferredCalls[i];
            if (call.targetFunction == targetFunction && arraysHaveEqualContent(call.argsList, argsList)) {
                return
            }
        }
        JSEvents.deferredCalls.push({
            targetFunction: targetFunction,
            precedence: precedence,
            argsList: argsList
        });
        JSEvents.deferredCalls.sort(function(x, y) {
            return x.precedence < y.precedence
        })
    },
    removeDeferredCalls: function(targetFunction) {
        for (var i = 0; i < JSEvents.deferredCalls.length; ++i) {
            if (JSEvents.deferredCalls[i].targetFunction == targetFunction) {
                JSEvents.deferredCalls.splice(i, 1);
                --i
            }
        }
    },
    canPerformEventHandlerRequests: function() {
        return JSEvents.inEventHandler && JSEvents.currentEventHandler.allowsDeferredCalls
    },
    runDeferredCalls: function() {
        if (!JSEvents.canPerformEventHandlerRequests()) {
            return
        }
        for (var i = 0; i < JSEvents.deferredCalls.length; ++i) {
            var call = JSEvents.deferredCalls[i];
            JSEvents.deferredCalls.splice(i, 1);
            --i;
            call.targetFunction.apply(null, call.argsList)
        }
    },
    eventHandlers: [],
    removeAllHandlersOnTarget: function(target, eventTypeString) {
        for (var i = 0; i < JSEvents.eventHandlers.length; ++i) {
            if (JSEvents.eventHandlers[i].target == target && (!eventTypeString || eventTypeString == JSEvents.eventHandlers[i].eventTypeString)) {
                JSEvents._removeHandler(i--)
            }
        }
    },
    _removeHandler: function(i) {
        var h = JSEvents.eventHandlers[i];
        h.target.removeEventListener(h.eventTypeString, h.eventListenerFunc, h.useCapture);
        JSEvents.eventHandlers.splice(i, 1)
    },
    registerOrRemoveHandler: function(eventHandler) {
        var jsEventHandler = function jsEventHandler(event) {
            ++JSEvents.inEventHandler;
            JSEvents.currentEventHandler = eventHandler;
            JSEvents.runDeferredCalls();
            eventHandler.handlerFunc(event);
            JSEvents.runDeferredCalls();
            --JSEvents.inEventHandler
        };
        if (eventHandler.callbackfunc) {
            eventHandler.eventListenerFunc = jsEventHandler;
            eventHandler.target.addEventListener(eventHandler.eventTypeString, jsEventHandler, eventHandler.useCapture);
            JSEvents.eventHandlers.push(eventHandler);
            JSEvents.registerRemoveEventListeners()
        } else {
            for (var i = 0; i < JSEvents.eventHandlers.length; ++i) {
                if (JSEvents.eventHandlers[i].target == eventHandler.target && JSEvents.eventHandlers[i].eventTypeString == eventHandler.eventTypeString) {
                    JSEvents._removeHandler(i--)
                }
            }
        }
    },
    queueEventHandlerOnThread_iiii: function(targetThread, eventHandlerFunc, eventTypeId, eventData, userData) {
        withStackSave(function() {
            var varargs = stackAlloc(12);
            GROWABLE_HEAP_I32()[varargs >> 2] = eventTypeId;
            GROWABLE_HEAP_I32()[varargs + 4 >> 2] = eventData;
            GROWABLE_HEAP_I32()[varargs + 8 >> 2] = userData;
            __emscripten_call_on_thread(0, targetThread, 637534208, eventHandlerFunc, eventData, varargs)
        })
    },
    getTargetThreadForEventCallback: function(targetThread) {
        switch (targetThread) {
        case 1:
            return 0;
        case 2:
            return PThread.currentProxiedOperationCallerThread;
        default:
            return targetThread
        }
    },
    getNodeNameForTarget: function(target) {
        if (!target)
            return "";
        if (target == window)
            return "#window";
        if (target == screen)
            return "#screen";
        return target && target.nodeName ? target.nodeName : ""
    },
    fullscreenEnabled: function() {
        return document.fullscreenEnabled || document.webkitFullscreenEnabled
    }
};
function stringToNewUTF8(jsString) {
    var length = lengthBytesUTF8(jsString) + 1;
    var cString = _malloc(length);
    stringToUTF8(jsString, cString, length);
    return cString
}
function _emscripten_set_offscreencanvas_size_on_target_thread_js(targetThread, targetCanvas, width, height) {
    withStackSave(function() {
        var varargs = stackAlloc(12);
        var targetCanvasPtr = 0;
        if (targetCanvas) {
            targetCanvasPtr = stringToNewUTF8(targetCanvas)
        }
        GROWABLE_HEAP_I32()[varargs >> 2] = targetCanvasPtr;
        GROWABLE_HEAP_I32()[varargs + 4 >> 2] = width;
        GROWABLE_HEAP_I32()[varargs + 8 >> 2] = height;
        __emscripten_call_on_thread(0, targetThread, 657457152, 0, targetCanvasPtr, varargs)
    })
}
function _emscripten_set_offscreencanvas_size_on_target_thread(targetThread, targetCanvas, width, height) {
    targetCanvas = targetCanvas ? UTF8ToString(targetCanvas) : "";
    _emscripten_set_offscreencanvas_size_on_target_thread_js(targetThread, targetCanvas, width, height)
}
function maybeCStringToJsString(cString) {
    return cString > 2 ? UTF8ToString(cString) : cString
}
var specialHTMLTargets = [0, typeof document !== "undefined" ? document : 0, typeof window !== "undefined" ? window : 0];
function findEventTarget(target) {
    target = maybeCStringToJsString(target);
    var domElement = specialHTMLTargets[target] || (typeof document !== "undefined" ? document.querySelector(target) : undefined);
    return domElement
}
function findCanvasEventTarget(target) {
    return findEventTarget(target)
}
function _emscripten_set_canvas_element_size_calling_thread(target, width, height) {
    var canvas = findCanvasEventTarget(target);
    if (!canvas)
        return -4;
    if (canvas.canvasSharedPtr) {
        GROWABLE_HEAP_I32()[canvas.canvasSharedPtr >> 2] = width;
        GROWABLE_HEAP_I32()[canvas.canvasSharedPtr + 4 >> 2] = height
    }
    if (canvas.offscreenCanvas || !canvas.controlTransferredOffscreen) {
        if (canvas.offscreenCanvas)
            canvas = canvas.offscreenCanvas;
        var autoResizeViewport = false;
        if (canvas.GLctxObject && canvas.GLctxObject.GLctx) {
            var prevViewport = canvas.GLctxObject.GLctx.getParameter(2978);
            autoResizeViewport = prevViewport[0] === 0 && prevViewport[1] === 0 && prevViewport[2] === canvas.width && prevViewport[3] === canvas.height
        }
        canvas.width = width;
        canvas.height = height;
        if (autoResizeViewport) {
            canvas.GLctxObject.GLctx.viewport(0, 0, width, height)
        }
    } else if (canvas.canvasSharedPtr) {
        var targetThread = GROWABLE_HEAP_I32()[canvas.canvasSharedPtr + 8 >> 2];
        _emscripten_set_offscreencanvas_size_on_target_thread(targetThread, target, width, height);
        return 1
    } else {
        return -4
    }
    return 0
}
function _emscripten_set_canvas_element_size_main_thread(target, width, height) {
    if (ENVIRONMENT_IS_PTHREAD)
        return _emscripten_proxy_to_main_thread_js(3, 1, target, width, height);
    return _emscripten_set_canvas_element_size_calling_thread(target, width, height)
}
function _emscripten_set_canvas_element_size(target, width, height) {
    var canvas = findCanvasEventTarget(target);
    if (canvas) {
        return _emscripten_set_canvas_element_size_calling_thread(target, width, height)
    } else {
        return _emscripten_set_canvas_element_size_main_thread(target, width, height)
    }
}
function _emscripten_set_current_thread_status(newStatus) {}
function maybeExit() {
    if (!keepRuntimeAlive()) {
        try {
            if (ENVIRONMENT_IS_PTHREAD)
                __emscripten_thread_exit(EXITSTATUS);
            else
                _exit(EXITSTATUS)
        } catch (e) {
            handleException(e)
        }
    }
}
function callUserCallback(func, synchronous) {
    if (runtimeExited || ABORT) {
        return
    }
    if (synchronous) {
        func();
        return
    }
    try {
        func();
        if (ENVIRONMENT_IS_PTHREAD)
            maybeExit()
    } catch (e) {
        handleException(e)
    }
}
function runtimeKeepalivePush() {
    runtimeKeepaliveCounter += 1
}
function runtimeKeepalivePop() {
    runtimeKeepaliveCounter -= 1
}
function _emscripten_set_timeout(cb, msecs, userData) {
    runtimeKeepalivePush();
    return setTimeout(function() {
        runtimeKeepalivePop();
        callUserCallback(function() {
            getWasmTableEntry(cb)(userData)
        })
    }, msecs)
}
function _emscripten_unwind_to_js_event_loop() {
    throw "unwind"
}
function __webgl_enable_ANGLE_instanced_arrays(ctx) {
    var ext = ctx.getExtension("ANGLE_instanced_arrays");
    if (ext) {
        ctx["vertexAttribDivisor"] = function(index, divisor) {
            ext["vertexAttribDivisorANGLE"](index, divisor)
        }
        ;
        ctx["drawArraysInstanced"] = function(mode, first, count, primcount) {
            ext["drawArraysInstancedANGLE"](mode, first, count, primcount)
        }
        ;
        ctx["drawElementsInstanced"] = function(mode, count, type, indices, primcount) {
            ext["drawElementsInstancedANGLE"](mode, count, type, indices, primcount)
        }
        ;
        return 1
    }
}
function __webgl_enable_OES_vertex_array_object(ctx) {
    var ext = ctx.getExtension("OES_vertex_array_object");
    if (ext) {
        ctx["createVertexArray"] = function() {
            return ext["createVertexArrayOES"]()
        }
        ;
        ctx["deleteVertexArray"] = function(vao) {
            ext["deleteVertexArrayOES"](vao)
        }
        ;
        ctx["bindVertexArray"] = function(vao) {
            ext["bindVertexArrayOES"](vao)
        }
        ;
        ctx["isVertexArray"] = function(vao) {
            return ext["isVertexArrayOES"](vao)
        }
        ;
        return 1
    }
}
function __webgl_enable_WEBGL_draw_buffers(ctx) {
    var ext = ctx.getExtension("WEBGL_draw_buffers");
    if (ext) {
        ctx["drawBuffers"] = function(n, bufs) {
            ext["drawBuffersWEBGL"](n, bufs)
        }
        ;
        return 1
    }
}
function __webgl_enable_WEBGL_multi_draw(ctx) {
    return !!(ctx.multiDrawWebgl = ctx.getExtension("WEBGL_multi_draw"))
}
var GL = {
    counter: 1,
    buffers: [],
    programs: [],
    framebuffers: [],
    renderbuffers: [],
    textures: [],
    shaders: [],
    vaos: [],
    contexts: {},
    offscreenCanvases: {},
    queries: [],
    stringCache: {},
    unpackAlignment: 4,
    recordError: function recordError(errorCode) {
        if (!GL.lastError) {
            GL.lastError = errorCode
        }
    },
    getNewId: function(table) {
        var ret = GL.counter++;
        for (var i = table.length; i < ret; i++) {
            table[i] = null
        }
        return ret
    },
    getSource: function(shader, count, string, length) {
        var source = "";
        for (var i = 0; i < count; ++i) {
            var len = length ? GROWABLE_HEAP_I32()[length + i * 4 >> 2] : -1;
            source += UTF8ToString(GROWABLE_HEAP_I32()[string + i * 4 >> 2], len < 0 ? undefined : len)
        }
        return source
    },
    createContext: function(canvas, webGLContextAttributes) {
        if (!canvas.getContextSafariWebGL2Fixed) {
            canvas.getContextSafariWebGL2Fixed = canvas.getContext;
            canvas.getContext = function(ver, attrs) {
                var gl = canvas.getContextSafariWebGL2Fixed(ver, attrs);
                return ver == "webgl" == gl instanceof WebGLRenderingContext ? gl : null
            }
        }
        var ctx = canvas.getContext("webgl", webGLContextAttributes);
        if (!ctx)
            return 0;
        var handle = GL.registerContext(ctx, webGLContextAttributes);
        return handle
    },
    registerContext: function(ctx, webGLContextAttributes) {
        var handle = _malloc(8);
        GROWABLE_HEAP_I32()[handle + 4 >> 2] = _pthread_self();
        var context = {
            handle: handle,
            attributes: webGLContextAttributes,
            version: webGLContextAttributes.majorVersion,
            GLctx: ctx
        };
        if (ctx.canvas)
            ctx.canvas.GLctxObject = context;
        GL.contexts[handle] = context;
        if (typeof webGLContextAttributes.enableExtensionsByDefault === "undefined" || webGLContextAttributes.enableExtensionsByDefault) {
            GL.initExtensions(context)
        }
        return handle
    },
    makeContextCurrent: function(contextHandle) {
        GL.currentContext = GL.contexts[contextHandle];
        Module.ctx = GLctx = GL.currentContext && GL.currentContext.GLctx;
        return !(contextHandle && !GLctx)
    },
    getContext: function(contextHandle) {
        return GL.contexts[contextHandle]
    },
    deleteContext: function(contextHandle) {
        if (GL.currentContext === GL.contexts[contextHandle])
            GL.currentContext = null;
        if (typeof JSEvents === "object")
            JSEvents.removeAllHandlersOnTarget(GL.contexts[contextHandle].GLctx.canvas);
        if (GL.contexts[contextHandle] && GL.contexts[contextHandle].GLctx.canvas)
            GL.contexts[contextHandle].GLctx.canvas.GLctxObject = undefined;
        _free(GL.contexts[contextHandle].handle);
        GL.contexts[contextHandle] = null
    },
    initExtensions: function(context) {
        if (!context)
            context = GL.currentContext;
        if (context.initExtensionsDone)
            return;
        context.initExtensionsDone = true;
        var GLctx = context.GLctx;
        __webgl_enable_ANGLE_instanced_arrays(GLctx);
        __webgl_enable_OES_vertex_array_object(GLctx);
        __webgl_enable_WEBGL_draw_buffers(GLctx);
        {
            GLctx.disjointTimerQueryExt = GLctx.getExtension("EXT_disjoint_timer_query")
        }
        __webgl_enable_WEBGL_multi_draw(GLctx);
        var exts = GLctx.getSupportedExtensions() || [];
        exts.forEach(function(ext) {
            if (!ext.includes("lose_context") && !ext.includes("debug")) {
                GLctx.getExtension(ext)
            }
        })
    }
};
var __emscripten_webgl_power_preferences = ["default", "low-power", "high-performance"];
function _emscripten_webgl_do_create_context(target, attributes) {
    var a = attributes >> 2;
    var powerPreference = GROWABLE_HEAP_I32()[a + (24 >> 2)];
    var contextAttributes = {
        "alpha": !!GROWABLE_HEAP_I32()[a + (0 >> 2)],
        "depth": !!GROWABLE_HEAP_I32()[a + (4 >> 2)],
        "stencil": !!GROWABLE_HEAP_I32()[a + (8 >> 2)],
        "antialias": !!GROWABLE_HEAP_I32()[a + (12 >> 2)],
        "premultipliedAlpha": !!GROWABLE_HEAP_I32()[a + (16 >> 2)],
        "preserveDrawingBuffer": !!GROWABLE_HEAP_I32()[a + (20 >> 2)],
        "powerPreference": __emscripten_webgl_power_preferences[powerPreference],
        "failIfMajorPerformanceCaveat": !!GROWABLE_HEAP_I32()[a + (28 >> 2)],
        majorVersion: GROWABLE_HEAP_I32()[a + (32 >> 2)],
        minorVersion: GROWABLE_HEAP_I32()[a + (36 >> 2)],
        enableExtensionsByDefault: GROWABLE_HEAP_I32()[a + (40 >> 2)],
        explicitSwapControl: GROWABLE_HEAP_I32()[a + (44 >> 2)],
        proxyContextToMainThread: GROWABLE_HEAP_I32()[a + (48 >> 2)],
        renderViaOffscreenBackBuffer: GROWABLE_HEAP_I32()[a + (52 >> 2)]
    };
    var canvas = findCanvasEventTarget(target);
    if (!canvas) {
        return 0
    }
    if (contextAttributes.explicitSwapControl) {
        return 0
    }
    var contextHandle = GL.createContext(canvas, contextAttributes);
    return contextHandle
}
function _emscripten_webgl_create_context(a0, a1) {
    return _emscripten_webgl_do_create_context(a0, a1)
}
var ENV = {};
function getExecutableName() {
    return thisProgram || "./this.program"
}
function getEnvStrings() {
    if (!getEnvStrings.strings) {
        var lang = (typeof navigator === "object" && navigator.languages && navigator.languages[0] || "C").replace("-", "_") + ".UTF-8";
        var env = {
            "USER": "web_user",
            "LOGNAME": "web_user",
            "PATH": "/",
            "PWD": "/",
            "HOME": "/home/web_user",
            "LANG": lang,
            "_": getExecutableName()
        };
        for (var x in ENV) {
            if (ENV[x] === undefined)
                delete env[x];
            else
                env[x] = ENV[x]
        }
        var strings = [];
        for (var x in env) {
            strings.push(x + "=" + env[x])
        }
        getEnvStrings.strings = strings
    }
    return getEnvStrings.strings
}
var SYSCALLS = {
    mappings: {},
    buffers: [null, [], []],
    printChar: function(stream, curr) {
        var buffer = SYSCALLS.buffers[stream];
        if (curr === 0 || curr === 10) {
            (stream === 1 ? out : err)(UTF8ArrayToString(buffer, 0));
            buffer.length = 0
        } else {
            buffer.push(curr)
        }
    },
    varargs: undefined,
    get: function() {
        SYSCALLS.varargs += 4;
        var ret = GROWABLE_HEAP_I32()[SYSCALLS.varargs - 4 >> 2];
        return ret
    },
    getStr: function(ptr) {
        var ret = UTF8ToString(ptr);
        return ret
    },
    get64: function(low, high) {
        return low
    }
};
function _environ_get(__environ, environ_buf) {
    if (ENVIRONMENT_IS_PTHREAD)
        return _emscripten_proxy_to_main_thread_js(4, 1, __environ, environ_buf);
    var bufSize = 0;
    getEnvStrings().forEach(function(string, i) {
        var ptr = environ_buf + bufSize;
        GROWABLE_HEAP_I32()[__environ + i * 4 >> 2] = ptr;
        writeAsciiToMemory(string, ptr);
        bufSize += string.length + 1
    });
    return 0
}
function _environ_sizes_get(penviron_count, penviron_buf_size) {
    if (ENVIRONMENT_IS_PTHREAD)
        return _emscripten_proxy_to_main_thread_js(5, 1, penviron_count, penviron_buf_size);
    var strings = getEnvStrings();
    GROWABLE_HEAP_I32()[penviron_count >> 2] = strings.length;
    var bufSize = 0;
    strings.forEach(function(string) {
        bufSize += string.length + 1
    });
    GROWABLE_HEAP_I32()[penviron_buf_size >> 2] = bufSize;
    return 0
}
function _fd_write(fd, iov, iovcnt, pnum) {
    if (ENVIRONMENT_IS_PTHREAD)
        return _emscripten_proxy_to_main_thread_js(6, 1, fd, iov, iovcnt, pnum);
    var num = 0;
    for (var i = 0; i < iovcnt; i++) {
        var ptr = GROWABLE_HEAP_I32()[iov >> 2];
        var len = GROWABLE_HEAP_I32()[iov + 4 >> 2];
        iov += 8;
        for (var j = 0; j < len; j++) {
            SYSCALLS.printChar(fd, GROWABLE_HEAP_U8()[ptr + j])
        }
        num += len
    }
    GROWABLE_HEAP_I32()[pnum >> 2] = num;
    return 0
}
function _getTempRet0() {
    return getTempRet0()
}
function _llvm_eh_typeid_for(type) {
    return type
}
function _setTempRet0(val) {
    setTempRet0(val)
}
function __isLeapYear(year) {
    return year % 4 === 0 && (year % 100 !== 0 || year % 400 === 0)
}
function __arraySum(array, index) {
    var sum = 0;
    for (var i = 0; i <= index; sum += array[i++]) {}
    return sum
}
var __MONTH_DAYS_LEAP = [31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
var __MONTH_DAYS_REGULAR = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
function __addDays(date, days) {
    var newDate = new Date(date.getTime());
    while (days > 0) {
        var leap = __isLeapYear(newDate.getFullYear());
        var currentMonth = newDate.getMonth();
        var daysInCurrentMonth = (leap ? __MONTH_DAYS_LEAP : __MONTH_DAYS_REGULAR)[currentMonth];
        if (days > daysInCurrentMonth - newDate.getDate()) {
            days -= daysInCurrentMonth - newDate.getDate() + 1;
            newDate.setDate(1);
            if (currentMonth < 11) {
                newDate.setMonth(currentMonth + 1)
            } else {
                newDate.setMonth(0);
                newDate.setFullYear(newDate.getFullYear() + 1)
            }
        } else {
            newDate.setDate(newDate.getDate() + days);
            return newDate
        }
    }
    return newDate
}
function _strftime(s, maxsize, format, tm) {
    var tm_zone = GROWABLE_HEAP_I32()[tm + 40 >> 2];
    var date = {
        tm_sec: GROWABLE_HEAP_I32()[tm >> 2],
        tm_min: GROWABLE_HEAP_I32()[tm + 4 >> 2],
        tm_hour: GROWABLE_HEAP_I32()[tm + 8 >> 2],
        tm_mday: GROWABLE_HEAP_I32()[tm + 12 >> 2],
        tm_mon: GROWABLE_HEAP_I32()[tm + 16 >> 2],
        tm_year: GROWABLE_HEAP_I32()[tm + 20 >> 2],
        tm_wday: GROWABLE_HEAP_I32()[tm + 24 >> 2],
        tm_yday: GROWABLE_HEAP_I32()[tm + 28 >> 2],
        tm_isdst: GROWABLE_HEAP_I32()[tm + 32 >> 2],
        tm_gmtoff: GROWABLE_HEAP_I32()[tm + 36 >> 2],
        tm_zone: tm_zone ? UTF8ToString(tm_zone) : ""
    };
    var pattern = UTF8ToString(format);
    var EXPANSION_RULES_1 = {
        "%c": "%a %b %d %H:%M:%S %Y",
        "%D": "%m/%d/%y",
        "%F": "%Y-%m-%d",
        "%h": "%b",
        "%r": "%I:%M:%S %p",
        "%R": "%H:%M",
        "%T": "%H:%M:%S",
        "%x": "%m/%d/%y",
        "%X": "%H:%M:%S",
        "%Ec": "%c",
        "%EC": "%C",
        "%Ex": "%m/%d/%y",
        "%EX": "%H:%M:%S",
        "%Ey": "%y",
        "%EY": "%Y",
        "%Od": "%d",
        "%Oe": "%e",
        "%OH": "%H",
        "%OI": "%I",
        "%Om": "%m",
        "%OM": "%M",
        "%OS": "%S",
        "%Ou": "%u",
        "%OU": "%U",
        "%OV": "%V",
        "%Ow": "%w",
        "%OW": "%W",
        "%Oy": "%y"
    };
    for (var rule in EXPANSION_RULES_1) {
        pattern = pattern.replace(new RegExp(rule,"g"), EXPANSION_RULES_1[rule])
    }
    var WEEKDAYS = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    var MONTHS = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    function leadingSomething(value, digits, character) {
        var str = typeof value === "number" ? value.toString() : value || "";
        while (str.length < digits) {
            str = character[0] + str
        }
        return str
    }
    function leadingNulls(value, digits) {
        return leadingSomething(value, digits, "0")
    }
    function compareByDay(date1, date2) {
        function sgn(value) {
            return value < 0 ? -1 : value > 0 ? 1 : 0
        }
        var compare;
        if ((compare = sgn(date1.getFullYear() - date2.getFullYear())) === 0) {
            if ((compare = sgn(date1.getMonth() - date2.getMonth())) === 0) {
                compare = sgn(date1.getDate() - date2.getDate())
            }
        }
        return compare
    }
    function getFirstWeekStartDate(janFourth) {
        switch (janFourth.getDay()) {
        case 0:
            return new Date(janFourth.getFullYear() - 1,11,29);
        case 1:
            return janFourth;
        case 2:
            return new Date(janFourth.getFullYear(),0,3);
        case 3:
            return new Date(janFourth.getFullYear(),0,2);
        case 4:
            return new Date(janFourth.getFullYear(),0,1);
        case 5:
            return new Date(janFourth.getFullYear() - 1,11,31);
        case 6:
            return new Date(janFourth.getFullYear() - 1,11,30)
        }
    }
    function getWeekBasedYear(date) {
        var thisDate = __addDays(new Date(date.tm_year + 1900,0,1), date.tm_yday);
        var janFourthThisYear = new Date(thisDate.getFullYear(),0,4);
        var janFourthNextYear = new Date(thisDate.getFullYear() + 1,0,4);
        var firstWeekStartThisYear = getFirstWeekStartDate(janFourthThisYear);
        var firstWeekStartNextYear = getFirstWeekStartDate(janFourthNextYear);
        if (compareByDay(firstWeekStartThisYear, thisDate) <= 0) {
            if (compareByDay(firstWeekStartNextYear, thisDate) <= 0) {
                return thisDate.getFullYear() + 1
            } else {
                return thisDate.getFullYear()
            }
        } else {
            return thisDate.getFullYear() - 1
        }
    }
    var EXPANSION_RULES_2 = {
        "%a": function(date) {
            return WEEKDAYS[date.tm_wday].substring(0, 3)
        },
        "%A": function(date) {
            return WEEKDAYS[date.tm_wday]
        },
        "%b": function(date) {
            return MONTHS[date.tm_mon].substring(0, 3)
        },
        "%B": function(date) {
            return MONTHS[date.tm_mon]
        },
        "%C": function(date) {
            var year = date.tm_year + 1900;
            return leadingNulls(year / 100 | 0, 2)
        },
        "%d": function(date) {
            return leadingNulls(date.tm_mday, 2)
        },
        "%e": function(date) {
            return leadingSomething(date.tm_mday, 2, " ")
        },
        "%g": function(date) {
            return getWeekBasedYear(date).toString().substring(2)
        },
        "%G": function(date) {
            return getWeekBasedYear(date)
        },
        "%H": function(date) {
            return leadingNulls(date.tm_hour, 2)
        },
        "%I": function(date) {
            var twelveHour = date.tm_hour;
            if (twelveHour == 0)
                twelveHour = 12;
            else if (twelveHour > 12)
                twelveHour -= 12;
            return leadingNulls(twelveHour, 2)
        },
        "%j": function(date) {
            return leadingNulls(date.tm_mday + __arraySum(__isLeapYear(date.tm_year + 1900) ? __MONTH_DAYS_LEAP : __MONTH_DAYS_REGULAR, date.tm_mon - 1), 3)
        },
        "%m": function(date) {
            return leadingNulls(date.tm_mon + 1, 2)
        },
        "%M": function(date) {
            return leadingNulls(date.tm_min, 2)
        },
        "%n": function() {
            return "\n"
        },
        "%p": function(date) {
            if (date.tm_hour >= 0 && date.tm_hour < 12) {
                return "AM"
            } else {
                return "PM"
            }
        },
        "%S": function(date) {
            return leadingNulls(date.tm_sec, 2)
        },
        "%t": function() {
            return "\t"
        },
        "%u": function(date) {
            return date.tm_wday || 7
        },
        "%U": function(date) {
            var janFirst = new Date(date.tm_year + 1900,0,1);
            var firstSunday = janFirst.getDay() === 0 ? janFirst : __addDays(janFirst, 7 - janFirst.getDay());
            var endDate = new Date(date.tm_year + 1900,date.tm_mon,date.tm_mday);
            if (compareByDay(firstSunday, endDate) < 0) {
                var februaryFirstUntilEndMonth = __arraySum(__isLeapYear(endDate.getFullYear()) ? __MONTH_DAYS_LEAP : __MONTH_DAYS_REGULAR, endDate.getMonth() - 1) - 31;
                var firstSundayUntilEndJanuary = 31 - firstSunday.getDate();
                var days = firstSundayUntilEndJanuary + februaryFirstUntilEndMonth + endDate.getDate();
                return leadingNulls(Math.ceil(days / 7), 2)
            }
            return compareByDay(firstSunday, janFirst) === 0 ? "01" : "00"
        },
        "%V": function(date) {
            var janFourthThisYear = new Date(date.tm_year + 1900,0,4);
            var janFourthNextYear = new Date(date.tm_year + 1901,0,4);
            var firstWeekStartThisYear = getFirstWeekStartDate(janFourthThisYear);
            var firstWeekStartNextYear = getFirstWeekStartDate(janFourthNextYear);
            var endDate = __addDays(new Date(date.tm_year + 1900,0,1), date.tm_yday);
            if (compareByDay(endDate, firstWeekStartThisYear) < 0) {
                return "53"
            }
            if (compareByDay(firstWeekStartNextYear, endDate) <= 0) {
                return "01"
            }
            var daysDifference;
            if (firstWeekStartThisYear.getFullYear() < date.tm_year + 1900) {
                daysDifference = date.tm_yday + 32 - firstWeekStartThisYear.getDate()
            } else {
                daysDifference = date.tm_yday + 1 - firstWeekStartThisYear.getDate()
            }
            return leadingNulls(Math.ceil(daysDifference / 7), 2)
        },
        "%w": function(date) {
            return date.tm_wday
        },
        "%W": function(date) {
            var janFirst = new Date(date.tm_year,0,1);
            var firstMonday = janFirst.getDay() === 1 ? janFirst : __addDays(janFirst, janFirst.getDay() === 0 ? 1 : 7 - janFirst.getDay() + 1);
            var endDate = new Date(date.tm_year + 1900,date.tm_mon,date.tm_mday);
            if (compareByDay(firstMonday, endDate) < 0) {
                var februaryFirstUntilEndMonth = __arraySum(__isLeapYear(endDate.getFullYear()) ? __MONTH_DAYS_LEAP : __MONTH_DAYS_REGULAR, endDate.getMonth() - 1) - 31;
                var firstMondayUntilEndJanuary = 31 - firstMonday.getDate();
                var days = firstMondayUntilEndJanuary + februaryFirstUntilEndMonth + endDate.getDate();
                return leadingNulls(Math.ceil(days / 7), 2)
            }
            return compareByDay(firstMonday, janFirst) === 0 ? "01" : "00"
        },
        "%y": function(date) {
            return (date.tm_year + 1900).toString().substring(2)
        },
        "%Y": function(date) {
            return date.tm_year + 1900
        },
        "%z": function(date) {
            var off = date.tm_gmtoff;
            var ahead = off >= 0;
            off = Math.abs(off) / 60;
            off = off / 60 * 100 + off % 60;
            return (ahead ? "+" : "-") + String("0000" + off).slice(-4)
        },
        "%Z": function(date) {
            return date.tm_zone
        },
        "%%": function() {
            return "%"
        }
    };
    for (var rule in EXPANSION_RULES_2) {
        if (pattern.includes(rule)) {
            pattern = pattern.replace(new RegExp(rule,"g"), EXPANSION_RULES_2[rule](date))
        }
    }
    var bytes = intArrayFromString(pattern, false);
    if (bytes.length > maxsize) {
        return 0
    }
    writeArrayToMemory(bytes, s);
    return bytes.length - 1
}
function _strftime_l(s, maxsize, format, tm) {
    return _strftime(s, maxsize, format, tm)
}
if (!ENVIRONMENT_IS_PTHREAD)
    PThread.initMainThreadBlock();
embind_init_charCodes();
BindingError = Module["BindingError"] = extendError(Error, "BindingError");
InternalError = Module["InternalError"] = extendError(Error, "InternalError");
init_emval();
UnboundTypeError = Module["UnboundTypeError"] = extendError(Error, "UnboundTypeError");
var GLctx;
var proxiedFunctionTable = [null, exitOnMainThread, _atexit, _emscripten_set_canvas_element_size_main_thread, _environ_get, _environ_sizes_get, _fd_write];
function intArrayFromString(stringy, dontAddNull, length) {
    var len = length > 0 ? length : lengthBytesUTF8(stringy) + 1;
    var u8array = new Array(len);
    var numBytesWritten = stringToUTF8Array(stringy, u8array, 0, u8array.length);
    if (dontAddNull)
        u8array.length = numBytesWritten;
    return u8array
}
var asmLibraryArg = {
    "z": ___assert_fail,
    "r": ___cxa_allocate_exception,
    "t": ___cxa_begin_catch,
    "v": ___cxa_end_catch,
    "c": ___cxa_find_matching_catch_2,
    "i": ___cxa_find_matching_catch_3,
    "w": ___cxa_free_exception,
    "X": ___cxa_rethrow,
    "s": ___cxa_throw,
    "ea": ___cxa_uncaught_exceptions,
    "qa": ___emscripten_init_main_thread_js,
    "T": ___pthread_create_js,
    "la": ___pthread_detached_exit,
    "ia": ___pthread_join_js,
    "f": ___resumeException,
    "_": __embind_register_bigint,
    "ua": __embind_register_bool,
    "ta": __embind_register_emval,
    "U": __embind_register_float,
    "u": __embind_register_function,
    "A": __embind_register_integer,
    "y": __embind_register_memory_view,
    "V": __embind_register_std_string,
    "P": __embind_register_std_wstring,
    "va": __embind_register_void,
    "sa": __emscripten_notify_thread_queue,
    "R": _abort,
    "ca": _clock_gettime,
    "E": _emscripten_asm_const_async_on_main_thread,
    "ja": _emscripten_check_blocking_allowed,
    "N": _emscripten_conditional_set_current_thread_status,
    "F": _emscripten_futex_wait,
    "C": _emscripten_futex_wake,
    "D": _emscripten_get_now,
    "na": _emscripten_receive_on_main_thread_js,
    "ba": _emscripten_resize_heap,
    "oa": _emscripten_set_canvas_element_size,
    "S": _emscripten_set_current_thread_status,
    "ra": _emscripten_set_timeout,
    "ka": _emscripten_unwind_to_js_event_loop,
    "pa": _emscripten_webgl_create_context,
    "ga": _environ_get,
    "ha": _environ_sizes_get,
    "ma": _exit,
    "da": _fd_write,
    "b": _getTempRet0,
    "W": invoke_di,
    "o": invoke_dii,
    "m": invoke_diid,
    "q": invoke_diii,
    "I": invoke_i,
    "h": invoke_ii,
    "p": invoke_iid,
    "d": invoke_iii,
    "e": invoke_iiii,
    "J": invoke_iiiii,
    "aa": invoke_iiiiid,
    "K": invoke_iiiiii,
    "B": invoke_iiiiiii,
    "Q": invoke_iiiiiiii,
    "M": invoke_iiiiiiiiiiii,
    "Z": invoke_j,
    "$": invoke_ji,
    "k": invoke_v,
    "n": invoke_vi,
    "wa": invoke_vidd,
    "g": invoke_vii,
    "j": invoke_viii,
    "l": invoke_viiii,
    "H": invoke_viiiii,
    "xa": invoke_viiiiii,
    "x": invoke_viiiiiii,
    "G": invoke_viiiiiiiiii,
    "L": invoke_viiiiiiiiiiiiiii,
    "Y": _llvm_eh_typeid_for,
    "a": wasmMemory,
    "O": _setTempRet0,
    "fa": _strftime_l
};
var asm = createWasm();
var ___wasm_call_ctors = Module["___wasm_call_ctors"] = function() {
    return (___wasm_call_ctors = Module["___wasm_call_ctors"] = Module["asm"]["ya"]).apply(null, arguments)
}
;
var _malloc = Module["_malloc"] = function() {
    return (_malloc = Module["_malloc"] = Module["asm"]["Aa"]).apply(null, arguments)
}
;
var _emscripten_tls_init = Module["_emscripten_tls_init"] = function() {
    return (_emscripten_tls_init = Module["_emscripten_tls_init"] = Module["asm"]["Ba"]).apply(null, arguments)
}
;
var ___getTypeName = Module["___getTypeName"] = function() {
    return (___getTypeName = Module["___getTypeName"] = Module["asm"]["Ca"]).apply(null, arguments)
}
;
var ___embind_register_native_and_builtin_types = Module["___embind_register_native_and_builtin_types"] = function() {
    return (___embind_register_native_and_builtin_types = Module["___embind_register_native_and_builtin_types"] = Module["asm"]["Da"]).apply(null, arguments)
}
;
var _emscripten_current_thread_process_queued_calls = Module["_emscripten_current_thread_process_queued_calls"] = function() {
    return (_emscripten_current_thread_process_queued_calls = Module["_emscripten_current_thread_process_queued_calls"] = Module["asm"]["Ea"]).apply(null, arguments)
}
;
var _emscripten_main_browser_thread_id = Module["_emscripten_main_browser_thread_id"] = function() {
    return (_emscripten_main_browser_thread_id = Module["_emscripten_main_browser_thread_id"] = Module["asm"]["Fa"]).apply(null, arguments)
}
;
var _emscripten_sync_run_in_main_thread_4 = Module["_emscripten_sync_run_in_main_thread_4"] = function() {
    return (_emscripten_sync_run_in_main_thread_4 = Module["_emscripten_sync_run_in_main_thread_4"] = Module["asm"]["Ga"]).apply(null, arguments)
}
;
var _emscripten_main_thread_process_queued_calls = Module["_emscripten_main_thread_process_queued_calls"] = function() {
    return (_emscripten_main_thread_process_queued_calls = Module["_emscripten_main_thread_process_queued_calls"] = Module["asm"]["Ha"]).apply(null, arguments)
}
;
var _emscripten_run_in_main_runtime_thread_js = Module["_emscripten_run_in_main_runtime_thread_js"] = function() {
    return (_emscripten_run_in_main_runtime_thread_js = Module["_emscripten_run_in_main_runtime_thread_js"] = Module["asm"]["Ia"]).apply(null, arguments)
}
;
var __emscripten_call_on_thread = Module["__emscripten_call_on_thread"] = function() {
    return (__emscripten_call_on_thread = Module["__emscripten_call_on_thread"] = Module["asm"]["Ja"]).apply(null, arguments)
}
;
var __emscripten_thread_exit = Module["__emscripten_thread_exit"] = function() {
    return (__emscripten_thread_exit = Module["__emscripten_thread_exit"] = Module["asm"]["Ka"]).apply(null, arguments)
}
;
var _pthread_self = Module["_pthread_self"] = function() {
    return (_pthread_self = Module["_pthread_self"] = Module["asm"]["La"]).apply(null, arguments)
}
;
var _free = Module["_free"] = function() {
    return (_free = Module["_free"] = Module["asm"]["Ma"]).apply(null, arguments)
}
;
var __emscripten_thread_init = Module["__emscripten_thread_init"] = function() {
    return (__emscripten_thread_init = Module["__emscripten_thread_init"] = Module["asm"]["Na"]).apply(null, arguments)
}
;
var _pthread_testcancel = Module["_pthread_testcancel"] = function() {
    return (_pthread_testcancel = Module["_pthread_testcancel"] = Module["asm"]["Oa"]).apply(null, arguments)
}
;
var ___errno_location = Module["___errno_location"] = function() {
    return (___errno_location = Module["___errno_location"] = Module["asm"]["Pa"]).apply(null, arguments)
}
;
var stackSave = Module["stackSave"] = function() {
    return (stackSave = Module["stackSave"] = Module["asm"]["Qa"]).apply(null, arguments)
}
;
var stackRestore = Module["stackRestore"] = function() {
    return (stackRestore = Module["stackRestore"] = Module["asm"]["Ra"]).apply(null, arguments)
}
;
var stackAlloc = Module["stackAlloc"] = function() {
    return (stackAlloc = Module["stackAlloc"] = Module["asm"]["Sa"]).apply(null, arguments)
}
;
var _emscripten_stack_set_limits = Module["_emscripten_stack_set_limits"] = function() {
    return (_emscripten_stack_set_limits = Module["_emscripten_stack_set_limits"] = Module["asm"]["Ta"]).apply(null, arguments)
}
;
var _setThrew = Module["_setThrew"] = function() {
    return (_setThrew = Module["_setThrew"] = Module["asm"]["Ua"]).apply(null, arguments)
}
;
var ___cxa_can_catch = Module["___cxa_can_catch"] = function() {
    return (___cxa_can_catch = Module["___cxa_can_catch"] = Module["asm"]["Va"]).apply(null, arguments)
}
;
var ___cxa_is_pointer_type = Module["___cxa_is_pointer_type"] = function() {
    return (___cxa_is_pointer_type = Module["___cxa_is_pointer_type"] = Module["asm"]["Wa"]).apply(null, arguments)
}
;
var _memalign = Module["_memalign"] = function() {
    return (_memalign = Module["_memalign"] = Module["asm"]["Xa"]).apply(null, arguments)
}
;
var dynCall_ji = Module["dynCall_ji"] = function() {
    return (dynCall_ji = Module["dynCall_ji"] = Module["asm"]["Ya"]).apply(null, arguments)
}
;
var dynCall_j = Module["dynCall_j"] = function() {
    return (dynCall_j = Module["dynCall_j"] = Module["asm"]["Za"]).apply(null, arguments)
}
;
var dynCall_iiiiij = Module["dynCall_iiiiij"] = function() {
    return (dynCall_iiiiij = Module["dynCall_iiiiij"] = Module["asm"]["_a"]).apply(null, arguments)
}
;
var dynCall_iiiiijj = Module["dynCall_iiiiijj"] = function() {
    return (dynCall_iiiiijj = Module["dynCall_iiiiijj"] = Module["asm"]["$a"]).apply(null, arguments)
}
;
var dynCall_iiiiiijj = Module["dynCall_iiiiiijj"] = function() {
    return (dynCall_iiiiiijj = Module["dynCall_iiiiiijj"] = Module["asm"]["ab"]).apply(null, arguments)
}
;
var dynCall_viijii = Module["dynCall_viijii"] = function() {
    return (dynCall_viijii = Module["dynCall_viijii"] = Module["asm"]["bb"]).apply(null, arguments)
}
;
var dynCall_jiji = Module["dynCall_jiji"] = function() {
    return (dynCall_jiji = Module["dynCall_jiji"] = Module["asm"]["cb"]).apply(null, arguments)
}
;
var __emscripten_allow_main_runtime_queued_calls = Module["__emscripten_allow_main_runtime_queued_calls"] = 46876;
var __emscripten_main_thread_futex = Module["__emscripten_main_thread_futex"] = 48132;
function invoke_ii(index, a1) {
    var sp = stackSave();
    try {
        return getWasmTableEntry(index)(a1)
    } catch (e) {
        stackRestore(sp);
        if (e !== e + 0 && e !== "longjmp")
            throw e;
        _setThrew(1, 0)
    }
}
function invoke_i(index) {
    var sp = stackSave();
    try {
        return getWasmTableEntry(index)()
    } catch (e) {
        stackRestore(sp);
        if (e !== e + 0 && e !== "longjmp")
            throw e;
        _setThrew(1, 0)
    }
}
function invoke_v(index) {
    var sp = stackSave();
    try {
        getWasmTableEntry(index)()
    } catch (e) {
        stackRestore(sp);
        if (e !== e + 0 && e !== "longjmp")
            throw e;
        _setThrew(1, 0)
    }
}
function invoke_vii(index, a1, a2) {
    var sp = stackSave();
    try {
        getWasmTableEntry(index)(a1, a2)
    } catch (e) {
        stackRestore(sp);
        if (e !== e + 0 && e !== "longjmp")
            throw e;
        _setThrew(1, 0)
    }
}
function invoke_vi(index, a1) {
    var sp = stackSave();
    try {
        getWasmTableEntry(index)(a1)
    } catch (e) {
        stackRestore(sp);
        if (e !== e + 0 && e !== "longjmp")
            throw e;
        _setThrew(1, 0)
    }
}
function invoke_iiii(index, a1, a2, a3) {
    var sp = stackSave();
    try {
        return getWasmTableEntry(index)(a1, a2, a3)
    } catch (e) {
        stackRestore(sp);
        if (e !== e + 0 && e !== "longjmp")
            throw e;
        _setThrew(1, 0)
    }
}
function invoke_iii(index, a1, a2) {
    var sp = stackSave();
    try {
        return getWasmTableEntry(index)(a1, a2)
    } catch (e) {
        stackRestore(sp);
        if (e !== e + 0 && e !== "longjmp")
            throw e;
        _setThrew(1, 0)
    }
}
function invoke_viii(index, a1, a2, a3) {
    var sp = stackSave();
    try {
        getWasmTableEntry(index)(a1, a2, a3)
    } catch (e) {
        stackRestore(sp);
        if (e !== e + 0 && e !== "longjmp")
            throw e;
        _setThrew(1, 0)
    }
}
function invoke_viiii(index, a1, a2, a3, a4) {
    var sp = stackSave();
    try {
        getWasmTableEntry(index)(a1, a2, a3, a4)
    } catch (e) {
        stackRestore(sp);
        if (e !== e + 0 && e !== "longjmp")
            throw e;
        _setThrew(1, 0)
    }
}
function invoke_iiiiii(index, a1, a2, a3, a4, a5) {
    var sp = stackSave();
    try {
        return getWasmTableEntry(index)(a1, a2, a3, a4, a5)
    } catch (e) {
        stackRestore(sp);
        if (e !== e + 0 && e !== "longjmp")
            throw e;
        _setThrew(1, 0)
    }
}
function invoke_diii(index, a1, a2, a3) {
    var sp = stackSave();
    try {
        return getWasmTableEntry(index)(a1, a2, a3)
    } catch (e) {
        stackRestore(sp);
        if (e !== e + 0 && e !== "longjmp")
            throw e;
        _setThrew(1, 0)
    }
}
function invoke_iid(index, a1, a2) {
    var sp = stackSave();
    try {
        return getWasmTableEntry(index)(a1, a2)
    } catch (e) {
        stackRestore(sp);
        if (e !== e + 0 && e !== "longjmp")
            throw e;
        _setThrew(1, 0)
    }
}
function invoke_viiiii(index, a1, a2, a3, a4, a5) {
    var sp = stackSave();
    try {
        getWasmTableEntry(index)(a1, a2, a3, a4, a5)
    } catch (e) {
        stackRestore(sp);
        if (e !== e + 0 && e !== "longjmp")
            throw e;
        _setThrew(1, 0)
    }
}
function invoke_iiiiiii(index, a1, a2, a3, a4, a5, a6) {
    var sp = stackSave();
    try {
        return getWasmTableEntry(index)(a1, a2, a3, a4, a5, a6)
    } catch (e) {
        stackRestore(sp);
        if (e !== e + 0 && e !== "longjmp")
            throw e;
        _setThrew(1, 0)
    }
}
function invoke_dii(index, a1, a2) {
    var sp = stackSave();
    try {
        return getWasmTableEntry(index)(a1, a2)
    } catch (e) {
        stackRestore(sp);
        if (e !== e + 0 && e !== "longjmp")
            throw e;
        _setThrew(1, 0)
    }
}
function invoke_viiiiii(index, a1, a2, a3, a4, a5, a6) {
    var sp = stackSave();
    try {
        getWasmTableEntry(index)(a1, a2, a3, a4, a5, a6)
    } catch (e) {
        stackRestore(sp);
        if (e !== e + 0 && e !== "longjmp")
            throw e;
        _setThrew(1, 0)
    }
}
function invoke_iiiii(index, a1, a2, a3, a4) {
    var sp = stackSave();
    try {
        return getWasmTableEntry(index)(a1, a2, a3, a4)
    } catch (e) {
        stackRestore(sp);
        if (e !== e + 0 && e !== "longjmp")
            throw e;
        _setThrew(1, 0)
    }
}
function invoke_diid(index, a1, a2, a3) {
    var sp = stackSave();
    try {
        return getWasmTableEntry(index)(a1, a2, a3)
    } catch (e) {
        stackRestore(sp);
        if (e !== e + 0 && e !== "longjmp")
            throw e;
        _setThrew(1, 0)
    }
}
function invoke_vidd(index, a1, a2, a3) {
    var sp = stackSave();
    try {
        getWasmTableEntry(index)(a1, a2, a3)
    } catch (e) {
        stackRestore(sp);
        if (e !== e + 0 && e !== "longjmp")
            throw e;
        _setThrew(1, 0)
    }
}
function invoke_di(index, a1) {
    var sp = stackSave();
    try {
        return getWasmTableEntry(index)(a1)
    } catch (e) {
        stackRestore(sp);
        if (e !== e + 0 && e !== "longjmp")
            throw e;
        _setThrew(1, 0)
    }
}
function invoke_iiiiiiii(index, a1, a2, a3, a4, a5, a6, a7) {
    var sp = stackSave();
    try {
        return getWasmTableEntry(index)(a1, a2, a3, a4, a5, a6, a7)
    } catch (e) {
        stackRestore(sp);
        if (e !== e + 0 && e !== "longjmp")
            throw e;
        _setThrew(1, 0)
    }
}
function invoke_viiiiiii(index, a1, a2, a3, a4, a5, a6, a7) {
    var sp = stackSave();
    try {
        getWasmTableEntry(index)(a1, a2, a3, a4, a5, a6, a7)
    } catch (e) {
        stackRestore(sp);
        if (e !== e + 0 && e !== "longjmp")
            throw e;
        _setThrew(1, 0)
    }
}
function invoke_iiiiiiiiiiii(index, a1, a2, a3, a4, a5, a6, a7, a8, a9, a10, a11) {
    var sp = stackSave();
    try {
        return getWasmTableEntry(index)(a1, a2, a3, a4, a5, a6, a7, a8, a9, a10, a11)
    } catch (e) {
        stackRestore(sp);
        if (e !== e + 0 && e !== "longjmp")
            throw e;
        _setThrew(1, 0)
    }
}
function invoke_viiiiiiiiii(index, a1, a2, a3, a4, a5, a6, a7, a8, a9, a10) {
    var sp = stackSave();
    try {
        getWasmTableEntry(index)(a1, a2, a3, a4, a5, a6, a7, a8, a9, a10)
    } catch (e) {
        stackRestore(sp);
        if (e !== e + 0 && e !== "longjmp")
            throw e;
        _setThrew(1, 0)
    }
}
function invoke_viiiiiiiiiiiiiii(index, a1, a2, a3, a4, a5, a6, a7, a8, a9, a10, a11, a12, a13, a14, a15) {
    var sp = stackSave();
    try {
        getWasmTableEntry(index)(a1, a2, a3, a4, a5, a6, a7, a8, a9, a10, a11, a12, a13, a14, a15)
    } catch (e) {
        stackRestore(sp);
        if (e !== e + 0 && e !== "longjmp")
            throw e;
        _setThrew(1, 0)
    }
}
function invoke_iiiiid(index, a1, a2, a3, a4, a5) {
    var sp = stackSave();
    try {
        return getWasmTableEntry(index)(a1, a2, a3, a4, a5)
    } catch (e) {
        stackRestore(sp);
        if (e !== e + 0 && e !== "longjmp")
            throw e;
        _setThrew(1, 0)
    }
}
function invoke_ji(index, a1) {
    var sp = stackSave();
    try {
        return dynCall_ji(index, a1)
    } catch (e) {
        stackRestore(sp);
        if (e !== e + 0 && e !== "longjmp")
            throw e;
        _setThrew(1, 0)
    }
}
function invoke_j(index) {
    var sp = stackSave();
    try {
        return dynCall_j(index)
    } catch (e) {
        stackRestore(sp);
        if (e !== e + 0 && e !== "longjmp")
            throw e;
        _setThrew(1, 0)
    }
}
Module["keepRuntimeAlive"] = keepRuntimeAlive;
Module["PThread"] = PThread;
Module["PThread"] = PThread;
Module["wasmMemory"] = wasmMemory;
Module["ExitStatus"] = ExitStatus;
var calledRun;
function ExitStatus(status) {
    this.name = "ExitStatus";
    this.message = "Program terminated with exit(" + status + ")";
    this.status = status
}
dependenciesFulfilled = function runCaller() {
    if (!calledRun)
        run();
    if (!calledRun)
        dependenciesFulfilled = runCaller
}
;
function run(args) {
    args = args || arguments_;
    if (runDependencies > 0) {
        return
    }
    if (ENVIRONMENT_IS_PTHREAD) {
        initRuntime();
        postMessage({
            "cmd": "loaded"
        });
        return
    }
    preRun();
    if (runDependencies > 0) {
        return
    }
    function doRun() {
        if (calledRun)
            return;
        calledRun = true;
        Module["calledRun"] = true;
        if (ABORT)
            return;
        initRuntime();
        if (Module["onRuntimeInitialized"])
            Module["onRuntimeInitialized"]();
        postRun()
    }
    if (Module["setStatus"]) {
        Module["setStatus"]("Running...");
        setTimeout(function() {
            setTimeout(function() {
                Module["setStatus"]("")
            }, 1);
            doRun()
        }, 1)
    } else {
        doRun()
    }
}
Module["run"] = run;
function exit(status, implicit) {
    EXITSTATUS = status;
    if (!implicit) {
        if (ENVIRONMENT_IS_PTHREAD) {
            exitOnMainThread(status);
            throw "unwind"
        } else {}
    }
    if (keepRuntimeAlive()) {} else {
        exitRuntime()
    }
    procExit(status)
}
function procExit(code) {
    EXITSTATUS = code;
    if (!keepRuntimeAlive()) {
        PThread.terminateAllThreads();
        if (Module["onExit"])
            Module["onExit"](code);
        ABORT = true
    }
    quit_(code, new ExitStatus(code))
}
if (Module["preInit"]) {
    if (typeof Module["preInit"] == "function")
        Module["preInit"] = [Module["preInit"]];
    while (Module["preInit"].length > 0) {
        Module["preInit"].pop()()
    }
}
if (ENVIRONMENT_IS_PTHREAD) {
    noExitRuntime = false;
    PThread.initWorker()
}
run();
