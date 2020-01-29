# Hello, World! Coins

You are to mine a solution for our new *CS4220 Hello, World! Coin*.  Specifically, you are to find an input that begins with the string `Hello, World!`, followed by a `nonce`, that hashes to an output with three leading zeroes. 

For example, the string 

	`Hello, World!1558215` 

hashes to 

	000008fb67e78dee225c2bea554b989b164c1db4cbc5d281d00ffa81724a83b3

This output has five (5) leading zeroes: **00000**8fb67e78...

This would not be the correct answer to your problem since you are looking for a hash with only three (3) leading zeroes.

- You are expected to use the SHA-256 hashing algorithm to calculate your hashes.
- Your nonce should begin at `1`, and increment with each hashing attempt.
- Your output should be in the following form:

`The 'SHA-256' digest of 'Hello, World!???' is: 000....`

Your program should not take longer than a few seconds to execute.  For many of you, your program will execute in under a second.

### Grading
- **10pts** - Iteratively construct the `Hello, World!??` string
- **25pts** - Correctly calculate the SHA-256 hash of each string
- **15pts** - Correctly identify the first hash with 3 leading zeroes, assuming your nonce starts at `1` and increments thereafter.

**Total: 50pts**



# Message Validator
You are to read a remote array of objects consisting of `message` and `signature` properties, and determine if the message is valid based on the associated signature.  Your program should output whether the message is valid or not, followed by the original message.  Below is an example of the output that is expected.

```
false - The quick brown fox jumped over the lazy moon
false - Sphinx of black quartz, judge my vow
true - Jackdaws love my big sphinx of quartz
```

- You are expected to use the RSA key pair provided to you via GitHub.

- Your program should also remotely load the messages from the following location:

	- [http://albertcervantes.com/cs4220/messages.json](http://albertcervantes.com/cs4220/messages.json)

### Grading
- 20pts - Load messages from remote server
- 30pts - Verify each message correctly and display the output

**Total: 50pts**
