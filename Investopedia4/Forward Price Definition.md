---
alias: [Forward Price]
created: 2021-03-02T20:07:40 (UTC +11:00)
tags: [Forward Price Definition, Forward Price Definition]
source: https://www.investopedia.com/terms/f/forwardprice.asp
author: James Chen
---

# [[Forward Price Definition]]

> ## Excerpt
> The predetermined delivery price of a forward contract, as agreed on and calculated by the buyer and seller.

---

[[Forward Price Definition]]
## What is a Forward Price

Forward price is the predetermined [[delivery price]](https://www.investopedia.com/terms/d/deliveryprice.asp) for an [[Underlying|underlying]] commodity, currency, or financial asset as decided by the buyer and the seller of the [[forward contract]](https://www.investopedia.com/terms/f/forwardcontract.asp), to be paid at a predetermined date in the future. At the inception of a forward contract, the forward price makes the value of the contract zero, but changes in the price of the underlying [[Will|will]] cause the forward to take on a positive or negative value.

The forward price is determined by the following formula:

F0\=S0×erT\\begin{aligned} &F\_0 = S\_0 \\times e^{rT} \\\\ \\end{aligned}

## Basics of Forward Price

Forward price is based on the current [[spot price]](https://www.investopedia.com/terms/s/spotprice.asp) of the [[Underlying|underlying]] asset, plus any carrying costs such as interest, storage costs, foregone interest or other costs or [[opportunity costs]](https://www.investopedia.com/terms/o/opportunitycost.asp).

Although the contract has no [[intrinsic value]](https://www.investopedia.com/terms/i/intrinsicvalue.asp) at the inception, over time, a contract may [[Gain|gain]] or lose value. Offsetting positions in a forward contract are equivalent to a [[zero-sum game]](https://www.investopedia.com/terms/[[Z|z]]/zero-sumgame.asp). For example, if one investor takes a long position in a pork belly forward agreement and another investor takes the [short position](https://www.investopedia.com/terms/s/short.asp), any gains in the long position equals the losses that the second investor incurs from the short position. By initially setting the value of the contract to zero, both parties are on equal ground at the inception of the contract.

### Key Takeaways

-   Forward price is the price at which a seller delivers an [[Underlying|underlying]] asset, financial [[Derivative|derivative]], or currency to the buyer of a forward contract at a predetermined date.
-   It is roughly equal to the spot price plus associated carrying costs such as storage costs, interest rates, etc.

## Forward Price Calculation Example

When the [[Underlying|underlying]] asset in the forward contract does not pay any [[dividends]](https://www.investopedia.com/terms/d/dividend.asp), the forward price can be calculated using the following formula:

F\=S×e(r×t)where:F\=the contract’s forward priceS\=the [[Underlying|underlying]] asset’s current spot pricee\=the mathematical irrational constant approximatedby 2.7183r\=the [[Risk|risk]]-free rate that applies to the life of theforward contractt\=the delivery date in years\\begin{aligned} &F = S \\times e ^ { (r \\times t) } \\\\ &\\textbf{where:} \\\\ &F = \\text{the contract's forward price} \\\\ &S = \\text{the underlying asset's current spot price} \\\\ &e = \\text{the mathematical irrational constant approximated} \\\\ &\\text{by 2.7183} \\\\ &r = \\text{the risk-free rate that applies to the life of the} \\\\ &\\text{forward contract} \\\\ &t = \\text{the delivery date in years} \\\\ \\end{aligned}

For example, assume a [[Security|security]] is currently trading at $100 per unit. An investor wants to enter into a forward contract that expires in one year. The current annual [[Risk|risk]]-free interest rate is 6%. Using the above formula, the forward price is calculated as:

F\=$100×e(0.06×1)\=$106.18\\begin{aligned} &F = \\$100 \\times e ^ { (0.06 \\times 1) } = \\$106.18 \\\\ \\end{aligned}

If the there are carrying costs, that is added into the formula:

F\=S×e(r+q)×t\\begin{aligned} &F = S \\times e ^ { (r + q) \\times t } \\\\ \\end{aligned}

Here, q is the carrying costs.

If the [[Underlying|underlying]] asset pays dividends over the life of the contract, the formula for the forward price is:

F\=(S−D)×e(r×t)\\begin{aligned} &F = ( S - D ) \\times e ^ { ( r \\times t ) } \\\\ \\end{aligned}

Here, D equals the sum of each dividend's present value, given as:

D\= PV(d(1))+PV(d(2))+⋯+PV(d(x))\= d(1)×e−(r×t(1))+d(2)×e−(r×t(2))+⋯+\= d(x)×e−(r×t(x))\\begin{aligned} D =& \\ \\text{PV}(d(1)) + \\text{PV}(d(2)) + \\cdots + \\text{PV}(d(x)) \\\\ =& \\ d(1) \\times e ^ {- ( r \\times t(1) ) } + d(2) \\times e ^ { - ( r \\times t(2) ) } + \\cdots + \\\\ \\phantom{=}& \\ d(x) \\times e ^ { - ( r \\times t(x) ) } \\\\ \\end{aligned}

Using the example above, assume that the [[Security|security]] pays a 50-cent dividend every three months. First, the present value of each dividend is calculated as:

PV(d(1))\=$0.5×e−(0.06×312)\=$0.493\\begin{aligned} &\\text{PV}(d(1)) = \\$0.5 \\times e ^ { - ( 0.06 \\times \\frac { 3 }{ 12 } ) } = \\$0.493 \\\\ \\end{aligned}

PV(d(2))\=$0.5×e−(0.06×612)\=$0.485\\begin{aligned} &\\text{PV}(d(2)) = \\$0.5 \\times e ^ { - ( 0.06 \\times \\frac { 6 }{ 12 } ) } = \\$0.485 \\\\ \\end{aligned}

PV(d(3))\=$0.5×e−(0.06×912)\=$0.478\\begin{aligned} &\\text{PV}(d(3)) = \\$0.5 \\times e ^ { - ( 0.06 \\times \\frac { 9 }{ 12 } ) } = \\$0.478 \\\\ \\end{aligned}

PV(d(4))\=$0.5×e−(0.06×1212)\=$0.471\\begin{aligned} &\\text{PV}(d(4)) = \\$0.5 \\times e ^ { - ( 0.06 \\times \\frac { 12 }{ 12 } ) } = \\$0.471 \\\\ \\end{aligned}

The sum of these is $1.927. This amount is then plugged into the dividend-adjusted forward price formula:

F\=($100−$1.927)×e(0.06×1)\=$104.14\\begin{aligned} &F = ( \\$100 - \\$1.927 ) \\times e ^ { ( 0.06 \\times 1 ) } = \\$104.14 \\\\ \\end{aligned}
