var searchIndex = {};
searchIndex['sha'] = {"items":[[0,"","sha",""],[0,"utils","",""],[3,"PadBlocks","sha::utils",""],[3,"StdPad","",""],[8,"Reset","",""],[10,"reset","","",0],[8,"Digest","",""],[11,"digest","","",1],[11,"to_bytes_len","","",1],[11,"to_hex_len","","",1],[8,"DigestExt","",""],[10,"default_len","","",2],[11,"to_bytes","","",2],[11,"to_hex","","",2],[8,"ReadPad","","A ReadPad can read to a buffer."],[10,"read_pad","","",3],[8,"ReadPadBlocksExt","",""],[11,"pad_blocks","","",4],[6,"Item","",""],[11,"next","","",5],[11,"new","","",6],[11,"read_pad","","",6],[0,"sha1","sha",""],[3,"Sha1","sha::sha1","TODO: docs"],[11,"default","","Construct a default `Sha1` object.",7],[11,"reset","","(Step 0) Reset the state",7],[11,"write","","(Step 1) Write to buffer",7],[11,"flush","","Digest buffer",7],[11,"read","","(Step 4) Read state as big-endian",7],[11,"finish","","Get the first 8 bytes of the state",7],[11,"write","","Write to buffer",7],[11,"default_len","","",7],[0,"consts","","TODO"],[17,"H","sha::sha1::consts","TODO"],[17,"K","","TODO"],[0,"ops","sha::sha1","TODO: docs"],[5,"expand_round_x4","sha::sha1::ops","This function can be easily implemented with Intel SHA intruction set extensions."],[5,"digest_round_x4","","This function can be easily implemented with Intel SHA intruction set extensions."],[5,"expand_round_x20","",""],[5,"digest_round_x20","",""],[5,"digest_block","","TODO"],[5,"digest","","TODO"],[11,"clone","sha::sha1","",7],[0,"sha256","sha",""],[3,"Sha256","sha::sha256","TODO: docs"],[11,"default","","Construct a default `Sha256` object.",8],[11,"reset","","Reset the state",8],[11,"write","","Write to buffer",8],[11,"flush","","Digest buffer",8],[11,"read","","Read state as big-endian",8],[11,"finish","","Get the first 8 bytes of the state",8],[11,"write","","Write to buffer",8],[11,"default_len","","",8],[0,"consts","","TODO"],[17,"H","sha::sha256::consts","TODO"],[17,"K","","TODO"],[0,"ops","sha::sha256","TODO: docs"],[5,"expand_round_x4","sha::sha256::ops","This function can be easily implemented with Intel SHA intruction set extensions."],[5,"digest_round_x4","","This function can be easily implemented with Intel SHA intruction set extensions."],[5,"expand_round_x16","",""],[5,"digest_round_x16","",""],[5,"digest_block","","TODO"],[5,"digest","","TODO"],[11,"clone","sha::sha256","",8],[0,"sha512","sha",""],[3,"Sha512","sha::sha512","TODO: docs"],[11,"default","","Construct a default `Sha512` object.",9],[11,"reset","","Reset the state",9],[11,"write","","Write to buffer",9],[11,"flush","","Digest buffer",9],[11,"read","","Read state as big-endian",9],[11,"finish","","Get the first 8 bytes of the state",9],[11,"write","","Write to buffer",9],[11,"default_len","","",9],[0,"consts","","TODO"],[17,"H","sha::sha512::consts","TODO"],[17,"K","","TODO"],[0,"ops","sha::sha512","TODO: docs"],[5,"expand_round_x4","sha::sha512::ops","There are no plans for hardware implementations at this time,\nbut this function can be easily implemented with some kind of\nSIMD assistance."],[5,"digest_round_x4","","There are no plans for hardware implementations at this time,\nbut this function can be easily implemented with some kind of\nSIMD assistance."],[5,"expand_round_x16","","TODO"],[5,"digest_round_x16","","TODO"],[5,"digest_block","","TODO"],[5,"digest","","TODO"],[11,"clone","sha::sha512","",9]],"paths":[[8,"Reset"],[8,"Digest"],[8,"DigestExt"],[8,"ReadPad"],[8,"ReadPadBlocksExt"],[3,"PadBlocks"],[3,"StdPad"],[3,"Sha1"],[3,"Sha256"],[3,"Sha512"]]};
searchIndex['rustc-serialize'] = {"items":[[0,"","rustc-serialize","Support code for encoding and decoding types."],[11,"encode","collections::string","",0],[11,"decode","","",0],[11,"encode","alloc::boxed","",1],[11,"decode","","",1],[11,"decode","","",1],[11,"encode","alloc::rc","",2],[11,"decode","","",2],[11,"encode","collections::vec","",3],[11,"decode","","",3],[11,"encode","core::option","",4],[11,"decode","","",4],[11,"encode","std::old_path::posix","",5],[11,"decode","","",5],[11,"encode","std::old_path::windows","",6],[11,"decode","","",6],[11,"encode","std::path","",7],[11,"encode","","",8],[11,"decode","","",8],[11,"encode","core::cell","",9],[11,"decode","","",9],[11,"encode","","",10],[11,"decode","","",10],[11,"encode","alloc::arc","",11],[11,"decode","","",11],[11,"encode","collections::linked_list","",12],[11,"decode","","",12],[11,"encode","collections::vec_deque","",13],[11,"decode","","",13],[11,"encode","collections::btree::map","",14],[11,"decode","","",14],[11,"encode","collections::btree::set","",15],[11,"decode","","",15],[11,"encode","std::collections::hash::map","",16],[11,"decode","","",16],[11,"encode","std::collections::hash::set","",17],[11,"decode","","",17],[11,"encode","collections::vec_map","",18],[11,"decode","","",18],[0,"base64","rustc-serialize","Base64 binary-to-text encoding"],[3,"Config","rustc-serialize::base64","Contains configuration parameters for `to_base64`."],[12,"char_set","","Character set to use",19],[12,"newline","","Newline to use",19],[12,"pad","","True to pad output with `=` characters",19],[12,"line_length","","`Some(len)` to wrap lines at `len`, `None` to disable line wrapping",19],[4,"CharacterSet","","Available encoding character sets"],[13,"Standard","","The standard character set (uses `+` and `/`)",20],[13,"UrlSafe","","The URL safe character set (uses `-` and `_`)",20],[4,"Newline","","Available newline types"],[13,"LF","","A linefeed (i.e. Unix-style newline)",21],[13,"CRLF","","A carriage return and a linefeed (i.e. Windows-style newline)",21],[4,"FromBase64Error","","Errors that can occur when decoding a base64 encoded string"],[13,"InvalidBase64Byte","","The input contained a character not part of the base64 format",22],[13,"InvalidBase64Length","","The input had an invalid length",22],[7,"STANDARD","","Configuration for RFC 4648 standard base64 encoding"],[7,"URL_SAFE","","Configuration for RFC 4648 base64url encoding"],[7,"MIME","","Configuration for RFC 2045 MIME base64 encoding"],[8,"ToBase64","","A trait for converting a value to base64 encoding."],[10,"to_base64","","Converts the value of `self` to a base64 value following the specified\nformat configuration, returning the owned string.",23],[8,"FromBase64","","A trait for converting from base64 encoded values."],[10,"from_base64","","Converts the value of `self`, interpreted as base64 encoded data, into\nan owned vector of bytes, returning the vector.",24],[11,"fmt","","",22],[11,"description","","",22],[11,"fmt","","",22],[0,"hex","rustc-serialize","Hex binary-to-text encoding"],[4,"FromHexError","rustc-serialize::hex","Errors that can occur when decoding a hex encoded string"],[13,"InvalidHexCharacter","","The input contained a character not part of the hex format",25],[13,"InvalidHexLength","","The input had an invalid length",25],[8,"ToHex","","A trait for converting a value to hexadecimal encoding"],[10,"to_hex","","Converts the value of `self` to a hex value, returning the owned\nstring.",26],[8,"FromHex","","A trait for converting hexadecimal encoded values"],[10,"from_hex","","Converts the value of `self`, interpreted as hexadecimal encoded data,\ninto an owned vector of bytes, returning the vector.",27],[11,"fmt","","",25],[11,"description","","",25],[11,"fmt","","",25],[0,"json","rustc-serialize","JSON parsing and serialization"],[3,"PrettyJson","rustc-serialize::json",""],[3,"AsJson","",""],[3,"AsPrettyJson","",""],[3,"Encoder","","A structure for implementing serialization to JSON."],[3,"Stack","","A Stack represents the current position of the parser in the logical\nstructure of the JSON stream.\nFor example foo.bar[3].x"],[3,"Parser","","A streaming JSON parser implemented as an iterator of JsonEvent, consuming\nan iterator of char."],[3,"Builder","","A Builder consumes a json::Parser to create a generic Json structure."],[3,"Decoder","","A structure to decode JSON to values in rust."],[4,"Json","","Represents a json value"],[13,"I64","","",28],[13,"U64","","",28],[13,"F64","","",28],[13,"String","","",28],[13,"Boolean","","",28],[13,"Array","","",28],[13,"Object","","",28],[13,"Null","","",28],[4,"ErrorCode","","The errors that can arise while parsing a JSON stream."],[13,"InvalidSyntax","","",29],[13,"InvalidNumber","","",29],[13,"EOFWhileParsingObject","","",29],[13,"EOFWhileParsingArray","","",29],[13,"EOFWhileParsingValue","","",29],[13,"EOFWhileParsingString","","",29],[13,"KeyMustBeAString","","",29],[13,"ExpectedColon","","",29],[13,"TrailingCharacters","","",29],[13,"TrailingComma","","",29],[13,"InvalidEscape","","",29],[13,"InvalidUnicodeCodePoint","","",29],[13,"LoneLeadingSurrogateInHexEscape","","",29],[13,"UnexpectedEndOfHexEscape","","",29],[13,"UnrecognizedHex","","",29],[13,"NotFourDigit","","",29],[13,"NotUtf8","","",29],[4,"ParserError","",""],[13,"SyntaxError","","msg, line, col",30],[13,"IoError","","",30],[4,"DecoderError","",""],[13,"ParseError","","",31],[13,"ExpectedError","","",31],[13,"MissingFieldError","","",31],[13,"UnknownVariantError","","",31],[13,"ApplicationError","","",31],[13,"EOF","","",31],[4,"EncoderError","",""],[13,"FmtError","","",32],[13,"BadHashmapKey","","",32],[4,"JsonEvent","","The output of the streaming parser."],[13,"ObjectStart","","",33],[13,"ObjectEnd","","",33],[13,"ArrayStart","","",33],[13,"ArrayEnd","","",33],[13,"BooleanValue","","",33],[13,"I64Value","","",33],[13,"U64Value","","",33],[13,"F64Value","","",33],[13,"StringValue","","",33],[13,"NullValue","","",33],[13,"Error","","",33],[4,"StackElement","","StackElements compose a Stack.\nFor example, Key(\"foo\"), Key(\"bar\"), Index(3) and Key(\"x\") are the\nStackElements compositing the stack that represents foo.bar[3].x"],[13,"Index","","",34],[13,"Key","","",34],[5,"error_str","","Returns a readable error string for a given error code."],[5,"decode","","Shortcut function to decode a JSON `&str` into an object"],[5,"encode","","Shortcut function to encode a `T` into a JSON `String`"],[5,"as_json","","Create an `AsJson` wrapper which can be used to print a value as JSON\non-the-fly via `write!`"],[5,"as_pretty_json","","Create an `AsPrettyJson` wrapper which can be used to print a value as JSON\non-the-fly via `write!`"],[6,"Array","",""],[6,"Object","",""],[6,"BuilderError","",""],[6,"EncodeResult","",""],[6,"DecodeResult","",""],[8,"ToJson","","A trait for converting values to JSON"],[10,"to_json","","Converts the value of `self` to an instance of JSON",35],[11,"fmt","","",28],[11,"partial_cmp","","",28],[11,"lt","","",28],[11,"le","","",28],[11,"gt","","",28],[11,"ge","","",28],[11,"eq","","",28],[11,"ne","","",28],[11,"clone","","",28],[11,"eq","","",29],[11,"ne","","",29],[11,"clone","","",29],[11,"fmt","","",30],[11,"eq","","",30],[11,"ne","","",30],[11,"clone","","",30],[11,"fmt","","",31],[11,"eq","","",31],[11,"ne","","",31],[11,"clone","","",31],[11,"fmt","","",32],[11,"fmt","","",29],[11,"description","","",31],[11,"cause","","",31],[11,"fmt","","",31],[11,"description","","",30],[11,"fmt","","",30],[11,"description","","",32],[11,"fmt","","",32],[11,"from_error","","",32],[11,"new_pretty","","Creates a new encoder whose output will be written in human-readable\nJSON to the specified writer",36],[11,"new","","Creates a new encoder whose output will be written in compact\nJSON to the specified writer",36],[11,"set_indent","","Set the number of spaces to indent for each level.\nThis is safe to set during encoding.",36],[6,"Error","",""],[11,"emit_nil","","",36],[11,"emit_usize","","",36],[11,"emit_u64","","",36],[11,"emit_u32","","",36],[11,"emit_u16","","",36],[11,"emit_u8","","",36],[11,"emit_isize","","",36],[11,"emit_i64","","",36],[11,"emit_i32","","",36],[11,"emit_i16","","",36],[11,"emit_i8","","",36],[11,"emit_bool","","",36],[11,"emit_f64","","",36],[11,"emit_f32","","",36],[11,"emit_char","","",36],[11,"emit_str","","",36],[11,"emit_enum","","",36],[11,"emit_enum_variant","","",36],[11,"emit_enum_variant_arg","","",36],[11,"emit_enum_struct_variant","","",36],[11,"emit_enum_struct_variant_field","","",36],[11,"emit_struct","","",36],[11,"emit_struct_field","","",36],[11,"emit_tuple","","",36],[11,"emit_tuple_arg","","",36],[11,"emit_tuple_struct","","",36],[11,"emit_tuple_struct_arg","","",36],[11,"emit_option","","",36],[11,"emit_option_none","","",36],[11,"emit_option_some","","",36],[11,"emit_seq","","",36],[11,"emit_seq_elt","","",36],[11,"emit_map","","",36],[11,"emit_map_elt_key","","",36],[11,"emit_map_elt_val","","",36],[11,"encode","","",28],[11,"from_reader","","Decodes a json value from an `&mut io::Read`",28],[11,"from_str","","Decodes a json value from a string",28],[11,"pretty","","Borrow this json object as a pretty object to generate a pretty\nrepresentation for it via `Display`.",28],[11,"find","","If the Json value is an Object, returns the value associated with the provided key.\nOtherwise, returns None.",28],[11,"find_path","","Attempts to get a nested Json Object for each key in `keys`.\nIf any key is found not to exist, find_path will return None.\nOtherwise, it will return the Json value associated with the final key.",28],[11,"search","","If the Json value is an Object, performs a depth-first search until\na value associated with the provided key is found. If no value is found\nor the Json value is not an Object, returns None.",28],[11,"is_object","","Returns true if the Json value is an Object. Returns false otherwise.",28],[11,"as_object","","If the Json value is an Object, returns the associated BTreeMap.\nReturns None otherwise.",28],[11,"as_object_mut","","If the Json value is an Object, returns the associated mutable BTreeMap.\nReturns None otherwise.",28],[11,"is_array","","Returns true if the Json value is an Array. Returns false otherwise.",28],[11,"as_array","","If the Json value is an Array, returns the associated vector.\nReturns None otherwise.",28],[11,"as_array_mut","","If the Json value is an Array, returns the associated mutable vector.\nReturns None otherwise.",28],[11,"is_string","","Returns true if the Json value is a String. Returns false otherwise.",28],[11,"as_string","","If the Json value is a String, returns the associated str.\nReturns None otherwise.",28],[11,"is_number","","Returns true if the Json value is a Number. Returns false otherwise.",28],[11,"is_i64","","Returns true if the Json value is a i64. Returns false otherwise.",28],[11,"is_u64","","Returns true if the Json value is a u64. Returns false otherwise.",28],[11,"is_f64","","Returns true if the Json value is a f64. Returns false otherwise.",28],[11,"as_i64","","If the Json value is a number, return or cast it to a i64.\nReturns None otherwise.",28],[11,"as_u64","","If the Json value is a number, return or cast it to a u64.\nReturns None otherwise.",28],[11,"as_f64","","If the Json value is a number, return or cast it to a f64.\nReturns None otherwise.",28],[11,"is_boolean","","Returns true if the Json value is a Boolean. Returns false otherwise.",28],[11,"as_boolean","","If the Json value is a Boolean, returns the associated bool.\nReturns None otherwise.",28],[11,"is_null","","Returns true if the Json value is a Null. Returns false otherwise.",28],[11,"as_null","","If the Json value is a Null, returns ().\nReturns None otherwise.",28],[6,"Output","",""],[11,"index","","",28],[6,"Output","",""],[11,"index","","",28],[11,"fmt","","",33],[11,"clone","","",33],[11,"eq","","",33],[11,"ne","","",33],[11,"fmt","","",34],[11,"clone","","",34],[11,"eq","","",34],[11,"ne","","",34],[11,"new","","",37],[11,"len","","Returns The number of elements in the Stack.",37],[11,"is_empty","","Returns true if the stack is empty.",37],[11,"get","","Provides access to the StackElement at a given index.\nlower indices are at the bottom of the stack while higher indices are\nat the top.",37],[11,"is_equal_to","","Compares this stack with an array of StackElements.",37],[11,"starts_with","","Returns true if the bottom-most elements of this stack are the same as\nthe ones passed as parameter.",37],[11,"ends_with","","Returns true if the top-most elements of this stack are the same as\nthe ones passed as parameter.",37],[11,"top","","Returns the top-most element (if any).",37],[6,"Item","",""],[11,"next","","",38],[11,"new","","Creates the JSON parser.",38],[11,"stack","","Provides access to the current position in the logical structure of the\nJSON stream.",38],[11,"new","","Create a JSON Builder.",39],[11,"build","","",39],[11,"new","","Creates a new decoder instance for decoding the specified JSON value.",40],[6,"Error","",""],[11,"read_nil","","",40],[11,"read_usize","","",40],[11,"read_u8","","",40],[11,"read_u16","","",40],[11,"read_u32","","",40],[11,"read_u64","","",40],[11,"read_isize","","",40],[11,"read_i8","","",40],[11,"read_i16","","",40],[11,"read_i32","","",40],[11,"read_i64","","",40],[11,"read_f32","","",40],[11,"read_f64","","",40],[11,"read_bool","","",40],[11,"read_char","","",40],[11,"read_str","","",40],[11,"read_enum","","",40],[11,"read_enum_variant","","",40],[11,"read_enum_variant_arg","","",40],[11,"read_enum_struct_variant","","",40],[11,"read_enum_struct_variant_field","","",40],[11,"read_struct","","",40],[11,"read_struct_field","","",40],[11,"read_tuple","","",40],[11,"read_tuple_arg","","",40],[11,"read_tuple_struct","","",40],[11,"read_tuple_struct_arg","","",40],[11,"read_option","","",40],[11,"read_seq","","",40],[11,"read_seq_elt","","",40],[11,"read_map","","",40],[11,"read_map_elt_key","","",40],[11,"read_map_elt_val","","",40],[11,"error","","",40],[11,"to_json","","",28],[11,"to_json","collections::string","",0],[11,"to_json","collections::vec","",3],[11,"to_json","collections::btree::map","",14],[11,"to_json","std::collections::hash::map","",16],[11,"to_json","core::option","",4],[11,"fmt","rustc-serialize::json","Encodes a json value into a string",28],[11,"fmt","","Encodes a json value into a string",41],[11,"fmt","","Encodes a json value into a string",42],[11,"indent","","Set the indentation level for the emitted JSON",43],[11,"fmt","","Encodes a json value into a string",43],[6,"Err","",""],[11,"from_str","","",28],[11,"encode","collections::string","",0],[11,"decode","","",0],[11,"encode","alloc::boxed","",1],[11,"decode","","",1],[11,"decode","","",1],[11,"encode","alloc::rc","",2],[11,"decode","","",2],[11,"encode","collections::vec","",3],[11,"decode","","",3],[11,"encode","core::option","",4],[11,"decode","","",4],[11,"encode","std::old_path::posix","",5],[11,"decode","","",5],[11,"encode","std::old_path::windows","",6],[11,"decode","","",6],[11,"encode","std::path","",7],[11,"encode","","",8],[11,"decode","","",8],[11,"encode","core::cell","",9],[11,"decode","","",9],[11,"encode","","",10],[11,"decode","","",10],[11,"encode","alloc::arc","",11],[11,"decode","","",11],[8,"Decoder","rustc-serialize",""],[16,"Error","rustc-serialize::Decoder",""],[10,"read_nil","rustc-serialize","",44],[10,"read_usize","","",44],[10,"read_u64","","",44],[10,"read_u32","","",44],[10,"read_u16","","",44],[10,"read_u8","","",44],[10,"read_isize","","",44],[10,"read_i64","","",44],[10,"read_i32","","",44],[10,"read_i16","","",44],[10,"read_i8","","",44],[10,"read_bool","","",44],[10,"read_f64","","",44],[10,"read_f32","","",44],[10,"read_char","","",44],[10,"read_str","","",44],[10,"read_enum","","",44],[10,"read_enum_variant","","",44],[10,"read_enum_variant_arg","","",44],[10,"read_enum_struct_variant","","",44],[10,"read_enum_struct_variant_field","","",44],[10,"read_struct","","",44],[10,"read_struct_field","","",44],[10,"read_tuple","","",44],[10,"read_tuple_arg","","",44],[10,"read_tuple_struct","","",44],[10,"read_tuple_struct_arg","","",44],[10,"read_option","","",44],[10,"read_seq","","",44],[10,"read_seq_elt","","",44],[10,"read_map","","",44],[10,"read_map_elt_key","","",44],[10,"read_map_elt_val","","",44],[10,"error","","",44],[8,"Encoder","",""],[16,"Error","rustc-serialize::Encoder",""],[10,"emit_nil","rustc-serialize","",45],[10,"emit_usize","","",45],[10,"emit_u64","","",45],[10,"emit_u32","","",45],[10,"emit_u16","","",45],[10,"emit_u8","","",45],[10,"emit_isize","","",45],[10,"emit_i64","","",45],[10,"emit_i32","","",45],[10,"emit_i16","","",45],[10,"emit_i8","","",45],[10,"emit_bool","","",45],[10,"emit_f64","","",45],[10,"emit_f32","","",45],[10,"emit_char","","",45],[10,"emit_str","","",45],[10,"emit_enum","","",45],[10,"emit_enum_variant","","",45],[10,"emit_enum_variant_arg","","",45],[10,"emit_enum_struct_variant","","",45],[10,"emit_enum_struct_variant_field","","",45],[10,"emit_struct","","",45],[10,"emit_struct_field","","",45],[10,"emit_tuple","","",45],[10,"emit_tuple_arg","","",45],[10,"emit_tuple_struct","","",45],[10,"emit_tuple_struct_arg","","",45],[10,"emit_option","","",45],[10,"emit_option_none","","",45],[10,"emit_option_some","","",45],[10,"emit_seq","","",45],[10,"emit_seq_elt","","",45],[10,"emit_map","","",45],[10,"emit_map_elt_key","","",45],[10,"emit_map_elt_val","","",45],[8,"Decodable","",""],[10,"decode","","",46],[8,"Encodable","",""],[10,"encode","","",47],[8,"DecoderHelpers","",""],[10,"read_to_vec","","",48],[8,"EncoderHelpers","",""],[10,"emit_from_vec","","",49]],"paths":[[3,"String"],[3,"Box"],[3,"Rc"],[3,"Vec"],[4,"Option"],[3,"Path"],[3,"Path"],[3,"Path"],[3,"PathBuf"],[3,"Cell"],[3,"RefCell"],[3,"Arc"],[3,"LinkedList"],[3,"VecDeque"],[3,"BTreeMap"],[3,"BTreeSet"],[3,"HashMap"],[3,"HashSet"],[3,"VecMap"],[3,"Config"],[4,"CharacterSet"],[4,"Newline"],[4,"FromBase64Error"],[8,"ToBase64"],[8,"FromBase64"],[4,"FromHexError"],[8,"ToHex"],[8,"FromHex"],[4,"Json"],[4,"ErrorCode"],[4,"ParserError"],[4,"DecoderError"],[4,"EncoderError"],[4,"JsonEvent"],[4,"StackElement"],[8,"ToJson"],[3,"Encoder"],[3,"Stack"],[3,"Parser"],[3,"Builder"],[3,"Decoder"],[3,"PrettyJson"],[3,"AsJson"],[3,"AsPrettyJson"],[8,"Decoder"],[8,"Encoder"],[8,"Decodable"],[8,"Encodable"],[8,"DecoderHelpers"],[8,"EncoderHelpers"]]};

