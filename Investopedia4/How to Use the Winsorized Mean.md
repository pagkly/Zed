---
alias: [Winsorized Mean]
created: 2021-03-03T00:59:18 (UTC +11:00)
tags: [Winsorized Mean Definition, How to Use the Winsorized Mean]
source: https://www.investopedia.com/terms/w/winsorized_mean.asp
author: Marshall Hargrave
---

# Winsorized Mean Definition

> ## Excerpt
> Winsorized mean is a method of averaging that initially replaces the smallest and largest values with the observations closest to them. This is done to limit the effect of abnormal extreme values, or outliers, on the calculation.

---

[[How to Use the Winsorized Mean]]
## What Is the Winsorized Mean?

Winsorized mean is a method of averaging that initially replaces the smallest and largest values with the observations closest to them. This is done to limit the effect of abnormal extreme values, or outliers, on the calculation. After replacing the values, [[arithmetic mean]](https://www.investopedia.com/terms/a/arithmeticmean.asp) formula is then used to calculate the winsorized mean.

## The Formula for the Winsorized Mean Is

Winsorized Mean \= xn…xn+1 + xn+2…xnNwhere:n \= The number of largest and smallest datapoints to be replaced by the observationclosest to themN \= Total number of data points\\begin{aligned} &\\text{Winsorized Mean}\\ =\\ \\frac{x\_{n}\\dots x\_{n+1}\\ +\\ x\_{n+2}\\dots x\_{n}}{N}\\\\ &\\textbf{where:}\\\\ &\\begin{aligned} n\\ =\\ &\\text{The number of largest and smallest data}\\\\ &\\text{points to be replaced by the observation}\\\\ &\\text{closest to them}\\end{aligned}\\\\ &N\\ =\\ \\text{Total number of data points} \\end{aligned}

Winsorized means are expressed in two ways. A "kn" winsorized mean refers to the replacement of the 'k' smallest and largest observations, where 'k' is an integer. An "X%" winsorized mean involves replacing a given percentage of values from both ends of the data.

## How to Calculate the Winsorized Mean

The winsorized mean is calculated by replacing the smallest and largest data points, then summing all the data points and dividing the sum by the total number of data points.

## What Does the Winsorized Mean Tell You?

The winsorized mean is less sensitive to outliers because it can replace them with less extreme values. That is, it is less susceptible to outlines versus the [[mean]](https://www.investopedia.com/terms/m/mean.asp). However, if a distribution has fat tails, the effect of removing the highest and lowest values in the distribution [[Will|will]] have little influence because of the high number of variability in the [[distribution]](https://www.investopedia.com/terms/d/distribution.asp) figures.

### Key Takeaways

-   An averaging method that includes replacing the smallest and largest values with the observations closest to them.
-   Less sensitive to outliers because it can replace them with less extreme values.
-   It’s unlike the trimmed mean, which involves removing data points—although the result of the two tend to be close.

## Example of How to Use Winsorized Mean

One can calculate the winsorized mean for the following data set: 1, 5, 7, 8, 9, 10, 14. In this example, we assume the winsorized mean is in the first order, we replace the smallest and largest values with their nearest observations.

The dataset now appears as follows: 5, 5, 7, 8, 9, 10, 10. Taking an arithmetic average of the new set produces a winsorized mean of 7.7, or (5 + 5 + 7 + 8 + 9 + 10 + 10) divided by 7.

Or consider a 20% winsorized mean that takes the top 10% and bottom 10% and replaces them with their next closest value. We [[Will|will]] winsorize the following data set: 2, 4, 7, 8, 11, 14, 18, 23, 23, 27, 35, 40, 49, 50, 55, 60, 61, 61, 62, 75. The two smallest and largest data points, or 10%, will be replaced with their next closest value. Thus, the new data set is: 7, 7, 7, 8, 11, 14, 18, 23, 23, 27, 35, 40, 49, 50, 55, 60, 61, 61, 61, 61. The winsorized mean is 33.9, or the total of the data (678) divided by the total number of data points (20).

## The Difference Between Winsorized Mean and Trimmed Mean

The winsorized mean includes modifying data points, while the [[trimmed mean]](https://www.investopedia.com/terms/t/trimmed_mean.asp) involves removing data points. It’s common for the winsorized mean and trimmed mean to be close.

## Limitations of Using Winsorized Mean

One major downside for winsorized means is that they introduce bias into the data set. Granted, the data set is ideally less biased after the modification than if outliers were left in.

## Learn More About Winsorized Mean

For related insight, read more about the [[differences between key mean calculations]](https://www.investopedia.com/ask/answers/06/geometricmean.asp).
