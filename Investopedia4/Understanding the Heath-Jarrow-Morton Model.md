---
alias: [Heath-Jarrow-Morton Model – HJM Model]
created: 2021-03-02T20:39:12 (UTC +11:00)
tags: [Heath-Jarrow-Morton Model – HJM Model Definition, Understanding the Heath-Jarrow-Morton Model]
source: https://www.investopedia.com/terms/h/hjmmodel.asp
author: Will Kenton
---

# Heath-Jarrow-Morton Model – HJM Model Definition

> ## Excerpt
> A Heath-Jarrow-Morton Model is used to model forward interest rates that are then used to find the theoretical value of interest-rate-sensitive securities.

---

Understanding the Heath-Jarrow-Morton Model
## What Is the Heath-Jarrow-Morton Model – HJM Model?

The Heath-Jarrow-Morton Model (HJM Model) is used to model [[forward interest rates]](https://www.investopedia.com/terms/f/forwardrate.asp). These rates are then modeled to an existing term structure of [[interest rates]](https://www.investopedia.com/terms/i/interestrate.asp) to determine appropriate prices for interest rate sensitive securities.

## The Formula for the HJM Model Is

In general, the HJM model and those that are built on its framework follow the formula:

df(t,T)\=α(t,T)dt+σ(t,T)dW(t)where:df(t,T)\=The instantaneous forward interest rate ofzero-coupon bond with maturity T, is assumed to satisfythe stochastic differential equation shown above.α,σ\=AdaptedW\=A Brownian motion (random-walk) under therisk-neutral assumption\\begin{aligned} &\\text{d}f(t,T) = \\alpha (t,T)\\text{d}t + \\sigma (t,T)\\text{d}W(t)\\\\ &\\textbf{where:}\\\\ &\\text{d}f(t,T) = \\text{The instantaneous forward interest rate of}\\\\&\\text{zero-coupon bond with maturity T, is assumed to satisfy}\\\\&\\text{the stochastic differential equation shown above.}\\\\ &\\alpha, \\sigma = \\text{Adapted}\\\\ &W = \\text{A Brownian motion (random-walk) under the}\\\\&\\text{risk-neutral assumption}\\\\ \\end{aligned}

## What Does the Heath-Jarrow-Morton Model Tell You?

A Heath-Jarrow-Morton Model is very theoretical and is used at the most advanced levels of [[financial analysis]](https://www.investopedia.com/terms/f/financial-analysis.asp). It is used mainly by arbitrageurs seeking [[arbitrage]](https://www.investopedia.com/terms/f/fixedincomearbitrage.asp) opportunities, as well as analysts pricing derivatives. The HJM Model predicts forward interest rates, with the starting point being the sum of what’s known as drift terms and diffusion terms. The forward rate drift is driven by [[volatility]](https://www.investopedia.com/terms/v/volatility.asp), which is known as the HJM drift condition. In the basic sense, an HJM Model is any interest rate model driven by a finite number of Brownian motions. 

The HJM Model is based on the work of economists David Heath, Robert Jarrow and Andrew Morton from the 1980s. The trio wrote two notable papers in the late 1980s that laid the groundwork for the framework, among them “Bond Pricing and the [[Term Structure]](https://www.investopedia.com/terms/t/termstructure.asp) of Interest Rates: A New Methodology."

There are various additional models built on the HJM Framework. They all generally look to predict the entire forward rate curve, not just the short rate or point on the curve. The biggest issue with HJM Models is that they tend to have infinite dimensions, making it almost impossible to compute. There are various models that look to express the HJM Model as a finite state.

### Key Takeaways

-   The Heath-Jarrow-Morton Model (HJM Model) is used to model forward interest rates using a differential equation that allows for randomness.
-   These rates are then modeled to an existing term structure of interest rates to determine appropriate prices for interest rate sensitive securities such as bonds or swaps.
-   Today, it is used mainly by arbitrageurs seeking arbitrage opportunities, as well as analysts pricing derivatives.

## HJM Model and Option Pricing

The HJM Model is also used in [[option pricing]](https://www.investopedia.com/terms/o/optionpricingtheory.asp), which refers to finding the fair value of a derivative contract. Trading institutions may use models to price options as a strategy for finding under- or overvalued options.

Option pricing models are mathematical models that use known inputs and predicted values, such as implied volatility, to find the theoretical value of options. Traders will use certain models to figure out the price at a certain point in time, updating the value calculation based on changing risk.

For an HJM Model, to calculate the value of an interest rate swap, the first step is to form a discount curve based on current option prices. From that discount curve, forward rates can be obtained. From there, the volatility of forward interest rates must be input, and if the volatility is known the drift can be determined.
