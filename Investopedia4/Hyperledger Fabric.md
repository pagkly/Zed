---
alias: [Hyperledger Fabric]
created: 2021-03-02T20:54:03 (UTC +11:00)
tags: [Hyperledger Fabric Definition, Hyperledger Fabric]
source: https://www.investopedia.com/terms/h/hyperledger-fabric.asp
author: Will Kenton
---

# [[Hyperledger Fabric]] Definition

> ## Excerpt
> [[Hyperledger Fabric]] is a platform for building various blockchain-based products, solutions, and applications for business use.

---

[[Hyperledger Fabric]]
## What Is [[Hyperledger Fabric]]?

[[Hyperledger Fabric]] is a modular [[blockchain]](https://www.investopedia.com/terms/b/blockchain.asp) framework that acts as a foundation for developing blockchain-based products, solutions, and applications using plug-and-play components that are aimed for use within private enterprises.

### Key Takeaways

-   Hyperledger is an enterprise-grade, open-source distributed ledger framework launched by the Linux Foundation in December 2015.
-   Fabric is a highly-modular, decentralized ledger technology (DLT) platform that was designed by IBM for industrial enterprise use.
-   Because [[Hyperledger Fabric]] is private and requires permission to access, businesses can segregate information (like prices), plus transactions can be sped up because the number of nodes on the network is reduced.
-   Fabric 2.0 was released in January 2020. The main features of this version are faster transactions, updated smart contract technology, and streamlined data sharing.

[[Hyperledger Fabric]] was initiated by Digital Asset and IBM and has now emerged as a collaborative cross-industry venture, which is currently being hosted by the Linux Foundation. Among the several Hyperledger projects, Fabric was the first one to exit the “incubation” stage and achieve the “active” stage in March 2017.

## How [[Hyperledger Fabric]] Works

Traditional blockchain networks can’t support private transactions and confidential contracts that are of utmost importance for businesses. [[Hyperledger Fabric]] was designed in response to this as a modular, scalable and secure foundation for [[Offering|offering]] industrial blockchain solutions.

[[Hyperledger Fabric]] is the open-source engine for blockchain and takes care of the most important features for evaluating and using blockchain for business use cases.

Within private industrial networks, the verifiable identity of a participant is a primary requirement. [[Hyperledger Fabric]] supports memberships based on permission; all network participants must have known identities. Many business sectors, such as healthcare and [[Finance|finance]], are bound by data protection regulations that mandate maintaining data about the various participants and their respective access to various data points. Fabric supports such permission-based membership.

### Modular Architecture

The modular architecture of [[Hyperledger Fabric]] separates the transaction processing [[Workflow|workflow]] into three different stages: [[smart contracts]](https://www.investopedia.com/terms/s/smart-contracts.asp) called chaincode that comprise the distributed logic processing and agreement of the system, transaction ordering, and transaction validation and commitment. This segregation offers multiple benefits:

-   A reduced number of trust levels and verification that keeps the network and processing clutter-free
-   Improved network scalability
-   Better overall performance

Additionally, [[Hyperledger Fabric]]’s support for plug-and-play of various components allows for easy reuse of existing features and ready-made integration of various modules. For instance, if a function already exists that verifies the participant’s identity, an enterprise-level network simply needs to plug and reuse this existing module instead of building the same function from scratch.

The participants on the network have three distinct roles:

-   Endorser
-   Committer
-   Consenter

In a nutshell, the transaction proposal is submitted to the endorser peer according to the predefined endorsement policy about the number of endorsers required. After sufficient endorsements by the endorser(s), a batch or block of transactions is delivered to the committer(s). Committers validate that the endorsement policy was followed and that there are no conflicting transactions. Once both the checks are made, the transactions are committed to the ledger.

Image source: [[IBM]](https://developer.ibm.com/tutorials/cl-top-technical-advantages-of-hyperledger-fabric-for-blockchain-networks/)

Since only confirming instructions—such as signatures and read/write set—are sent across the network, the scalability and performance of the network is enhanced. Only endorsers and committers have access to the transaction, and [[Security|security]] is improved with a fewer number of participants having access to key data points.

## Example of [[Hyperledger Fabric]]

Suppose there's a manufacturer that wants to ship chocolates to a specific retailer or market of retailers (i.e., all US retailers) at a specific price but does not want to reveal that price in other markets (i.e., Chinese retailers).

Since the movement of the product may involve other parties, like customs, a shipping company, and a financing bank, the private price may be revealed to all involved parties if a basic version of blockchain technology is used to support this transaction.

[[Hyperledger Fabric]] addresses this issue by keeping private transactions private on the network; only participants who need to know are aware of the necessary details. Data partitioning on the blockchain allows specific data points to be accessible only to the parties who need to know.

## Criticism of [[Hyperledger Fabric]]

The [[High-Water Mark|high-water mark]] of crypto-enthusiasm broke in 2018 after the collapse of the price of bitcoin (which hit its peak on December 17, 2017). Overoptimistic claims about the value of the new technology were replaced with skepticism, and related technologies, including Hyperledger, also suffered from this skepticism.

### [[Hyperledger Fabric]]'s Competitors

[[Hyperledger Fabric]] competes with other Hyperledger projects like Iroha, Indy, and Sawtooth. It also competes with [[R3's Corda]](https://www.r3.com/corda-platform/), which is also a private, permission-based DLT.

Blockchain service firm Chainstack published a paper in January 20201 that shows development in Corda has been historically higher than development in Fabric, though Fabric development passed Corda's in Q3 2019 when Fabric switched to GitHub.

The Chainstack report shows that while there are three times as many developers working on Fabric, Corda developers made more than two times as many code contributions, and Fabric developers push far less code per developer than Corda's developers.

### [[Hyperledger Fabric]] Is Not Blockchain and Is Not Efficient

Several critiques of [[Hyperledger Fabric]] point out that a permission-based, private blockchain with Hyperledger Fabric's features is not a blockchain, and current non-blockchain technologies are far less expensive and deliver the same amount of [[Security|security]]. Cointelegraph's Stuart Popejoy put the case like this:

> Fabric’s architecture is far more complex than any blockchain platform while also being less secure against tampering and attacks. You would think that a “private” blockchain would at least [[Offer|offer]] scalability and performance, but Fabric fails here as well. Simply put, pilots built on Fabric [[Will|will]] face a complex and insecure deployment that won’t be able to scale with their businesses. 2

[[Hyperledger Fabric]] has also been critiqued for lacking resiliency. A team of researchers from the Sorbonne in Paris and CSIRO - Data61, Australia's national science agency, found that significant network delays reduced the reliability of Fabric: "\[B\][[Y|y]] delaying block propagation, we demonstrated that Hyperledger Fabric does not provide sufficient consistency guarantees to be deployed in critical environments."3

## [[Hyperledger Fabric]] 2.0 Released in January 2020

In January of 2020, [[Hyperledger Fabric]] 2.0 was released to address some of the existing criticisms. According to Ron Miller at [[Techcrunch]](https://techcrunch.com/2020/01/30/hyperledger-fabric-the-open-source-distributed-ledger-reaches-release-2-0/), "The biggest updates involve forcing agreement among the parties before any new data can be added to the ledger, known as decentralized governance of the smart contracts."

Although the update isn't a sea-change in the simplicity or applicability of Fabric, it does demonstrate that progress continues to be made in the [[Cryptocurrency|cryptocurrency]] industry beyond the crypto-mania that occurred in 2018. Over the next five to ten years, it's expected that enterprise blockchain [[Will|will]] undoubtedly find its proper use.
