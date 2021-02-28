---
alias: [Backtesting Definition]
created: 2021-02-28T21:18:49 (UTC +11:00)
tags: [Backtesting Definition, Backtesting Definition]
source: https://www.investopedia.com/terms/b/backtesting.asp
author: By
James Chen
---

# Backtesting Definition

> ## Excerpt
> Backtesting evaluates the effectiveness of a trading strategy by running it against historical data to see how it would have fared.

---

Backtesting Definition
## What Is Backtesting?

Backtesting is the general method for seeing how well a strategy or model would have done [ex-post](https://www.investopedia.com/terms/e/expost.asp). Backtesting assesses the viability of a [trading strategy](https://www.investopedia.com/terms/t/trading-strategy.asp) by discovering how it would play out using historical data. If backtesting works, traders and analysts may have the confidence to employ it going forward.

### Key Takeaways

-   Backtesting assesses the viability of a trading strategy or pricing model by discovering how it would have played out retrospectively using historical data.
-   The underlying theory is that any strategy that worked well in the past is likely to work well in the future, and conversely, any strategy that performed poorly in the past is likely to perform poorly in the future.
-   When testing an idea on historical data, it is beneficial to reserve a time period of historical data for testing purposes. If it is successful, testing it on alternate time periods or out-of-sample data can help confirm its potential viability.

## Understanding Backtesting

Backtesting allows a trader to simulate a trading strategy using [historical data](https://www.investopedia.com/terms/h/historical-returns.asp) to generate results and analyze risk and profitability before risking any actual capital.

A well-conducted backtest that yields positive results assures [traders](https://www.investopedia.com/terms/t/trader.asp) that the strategy is fundamentally sound and is likely to yield profits when implemented in reality. In contrast, a well-conducted backtest that yields suboptimal results will prompt traders to alter or reject the strategy.

Particularly complicated trading strategies, such as strategies implemented by automated trading systems, rely heavily on backtesting to prove their worth, as they are too arcane to evaluate otherwise.

As long as a trading idea can be quantified, it can be backtested. Some traders and investors may seek the expertise of a qualified programmer to develop the idea into a testable form. Typically, this involves a programmer coding the idea into the proprietary language hosted by the [trading platform](https://www.investopedia.com/terms/t/trading-platform.asp).

The programmer can incorporate user-defined input variables that allow the trader to "tweak" the system. An example of this would be in the [simple moving average](https://www.investopedia.com/terms/s/sma.asp) (SMA) crossover system. The trader would be able to input (or change) the lengths of the two moving averages used in the system. The trader could then backtest to determine which lengths of moving averages would have performed the best on the historical data.

## The Ideal Backtesting Scenario

The ideal backtest chooses sample data from a relevant time period of a duration that reflects a variety of market conditions. In this way, one can better judge whether the results of the backtest represent a fluke or sound trading.

The historical data set must include a truly [representative sample](https://www.investopedia.com/terms/r/representative-sample.asp) of stocks, including those of companies that eventually went [bankrupt](https://www.investopedia.com/terms/b/bankruptcy.asp) or were sold or liquidated. The alternative, including only data from historical stocks that are still around today, will produce artificially high returns in backtesting.

A backtest should consider all trading costs, however insignificant, as these can add up over the course of the backtesting period and drastically affect the appearance of a strategy’s profitability. Traders should ensure that their backtesting software accounts for these costs.

Out-of-sample testing and forward performance testing provide further confirmation regarding a system's effectiveness and can show a system's true colors before real cash is on the line. A strong [correlation](https://www.investopedia.com/terms/c/correlation.asp) between backtesting, out-of-sample, and forward performance testing results is vital for determining the viability of a trading system. 

## Backtesting vs. Forward Performance Testing

Forward performance testing, also known as [paper trading](https://www.investopedia.com/terms/p/papertrade.asp), provides traders with another set of out-of-sample data on which to evaluate a system. Forward performance testing is a simulation of actual trading and involves following the system's logic in a live market. It is also called paper trading since all trades are executed on paper only; that is, trade entries and exits are documented along with any profit or loss for the system, but no real trades are executed.

An important aspect of forward performance testing is to follow the system's logic exactly; otherwise, it becomes difficult, if not impossible, to accurately evaluate this step of the process. Traders should be honest about any trade entries and exits and avoid behavior such as [cherry-picking](https://www.investopedia.com/terms/c/cherrypicking.asp) trades or not including a trade on paper rationalizing that "I would have never taken that trade." If the trade would have occurred following the system's logic, it should be documented and evaluated.

## Backtesting vs. Scenario Analysis

While backtesting uses actual historical data to test for fit or success, [scenario analysis](https://www.investopedia.com/terms/s/scenario_analysis.asp) makes use of hypothetical data that simulates various possible outcomes. For instance, scenario analysis will simulate specific changes in the values of the portfolio's securities or key factors that take place, such as a change in the [interest rate](https://www.investopedia.com/terms/i/interestrate.asp).

Scenario analysis is commonly used to estimate changes to a [portfolio's](https://www.investopedia.com/terms/p/portfolio.asp) value in response to an unfavorable event and may be used to examine a theoretical worst-case scenario.

## Some Pitfalls of Backtesting

For backtesting to provide meaningful results, traders must develop their strategies and test them in good faith, avoiding bias as much as possible. That means the strategy should be developed without relying on the data used in backtesting.

That’s harder than it seems. Traders generally build strategies based on historical data. They must be strict about testing with different data sets from those they train their models on. Otherwise, the backtest will produce glowing results that mean nothing.

Similarly, traders must avoid data dredging, in which they test a wide range of hypothetical strategies against the same set of data, which will also produce successes that fail in [real-time](https://www.investopedia.com/terms/r/real_time.asp) markets because there are many invalid strategies that would beat the market over a specific time period by chance.

One way to compensate for the tendency to data dredge or cherry-pick is to use a strategy that succeeds in the relevant, or in-sample, time period and backtest it with data from a different, or out-of-sample, time period. If in-sample and out-of-sample backtests yield similar results, then they are more likely to be proved valid.
