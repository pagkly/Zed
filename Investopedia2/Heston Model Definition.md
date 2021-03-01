---
alias: [Heston Model Definition]
created: 2021-03-01T13:45:24 (UTC +11:00)
tags: [Heston Model Definition, Heston Model Definition]
source: https://www.investopedia.com/terms/h/heston-model.asp
author: By
Akhilesh Ganti
---

# Heston Model Definition

> ## Excerpt
> The Heston Model, named after Steve Heston, is a type of stochastic volatility model used by financial professionals to price European options.

---

Heston Model Definition
## What Is the Heston Model?

The Heston Model, named after Steve Heston, is a type of stochastic volatility model used by financial professionals to price [European options](https://www.investopedia.com/terms/e/europeanoption.asp).

### Key Takeaways

-   The Heston Model, named after Steve Heston, is a type of stochastic volatility model used by financial professionals to price European options.
-   The Heston Model makes the assumption that volatility is arbitrary, a key factor that defines stochastic volatility models, which is in contrast to the Black-Scholes model, which holds volatility constant.
-   The Heston Model is a type of volatility smile model, which is a graphical representation of several options with identical expiration dates that show increasing volatility as the options become more ITM or OTM.

## Understanding the Heston Model

The Heston Model, developed by associate finance professor Steven Heston in 1993, is an option pricing model that can be used for pricing [options](https://www.investopedia.com/terms/o/option.asp) on various securities. It is comparable to the, more popular, [Black-Scholes option pricing model](https://www.investopedia.com/terms/b/blackscholes.asp).

Overall, option pricing models are used by advanced investors to estimate and gauge the price of a particular option, trading on an underlying security in the financial marketplace. Options, just like their underlying security, will have prices that change throughout the trading day. Option pricing models seek to analyze and integrate the variables that cause fluctuation of option prices in order to identify the best option price for investment.

As a [stochastic volatility](https://www.investopedia.com/terms/s/stochastic-volatility.asp) model, the Heston Model uses statistical methods to calculate and forecast option pricing with the assumption that volatility is arbitrary. The assumption that volatility is arbitrary, rather than constant, is the key factor that makes stochastic volatility models unique. Other types of stochastic volatility models include the SABR model, the Chen model, and the [GARCH](https://www.investopedia.com/terms/g/generalalizedautogregressiveconditionalheteroskedasticity.asp) model.

The Heston Model has characteristics that distinguish it from other stochastic volatility models, namely:

-   It factors in a possible correlation between a stock's price and its volatility.
-   It conveys volatility as reverting to the mean.
-   It gives a closed-form solution, meaning that the answer is derived from an accepted set of mathematical operations.
-   It does not require that stock price follow a lognormal probability distribution.

The Heston Model is also a type of [volatility smile model](https://www.investopedia.com/terms/v/volatilitysmile.asp). "Smile" refers to the volatility smile, a graphical representation of several options with identical expiration dates that show increasing volatility as the options become more [in-the-money](https://www.investopedia.com/terms/i/inthemoney.asp) (ITM) or [out-of-the-money](https://www.investopedia.com/terms/o/outofthemoney.asp) (OTM). The smile model's name derives from the concave shape of the graph, which resembles a smile.

## Heston Model Methodology

The Heston Model is a closed-form solution for pricing options that seeks to overcome some of the shortcomings presented in the Black-Scholes option pricing model. The Heston Model is a tool for advanced investors.

The calculation is as follows:

dSt\=rStdt+VtStdW1tdVt\=k(θ−Vt)dt+σVtdW2twhere:St\=asset price at time tr\=risk-free interest rate – theoretical rate on anasset carrying no riskVt\=volatility (standard deviation) of the asset priceσ\=volatility of the Vtθ\=long-term price variancek\=rate of reversion to θdt\=indefinitely small positive time incrementW1t\=Brownian motion of the asset priceW2t\=Brownian motion of the asset’s price variance\\begin{aligned} &dS\_t = rS\_tdt + \\sqrt{ V\_t } S\_tdW\_{1t} \\\\ &dV\_t = k ( \\theta - V\_t ) dt+ \\sigma \\sqrt{ V\_t } dW\_{2t} \\\\ &\\textbf{where:} \\\\ &S\_t = \\text{asset price at time } t \\\\ &r = \\text{risk-free interest rate -- theoretical rate on an} \\\\ &\\text{asset carrying no risk} \\\\ &\\sqrt{ V\_t } = \\text{volatility (standard deviation) of the asset price} \\\\ &\\sigma = \\text{volatility of the } \\sqrt{ V\_t } \\\\ &\\theta = \\text{long-term price variance} \\\\ &k = \\text{rate of reversion to } \\theta \\\\ &dt = \\text{indefinitely small positive time increment} \\\\ &W\_{1t} = \\text{Brownian motion of the asset price} \\\\ &W\_{2t} = \\text{Brownian motion of the asset's price variance} \\\\ \\end{aligned}

## Heston Model Versus Black-Scholes

The Black-Scholes model for option pricing was introduced in 1970 and served as one of the first models for helping investors derive a price associated with an option on a [security](https://www.investopedia.com/terms/s/security.asp). In general it helped to promote option investing as it created a model for analyzing the price of options on various securities.

Both the Black-Scholes and Heston Model are based on underlying calculations that can be coded and programmed through advanced Excel or other quantitative systems. The Black-Scholes model is calculated from the following:

> Black-Scholes Formula (See also: [Black-Scholes Model](https://www.investopedia.com/terms/b/blackscholes.asp))  
> The Black-Scholes call option formula is calculated by multiplying the stock price by the cumulative standard normal probability distribution function. Thereafter, the net present value (NPV) of the strike price multiplied by the cumulative standard normal distribution is subtracted from the resulting value of the previous calculation. In mathematical notation, C = S \* N(d1) – Ke^(-r \* T) \* N(d2). Conversely, the value of a put option could be calculated using the formula: P = Ke^(-r \* T) \* N(-d2) – S \* N(-d1). In both formulas, S is the stock price, K is the strike price, r is the risk-free interest rate, and T is the time to maturity. The formula for d1 is: (ln(S/K) + (r + (Annualized Volatility)^2/2) \* T)/(Annualized Volatility \* (T^(0.5))). The formula for d2 is: d1 – (Annualized Volatility) \* (T^(0.5)).

The Heston Model is noteworthy because it seeks to provide for one of the main limitations of the Black-Scholes model which holds volatility constant. The use of stochastic variables in the Heston Model provides for the notion that volatility is not constant but arbitrary.

Both the basic Black-Scholes model and the Heston Model still only provide option pricing estimates for a European option, which is an option that can only be exercised on its expiration date. Various research and models have been studied for pricing American options through both Black-Scholes and the Heston Model. These variations provide estimates for options that can be exercised on any date leading up to the expiration date, as is the case for American options.
