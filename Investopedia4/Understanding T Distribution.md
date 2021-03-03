---
alias: [T Distribution]
created: 2021-03-02T23:50:10 (UTC +11:00)
tags: [T Distribution Definition, Understanding T Distribution]
source: https://www.investopedia.com/terms/t/tdistribution.asp
author: Adam Hayes
---

# T Distribution Definition

> ## Excerpt
> A T distribution is a type of probability function that is appropriate for estimating population parameters for small sample sizes or unknown variances.

---

[[Understanding T Distribution]]
## What Is a T Distribution?

The T distribution, also known as the Student’s t-distribution, is a type of [[probability distribution]](https://www.investopedia.com/terms/p/probabilitydistribution.asp) that is similar to the [[Normal Distribution|normal distribution]] with its bell shape but has heavier tails. T distributions have a greater chance for extreme values than normal distributions, hence the fatter tails.

### Key Takeaways

-   The T distribution is a continuous probability distribution of the [[Z|z]]-score when the estimated [[Standard Deviation|standard deviation]] is used in the denominator rather than the true standard deviation.
-   The T distribution, like the [[Normal Distribution|normal distribution]], is bell-shaped and symmetric, but it has heavier tails, which means it tends to produce values that fall far from its mean.
-   T-tests are used in statistics to estimate significance.

## What Does a T Distribution Tell You? 

Tail heaviness is determined by a parameter of the T distribution called [[degrees of freedom]](https://www.investopedia.com/terms/d/degrees-of-freedom.asp), with smaller values giving heavier tails, and with higher values making the T distribution resemble a standard [[Normal Distribution|normal distribution]] with a mean of 0, and a [[Standard Deviation|standard deviation]] of 1. The T distribution is also known as "Student's T Distribution."

Image by Sabrina Jiang © Investopedia 2020

When a sample of n observations is taken from a normally distributed population having mean M and [[Standard Deviation|standard deviation]] D, the sample mean, m, and the sample standard deviation, d, [[Will|will]] differ from M and D because of the randomness of the sample.

A [[Z|z]]-score can be calculated with the population [[Standard Deviation|standard deviation]] as Z = (x – M)/D, and this value has the [[Normal Distribution|normal distribution]] with mean 0 and standard deviation 1. But when using the estimated standard deviation, a t-score is calculated as T = (m – M)/{d/sqrt(n)}, the difference between d and D makes the distribution a T distribution with (n - 1) degrees of freedom rather than the normal distribution with mean 0 and standard deviation 1. 

## Example of How to Use a T-Distribution

Take the following example for how t-distributions are put to use in statistical analysis. First, remember that a confidence interval for the mean is a range of values, calculated from the data, meant to capture a “population” mean. This interval is m +- t\*d/sqrt(n), where t is a critical value from the T distribution.

For instance, a 95% confidence interval for the mean [[Return|return]] of the Dow Jones Industrial Average in the 27 trading days prior to 9/11/2001, is -0.33%, (+/- 2.055) \* 1.07 / sqrt(27), giving a (persistent) mean return as some number between -0.75% and +0.09%. The number 2.055, the amount of standard errors to adjust by, is found from the T distribution.

Because the T distribution has fatter tails than a [[Normal Distribution|normal distribution]], it can be used as a model for financial returns that exhibit excess [[Kurtosis|kurtosis]], which [[Will|will]] allow for a more realistic calculation of Value at [[Risk]] ([VaR](https://www.investopedia.com/terms/v/var.asp)) in such cases.

## The Difference Between a T Distribution and a [[Normal Distribution]] 

Normal distributions are used when the population distribution is assumed to be normal. The T distribution is similar to the [[Normal Distribution|normal distribution]], just with fatter tails. Both assume a normally distributed population. T distributions have higher [[Kurtosis|kurtosis]] than normal distributions. The probability of getting values very far from the mean is larger with a T distribution than a normal distribution.

## Limitations of Using a T Distribution 

The T distribution can skew exactness relative to the [[Normal Distribution|normal distribution]]. Its shortcoming only arises when there’s a need for perfect normality. However, the difference between using a normal and T distribution is relatively small.
