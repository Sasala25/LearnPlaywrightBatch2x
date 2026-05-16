// JavaScript Identifier Rules

// Rule 1: Can contain letters (a-z, A-Z), digits (0-9), underscores (_), and dollar signs ($)
var name = "Valid";
var _name = "Valid";
var $name = "Valid";
var name1 = "Valid";
var first_name = "Valid";
var first$name = "Valid";

// Rule 2: Must begin with a letter, underscore, or dollar sign
var firstName = "Valid - starts with letter";
var _firstName = "Valid - starts with underscore";
var $firstName = "Valid - starts with dollar sign";

// Rule 3: Cannot begin with a digit
// var 1name = "Invalid - starts with digit"; // This will throw an error

// Rule 4: JavaScript identifiers are case-sensitive
var myName = "Pramod";
var MyName = "Dutta";
var myname = "Test";
// These are three different variables

// Rule 5: Cannot use reserved words (keywords) as identifiers
// var var = "Invalid";     // Error - reserved word
// var function = "Invalid"; // Error - reserved word
// var class = "Invalid";    // Error - reserved word
// var return = "Invalid";   // Error - reserved word
// var if = "Invalid";       // Error - reserved word

// Rule 6: No spaces allowed in identifiers
// var first name = "Invalid"; // Error - space not allowed
// var first-name = "Invalid"; // Error - hyphen not allowed

// Rule 7: Unicode characters are allowed (but not recommended for best practice)
var 名字 = "Valid but not recommended";
var π = 3.14159;

// Good Practice Examples
var userName = "camelCase";
var user_name = "snake_case";
var UserName = "PascalCase";
var MAX_SIZE = "SCREAMING_SNAKE_CASE";
var isActive = true;
var totalCount = 100;

console.log("Identifier rules demonstrated successfully!");