searchIndex['endian'] = {"items":[[0,"","endian",""],[8,"ReadEndian","","Read extension for endianness."],[10,"read_be","","",0],[10,"read_le","","",0],[8,"WriteEndian","","Write extension for endianness."],[10,"write_be","","",1],[10,"write_le","","",1],[11,"read_be","collections::vec","",2],[11,"read_le","","",2],[11,"write_be","","",2],[11,"write_le","","",2],[11,"read_be","","",2],[11,"read_le","","",2],[11,"write_be","","",2],[11,"write_le","","",2],[11,"read_be","","",2],[11,"read_le","","",2],[11,"write_be","","",2],[11,"write_le","","",2]],"paths":[[8,"ReadEndian"],[8,"WriteEndian"],[3,"Vec"]]};

searchIndex['bswap'] = {"items":[[0,"","bswap",""],[0,"u8","","Swap bytes for `u8` slices on all targets."],[5,"align_of_ptr","bswap::u8","TODO"],[5,"reverse_slice_inplace","","TODO"],[5,"reverse_slice","","TODO"],[5,"reverse_memory_inplace","","TODO"],[5,"reverse_memory","","TODO"],[5,"reverse_memory_array_inplace","",""],[5,"reverse_memory_array","",""],[17,"BYTES","",""],[0,"u16","bswap","Swap bytes for `u16` objects on all targets."],[5,"swap_memory_inplace","bswap::u16","TODO"],[5,"swap_memory","","TODO"],[17,"BYTES","",""],[0,"u24","bswap","Swap bytes for `[u8; 3]` objects on all targets."],[5,"swap_memory_inplace","bswap::u24",""],[5,"swap_memory","",""],[17,"BYTES","",""],[0,"u40","bswap","Swap bytes for `[u8; 5]` objects on all targets."],[5,"swap_memory_inplace","bswap::u40",""],[5,"swap_memory","",""],[17,"BYTES","",""],[0,"u48","bswap","Swap bytes for `[u8; 6]` objects on all targets."],[5,"swap_memory_inplace","bswap::u48",""],[5,"swap_memory","",""],[17,"BYTES","",""],[0,"u56","bswap","Swap bytes for `[u8; 7]` objects on all targets."],[5,"swap_memory_inplace","bswap::u56",""],[5,"swap_memory","",""],[17,"BYTES","",""],[0,"u32","bswap","Swap bytes for `u32` objects on all targets."],[5,"swap_memory_inplace","bswap::u32","Swaps `len*4` bytes for `u32` objects inplace in `buf`."],[5,"swap_memory","","Swaps `len*4` bytes for `u32` objects from `src` to `dst`. The source and destination may not overlap."],[17,"BYTES","",""],[0,"u64","bswap","Swap bytes for `u64` objects on all targets."],[5,"swap_memory_inplace","bswap::u64","Swaps `len*8` bytes for `u64` objects inplace in `buf`."],[5,"swap_memory","","Swaps `len*8` bytes for `u64` objects from `src` to `dst`. The source and destination may not overlap."],[17,"BYTES","",""],[0,"beusize","bswap",""],[5,"decode","bswap::beusize",""],[5,"encode","",""],[0,"leusize","bswap",""],[5,"decode","bswap::leusize",""],[5,"encode","",""],[0,"beu16","bswap","Swap bytes for `u16` objects only on little-endian targets, does nothing on big-endian targets."],[5,"decode","bswap::beu16","Decodes $E-endian bytes to a native-endian $T object."],[5,"decode_slice","","Decodes $E-endian bytes to a slice of native-endian $T objects."],[5,"encode","","Encodes a native-endian $T object to $E-endian bytes."],[5,"encode_slice","","Encodes a slice of native-endian $T objects to $E-endian bytes."],[0,"beu24","bswap","Swap bytes for `[u8; 3]` objects only on little-endian targets, does nothing on big-endian targets."],[5,"decode","bswap::beu24","Decodes $E-endian bytes to a native-endian $T object."],[5,"decode_slice","","Decodes $E-endian bytes to a slice of native-endian $T objects."],[5,"encode","","Encodes a native-endian $T object to $E-endian bytes."],[5,"encode_slice","","Encodes a slice of native-endian $T objects to $E-endian bytes."],[0,"beu32","bswap","Swap bytes for `u32` objects only on little-endian targets, does nothing on big-endian targets."],[5,"decode","bswap::beu32","Decodes $E-endian bytes to a native-endian $T object."],[5,"decode_slice","","Decodes $E-endian bytes to a slice of native-endian $T objects."],[5,"encode","","Encodes a native-endian $T object to $E-endian bytes."],[5,"encode_slice","","Encodes a slice of native-endian $T objects to $E-endian bytes."],[0,"beu40","bswap","Swap bytes for `[u8; 5]` objects only on little-endian targets, does nothing on big-endian targets."],[5,"decode","bswap::beu40","Decodes $E-endian bytes to a native-endian $T object."],[5,"decode_slice","","Decodes $E-endian bytes to a slice of native-endian $T objects."],[5,"encode","","Encodes a native-endian $T object to $E-endian bytes."],[5,"encode_slice","","Encodes a slice of native-endian $T objects to $E-endian bytes."],[0,"beu48","bswap","Swap bytes for `[u8; 6]` objects only on little-endian targets, does nothing on big-endian targets."],[5,"decode","bswap::beu48","Decodes $E-endian bytes to a native-endian $T object."],[5,"decode_slice","","Decodes $E-endian bytes to a slice of native-endian $T objects."],[5,"encode","","Encodes a native-endian $T object to $E-endian bytes."],[5,"encode_slice","","Encodes a slice of native-endian $T objects to $E-endian bytes."],[0,"beu56","bswap","Swap bytes for `[u8; 7]` objects only on little-endian targets, does nothing on big-endian targets."],[5,"decode","bswap::beu56","Decodes $E-endian bytes to a native-endian $T object."],[5,"decode_slice","","Decodes $E-endian bytes to a slice of native-endian $T objects."],[5,"encode","","Encodes a native-endian $T object to $E-endian bytes."],[5,"encode_slice","","Encodes a slice of native-endian $T objects to $E-endian bytes."],[0,"beu64","bswap","Swap bytes for `u64` objects only on little-endian targets, does nothing on big-endian targets."],[5,"decode","bswap::beu64","Decodes $E-endian bytes to a native-endian $T object."],[5,"decode_slice","","Decodes $E-endian bytes to a slice of native-endian $T objects."],[5,"encode","","Encodes a native-endian $T object to $E-endian bytes."],[5,"encode_slice","","Encodes a slice of native-endian $T objects to $E-endian bytes."],[0,"leu16","bswap","Swap bytes for `u16` objects only on big-endian targets, does nothing on little-endian targets."],[5,"decode","bswap::leu16","Decodes $E-endian bytes to a native-endian $T object."],[5,"decode_slice","","Decodes $E-endian bytes to a slice of native-endian $T objects."],[5,"encode","","Encodes a native-endian $T object to $E-endian bytes."],[5,"encode_slice","","Encodes a slice of native-endian $T objects to $E-endian bytes."],[0,"leu24","bswap","Swap bytes for `[u8; 3]` objects only on big-endian targets, does nothing on little-endian targets."],[5,"decode","bswap::leu24","Decodes $E-endian bytes to a native-endian $T object."],[5,"decode_slice","","Decodes $E-endian bytes to a slice of native-endian $T objects."],[5,"encode","","Encodes a native-endian $T object to $E-endian bytes."],[5,"encode_slice","","Encodes a slice of native-endian $T objects to $E-endian bytes."],[0,"leu32","bswap","Swap bytes for `u32` objects only on big-endian targets, does nothing on little-endian targets."],[5,"decode","bswap::leu32","Decodes $E-endian bytes to a native-endian $T object."],[5,"decode_slice","","Decodes $E-endian bytes to a slice of native-endian $T objects."],[5,"encode","","Encodes a native-endian $T object to $E-endian bytes."],[5,"encode_slice","","Encodes a slice of native-endian $T objects to $E-endian bytes."],[0,"leu40","bswap","Swap bytes for `[u8; 5]` objects only on big-endian targets, does nothing on little-endian targets."],[5,"decode","bswap::leu40","Decodes $E-endian bytes to a native-endian $T object."],[5,"decode_slice","","Decodes $E-endian bytes to a slice of native-endian $T objects."],[5,"encode","","Encodes a native-endian $T object to $E-endian bytes."],[5,"encode_slice","","Encodes a slice of native-endian $T objects to $E-endian bytes."],[0,"leu48","bswap","Swap bytes for `[u8; 6]` objects only on big-endian targets, does nothing on little-endian targets."],[5,"decode","bswap::leu48","Decodes $E-endian bytes to a native-endian $T object."],[5,"decode_slice","","Decodes $E-endian bytes to a slice of native-endian $T objects."],[5,"encode","","Encodes a native-endian $T object to $E-endian bytes."],[5,"encode_slice","","Encodes a slice of native-endian $T objects to $E-endian bytes."],[0,"leu56","bswap","Swap bytes for `[u8; 7]` objects only on big-endian targets, does nothing on little-endian targets."],[5,"decode","bswap::leu56","Decodes $E-endian bytes to a native-endian $T object."],[5,"decode_slice","","Decodes $E-endian bytes to a slice of native-endian $T objects."],[5,"encode","","Encodes a native-endian $T object to $E-endian bytes."],[5,"encode_slice","","Encodes a slice of native-endian $T objects to $E-endian bytes."],[0,"leu64","bswap","Swap bytes for `u64` objects only on big-endian targets, does nothing on little-endian targets."],[5,"decode","bswap::leu64","Decodes $E-endian bytes to a native-endian $T object."],[5,"decode_slice","","Decodes $E-endian bytes to a slice of native-endian $T objects."],[5,"encode","","Encodes a native-endian $T object to $E-endian bytes."],[5,"encode_slice","","Encodes a slice of native-endian $T objects to $E-endian bytes."]],"paths":[]};

