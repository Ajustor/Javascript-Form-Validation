# Javascript-Form-Validation

[![Codacy Badge](https://api.codacy.com/project/badge/Grade/0b997a4b9abb4dd488c8a3940db6867e)](https://app.codacy.com/gh/Ajustor/Javascript-Form-Validation?utm_source=github.com&utm_medium=referral&utm_content=Ajustor/Javascript-Form-Validation&utm_campaign=Badge_Grade_Settings)

Javascript Library providing form validation helpers

## Table of contents

- [Installation](#installation)
- [Usage](#usage)
  - [Include Library](#include-library)
  - [Use components](#use-components)
    - [Color](#color)
    - [DateTime](#datetime)
    - [Email](#email)
    - [Iban](#iban)
    - [Password](#password)
    - [Range](#range)
    - [Siren](#siren)
    - [Siret](#siret)
    - [Text](#text)

## Installation

In order to use this library, [download zip file](https://github.com/Ajustor/Javascript-Form-Validation/releases) and copy necessary files from `dist` folder into your assets folder.

## Usage

### Include library

To use the library, start by including the files you need into `head` section of your project.

```html
<script src="your_directory/Email.min.js" defer></script>
<script src="your_directory/Password.min.js" defer></script>
```

### Use components

Each component is made to help you validate a single type of data in your project.

#### Color

The Color component helps you validate the input contains a valid CSS color code (Named, rgb, rgba or hex)

In order to use this component, first instantiate it and then use the `isValid` method to check it.

##### isValid(color) ⇒ <code>boolean</code>

| Param | Type                | Description    |
| ----- | ------------------- | -------------- |
| color | <code>string</code> | Color to check |

```javascript
// Instantiation
let myColor = new Color(); // replace myColor by variable name of your preference

// Check Color
myColor.isValid('purple');
myColor.isValid('rgba(14, 85, 213, 0.4)');
myColor.isValid('#34D10C');
```

#### DateTime

The DateTime component helps you validate the input contains a valid DateTime (based on JS formats)

In order to use this component, first instantiate it and then use the `isValid` method to check it.

##### isValid(myDate) ⇒ <code>boolean</code>

| Param  | Type                | Description   |
| ------ | ------------------- | ------------- |
| myDate | <code>string</code> | Date to check |

```javascript
// Instantiation
let myDate = new DateTime(); // replace myDate by variable name of your preference

// Check DateTime
myDate.isValid('2021-05-31 02:30');
```

#### Email

The Email component helps you validate the input contains a string that **looks like** an email. It doesn't validate the email exists.

In order to use this component, first instantiate it and then use the `isValid` method to check it.

##### isValid(email) ⇒ <code>boolean</code>

| Param | Type                | Description    |
| ----- | ------------------- | -------------- |
| email | <code>string</code> | Email to check |

```javascript
// Instantiation
let email = new Email(); // replace email by variable name of your preference

// Check email
email.isValid('email@example.com');
```

#### Iban

The Iban (International Bank Account Number) component helps you validate the input contains a string that is a valid Iban (not that the account exists).

In order to use this component, first instantiate it and then use the `isValid` method to check it.

##### isValid(iban) ⇒ <code>boolean</code>

| Param | Type                | Description   |
| ----- | ------------------- | ------------- |
| iban  | <code>string</code> | Iban to check |

```javascript
// Instantiation
let iban = new Iban(); // replace iban by variable name of your preference

// Check iban
iban.isValid('FR1234567890123456789012345');
```

#### Password

The Password component helps you validate the input contains a string that matches the strength level you look for.

In order to use this component, first instantiate it and then use the `isValid` method to check it.

During instantiation, provide, if you like, optional parameters **as an object** to define what you require in the password.

Parameters are as follows:

| Param     | Type                 | Description                                | Default |
| --------- | -------------------- | ------------------------------------------ | ------- |
| uppercase | <code>boolean</code> | You require at least 1 uppercase character | true    |
| lowercase | <code>boolean</code> | You require at least 1 lowercase character | true    |
| numeric   | <code>boolean</code> | You require at least 1 numeric character   | true    |
| special   | <code>boolean</code> | You require at least 1 special character   | true    |
| minLength | <code>integer</code> | You require a minimum length for password  | 12      |

##### isValid(pass) ⇒ <code>object|boolean</code>

| Param | Type                | Description       |
| ----- | ------------------- | ----------------- |
| pass  | <code>string</code> | Password to check |

```javascript
// Instantiation
// This example requires uppercase, special, numeric and at least 15 characters
let pass = new Password({ lowercase: false, minLength: 15 }); // replace pass by variable name of your preference

// This example requires uppercase, lowercase, special, numeric and at least 12 characters
let pass = new Password(); // replace pass by variable name of your preference

// Check password
pass.isValid('here1sTheP@ssword!');
```

#### Range

The Range component helps you validate the input contains a number that matches the range you look for.

In order to use this component, first instantiate it and then use the `isValid` method to check it.

During instantiation, provide, if you like, optional parameters to define what you require as a range.

Parameters are as follows:

| Param | Type                 | Description                 | Default |
| ----- | -------------------- | --------------------------- | ------- |
| Min   | <code>integer</code> | You require a minimum value | 0       |
| Max   | <code>integer</code> | You require a maximum value | 0       |

##### isValid(value) ⇒ <code>object|boolean</code>

| Param | Type                 | Description     |
| ----- | -------------------- | --------------- |
| value | <code>integer</code> | Number to check |

```javascript
// Instantiation
// This example requires a number between 10 and 20
let range = new Range(10, 20); // replace range by variable name of your preference

// This example has no limits (just checks entry is a number)
let range = new Range(); // replace range by variable name of your preference

// Check password
range.isValid(12);
```

#### Siren

The Siren component helps you validate the input contains a string that is a valid "SIREN" number (French companies identifier), not that it exists.

In order to use this component, first instantiate it and then use the `isValid` method to check it.

##### isValid(siren) ⇒ <code>object|boolean</code>

| Param | Type                | Description    |
| ----- | ------------------- | -------------- |
| siren | <code>string</code> | Siren to check |

```javascript
// Instantiation
let siren = new Siren(); // replace siren by variable name of your preference

// Check siren
siren.isValid('123 456 789');
```

#### Siret

The Siret component helps you validate the input contains a string that is a valid "SIRET" number (French companies identifier), not that it exists.

In order to use this component, first instantiate it and then use the `isValid` method to check it.

##### isValid(siren) ⇒ <code>object|boolean</code>

| Param | Type                | Description    |
| ----- | ------------------- | -------------- |
| siret | <code>string</code> | Siret to check |

```javascript
// Instantiation
let siret = new Siret(); // replace siret by variable name of your preference

// Check siret
siret.isValid('123 456 789 00001');
```

#### Text

The Text component helps you validate the input contains a string that meets the length you provide.

In order to use this component, first instantiate it and then use the `isValid` method to check it.

During instantiation, provide, if you like, optional parameters to define what you require as a range.

Parameters are as follows:

| Param | Type                 | Description                  | Default |
| ----- | -------------------- | ---------------------------- | ------- |
| Min   | <code>integer</code> | You require a minimum length | 0       |
| Max   | <code>integer</code> | You require a maximum length | 0       |

##### isValid(text) ⇒ <code>object|boolean</code>

| Param | Type                | Description   |
| ----- | ------------------- | ------------- |
| text  | <code>string</code> | Text to check |

```javascript
// Instantiation
// This example requires a text length between 10 and 20
let text = new Text(10, 20); // replace text by variable name of your preference

// Check text
text.isValid('Hello World!');
```
