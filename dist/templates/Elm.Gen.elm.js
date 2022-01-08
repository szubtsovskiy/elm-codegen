"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = (function () {
    return "\nport module Elm.Gen exposing (File, files, error, info)\n\n\nimport Json.Encode as Json\n\n\ntype alias File =\n       { path : String\n       , contents : String\n       }\n\nencodeFile : File -> Json.Value\nencodeFile file =\n   Json.object\n        [ (\"path\", (Json.string file.path))\n        , (\"contents\", (Json.string file.contents))\n        ]\n\n{-|\n     Provide the list of files to be generated.\n     These files will be generated and the script will end.\n-}\nfiles : List File -> Cmd msg\nfiles list =\n     onSuccessSend (List.map encodeFile list)\n\n\n{-|\n     Report an error.  The script will end.\n\n-}\nerror :\n     List\n          { title : String\n          , description : String\n          } -> Cmd msg\nerror errs =\n     onFailureSend (List.map encodeError errs)\n\n\n\nencodeError :\n     { title : String\n     , description : String\n     } -> Json.Value\nencodeError err =\n     Json.object\n          [ (\"title\", (Json.string err.title))\n          , (\"description\", (Json.string err.description))\n          ]\n\n{-| Report some info.  The script will continue to run.\n\n-}\ninfo : String -> Cmd msg\ninfo err =\n     onInfoSend err\n\n\n\nport onSuccessSend : List Json.Value -> Cmd msg\n\nport onFailureSend : List Json.Value -> Cmd msg\n\nport onInfoSend : String -> Cmd msg\n\n".trimLeft();
});
