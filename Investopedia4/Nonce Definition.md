---
alias: [Nonce]
created: 2021-03-02T21:48:20 (UTC +11:00)
tags: [Nonce Definition, Nonce Definition]
source: https://www.investopedia.com/terms/n/nonce.asp
author: Jake Frankenfield
---

# [[Nonce Definition]]

> ## Excerpt
> Nonce is a number added to a hashed block, that, when rehashed, meets the difficulty level restrictions.

---

[[Nonce Definition]]
## What Is Nonce?

A nonce is an abbreviation for "number only used once," which is a number added to a hashed—or encrypted—block in a blockchain that, when rehashed, meets the difficulty level restrictions. The nonce is the number that [[blockchain]](https://www.investopedia.com/terms/b/blockchain.asp) miners are solving for. When the solution is found, the blockchain miners are offered [[Cryptocurrency|cryptocurrency]] in exchange.

### Key Takeaways

-   Nonce, or a "number only used once," refers to the first number a blockchain miner needs to discover before solving for a block in the blockchain.
-   Once the mathematical computations are solved by the miner, they are gifted [[Cryptocurrency|cryptocurrency]] for their time and skill.
-   Nonce is difficult to find and is considered a way to weed out the less talented crypto miners.
-   The world of crypto [[Mining|mining]] is challenging, and one often needs excellent computational power to even begin to try and solve the nonce.

## Understanding Nonce

The blockchain is the cornerstone of [[cryptocurrency]](https://www.investopedia.com/terms/c/[[Cryptocurrency|cryptocurrency]].asp). In order to keep the blockchain secure, data from previous blocks are encrypted or “hashed” into a series of numbers and letters. This is done by processing the block input through a function, which produces an output of a fixed length.

The function used to generate the [[hash]](https://www.investopedia.com/terms/h/hash.asp) is deterministic, meaning that it [[Will|will]] produce the same result each time the same input is used. It also means that the function can generate a hashed input efficiently, it makes determining the input difficult (leading to [[mining]](https://www.investopedia.com/terms/b/bitcoin-[[Mining|mining]].asp)), and makes small changes to the input result in a very different hash. This complex system creates the privacy net of blockchain.

## Special Considerations: Discovering the Nonce

Adding transactions to the blockchain requires substantial computer processing power. The individuals and companies who process blocks are called miners. Miners are compensated only if they are the first to create a hash that meets a certain set of requirements, called the [[target hash]](https://www.investopedia.com/terms/t/target-hash.asp).

The process of guessing the hash starts in the block header. It contains the block version number, a timestamp, the hash used in the previous block, the hash of the Merkle Root, the nonce, and the target hash.

Successfully [[Mining|mining]] a block requires a miner to be the first to guess the nonce, which is a random string of numbers appended to the hashed contents of the block, and then rehashed.

If the hash meets the requirements set forth in the target, then the block is added to the blockchain. Cycling through solutions in order to guess the nonce is referred to as [[proof of work]](https://www.investopedia.com/terms/p/proof-work.asp), and the miner who is able to find the value is awarded the block and paid in [[Cryptocurrency|cryptocurrency]].

Determining which string to use as the nonce requires a significant amount of trial-and-error, as it is a random string. A miner must guess a nonce, append it to the hash of the current header, rehash the value, and compare this to the target hash. If the resulting hash value meets the requirements, the miner has created a solution and is awarded the block.

It is highly unlikely that a miner [[Will|will]] successfully guess the nonce on the first try, meaning that the miner may potentially test a large number of nonce options before getting it right. The greater the difficulty—a measure of how hard it is to create a hash that is less than the target—the longer it is likely to take to generate a solution.

Block difficulty is kept the same across the entire network, meaning that all miners have the same chance of figuring out the correct hash. [[Cryptocurrency]] networks typically establish a target number of blocks they want processed during a specific time period, and periodically adjust the difficulty in order to ensure that this target is met. If the number of blocks processed does not meet this target then the difficulty [[Will|will]] be reduced, with the reduction in difficulty set to the amount of time over the limit the processing time was.
