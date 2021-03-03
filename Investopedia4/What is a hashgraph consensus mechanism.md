---
alias: [Hashgraph Consensus Mechanism]
created: 2021-03-02T20:36:47 (UTC +11:00)
tags: [Hashgraph Consensus Mechanism Definition, [[What is a hashgraph consensus mechanism]]?]
source: https://www.investopedia.com/terms/h/hashgraph-consensus-mechanism.asp
author:  Jake Frankenfeld
---

# Hashgraph Consensus Mechanism Definition

> ## Excerpt
> The hashgraph consensus mechanism works on the gossip protocol without the network overhead.

---

[[What is a hashgraph consensus mechanism]]?
## What Is the Hashgraph Consensus Mechanism?

Hashgraph is ab decentralized [[consensus mechanism]](https://www.investopedia.com/terms/c/consensus-mechanism-[[Cryptocurrency|cryptocurrency]].asp) using the [[blockchain]](https://www.investopedia.com/terms/b/blockchain.asp) concepts of "gossip," "gossip about gossip" and virtual voting. It purports to solve problems with the standard consensus-building [[algorithms]](https://www.investopedia.com/terms/a/algorithm.asp), like [[proof of work]](https://www.investopedia.com/terms/p/proof-work.asp) (PoW), in terms of better speed and higher efficiency as it does not send any votes or details over the network, which often leads to congestion and delays.

### Key Takeaways

-   Hashtag consensus uses information about information rather than the information content itself to create consensus.
-   Information about information is called "gossip," and groups of gossip are called "gossip about gossip."
-   Hashtag consensus has not received wide adoption by the crypto community.

## How the Hashgraph Consensus Mechanism Works

Hashgraph consensus uses the gossip protocol and is used in the [Hedera](http://www.hederahashgraph.com/) blockchain platform.

Blockchain participants who use the gossip protocol relay novel information (called gossip) about the transactions, and they also gossip about gossip. A collaborative history of "gossip events" is maintained as the participants keep adding information about their previous gossip to every current gossip message.

In technical terms, for a blockchain, gossip is the information relayed by each participant repeatedly to another member chosen at random and tells them all they know about the transaction. It can be used to transfer a wide variety of information that needs to be distributed, like gossiping about user identities, transactions, or gossiping about blockchain blocks.

For example, imagine a social gathering where many friends meet and gossip during breaks. Peter gives gossip to Paul about a topic during the first break, and Paul tells it to Pamela. By the second break, Pamela may have relayed that info to others, like Priscilla. Consequently, even though Peter (who initiated the gossip) did not directly talk to Priscilla, she knows about Paul’s gossip.

With each break, this gossip is known to roughly double the number of people who knew it during the previous break. The gossip protocol attempts to utilize this mechanism for building blockchain consensus as more and more people become aware of the details in full or in part.

## Harnessing the Power of Gossip

Hashgraph is a data structure that maintains the records of who gossiped to whom and in what order—that is, the hashgraph becomes a collaborative history of gossip events as participants keep adding information about their previous gossip to every current gossip message. This becomes the "gossip about gossip," as it is history about gossip itself. Since each member obtains a copy of the Hashgraph, each member can compute what the other member would know or could have sent to them.

Say Peter and Paul are two participants on the blockchain platform that uses the hashgraph consensus mechanism. When a new transaction is placed on the blockchain, it [[Will|will]] start spreading to other members.

Peter [[Will|will]] know about the transaction, but he will not send any direct information to Paul about it. Peter will know when Paul learned of the transaction and will know when Priscilla learned of the fact that Paul had learned of that transaction. For his part, Paul computes what information Peter may have sent based on his own prediction of what Peter may know. This predictive computation by Paul is based on what and when Peter would have learned about the transaction, according to the history available in the hashgraph.

Since no sizable information is transmitted across the network and all computations are performed by different participants on their own, this keeps the network congestion free to a great extent. This process is a form of virtual voting—instead of each member sending their information (votes) directly to the other member, each computes what others may know.

Without a single vote being cast in reality, there is very little network communication overhead beyond the transactions themselves. The gossip (details of a transaction) and gossip about gossip (details about details of a transaction) lead to a reliable hashgraph data structure, allowing a consensus to be built that is sufficient to authenticate a transaction (or for any other consensus-building requirements).

The hashgraph algorithm aims to achieve fairness, as it has complete asynchrony, no dominant leaders, no round-robin working, and high speed with no possibility of faults.
