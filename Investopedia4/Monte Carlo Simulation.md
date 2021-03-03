---
alias: [Monte Carlo Simulation]
created: 2021-03-02T22:09:38 (UTC +11:00)
tags: [Monte Carlo Simulation Definition, Monte Carlo Simulation]
source: https://www.investopedia.com/terms/m/montecarlosimulation.asp
author: Will Kenton
---

# [[Monte Carlo Simulation]] Definition

> ## Excerpt
> Monte Carlo simulations are used to model the probability of different outcomes in a process that cannot easily be predicted.

---

[[Monte Carlo Simulation]]
## What Is a [[Monte Carlo Simulation]]?

Monte Carlo simulations are used to model the probability of different outcomes in a process that cannot easily be predicted due to the intervention of [[random variables]](https://www.investopedia.com/terms/r/random-variable.asp). It is a technique used to understand the impact of [[Risk|risk]] and uncertainty in prediction and forecasting models.

A [[Monte Carlo Simulation|Monte Carlo simulation]] can be used to tackle a range of problems in virtually every field such as [[Finance|finance]], engineering, [[Supply|supply]] chain, and science. It is also referred to as a multiple probability simulation.

### Key Takeaways

-   A [[Monte Carlo Simulation|Monte Carlo simulation]] is a model used to predict the probability of different outcomes when the intervention of random variables is present.
-   Monte Carlo simulations help to explain the impact of [[Risk|risk]] and uncertainty in prediction and forecasting models.
-   A variety of fields utilize Monte Carlo simulations, including [[Finance|finance]], engineering, [[Supply|supply]] chain, and science.
-   The basis of a [[Monte Carlo Simulation|Monte Carlo simulation]] involves assigning multiple values to an uncertain variable to achieve multiple results and then to average the results to obtain an estimate.
-   Monte Carlo simulations assume perfectly efficient markets.

## Understanding a [[Monte Carlo Simulation]]

When faced with significant uncertainty in the process of making a forecast or estimation, rather than just replacing the uncertain variable with a single average number, the [[Monte Carlo Simulation]] might prove to be a better solution by using multiple values.

Since business and [[Finance|finance]] are plagued by random variables, Monte Carlo simulations have a vast array of potential applications in these fields. They are used to estimate the probability of cost overruns in large projects and the likelihood that an asset price [[Will|will]] move in a certain way.

[Telecoms](https://www.investopedia.com/ask/answers/070815/what-telecommunications-sector.asp) use them to assess network performance in different scenarios, helping them to optimize the network. Analysts use them to assess the [[Risk|risk]] that an entity [[Will|will]] [[Default|default]], and to analyze [[derivatives]](https://www.investopedia.com/terms/d/[[Derivative|derivative]].asp) such as [[options]](https://www.investopedia.com/terms/o/option.asp).

Insurers and oil well drillers also use them. Monte Carlo simulations have countless applications outside of business and [[Finance|finance]], such as in meteorology, astronomy, and particle physics.

## [[Monte Carlo Simulation]] History

Monte Carlo simulations are named after the popular gambling destination in Monaco, since chance and random outcomes are central to the modeling technique, much as they are to games like roulette, dice, and slot machines.

The technique was first developed by Stanislaw Ulam, a mathematician who worked on the Manhattan Project. After the war, while recovering from brain surgery, Ulam entertained himself by playing countless games of solitaire. He became interested in plotting the outcome of each of these games in order to observe their distribution and determine the probability of winning. After he shared his idea with John Von Neumann, the two collaborated to develop the [[Monte Carlo Simulation|Monte Carlo simulation]].

## [[Monte Carlo Simulation]] Method

The basis of a [[Monte Carlo Simulation|Monte Carlo simulation]] is that the probability of varying outcomes cannot be determined because of [[Random Variable|random variable]] interference. Therefore, a Monte Carlo simulation focuses on constantly repeating random samples to achieve certain results.

A [[Monte Carlo Simulation|Monte Carlo simulation]] takes the variable that has uncertainty and assigns it a random value. The model is then run and a result is provided. This process is repeated again and again while assigning the variable in question with many different values. Once the simulation is complete, the results are averaged together to provide an estimate.

## Calculating a [[Monte Carlo Simulation]]

One way to employ a [[Monte Carlo Simulation|Monte Carlo simulation]] is to model possible movements of asset prices [[using Excel]](https://www.investopedia.com/articles/investing/093015/create-monte-carlo-simulation-using-excel.asp) or a similar program. There are two components to an asset's price movement: drift, which is a constant directional movement, and a random input, which represents market [[volatility]](https://www.investopedia.com/terms/v/[[Volatility|volatility]].asp).

By analyzing historical price data, you can determine the drift, [[standard deviation]](https://www.investopedia.com/terms/s/standarddeviation.asp), [[variance]](https://www.investopedia.com/terms/v/variance.asp), and average price movement of a [[Security|security]]. These are the building blocks of a [[Monte Carlo Simulation|Monte Carlo simulation]].

To project one possible price trajectory, use the historical price data of the asset to generate a series of periodic daily returns using the natural logarithm (note that this equation differs from the usual percentage change formula):

Periodic Daily [[Return]]\=ln(Day’s PricePrevious Day’s Price)\\begin{aligned} &\\text{Periodic Daily Return} = ln \\left ( \\frac{ \\text{Day's Price} }{ \\text{Previous Day's Price} } \\right ) \\\\ \\end{aligned}

Next use the AVERAGE, STDEV.P, and VAR.P functions on the entire resulting series to obtain the average daily [[Return|return]], [[Standard Deviation|standard deviation]], and variance inputs, respectively. The drift is equal to:

Drift\=Average Daily [[Return]]−Variance2where:Average Daily Return\=Produced from Excel’sAVERAGE function from periodic daily returns seriesVariance\=Produced from Excel’sVAR.P function from periodic daily returns series\\begin{aligned} &\\text{Drift} = \\text{Average Daily Return} - \\frac{ \\text{Variance} }{ 2 } \\\\ &\\textbf{where:} \\\\ &\\text{Average Daily Return} = \\text{Produced from Excel's} \\\\ &\\text{AVERAGE function from periodic daily returns series} \\\\ &\\text{Variance} = \\text{Produced from Excel's} \\\\ &\\text{VAR.P function from periodic daily returns series} \\\\ \\end{aligned}

Alternatively, drift can be set to 0; this choice reflects a certain theoretical orientation, but the difference [[Will|will]] not be huge, at least for shorter time frames.

Next obtain a random input:

Random Value\=σ×NORMSINV(RAND())where:σ\=Standard deviation, produced from Excel’sSTDEV.P function from periodic daily returns seriesNORMSINV and RAND\=Excel functions\\begin{aligned} &\\text{Random Value} = \\sigma \\times \\text{NORMSINV(RAND())} \\\\ &\\textbf{where:} \\\\ &\\sigma = \\text{[[Standard Deviation|Standard deviation]], produced from Excel's} \\\\ &\\text{STDEV.P function from periodic daily returns series} \\\\ &\\text{NORMSINV and RAND} = \\text{Excel functions} \\\\ \\end{aligned}

The equation for the following day's price is:

Next Day’s Price\=Today’s Price×e(Drift+Random Value)\\begin{aligned} &\\text{Next Day's Price} = \\text{Today's Price} \\times e^{ ( \\text{Drift} + \\text{Random Value} ) }\\\\ \\end{aligned}

To take _e_ to a given power _x_ in Excel, use the EXP function: EXP(x). Repeat this calculation the desired number of times (each repetition represents one day) to obtain a simulation of future price movement. By generating an arbitrary number of simulations, you can assess the probability that a [[Security|security]]'s price [[Will|will]] follow a given trajectory.

Here is an example, showing around 30 projections for Time Warner Inc's [[Stock|stock]] for a portion of November 2015:

The frequencies of different outcomes generated by this simulation [[Will|will]] form a [[normal distribution]](https://www.investopedia.com/terms/n/normaldistribution.asp), that is, a [[bell curve]](https://www.investopedia.com/terms/b/bell-curve.asp). The most likely [[Return|return]] is in the middle of the curve, meaning there is an equal chance that the actual return will be higher or lower than that value.

The probability that the actual [[Return|return]] [[Will|will]] be within one [[Standard Deviation|standard deviation]] of the most probable ("expected") rate is 68%; that it will be within two standard deviations is 95%, and that it will be within three standard deviations is 99.7%. Still, there is no guarantee that the most expected outcome will occur, or that actual movements will not exceed the wildest projections.

Crucially, Monte Carlo simulations ignore everything that is not built into the price movement ([macro trends](https://www.investopedia.com/terms/m/macro-environment.asp), company leadership, hype, [[cyclical factors]](https://www.investopedia.com/terms/b/businesscycle.asp)); in other words, they assume perfectly [[efficient markets]](https://www.investopedia.com/terms/e/efficientmarkethypothesis.asp).

For example, the fact that Time Warner lowered its guidance for the year on Nov 4 is not reflected here, except in the price movement for that day, the last value in the data; if that fact were accounted for, the bulk of simulations would probably not predict a modest rise in price.