searchIndex['cryptoil'] = {"items":[[0,"","cryptoil",""],[0,"utils","",""],[3,"StdPad","cryptoil::utils",""],[8,"Reset","",""],[10,"reset","","",0],[8,"ReadBlock","",""],[16,"Block","cryptoil::utils::ReadBlock",""],[10,"read_block","cryptoil::utils","",1],[8,"WriteBlock","",""],[16,"Block","cryptoil::utils::WriteBlock",""],[10,"write_block","cryptoil::utils","",2],[8,"Digest","",""],[11,"finish_len","","",3],[11,"digest_len","","",3],[8,"DigestExt","",""],[10,"default_len","","",4],[11,"finish","","",4],[11,"digest","","",4],[11,"new","","",5],[11,"read","","",5],[0,"sha","cryptoil",""],[0,"sha256","cryptoil::sha",""],[3,"u32x4","cryptoil::sha::sha256","Please fix std::simd::u32x4"],[3,"Sha256","","The `Sha256` public frontend to a SHA-1 message digest algorithm."],[0,"consts","",""],[17,"BLOCK_LEN","cryptoil::sha::sha256::consts",""],[17,"STATE_LEN","",""],[17,"H","",""],[17,"H_U32X4","","Constants used by Intel SHA-256 instruction set extensions."],[17,"K","",""],[17,"K_U32X4","","Constants used by Intel SHA-256 instruction set extensions."],[0,"ops","cryptoil::sha::sha256",""],[5,"expand_step1","cryptoil::sha::sha256::ops","Emulates `llvm.x86.sha256msg1` intrinsic."],[5,"expand_step2","","Emulates `llvm.x86.sha256msg2` intrinsic."],[5,"expand_round_x4","","Combines the SHA-256 message schedule intrinsics into one function."],[5,"digest_round_x2","","Emulates `llvm.x86.sha256rnds2` intrinsic."],[5,"digest_round_x4","","Performs 4 digest rounds."],[5,"digest_block_u32x4","","Process a block with the SHA-2 SHA-256 algorithm."],[5,"digest_block_u32","",""],[5,"digest_u32x4","",""],[5,"digest_u32","",""],[0,"impls","cryptoil::sha::sha256",""],[11,"default","","Construct a default `Sha256` object.",6],[11,"reset","","Reset the state",6],[11,"read","","Read state as big-endian",6],[11,"write","","Write to the buffer",6],[11,"flush","","Digest the buffer",6],[11,"finish","","Get the first 8 bytes of the state",6],[11,"write","","Write to buffer",6],[11,"into_bytes","","",6],[11,"to_hex","","",6],[11,"default_len","","",6],[11,"fmt","","",7],[11,"clone","","",7],[11,"fmt","","",6],[11,"clone","","",6],[11,"new","","Construct a `Sha256` object with the given state.",6]],"paths":[[8,"Reset"],[8,"ReadBlock"],[8,"WriteBlock"],[8,"Digest"],[8,"DigestExt"],[3,"StdPad"],[3,"Sha256"],[3,"u32x4"]]};

searchIndex['digest'] = {"items":[[0,"","digest",""],[5,"digest_cmd","",""],[5,"main","",""]],"paths":[]};

initSearch(searchIndex);
