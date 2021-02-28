---
alias: [Black Scholes Model]
created: 2021-02-28T22:16:51 (UTC +11:00)
tags: [Black Scholes Model Definition, How the Black Scholes Price Model Works]
source: https://www.investopedia.com/terms/b/blackscholes.asp
author: Will Kenton
---

# Black Scholes Model Definition

> ## Excerpt
> The Black Scholes model is a model of price variation over time of financial instruments such as stocks that can, among other things, be used to determine the price of a European call option.

---

How the Black Scholes Price Model Works
## What Is the Black Scholes Model?

The Black Scholes model, also known as the Black-Scholes-Merton (BSM) model, is a mathematical model for pricing an options contract. In particular, the model estimates the variation over time of financial instruments. It assumes these instruments (such as stocks or futures) will have a lognormal distribution of prices. Using this assumption and factoring in other important variables, the equation derives the price of a call option.

### Key Takeaways

-   The Black-Scholes Merton (BSM) model is a differential equation used to solve for options prices.
-   The model won the Nobel prize in economics.
-   The standard BSM model is only used to price European options and does not take into account that U.S. options could be exercised before the expiration date.

## The Basics of the Black Scholes Model

The model assumes the price of heavily traded assets follows a geometric Brownian motion with constant drift and volatility. When applied to a stock option, the model incorporates the constant price variation of the stock, the time value of money, the option's strike price, and the time to the option's expiry.

Also called Black-Scholes-Merton, it was the first widely used model for option pricing. It's used to calculate the theoretical value of options using current stock prices, expected dividends, the option's strike price, expected interest rates, time to expiration and expected volatility. 

The formula, developed by three economists—Fischer Black, Myron Scholes and Robert Merton—is perhaps the world's most well-known options pricing model. The initial equation was introduced in Black and Scholes' 1973 paper, "The Pricing of Options and Corporate Liabilities," published in the _Journal of Political Economy_.1 Black passed away two years before Scholes and Merton were awarded the 1997 Nobel Prize in economics for their work in finding a new method to determine the value of derivatives (the Nobel Prize is not given posthumously; however, the Nobel committee acknowledged Black's role in the Black-Scholes model). 2

The Black-Scholes model makes certain assumptions:

-   The option is European and can only be exercised at expiration.
-   No dividends are paid out during the life of the option.
-   Markets are efficient (i.e., market movements cannot be predicted).
-   There are no transaction costs in buying the option.
-   The risk-free rate and volatility of the underlying are known and constant.
-   The returns on the underlying asset are normally distributed.

While the original Black-Scholes model didn't consider the effects of dividends paid during the life of the option, the model is frequently adapted to account for dividends by determining the [ex-dividend](https://www.investopedia.com/terms/e/ex-dividend.asp) date value of the underlying stock.

## The Black Scholes Formula

The mathematics involved in the formula are complicated and can be intimidating. Fortunately, you don't need to know or even understand the math to use Black-Scholes modeling in your own strategies. Options traders have access to a variety of online options calculators, and many of today's trading platforms boast robust options analysis tools, including indicators and spreadsheets that perform the calculations and output the options pricing values.

The Black Scholes call option formula is calculated by multiplying the stock price by the cumulative standard normal probability distribution function. Thereafter, the net present value (NPV) of the strike price multiplied by the cumulative standard normal distribution is subtracted from the resulting value of the previous calculation.

In mathematical notation:

C\=StN(d1)−Ke−rtN(d2)where:d1\=lnStK+(r+σv22) tσs tandd2\=d1−σs twhere:C\=Call option priceS\=Current stock (or other underlying) priceK\=Strike pricer\=Risk-free interest ratet\=Time to maturityN\=A normal distribution\\begin{aligned} &C = S\_t N(d \_1) - K e ^{-rt} N(d \_2)\\\\ &\\textbf{where:}\\\\ &d\_1 = \\frac{ln\\frac{S\_t}{K} + (r+ \\frac{\\sigma ^{2} \_v}{2}) \\ t}{\\sigma\_s \\ \\sqrt{t}}\\\\ &\\text{and}\\\\ &d\_2 = d \_1 - \\sigma\_s \\ \\sqrt{t}\\\\ &\\textbf{where:}\\\\ &C = \\text{Call option price}\\\\ &S = \\text{Current stock (or other underlying) price}\\\\ &K = \\text{Strike price}\\\\ &r = \\text{Risk-free interest rate}\\\\ &t = \\text{Time to maturity}\\\\ &N = \\text{A normal distribution}\\\\ \\end{aligned}

## What Does the Black Scholes Model Tell You?

The Black Scholes model is one of the most important concepts in modern financial theory. It was developed in 1973 by Fischer Black, [Robert Merton](https://www.investopedia.com/terms/r/robert-c-merton.asp), and [Myron Scholes](https://www.investopedia.com/terms/m/myron-scholes.asp) and is still widely used today. It is regarded as one of the best ways of determining fair prices of options. The Black Scholes model requires five input variables: the strike price of an option, the current stock price, the time to expiration, the risk-free rate, and the volatility.

The model assumes stock prices follow a [lognormal](https://www.investopedia.com/articles/investing/102014/lognormal-and-normal-distribution.asp) distribution because asset prices cannot be negative (they are bounded by zero). This is also known as a [Gaussian](https://www.investopedia.com/articles/financial-theory/10/gaussian-models-statistics.asp) distribution. Often, asset prices are observed to have significant right skewness and some degree of kurtosis (fat tails). This means high-risk downward moves often happen more often in the market than a normal distribution predicts.

The assumption of lognormal underlying asset prices should thus show that implied volatilities are similar for each strike price according to the Black-Scholes model. However, since the market crash of 1987, implied volatilities for at the money options have been lower than those further out of the money or far in the money. The reason for this phenomena is the market is pricing in a greater likelihood of a high volatility move to the downside in the markets.

This has led to the presence of the volatility skew. When the implied volatilities for options with the same [expiration date](https://www.investopedia.com/terms/e/expiration-date.asp) are mapped out on a graph, a smile or skew shape can be seen. Thus, the Black-Scholes model is not efficient for calculating implied volatility.

## Limitations of the Black Scholes Model

As stated previously, the Black Scholes model is only used to price European options and does not take into account that U.S. options could be exercised before the expiration date. Moreover, the model assumes dividends and risk-free rates are constant, but this may not be true in reality. The [model also assumes volatility remains constant](https://www.investopedia.com/ask/answers/060115/how-implied-volatility-used-blackscholes-formula.asp) over the option's life, which is not the case because volatility fluctuates with the level of supply and demand.

Moreover, the model assumes that there are no transaction costs or taxes; that the risk-free interest rate is constant for all maturities; that short selling of securities with use of proceeds is permitted; and that there are no risk-less arbitrage opportunities. These assumptions can lead to prices that deviate from the real world where these factors are present.

Black, Scholes, Merton. © KhanAcademy
