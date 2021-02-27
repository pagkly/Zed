---
created: 2021-02-25T22:32:23 (UTC +11:00)
tags: []
source: https://www.investopedia.com/terms/c/correlation.asp
author: By
Adam Hayes
---

# Correlation Definition

> ## Excerpt
> Correlation is a statistical measure of how two securities move in relation to each other.

---
## What Is Correlation?

Correlation, in the finance and investment industries, is a statistic that measures the degree to which two securities move in relation to each other. Correlations are used in advanced [portfolio management](https://www.investopedia.com/terms/p/portfoliomanagement.asp), computed as the [[[Correlation Coefficient]]](https://www.investopedia.com/terms/c/correlationcoefficient.asp), which has a value that must fall between -1.0 and +1.0.

### Key Takeaways

-   Correlation is a statistic that measures the degree to which two variables move in relation to each other.
-   In finance, the correlation can measure the movement of a stock with that of a benchmark index, such as the S&P 500.
-   Correlation measures association, but doesn't show if x causes y or vice versa, or if the association is caused by a third–perhaps unseen–factor.

## Understanding Correlation

Correlation shows the strength of a relationship between two variables and is expressed numerically by the [[Correlation Coefficient]]. The [[Correlation Coefficient]]'s values range between -1.0 and 1.0. A perfect [positive correlation](https://www.investopedia.com/terms/p/positive-correlation.asp) means that the [[Correlation Coefficient]] is exactly 1. This implies that as one security moves, either up or down, the other security moves in lockstep, in the same direction. A perfect [negative correlation](https://www.investopedia.com/terms/n/negative-correlation.asp) means that two assets move in opposite directions, while a zero correlation implies no linear relationship at all.

For example, large-cap mutual funds generally have a high positive correlation to the [Standard and Poor's (S&P) 500 Index](https://www.investopedia.com/terms/s/sp500.asp) or nearly one. Small-cap stocks have a positive correlation to the S&P, but it's not as high or approximately 0.8.

However, [put option](https://www.investopedia.com/terms/p/putoption.asp) prices and their underlying stock prices will tend to have a negative correlation. For review, a put option gives the owner the right, but not the obligation, to sell a specific amount of an [underlying security](https://www.investopedia.com/terms/u/underlying-security.asp) at a pre-determined price within a specified time frame. Put option contracts become more profitable when the underlying stock price decreases. In other words, as the stock price increases, the put option prices go down, which is a direct and high-magnitude negative correlation.

## The Formula for Correlation Is

r\=∑(X−X‾)(Y−Y‾)∑(X−X‾)2(Y−Y‾)2where:r\=the correlation coefficientX‾\=the average of observations of variable XY‾\=the average of observations of variable Y

$$
\begin{aligned} 
&r = 
\frac{\sum (X - \overline{X})(Y - \overline{Y})}{\sqrt{\sum (X - \overline{X})^2} \sqrt{(Y - \overline{Y})^2}} 
\\ &\textbf{where:}\\ &r = \text{the Correlation Coefficient}
\\ &\overline{X} = \text{the average of observations of variable }X
\\ &\overline{Y} = \text{the average of observations of variable }Y
\\ 
\end{aligned}
$$

Correlation does not imply causation!

## Example of Correlation

Investment managers, traders, and analysts find it very important to calculate correlation because the [risk reduction benefits of diversification](https://www.investopedia.com/articles/basics/11/5-portfolio-protection-strategies.asp) rely on this statistic. Financial spreadsheets and software can calculate the value of correlation quickly.

As a hypothetical example, assume that an analyst needs to calculate the correlation for the following two data sets:

**X:** (41, 19, 23, 40, 55, 57, 33)

**Y:** (94, 60, 74, 71, 82, 76, 61)

There are three steps involved in finding the correlation. The first is to add up all the X values to find SUM(X), add up all the Y values to fund SUM(Y) and multiply each X value with its corresponding Y value and sum them to find SUM(X,Y):

SUM(X) = (41 + 19 + 23 + 40 + 55 + 57 + 33) = 268

SUM(Y) = (94 + 60 + 74 + 71 + 82 + 76 + 61) = 518

SUM(X,Y) = (41 x 94) + (19 x 60) + (23 x 74) + ... (33 x 61) = 20,391

The next step is to take each X value, square it, and sum up all these values to find SUM(x^2). The same must be done for the Y values:

SUM(X^2) = (41^2) + (19^2) + (23^2) + ... (33^2) = 11,534

SUM(Y^2) = (94^2) + (60^2) + (74^2) + ... (61^2) = 39,174

Noting that there are seven observations, n, the following formula can be used to find the [[Correlation Coefficient]], r:

r\=n×(SUM(X,Y)−(SUM(X)×(SUM(Y)))(n×SUM(X)2)×(n×SUM(Y2)−SUM(Y)2)\\begin{aligned} &r = \\dfrac{n \\times (SUM(X,Y) - (SUM(X) \\times (SUM(Y)))}{\\sqrt{(n \\times SUM(X)^2) \\times (n \\times SUM(Y^2) - SUM(Y)^2)}} \\end{aligned}

In this example, the correlation would be:

r = (7 x 20,391 - (268 x 518) / SquareRoot((7 x 11,534 - 268^2) x (7 x 39,174 - 518^2)) = 3,913 / 7,248.4 = 0.54
