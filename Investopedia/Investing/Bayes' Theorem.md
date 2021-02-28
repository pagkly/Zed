---
created: 2021-02-25T21:18:49 (UTC +11:00)
tags: []
source: https://www.investopedia.com/terms/b/bayes-theorem.asp
author: By
Adam Hayes
---

# Bayes' Theorem Definition

> ## Excerpt
> Bayes' theorem is a mathematical formula for determining conditional probability.

---
## What Is Bayes' Theorem?

Bayes' theorem, named after 18th-century British mathematician Thomas Bayes, is a mathematical formula for determining [conditional probability](https://www.investopedia.com/terms/c/conditional_probability.asp). Conditional probability is the likelihood of an outcome occurring, based on a previous outcome occurring. Bayes' theorem provides a way to revise existing predictions or theories (update probabilities) given new or additional evidence. In finance, Bayes' theorem can be used to rate the [risk](https://www.investopedia.com/terms/r/risk.asp) of lending money to potential borrowers.

Bayes' theorem is also called Bayes' Rule or Bayes' Law and is the foundation of the field of Bayesian statistics.

### Key Takeaways

-   Bayes' theorem allows you to update predicted probabilities of an event by incorporating new information.
-   Bayes' theorem was named after 18th-century mathematician Thomas Bayes.
-   It is often employed in finance in updating risk evaluation.

## Understanding Bayes' Theorem

Applications of the theorem are widespread and not limited to the financial realm. As an example, Bayes' theorem can be used to determine the accuracy of medical test results by taking into consideration how likely any given person is to have a disease and the general accuracy of the test. Bayes' theorem relies on incorporating [prior probability](https://www.investopedia.com/terms/p/prior_probability.asp) distributions in order to generate [posterior probabilities](https://www.investopedia.com/terms/p/posterior-probability.asp). Prior probability, in Bayesian statistical inference, is the probability of an event before new data is collected. This is the best rational assessment of the probability of an outcome based on the current knowledge before an experiment is performed. Posterior probability is the revised probability of an event occurring after taking into consideration new information. Posterior probability is calculated by updating the prior probability by using Bayes' theorem. In statistical terms, the posterior probability is the probability of event A occurring given that event B has occurred.

Bayes' theorem thus gives the probability of an event based on new information that is, or may be related, to that event. The formula can also be used to see how the probability of an event occurring is affected by hypothetical new information, supposing the new information will turn out to be true. For instance, say a single card is drawn from a complete deck of 52 cards. The probability that the card is a king is four divided by 52, which equals 1/13 or approximately 7.69%. Remember that there are four kings in the deck. Now, suppose it is revealed that the selected card is a face card. The probability the selected card is a king, given it is a face card, is four divided by 12, or approximately 33.3%, as there are 12 face cards in a deck.

## Formula For Bayes' Theorem

P(A∣B)\=P(A⋂B)P(B)\=P(A)⋅P(B∣A)P(B)where:P(A)\= The probability of A occurringP(B)\= The probability of B occurringP(A∣B)\=The probability of A given BP(B∣A)\= The probability of B given AP(A⋂B))\= The probability of both A and B occurring\\begin{aligned} &P\\left(A|B\\right)=\\frac{P\\left(A\\bigcap{B}\\right)}{P\\left(B\\right)}=\\frac{P\\left(A\\right)\\cdot{P\\left(B|A\\right)}}{P\\left(B\\right)}\\\\ &\\textbf{where:}\\\\ &P\\left(A\\right)=\\text{ The probability of A occurring}\\\\ &P\\left(B\\right)=\\text{ The probability of B occurring}\\\\ &P\\left(A|B\\right)=\\text{The probability of A given B}\\\\ &P\\left(B|A\\right)=\\text{ The probability of B given A}\\\\ &P\\left(A\\bigcap{B}\\right))=\\text{ The probability of both A and B occurring}\\\\ \\end{aligned}

## Examples of Bayes' Theorem

Below are two examples of Bayes' theorem in which the first example shows how the formula can be derived in a stock investing example using Amazon.com Inc. ([AMZN](https://www.investopedia.com/markets/quote?tvwidgetsymbol=amzn)). The second example applies Bayes' theorem to pharmaceutical drug testing.

### Deriving the Bayes' Theorem Formula

Bayes' theorem follows simply from the axioms of conditional probability. Conditional probability is the probability of an event given that another event occurred. For example, a simple probability question may ask: "What is the probability of Amazon.com's stock price falling?" Conditional probability takes this question a step further by asking: "What is the probability of AMZN stock price falling _given that_ the [[[DJIA |Dow Jones Industrial Average]]](https://www.investopedia.com/terms/d/[[DJIA |djia]].asp) ([[DJIA |DJIA]]) index fell earlier?"

The conditional probability of A given that B has happened can be expressed as:

If A is: "AMZN price falls" then P(AMZN) is the probability that AMZN falls; and B is: "[[DJIA ]]is already down," and P([[DJIA |DJIA]]) is the probability that the [[DJIA ]]fell; then the conditional probability expression reads as "the probability that AMZN drops given a [[DJIA ]]decline is equal to the probability that AMZN price declines and [[DJIA ]]declines over the probability of a decrease in the [[DJIA ]]index.

P(AMZN|[[DJIA |DJIA]]) = P(AMZN and DJIA) / P(DJIA)

P(AMZN and DJIA) is the probability of _both_ A and B occurring. This is also the same as the probability of A occurring multiplied by the probability that B occurs given that A occurs, expressed as P(AMZN) x P(DJIA|AMZN). The fact that these two expressions are equal leads to Bayes' theorem, which is written as:

if, P(AMZN and DJIA) = P(AMZN) x P(DJIA|AMZN) = P(DJIA) x P(AMZN|DJIA)

then, P(AMZN|DJIA) = \[P(AMZN) x P(DJIA|AMZN)\] / P(DJIA).

Where P(AMZN) and P(DJIA) are the probabilities of Amazon and the Dow Jones falling, without regard to each other.

The formula explains the relationship between the probability of the hypothesis before seeing the evidence that P(AMZN), and the probability of the hypothesis after getting the evidence P(AMZN|DJIA), given a hypothesis for Amazon given evidence in the Dow.

### Numerical Example Of Bayes' Theorem

As a numerical example, imagine there is a drug test that is 98% accurate, meaning 98% of the time it shows a true positive result for someone using the drug and 98% of the time it shows a true negative result for nonusers of the drug. Next, assume 0.5% of people use the drug. If a person selected at random tests positive for the drug, the following calculation can be made to see whether the probability the person is actually a user of the drug.

(0.98 x 0.005) / \[(0.98 x 0.005) + ((1 - 0.98) x (1 - 0.005))\] = 0.0049 / (0.0049 + 0.0199) = 19.76%

Bayes' theorem shows that even if a person tested positive in this scenario, it is actually much more likely the person is not a user of the drug.
