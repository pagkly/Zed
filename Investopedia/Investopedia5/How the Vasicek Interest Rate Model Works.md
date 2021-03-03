---
alias: [Vasicek Interest Rate Model]
created: 2021-03-03T00:36:24 (UTC +11:00)
tags: [Vasicek Interest Rate Model Definition, How the Vasicek Interest Rate Model Works]
source: https://www.investopedia.com/terms/v/vasicek-model.asp
author: Adam Hayes
---

# Vasicek Interest Rate Model Definition

> ## Excerpt
> The Vasicek interest rate model predicts interest rate movement based on market risk, time and long-term equilibrium interest rate values.

---

How the Vasicek Interest Rate Model Works
## What Is the Vasicek Interest Rate Model?

The Vasicek interest rate model (or simply the Vasicek model) is a mathematical method of modeling [interest rate](https://www.investopedia.com/terms/i/interestrate.asp) movements. The model describes the movement of an interest rate as a factor composed of market risk, time, and equilibrium value, where the rate tends to revert towards the mean of those factors over time. Essentially, it predicts where interest rates will end up at the end of a given period of time, given current market volatility, the long-run mean interest rate value, and a given market risk factor.

It is important to note that the equation can only test one market risk factor at a time. This [stochastic model](https://www.investopedia.com/terms/s/stochastic-modeling.asp) is often used in the [valuation](https://www.investopedia.com/terms/v/valuation.asp) of interest rate futures and is sometimes used in solving for the price of various hard to value bonds.

## The Formula for the Vasicek Interest Rate Model Is

The Vasicek interest rate model values the instantaneous interest rate using the following equation:

drt\=a(b−rt)dt+σdWtwhere:W\=Random market risk (represented bya Wiener process)t\=Time perioda(b−rt)\=Expected change in the interest rateat time t (the drift factor)a\=Speed of the reversion to the meanb\=Long-term level of the meanσ\=Volatility at time t\\begin{aligned} &dr\_t = a ( b - r^t ) dt + \\sigma dW\_t \\\\ &\\textbf{where:} \\\\ &W = \\text{Random market risk (represented by}\\\\ &\\text{a Wiener process)} \\\\ &t = \\text{Time period} \\\\ &a(b-r^t) = \\text{Expected change in the interest rate} \\\\ &\\text{at time } t \\text{ (the drift factor)} \\\\ &a = \\text{Speed of the reversion to the mean} \\\\ &b = \\text{Long-term level of the mean} \\\\ &\\sigma = \\text{Volatility at time } t \\\\ \\end{aligned}

 The model specifies that the instantaneous interest rate follows the stochastic differential equation, where _d_ refers to the derivative of the variable following it.

## The Vasicek Interest Rate Model Explained

The Vasicek interest rate model is used in financial economics to estimate potential pathways for future interest rate changes. The model states that the movement of interest rates is affected only by random (stochastic) market movements. In the absence of market shocks (i.e., when _d_Wt \= 0) the interest rate remains constant (rt = b). When rt < b, the drift factor becomes positive, which indicates that the interest rate will increase toward [equilibrium](https://www.investopedia.com/terms/e/equilibrium.asp).

Although it was considered to be a great step forward in predictive financial equations, the main drawback of the model that has come to light since the global financial crisis is that the Vasicek model does not allow for the interest rate to dip below zero. This issue has been fixed in several models that have been developed since the Vasicek model such as the exponential Vasicek model and the [Cox-Ingersoll-Ross model](https://www.investopedia.com/terms/c/cox-ingersoll-ross-model.asp) for estimating interest rate changes.
