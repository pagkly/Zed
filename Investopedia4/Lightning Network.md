---
alias: [Lightning Network]
created: 2021-03-02T21:19:45 (UTC +11:00)
tags: [Lightning Network Definition, Lightning Network]
source: https://www.investopedia.com/terms/l/lightning-network.asp
author: [[Will]] Kenton
---

# [[Lightning Network]] Definition

> ## Excerpt
> [[Lightning Network]] is a second layer to bitcoin's blockchain that proposes to decongest its network by creating micropayment channels between two parties.

---

[[Lightning Network]]
## What Is the [[Lightning Network]]?

The [[Lightning Network|lightning network]] is a second layer technology applied to bitcoin that uses [[micropayment]](https://www.investopedia.com/terms/m/micropayment.asp) channels to scale its [[blockchain’s]](https://www.investopedia.com/terms/b/blockchain.asp) capability to conduct transactions more efficiently. Transactions conducted on lightning networks are faster, less costly, and more readily confirmed than those conducted directly on the bitcoin blockchain (i.e., [[on-chain]](https://www.investopedia.com/terms/c/chain-transactions-[[Cryptocurrency|cryptocurrency]].asp)).

By taking transactions away from the main blockchain and making them [[off-chain]](https://www.investopedia.com/terms/o/offchain-transactions-[[Cryptocurrency|cryptocurrency]].asp), the [[Lightning Network|lightning network]] was designed to de-congest the [[bitcoin]](https://www.investopedia.com/terms/b/bitcoin.asp) blockchain and reduce associated transaction fees. The lightning network can also be used to conduct other types of off-chain transactions involving exchanges between [[cryptocurrencies]](https://www.investopedia.com/terms/c/cryptocurrency.asp). For example, it is helpful for facilitating [[atomic swaps]](https://www.investopedia.com/terms/a/atomic-swaps.asp) that enable one cryptocurrency to be exchanged for another without the involvement of an intermediary, such as cryptocurrency exchanges.

### Key Takeaways

-   The [[Lightning Network|lightning network]] is a technological solution intended to solve the problem of transaction speed on the bitcoin blockchain by introducing off-ledger transactions.
-   Much like blockchain, the [[Lightning Network|lightning network]] disintermediates central institutions, such as banks, which are responsible for routing most transactions today.
-   The [[Lightning Network|lightning network]] was first formally elaborated in a paper by Joseph Poon and Thaddeus Dryja in 2015.

## Understanding the [[Lightning Network]]

The [[Lightning Network|lightning network]] was [[first proposed]](https://lightning.network/lightning-network-paper.pdf) by Joseph Poon and Thaddeus Dryja in 2015 and has been under development since that time. The problem the lighting network was devised to solve is the slow transaction time and [[Throughput|throughput]] of bitcoin, which remains at about seven transactions per second (tps). If it is to achieve its potential of becoming a medium for daily transactions, bitcoin [[Will|will]] need to reach tens or hundreds of thousands of transactions per second, similar to credit cards or electronic payments networks. Due to the nature of its decentralized technology that requires consensus from all nodes within its network, bitcoin is laden with such problems in its current state.

For example, approving and storing transactions [[Will|will]] become expensive and time-consuming if their numbers on bitcoin’s network multiply. An increase in transaction numbers also requires orders of magnitude improvement in the processing power of the computers that are required to execute transactions involving bitcoin. Additionally, the energy necessary to compute this information is enormous, making maintaining bitcoin for day-to-day transactions prohibitively expensive.

The [[Lightning Network|lightning network]] proposed to solve the scaling problem by creating a second layer on bitcoin’s main blockchain. That second layer consists of multiple payment channels between parties or bitcoin users. A lightning network channel is a transaction mechanism between two parties. Using channels, the parties can make or receive payments from each other.

These transactions are processed differently compared to standard transactions occurring on bitcoin’s blockchain. They are only updated on the main blockchain when two parties open and close a channel.

Between those two acts, the parties can shift funds between themselves endlessly without informing the main blockchain about their activities. This approach dramatically speeds up a transaction’s speed because all transactions are not required to be approved by all nodes within a blockchain. Individual payment channels between various parties combine to form a network of lightning nodes that can route transactions among themselves. The resulting interconnections between various payment channels is the [[Lightning Network]]. 

## How the [[Lightning Network]] Works

Say Alice opens a channel with her favorite coffee shop and deposits $100 worth of bitcoin in it. Her transactions with the coffee shop are instant because she has a direct channel with it.

Bob, who has another channel open with the grocery store he visits most frequently, also buys coffee from Alice’s shop. The connection between Alice, the coffee shop, and Bob ensures that Alice can use funds from her balance with the coffee shop to buy groceries from Bob’s store. Similarly, Bob can use his grocery store balance to conduct transactions with businesses in Alice’s network.

If Bob closes his channel with the grocery store (and there are no other customers in common between the coffee shop and grocery store), then Alice [[Will|will]] have to open another channel with the grocery store to make purchases there. In this way, a web of transactions is created and routed between multiple lightning nodes in a decentralized fashion.  

On a more technical level, the [[Lightning Network|lightning network]] uses [[smart contracts]](https://www.investopedia.com/terms/s/smart-contracts.asp) and multisignature scripts to implement its vision. An initial transaction, called the funding transaction, is created when one or both parties fund a channel. In a typical multisignature environment, two master keys (one public and another private) are initially exchanged. The exchange facilitates access and spending of funds.

In the case of a lightning node, however, the signatures are not exchanged. This is done to prevent the funding transactions’ spend from being recognized by the main blockchain. Instead, the two parties exchange a single key that is used to validate spending transactions (also called commitment transactions) between themselves.

The two parties can conduct endless commitment transactions between themselves and other nodes on a [[Lightning Network|lightning network]]. They exchange their master keys only when the channel between them is closed.   

## Are There Fees for Using [[Lightning Network]]? 

Yes, there are transaction fees associated with using the [[Lightning Network|lightning network]]. They are a combination of routing charges for routing payment information between lightning nodes and bitcoin’s transaction fees to open and close channels.

In November 2019, scientists at two universities in Hungary and the Institute for Computer Science and Control published a [[paper]](https://arxiv.org/pdf/1911.09432.pdf) that questioned the ability of [[Lightning Network|lightning network]] operators to continue to process transactions without dramatically increasing fees. The authors say in their abstract, "participation is economically irrational for the majority of the large routing nodes who currently [[Hold|hold]] the network together. Either traffic or transaction fees must increase by orders of magnitude to make payment routing economically viable."

## What Are Some Problems With the [[Lightning Network]]? 

The most obvious problem with lightning networks, which are meant to be decentralized, is that they could lead to a replication of the hub-and-spoke model that characterizes today’s financial systems. In the current model, banks and financial institutions are the main intermediaries through which all transactions take place.

By having more open connections with others, lightning nodes for prominent businesses may become similar hubs or centralized nodes in the network. A failure at one such hub could easily crash a significant portion of (or the entire) network.  

Another significant problem, mentioned previously, is the necessity to increase fees to make maintaining the network economically viable. This is true not only for the nodes maintaining the [[Lightning Network|lightning network]] itself, but also the knock-on cost of potentially higher bitcoin fees that are translated to the network.

Lightning networks are also believed to be vulnerable to hacks and thefts because they are required to be online at all times. As such, cold storage of coins is not possible.
