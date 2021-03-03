---
alias: [Wilcoxon Test]
created: 2021-03-03T00:57:14 (UTC +11:00)
tags: [Wilcoxon Test Definition, How the Wilcoxon Test Is Used]
source: https://www.investopedia.com/terms/w/wilcoxon-test.asp
author: Adam Hayes
---

# Wilcoxon Test Definition

> ## Excerpt
> The Wilcoxon test, which refers to either the Rank Sum test or the Signed Rank test, is a nonparametric test that compares two paired groups.

---

How the Wilcoxon Test Is Used
## What Is the Wilcoxon Test?

The Wilcoxon test, which can refer to either the Rank Sum test or the Signed Rank test version, is a nonparametric statistical test that compares two paired groups. The tests essentially calculate the difference between sets of pairs and analyzes these differences to establish if they are [[statistically significantly]](https://www.investopedia.com/terms/s/statistical-significance.asp) different from one another.

### Key Takeaways

-   The Wilcoxon test is a nonparametric statistical test that compares two paired groups, and comes in two versions the Rank Sum test or the Signed Rank test.
-   The goal of the test is to determine if two or more sets of pairs are different from one another in a statistically significant manner.
-   Both versions of the model assume that the pairs in the data come from dependent populations, i.e. following the same person or share price through time or place.

## The Basics of the Wilcoxon Test

The Rank Sum and Signed Rank tests were both proposed by American statistician Frank Wilcoxon in a groundbreaking research paper published in 1945. The tests laid the foundation for [[hypothesis testing]](https://www.investopedia.com/terms/h/hypothesistesting.asp) of [[nonparametric statistics]](https://www.investopedia.com/terms/n/nonparametric-statistics.asp), which are used for population data that can be ranked but do not have numerical values, such as customer satisfaction or music reviews. Nonparametric distributions do not have parameters and cannot be defined by an equation as parametric distributions can.

The types of questions that the Wilcoxon Test can help us answer include things like:

-   Are test scores different from 5th grade to 5th grade for the same students?
-   Does a particular drug have an effect on health when tested on the same individuals?

These models assume that the data comes from two matched, or dependent, populations, following the same person or stock through time or place. The data is also assumed to be continuous as opposed to discrete. Because it is a non-parametric test it does not require a particular probability distribution of the dependent variable in the analysis.

## Versions of the Wilcoxon Test

-   The Wilcoxon Rank Sum test can be used to test the [[null hypothesis]](https://www.investopedia.com/terms/n/null_hypothesis.asp) that two populations have the same continuous distribution. The base assumptions necessary to employ this method of testing is that the data are from the same population and are paired, the data can be measured on at least an interval scale, and the data were chosen randomly and independently.
-   The Wilcoxon Signed Rank test assumes that there is information in the magnitudes and signs of the differences between paired observations. As the [[nonparametric]](https://www.investopedia.com/terms/n/nonparametric-statistics.asp) equivalent of the paired student's t-test, the Signed Rank can be used as an alternative to the [[t-test]](https://www.investopedia.com/terms/t/t-test.asp) when the population data does not follow a [[normal distribution]](https://www.investopedia.com/terms/n/normaldistribution.asp).

## Calculating a Wilcoxon Test Statistic

The steps for arriving at a Wilcoxon Signed-Ranks Test Statistic, _W,_ are as follows:

1.  For each item in a sample of _n_ items, obtain a difference score Di between two measurements (i.e., subtract one from the other).
2.  Neglect then positive or negative signs and obtain a set of _n_ absolute differences |Di|.
3.  Omit difference scores of zero, giving you a set of _n_ non-zero absolute difference scores, where _n' ≤ n_. Thus, _n'_ becomes the actual sample size.
4.  Then, assign ranks Ri from 1 to _n_ to each of the |Di| such that the smallest absolute difference score gets rank 1 and the largest gets rank _n_. If two or more |Di| are equal, they are each assigned the average rank of the ranks they would have been assigned individually had ties in the data not occurred.
5.  Now reassign the symbol “+” or “–” to each of the _n_ ranks Ri, depending on whether Di was originally positive or negative.
6.  The Wilcoxon test statistic _W_ is subsequently obtained as the sum of the positive ranks.

In practice, this test is easily performed using statistical analysis software or a spreadsheet.
