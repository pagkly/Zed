---
alias: [Atomic Swaps Defined]
created: 2021-02-28T17:42:20 (UTC +11:00)
tags: [Atomic Swaps Defined, What Are Atomic Swaps?]
source: https://www.investopedia.com/terms/a/atomic-swaps.asp
author: Jake Frankenfield
---

# Atomic Swaps Defined

> ## Excerpt
> Atomic swaps are smart contracts that enable exchanges from one cryptocurrency to another without using centralized intermediaries.

---

What Are Atomic Swaps?
An atomic swap is a [smart contract](https://www.investopedia.com/terms/s/smart-contracts.asp) technology that enables the exchange of one cryptocurrency for another without using centralized intermediaries, such as exchanges.

Atomic swaps can take place directly between blockchains of different cryptocurrencies, or they can be conducted off-chain, away from the main blockchain. They first came into prominence in September 2017, when an atomic swap between Decred and Litecoin was [conducted](https://twitter.com/decredproject/status/910224860625780736?). 

Since then, other startups and decentralized exchanges have allowed users the same facility. For example, Lightning Labs, a startup that uses bitcoin’s lightning network for transactions, has conducted off-chain swaps using the technology.

Cryptocurrencies and decentralized exchanges, such as 0x and Altcoin.io, have also incorporated the technology. 

## Breaking Down Atomic Swaps

As it occurs today, the process for exchanging cryptocurrencies is time-consuming and complex. This is due to several reasons. For example, the fragmented nature of today’s cryptocurrency ecosystem presents several challenges to average traders.

Not all cryptocurrency exchanges support all coins. As such, a trader wishing to exchange her coin for another one that is not supported on the current exchange may need to migrate accounts or make several conversions between intermediate coins to accomplish her goal. There is also an associated counterparty risk if the trader wishes to exchange her coins with another trader.  

Atomic swaps solve this problem through the use of Hash Timelock Contracts (HTLC). As its name denotes, HTLC is a time-bound smart contract between parties that involves the generation of a cryptographic hash function, which can be verified between them.

Atomic swaps require both parties to acknowledge receipt of funds within a specified timeframe using a cryptographic hash function. If one of the involved parties fails to confirm the transaction within the timeframe, then the entire transaction is voided, and funds are not exchanged. The latter action helps remove counterparty risk. 

An example of an atomic swap transaction is shown below:

Suppose Alice is a trader interested in converting 100 bitcoins to an equivalent litecoins with Bob. She submits her transaction to bitcoin’s [blockchain](https://www.investopedia.com/terms/b/blockchain.asp). During this process, Alice generates a number for a cryptographic hash function to encrypt the transaction. Bob repeats the same process at his end by similarly submitting his transaction to litecoin’s blockchain.

Both Alice and Bob unlock their respective funds using their respective numbers. They have to do this within a specified timeframe or else the transfer will not take place. Atomic swaps can also be used in conjunction with a lightning network to conduct off-chain exchanges.
