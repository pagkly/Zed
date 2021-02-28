---
alias: [Binomial Option Pricing Model]
created: 2021-02-28T22:16:51 (UTC +11:00)
tags: [Binomial Option Pricing Model Definition, How the Binomial Option Pricing Model Works]
source: https://www.investopedia.com/terms/b/binomialoptionpricing.asp
author: Marshall Hargrave
---

# Binomial Option Pricing Model Definition

> ## Excerpt
> A binomial option pricing model is an options valuation method that uses an iterative procedure and allows for the node specification in a set period.

---

How the Binomial Option Pricing Model Works
## What Is the Binomial Option Pricing Model?

The binomial option pricing model is an options [valuation](https://www.investopedia.com/terms/v/valuation.asp) method developed in 1979. The [binomial option pricing model](https://www.investopedia.com/articles/investing/021215/examples-understand-binomial-option-pricing-model.asp) uses an iterative procedure, allowing for the specification of nodes, or points in time, during the time span between the valuation date and the option's [expiration date](https://www.investopedia.com/terms/e/expiration-date.asp).

### Key Takeaways

-   The binomial option pricing model values options using an iterative approach utilizing multiple periods to value American options.
-   With the model, there are two possible outcomes with each iteration—a move up or a move down that follow a binomial tree.
-   The model is intuitive and is used more frequently in practice than the well-known Black-Scholes model.

The model reduces possibilities of price changes and removes the possibility for [arbitrage](https://www.investopedia.com/terms/a/arbitrage.asp). A simplified example of a [binomial tree](https://www.investopedia.com/terms/b/binomial_tree.asp) might look something like this:

Image by Julie Bang © Investopedia 2020

## Basics of the Binomial Option Pricing Model

With binomial option price models, the assumptions are that there are two possible outcomes—hence, the binomial part of the model. With a pricing model, the two outcomes are a move up, or a move down. The major advantage of a binomial option pricing model is that they’re mathematically simple. Yet these models can become complex in a multi-period model.

In contrast to the [Black-Scholes model](https://www.investopedia.com/terms/b/blackscholes.asp), which provides a numerical result based on inputs, the binomial model allows for the calculation of the asset and the option for multiple periods along with the range of possible results for each period (see below).

The advantage of this multi-period view is that the user can visualize the change in asset price from period to period and evaluate the option based on decisions made at different points in time. For a U.S-based [option](https://www.investopedia.com/terms/a/americanoption.asp), which can be exercised at any time before the [expiration date](https://www.investopedia.com/terms/e/expirationdate.asp), the binomial model can provide insight as to when exercising the option may be advisable and when it should be held for longer periods. 

By looking at the [binomial tree](https://www.investopedia.com/terms/b/binomial_tree.asp) of values, a trader can determine in advance when a decision on an [exercise](https://www.investopedia.com/terms/e/exercise.asp) may occur. If the option has a positive value, there is the possibility of exercise whereas, if the option has a value less than zero, it should be held for longer periods.

## Calculating Price with the Binomial Model

The basic method of calculating the binomial option model is to use the same probability each period for success and failure [until the option expires](https://www.investopedia.com/articles/optioninvestor/03/090303.asp). However, a trader can incorporate different probabilities for each period based on new information obtained as time passes.

A binomial tree is a useful tool when pricing [American options](https://www.investopedia.com/terms/a/americanoption.asp) and [embedded options](https://www.investopedia.com/terms/e/embeddedoption.asp). Its simplicity is its advantage and disadvantage at the same time. The tree is easy to model out mechanically, but the problem lies in the possible values the underlying asset can take in one period of time. In a binomial tree model, the underlying asset can only be worth exactly one of two possible values, which is not realistic, as assets can be worth any number of values within any given range.

For example, there may be a 50/50 chance that the underlying asset price can increase or decrease by 30 percent in one period. For the second period, however, the probability that the underlying asset price will increase may grow to 70/30.

For example, if an investor is evaluating an [oil well](https://www.investopedia.com/terms/e/exploratory-well.asp), that investor is not sure what the value of that oil well is, but there is a 50/50 chance that the price will go up. If [oil prices](https://www.investopedia.com/articles/economics/08/determining-oil-prices.asp) go up in Period 1 making the oil well more valuable and the market [fundamentals](https://www.investopedia.com/terms/f/fundamentals.asp) now point to continued increases in oil prices, the probability of further appreciation in price may now be 70 percent. The binomial model allows for this flexibility; the Black-Scholes model does not.

Image by Julie Bang © Investopedia 2020

## Real-World Example of Binomial Option Pricing Model

A simplified example of a [binomial tree](https://www.investopedia.com/terms/b/binomial_tree.asp) has only one step. Assume there is a stock that is priced at $100 per share. In one month, the price of this stock will go up by $10 or go down by $10, creating this situation:

-   **Stock price** = $100
-   **Stock price in one month (up state)** = $110
-   **Stock price in one month (down state)** = $90

Next, assume there is a call option available on this stock that expires in one month and has a strike price of $100. In the up state, this call option is worth $10, and in the down state, it is worth $0. The binomial model can calculate what the price of the call option should be today.

For simplification purposes, assume that an investor purchases one-half share of stock and writes or sells one call option. The total investment today is the price of half a share less the price of the option, and the possible payoffs at the end of the month are:

-   **Cost today** = $50 - option price
-   **Portfolio value** (up state) = $55 - max ($110 - $100, 0) = $45
-   **Portfolio value** (down state) = $45 - max($90 - $100, 0) = $45

The portfolio payoff is equal no matter how the stock price moves. Given this outcome, assuming no arbitrage opportunities, an investor should earn the risk-free rate over the course of the month. The cost today must be equal to the payoff discounted at the risk-free rate for one month. The equation to solve is thus:

-   **Option price** = $50 - $45 x e ^ (-risk-free rate x T), where e is the mathematical constant 2.7183.

Assuming the risk-free rate is 3% per year, and T equals 0.0833 (one divided by 12), then the price of the call option today is $5.11.

The binomial option pricing model presents two advantages for option sellers over the Black-Scholes model. The first is its simplicity, which allows for fewer errors in the commercial application. The second is its iterative operation, which adjusts prices in a timely manner so as to reduce the opportunity for buyers to execute arbitrage strategies.

For example, since it provides a stream of valuations for a [derivative](https://www.investopedia.com/terms/d/derivative.asp) for each node in a span of time, it is useful [for valuing derivatives](https://www.investopedia.com/articles/optioninvestor/10/derivatives-101.asp) such as American options—which can be executed anytime between the purchase date and expiration date. It is also much simpler than other pricing models such as the Black-Scholes model.
